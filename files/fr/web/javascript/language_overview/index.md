---
title: Une réintroduction à JavaScript
slug: Web/JavaScript/Language_overview
---

{{jsSidebar}}

Pourquoi une réintroduction ? Parce que JavaScript est connu pour être source d'incompréhensions. Bien que souvent raillé comme étant un simple jouet, derrière sa simplicité désarmante se cachent certaines fonctionnalités de langage très puissantes. JavaScript est maintenant utilisé par un nombre incroyable d'applications de haut rang, ce qui montre qu'une connaissance approfondie de cette technologie est une compétence importante pour toute développeuse ou développeur web ou mobile.

Il peut être utile de commencer avec un aperçu de l'histoire de ce langage. JavaScript a été créé en 1995 par Brendan Eich, alors ingénieur à Netscape. Ce langage est sorti au grand jour pour la première fois avec Netscape 2 au début de l'année 1996. Il était au départ censé s'appeler LiveScript, mais a été renommé par une décision marketing mal avisée dans le but de capitaliser sur la popularité du langage Java de Sun Microsystems, malgré le fait qu'ils n'aient que très peu en commun. Cela n'a jamais cessé d'être une source de confusion.

Quelques mois plus tard, Microsoft a lancé avec Internet Explorer 3 une version du langage globalement compatible, appelée JScript. Quelques mois après, Netscape a soumis le langage à l'[Ecma International](https://www.ecma-international.org/), une organisation de normalisation européenne, ce qui a permis d'aboutir à la première édition du standard [ECMAScript](/fr/docs/Glossary/ECMAScript) en 1997. Ce standard a reçu une mise à jour importante appelée [ECMAScript edition 3](https://www.ecma-international.org/publications/standards/Ecma-262.htm) en 1999, et est resté relativement stable depuis. La quatrième édition a été abandonnée suite à des différends portants sur la complexité du langage. De nombreuses sections de la quatrième édition ont été utilisées pour servir de fondation à la cinquième édition d'ECMAScript, publiée en décembre 2009. La sixième édition, qui apporte des nouveautés majeures, a été publiée en juin 2015.

> **Note :** Dans la suite de cet article et à des fins de simplicité, nous utiliserons les termes «&nbsp;JavaScript&nbsp;» et «&nbsp;ECMAScript&nbsp;» pour désigner la même chose.

Contrairement à la plupart des langages de programmation, JavaScript n'a pas de concept d'entrée ou de sortie. Il est conçu pour s'exécuter comme un langage de script dans un environnement hôte, et c'est à cet environnement de fournir des mécanismes de communication avec le monde extérieur. L'environnement hôte le plus commun est un navigateur, mais des interpréteurs JavaScript existent également dans Adobe Acrobat, Photoshop, les images SVG, le moteur de widgets de Yahoo!, et même au sein d'environnements côté serveur tels que [Node.js](https://nodejs.org/). Cette liste ne se limite pas qu'à ces éléments et on retrouve également JavaScript dans les bases de données NoSQL telles que [Apache CouchDB](https://couchdb.apache.org/), les ordinateurs embarqués ou encore des environnements de bureaux comme [GNOME](https://www.gnome.org/) (l'une des interfaces graphiques les plus populaires des systèmes d'exploitation GNU/Linux), etc.

## Aperçu

JavaScript est un langage dynamique multi-paradigme : il dispose de différents types, opérateurs, objets natifs et méthodes. Sa syntaxe s'inspire des langages Java et C et de nombreuses structures de ces langages s'appliquent également à JavaScript. JavaScript permet la programmation orientée objet avec les prototypes (voir [l'héritage et la chaîne de prototypes](/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) et [les classes](/fr/docs/Web/JavaScript/Reference/Classes) apparues avec ES6/ES2015). JavaScript permet également la programmation fonctionnelle car ses fonctions sont des objets et on peut donc stocker ces fonctions dans des variables et les transmettre comme n'importe quel objet.

Commençons par nous intéresser aux briques de base de tout langage : les types. Les programmes en JavaScript manipulent des valeurs, et ces valeurs appartiennent toutes à un type. Les types JavaScript sont :

- Les nombres : [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)
- Les grands entiers (_BigInt_) : [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- Les chaînes de caractères : [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
- Les booléens : [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- Les fonctions : [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Les objets : [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)
- Les symboles : [`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (apparus avec la sixième édition d'ECMAScript, ES2015)

On aura également [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) et [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), qui sont relativement étranges. Les [tableaux ou `Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) permettent d'organiser des séries d'objets au sein d'un même objet. Les [dates (`Date`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) et les [expressions rationnelles (`RegExp`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) qui sont également des objets nativement disponibles en JavaScript. Afin d'être tout à fait précis, les fonctions sont aussi une sorte particulière d'objets, de sorte que le diagramme de types ressemble plutôt à ceci :

- [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (apparu avec la sixième édition d'ECMAScript, ES2015)
- [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)

  - [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

- [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null)
- [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)

Enfin, il y a également quelques types natifs pour gérer les exceptions : [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error). Pour garder une approche simple, nous utiliserons la première de ces listes pour présenter les types.

## Les nombres

ECMAScript possède deux types numériques intégrés : **Number** et **BigInt**.

Les nombres en JavaScript sont « des valeurs [au format IEEE 754 en double précision 64 bits](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) », d'après la spécification. Cela permet de représenter les nombres entre -(2^53 − 1) et 2^53 − 1. Lorsqu'on fait référence (ici ou dans les autres articles) à des entiers, on parle généralement d'une représentation d'un entier avec une valeur de type Number. En effet, les valeurs Number ne sont pas strictement des entiers et il faut donc prendre quelques précautions :

```js
console.log(3 / 2); // 1.5 et pas 1
console.log(Math.floor(3 / 2)); // 1
```

Ainsi, un _entier apparent_ est en fait _implicitement un nombre à virgule flottante_.

Aussi, faites attention à des choses comme :

```js
0.1 + 0.2 == 0.30000000000000004;
```

Dans la pratique, les valeurs entières sont traitées comme des entiers représentés sur 32 bits (certaines implémentations les stockent même ainsi tant qu'il n'y a pas besoin d'effectuer une opération valide pour un nombre mais pas pour un entier sur 32 bits). Cette représentation peut être importante pour les opérations binaires.

Les [opérateurs arithmétiques](/fr/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) standards sont gérés, dont l'addition, la soustraction, le reste arithmétique et ainsi de suite. Il existe également un objet natif, qui n'a pas été mentionné jusqu'à présent, appelé [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math), qui permet de gérer certaines fonctions et constantes mathématiques plus avancées :

```js
Math.sin(3.5);
let circonference = 2 * Math.PI * r;
```

On peut convertir une chaîne de caractères en un nombre entier à l'aide de la fonction intégrée [`parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt). Elle reçoit la base de conversion comme second paramètre, qui devrait toujours être fourni afin de lever une éventuelle ambiguïté :

```js
parseInt("123", 10); // 123
parseInt("010", 10); //10
```

Si la base n'est pas indiquée, les résultats peuvent être surprenants dans les anciens navigateurs qui datent de 2013 ou avant où les chaînes commençant par `0` pouvaient ne pas être considérées comme exprimées en notation octale. À moins que vous ne soyez certain du format de votre chaîne de caractères, vous pouvez obtenir des résultats surprenants sur ces anciens navigateurs :

```js
parseInt("010"); //  8
parseInt("0x10"); // 16
```

Cela se produit parce que la fonction [`parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt) a été implémentée pour traiter la première chaîne comme un nombre octal à cause du zéro initial et la seconde comme une représentation hexadécimale car commençant avec `0x`. Une telle notation hexadécimale peut toujours être utilisée mais la notation octale a été retirée.

Si on souhaite convertir un nombre binaire en un entier, il suffit de changer la base :

```js
parseInt("11", 2); // 3
```

De la même manière, vous pouvez traiter les nombres à virgule flottante à l'aide de la fonction intégrée [`parseFloat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseFloat), qui, à la différence de [`parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt), utilise toujours la base 10.

On peut également utiliser l'opérateur unaire `+` pour convertir des valeurs en nombres :

```js
+"42"; // 42
+"010"; // 10
+"0x10"; // 16
```

Une valeur spéciale appelée [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) (qui signifie « _Not a Number_ », soit « pas un nombre ») est renvoyée si la chaîne est non numérique :

```js
parseInt("coucou", 10); // NaN
```

`NaN` est « toxique » : si cette valeur est fournie en entrée pour n'importe quelle opération mathématique, le résultat sera également `NaN` :

```js
NaN + 5; // NaN
```

Cette valeur peut être détectée grâce à la fonction native [`Number.isNaN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) (qui fait [exactement ce que son nom indique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#description)) :

```js
Number.isNaN(NaN); // true
Number.isNaN("bonjour"); // false
Number.isNaN("1"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN([1]); // false
Number.isNaN([1, 2]); // false
```

Mais ne testez pas le `NaN` en utilisant la fonction globale [`isNaN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN), [qui a un comportement peu intuitif](/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN#confusing_special-case_behavior) :

```js
isNaN("bonjour"); // true
isNaN("1"); // false
isNaN(undefined); // true
isNaN({}); // true
isNaN([1]); // false
isNaN([1, 2]); // true
```

JavaScript dispose également de valeur spéciales pour l'infini [`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity) et l'infini négatif (`-Infinity`)&nbsp;:

```js
1 / 0; // Infinity
-1 / 0; // -Infinity
```

Il est possible de tester les valeurs `Infinity`, `-Infinity` et `NaN` à l'aide de la fonction native [`isFinite()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/isFinite) :

```js
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

> **Note :** Les fonctions [`parseFloat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) et [`parseInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt) traitent une chaîne de caractères jusqu'à ce qu'elles atteignent un caractère qui n'est pas valide pour le format numérique indiqué, puis renvoient le nombre traité jusqu'à ce point. Cependant, l'opérateur "+" convertit simplement la chaîne à `NaN` à partir du moment où la chaîne contient le moindre caractère non valide. Vous pouvez tester ce comportement en manipulant la chaîne "10.2abc" avec chaque méthode dans la console afin de mieux comprendre les différences.

## Les chaînes de caractères

Les chaînes en JavaScript sont des séquences de [caractères Unicode](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#unicode). Cette nouvelle devrait être bien accueillie par toute personne qui a déjà eu affaire à des problèmes d'internationalisation. Pour être plus précis, ce sont des séquences de codets UTF-16 : chaque codet est représenté par un nombre sur 16 bits et chaque caractère Unicode est représenté par 1 ou 2 codets.

Si vous voulez représenter un seul caractère, il suffit d'utiliser une chaîne qui contient un seul caractère.

Pour connaître la longueur d'une chaîne, utilisez sa propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length) :

```js
"bonjour".length; // 7
```

C'est notre première rencontre avec les objets JavaScript ! Les chaînes peuvent également être utilisées comme des [objets](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object). Elles possèdent aussi des [méthodes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) permettant de manipuler la chaîne et d'accéder à certaines informations sur cette chaîne de caractères :

```js
"bonjour".charAt(0); // "b"
"coucou monde".replace("coucou", "bonjour"); // "bonjour monde"
"bonjour".toUpperCase(); // "BONJOUR"
```

## Les autres types

JavaScript fait la distinction entre [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), qui est un objet de type `object` indiquant une absence délibérée de valeur, et [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui est un objet de type `undefined` indiquant une variable non initialisée — c'est-à-dire qui n'a pas encore été assignée. Nous parlerons des variables plus tard, mais en JavaScript il est possible de déclarer une variable sans lui assigner de valeur. Si vous faites cela, le type de la variable sera `undefined` qui est une constante.

JavaScript dispose d'un type booléen, dont les valeurs possibles sont `true` (vrai) et `false` (faux). L'un et l'autre sont des mots clés. Toute valeur peut être convertie en une valeur booléenne selon les règles suivantes :

1. `false`, `0`, la chaîne vide (`""`), `NaN`, `null` et `undefined` deviennent toutes `false`
2. toutes les autres valeurs deviennent `true`.

Cette conversion peut être faite de manière explicite à l'aide de la fonction `Boolean()` :

```js
Boolean(""); // false
Boolean(234); // true
```

Cependant, c'est rarement nécessaire, puisque JavaScript effectuera cette conversion silencieusement chaque fois qu'il attend une valeur booléenne, par exemple dans une instruction `if` (voir plus bas). Pour cette raison, on parle souvent simplement de valeurs « vraies » et « fausses » pour indiquer des valeurs devenant respectivement `true` et `false` lorsqu'elles sont converties en valeurs booléennes.

Les opérations booléennes comme `&&` (_et_ logique), `||` (_ou_ logique) et `!` (_non_ logique) sont également gérées, comme on le verra plus bas.

## Les variables

En JavaScript, on peut déclarer de nouvelles variables grâce à l'un de ces trois mots-clés : [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let), [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), ou [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var).

**`let`** permet de déclarer des variables qui pourront être utilisées dans un bloc. La variable déclarée avec `let` est uniquement disponible dans le bloc qui contient la déclaration.

```js
let a;
let nom = "Simon";
```

Voici un exemple de _portée_ avec **`let`** :

```js
// variableLet n'est pas utilisable ici

for (let variableLet = 0; variableLet < 5; variableLet++) {
  // variableLet peut être utilisée ici
}

// variableLet n'est pas utilisable ici
```

**`const`** permet de déclarer des variables dont la valeur ne doit pas changer. Une variable déclarée avec `const` est disponible dans le bloc dans lequel elle est déclarée.

```js
const Pi = 3.14; // la constante Pi est définie
Pi = 1; // produira une erreur, car on ne peut pas modifier une variable constante.
```

**`var`** est le mot-clé le plus fréquemment utilisé pour déclarer des variables. Ce mot-clé était disponible avant `let` et `const` (c'était alors le seul qui permettait de déclarer des variables). Une variable qu'on déclare avec **`var`** est disponible dans la _fonction_ dans laquelle elle est déclarée.

```js
var a;
var nom = "simon";
```

Voici un exemple pour étudier la portée d'une variable déclarée avec **`var`** :

```js
// variableVar *est* utilisable ici

for (var variableVar = 0; variableVar < 5; variableVar++) {
  // variableVar *est* également disponible ici
}

// variableVar *est* toujours disponible ici
```

Si on déclare une variable sans lui affecter aucune valeur, son type sera alors `undefined`.

JavaScript possède une différence importante quant aux autres langages de programmation comme Java&nbsp;: en JavaScript, les blocs ne créent pas de portées pour les variables déclarées avec `var`, c'est la fonction qui gère la portée d'une variable déclarée avec `var`. Aussi, si une variable est définie avec `var` au sein d'une instruction conditionnelle avec `if`, cette variable sera visible depuis l'ensemble de la fonction. Avec ECMAScript 2015, les instructions de déclarations, [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const) permettent de créer des variables dont la portée est limitée à celle du bloc qui l'englobe.

## Les opérateurs

Les opérateurs numériques en JavaScript sont `+`, `-`, `*`, `/` et `%` (qui est [l'opérateur de reste, à ne pas confondre avec le « modulo » mathématique](</fr/docs/Web/JavaScript/Reference/Operators#remainder_()>)). Les valeurs sont affectées à l'aide de `=` et il existe également des opérateurs d'affectation combinés comme `+=` et `-=`. Ils sont équivalents à `x = x opérateur y`.

```js
x += 5;
x = x + 5;
```

Vous pouvez utiliser `++` et `--` respectivement pour incrémenter et pour décrémenter. Ils peuvent être utilisés comme opérateurs préfixes ou suffixes.

L'[opérateur `+`](</fr/docs/Web/JavaScript/Reference/Operators#addition_(.2b)>) permet également de concaténer des chaînes :

```js
"coucou" + " monde"; // "coucou monde"
```

Si vous additionnez une chaîne à un nombre (ou une autre valeur), tout est d'abord converti en une chaîne. Ceci pourrait vous surprendre :

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

L'ajout d'une chaîne vide à une valeur est une manière utile de convertir cette valeur une chaîne de caractères.

Les [comparaisons](/fr/docs/Web/JavaScript/Reference/Operators) en JavaScript se font à l'aide des opérateurs `<`, `>`, `<=` et `>=`. Ceux-ci fonctionnent tant pour les chaînes que pour les nombres. L'égalité est un peu moins évidente. L'opérateur double égal effectue une équivalence si vous lui donnez des types différents, ce qui donne parfois des résultats intéressants :

```js
123 == "123"; // true
1 == true; // true
```

Pour éviter les conversions implicites avant les comparaisons, utilisez l'opérateur triple égal :

```js
123 === "123"; //false
true === true; // true
```

Les opérateurs `!=` et `!==` existent également.

JavaScript dispose également d'[opérations bit à bit](/fr/docs/Web/JavaScript/Reference/Operators).

## Les structures de contrôle

JavaScript dispose d'un ensemble de structures de contrôle similaires aux autres langages de la famille du langage C. Les structures conditionnelles sont présentes avec `if` et `else` ; lesquels peuvent être chaînés si nécessaire :

```js
let nom = "des chatons";
if (nom == "des chiots") {
  nom += " !";
} else if (nom == "des chatons") {
  nom += " !!";
} else {
  nom = " !" + nom;
}
nom == "des chatons !!";
```

JavaScript dispose également de boucles `while` et `do-while`. Les premières permettent de former des boucles basiques ; les secondes permettent de construire des boucles qui seront exécutées au moins une fois :

```js
while (true) {
  // une boucle infinie !
}

let input;
do {
  input = getInput();
} while (inputNonValide(input));
```

Les boucles [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for) en JavaScript sont les mêmes qu'en C et en Java : elles permettent de fournir les informations de contrôle de la boucle en une seule ligne.

```js
for (let i = 0; i < 5; i++) {
  // Sera exécutée cinq fois
}
```

JavaScript permet également d'utiliser deux autres types de boucles : [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) :

```js
for (let element of tableau) {
  // utiliser des instructions
  // pour manipuler la valeur element
}
```

et [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) :

```js
for (let propriete in objet) {
  // utiliser des instructions
  // pour manipuler la propriété de l'objet
}
```

Les opérateurs `&&` et `||` utilisent une logique de court-circuit, ce qui signifie qu'ils exécuteront leur second opérande ou non selon la valeur du premier. C'est très utile pour vérifier qu'un objet n'est pas égal à `null` avant d'essayer d'accéder à ses attributs :

```js
let nom = o && o.getNom();
```

Ou pour définir des valeurs par défaut :

```js
let nom = autreNom || "nomParDéfaut";
```

De la même façon, le OU peut être utilisé pour mettre en cache des valeurs (lorsque les valeurs équivalentes à faux sont invalides) :

```js
let nom = nomEnCache || (nomEnCache = getNom());
```

JavaScript propose également un opérateur ternaire pour les assignations conditionnelles en une ligne :

```js
let permis = age > 18 ? "oui" : "non";
```

L'instruction `switch` peut être utilisée pour différentes branches de code basées sur un nombre ou une chaîne :

```js
switch (action) {
  case "dessiner":
    dessine();
    break;
  case "manger":
    mange();
    break;
  default:
    neRienFaire();
}
```

Si vous n'ajoutez pas d'instruction `break`, l'exécution va se poursuivre au niveau suivant. C'est rarement ce qui est désiré, en fait ça vaut même la peine de préciser dans un commentaire si la poursuite au cas suivant est délibérée pour aider au débogage :

```js
switch (a) {
  case 1: // identique au cas 2
  case 2:
    mange();
    break;
  default:
    nerienfaire();
}
```

La clause `default` est optionnelle. Vous pouvez placer des expressions à la fois dans la partie `switch` et dans les cas à gérer si vous voulez ; les comparaisons entre les deux se font comme si on avait utilisé l'opérateur `===` :

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    nArriveJamais();
}
```

## Les objets

Les objets en JavaScript sont simplement des collections de paires nom-valeur. Dans ce sens, ils sont similaires aux :

- dictionnaires en Python,
- hashs en Perl et Ruby,
- tables de hachage en C et C++,
- HashMaps en Java,
- tableaux associatifs en PHP.

Le fait que cette structure de données soit si largement utilisée est un témoignage de sa polyvalence. Puisque tout (sauf les types de base) est un objet en JavaScript, tout programme écrit dans ce langage implique naturellement un grand nombre de recherches dans des tables de hachage. C'est une bonne chose que ce soit si rapide !

La partie « nom » est une chaîne JavaScript, tandis que la partie « valeur » peut être n'importe quelle valeur JavaScript, y compris d'autres objets. Cela permet de construire des structures de données de n'importe quel niveau de complexité.

Il existe deux façons très simples pour créer un objet vide :

```js
let obj = new Object();
```

Et :

```js
let obj = {};
```

Ils sont sémantiquement équivalents ; la seconde écriture est appelée syntaxe littérale d'objet et est plus pratique. Cette syntaxe est également au cœur du format JSON et devrait être privilégiée à tout moment.

La syntaxe littérale pour écrire un objet peut être utilisée afin d'initialiser tout un objet :

```js
let obj = {
  name: "Carotte",
  _for: "Max", // Le mot "for" est un mot réservé, utilisez plutôt "_for".
  details: {
    color: "orange",
    size: 12,
  },
};
```

L'accès aux attributs peut être enchaîné :

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

L'exemple suivant crée un prototype d'objet (`Person`) et une instance de ce prototype (`you`).

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Définir un objet
let you = new Person("You", 24);
// Nous créons une nouvelle personne nommée "You" âgée de 24 ans.
```

**Une fois l'objet créé**, on peut accéder à ses propriétés de l'une des deux manières suivantes :

```js
// notation par points
obj.name = "Simon";
let name = obj.name;
```

Et…

```js
// notation entre crochets
obj["name"] = "Simon";
let name = obj["name"];
// on peut utiliser une variable pour définir une clé
let user = prompt("quelle clé ?");
obj[user] = prompt("quelle valeur ?");
```

Ces deux méthodes sont également sémantiquement équivalentes. La seconde méthode a l'avantage de fournir le nom de l'attribut de l'objet dans une chaîne, ce qui signifie qu'il peut être calculé au moment de l'exécution (mais ce qui peut empêcher certaines optimisations du moteur JavaScript). Elle peut également être utilisée pour définir et lire des propriétés dont les noms sont des [mots réservés](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) :

```js
obj.for = "Simon"; // erreur de syntaxe, car "for" est un mot réservé
obj["for"] = "Simon"; // fonctionne très bien
```

> **Note :** À partir d'ECMAScript 5, les mots réservés peuvent être utilisés comme noms de propriétés d'objets « en vrac ». Cela signifie qu'ils n'ont pas besoin d'être « habillés » de guillemets lors de la définition des littéraux d'objet. Voir [la spécification ES5](https://es5.github.io/#x7.6.1).

Pour en savoir plus sur les objets et les prototypes, voir [`Object.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object). Pour une explication des prototypes d'objets et des chaînes de prototypes, voir [l'héritage et la chaîne de prototypes](/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

> **Note :** À partir d'ECMAScript 2015, les clés des objets peuvent être définies par la variable en utilisant la notation entre parenthèses lors de sa création. `{[phoneType] : 12345}` est possible au lieu de simplement `var userPhone = {}; userPhone[phoneType] = 12345;`.

## Les tableaux

Les tableaux (_Arrays_) en JavaScript sont en fait un type spécial d'objets. Ils fonctionnent d'une façon tout à fait similaire aux objets normaux (on peut naturellement accéder aux propriétés numériques avec la syntaxe des crochets `[]`), mais ils ont également une propriété magique appelée `length`. Elle vaut toujours un de plus que le plus grand indice dans le tableau.

L'ancienne manière de créer des tableaux est celle-ci :

```js
let a = new Array();
a[0] = "chien";
a[1] = "chat";
a[2] = "poule";
a.length; // 3
```

Une notation plus pratique est la syntaxe littérale :

```js
let a = ["chien", "chat", "poule"];
a.length; // 3
```

Notez que `array.length` ne correspond pas nécessairement au nombre d'éléments dans le tableau. Observez le code suivant :

```js
let a = ["chien", "chat", "poule"];
a[100] = "renard";
a.length; // 101
```

Rappelez-vous : la longueur du tableau vaut simplement un de plus que l'indice le plus élevé.

Si vous interrogez un élément de tableau non existant, vous obtenez `undefined` :

```js
typeof a[90]; // undefined
```

Si vous prenez cela en compte, il est possible de parcourir un tableau à l'aide de la boucle suivante :

```js
for (let i = 0; i < a.length; i++) {
  // Faire quelque chose avec a[i]
}
```

ES2015 a introduit la boucle plus concise [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) pour les objets itérables tels que les tableaux :

```js
for (const currentValue of a) {
  // Faire quelque chose avec currentValue
}
```

Vous pourriez également itérer sur un tableau en utilisant une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in), cependant cela n'itère pas sur les éléments du tableau, mais sur les indices du tableau. De plus, si quelqu'un ajoutait de nouvelles propriétés à `Array.prototype`, elles seraient également parcourues par une telle boucle. Par conséquent, ce type de boucle n'est pas recommandé pour les tableaux.

Une autre façon d'itérer sur un tableau qui a été ajoutée avec ECMAScript 5 est [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) :

```js
["chien", "chat", "poule"].forEach(function (currentValue, index, array) {
  // Faire quelque chose avec currentValue ou array[index]
});
```

Si vous voulez ajouter un élément à un tableau, procédez comme suit :

```js
a.push(item);
```

Les tableaux sont accompagnés d'un certain nombre de méthodes. Voir également la [documentation complète sur les méthodes des tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).

| Nom de la méthode                                    | Description                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `a.toString()`                                       | Renvoie une chaîne composée des différents éléments auxquels on a appliqué `toString()`, séparés par des virgules.       |
| `a.toLocaleString()`                                 | Renvoie une chaîne composée des différents éléments auxquels on a appliqué `toLocaleString()`, séparés par des virgules. |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | Renvoie un nouveau tableau auquel on a ajouté les éléments.                                                              |
| `a.join(sep)`                                        | Convertit le tableau en une chaîne dont les valeurs sont séparées par le paramètre `sep`.                                |
| `a.pop()`                                            | Renvoie le dernier élément du tableau et le retire du tableau.                                                           |
| `a.push(item1, ..., itemN)`                          | Ajoute un ou plusieurs éléments à la fin du tableau.                                                                     |
| `a.shift()`                                          | Renvoie le premier élément du tableau et le retire du tableau.                                                           |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | Ajoute des éléments au début du tableau.                                                                                 |
| `a.slice(start[, end])`                              | Renvoie un sous-tableau.                                                                                                 |
| `a.sort([cmpfn])`                                    | Trie le tableau (avec une fonction de comparaison optionnelle).                                                          |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | Permet de modifier un tableau en supprimant une partie et en la remplaçant avec plus d'éléments.                         |
| `a.reverse()`                                        | Retourne le tableau.                                                                                                     |

## Les fonctions

Avec les objets, les fonctions sont les composants de base d'une bonne compréhension de JavaScript. La fonction la plus basique n'a rien de compliqué :

```js
function ajoute(x, y) {
  let total = x + y;
  return total;
}
```

Ceci représente tout ce qu'il y a à savoir à propos des fonctions basiques. Une fonction JavaScript peut recevoir 0 paramètre nommé ou plus. Son corps peut contenir autant d'instructions que vous le voulez et permet de déclarer des variables qui sont locales à la fonction. L'instruction `return` peut être utilisée pour renvoyer une valeur à tout moment, mettant ainsi fin à la fonction. Si aucune instruction `return` n'est utilisée (ou que l'instruction `return` n'est suivie d'aucune valeur), JavaScript renvoie `undefined`.

On se rendra compte que les paramètres sont plus des indications qu'autre chose. Il est en effet possible d'appeler une fonction sans lui fournir les paramètres qu'elle attend, auquel cas ils vaudront `undefined`.

```js
ajoute(); // NaN
// Il n'est pas possible d'additionner des variables indéfinies
```

Il est également possible de fournir plus de paramètres que demandé par la fonction :

```js
ajoute(2, 3, 4); // 5
// les deux premiers sont additionnés ; 4 est ignoré
```

Par définition les fonctions ont accès à des variables supplémentaires à l'intérieur de leur corps, appelée [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments). Il s'agit d'un objet semblable à un tableau qui contient toutes les valeurs reçues par la fonction. Réécrivons la fonction `ajoute` pour recevoir autant de valeurs qu'on veut :

```js
function ajoute() {
  let somme = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    somme += arguments[i];
  }
  return somme;
}

ajoute(2, 3, 4, 5); // 14
```

Ce n'est cependant pas vraiment plus utile que d'écrire `2 + 3 + 4 + 5`. Écrivons plutôt une fonction de calcul de moyenne :

```js
function moyenne() {
  let somme = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    somme += arguments[i];
  }
  return somme / arguments.length;
}
moyenne(2, 3, 4, 5); // 3.5
```

C'est assez utile, mais cela semble un peu verbeux. Pour réduire un peu plus ce code, nous pouvons envisager de substituer l'utilisation du tableau d'arguments par [la syntaxe du reste des paramètres](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters). De cette façon, nous pouvons passer un nombre quelconque d'arguments dans la fonction tout en gardant notre code minimal. **L'opérateur du reste des paramètres** est utilisé dans les listes de paramètres de fonctions avec le format : **...variable** et il inclura dans cette variable la liste entière des arguments non capturés avec lesquels la fonction a été appelée. Nous remplacerons également la boucle **for** par une boucle **for...of** pour retourner les valeurs dans notre variable.

```js
function moyenne(...args) {
  let somme = 0;
  for (let valeur of args) {
    somme += valeur;
  }
  return somme / args.length;
}
moyenne(2, 3, 4, 5); // 3.5
```

Avec le reste des paramètres, dans l'exemple précédent, `args` contient tous les arguments passés à la fonction.

Il est important de noter que, quel que soit l'endroit où est écrit l'opérateur du reste des paramètres au sein de la déclaration de fonction, il stockera tous les arguments écrits _après_ mais pas avant. Autrement dit, _function avg(**premiereValeur,** ...args)_ stockera la première valeur passée à la fonction dans la variable **premiereValeur** et les autres arguments iront dans **args**.

C'est très pratique, mais on rencontre un nouveau problème. La fonction `moyenne()` reçoit une liste de valeurs séparées par des virgules, mais comment fait-on si on souhaite trouver la moyenne des valeurs d'un tableau ?

On pourrait simplement récrire la fonction comme ceci :

```js
function moyenneTableau(arr) {
  let somme = 0;
  for (let i = 0, j = arr.length; i < j; i++) {
    somme += arr[i];
  }
  return somme / arr.length;
}
moyenneTableau([2, 3, 4, 5]); // 3.5
```

Mais ce serait bien si on pouvait réutiliser la fonction qu'on avait déjà créée. Par chance, JavaScript permet d'appeler une fonction et de lui donner un tableau de paramètres d'une longueur arbitraire, à l'aide de la méthode [`apply()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) de tout objet `Function`.

```js
moyenne.apply(null, [2, 3, 4, 5]); // 3.5
```

Le second paramètre envoyé à `apply()` est le tableau à utiliser comme paramètre ; nous parlerons du premier plus tard. Cela permet de souligner le fait que les fonctions sont aussi des objets.

On peut également utiliser [l'opérateur de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) pour l'appel et la définition de la fonction pour écrire, par exemple, `moyenne(...nombres)`.

### Fonctions anonymes

JavaScript vous permet de créer des fonctions anonymes, c'est-à-dire des fonctions sans nom :

```js
function() {
  let somme = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    somme += arguments[i];
  }
  return somme / arguments.length;
};
```

Mais une telle fonction anonyme n'est pas utile en soi, car sans nom, il n'y a aucun moyen d'appeler la fonction. En pratique, les fonctions anonymes sont donc généralement utilisées comme arguments pour d'autres fonctions ou sont rendues appelables en les assignant immédiatement à une variable qui peut être utilisée pour invoquer la fonction :

```js
let moyenne = function () {
  let somme = 0;
  for (let i = 0, j = arguments.length; i < j; i++) {
    somme += arguments[i];
  }
  return somme / arguments.length;
};
```

Cela rend la fonction anonyme invocable en appelant `moyenne()` avec des arguments — c'est-à-dire que c'est sémantiquement équivalent à déclarer la fonction en utilisant la forme nommée `fonction moyenne()`.

Mais les fonctions anonymes peuvent être utiles même si elles ne sont jamais affectées à des variables ou transmises comme arguments à d'autres fonctions : JavaScript fournit un mécanisme permettant de déclarer et d'invoquer simultanément une fonction à l'aide d'une seule expression. Cela s'appelle une [expression de fonction invoquée immédiatement (_IIFE_ pour l'acronyme anglais)](/fr/docs/Glossary/IIFE), et la syntaxe pour l'utiliser avec une fonction anonyme ressemble à ceci :

```js
(function () {
  // …
})();
```

De plus amples détails sur les IIFE sont hors de portée de cet article d'introduction — mais un bon exemple de ce à quoi ils sont particulièrement utiles se trouve dans la section [Émulation de méthodes privées avec des fermetures](/fr/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) de l'article [Fermetures](/fr/docs/Web/JavaScript/Closures).

### Fonctions récursives

JavaScript permet d'appeler des fonctions récursivement. C'est particulièrement utile lorsqu'on a affaire à des structures en arbre, comme c'est le cas dans le DOM du navigateur.

```js
function countChars(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

Cela met en évidence un problème potentiel avec les fonctions anonymes : comment les appeler de manière récursive si elles n'ont pas de nom ? JavaScript vous permet de nommer les expressions de fonctions pour cela. Vous pouvez utiliser des [IIFE (« Immediately Invoked Function Expressions » en anglais soit « Expressions de fonctions immédiatement invoquées » en français)](/fr/docs/Glossary/IIFE) nommées, comme indiqué ci-dessous :

```js
let charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

Le nom fourni à l'expression de la fonction n'est disponible qu'au sein de la portée de la fonction. Cela permet au moteur JavaScript de faire des optimisations. Cela rend également le code plus lisible. Le nom apparaîtra également dans le débogueur et les piles d'appel, ce qui permettra de gagner du temps.

En JavaScript, les fonctions sont également des objets. Il est donc possible de leur ajouter ou de modifier leurs propriétés.

## Les objets personnalisés

> **Note :** Pour une approche plus détaillée de la programmation orientée objet en JavaScript, voir l'[Introduction à JavaScript orienté objet](/fr/docs/Learn/JavaScript/Objects).

Dans la programmation orientée objet classique, les objets sont des collections de données et de méthodes opérant sur ces données. Imaginons un objet personne avec les champs prénom et nom. Il y a deux manières d'afficher son nom complet : de la façon « prénom nom » ou de la façon « nom prénom ». À l'aide des fonctions et des objets vus précédemment, voici une manière de le faire :

```js example-bad
function creerPersonne(prenom, nom) {
  return {
    prenom: prenom,
    nom: nom,
  };
}

function personneNomComplet(personne) {
  return personne.prenom + " " + personne.nom;
}

function personneNomCompletInverse(personne) {
  return personne.nom + " " + personne.prenom;
}

let s = creerPersonne("Simon", "Willison");
personneNomComplet(s); // Simon Willison
personneNomCompletInverse(s); // Willison Simon
```

Ça fonctionne, mais c'est inutilement verbeux. On va se retrouver avec des dizaines de fonctions dans l'espace de noms global. Ce dont on aurait vraiment besoin, c'est d'une manière d'attacher une fonction à un objet. Comme les fonctions sont des objets, c'est facile :

```js example-good
function creerPersonne(prenom, nom) {
  return {
    prenom: prenom,
    nom: nom,
    nomComplet: function () {
      return this.prenom + " " + this.nom;
    },
    nomCompletInverse: function () {
      return this.nom + " " + this.prenom;
    },
  };
}

let s = creerPersonne("Simon", "Willison");
s.nomComplet(); // Simon Willison
s.nomCompletInverse(); // Willison Simon
```

Il y a quelque chose que nous n'avons pas vu jusqu'à présent : le mot-clé [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this). Utilisé au sein d'une fonction, `this` fait référence à l'objet courant. Sa signification dépend de la façon dont la fonction a été appelée. Si elle a été appelée avec [la notation utilisant le point ou les crochets](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#accessing_properties) sur un objet, cet objet devient `this`. Si cette notation n'a pas été utilisée pour l'appel, `this` fera référence à l'objet global.

C'est une source fréquente d'erreurs. Par exemple :

```js
let s = creerPersonne("Simon", "Willison");
let nomComplet = s.nomComplet;
nomComplet(); // undefined undefined
```

Lorsqu'on appelle `nomComplet()` seul, sans utiliser `s.nomComplet()`, `this` est lié à l'objet global. Comme il n'y a pas de variables globales appelées `prenom` ou `nom`, on se retrouve avec `undefined` pour chacune.

On peut se servir du mot-clé `this` pour améliorer notre fonction de construction :

```js
function Personne(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;
  this.nomComplet = function () {
    return this.prenom + " " + this.nom;
  };
  this.nomCompletInverse = function () {
    return this.nom + " " + this.prenom;
  };
}
let s = new Personne("Simon", "Willison");
```

Nous avons utilisé un nouveau mot clé : [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). `new` est très lié à `this`. Il crée un nouvel objet vide et appelle ensuite la fonction spécifiée, avec `this` pointant vers ce nouvel objet. On notera cependant que la fonction appelée avec ce `this` ne renvoie pas de valeur mais ne fait que modifier l'objet `this`. C'est l'opérateur `new` qui renvoie l'objet `this` à l'endroit de l'appel. Les fonctions prévues pour être appelées par `new` sont appelées des constructeurs. L'usage courant est de mettre la première lettre de ces fonctions en majuscule pour se souvenir de les appeler avec `new`.

La fonction améliorée présente toujours le même écueil avec l'appel de `personneNomComplet()` seul.

Nos objets `Personne` s'améliorent, mais il leur reste certaines aspérités pas très esthétiques. Chaque fois que l'on crée une personne, on crée deux nouveaux objets de fonctions en même temps. Ne serait-ce pas mieux si ce code était partagé ?

```js
function personneNomComplet() {
  return this.prenom + " " + this.nom;
}

function personneNomCompletInverse() {
  return this.nom + " " + this.prenom;
}

function Personne(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;
  this.nomComplet = personneNomComplet;
  this.nomCompletInverse = personneNomCompletInverse;
}
```

C'est mieux : on crée les fonctions une seule fois, et on leur assigne des références au sein du constructeur. Est-il possible de faire encore mieux que ça ? La réponse est oui :

```js
function Personne(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;
}

Personne.prototype.nomComplet = function () {
  return this.prenom + ", " + this.nom;
};

Personne.prototype.nomCompletInverse = function () {
  return this.nom + ", " + this.prenom;
};
```

`Personne.prototype` est un objet partagé par toutes les instances de `Personne`. Il fait partie d'une chaîne de résolution (qui a un nom spécial, la « chaîne de prototypes ») : chaque fois que vous essayez d'accéder à une propriété de `Personne` qui n'est pas définie, JavaScript va vérifier `Personne.prototype` pour voir si cette propriété n'existe pas plutôt à cet endroit. Par conséquent, tout ce qui est assigné à `Personne.prototype` devient disponible à toutes les instances de ce constructeur via l'objet `this`.

C'est un outil incroyablement puissant. JavaScript vous permet de modifier le prototype de quelque chose à tout moment dans votre programme, cela signifie qu'il est possible d'ajouter des méthodes supplémentaires à des objets existants lors de l'exécution :

```js
let s = new Personne("Simon", "Willison");
s.prenomEnMajuscules(); // TypeError on line 1: s.prenomEnMajuscules is not a function

Personne.prototype.prenomEnMajuscules = function prenomEnMajuscules() {
  return this.prenom.toUpperCase();
};
s.prenomEnMajuscules(); // "SIMON"
```

Il est également possible d'ajouter des choses aux prototypes de classes d'objets JavaScript prédéfinies. Ajoutons par exemple une méthode à `String` qui renvoie cette chaîne à l'envers :

```js
let s = "Simon";
s.inverse(); // TypeError on line 1: s.inverse is not a function

String.prototype.inverse = function inverse() {
  let r = "";
  for (let i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};
s.inverse(); // "nomiS"
```

Notre nouvelle méthode fonctionne même sur les chaînes littérales !

```js
"Ceci peut maintenant être inversé.".inverse(); // ".ésrevni ertê tnanetniam tuep iceC"
```

Comme mentionné précédemment, le prototype fait partie d'une chaîne de prototypes. Le début de cette chaîne est `Object.prototype`, dont `toString()` fait partie des méthodes. C'est cette méthode qui est appelée quand vous essayez de représenter un objet sous la forme d'une chaîne. Elle sera utile pour déboguer nos objets `Personne` :

```js
let s = new Personne("Simon", "Willison");
s; // [object Object]

Personne.prototype.toString = function () {
  return "<Personne : " + this.nomComplet() + ">";
};
s.toString(); // "<Personne : Simon Willison>"
```

Vous vous souvenez de la fonction `moyenne.apply()` qui avait un premier paramètre défini à `null` ? Nous pouvons en reparler à présent. Le premier paramètre d'`apply()` est l'objet qui doit être traité comme `this`. Par exemple, voici une implémentation de `new` :

```js
function trivialNew(constructor, ...args) {
  let o = {}; // Crée un objet
  constructor.apply(o, ...args);
  return o;
}
```

Ce n'est pas une réplique exacte de `new` parce qu'elle n'initialise pas la chaîne de prototype. La méthode `apply()` est difficile à illustrer, ce n'est pas quelque chose qu'on utilise très souvent, mais c'est utile de savoir qu'elle existe. Dans ce fragment de code, on utilise le [reste des arguments](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters), représentés par `...args`. Comme son nom l'indique, cela représente le reste des arguments passés à la fonction.

Appeler

```js
let bill = trivialNew(Personne, ["William", "Orange"]);
```

est donc quasiment équivalent à :

```js
let bill = new Personne("William", "Orange");
```

`apply()` possède une fonction proche, appelée [`call`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call), qui permet de définir la valeur de `this` mais qui prend une liste d'arguments plutôt qu'un tableau.

```js
function nomMajuscule() {
  return this.nom.toUpperCase();
}
let s = new Personne("Simon", "Willison");
nomMajuscule.call(s); // correspond à:
s.nomMajuscule = nomMajuscule;
s.nomMajuscule();
```

### Les fonctions internes

Comme nous l'avons déjà vu, les déclarations de fonctions JavaScript peuvent se trouver à l'intérieur d'autres fonctions. Un détail important des fonctions définies à l'intérieur d'autres fonctions est qu'elles peuvent accéder à des variables de leur fonction parente :

```js
function parentFunc() {
  let a = 1;
  function fonctionImbriquee() {
    let b = 4; // Inacessible depuis parentFunc()
    return a + b;
  }
  return fonctionImbriquee(); // 5
}
```

Cela peut s'avérer très utile dans l'écriture de code plus facilement maintenable. Si une fonction A dépend d'une ou deux autres fonctions B et C qui ne sont utiles à aucun autre endroit de votre code, on peut imbriquer ces fonctions utilitaires B et C à l'intérieur de la fonction A. Cela diminue le nombre de fonctions se trouvant dans la portée globale, ce qui est toujours une bonne chose.

C'est également un bon moyen de se préserver de l'attrait trompeur des variables globales. Lorsqu'on écrit du code complexe, il est souvent tentant d'utiliser des variables globales pour partager des valeurs entre différentes fonctions, ce qui mène à du code difficile à maintenir. Les fonctions internes peuvent partager des variables avec leur parent, de sorte que vous pouvez utiliser ce mécanisme pour coupler des fonctions ensemble lorsque cela a un sens, sans pour autant polluer l'espace de noms global. Ce sont ainsi des «&nbsp;globales locales&nbsp;». Cette technique doit être utilisée parcimonieusement, mais il est utile de s'en souvenir.

## Les fermetures (_Closures_)

Cela nous amène à l'une des abstractions les plus spectaculaires que JavaScript a à nous offrir. C'est également un des concepts les plus déroutants. Que fait ce fragment de code ?

```js
function creerAdditionneur(a) {
  return function (b) {
    return a + b;
  };
}
let ajoute5 = creerAdditionneur(5);
let ajoute20 = creerAdditionneur(20);
ajoute5(6); // ?
ajoute20(7); // ?
```

Le nom de la fonction `creerAdditionneur` devrait vous donner un indice : elle crée de nouveaux additionneurs sous forme de fonctions qui, quand elles sont appelées avec un paramètre, l'ajoutent à celui avec lequel elles ont été créées.

Ce qui se passe ici est sensiblement la même chose qu'avec les fonctions internes dont nous avons parlé précédemment : une fonction définie à l'intérieur d'une autre fonction a accès aux variables de sa fonction extérieure. La seule différence ici est que la fonction extérieure a déjà renvoyé son résultat, et le bon sens semblerait vouloir être que ses variables locales n'existent plus. Mai*s* elles existent _encore_ ; autrement les additionneurs présentés ci-dessus ne fonctionneraient pas. Ce n'est pas tout, il y a même deux « copies » différentes des variables locales de `creerAdditionneur` : une dans laquelle `a` vaut 5 et une autre dans laquelle `a` vaut 20. Quel est donc le résultat de ces appels de fonction ?

```js
ajoute5(6); // renvoie 11
ajoute20(7); // renvoie 27
```

Voici ce qui se passe en réalité. Lorsque JavaScript exécute une fonction, un objet de portée est créé pour conserver les variables locales créées au sein de cette fonction. Il est initialisé avec les variables passées en paramètres à la fonction. Cela ressemble à l'objet global dans lequel toutes les variables et fonctions globales se trouvent, mais avec quelques différences importantes : premièrement, un nouvel objet de portée est créé chaque fois qu'une fonction commence à s'exécuter, et deuxièmement, contrairement à l'objet global (qui est accessible via `this` et qui, dans le navigateur, correspond à l'objet `window`), on ne peut pas directement accéder à ces objets de portée depuis le code JavaScript. Il n'existe pas de mécanisme permettant de parcourir les propriétés de l'objet de la portée courante par exemple.

Donc, quand `creerAdditionneur()` est appelée, une portée est créée avec une propriété : `a`, qui est l'argument passé à la fonction `creerAdditionneur()`. Celle-ci renvoie alors une fonction nouvellement créée. Normalement, le ramasse-miettes de JavaScript devrait supprimer l'objet de portée créé pour `creerAdditionneur()` à ce moment, mais la fonction renvoyée garde une référence vers cet objet de portée. Par conséquent, il ne sera pas supprimé par le ramasse-miettes tant qu'il y a toujours des références à l'objet de type fonction que `creerAdditionneur()` a renvoyé.

Les objets de portée forment une chaîne appelée chaîne de portée, similaire à la chaîne de prototypes utilisée par le système d'objets de JavaScript.

Une **fermeture** est la combinaison d'une fonction et de la portée de l'objet dans lequel elle a été créée. Les fermetures vous permettent de sauvegarder l'état — en tant que telles, elles peuvent souvent être utilisées à la place des objets. Vous pouvez trouver [plusieurs excellentes introductions aux fermetures dans cet article](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work).
