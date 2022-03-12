---
title: 'JavaScript asynchrone coopératif : délais et intervalles'
slug: conflicting/Learn/JavaScript/Asynchronous_ae5a561b0ec11fc53c167201aa8af5df
tags:
  - Animation
  - Beginner
  - CodingScripting
  - Guide
  - Intervals
  - JavaScript
  - Loops
  - asynchronous
  - requestAnimationFrame
  - setInterval
  - setTimeout
  - timeouts
translation_of: Learn/JavaScript/Asynchronous/Timeouts_and_intervals
original_slug: Learn/JavaScript/Asynchronous/Timeouts_and_intervals
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

Ce tutoriel présente les méthodes traditionnelles dont dispose JavaScript pour exécuter du code de manière asynchrone après l'écoulement d'une période de temps déterminée ou à un intervalle régulier (par exemple, un nombre déterminé de fois par seconde), discute de leur utilité et examine leurs problèmes inhérents.

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
        Comprendre les boucles et les intervalles asynchrones et leur utilité.
      </td>
    </tr>
  </tbody>
</table>

## Introduction

Depuis longtemps, la plate-forme Web offre aux programmeurs JavaScript un certain nombre de fonctions qui leur permettent d'exécuter du code de manière asynchrone après un certain intervalle de temps, et d'exécuter un bloc de code de manière asynchrone jusqu'à ce que vous lui demandiez de s'arrêter.

Ces fonctions sont :

- [`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
  - : Exécuter un bloc de code spécifié une fois, après qu'un temps spécifié se soit écoulé.
- [`setInterval()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
  - : Exécuter un bloc de code spécifique de manière répétée, avec un délai fixe entre chaque appel.
- [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame)
  - : La version moderne de `setInterval()`. Exécute un bloc de code spécifié avant que le navigateur ne repeigne ensuite l'affichage, ce qui permet à une animation d'être exécutée à une fréquence d'images appropriée, quel que soit l'environnement dans lequel elle est exécutée.

Le code asynchrone mis en place par ces fonctions s'exécute sur le processus principal (après l'écoulement de leur minuterie spécifiée).

Il est important de savoir que vous pouvez (et allez souvent) exécuter un autre code avant qu'un appel `setTimeout()` ne s'exécute, ou entre les itérations de `setInterval()`. Selon l'intensité du processeur de ces opérations, elles peuvent retarder encore plus votre code asynchrone, car tout code asynchrone ne s'exécutera qu'_après_ la disponibilité du processus principal. (En d'autres termes, lorsque la pile est vide.) Vous en apprendrez davantage à ce sujet au fur et à mesure que vous progresserez dans cet article.

Dans tous les cas, ces fonctions sont utilisées pour exécuter des animations constantes et d'autres traitements en arrière-plan sur un site Web ou une application. Dans les sections suivantes, nous allons vous montrer comment les utiliser.

## setTimeout()

Comme nous l'avons dit précédemment, [`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) exécute un bloc de code particulier une fois qu'un temps spécifié s'est écoulé. Il prend les paramètres suivants :

