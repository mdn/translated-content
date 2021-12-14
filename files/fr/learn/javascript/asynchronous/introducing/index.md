---
title: Introduction au JavaScript asynchrone
slug: Learn/JavaScript/Asynchronous/Introducing
tags:
  - Beginner
  - CodingScripting
  - Guide
  - Introducing
  - JavaScript
  - Learn
  - Promises
  - async
  - asynchronous
  - await
  - callbacks
translation_of: Learn/JavaScript/Asynchronous/Introducing
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Concepts", "Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous")}}

Dans cet article, nous récapitulons brièvement les problèmes associés au JavaScript synchrone, et nous jetons un premier coup d'œil à certaines des différentes techniques asynchrones que vous rencontrerez, en montrant comment elles peuvent nous aider à résoudre ces problèmes.

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
        Se familiariser avec ce qu'est le JavaScript asynchrone, comment il
        diffère du JavaScript synchrone et quels sont ses cas d'utilisation.
      </td>
    </tr>
  </tbody>
</table>

## JavaScript synchrone

Pour nous permettre de comprendre ce qu'est le JavaScript **[asynchrone](/fr/docs/Glossary/Asynchronous)**, nous devons commencer par nous assurer que nous comprenons ce qu'est le JavaScript **[synchrone](/fr/docs/Glossary/Synchronous)**. Cette section récapitule certaines des informations que nous avons vues dans l'article précédent.

