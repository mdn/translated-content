---
title: Utiliser les microtâches en JavaScript avec queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
l10n:
  sourceCommit: 6b9019694341254ad8e3e0572f03988337f6f7ae
---

{{DefaultAPISidebar("HTML DOM")}}

Une **microtâche** est une courte fonction qui s'exécute après que la fonction ou le programme qui l'a créée se termine _et_ uniquement si la [pile d'exécution JavaScript](/fr/docs/Web/JavaScript/Reference/Execution_model#pile_et_contextes_dexécution) est vide, mais avant de rendre le contrôle à la boucle d'évènements utilisée par {{Glossary("user agent", "l'agent utilisateur")}} pour gérer l'environnement d'exécution du script.

Cttte boucle d'évènement peut être soit la boucle d'évènements principale du navigateur, soit la boucle d'évènements d'un [web worker](/fr/docs/Web/API/Web_Workers_API). Cela permet à la fonction donnée de s'exécuter sans risquer d'interférer avec l'exécution d'un autre script, tout en garantissant que la microtâche s'exécute avant que l'agent utilisateur n'ait l'occasion de réagir aux actions effectuées par la microtâche.

Les [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) JavaScript et [l'API Mutation Observer](/fr/docs/Web/API/MutationObserver) utilisent toutes deux la file d'attente des microtâches pour exécuter leurs rappels, mais il existe d'autres moments où la possibilité de différer le travail jusqu'à la fin du passage actuel de la boucle d'évènements est utile. Afin de permettre aux microtâches d'être utilisées par des bibliothèques tierces, des frameworks et des prothèses d'émulations, la méthode {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}} est exposée sur les interfaces {{DOMxRef("Window")}} et {{DOMxRef("WorkerGlobalScope")}}.

## Tâches et microtâches

Pour discuter correctement des microtâches, il est d'abord utile de savoir ce qu'est une tâche JavaScript et comment les microtâches diffèrent des tâches. Il s'agit d'une explication rapide et simplifiée, mais si vous souhaitez plus de détails, vous pouvez lire les informations dans l'article [Aller plus loin&nbsp;: Les microtâches et l'environnement d'exécution JavaScript](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth).

### Tâches

Une **tâche** est tout ce qui est programmé pour être exécuté par les mécanismes standard, tels que le démarrage initial d'un programme, la distribution asynchrone d'un évènement ou le déclenchement d'un intervalle ou d'un délai. Toutes ces actions sont programmées dans la **file d'attente des tâches**.

Par exemple, les tâches sont ajoutées à la file d'attente des tâches lorsque&nbsp;:

- Un nouveau programme ou sous-programme JavaScript est exécuté (par exemple depuis une console, ou en exécutant le code dans un élément HTML {{HTMLElement("script")}}) directement.
- L'utilisateur·ice clique sur un élément. Une tâche est alors créée et exécute tous les rappels d'évènements.
- Un délai ou un intervalle créé avec {{DOMxRef("Window.setTimeout", "setTimeout()")}} ou {{DOMxRef("Window.setInterval", "setInterval()")}} est atteint, ce qui entraîne l'ajout du rappel correspondant à la file d'attente des tâches.

La boucle d'évènements qui exécute votre code gère ces tâches les unes après les autres, dans l'ordre dans lequel elles ont été mises en file d'attente. La tâche exécutable la plus ancienne dans la file d'attente des tâches sera exécutée lors d'une seule itération de la boucle d'évènements. Après cela, les microtâches seront exécutées jusqu'à ce que la file d'attente des microtâches soit vide, puis le navigateur peut choisir de mettre à jour le rendu. Ensuite, le navigateur passe à l'itération suivante de la boucle d'évènements.

### Microtâches

Au premier abord, la différence entre les microtâches et les tâches semble mineure. Et elles sont similaires&nbsp;; toutes deux sont constituées de code JavaScript qui est placé dans une file d'attente et exécuté au moment approprié. Cependant, alors que la boucle d'évènements exécute uniquement les tâches présentes dans la file d'attente au début de l'itération, une par une, elle gère la file d'attente des microtâches de manière très différente.

Il y a deux différences clés&nbsp;:

1. Chaque fois qu'une tâche se termine, la boucle d'évènements vérifie si la tâche rend le contrôle à un autre code JavaScript. Si ce n'est pas le cas, elle exécute toutes les microtâches présentes dans la file d'attente des microtâches. La file d'attente des microtâches est donc traitée plusieurs fois par itération de la boucle d'évènements, y compris après le traitement des évènements et d'autres rappels.
2. Si une microtâche ajoute d'autres microtâches à la file d'attente en appelant {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}}, ces microtâches nouvellement ajoutées _s'exécutent avant que la tâche suivante ne soit exécutée_. C'est parce que la boucle d'évènements continuera à appeler les microtâches jusqu'à ce qu'il n'en reste plus dans la file d'attente, même si d'autres continuent à être ajoutées.

> [!WARNING]
> Comme les microtâches peuvent elles-mêmes mettre en file d'attente d'autres microtâches, et que la boucle d'évènements continue à traiter les microtâches jusqu'à ce que la file soit vide, il y a un réel risque que la boucle d'évènements traite les microtâches indéfiniment. Soyez prudent·e avec la manière dont vous ajoutez des microtâches de manière récursive.

## Utiliser des microtâches

Avant d'aller plus loin, il est important de noter à nouveau que la plupart des développeur·euse·s n'utiliseront pas beaucoup les microtâches, voire pas du tout. Il s'agit d'une fonctionnalité très spécialisée du développement JavaScript moderne basé sur le navigateur, permettant de programmer du code pour qu'il passe devant d'autres choses dans la longue liste des choses en attente sur l'ordinateur de l'utilisateur·ice. Abuser de cette capacité entraînera des problèmes de performance.

### Mettre en file d'attente des microtâches

Ainsi, vous ne devriez généralement utiliser les microtâches que lorsqu'il n'y a pas d'autre solution, ou lors de la création de frameworks ou de bibliothèques qui doivent utiliser des microtâches pour créer la fonctionnalité qu'ils implémentent. Bien qu'il y ait eu des astuces disponibles qui permettaient de mettre en file d'attente des microtâches dans le passé (comme en créant une promesse qui se résout immédiatement), l'ajout de la méthode {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}} offre un moyen standard d'introduire une microtâche de manière sûre et sans astuces.

En introduisant `queueMicrotask()`, les particularités qui surviennent lorsqu'on utilise des promesses pour créer des microtâches peuvent être évitées. Par exemple, lorsqu'on utilise des promesses pour créer des microtâches, les exceptions lancées par le rappel sont signalées comme des promesses rejetées plutôt que comme des exceptions standard. De plus, la création et la destruction de promesses entraînent un surcoût supplémentaire en termes de temps et de mémoire, ce qu'une fonction qui met correctement en file d'attente des microtâches évite.

Passez l'objet {{JSxRef("Function")}} JavaScript à appeler pendant que le contexte gère les microtâches dans la méthode `queueMicrotask()`, qui est exposée sur le contexte global tel que défini par l'interface {{DOMxRef("Window")}} ou {{DOMxRef("Worker")}}, selon le contexte d'exécution actuel.

```js
queueMicrotask(() => {
  /* code à exécuter dans la microtâche ici */
});
```

La fonction de microtâche elle-même ne prend aucun paramètre et ne retourne aucune valeur.

### Quand utiliser les microtâches ?

Dans cette section, nous allons examiner les scénarios dans lesquels les microtâches sont particulièrement utiles. En général, il s'agit de capturer ou de vérifier des résultats, ou d'effectuer un nettoyage, après que le corps principal d'un contexte d'exécution JavaScript se termine, mais _avant_ que les gestionnaires d'évènements, les minuteries et intervalles, ou d'autres rappels ne soient traités.

Quand est-ce utile&nbsp;?

La principale raison d'utiliser des microtâches est de garantir un ordre cohérent des tâches, même lorsque les résultats ou les données sont disponibles de manière synchrone, tout en réduisant simultanément le risque de retards perceptibles par l'utilisateur·ice dans les opérations.

#### Garantir l'ordre lors de l'utilisation conditionnelle des promesses

Une situation dans laquelle les microtâches peuvent être utilisées pour garantir que l'ordre d'exécution est toujours cohérent est lorsque des promesses sont utilisées dans une clause d'une instruction `if...else` (ou autre instruction conditionnelle), mais pas dans l'autre clause. Considérons un code comme celui-ci&nbsp;:

```js
customElement.prototype.getData = function (url) {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

Le problème introduit ici est qu'en utilisant une tâche dans une branche de l'instruction `if...else` (dans le cas où l'image est disponible dans le cache) mais en ayant des promesses impliquées dans la clause `else`, nous avons une situation dans laquelle l'ordre des opérations peut varier&nbsp;; par exemple, comme on le voit ci-dessous.

```js
element.addEventListener("load", () =>
  console.log("Chargement des données terminé"),
);
console.log("Récupération des données…");
element.getData();
console.log("Données récupérées");
```

Exécuter ce code deux fois de suite donne les résultats suivants.

Lorsque les données ne sont pas en cache&nbsp;:

```plain
Récupération des données…
Données récupérées
Chargement des données terminé
```

Lorsque les données sont en cache&nbsp;:

```plain
Récupération des données…
Chargement des données terminé
Données récupérées
```

Encore pire, parfois la propriété `data` de l'élément sera définie, mais d'autres fois elle ne sera pas complète avant que ce code ne termine son exécution.

Nous pouvons garantir un ordre cohérent de ces opérations en utilisant une microtâche dans la clause `if` pour équilibrer les deux clauses&nbsp;:

```js
customElement.prototype.getData = function (url) {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

Cela équilibre les clauses en faisant en sorte que les deux situations gèrent la définition de `data` et le déclenchement de l'événement `load` dans une microtâche (en utilisant `queueMicrotask()` dans la clause `if` et en utilisant les promesses utilisées par {{DOMxRef("Window/fetch", "fetch()")}} dans la clause `else`).

#### Regroupement des opérations

Vous pouvez également utiliser des microtâches pour collecter plusieurs requêtes provenant de différentes sources dans un seul lot, évitant ainsi le surcoût possible lié à plusieurs appels pour gérer le même type de travail.

L'extrait ci-dessous crée une fonction qui regroupe plusieurs messages dans un tableau, en utilisant une microtâche pour les envoyer en tant qu'objet unique lorsque le contexte se termine.

```js
const messageQueue = [];

let sendMessage = (message) => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-de-reception", json);
    });
  }
};
```

Lorsque `sendMessage()` est appelé, le message défini est d'abord ajouté au tableau de la file d'attente des messages. Ensuite, les choses deviennent intéressantes.

Si le message que nous venons d'ajouter au tableau est le premier, nous mettons en file d'attente une microtâche qui enverra un lot. La microtâche s'exécutera, comme toujours, lorsque le chemin d'exécution JavaScript atteindra le niveau supérieur, juste avant d'exécuter les rappels. Cela signifie que tout autre appel à `sendMessage()` effectué entre-temps ajoutera ses messages à la file d'attente des messages, mais en raison de la vérification de la longueur du tableau avant d'ajouter une microtâche, aucune nouvelle microtâche n'est mise en file d'attente.

Lorsque la microtâche s'exécute, elle dispose alors d'un tableau de nombreux messages potentiellement en attente. Elle commence par les encoder en JSON en utilisant la méthode {{JSxRef("JSON.stringify()")}}. Après cela, le contenu du tableau n'est plus nécessaire, nous vidons donc le tableau `messageQueue`. Enfin, nous utilisons la méthode {{DOMxRef("Window/fetch", "fetch()")}} pour envoyer la chaîne de caractères JSON au serveur.

Cela permet à chaque appel à `sendMessage()` effectué pendant la même itération de la boucle d'évènements d'ajouter ses messages à la même opération `fetch()`, sans que d'autres tâches telles que des minuteries ou autres ne retardent potentiellement la transmission.

Le serveur recevra la chaîne de caractères JSON, puis la décodera probablement et traitera les messages qu'il trouve dans le tableau résultant.

## Exemples

### Exemple simple de microtâche

Dans cet exemple simple, nous voyons que la mise en file d'attente d'une microtâche fait en sorte que le rappel de la microtâche s'exécute après que le corps de ce script de niveau supérieur a terminé son exécution.

```html hidden
<pre id="journal"></pre>
```

#### JavaScript

```js hidden
const elemJournal = document.getElementById("journal");
const journaliser = (s) => (elemJournal.innerText += `${s}\n`);
```

Dans le code suivant, nous voyons un appel à {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}} utilisé pour planifier l'exécution d'une microtâche. Cet appel est encadré par des appels à `journaliser()`, une fonction personnalisée qui affiche du texte à l'écran.

```js
journaliser("Avant la mise en file d'attente de la microtâche");
queueMicrotask(() => {
  journaliser("La microtâche s'est exécutée.");
});
journaliser("Après la mise en file d'attente de la microtâche");
```

#### Résultat

{{EmbedLiveSample("Exemple simple de microtâche", 640, 80)}}

### Exemple de délais d'attente et de microtâche

Dans cet exemple, un délai d'attente est programmé pour s'exécuter après zéro millisecondes (ou «&nbsp;aussi vite que possible&nbsp;»). Cela démontre la différence entre ce que signifie «&nbsp;aussi vite que possible&nbsp;» lors de la planification d'une nouvelle tâche (par exemple en utilisant `setTimeout()`) par rapport à l'utilisation d'une microtâche.

```html hidden
<pre id="journal"></pre>
```

#### JavaScript

```js hidden
const elemJournal = document.getElementById("journal");
const journaliser = (s) => (elemJournal.innerText += `${s}\n`);
```

Dans le code suivant, nous voyons un appel à {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}} utilisé pour planifier l'exécution d'une microtâche. Cet appel est encadré par des appels à `journaliser()`, une fonction personnalisée qui affiche du texte à l'écran.