- Une fonction à exécuter, ou une référence à une fonction définie ailleurs.
- Un nombre représentant l'intervalle de temps en millisecondes (1000 millisecondes équivalent à 1 seconde) à attendre avant d'exécuter le code. Si vous spécifiez une valeur de `0` (ou omettez la valeur), la fonction sera exécutée dès que possible. (Voir la note ci-dessous sur la raison pour laquelle elle s'exécute "dès que possible" et non "immédiatement"). Plus d'informations sur les raisons pour lesquelles vous pourriez vouloir faire cela plus tard.
- Zéro ou plusieurs valeurs représentant les paramètres que vous souhaitez transmettre à la fonction lors de son exécution.

> **Note :** La quantité de temps spécifiée (ou le délai) n'est **pas** le _temps garanti_ à l'exécution, mais plutôt le _temps minimum_ à l'exécution. Les rappels que vous passez à ces fonctions ne peuvent pas s'exécuter tant que la pile du processus principal n'est pas vide.
>
> En conséquence, un code comme `setTimeout(fn, 0)` s'exécutera dès que la pile sera vide, **pas** immédiatement. Si vous exécutez un code comme `setTimeout(fn, 0)` mais qu'immédiatement après vous exécutez une boucle qui compte de 1 à 10 milliards, votre rappel sera exécuté après quelques secondes.

Dans l'exemple suivant, le navigateur attendra deux secondes avant d'exécuter la fonction anonyme, puis affichera le message d'alerte ([voir son exécution en direct](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-settimeout.html), et [voir le code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-settimeout.html)) :

```js
let maSalutation = setTimeout(() => {
  console.log('Bonjour, M. Univers !');
}, 2000);
```

Les fonctions que vous spécifiez n'ont pas besoin d'être anonymes. Vous pouvez donner un nom à votre fonction, et même la définir ailleurs et passer une référence de fonction à `setTimeout()`. Les deux versions suivantes de l'extrait de code sont équivalentes à la première :

```js
// Avec une fonction nommée
let maSalutation = setTimeout(function direBonjour() {
  console.log('Bonjour, M. Univers !');
}, 2000);

// Avec une fonction définie séparément
function direBonjour() {
  console.log('Bonjour, M. Univers !');
}

let maSalutation = setTimeout(direBonjour, 2000);
```

Cela peut être utile si vous avez une fonction qui doit être appelée à la fois à partir d'un délai d'attente et en réponse à un événement, par exemple. Mais cela peut aussi vous aider à garder votre code en ordre, surtout si le rappel du délai d'attente représente plus de quelques lignes de code.

`setTimeout()` renvoie une valeur d'identifiant qui peut être utilisée pour faire référence au délai d'attente ultérieurement, par exemple lorsque vous souhaitez l'arrêter. Voir [Effacement des délais d'attente](#clearing_timeouts) (ci-dessous) pour apprendre comment faire cela.

### Passage de paramètres à une fonction setTimeout()

Tous les paramètres que vous voulez passer à la fonction en cours d'exécution à l'intérieur du `setTimeout()` doivent lui être passés comme paramètres supplémentaires à la fin de la liste.

Par exemple, vous pouvez remanier la fonction précédente pour qu'elle dise bonjour à la personne dont le nom lui est transmis :

```js
function direBonjour(who) {
  console.log(`Bonjour ${who} !`);
}
```

Maintenant, vous pouvez passer le nom de la personne dans l'appel `setTimeout()` comme troisième paramètre :

```js
let maSalutation = setTimeout(direBonjour, 2000, 'M. Univers');
```

### Effacement des délais d'attente

Enfin, si un timeout a été créé, vous pouvez l'annuler avant que le temps spécifié ne se soit écoulé en appelant [`clearTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout), en lui passant en paramètre l'identifiant de l'appel `setTimeout()`. Donc pour annuler notre timeout ci-dessus, vous feriez ceci :

```js
clearTimeout(maSalutation);
```

> **Note :** Voir [`greeter-app.html`](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/greeter-app.html) pour une démo un peu plus élaborée qui permet de définir le nom de la personne à saluer dans un formulaire, et d'annuler la salutation à l'aide d'un bouton séparé ([voir aussi le code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/greeter-app.html)).

## setInterval()

`setTimeout()` fonctionne parfaitement lorsque vous devez exécuter du code une fois après une période de temps définie. Mais que se passe-t-il lorsque vous avez besoin d'exécuter le code encore et encore - par exemple, dans le cas d'une animation ?

C'est là qu'intervient le [`setInterval()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval). Cela fonctionne de manière très similaire à `setTimeout()`, sauf que la fonction que vous passez comme premier paramètre est exécutée de manière répétée à une fréquence égale au nombre de millisecondes donné par le deuxième paramètre distinct, plutôt qu'une seule fois. Vous pouvez également passer tous les paramètres requis par la fonction en cours d'exécution comme paramètres ultérieurs de l'appel `setInterval()`.

Prenons un exemple. La fonction suivante crée un nouvel objet [`Date()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), en extrait une chaîne de temps en utilisant [`toLocaleTimeString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString), puis l'affiche dans l'interface utilisateur. Elle exécute ensuite la fonction une fois par seconde à l'aide de `setInterval()`, créant l'effet d'une horloge numérique qui se met à jour une fois par seconde ([voir cela en direct](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), et aussi [voir la source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html)) :

```js
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```

Tout comme `setTimeout()`, `setInterval()` renvoie une valeur d'identification que vous pouvez utiliser plus tard lorsque vous devez effacer l'intervalle.

### Effacement des intervalles

`setInterval()` continue à exécuter une tâche pour toujours, à moins que vous ne fassiez quelque chose à ce sujet. Vous voudrez probablement un moyen d'arrêter de telles tâches, sinon vous pouvez finir par obtenir des erreurs lorsque le navigateur ne peut pas compléter d'autres versions de la tâche, ou si l'animation gérée par la tâche est terminée. Vous pouvez le faire de la même manière que vous arrêtez les temporisations - en passant l'identifiant renvoyé par l'appel `setInterval()` à la fonction [`clearInterval()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) :

```js
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);
```

#### Apprentissage actif : Créez votre propre chronomètre !

Tout ceci étant dit, nous avons un défi à vous proposer. Prenez une copie de notre exemple [`setInterval-clock.html`](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), et modifiez-le pour créer votre propre chronomètre simple.

Vous devez afficher une heure comme précédemment, mais dans cet exemple, vous avez besoin :

- Un bouton "Start" pour lancer le chronomètre.
- Un bouton "Stop" pour le mettre en pause/arrêter.
- Un bouton "Reset" pour réinitialiser le temps à `0`.
- L'affichage du temps pour indiquer le nombre de secondes écoulées, plutôt que le temps réel.

Voici quelques conseils pour vous :

- Vous pouvez structurer et styliser le balisage du bouton comme vous le souhaitez ; veillez simplement à utiliser du HTML sémantique, avec des crochets vous permettant de saisir les références du bouton à l'aide de JavaScript.
- Vous voulez probablement créer une variable qui commence à `0`, puis s'incrémente d'une unité toutes les secondes en utilisant une boucle constante.
- Il est plus facile de créer cet exemple sans utiliser un objet `Date()`, comme nous l'avons fait dans notre version, mais moins précis - vous ne pouvez pas garantir que le rappel se déclenchera après exactement `1000`ms. Une façon plus précise serait d'exécuter `startTime = Date.now()` pour obtenir un horodatage du moment exact où l'utilisateur a cliqué sur le bouton de démarrage, puis de faire `Date.now() - startTime` pour obtenir le nombre de millisecondes après le clic sur le bouton de démarrage.
- Vous souhaitez également calculer le nombre d'heures, de minutes et de secondes sous forme de valeurs distinctes, puis les afficher ensemble dans une chaîne de caractères après chaque itération de la boucle. À partir du deuxième compteur, vous pouvez calculer chacune de ces valeurs.
- Comment les calculeriez-vous ? Réfléchissez-y :

  - Le nombre de secondes dans une heure est de `3600`.
  - Le nombre de minutes sera le nombre de secondes restantes lorsque toutes les heures auront été retirées, divisé par `60`.
  - Le nombre de secondes sera le nombre de secondes restantes lorsque toutes les minutes auront été retirées.

- Vous devrez inclure un zéro de tête sur vos valeurs d'affichage si le montant est inférieur à `10`, afin que cela ressemble davantage à une horloge/chronomètre traditionnel.
- Pour mettre le chronomètre en pause, il faut effacer l'intervalle. Pour le réinitialiser, vous devrez remettre le compteur à `0`, effacer l'intervalle, puis mettre immédiatement à jour l'affichage.
- Vous devriez probablement désactiver le bouton de démarrage après l'avoir pressé une fois, et le réactiver après l'avoir arrêté/réinitialisé. Sinon, les pressions multiples sur le bouton de démarrage appliqueront plusieurs `setInterval()` à l'horloge, ce qui entraînera un comportement erroné.

> **Note :** Si vous êtes bloqué, vous pouvez [trouver notre version ici](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html)).

