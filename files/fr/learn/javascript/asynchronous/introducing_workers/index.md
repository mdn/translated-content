---
title: Introduction aux workers
slug: Learn/JavaScript/Asynchronous/Introducing_workers
l10n:
  sourceCommit: ca269eb6b25f792eeb4f53bbca3e7be3b8c0f350
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

Dans ce dernier article de notre module sur le JavaScript asynchrone, nous présenterons les <i lang="en">workers</i> (qu'on pourrait traduire en français par _travailleurs_, moins usité), qui permettent d'exécuter certaines tâches dans un [fil d'exécution](/fr/docs/Glossary/Thread) séparé.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base, compréhension raisonnable des fondamentaux de JavaScript, notamment des fonctions et des gestionnaires d'évènements.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Comprendre comment utiliser les <i lang="en">web workers</i>.</td>
    </tr>
  </tbody>
</table>

Dans le premier article de ce module, nous avons vu ce qui se passe lorsque vous avez une tâche synchrone de longue durée dans votre programme&nbsp;: c'est toute la fenêtre ne répond plus. La raison principale de ce problème est l'exécution du programme au sein d'_un seul fil d'exécution_ (<i lang="en">thread</i>). Un _fil d'exécution_ est une séquence d'instructions suivie par un programme. Parce que le programme s'exécute sur un seul fil, il ne peut faire qu'une seule chose à la fois&nbsp;: il attend donc la réponse de notre appel synchrone de longue durée et ne peut rien faire d'autre.

Les <i lang="en">workers</i> vous donnent la possibilité d'exécuter certaines tâches dans un fil d'exécution différent. Vous pouvez donc démarrer la tâche, puis continuer avec d'autres traitements (comme la gestion des actions de l'utilisateur).

Mais il y a un prix à payer pour cela. Avec le code parallélisé, vous ne savez jamais quand votre fil sera suspendu et quand l'autre fil aura une chance de s'exécuter. Ainsi, si les deux fils ont accès aux mêmes variables, il est possible qu'une variable change de manière inattendue à tout moment, ce qui provoque des bogues difficiles à trouver.

Pour éviter ces problèmes sur le Web, le code du fil principal et le code qui s'exécute dans le <i lang="en">worker</i> n'accèdent jamais directement aux variables de l'autre. Le code des <i lang="en">workers</i> et le code principal s'exécutent dans des mondes complètement séparés et n'interagissent qu'en s'envoyant des messages. Cela signifie notamment que les <i lang="en">workers</i> ne peuvent pas accéder au DOM (la fenêtre, le document, les éléments de la page, etc.).

Il existe trois types de <i lang="en">workers</i>&nbsp;:

- Les <i lang="en">workers</i> dédiés
- Les <i lang="en">workers</i> partagés
- Les <i lang="en">service workers</i>

Dans cet article, nous allons voir un exemple décrivant le premier type, puis discuter brièvement des deux autres.

## Utiliser les <i lang="en>web workers</i>

Vous souvenez-vous du premier article où nous avions une page qui calculait les nombres premiers&nbsp;? Nous allons ici utiliser un <i lang="en">worker</i> pour calculer les nombres premiers afin que notre page reste réactive aux actions des utilisatrices et utilisateurs.

### Le générateur de nombres premiers synchrone

Revoyons d'abord le code JavaScript de notre exemple précédent&nbsp;:

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

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output",
  ).textContent = `Génération de ${quota} nombres premiers terminée !`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"';
  document.location.reload();
});
```

Avec ce programme, après avoir appelé `generatePrimes()`, le navigateur ne répond plus du tout.

### Génération de nombres premiers avec un <i lang="en">worker</i>

Pour cet exemple, commencez par faire une copie locale des fichiers présents dans <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start>. Quatre fichiers sont dans ce répertoire&nbsp;:

- `index.html`
- `style.css`
- `main.js`
- `generate.js`

Le fichier `index.html` et les fichiers `style.css` sont déjà complets&nbsp;:

```html
<!doctype html>
<html lang="fr-FR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Nombres premiers</title>
    <script src="main.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <label for="quota">Quantité de nombres premiers à générer :</label>
    <input type="text" id="quota" name="quota" value="1000000" />

    <button id="generate">Générer des nombres premiers</button>
    <button id="reload">Recharger</button>

    <textarea id="user-input" rows="5" cols="62">
Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"</textarea
    >

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

Les fichiers `main.js` et `generate.js` sont vides. Nous allons ajouter le code s'exécutant dans le fil principal à `main.js` d'une part et celui qui s'exécute via le <i lang="en">worker</i> à `generate.js` d'autre part.

Tout d'abord, nous pouvons voir que le code du <i lang="en">worker</i> est présent dans un fichier distinct du code principal. En regardant `index.html` ci-dessus, nous pouvons également observer que seul le code principal est inclus dans un élément `<script>`.

Copiez maintenant le code suivant dans `main.js`&nbsp;:

```js
// On crée un nouveau worker en lui injectant le code présent dans le fichier "generate.js"
const worker = new Worker("./generate.js");

// Lorsque la personne clique sur "Générer des nombres premiers", on envoie un message au worker.
// La commande portée par le message est "generate", et le message contient également "quota"
// qui indique la quantité de nombres premiers à générer.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// Lorsque le worker renvoie un message au fil principal. Grâce aux données
// du message, on met à jour la zone de sortie avec un texte, indiquant aussi
// le quantité de nombres premiers générés.
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output",
  ).textContent = `Génération de ${message.data} nombres premiers terminée !`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"';
  document.location.reload();
});
```