Le code ci-dessous programme un délai d'attente pour s'exécuter après zéro millisecondes, puis met en file d'attente une microtâche. Cela est encadré par des appels à `journaliser()` pour afficher des messages supplémentaires.

```js
const callback = () =>
  journaliser("Le rappel du délai d'attente régulier s'est exécuté");

const urgentCallback = () =>
  journaliser("*** Oh non ! Un rappel urgent s'est exécuté !");

journaliser("Le programme principal a commencé");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
journaliser("Le programme principal se termine");
```

#### Résultat

{{EmbedLiveSample("Exemple de délais d'attente et de microtâche", 640, 100)}}

Notez que la sortie enregistrée à partir du corps du programme principal apparaît en premier, suivie de la sortie de la microtâche, puis du rappel du délai d'attente. Cela s'explique par le fait que lorsque la tâche qui gère l'exécution du programme principal se termine, la file d'attente des microtâches est traitée avant la file d'attente des tâches sur laquelle se trouve le rappel du délai d'attente. Pour aider à garder cela en tête, rappelez-vous que les tâches et les microtâches sont conservées dans des files d'attente séparées, et que les microtâches s'exécutent en premier.

### Microtâche à partir d'une fonction

Cet exemple s'étend légèrement sur le précédent en ajoutant une fonction qui effectue un certain travail. Cette fonction utilise `queueMicrotask()` pour planifier une microtâche. L'élément important à retenir est que la microtâche n'est pas traitée lorsque la fonction se termine, mais lorsque le programme principal se termine.