## Choses à garder à l'esprit concernant setTimeout() et setInterval()

Il y a quelques éléments à garder à l'esprit lorsque vous travaillez avec `setTimeout()` et `setInterval()`. Passons-les en revue maintenant.

### Délais récursifs

Il existe une autre façon d'utiliser `setTimeout()` : vous pouvez l'appeler de manière récursive pour exécuter le même code de manière répétée, au lieu d'utiliser `setInterval()`.

L'exemple ci-dessous utilise un `setTimeout()` récursif pour exécuter la fonction passée toutes les `100` millisecondes :

```js
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

Comparez l'exemple ci-dessus à celui qui suit - celui-ci utilise `setInterval()` pour accomplir le même effet :

```js
let i = 1;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);
```

#### Quelle est la différence entre le `setTimeout()` récursif et le `setInterval()` ?

La différence entre les deux versions du code ci-dessus est subtile.

- Le `setTimeout()` récursif garantit le délai indiqué entre les exécutions. L'attente de la prochaine exécution commencera uniquement après que le code ait fini de s'exécuter. Dans cet exemple, le code s'exécutera, puis attendra `100` millisecondes avant de s'exécuter à nouveau - l'intervalle sera donc le même, quelle que soit la durée d'exécution du code.
- L'exemple utilisant `setInterval()` fait les choses un peu différemment. L'intervalle que vous avez choisi _inclut_ le temps d'exécution du code que vous voulez exécuter. Disons que le code prend `40` millisecondes pour s'exécuter - l'intervalle finit alors par être seulement de `60` millisecondes.
- Lorsque vous utilisez `setTimeout()` de manière récursive, chaque itération peut calculer un délai différent avant d'exécuter l'itération suivante. En d'autres termes, la valeur du deuxième paramètre peut spécifier un temps différent en millisecondes à attendre avant d'exécuter à nouveau le code.

Lorsque votre code a le potentiel de prendre plus de temps à s'exécuter que l'intervalle de temps que vous avez assigné, il est préférable d'utiliser le `setTimeout()` récursif - cela maintiendra l'intervalle de temps constant entre les exécutions, quelle que soit la durée d'exécution du code, et vous n'obtiendrez pas d'erreurs.

### Délais immédiats

En utilisant `0` comme valeur pour `setTimeout()`, on planifie l'exécution de la fonction de rappel spécifiée dès que possible, mais seulement après l'exécution du processus de code principal.

Par exemple, le code ci-dessous ([voir en direct](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/zero-settimeout.html)) produit une alerte contenant `"Hello"`, puis une alerte contenant `"World"` dès que vous cliquez sur OK sur la première alerte.

```js
setTimeout(() => {
  alert('World');
}, 0);