Une grande partie des fonctionnalités que nous avons examinées dans les modules précédents du domaine d'apprentissage sont synchrones - vous exécutez un certain code, et le résultat est renvoyé dès que le navigateur peut le faire. Examinons un exemple simple ([voir en direct ici](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/basic-function.html), et [voir la source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/basic-function.html)) :

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert(`Vous avez cliqué sur moi !`);

  let pElem = document.createElement('p');
  pElem.textContent = `Il s'agit d'un paragraphe nouvellement ajouté.`;
  document.body.appendChild(pElem);
});
```

Dans ce bloc, les lignes sont exécutées les unes après les autres :

1.  Nous saisissons une référence à un élément [`<button>`](/fr/docs/Web/HTML/Element/Button) qui est déjà disponible dans le DOM.
2.  Nous lui ajoutons un écouteur d'événements [`click`](/fr/docs/Web/API/Element/click_event) afin que lorsque le bouton est cliqué :

    1.  Un message [`alert()`](/fr/docs/Web/API/Window/alert) apparaît.
    2.  Une fois l'alerte rejetée, nous créons un élément [`<p>`](/fr/docs/Web/HTML/Element/p).
    3.  Nous lui donnons ensuite du contenu textuel.
    4.  Enfin, nous ajoutons le paragraphe au corps du document.

Pendant que chaque opération est en cours de traitement, rien d'autre ne peut se produire - le rendu est mis en pause. Cela est dû au fait que, comme nous l'avons dit dans l'[article précédent](/fr/docs/Learn/JavaScript/Asynchronous/Concepts), [JavaScript est ne dispose que d'un seul _thread_](/fr/docs/Learn/JavaScript/Asynchronous/Concepts#javascript_is_single_threaded). Une seule chose peut se produire à la fois, sur le _thread_ principal, et tout le reste est bloqué jusqu'à la fin d'une opération.

Ainsi, dans l'exemple ci-dessus, après avoir cliqué sur le bouton, le paragraphe n'apparaîtra qu'après avoir appuyé sur le bouton OK dans la boîte d'alerte. Vous pouvez l'essayer vous-même :

```html hidden
<button>Cliquez sur moi</button>
```

{{EmbedLiveSample('JavaScript_synchrone', '100%', '110px')}}

> **Note :** Il est important de se rappeler que [`alert()`](/fr/docs/Web/API/Window/alert), tout en étant très utile pour démontrer une opération de blocage synchrone, est horrible à utiliser dans des applications du monde réel.

## JavaScript asynchrone

Pour des raisons illustrées précédemment (par exemple, en rapport avec le blocage), de nombreuses fonctionnalités des API Web utilisent désormais du code asynchrone pour s'exécuter, en particulier celles qui accèdent à un type de ressource ou le récupèrent à partir d'un périphérique externe, par exemple en récupérant un fichier sur le réseau, en accédant à une base de données et en renvoyant des données, en accédant à un flux vidéo à partir d'une webcam ou en diffusant l'affichage vers un casque VR.

Pourquoi est-il difficile de faire fonctionner un code synchrone ? Prenons un exemple rapide. Lorsque vous récupérez une image sur un serveur, vous ne pouvez pas renvoyer le résultat immédiatement. Cela signifie que l'exemple suivant (pseudocode) ne fonctionnerait pas :

```js
let response = fetch('myImage.png'); // la récupération est asynchrone
let blob = response.blob();
// afficher votre blob d'image à l'écran d'une manière ou d'une autre
```

C'est parce que vous ne savez pas combien de temps l'image prendra pour être téléchargée, donc lorsque vous viendrez à exécuter la deuxième ligne, elle lancera une erreur (éventuellement par intermittence, éventuellement à chaque fois) parce que la réponse `response` n'est pas encore disponible. Au lieu de cela, vous avez besoin que votre code attende que la réponse `response` soit retournée avant d'essayer de lui faire quoi que ce soit d'autre.

Il existe deux principaux types de code asynchrone que vous rencontrerez dans le code JavaScript : les anciens rappels et le code plus récent de type promesse. Dans les sections suivantes, nous allons examiner chacun d'eux à tour de rôle.

## Fonctions de rappel asynchrones

Les _callbacks_ asynchrones ou fonctions de rappels asynchrones sont des fonctions qui sont passées comme arguments lors de l'appel d'une fonction qui commencera à exécuter du code en arrière-plan. Lorsque le code d'arrière-plan a fini de s'exécuter, il appelle la fonction de rappel pour vous faire savoir que le travail est terminé, ou pour vous faire savoir que quelque chose d'intéressant s'est produit. L'utilisation des _callbacks_ est un peu démodée aujourd'hui, mais vous les verrez encore dans un certain nombre d'API plus anciennes encore couramment utilisées.

Un exemple de rappel asynchrone est le deuxième paramètre de la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) (comme nous pouvons le voir en action ci-dessous) :

```js
btn.addEventListener('click', () => {
  alert(`Vous avez cliqué sur moi !`);

  let pElem = document.createElement('p');
  pElem.textContent = `Il s'agit d'un paragraphe nouvellement ajouté.`;
  document.body.appendChild(pElem);
});
```

Le premier paramètre est le type d'événement à écouter, et le deuxième paramètre est une fonction de rappel qui est invoquée lorsque l'événement est déclenché.

Lorsque nous passons une fonction de rappel comme argument à une autre fonction, nous ne passons que la référence de la fonction comme argument, c'est-à-dire que la fonction de rappel n'est **pas** exécutée immédiatement. Elle est « rappelée » (d'où son nom) de manière asynchrone quelque part dans le corps de la fonction contenante. La fonction contenante est responsable de l'exécution de la fonction de rappel le moment venu.

Vous pouvez écrire votre propre fonction contenant un _callback_ assez facilement. Examinons un autre exemple qui charge une ressource via l'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) ([exécutez-le code en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/xhr-async-callback.html), et [voir sa source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/xhr-async-callback.html)) :

```js
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```

Ici, nous créons une fonction `displayImage()` qui représente un blob qui lui est passé sous forme d'URL d'objet, puis crée une image dans laquelle afficher l'URL, en l'annexant au `<body>` du document. Cependant, nous créons ensuite une fonction `loadAsset()` qui prend une fonction de rappel en paramètre, ainsi qu'une URL à récupérer et un type de contenu. Elle utilise `XMLHttpRequest` (souvent abrégé en "XHR") pour récupérer la ressource à l'URL donnée, puis passe la réponse à la fonction de rappel pour qu'elle fasse quelque chose avec. Dans ce cas, le callback attend que l'appel XHR termine le téléchargement de la ressource (en utilisant l'écouteur d'événement [`onload`](/fr/docs/Web/API/XMLHttpRequestEventTarget/onload)) avant de la transmettre au _callback_.

Les fonctions de rappel sont polyvalentes - non seulement elles permettent de contrôler l'ordre dans lequel les fonctions sont exécutées et quelles données sont transmises entre elles, mais elles permettent également de transmettre des données à différentes fonctions en fonction des circonstances. Ainsi, vous pourriez avoir différentes actions à exécuter sur la réponse téléchargée, comme `processingJSON()`, `displayText()`, etc.

Notez que tous les _callbacks_ ne sont pas asynchrones - certains s'exécutent de manière synchrone. Par exemple, lorsque nous utilisons [`Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) pour parcourir en boucle les éléments d'un tableau ([voir en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/foreach.html), et [la source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/foreach.html)) :