```html hidden
<pre id="journal"></pre>
```

#### JavaScript

```js hidden
const elemJournal = document.getElementById("journal");
const journaliser = (s) => (elemJournal.innerText += `${s}\n`);
```

Le code principal du programme suit. La fonction `faireTravail()` appelle ici `queueMicrotask()`, mais la microtâche ne s'exécute toujours pas avant la fin de l'ensemble du programme, car c'est à ce moment-là que la tâche se termine et qu'il n'y a rien d'autre sur la pile d'exécution.

```js
const fonctionRappel = () =>
  journaliser("Un délais d'attente d'une fonction de rappel a été exécuté");

const fonctionRappelUrgent = () =>
  journaliser("*** Oh non ! Une fonction de rappel urgente a été exécutée !");

const faireTravail = () => {
  let resultat = 1;

  queueMicrotask(fonctionRappelUrgent);

  for (let i = 2; i <= 10; i++) {
    resultat *= i;
  }
  return resultat;
};

journaliser("Le programme principal a commencé");
setTimeout(fonctionRappel, 0);
journaliser(`10 ! égal ${faireTravail()}`);
journaliser("Le programme principal se termine");
```

#### Résultat

{{EmbedLiveSample("Microtâche à partir d'une fonction", 640, 100)}}

## Voir aussi

- [Aller plus loin&nbsp;: Les microtâches et l'environnement d'exécution JavaScript](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- La méthode {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}}
- [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS)
  - [Introduction à JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Programmation asynchrone élégante avec les promesses](/fr/docs/Learn_web_development/Extensions/Async_JS/Promises)