alert('Hello');
```

Cela peut être utile dans les cas où vous souhaitez définir un bloc de code à exécuter dès que l'ensemble du thread principal a terminé son exécution - placez-le dans la boucle d'événement asynchrone, de sorte qu'il s'exécutera immédiatement après.

### Effacement avec clearTimeout() ou clearInterval()

`clearTimeout()` et `clearInterval()` utilisent toutes deux la même liste d'entrées pour effacer. Il est intéressant de noter que cela signifie que vous pouvez utiliser l'une comme l'autre méthode pour effacer un `setTimeout()` ou `setInterval()`.

Par souci de cohérence, vous devriez utiliser `clearTimeout()` pour effacer les entrées `setTimeout()` et `clearInterval()` pour effacer les entrées `setInterval()`. Cela permettra d'éviter toute confusion.

## requestAnimationFrame()

[`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame) est une fonction de bouclage spécialisée, créée pour exécuter des animations de manière efficace dans le navigateur. Elle exécute un bloc de code spécifié avant que le navigateur ne repeigne ensuite l'affichage, ce qui permet d'exécuter une animation à une fréquence de rafraîchissement appropriée, quel que soit l'environnement dans lequel elle est exécutée.

Elle a été créée en réponse aux problèmes perçus avec les fonctions asynchrones antérieures comme `setInterval()`, qui, par exemple, ne s'exécute pas à une fréquence d'images optimisée pour le matériel et continue à s'exécuter alors qu'elle pourrait s'arrêter lorsque l'onglet n'est plus actif ou si l'animation se déroule hors de la page, etc.

