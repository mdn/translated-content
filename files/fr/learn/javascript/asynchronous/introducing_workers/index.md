---
title: Introduction aux workers
slug: Learn/JavaScript/Asynchronous/Introducing_workers
l10n:
  sourceCommit: ca269eb6b25f792eeb4f53bbca3e7be3b8c0f350
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

Dans ce dernier article de notre module "JavaScript asynchrone", nous présenterons les _travailleurs_ (<i lang="en">workers</i> en anglais), qui vous permettent d'exécuter certaines tâches dans un {{Glossary("Thread", "fil")}} d'exécution séparé.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base, compréhension raisonnable des fondamentaux de JavaScript, notamment des fonctions et des gestionnaires d'évènements.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>Comprendre comment utiliser les web workers.</td>
    </tr>
  </tbody>
</table>

Dans le premier article de ce module, nous avons vu ce qui se passe lorsque vous avez une tâche synchrone de longue durée dans votre programme — toute la fenêtre ne répond plus. Fondamentalement, la raison est que le programme est _monofilaire_. Un _fil_ est une séquence d'instructions suivie par un programme. Parce que le programme se compose d'un seul fil, il ne peut faire qu'une seule chose à la fois : donc s'il attend la réponse de notre appel synchrone de longue durée, il ne peut rien faire d'autre.

Les travailleurs vous donnent la possibilité d'exécuter certaines tâches dans un fil différent, vous pouvez donc démarrer la tâche, puis continuer avec d'autres traitements (comme la gestion des actions de l'utilisateur).

Mais il y a un prix à payer pour cela. Avec le code parallélisé, vous ne savez jamais quand votre fil sera suspendu et l'autre fil aura une chance de s'exécuter. Ainsi, si les deux fils ont accès aux mêmes variables, il est possible qu'une variable change de manière inattendue à tout moment, ce qui provoque des bogues difficiles à trouver.

Pour éviter ces problèmes sur le Web, votre code principal et votre code de travail n'ont jamais un accès direct aux variables de l'autre. Les travailleurs et le code principal s'exécutent dans des mondes complètement séparés et n'interagissent qu'en s'envoyant des messages. En particulier, cela signifie que les travailleurs ne peuvent pas accéder au DOM (la fenêtre, le document, les éléments de la page, etc.).

Il existe trois types de travailleurs différents :

- des travailleurs dédiés
- travailleurs partagés
- travailleurs de services

Dans cet article, nous allons parcourir un exemple du premier type de travailleur, puis discuter brièvement des deux autres.

## Utiliser les travailleurs Web

Vous vous souvenez du premier article, où nous avions une page qui calculait les nombres premiers ? Nous allons utiliser un travailleur pour exécuter le calcul des nombres premiers, afin que notre page reste réactive aux actions des utilisateurs.

### Le générateur de nombre premiers synchrone

Jetons d'abord un autre regard sur le JavaScript de notre exemple précédent :

```js
function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Génération terminée de ${quota} nombres premiers!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"';
  document.location.reload();
});
```

Dans ce programme, après avoir appelé `generatePrimes()`, le programme ne répond plus du tout.

### Génération de nombres premiers avec un travailleur

Pour cet exemple, commencez par faire une copie locale des fichiers sur <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start>. Il y a quatre fichiers dans ce répertoire :

- index.html
- style.css
- main.js
- generate.js

Le fichier "index.html" et les fichiers "style.css" sont déjà complets :

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width">
    <title>Nombre Premiers</title>
    <script src="main.js" defer></script>
    <link href="style.css" rel="stylesheet">
  </head>

  <body>

    <label for="quota">Total de nombres premiers:</label>
    <input type="text" id="quota" name="quota" value="1000000">

    <button id="generate">Générer des nombre premiers</button>
    <button id="reload">Recharger</button>

    <textarea id="user-input" rows="5" cols="62">Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"</textarea>

    <div id="output"></div>

  </body>

</html>
```

```css
textarea {
  display: block;
  margin: 1rem 0;
}
```

Les fichiers "main.js" et "generate.js" sont vides. Nous allons ajouter le code principal à "main.js" et le code worker à "generate.js".

Donc, tout d'abord, nous pouvons voir que le code du travailleur est conservé dans un script séparé du code principal. Nous pouvons également voir, en regardant "index.html" ci-dessus, que seul le code principal est inclus dans un élément `<script>`.

Copiez maintenant le code suivant dans "main.js":

```js
// Créez un nouveau travailleur en lui donnant le code dans "generate.js"
const worker = new Worker('./generate.js');

// Lorsque l'utilisateur clique sur "Générer des nombres premiers", envoyez un message au travailleur.
// La commande de message est "generate", et le message contient également "quota",
// qui est le nombre de nombres premiers à générer.
document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  worker.postMessage({
    command: 'generate',
    quota,
  });
});