```js
const gods = ['Apollon', 'Artémis', 'Arès', 'Zeus'];

gods.forEach(function (eachName, index){
  console.log(`${index}. ${eachName}`);
});
```

Dans cet exemple, nous parcourons en boucle un tableau de dieux grecs et nous imprimons les numéros d'index et les valeurs sur la console. Le paramètre attendu de `forEach()` est une fonction de rappel, qui prend elle-même deux paramètres, une référence au nom du tableau et aux valeurs d'index. Cependant, elle n'attend rien - elle s'exécute immédiatement.

## Promesses

Les promesses sont le nouveau style de code asynchrone que vous verrez utilisé dans les API Web modernes. Un bon exemple est l'API [`fetch()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch), qui est en fait comme une version moderne et plus efficace de [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest). Voyons un exemple rapide, tiré de notre article [Fetching data from the server](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) :

```js
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  let products = json;
  initialize(products);
}).catch(function(err) {
  console.log('Problème de récupération : ' + err.message);
});
```

> **Note :** Vous pouvez trouver la version finale sur GitHub ([voir la source ici](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-script.js), et aussi [voir le fonctionnement en direct](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/)).

Nous voyons ici `fetch()` prendre un seul paramètre - l'URL d'une ressource que vous souhaitez récupérer sur le réseau - et renvoyer une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). La promesse est un objet représentant l'achèvement ou l'échec de l'opération asynchrone. Elle représente un état intermédiaire, en quelque sorte. En substance, c'est la façon dont le navigateur dit « Je promets de vous donner la réponse dès que possible », d'où le nom de « promesse ».

Il faut parfois s'habituer à ce concept, qui ressemble un peu au [Chat de Schrödinger](https://fr.wikipedia.org/wiki/Chat_de_Schrödinger) en action. Aucun des résultats possibles ne s'est encore produit, donc l'opération de récupération est actuellement en attente du résultat du navigateur qui tente de terminer l'opération à un moment donné dans le futur. Nous avons ensuite trois autres blocs de code enchaînés à la fin de `fetch()` :