([Plus d'informations à ce sujet sur CreativeJS](http://creativejs.com/resources/requestanimationframe/index.html) (en).)

> **Note :** Vous trouverez des exemples d'utilisation de `requestAnimationFrame()` ailleurs dans le cours - voir par exemple [Dessiner des éléments graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics), et [La construction d'objet en pratique](/fr/docs/Learn/JavaScript/Objects/Object_building_practice).

La méthode prend comme argument un rappel à invoquer avant le repeignage. C'est le modèle général dans lequel vous le verrez utilisé :

```js
function draw() {
   // Le code du dessin va ici
   requestAnimationFrame(draw);
}

draw();
```

L'idée est de définir une fonction dans laquelle votre animation est mise à jour (par exemple, vos sprites sont déplacés, le score est mis à jour, les données sont rafraîchies, ou autre). Ensuite, vous l'appelez pour lancer le processus. À la fin du bloc de fonctions, vous appelez `requestAnimationFrame()` avec la référence de la fonction passée en paramètre, et cela indique au navigateur de rappeler la fonction lors du prochain rafraîchissement de l'affichage. Ceci est ensuite exécuté en continu, car le code appelle `requestAnimationFrame()` de manière récursive.

> **Note :** Si vous souhaitez réaliser une sorte d'animation DOM simple et constante, [les animations CSS](/fr/docs/Web/CSS/CSS_Animations) sont probablement plus rapides. Elles sont calculées directement par le code interne du navigateur, plutôt que par JavaScript.
>
> Si, toutefois, vous faites quelque chose de plus complexe et impliquant des objets qui ne sont pas directement accessibles à l'intérieur du DOM (comme les objets [2D Canvas API](/fr/docs/Web/API/Canvas_API) ou [WebGL](/fr/docs/Web/API/WebGL_API)), `requestAnimationFrame()` est la meilleure option dans la plupart des cas.

### Quelle est la vitesse de votre animation ?

La fluidité de votre animation dépend directement de la fréquence d'images de votre animation, qui est mesurée en images par seconde (ips). Plus ce nombre est élevé, plus votre animation sera fluide, jusqu'à un certain point.

Comme la plupart des écrans ont une fréquence de rafraîchissement de 60 Hz, la fréquence d'images la plus rapide que vous pouvez viser est de 60 images par seconde (IPS) lorsque vous travaillez avec des navigateurs Web. Cependant, plus d'images signifie plus de traitement, ce qui peut souvent provoquer des saccades et des sauts - également connus sous le nom de _dégradation des images_, ou _saccades_.

Si vous disposez d'un moniteur avec une fréquence de rafraîchissement de 60 Hz et que vous souhaitez obtenir 60 IPS, vous disposez d'environ 16,7 millisecondes (`1000 / 60`) pour exécuter votre code d'animation et rendre chaque image. Ceci est un rappel que vous devrez être attentif à la quantité de code que vous essayez d'exécuter pendant chaque passage dans la boucle d'animation.

`requestAnimationFrame()` essaie toujours de se rapprocher le plus possible de cette valeur magique de 60 IPS. Parfois, ce n'est pas possible - si vous avez une animation vraiment complexe et que vous l'exécutez sur un ordinateur lent, votre fréquence d'images sera inférieure. Dans tous les cas, `requestAnimationFrame()` fera toujours du mieux qu'il peut avec ce dont il dispose.

### En quoi requestAnimationFrame() diffère-t-il de setInterval() et setTimeout() ?

Parlons un peu plus de la façon dont la méthode `requestAnimationFrame()` diffère des autres méthodes utilisées précédemment. En regardant notre code d'en haut :

```js
function draw() {
   // Le code du dessin va ici
   requestAnimationFrame(draw);
}

draw();
```

Voyons maintenant comment faire la même chose en utilisant `setInterval()` :

```js
function draw() {
   // Le code du dessin va ici
}

setInterval(draw, 17);
```

Comme nous l'avons couvert précédemment, vous ne spécifiez pas d'intervalle de temps pour `requestAnimationFrame()`. Il l'exécute simplement aussi vite et aussi bien que possible dans les conditions actuelles. Le navigateur ne perd pas non plus de temps à l'exécuter si l'animation est hors écran pour une raison quelconque, etc.

`setInterval()`, d'autre part _exige_ qu'un intervalle soit spécifié. Nous sommes arrivés à notre valeur finale de 17 via la formule _1000 millisecondes / 60Hz_, puis nous l'avons arrondie. Arrondir vers le haut est une bonne idée ; si vous arrondissez vers le bas, le navigateur pourrait essayer d'exécuter l'animation à une vitesse supérieure à 60 FPS, et cela ne ferait de toute façon aucune différence pour la fluidité de l'animation. Comme nous l'avons déjà dit, 60 Hz est la fréquence de rafraîchissement standard.

### Inclure un horodatage

Le rappel réel passé à la fonction `requestAnimationFrame()` peut également recevoir un paramètre : une valeur _timestamp_, qui représente le temps depuis que le `requestAnimationFrame()` a commencé à s'exécuter.

C'est utile car cela vous permet d'exécuter des choses à des moments précis et à un rythme constant, quelle que soit la vitesse ou la lenteur de votre appareil. Le modèle général que vous utiliserez ressemble à quelque chose comme ceci :

```js
let startTime = null;

function draw(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

   currentTime = timestamp - startTime;

   // Faire quelque chose en fonction du temps actuel

   requestAnimationFrame(draw);
}

draw();
```

### Prise en charge des navigateurs

`requestAnimationFrame()` est supporté par des navigateurs plus récents que pour `setInterval()`/`setTimeout()`. Il est intéressant de noter qu'elle est disponible dans Internet Explorer 10 et plus.

Ainsi, à moins que vous ne deviez prendre en charge d'anciennes versions d'IE, il y a peu de raisons de ne pas utiliser `requestAnimationFrame()`.

### Un exemple simple

Assez avec la théorie ! Construisons votre propre exemple personnel de `requestAnimationFrame()`. Vous allez créer une simple "animation de toupie" - le genre que vous pourriez voir affiché dans une application lorsqu'elle est occupée à se connecter au serveur, etc.

> **Note :** Dans un exemple du monde réel, vous devriez probablement utiliser des animations CSS pour exécuter ce type d'animation simple. Cependant, ce genre d'exemple est très utile pour démontrer l'utilisation de `requestAnimationFrame()`, et vous seriez plus susceptible d'utiliser ce genre de technique lorsque vous faites quelque chose de plus complexe comme la mise à jour de l'affichage d'un jeu à chaque image.

1.  Prenez un modèle HTML de base ([comme celui-ci](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)).
2.  Placez un élément [`<div>`](/fr/docs/Web/HTML/Element/div) vide à l'intérieur de l'élément [`<body>`](/fr/docs/Web/HTML/Element/body), puis ajoutez un caractère ↻ à l'intérieur. Ce caractère de flèche circulaire fera office de notre toupie pour cet exemple.
3.  Appliquez le CSS suivant au modèle HTML (de la manière que vous préférez). Cela définit un fond rouge sur la page, définit la hauteur du `<body>` à `100%` de la hauteur de [`<html>`](/fr/docs/Web/HTML/Element/html), et centre le `<div>` à l'intérieur du `<body>`, horizontalement et verticalement.

    ```css
    html {
      background-color: white;
      height: 100%;
    }

    body {
      height: inherit;
      background-color: red;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      display: inline-block;
      font-size: 10rem;
    }
    ```

4.  Insérez un élément [`<script>`](/fr/docs/Web/HTML/Element/script) juste au-dessus de la balise de fermeture `</body>`.
5.  Insérez le JavaScript suivant dans votre élément `<script>`. Ici, vous stockez une référence à l'élément `<div>`.  l'intérieur d'une constante, définissez une variable `rotateCount` à `0`, définissez une variable non initialisée qui sera utilisée plus tard pour contenir une référence à l'appel `requestAnimationFrame()`, et en définissant une variable `startTime` à `null`, qui sera plus tard utilisée pour stocker l'heure de début de l'appel `requestAnimationFrame()`.

    ```js
    const spinner = document.querySelector('div');
    let rotateCount = 0;
    let startTime = null;
    let rAF;
    ```

6.  Sous le code précédent, insérez une fonction `draw()` qui sera utilisée pour contenir notre code d'animation, qui inclut le paramètre `timestamp` :

    ```js
    function draw(timestamp) {

    }
    ```

7.  À l'intérieur de `draw()`, ajoutez les lignes suivantes. Elles définiront l'heure de départ si elle n'est pas déjà définie (cela ne se produira que lors de la première itération de la boucle), et définiront le `rotateCount` à une valeur pour faire tourner le spinner par (l'horodatage actuel, prendre l'horodatage de départ, divisé par trois pour que cela n'aille pas trop vite) :

    ```js
      if(!startTime) {
       startTime = timestamp;
      }

      rotateCount = (timestamp - startTime) / 3;
    ```

