---
title: Gestion de la concurrence et boucle des événements
slug: Web/JavaScript/EventLoop
tags:
  - Avancé
  - Guide
  - JavaScript
translation_of: Web/JavaScript/EventLoop
original_slug: Web/JavaScript/Concurrence_et_boucle_des_événements
---
{{jsSidebar("Advanced")}}

JavaScript gère la concurrence grâce à une « boucle d'événements ». Ce modèle est différent de la gestion faite par des langages comme C ou Java.

## Notions liées à l'exécution

Les sections qui suivent décrivent un modèle théorique. En réalité, les moteurs JavaScript implémentent et optimisent fortement la sémantique décrite ici.

### Représentation visuelle

![Stack, heap, queue](the_javascript_runtime_environment_example.svg)

### La pile d'appels (_stack_)

Les appels de fonction forment une pile de cadre (_frames_).

```js
function f(b){
  var a = 12;
  return a + b + 35;
}

function g(x){
  var m = 4;
  return f(m * x);
}

console.log(g(21)); // affichera 131
```

Lors de l'appel à `g`, on crée un premier cadre contenant les arguments de `g` ainsi que les variables locales. Quand `g` appelle `f`, un deuxième cadre est créé et placé sur le premier et contient les arguments de `f` ainsi que les variables locales. Lorsque `f` a fini et renvoyé son résultat, le cadre correspondant (celui qui est sur le dessus) est retiré de la pile (il reste donc le cadre lié à l'appel de `g`). Quand `g` a fini grâce aux informations transmises, la pile devient vide.

### Le tas (_heap_)

Les objets sont alloués en mémoire dans un tas qui désigne une zone de la mémoire sans structure particulière.

### La file (_queue_)

Un environnement d'exécution JavaScript (_runtime_) contient une queue de messages à traiter. Chaque message est associé à une fonction. Lorsque la pile est vide ou a suffisamment d'espace, on retire un message de la queue et on le traite. Le traitement consiste à appeler la fonction associée au message (et donc à créer le cadre dans la pile d'appel). Le traitement d'un message est fini lorsque la pile d'appels redevient vide.

## La boucle d'événements

La boucle d'événement tire principalement son nom de son implémentation. Celle-ci ressemble à :

```js
while (queue.attendreMessage()){
  queue.traiterProchainMessage();
}
```

`queue.attendreMessage` est un fonction synchrone qui attend un message même s'il n'y en a aucun à traiter.

### Traiter de A à Z (_run-to-completion_)

Chaque message sera traité complètement avant tout autre message. Cela permet de savoir que, lorsqu'une fonction s'exécute, on ne peut pas observer l'exécution d'un autre code qui prendrait le pas (modifiant les données de la fonction par exemple). Le modèle de _thread_ utilisé par le langage C, par exemple, que la fonction puisse être interrompue à tout moment pour permettre à un autre _thread_ d'exécuter un autre code.

Ce modèle possède un désavantage : lorsqu'un message prend trop de temps à être traité, l'application ne peut plus gérer les interactions utilisateur comme les clics ou le défilement. Généralement, le navigateur affiche alors « Le script met trop de temps à répondre ». Une bonne pratique consiste à rendre le traîtement de message le plus court possible et à découper le message problématique en plusieurs messages.

### L'ajout de messages

Dans les navigateurs web, des messages sont ajoutés à chaque fois qu'un événement se produit et qu'un gestionnaire d'événements y est attaché. S'il n'y a pas d'écouteur (_listener_) pour intercepter l'événement, il est perdu. Ainsi, si on clique un élément qui possède un gestionnaire d'événements pour les clics, un message sera ajouté (il en va de même avec les autres événements).

La fonction [`setTimeout`](/fr/docs/DOM/window.setTimeout) est appelée avec deux arguments : un message à la suite de la queue et la durée à attendre (optionnelle, par défaut elle vaut 0). La durée représente le temps minimal à attendre avant que le message soit placé dans la queue. S'il n'y a pas d'autre message dans la queue, le message sera traîté directement. En revanche, s'il y a d'autres messages auparavant, le message de `setTimeout` devra attendre la fin du traîtement des messages précédents déjà présents dans la queue. C'est pourquoi le deuxième argument de cette fonction indique une durée minimum et non une durée garantie.

> **Attention :** L'argument passé pour le délai à `setTimeout` ne correspond pas au temps exact. Cela correspond au délai minimum et non à un délai garanti. Par exemple `setTimeout(maFonction(),100);` indique uniquement que `maFonction` sera lancé **au moins** après 100 millisecondes.

Voici un exemple qui illustre ce concept (`setTimeout` ne s'exécute pas immédiatement après la fin du _timer_) :

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // prints
  console.log("Exécuté après " + (new Date().getSeconds() - s) + " secondes.");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Ouf, on a bouclé pendant 2 secondes");
    break;
  }
}
```

### Zéro délai

Un délai à zéro ne signifie pas que le callback sera déclenché après zéro milliseconde. Appeler [`setTimeout`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout "The documentation about this has not yet been written; please consider contributing!") avec un délai de `0` (zéro) milliseconde n'éxécute pas le callback après l'interval donné.

L'exécution dépend du nombre de taches en attente dans la queue. Dans l'exemple ci-dessous, le message `'ceci est juste un message'` sera affiché dans la console avant que le message dans le callback soit traité, parce que le délai est le temps *minimum* requis par l'environnement d'exécution (runtime) pour traiter la demande (pas un temps _garanti_).

Fondamentalement, `setTimeout` doit attendre la fin de tout le code pour les messages en file d'attente, même si vous avez spécifié une limite de temps particulière pour votre setTimeout.

```js
(function() {

  console.log('ceci est le début');

  setTimeout(function cb() {
    console.log('Callback 1: ceci est un msg depuis le callback');
  }); // has a default time value of 0

  console.log('ceci est juste un message');

  setTimeout(function cb1() {
    console.log('Callback 2: ceci est un msg depuis le callback');
  }, 0);

  console.log('ceci est la fin');

})();

// "ceci est le début"
// "ceci est juste un message"
// "ceci est la fin"
// "Callback 1: ceci est un msg depuis le callback"
// "Callback 2: ceci est un msg depuis le callback"
```

### La communication entre plusieurs environnements d'exécution

Un web worker ou une `iframe` d'origine multiple (_cross origin_) possède sa propre pile, son propre tas et sa propre queue de messages. Deux environnements d'exécution distincts peuvent uniquement communiquer via des messages envoyés par la méthode [`postMessage`](/fr/docs/Web/API/window.postMessage). Cette méthode permet d'ajouter un message à un autre environnement d'exécution si celui-ci « écoute » les événements `message`.

## Non bloquant

Le modèle de la boucle d'événement possède une caractéristique intéressante : JavaScript, à la différence d'autres langages, ne bloque jamais. La gestion des entrées-sorties (_I/O_) est généralement traitée par des événements et des callbacks. Ainsi, quand l'application attend le résultat d'une requête [IndexedDB](/fr/docs/IndexedDB) ou d'une requête [XHR](/fr/docs/XMLHttpRequest), il reste possible de traiter d'autres éléments comme les saisies utilisateur.

Il existe certaines exceptions historiques comme `alert` ou des appels XHR synchrones. C'est une bonne pratique que de les éviter. Attention, [certaines exceptions existent](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (mais relèvent généralement de bugs d'implémentation).

## Spécifications

| Spécification                                                                                                                | É tat                            | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'webappapis.html#event-loops', 'Event loops')}}                             | {{Spec2('HTML WHATWG')}} |              |
| [Boucle d'évènements pour Node.js](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop) | Standard évolutif                |              |
