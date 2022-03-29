---
title: Concepts généraux de programmation asynchrone
slug: conflicting/Learn/JavaScript/Asynchronous/Introducing
tags:
  - JavaScript
  - Learn
  - Promises
  - Threads
  - asynchronous
  - blocking
translation_of: Learn/JavaScript/Asynchronous/Concepts
original_slug: Learn/JavaScript/Asynchronous/Concepts
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous")}}

Dans cet article, nous allons passer en revue un certain nombre de concepts importants relatifs à la programmation asynchrone et à la façon dont elle se présente dans les navigateurs web et JavaScript. Vous devriez comprendre ces concepts avant de travailler sur les autres articles du module.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances informatiques de base, compréhension raisonnable des
        principes fondamentaux de JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre les concepts de base de la programmation asynchrone et la
        façon dont elles se manifestent dans les navigateurs Web et dans
        JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Asynchrone ?

Normalement, le code d'un programme donné se déroule sans interruption, une seule chose se produisant à la fois. Si une fonction dépend du résultat d'une autre fonction, elle doit attendre que l'autre fonction se termine et retourne sa réponse, et jusqu'à ce que cela se produise, le programme entier est essentiellement bloqué du point de vue de l'utilisateur.

Les utilisatrices et utilisateurs de macOS, par exemple, le voient parfois avec le curseur rotatif de couleur arc-en-ciel (ou « ballon de plage », comme on l'appelle souvent). Ce curseur est la façon dont le système d'exploitation dit "le programme que vous utilisez actuellement a dû s'arrêter et attendre que quelque chose se termine, et cela prend tellement de temps que je craignais que vous vous demandiez ce qui se passe".

![Spinner multicolore pour macOS avec ballon de plage.](beachball.jpg)

C'est une expérience frustrante qui n'est pas une bonne utilisation de la puissance de traitement de l'ordinateur, surtout à une époque où les ordinateurs disposent de plusieurs cœurs de processeur. Il est inutile de rester assis à attendre quelque chose alors que vous pouvez laisser une tâche se dérouler sur un autre cœur de processeur et être averti quand elle a terminé. Cela vous permet d'effectuer d'autres travaux en même temps, ce qui est la base de la **programmation asynchrone**. C'est à l'environnement de programmation que vous utilisez (les navigateurs web, dans le cas du développement web) de vous fournir des API qui vous permettent d'exécuter de telles tâches de manière asynchrone.

## Code bloquant

Les techniques asynchrones sont très utiles, notamment dans la programmation web. Lorsqu'une application web s'exécute dans un navigateur et qu'elle exécute un morceau de code considérable sans rendre le contrôle au navigateur, ce dernier peut sembler figé. C'est ce qu'on appelle du code **bloquant** ; le navigateur est incapable de continuer à traiter les entrées de l'utilisateur et d'effectuer d'autres tâches jusqu'à ce que l'application web rende le contrôle du processeur.

Examinons quelques exemples qui montrent ce que nous entendons par blocage.

Dans notre exemple [simple-sync.html](https://github.com/mdn/learning-area/tree/master/javascript/asynchronous/introducing/simple-sync.html) ([voir le fonctionnement en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync.html)), nous ajoutons un écouteur d'événement de clic à un bouton de sorte que, lorsqu'il est cliqué, il exécute une opération qui prend du temps (calcule 10 millions de dates puis enregistre la dernière dans la console) et ajoute ensuite un paragraphe au DOM :

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = `Il s'agit d'un paragraphe nouvellement ajouté.`;
  document.body.appendChild(pElem);
});
```

Lorsque vous exécutez l'exemple, ouvrez votre console JavaScript, puis cliquez sur le bouton. Vous remarquerez que le paragraphe n'apparaît qu'une fois que le calcul des dates est terminé et que le message de la console a été enregistré. Le code s'exécute dans l'ordre où il apparaît dans la source, et la dernière opération ne s'exécute pas tant que la première n'est pas terminée.

> **Note :** L'exemple précédent est très peu réaliste. Vous ne calculeriez jamais 10 millions de dates sur une véritable application web ! Il sert cependant à vous donner l'idée de base.

Dans notre deuxième exemple, [simple-sync-ui-blocking.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/simple-sync-ui-blocking.html) ([voir en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync-ui-blocking.html)), nous simulons quelque chose de légèrement plus réaliste que vous pourriez rencontrer sur une page réelle. Nous bloquons l'interactivité de l'utilisateur avec le rendu de l'interface utilisateur. Dans cet exemple, nous avons deux boutons :

- Un bouton "Remplir le canevas" qui, lorsqu'il est cliqué, remplit le [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) disponible avec 1 million de cercles bleus.
- Un bouton "Cliquez sur moi pour l'alerte" qui, lorsqu'il est cliqué, affiche un message d'alerte.

```js
function expensiveOperation() {
  for(let i = 0; i < 1000000; i++) {
    ctx.fillStyle = 'rgba(0,0,255, 0.2)';
    ctx.beginPath();
    ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
    ctx.fill();
  }
}

fillBtn.addEventListener('click', expensiveOperation);