8.  Sous la ligne précédente à l'intérieur de `draw()`, ajoutez le bloc suivant - il s'assure que la valeur de `rotateCount` est comprise entre `0` et `360` en utilisant le modulo à 360 (c'est-à-dire le reste restant lorsque la valeur est divisée par `360`) afin que l'animation du cercle puisse continuer sans interruption, à une valeur basse et raisonnable. Notez que ce n'est pas strictement nécessaire, mais il est plus facile de travailler avec des valeurs de 0-359 degrés que des valeurs comme `"128000 degrés"`.

    ```js
    rotateCount %= 360;
    ```

9.  Ensuite, sous le bloc précédent, ajoutez la ligne suivante pour faire tourner le spinner :

    ```js
    spinner.style.transform = `rotate(${rotateCount}deg)`;
    ```

10. Tout en bas, à l'intérieur de la fonction `draw()`, insérez la ligne suivante. C'est la clé de toute l'opération - vous définissez la variable définie précédemment à un appel actif `requestAnimation()`, qui prend la fonction `draw()` comme paramètre. Cela fait démarrer l'animation, en exécutant constamment la fonction `draw()` à un taux aussi proche que possible de 60 IPS.

    ```js
    rAF = requestAnimationFrame(draw);
    ```

11. Sous la définition de la fonction `draw()`, ajoutez un appel à la fonction `draw()` pour lancer l'animation.

    ```js
    draw();
    ```

> **Note :** Vous pouvez trouver l'[exemple terminé en direct sur GitHub](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html). (Vous pouvez également voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html)).

### Effacer un appel de requestAnimationFrame()

Effacer un appel de `requestAnimationFrame()` peut être fait en appelant la méthode `cancelAnimationFrame()` correspondante. (Notez que le nom de la fonction commence par "cancel", et non par "clear" comme pour les méthodes "set...").

Il suffit de lui passer la valeur renvoyée par l'appel `requestAnimationFrame()` à annuler, que vous avez stockée dans la variable `rAF` :

```js
cancelAnimationFrame(rAF);
```

### Apprentissage actif : Démarrer et arrêter la toupie

Dans cet exercice, nous aimerions que vous testiez la méthode `cancelAnimationFrame()` en prenant notre exemple précédent et en le mettant à jour, en ajoutant un écouteur d'événements pour démarrer et arrêter le spinner lorsque la souris est cliquée n'importe où sur la page.

Quelques conseils :

- Un écouteur d'événements `click` peut être ajouté à la plupart des éléments, y compris le document `<body>`. Il est plus logique de le placer sur l'élément `<body>` si vous voulez maximiser la zone cliquable - l'événement remonte jusqu'à ses éléments enfants.
- Vous voudrez ajouter une variable de suivi pour vérifier si la toupie tourne ou non, effacer le cadre d'animation si c'est le cas, et le rappeler si ce n'est pas le cas.

> **Note :** Essayez d'abord vous-même ; si vous êtes vraiment bloqué, consultez nos pages [exemple en direct](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html) et [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html).

### Ralentissement d'une animation requestAnimationFrame()

Une limitation de `requestAnimationFrame()` est que vous ne pouvez pas choisir votre fréquence d'images. Ce n'est pas un problème la plupart du temps, car en général, vous voulez que votre animation se déroule de la manière la plus fluide possible. Mais qu'en est-il lorsque vous souhaitez créer une animation old school, de style 8 bits ?

C'était un problème, par exemple, dans l'animation de marche inspirée de Monkey Island de notre article [Dessiner des éléments graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) :

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html", '100%', 260)}}

Dans cet exemple, vous devez animer à la fois la position du personnage à l'écran et le sprite affiché. Il n'y a que 6 images dans l'animation du sprite. Si vous montriez une image différente du sprite pour chaque image affichée à l'écran par `requestAnimationFrame()`, Guybrush bougerait ses membres trop vite et l'animation aurait l'air ridicule. Cet exemple étrangle la vitesse à laquelle le sprite cycle ses images en utilisant le code suivant :

```js
if (posX % 13 === 0) {
  if (sprite === 5) {
    sprite = 0;
  } else {
    sprite++;
  }
}
```

Ainsi, le code ne cycle le sprite qu'une fois toutes les 13 images d'animation.

...En fait, c'est environ toutes les 6,5 images, car nous mettons à jour `posX` (position du personnage sur l'écran) par deux à chaque image :

```js
if (posX > width/2) {
  newStartPos = -( (width/2) + 102 );
  posX = Math.ceil(newStartPos / 13) * 13;
  console.log(posX);
} else {
  posX += 2;
}
```

