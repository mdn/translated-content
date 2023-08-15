---
title: Lignes directrices pour JavaScript
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
---

{{MDNSidebar}}

Les directives suivantes couvrent la manière d'écrire le JavaScript pour les exemples de code MDN.

Ce qui suit est un ensemble assez simple de directives JavaScript. Nous pourrions aller beaucoup plus en profondeur sur ce sujet, mais nous voulons essentiellement fournir des directives simples pour écrire des exemples concis qui seront compréhensibles par le plus grand nombre de personnes possible, plutôt que des directives détaillées pour écrire des applications web complexes. Si vous voulez quelque chose qui entre plus dans le détail, nous vous recommandons le [guide stylistique JavaScript d'AirBnB](https://github.com/airbnb/javascript), qui est généralement compatible avec nos directives.

## Dans cet article

- [Directives générales sur le JavaScript](#general_javascript_guidelines)

  - [Utiliser une syntaxe étendue](#use_expanded_syntax)
  - [Commentaires JavaScript](#javascript_comments)
  - [Utiliser les fonctions ES6](#use_es6_features)

- [Variables](#variables)

  - [Nommage des variables](#variable_naming)
  - [Déclaration des variables](#declaring_variables)

- [Opérateurs et comparaison](#operators_and_comparison)

  - [Opérateurs ternaires](#ternary_operators)
  - [Utiliser l'égalité stricte](#use_strict_equality)
  - [Utiliser des raccourcis pour les tests booléens](#use_shortcuts_for_boolean_tests)

- [Instructions de contrôle](#control_statements)
- [Chaînes de caractères](#strings)

  - [Utiliser des modèles littéraux](#use_template_literals)
  - [Utiliser textContent, et non innerHTML](#use_textcontent_not_innerhtml)

- [Conditions](#conditionals)

  - [Usage général des boucles](#general_purpose_looping)
  - [Les instructions switch](#switch_statements)

- [Fonctions et objets](#functions_and_objects)

  - [Nommage des fonctions](#function_naming)
  - [Définition des fonctions](#defining_functions)
  - [Création d'objets](#creating_objects)
  - [Classes d'objets](#object_classes)
  - [Nommage des objets](#object_naming)

- [Tableaux](#arrays)

  - [Création de tableaux](#creating_arrays)
  - [Ajout à un tableau](#adding_to_an_array)

- [Traitement des erreurs](#error_handling)

## Directives générales sur le JavaScript

### Utiliser une syntaxe étendue

Pour JavaScript, nous utilisons une syntaxe étendue, chaque ligne de JS étant placée sur une nouvelle ligne, l'accolade d'ouverture d'un bloc sur la même ligne que l'instruction associée et l'accolade de fermeture sur une nouvelle ligne. Cela permet d'optimiser la lisibilité et de favoriser la cohérence sur le MDN.

Faites ceci

```js example-good
function myFunc() {
  console.log("Hello!");
}
```

Évitez cela

```js-nolint example-bad
function myFunc() { console.log('Hello!'); };
```

Nous avons également quelques règles spécifiques concernant l'espacement à l'intérieur des caractéristiques du langage. Vous devez inclure des espaces entre les opérateurs et les opérandes, les paramètres, etc.

C'est plus lisible

```js example-good
if (dayOfWeek === 7 && weather === "soleil") {
  goOnTrip("plage", "voiture", [
    "crême glacée",
    "pelle et sceau",
    "serviette de plage",
  ]);
}
```

que ceci

```js-nolint example-bad
if(dayOfWeek===7&&weather==='soleil'){
  goOnTrip('plage','voiture',['crême glacée','pelle et sceau','serviette de plage']);
}
```

En outre, gardez ces spécificités à l'esprit :

- N'incluez pas d'espaces de remplissage après les parenthèses ouvrantes ou avant les parenthèses fermantes - `(myVar)`, et non `( myVar )`.
- Toutes les instructions doivent se terminer par un point-virgule (";"). Nous les exigeons dans tous nos exemples de code, même s'ils sont techniquement facultatifs en JavaScript, car nous pensons que cela permet d'obtenir un code plus clair et plus précis quant à la fin de chaque instruction.
- Utilisez des guillemets simples en JavaScript, chaque fois que des guillemets simples sont nécessaires dans la syntaxe.
- Il ne doit pas y avoir d'espace entre un mot-clé d'instruction, une fonction ou une boucle et sa parenthèse ouvrante (par exemple, `if() { .... }`, `fonction myFunc() { ... }, for(...) { ... }`).
- Il doit y avoir un espace entre les parenthèses et l'accolade ouvrante dans les cas décrits au point précédent.

### Commentaires JavaScript

Utilisez des commentaires de style JS pour commenter le code qui n'est pas auto-documenté :

```js example-good
// This is a JavaScript-style comment
```

Mettez vos commentaires sur des lignes séparées précédant le code auquel ils se réfèrent :

```js example-good
function myFunc() {
  // Affiche la chaîne de caractères "Bonjour" dans la console JS du navigateur.
  console.log("Bonjour");
  // Crée un nouveau paragraphe, le remplit de contenu et l'ajoute au <body>
  let para = document.createElement("p");
  para.textContent = "Mon nouveau paragraphe";
  document.body.appendChild(para);
}
```

Notez également que vous devez laisser un espace entre les barres obliques et le commentaire, dans chaque cas.

### Utiliser les fonctions ES6

Pour un usage général\*, vous pouvez utiliser les fonctionnalités ES6 courantes (telles que les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let)/[`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), [littéraux de gabarits](/fr/docs/Web/JavaScript/Reference/Template_literals), et le [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) dans les exemples MDN. Nous les incluons à de nombreux endroits dans ces directives, car nous pensons que l'industrie du Web a généralement atteint un point où ces fonctionnalités sont suffisamment familières pour être compréhensibles. Et pour ceux qui ne les utilisent pas encore, nous aimerions jouer notre rôle en aidant les gens à développer leurs compétences.

Cependant, nous ne recommandons pas encore l'utilisation générale des nouvelles fonctionnalités ES telles que [async](/fr/docs/Web/JavaScript/Reference/Statements/async_function)/[await](/fr/docs/Web/JavaScript/Reference/Operators/await), les virgules de fin sur les listes d'arguments, etc. Nous préférerions que vous ne les utilisiez pas, sauf si cela est strictement nécessaire, et si vous les utilisez, incluez une explication dans votre exemple pour dire ce qu'ils font, avec un lien vers le matériel de référence approprié.

> **Note :** Par "usage général", nous entendons la rédaction d'exemples généraux. Les pages de référence couvrant des fonctionnalités spécifiques de l'ES moderne doivent évidemment utiliser les fonctionnalités qu'elles documentent !

## Variables

### Nommage des variables

Pour les noms de variables, utilisez la casse minuscule au format chameau « lowerCamelCase » et, le cas échéant, des noms concis, lisibles par l'homme et sémantiques.

Écrivez comme suit :

```js example-good
let playerScore = 0;

let speed = distance / time;
```

Éviter ce genre de chose :

```js example-bad
let thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;

let s = d / t;
```

> **Note :** The only place where it is OK to not use human-readable semantic names is where a very common recognized convention exists, such as using `i`, `j`, etc. for loop iterators.

### Déclaration des variables

Lorsque vous déclarez des variables et des constantes, utilisez les mots-clés [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), pas [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var).

Si une variable ne sera pas réaffectée, préférez `const` :

```js example-good
const myName = "Chris";
console.log(myName);
```

Sinon, utilisez `let` :

```js example-good
let myAge = "40";
myAge++;
console.log("Happy birthday!");
```

Cet exemple utilise `let` là où il devrait préférer `const`. Il fonctionnera mais devrait être évité dans les exemples de code MDN :

```js example-bad
let myName = "Chris";
console.log(myName);
```

Cet exemple utilise `const` pour une variable qui est réaffectée. La réaffectation entraînera une erreur :

```js example-bad
const myAge = "40";
myAge++;
console.log("Happy birthday!");
```

Cet exemple utilise `var`, ce qui doit être évité dans les exemples de code MDN, sauf si cela est vraiment nécessaire :

```js example-bad
var myAge = "40";
var myName = "Chris";
```

## Opérateurs et comparaison

### Opérateurs ternaires

Les opérateurs ternaires doivent être placés sur une seule ligne :

```js example-good
let status = age >= 18 ? "adult" : "minor";
```

Pas emboîtés :

```js-nolint example-bad
let status = age >= 18
  ? 'adult'
  : 'minor';
```

C'est beaucoup plus difficile à lire.

### Utiliser l'égalité stricte

Utilisez toujours une égalité et une inégalité strictes.

Comme ceci :

```js example-good
name === "Chris";
age !== 25;
```

N'écrivez pas comme ça :

```js example-bad
name == "Chris";
age != 25;
```

### Utiliser des raccourcis pour les tests booléens

Utilisez des raccourcis pour les tests booléens - utilisez `x` et `!x`, et non `x === true` et `x === false`.

## Instructions de contrôle

Écrivez des instructions de contrôle comme ceci :

```js example-good
if (iceCream) {
  alert("Woo hoo!");
}
```

Pas comme cela :

```js-nolint example-bad
if(iceCream){ alert("Woo hoo!"); }
```

N'oubliez pas non plus :

- Il ne doit y avoir _aucun espace_ entre un mot-clé de déclaration de contrôle et sa parenthèse ouvrante.
- Il doit y avoir _un espace_ entre les parenthèses et l'accolade ouvrante.

## Chaînes de caractères

### Utiliser des modèles littéraux

Pour insérer des valeurs dans des chaînes de caractères, utilisez des chaînes de caractères littérales.

Comme suit :

```js example-good
let myName = "Chris";
console.log(`Hi! I'm ${myName}!`);
```

En évitant d'écrire :

```js-nolint example-bad
let myName = 'Chris';
console.log('Hi! I\'m' + myName + '!');
```

### Utiliser textContent, et non innerHTML

Lorsque vous insérez des chaînes de caractères dans les nœuds du DOM, utilisez la fonction [`Node.textContent`](/fr/docs/Web/API/Node/textContent):

```js example-good
let text = "Bonjour à vous tous, braves gens";
const para = document.createElement("p");
para.textContent = text;
```

Et pas [`Element.innerHTML`](/fr/docs/Web/API/Element/innerHTML):

```js example-bad
let text = "Bonjour à vous tous, braves gens";
const para = document.createElement("p");
para.innerHTML = text;
```

Le `textContent` est beaucoup plus efficace, et moins sujet aux erreurs que le `innerHTML`.

## Conditions

### Usage général des boucles

When [loops](/fr/docs/Learn/JavaScript/Building_blocks/Looping_code) are required, feel free to choose an appropriate loop out of the available ones ([`for`](/fr/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/fr/docs/Web/JavaScript/Reference/Statements/while), etc.) Just make sure to keep the code as understandable as possible.

Lorsque vous utilisez des boucles `for`/`for...of`, veillez à définir correctement l'initialisateur, avec un mot clé `let` :

```js example-good
let cats = ["Athena", "Luna"];
for (let i of cats) {
  console.log(i);
}
```

Pas

```js example-bad
let cats = ["Athena", "Luna"];
for (i of cats) {
  console.log(i);
}
```

Gardez également à l'esprit :

- Il ne doit y avoir _aucun espace_ entre un mot-clé de boucle et sa parenthèse ouvrante.
- Il doit y avoir _un espace_ entre les parenthèses et l'accolade ouvrante.

### Les instructions switch

Formatez les instructions `switch` comme suit :

```js example-good
let expr = "Papayes";
switch (expr) {
  case "Oranges":
    console.log("Les oranges sont à 1,10 € le kilo.");
    break;
  case "Papayes":
    console.log("Les mangues et les papayes sont à 5,24 € le kilo.");
    // résultat attendu : "Les mangues et les papayes sont à 5,24 € le kilo."
    break;
  default:
    console.log(`Désolé, nous n'avons plus de ${expr}.`);
}
```

## Fonctions et objets

### Nommage des fonctions

Pour les noms de fonctions, utilisez la casse minuscule au format chameau « lowevCamelCase » et, le cas échéant, des noms concis, lisibles par l'homme et sémantiques.

Par exemple :

```js example-good
function sayHello() {
  alert("Bonjour !");
}
```

En évitant de faire :

```js example-bad
function SayHello() {
  alert("Bonjour !");
}

function notVeryObviousName() {
  alert("Bonjour !");
}
```

> **Note :** Le seul endroit où il est acceptable de ne pas utiliser des noms sémantiques lisibles par l'homme est lorsqu'une convention reconnue très courante existe, comme l'utilisation de `i`, `j`, etc. pour les itérateurs de boucle.

### Définition des fonctions

Dans la mesure du possible, utilisez la déclaration `fonction` pour définir des fonctions sur des expressions de fonction :

Faites comme ça :

```js example-good
function sum(a, b) {
  return a + b;
}
```

Pas comme ça :

```js example-bad
let sum = function (a, b) {
  return a + b;
};
```

Lorsque vous utilisez des fonctions anonymes à l'intérieur d'une méthode qui requiert une fonction comme paramètre, il est acceptable (mais pas obligatoire) d'utiliser une fonction flèche pour rendre le code plus court et plus propre.

Donc, au lieu de ça :

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array.reduce(function (a, b) {
  return a + b;
});
```

vous pourriez écrire ceci :

```js example-good
const array = [1, 2, 3, 4];
let sum = array.reduce((a, b) => a + b);
```

N'oubliez pas non plus :

- Il ne doit y avoir _aucun espace_ entre un nom de fonction et sa parenthèse ouvrante.
- Il doit y avoir _un espace_ entre les parenthèses et l'accolade ouvrante.

### Création d'objets

Utilisez des littéraux - et non des constructeurs - pour créer des objets généraux (c'est-à-dire lorsque les classes ne sont pas concernées) :

Par exemple :

```js example-good
let myObject = {};
```

Et pas :

```js example-bad
let myObject = new Object();
```

### Classes d'objets

Utilisez la syntaxe de classe ES pour les objets, et non les constructeurs à l'ancienne.

À titre d'exemples :

```js example-good
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    console.log(`Salut ! Je m'appelle ${this.name}`);
  }
}
```

Utilisez `extends` pour l'héritage :

```js example-good
class Teacher extends Person {
  ...
}
```

### Nommage des objets

Lorsque vous définissez une classe d'objets (comme ci-dessus), utilisez l'écriture de casse au format chameau en majuscule « UpperCamelCase » (également connue sous le nom de « PascalCasing ») pour le nom de la classe, et la casse en minuscule « lowerCamelCase » pour les noms des propriétés et des méthodes de l'objet.

Lors de la définition d'une instance d'objet, qu'il s'agisse d'un littéral ou d'un constructeur, utilisez le lowerCamelCase pour le nom de l'instance :

```js example-good
let hanSolo = new Person("Han Solo", 25, "male");

let hanSolo = {
  name: "Han Solo",
  age: 25,
  gender: "male",
};
```

## Tableaux

### Création de tableaux

Utilisez des littéraux - et non des constructeurs - pour créer des tableaux :

Comme ceci :

```js example-good
let myArray = [];
```

Pas comme ça :

```js example-bad
let myArray = new Array(length);
```

### Ajout à un tableau

Pour ajouter des éléments à un tableau, utilisez [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push), et non l'affectation directe. Étant donné le tableau suivant :

```js
const pets = [];
```

faites ça :

```js example-good
pets.push("cat");
```

et pas ça :

```js example-bad
pets[pets.length] = "cat";
```

## Traitement des erreurs

Si certains états de votre programme lancent des erreurs non attrapées, ils interrompent l'exécution et réduisent potentiellement l'utilité de l'exemple. Vous devriez donc attraper les erreurs en utilisant un bloc [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch) :

```js example-good
try {
  console.log(results);
} catch (e) {
  console.error(e);
}
```

## De bons exemples de JavaScript sur MDN

Vous pouvez trouver de bons extraits de JavaScript, concis et significatifs, en haut de nos pages [Référence du langage JavaScript](/fr/docs/Web/JavaScript/Reference) - parcourez-les pour en trouver.

Nos exemples interactifs (et autres) sont généralement rédigés de manière à suivre les directives ci-dessus, mais sachez qu'ils peuvent différer à certains endroits, car ils ont été rédigés pour la plupart avant que les directives ne soient nouvellement rédigées.

En ce qui concerne les exemples d'API, nous aimerions mettre en avant quelques exemples qui nous semblent bons :

- [Exemples de `fetch()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch#examples)
- [Exemples de `fillRect()`](/fr/docs/Web/API/CanvasRenderingContext2D/fillRect#examples) (les exemples de Canvas 2D sont généralement bons, bien qu'ils utilisent toujours l'ancienne déclaration `var`).
- [Payment Request API `show()`](/fr/docs/Web/API/PaymentRequest/show) (Les exemples de [`PaymentRequest`](/fr/docs/Web/API/PaymentRequest) sont généralement assez bons).
- [Utilisations de l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) (les bonnes pratiques générales en matière de HTML, CSS et JavaScript, ainsi qu'une bonne démonstration de l'utilisation des extraits et des liens vers des exemples complets ailleurs).
- [Utilisations de l'API Media Capabilities](/fr/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API) (des bonnes pratiques plus générales pour l'utilisation des extraits de code dans un guide).