alertBtn.addEventListener('click', () =>
  alert('Vous avez cliqué sur moi !');
);
```

Si vous cliquez sur le premier bouton, puis rapidement sur le second, vous verrez que l'alerte n'apparaît pas avant que les cercles aient fini d'être rendus. La première opération bloque la seconde jusqu'à ce qu'elle ait fini de s'exécuter.

> **Note :** D'accord, dans notre cas, c'est laid et nous simulons l'effet de blocage, mais il s'agit d'un problème courant contre lequel les développeuses et développeurs d'applications réelles se battent sans cesse pour atténuer les impacts indésirables.

Pourquoi ? La réponse est que JavaScript, de manière générale, ne s'exécute que sur **un seul _thread_**. À ce stade, nous devons introduire le concept de **_threads_**.

## Les threads

Un **_thread_** est fondamentalement un processus unique qu'un programme peut utiliser pour accomplir des tâches. Chaque _thread_ ne peut effectuer qu'une seule tâche à la fois :

    Tâche A --> Tâche B --> Tâche C

Chaque tâche sera exécutée de manière séquentielle ; une tâche doit être terminée avant que la suivante puisse être lancée.

Comme nous l'avons dit précédemment, de nombreux ordinateurs sont désormais dotés de plusieurs cœurs et peuvent donc faire plusieurs choses à la fois. Les langages de programmation qui prennent en charge plusieurs processus peuvent utiliser plusieurs cœurs pour accomplir de multiples tâches simultanément :

    Processus 1: Tâche A --> Tâche B
    Processus 2: Tâche C --> Tâche D

### JavaScript n'a qu'un thread

JavaScript est traditionnellement « single-threaded ». Même avec plusieurs cœurs, vous ne pouviez le faire exécuter des tâches que sur un seul processus, appelé le **main thread**. Notre exemple ci-dessus est exécuté comme ceci :

    processus principal : Rendre des cercles dans <canvas> --> Afficher alert()

Après un certain temps, JavaScript a gagné quelques outils pour aider à résoudre de tels problèmes. [Les Web workers](/fr/docs/Web/API/Web_Workers_API) vous permettent d'envoyer une partie du traitement JavaScript hors d'un processus distinct, appelé worker, afin que vous puissiez exécuter plusieurs morceaux JavaScript simultanément. Vous utiliserez généralement un worker pour exécuter des processus coûteux hors du processus principal afin de ne pas bloquer l'interaction avec l'utilisateur.

    Processus principal : Tâche A --> Tâche C
    Processus du Worker : Tâche coûteuse B

Dans cette optique, jetez un coup d'œil à [simple-sync-worker.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/simple-sync-worker.html) ([voyez-le fonctionner en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync-worker.html)), toujours avec la console JavaScript de votre navigateur ouverte. Il s'agit d'une réécriture de notre exemple précédent qui calcule les 10 millions de dates dans un fil de travail (_worker_) séparé. Vous pouvez voir le code du _worker_ ici : [worker.js](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/worker.js). Désormais, lorsque vous cliquez sur le bouton, le navigateur est capable d'afficher le paragraphe avant que les dates n'aient fini d'être calculées. La première opération ne bloque plus la seconde et une fois que le _worker_ a fini ses calculs, la date est affichée dans la console.

## Code asynchrone

Les web workers sont très utiles, mais ils ont leurs limites. L'une des principales est qu'ils ne peuvent pas accéder au [DOM](/fr/docs/Glossary/DOM). Vous ne pouvez pas demander à un worker de faire directement quelque chose pour mettre à jour l'interface utilisateur. Nous n'avons pas pu rendre nos 1 million de cercles bleus à l'intérieur de notre worker ; il ne peut faire que le calcul des chiffres.

Le deuxième problème est que, bien que le code exécuté dans un worker ne soit pas bloquant, il reste fondamentalement synchrone. Cela devient un problème lorsqu'une fonction s'appuie sur les résultats de plusieurs processus précédents pour fonctionner. Considérons les diagrammes de processus suivants :

    Processus principal : Tâche A --> Tâche B

Dans ce cas, disons que la tâche A fait quelque chose comme récupérer une image du serveur et que la tâche B fait ensuite quelque chose à l'image comme lui appliquer un filtre. Si vous lancez la tâche A et essayez immédiatement d'exécuter la tâche B, vous obtiendrez une erreur, car l'image ne sera pas encore disponible.

    Processus principal : Tâche A --> Tâche B --> |Tâche D|
    Processus du Worker : Tâche C --------------> |       |

Dans ce cas, disons que la tâche D utilise les résultats de la tâche B et de la tâche C. Si nous pouvons garantir que ces résultats seront tous deux disponibles au même moment, alors nous pourrions être OK, mais c'est peu probable. Si la tâche D tente de s'exécuter alors que l'une de ses entrées n'est pas encore disponible, elle déclenchera une erreur.

Pour résoudre ces problèmes, les navigateurs nous permettent d'exécuter certaines opérations de manière asynchrone. Des fonctionnalités telles que [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) permettent de lancer une opération (par exemple, la récupération d'une image sur le serveur), puis d'attendre le retour du résultat avant de lancer une autre opération :

    Processus principal : Tâche A                   Tâche B
    Promesse :               |__opération asynchrone__|

Comme l'opération se déroule ailleurs, le processus principal n'est pas bloqué pendant le traitement de l'opération asynchrone.

Nous allons commencer à examiner comment écrire du code asynchrone dans le prochain article. C'est passionnant, non ? Bonne lecture !

## Conclusion

La conception de logiciels modernes s'articule de plus en plus autour de l'utilisation de la programmation asynchrone, afin de permettre aux programmes de faire plusieurs choses à la fois. À mesure que vous utilisez des API plus récentes et plus puissantes, vous trouverez de plus en plus de cas où la seule façon de faire les choses est asynchrone. Il était autrefois difficile d'écrire du code asynchrone. Il faut encore s'y habituer, mais c'est devenu beaucoup plus facile. Dans la suite de ce module, nous étudierons plus en détail pourquoi le code asynchrone est important et comment concevoir un code qui évite certains des problèmes décrits ci-dessus.

{{NextMenu("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Faciliter la programmation asynchrone avec async et await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