// Lorsque le travailleur renvoie un message au fil principal,
// mettez à jour la zone de sortie avec un message pour l'utilisateur, y compris le nombre de
//  nombres premiers qui ont été générés, extrait des données du message.
worker.addEventListener('message', (message) => {
  document.querySelector('#output').textContent = `Génération terminée de ${message.data} nombres premiers!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"';
  document.location.reload();
});
```

- Tout d'abord, nous créons le travailleur en utilisant le constructeur {{domxref("Worker/Worker", "Worker()")}}. Nous lui passons un lien pointant vers le script du travailleur. Dès que le travailleur est créé, le script  du travailleur est exécuté.

- Ensuite, comme dans la version synchrone, nous ajoutons un gestionnaire d'événements `click` au bouton "Générer des nombres premiers". Mais maintenant, plutôt que d'appeler une fonction `generatePrimes()`, nous envoyons un message au travailleur en utilisant {{domxref("Worker/postMessage", "worker.postMessage()")}}. Ce message peut prendre un argument, et dans ce cas nous transmettons un objet JSON contenant deux propriétés :

  - `commande` : une chaîne identifiant la chose que nous voulons que le travailleur fasse (au cas où notre travailleur pourrait faire plus d'une chose)
  - `quota` : le nombre de nombres premiers à générer.

- Ensuite, nous ajoutons un gestionnaire d'événements `message` au travailleur. C'est ainsi que le travailleur peut nous dire quand il a terminé et nous transmettre toutes les données résultantes. Notre gestionnaire prend les données de la propriété `data` du message et les écrit dans l'élément de sortie (les données sont exactement les mêmes que `quota`, donc c'est un peu inutile, mais cela montre le principe).

- Enfin, nous implémentons le gestionnaire d'événements `click` pour le bouton "Recharger". C'est exactement la même chose que dans la version synchrone.

Passons maintenant au code du travailleur. Copiez le code suivant dans "generate.js":

```js
// Écoutez les messages du fil principal.
// Si la commande de message est "generate", appelez `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === 'generate') {
    generatePrimes(message.data.quota);
  }
});

// Générer des nombres premiers (très inefficacement)
function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  // Lorsque nous avons terminé, envoyez un message au fil principal,
  // incluant le nombre de nombres premiers que nous avons générés.
  postMessage(primes.length);
}
```

N'oubliez pas que cela s'exécute dès que le script principal crée le travailleur.

La première chose que fait le travailleur est de commencer à écouter les messages du script principal. Il le fait en utilisant `addEventListener()`, qui est une fonction globale dans un travailleur. À l'intérieur du gestionnaire d'événements `message`, la propriété `data` de l'événement contient une copie de l'argument transmis par le script principal. Si le script principal a passé la commande `generate`, nous appelons `generatePrimes()`, en transmettant la valeur `quota` de l'événement de message.

La fonction `generatePrimes()` est comme la version synchrone, sauf qu'au lieu de renvoyer une valeur, nous envoyons un message au script principal lorsque nous avons terminé. Nous utilisons la fonction {{domxref("DedicatedWorkerGlobalScope/postMessage", "postMessage()")}} pour cela, qui comme `addEventListener()` est une fonction globale dans un worker. Comme nous l'avons déjà vu, le script principal écoute ce message et mettra à jour le DOM lorsque le message sera reçu.

> **Remarque :** Pour exécuter ce site, vous devrez exécuter un serveur Web local, car les URL de type file:// ne sont pas autorisées à charger des travailleurs. Consultez notre guide pour [configurer un serveur de test local](/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) (en anglais). Cela fait, vous devriez pouvoir cliquer sur "Générer des nombres premiers" et faire en sorte que votre page principale reste réactive.
>
> Si vous rencontrez des problèmes lors de la création ou de l'exécution de l'exemple, vous pouvez voir la version finale sur https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished et l'essayer en direct sur https : https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished.

## Autres types de travailleurs

Le travailleur que nous venons de créer était ce qu'on appelle un _travailleur dédié_. Cela signifie qu'il est utilisé par une seule instance de script.

Il existe cependant d'autres types de travailleurs :

- [_travailleurs partagés_](https://developer.mozilla.org/fr/docs/Web/API/SharedWorker) can be shared by several different scripts running in different windows.
- [_Service workers_](/en-US/docs/Web/API/Service_Worker_API) act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps).

- Des [_travailleurs partagés_](/fr/docs/Web/API/SharedWorker) qui peuvent être partagés par plusieurs scripts différents s'exécutant dans différentes fenêtres.
- Des [_travailleurs de service](fr/docs/Web/API/Service_Worker_API) qui agissent comme des serveurs proxy, mettant en cache les ressources afin que les applications Web puissent fonctionner lorsque l'utilisateur est hors ligne. Il s'agit d'un élément clé des [Applications Web progressives](/fr/docs/Web/Progressive_web_apps/Introduction).

## Conclusion

Dans cet article, nous avons présenté les travailleurs Web, qui permettent à une application Web de décharger des tâches sur un fil séparé. Le fil principal et le travailleur ne partagent directement aucune variable, mais communiquent en envoyant des messages, qui sont reçus par l'autre côté en tant qu'événements `message`.

Les travailleurs peuvent être un moyen efficace de garder l'application principale réactive, bien qu'ils ne puissent pas accéder à toutes les API auxquelles l'application principale peut accéder, et en particulier ne peuvent pas accéder au DOM.

## Voir aussi

- [Using web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Using service workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web workers API](fr/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Présentation de JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Comment utiliser les promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Implémentation d'une API basée sur les promesses](/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API) (en anglais)
- **Présentation des travailleurs**
- [Évaluation : séquencer les animations](/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations) (en anglais)