C'est le code qui calcule comment mettre à jour la position dans chaque image d'animation.

La méthode que vous utilisez pour accélérer votre animation dépendra de votre code particulier. Par exemple, dans l'exemple précédent de la toupie, vous pourriez faire en sorte qu'elle semble se déplacer plus lentement en n'augmentant le `rotateCount` que de un à chaque image, au lieu de deux.

## Apprentissage actif : un jeu de réaction

Pour la dernière section de cet article, vous allez créer un jeu de réaction à 2 joueurs. Le jeu aura deux joueurs, dont l'un contrôlera le jeu à l'aide de la touche <kbd>A</kbd>, et l'autre avec la touche <kbd>L</kbd>.

Lorsque l'on appuie sur le bouton _Start_, une toupie comme celle que nous avons vue précédemment s'affiche pendant un temps aléatoire compris entre 5 et 10 secondes. Après ce temps, un message apparaîtra disant `"PLAYERS GO !!"` - une fois que cela se produit, le premier joueur à appuyer sur son bouton de contrôle gagnera la partie.

{{EmbedGHLiveSample("learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html", '100%', 500)}}

Travaillons ensemble :

1.  Tout d'abord, téléchargez le [fichier de démarrage de l'application](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game-starter.html). Celui-ci contient la structure HTML et le style CSS finis, ce qui nous donne un plateau de jeu qui affiche les informations des deux joueurs (comme vu ci-dessus), mais avec le spinner et le paragraphe des résultats affichés l'un au-dessus de l'autre. Il ne vous reste plus qu'à écrire le code JavaScript.
2.  À l'intérieur de l'élément vide [`<script>`](/fr/docs/Web/HTML/Element/script) de votre page, commencez par ajouter les lignes de code suivantes qui définissent certaines constantes et variables dont vous aurez besoin dans le reste du code :

    ```js
    const spinner = document.querySelector('.spinner p');
    const spinnerContainer = document.querySelector('.spinner');
    let rotateCount = 0;
    let startTime = null;
    let rAF;
    const btn = document.querySelector('button');
    const result = document.querySelector('.result');
    ```

    Dans l'ordre, ce sont :

    1.  Une référence à la toupie, afin que vous puissiez l'animer.
    2.  Une référence à l'élément [`<div>`](/fr/docs/Web/HTML/Element/div) qui contient la toupie, utilisée pour l'afficher et la masquer.
    3.  Un nombre de rotations. Ce paramètre détermine le nombre de rotations de la toupie que vous souhaitez afficher à chaque image de l'animation.
    4.  Un temps de démarrage nul. Il sera rempli avec une heure de début lorsque la toupie commencera à tourner.
    5.  Une variable non initialisée pour stocker ultérieurement l'appel [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame) qui anime la toupie.
    6.  Une référence au bouton de démarrage.
    7.  Une référence au paragraphe des résultats.

3.  Ensuite, sous les lignes de code précédentes, ajoutez la fonction suivante. Elle prend deux nombres et retourne un nombre aléatoire entre les deux. Vous en aurez besoin pour générer un intervalle de temps aléatoire plus tard.

    ```js
    function random(min,max) {
      var num = Math.floor(Math.random()*(max-min)) + min;
      return num;
    }
    ```

4.  Ajoutez ensuite la fonction `draw()`, qui anime la toupie. Cette version est très similaire à celle de l'exemple simple de la toupie, plus haut :

    ```js
    function draw(timestamp) {
      if(!startTime) {
       startTime = timestamp;
      }

      rotateCount = (timestamp - startTime) / 3;

      rotateCount %= 360;

      spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
      rAF = requestAnimationFrame(draw);
    }
    ```

5.  Il est maintenant temps de mettre en place l'état initial de l'application lors du premier chargement de la page. Ajoutez les deux lignes suivantes, qui masquent le paragraphe des résultats et le conteneur de la toupie en utilisant `display : none;`.

    ```js
    result.style.display = 'none';
    spinnerContainer.style.display = 'none';
    ```

6.  Ensuite, définissez une fonction `reset()`, qui remet l'application dans l'état initial nécessaire pour relancer le jeu après qu'il a été joué. Ajoutez ce qui suit au bas de votre code :

    ```js
    function reset() {
      btn.style.display = 'block';
      result.textContent = '';
      result.style.display = 'none';
    }
    ```