- Deux blocs [`then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then). Ils contiennent tous deux une fonction de rappel qui s'exécutera si l'opération précédente est réussie, et chaque fonction de rappel reçoit en entrée le résultat de l'opération précédente réussie, afin que vous puissiez poursuivre et y faire autre chose. Chaque bloc `.then()` renvoie une autre promesse, ce qui signifie que vous pouvez enchaîner plusieurs blocs `.then()` les uns sur les autres, de sorte que plusieurs opérations asynchrones peuvent être exécutées dans l'ordre, les unes après les autres.
- Le bloc [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) à la fin s'exécute si l'un des blocs `.then()` échoue - de manière similaire aux blocs synchrones [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch), un objet d'erreur est mis à disposition à l'intérieur du `catch()`, qui peut être utilisé pour signaler le type d'erreur qui s'est produit. Notez cependant que le `try...catch` synchrone ne fonctionnera pas avec les promesses, bien qu'il fonctionne avec [async/await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await), comme vous l'apprendrez plus tard.

> **Note :** Vous en apprendrez beaucoup plus sur les promesses plus tard dans le module, alors ne vous inquiétez pas si vous ne les comprenez pas encore complètement.

### La file d'attente des événements

Les opérations asynchrones comme les promesses sont placées dans une **file d'attente d'événements**, qui s'exécute après que le processus principal a terminé son traitement afin qu'elles _ne bloquent pas_ l'exécution du code JavaScript suivant. Les opérations mises en file d'attente se terminent dès que possible puis renvoient leurs résultats à l'environnement JavaScript.

### Promesses contre callbacks

Les promesses présentent certaines similitudes avec les anciennes fonctions de rappel. Il s'agit essentiellement d'un objet retourné auquel vous attachez des fonctions de rappel, plutôt que de devoir passer des _callbacks_ dans une fonction.

Cependant, les promesses sont spécifiquement conçues pour gérer les opérations asynchrones et présentent de nombreux avantages par rapport aux fonctions de rappel classiques :

- Vous pouvez enchaîner plusieurs opérations asynchrones en utilisant plusieurs opérations `.then()`, en passant le résultat de l'une dans la suivante comme entrée. Ceci est beaucoup plus difficile à faire avec les fonctions de rappel, ce qui aboutit souvent à une « pyramide de malheur » désordonnée (également connue sous le nom de [callback hell](http://callbackhell.com/)).
- Les fonctions de rappel passées aux promesses sont toujours appelées dans l'ordre strict où ils sont placés dans la file d'attente des événements.
- La gestion des erreurs est bien meilleure - toutes les erreurs sont traitées par un seul bloc `.catch()` à la fin du bloc, plutôt que d'être traitées individuellement à chaque niveau de la « pyramide ».
- Les promesses évitent l'inversion de contrôle, contrairement aux callbacks à l'ancienne, qui perdent le contrôle total de la façon dont la fonction sera exécutée lorsqu'ils sont transmis à une bibliothèque tierce.

## La nature du code asynchrone

Explorons un exemple qui illustre davantage la nature du code asynchrone, en montrant ce qui peut se produire lorsque nous ne sommes pas pleinement conscients de l'ordre d'exécution du code et les problèmes liés à la tentative de traiter le code asynchrone comme du code synchrone. L'exemple suivant est assez similaire à ce que nous avons vu auparavant ([voir en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/async-sync.html), et [la source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync.html)). Une différence est que nous avons inclus un certain nombre d'instructions [`console.log()`](/fr/docs/Web/API/Console/log) pour illustrer un ordre dans lequel on pourrait penser que le code s'exécute.

```js
console.log(`Démarrage`);
let image;

fetch('coffee.jpg').then((response) => {
  console.log(`Ça a fonctionné :)`)
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log(`Il y a eu un problème avec votre opération de récupération : ${error.message}`);
});

console.log(`C'est fait !`);
```

Le navigateur va commencer à exécuter le code, voir la première instruction `console.log()` (`Démarrage`) et l'exécuter, puis créer la variable `image`.

Il passera ensuite à la ligne suivante et commencera à exécuter le bloc `fetch()` mais, comme `fetch()` s'exécute de manière asynchrone sans blocage, l'exécution du code se poursuit après le code lié à la promesse, atteignant ainsi l'instruction finale `console.log()` (`C'est fait !`) et la sortant sur la console.

Ce n'est qu'une fois que le bloc `fetch()` a complètement fini de s'exécuter et de délivrer son résultat à travers les blocs `.then()` que nous verrons enfin apparaître le deuxième message `console.log()` (`Ça a fonctionné :)`). Les messages sont donc apparus dans un ordre différent de celui auquel on pourrait s'attendre :

- Démarrage
- C'est fait !
- Ça a fonctionné :)

Si cela vous déconcerte, considérez le petit exemple suivant :

```js
console.log(`Enregistrement de l'événement de clics`);

button.addEventListener('click', () => {
  console.log(`Obtenir un clic`);
});