1. Tout d'abord, nous créons le <i lang="en">worker</i> en utilisant le constructeur [`Worker()`](/fr/docs/Web/API/Worker/Worker). Nous lui passons un lien pointant vers le script du <i lang="en">worker</i>. Dès que le <i lang="en">worker</i> est créé, le script correspondant est exécuté.

2. Ensuite, comme dans la version synchrone, nous ajoutons un gestionnaire d'événements `click` au bouton "Générer des nombres premiers". En revanche, plutôt que d'appeler une fonction `generatePrimes()`, nous envoyons un message au travailleur en utilisant [`postMessage()`](/fr/docs/Web/API/Worker/postMessage). L'argument de cette fonction est le message à transmettre. Ici nous transmettons un objet JSON contenant deux propriétés&nbsp;:

   - `commande`
     - : Une chaîne de caractères indiquant la tâche demandée au <i lang="en">worker</i> (au cas où notre <i lang="en">worker</i> pourrait faire plus d'une chose)
   - `quota`
     - : La quantité de nombres premiers à générer.

3. Ensuite, nous ajoutons un gestionnaire d'évènements `message` au <i lang="en">worker</i>. C'est ainsi qu'il peut nous dire quand il a terminé et transmettre les données résultantes. Notre gestionnaire prend les données de la propriété `data` du message et les écrit dans l'élément de sortie (les données sont exactement les mêmes que `quota`, donc c'est un peu inutile, mais cela illustre le principe).

4. Enfin, nous implémentons le gestionnaire d'événements `click` pour le bouton "Recharger". C'est la même chose que dans la version synchrone.

Passons maintenant au code du <i lang="en">worker</i>. Copiez le code suivant dans `generate.js`&nbsp;:

```js
// On écoute les messages du fil principal.
// Si la commande de message est "generate", on appelle `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// On génère des nombres premiers (très inefficacement)
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

  // Lorsque c'est terminé, on envoie un message au fil principal
  // incluant la quantité de nombres premiers générés.
  postMessage(primes.length);
}
```

N'oubliez pas que ce code s'exécute dès que le script principal crée le <i lang="en">worker</i>.

Le <i lang="en">worker</i> commence par écouter les messages provenant du script principal. Il le fait en utilisant `addEventListener()`, qui est une fonction globale dans un <i lang="en">worker</i>. À l'intérieur du gestionnaire d'évènements `message`, la propriété `data` de l'évènement contient une copie de l'argument transmis par le script principal. Si le script principal a passé la commande `generate`, nous appelons `generatePrimes()`, en transmettant la valeur `quota` des données de l'évènement `message`.

La fonction `generatePrimes()` utilise le même algorithme que la version synchrone, sauf qu'au lieu de renvoyer une valeur, nous envoyons un message au script principal lorsque le calcul est terminé. Nous utilisons la fonction [`postMessage()`](/fr/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) pour cela. Comme `addEventListener()`, il s'agit d'une fonction globale dans le contexte d'un <i lang="en">worker</i>. Comme nous l'avons déjà vu, le script principal écoute ce message et mettra à jour le DOM lorsque le message sera reçu.

> **Note :** Pour exécuter ce site, vous devrez exécuter un serveur web local, car les URL de type `file://` ne sont pas autorisées à charger des <i lang="en">workers</i>. Consultez notre guide pour [configurer un serveur de test local](/fr/docs/Learn/Common_questions/set_up_a_local_testing_server). Une fois que cela aura été fait, vous devriez pouvoir cliquer sur "Générer des nombres premiers" et faire en sorte que votre page principale reste réactive.
>
> Si vous rencontrez des problèmes lors de la création ou de l'exécution de l'exemple, vous pouvez voir la version finale sur <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished> et l'essayer en direct sur <https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished>.

## Les autres types de <i lang="en">workers</i>

Le <i lang="en">worker</i> que nous venons de créer était ce qu'on appelle un _<i lang="en">worker</i> dédié_ (<i lang="en">dedicated worker</i> en anglais). Cela signifie qu'il est utilisé par une seule instance de script.

Il existe cependant d'autres types de <i lang="en">workers</i>&nbsp;:

- Les [<i lang="en">workers</i> partagés](/fr/docs/Web/API/SharedWorker) qui peuvent être partagés par plusieurs scripts différents s'exécutant dans différentes fenêtres.
- Les [<i lang="en">](/fr/docs/Web/API/Service_Worker_API) qui agissent comme des serveurs intermédiaires, mettant en cache les ressources afin que les applications web puissent fonctionner même hors ligne. Il s'agit d'un élément clé des [applications web progressives (PWA)](/fr/docs/Web/Progressive_web_apps).

## Conclusion

Dans cet article, nous avons présenté les <i lang="en">web workers</i>, qui permettent à une application web de décharger des tâches sur un fil d'exécution séparé. Le fil d'exécution principal et le <i lang="en">worker</i> ne partagent pas de variables directement, mais communiquent avec des messages, reçus par l'autre côté en tant qu'évènements `message`.

Bien qu'ils ne puissent pas utiliser toutes les API auxquelles le document a accès (le DOM notamment), les <i lang="en">workers</i> peuvent être un moyen efficace de garder l'application principale réactive.

## Voir aussi

- [Utiliser les <i lang="en">web workers</i>](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Utiliser les <i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [L'API <i lang="en">Web Workers</i>](/fr/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