7.  Bon, assez de préparation ! Il est temps de rendre le jeu jouable ! Ajoutez le bloc suivant à votre code. La fonction `start()` appelle `draw()` pour commencer à faire tourner la toupie et l'afficher dans l'interface utilisateur, cache le bouton _Start_ pour que vous ne puissiez pas perturber le jeu en le démarrant plusieurs fois simultanément, et exécute un appel `setTimeout()` qui exécute une fonction `setEndgame()` après qu'un intervalle aléatoire entre 5 et 10 secondes se soit écoulé. Le bloc suivant ajoute également un écouteur d'événements à votre bouton pour exécuter la fonction `start()` lorsqu'il est cliqué.

    ```js
    btn.addEventListener('click', start);

    function start() {
      draw();
      spinnerContainer.style.display = 'block';
      btn.style.display = 'none';
      setTimeout(setEndgame, random(5000,10000));
    }
    ```

    > **Note :** Vous verrez que cet exemple appelle `setTimeout()` sans stocker la valeur de retour. (Donc, pas `let myTimeout = setTimeout(functionName, interval)`.)
    >
    > Cela fonctionne très bien, tant que vous n'avez pas besoin d'effacer votre intervalle/temps d'attente à un moment donné. Si vous le faites, vous devrez sauvegarder l'identifiant renvoyé !

    Le résultat net du code précédent est que lorsque le bouton _Start_ est pressé, la toupie est affichée et les joueurs sont amenés à attendre un temps aléatoire avant d'être invités à appuyer sur leur bouton. Cette dernière partie est gérée par la fonction `setEndgame()`, que vous allez définir ensuite.

8.  Ajoutez ensuite la fonction suivante à votre code :

    ```js
    function setEndgame() {
      cancelAnimationFrame(rAF);
      spinnerContainer.style.display = 'none';
      result.style.display = 'block';
      result.textContent = 'JOUEURS : ALLEZ-Y !!';

      document.addEventListener('keydown', keyHandler);

      function keyHandler(e) {
        let isOver = false;
        console.log(e.key);

        if (e.key === "a") {
          result.textContent = 'Le joueur 1 a gagné !!';
          isOver = true;
        } else if (e.key === "l") {
          result.textContent = 'Le joueur 2 a gagné !!';
          isOver = true;
        }

        if (isOver) {
          document.removeEventListener('keydown', keyHandler);
          setTimeout(reset, 5000);
        }
      };
    }
    ```

    Son fonctionnement :

    1.  Tout d'abord, annule l'animation de la toupie avec [`cancelAnimationFrame()`](/fr/docs/Web/API/Window/cancelAnimationFrame) (il est toujours bon de nettoyer les processus inutiles), et cache le conteneur de la toupie.
    2.  Ensuite, affiche le paragraphe des résultats et définissez son contenu textuel sur "JOUEURS : ALLEZ-Y !!" pour signaler aux joueurs qu'ils peuvent maintenant appuyer sur leur bouton pour gagner.
    3.  Attache un écouteur d'événements [`keydown`](/fr/docs/Web/API/Document/keydown_event) au document. Lorsqu'un bouton quelconque est enfoncé, la fonction `keyHandler()` est exécutée.
    4.  À l'intérieur de `keyHandler()`, le code inclut l'objet événement en tant que paramètre (représenté par `e`) - sa propriété [`key`](/fr/docs/Web/API/KeyboardEvent/key) contient la touche qui vient d'être pressée, et vous pouvez l'utiliser pour répondre à des pressions de touche spécifiques par des actions spécifiques.
    5.  Définit la variable `isOver` à false, afin que nous puissions suivre si les bonnes touches ont été pressées pour que le joueur 1 ou 2 gagne. Nous ne voulons pas que le jeu se termine lorsqu'une mauvaise touche a été pressée.
    6.  Enregistre `e.key` dans la console, ce qui est un moyen utile de connaître la valeur `key` des différentes touches sur lesquelles vous appuyez.
    7.  Lorsque `e.key` est "a", affiche un message pour dire que le joueur 1 a gagné, et lorsque `e.key` est "l", affiche un message pour dire que le joueur 2 a gagné. (**Note:** Cela ne fonctionnera qu'avec les minuscules a et l - si un A ou un L majuscule est soumis (la touche plus

        <kbd>Shift</kbd>

        ), il est compté comme une touche différente !). Si une de ces touches a été pressée, mettez `isOver` à `true`.

    8.  Seulement si `isOver` est `true`, supprime l'écouteur d'événements `keydown` en utilisant [`removeEventListener()`](/fr/docs/Web/API/EventTarget/removeEventListener) de sorte qu'une fois que l'appui gagnant s'est produit, plus aucune entrée clavier n'est possible pour perturber le résultat final du jeu. Vous utilisez également `setTimeout()` pour appeler `reset()` après 5 secondes - comme expliqué précédemment, cette fonction réinitialise le jeu à son état initial afin qu'une nouvelle partie puisse être lancée.

Voilà, c'est fait !

> **Note :** Si vous êtes bloqué, consultez [notre version du jeu en live](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html) (voir également le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game.html)).

## Conclusion

Voilà, tous les éléments essentiels des boucles et des intervalles asynchrones sont couverts dans un seul article. Vous trouverez ces méthodes utiles dans de nombreuses situations, mais veillez à ne pas en abuser ! Parce qu'ils s'exécutent toujours sur le processus principal, les rappels lourds et intensifs (en particulier ceux qui manipulent le DOM) peuvent vraiment ralentir une page si vous ne faites pas attention.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Faciliter la programmation asynchrone avec async et await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