console.log(`Tout est bon !`);
```

Le comportement est très similaire - les premier et troisième messages `console.log()` s'affichent immédiatement, mais le deuxième est bloqué jusqu'à ce que quelqu'un clique sur le bouton de la souris. L'exemple précédent fonctionne de la même manière, sauf que dans ce cas, le deuxième message est bloqué sur la chaîne de promesses allant chercher une ressource puis l'affichant à l'écran, plutôt que sur un clic.

Dans un exemple de code moins trivial, ce type de configuration pourrait poser un problème - vous ne pouvez pas inclure un bloc de code asynchrone qui renvoie un résultat, sur lequel vous vous appuyez ensuite dans un bloc de code synchrone. Vous ne pouvez tout simplement pas garantir que la fonction asynchrone retournera avant que le navigateur ait traité le bloc de synchronisation.

Pour voir cela en action, essayez de prendre une copie locale de [notre exemple](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync.html), et changez le quatrième appel `console.log()` par le suivant :

```js
console.log (`Tout est bon ! ${image.src} est affiché.`);
```

Vous devriez maintenant obtenir une erreur dans votre console au lieu du troisième message :

    TypeError: image is undefined; can't access its "src" property

Cela est dû au fait qu'au moment où le navigateur tente d'exécuter la troisième instruction `console.log()`, le bloc `fetch()` n'a pas fini de s'exécuter, de sorte que la variable `image` n'a pas reçu de valeur.

> **Note :** Pour des raisons de sécurité, vous ne pouvez pas `fetch()` les fichiers de votre système de fichiers local (ou exécuter d'autres opérations de ce type localement) ; pour exécuter l'exemple ci-dessus localement, vous devrez le faire passer par un [serveur web local](/fr/docs/Learn/Common_questions/set_up_a_local_testing_server).

## Apprentissage actif : rendez tout asynchrone !

Pour corriger l'exemple problématique de `fetch()` et faire en sorte que les trois déclarations `console.log()` apparaissent dans l'ordre souhaité, vous pourriez faire en sorte que la troisième déclaration `console.log()` s'exécute également de manière asynchrone. Cela peut être fait en la déplaçant à l'intérieur d'un autre bloc `.then()` enchaîné à la fin du deuxième, ou en la déplaçant à l'intérieur du deuxième bloc `then()`. Essayez de corriger cela maintenant.

> **Note :** Si vous êtes bloqué, vous pouvez [trouver une réponse ici](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync-fixed.html) (voyez-la fonctionner [en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/async-sync-fixed.html)). Vous pouvez également trouver beaucoup plus d'informations sur les promesses dans notre guide [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises), plus loin dans ce module.

## Conclusion

Dans sa forme la plus élémentaire, JavaScript est un langage synchrone, bloquant et à un seul processus, dans lequel une seule opération peut être en cours à la fois. Mais les navigateurs web définissent des fonctions et des API qui nous permettent d'enregistrer des fonctions qui ne doivent pas être exécutées de manière synchrone, mais qui doivent être invoquées de manière asynchrone lorsqu'un événement quelconque se produit (le passage du temps, l'interaction de l'utilisateur avec la souris ou l'arrivée de données sur le réseau, par exemple). Cela signifie que vous pouvez laisser votre code faire plusieurs choses en même temps sans arrêter ou bloquer votre processus principal.

Le fait de vouloir exécuter du code de manière synchrone ou asynchrone dépend de ce que l'on essaie de faire.

Il y a des moments où nous voulons que les choses se chargent et se produisent immédiatement. Par exemple, lorsque vous appliquez des styles définis par l'utilisateur à une page web, vous voulez que les styles soient appliqués dès que possible.

Cependant, si nous exécutons une opération qui prend du temps, comme l'interrogation d'une base de données et l'utilisation des résultats pour remplir des modèles, il est préférable d'écarter cette opération du thread principal et de réaliser la tâche de manière asynchrone. Avec le temps, vous apprendrez quand il est plus judicieux de choisir une technique asynchrone plutôt qu'une technique synchrone.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Concepts", "Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Faciliter la programmation asynchrone avec async et await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
