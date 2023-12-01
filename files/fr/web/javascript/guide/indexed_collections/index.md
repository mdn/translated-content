---
title: Collections indexées
slug: Web/JavaScript/Guide/Indexed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

Ce chapitre présente les collections de données qui sont ordonnées par un indice. Cela inclue les tableaux et les objets semblables à des tableaux que sont les objets [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) et les objets [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

## Le type `Array`

Un _tableau_ (<i lang="en">array</i> en anglais) est un ensemble ordonné de valeurs auxquelles on peut faire référence avec un nom et un indice. Par exemple, si on a un tableau `emp` qui contient les noms d'employés indexés par leurs numéros d'employé, on pourrait utiliser `emp[0]` pour accéder à l'employé 0, `emp[1]` pour accéder au suivant et ainsi de suite.

JavaScript ne possède pas de type particulier pour représenter un tableau de données. En revanche, il est possible d'utiliser l'objet natif `Array` ainsi que ses méthodes pour manipuler des tableaux. L'objet `Array` possède plusieurs méthodes qui permettent de manipuler les tableaux pour les fusionner, les inverser, les trier, etc. Il possède une propriété de longueur ainsi que d'autres propriétés qui peuvent être utilisées avec les expressions rationnelles.

### Créer un tableau

Les instructions qui suivent sont équivalentes et permettent de créer le même tableau&nbsp;:

```js
let arr = new Array(élément0, élément1, ..., élémentN);
let arr = Array(élément0, élément1, ..., élémentN);
let arr = [élément0, élément1, ..., élémentN];
```

`élément0, élément1, ..., élémentN` est une liste de valeurs qui formeront les éléments du tableau. Lorsque ces valeurs sont définies, le tableau initialisera la valeur des éléments correspondants. La propriété `length` du tableau permet de connaître le nombre d'arguments du tableau.

Parmi les instructions précédentes, une utilise des crochets, on appelle ceci un «&nbsp;littéral de tableau&nbsp;» ou un «&nbsp;initialisateur de tableau&nbsp;». Cette notation est plus courte que les autres et est souvent préférée pour sa lisibilité. Pour plus d'informations sur cette notation, voir la page sur [les littéraux de tableaux](/fr/docs/Web/JavaScript/Guide/Grammar_and_types) pour plus détails.

Afin de créer un tableau de longueur non nulle mais sans aucun élément initialisé, on peut utiliser l'une des deux instructions suivantes&nbsp;:

```js
let arr = new Array(longueurTableau);

// sera équivalent à :
let arr = Array(longueurTableau);

// et aura le même effet que :
let arr = [];
arr.length = longueurTableau;
```

> **Note :** Dans le code ci-dessus `longueurTableau` doit être un nombre. Si ce n'est pas le cas, un tableau d'un seul élément (ayant la valeur fournie) sera créé. `arr.length` renverra `longueurTableau`, mais le tableau ne contiendra que des éléments «&nbsp;vides&nbsp;» non définis. Si on utilise une boucle [`for…in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) sur ce tableau, on ne trouvera aucun élément.

On a vu comment créer un tableau, il est aussi possible d'affecter des tableaux à des propriétés d'objets (que ce soit lors de leur création ou pour les modifier)&nbsp;:

```js
let obj = {};
// ...
obj.prop = [élément0, élément1, ..., élémentN];

// OU
let obj = {prop: [élément0, élément1, ...., élémentN]}
```

Si on souhaite initialiser un tableau avec un seul élément et que cet élément est un nombre, il est nécessaire d'utiliser la notation littérale. En effet, si un nombre est passé à la fonction `Array()` pour construire le tableau, celui-ci sera interprété comme une longueur et non comme la valeur d'un élément.

```js
let arr1 = [42]; // Le tableau créé contient bien un élément qui vaut 42
let arr2 = Array(42); // Crée un tableau sans élément
// mais dont arr.length vaut 42

// Le code ci-dessus est équivalent à
let arr = [];
arr.length = 42;
```

Si N est un nombre décimal dont la partie fractionnaire n'est pas nulle, tout appel à `Array(N)` renverra une exception `RangeError`. Par exemple&nbsp;:

```js
let arr = Array(9.3); // RangeError: Invalid array length
```

Si on souhaite créer un tableau d'un seul élément et ce quel que soit le type de données, il sera préférable d'utiliser les littéraux de tableaux. Sinon, on peut créer un tableau vide puis lui ajouter un seul élément.

Avec ES2015 (anciennement ECMAScript 6), on peut utiliser la méthode [`Array.of`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/of) afin de créer un tableau composé d'un seul élément&nbsp;:

```js
let monTableau = Array.of("Joconde"); // monTableau contient uniquement "Joconde"
```

### Remplir un tableau

Il est possible de remplir un tableau en affectant des valeurs à ses éléments. Par exemple&nbsp;:

```js
let emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> **Note :** Si on utilise une valeur non entière pour désigner un élément du tableau, cela créera une propriété sur l'objet plutôt qu'un élément du tableau&nbsp;:
>
> ```js
> let arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(arr.hasOwnProperty(3.4)); // true
> ```

Il est aussi possible de remplir un tableau directement lors de sa création&nbsp;:

```js
let monTableau = new Array("Coucou", maVar, 3.14159);
let monTableau = ["Mangue", "Pomme", "Orange"];
```

### Faire référence aux éléments d'un tableau

Il est possible de faire référence aux éléments d'un tableau en utilisant un nombre ordinal lié à l'élément. Ainsi, si on définit le tableau suivant&nbsp;:

```js
let monTableau = ["Air", "Eau", "Feu"];
```

On pourra accéder au premier élément du tableau en utilisant `monTableau[0]`, on accèdera au deuxième élément avec `monTableau[1]`. Les indices des éléments sont comptés à partir de 0.

> **Note :** Les crochets peuvent également être utilisés pour faire référence aux propriétés du tableau (les tableaux sont des objets JavaScript à part entière). On pourra donc avoir&nbsp;:
>
> ```js
> let arr = ["un", "deux", "trois"];
> arr[2]; // "trois" - on accède à un élément du tableau
> arr["length"]; // 3 - on accède à une propriété du tableau
> ```

### Comprendre la propriété `length`

En termes d'implémentation, les tableaux JavaScript stockent leurs éléments comme des propriétés normales, l'indice étant utilisé comme nom pour désigner la valeur de la propriété. La propriété `length` est elle un peu spéciale&nbsp;: elle renvoie toujours la valeur du plus grand indice du tableau plus 1. Dans l'exemple suivant, "Biduche" est placé à l'indice 30, `chats.length` renvoie donc 30 + 1). On rappelle que les indices des tableaux JavaScript commencent à partir de 0 et pas à partir de 1. Cela signifie que la valeur de la propriété `length` sera plus grande, de 1, par rapport à l'indice le plus élevé&nbsp;:

```js
let chats = [];
chats[30] = ["Biduche"];
console.log(chats.length); // 31
```

Il est aussi possible d'affecter une valeur à la propriété `length`. Si la valeur fournie est inférieure au nombre d'éléments stockés, cela tronquera le tableau. Si la valeur est 0, cela videra le tableau&nbsp;:

```js
let chats = ["Marie", "Toulouse", "Berlioz"];
console.log(chats.length); // 3

chats.length = 2;
console.log(chats); // affiche "Marie,Toulouse" - Berlioz a été retiré

chats.length = 0;
console.log(chats); // affiche [], le tableau est vide

chats.length = 3;
console.log(chats); // [ <3 empty slots> ]
```

### Parcourir un tableau

Un tableau est une structure de données qui se prête particulièrement aux boucles, on pourra utiliser ces dernières pour parcourir les éléments du tableau de façon itérative. Voici un exemple de parcours simple&nbsp;:

```js
let couleurs = ["rouge", "vert", "bleu"];
for (let i = 0; i < couleurs.length; i++) {
  console.log(couleurs[i]);
}
```

Si on sait qu'aucun des éléments ne vaut `false` dans un contexte booléen (par exemple, si le tableau contient des nœuds du [DOM](/fr/docs/Web/API/Document_Object_Model)), on peut utiliser une formulation encore plus concise&nbsp;:

```js
let divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* On effectue un traitement sur les div */
}
```

Cette syntaxe permet d'éviter d'avoir à vérifier la longueur du tableau et de gérer l'affectation de la variable `div` pour chaque élément du tableau.

La méthode [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) fournit une autre méthode pour parcourir un tableau&nbsp;:

```js
let couleurs = ["rouge", "vert", "bleu"];
couleurs.forEach(function (couleur) {
  console.log(couleur);
});
```

Avec les fonctions fléchées (apparues avec ES6 / ECMAScript 2015), on peut obtenir un code plus concis&nbsp;:

```js
let couleurs = ["rouge", "vert", "bleu"];
couleurs.forEach((couleur) => console.log(couleur));
```

La fonction passée comme argument à `forEach()` est exécutée une fois pour chacun des éléments du tableau (l'élément du tableau sera passé comme argument de cette fonction). Les éléments qui n'ont pas de valeur affectée ne sont pas parcourus lors d'une boucle `forEach`.

On notera que les éléments ne sont pas parcourus lorsqu'ils n'ont pas eu de valeur affectée. Cependant, si on a affecté la valeur [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) de façon explicite à un élément, il sera pris en compte lors de la boucle&nbsp;:

```js
let tableau = ["premier", "deuxième", , "quatrième"];

// affiche ['premier', 'deuxième', 'quatrième'];
tableau.forEach(function (élément) {
  console.log(élément);
});

if (tableau[2] === undefined) {
  console.log("tableau[2] vaut undefined");
} // true

let tableau = ["premier", "deuxième", undefined, "quatrième"];

// renvoie ['premier', 'deuxième', undefined, 'quatrième'];
tableau.forEach(function (élément) {
  console.log(élément);
});
```

Étant donné que les éléments des tableaux sont stockés comme des propriétés classiques, il n'est pas conseillé d'utiliser des boucles [`for…in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) pour parcourir les tableaux car cela listerait également les propriétés énumérables (en plus des éléments).

### Méthodes des tableaux

L'objet `Array` possède les méthodes suivantes&nbsp;:

- [`concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) permet de fusionner deux ou plusieurs tableaux et de renvoyer le résultat dans un nouveau tableau&nbsp;:

  ```js
  let monTableau = new Array("1", "2", "3");
  monTableau = monTableau.concat("a", "b", "c"); // monTableau is now ["1", "2", "3", "a", "b", "c"]
  ```

- [`join(délimiteur = ',')`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join) permet de fusionner les éléments du tableau en une chaîne de caractères&nbsp;:

  ```js
  let monTableau = new Array("Air", "Eau", "Feu");
  let list = monTableau.join(" - "); // list sera "Air - Eau - Feu"
  ```

- [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) permet d'ajouter un ou plusieurs éléments à la fin d'un tableau et renvoie la longueur du tableau&nbsp;:

  ```js
  let monTableau = new Array("1", "2");
  monTableau.push("3"); // monTableau vaut désormais ["1", "2", "3"]
  ```

- [`pop()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) permet de retirer le dernier élément (le plus à droite) du tableau et renvoie cet élément&nbsp;:

  ```js
  let monTableau = new Array("1", "2", "3");
  let dernier = monTableau.pop(); // monTableau vaut désormais ["1", "2"], dernier = "3"
  ```

- [`shift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) retire le premier élément d'un tableau (le plus à gauche) et renvoie cet élément&nbsp;:

  ```js
  let monTableau = new Array("1", "2", "3");
  let premier = monTableau.shift(); // monTableau vaut désormais ["2", "3"], premier vaut "1"
  ```

- [`unshift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) ajoute un ou plusieurs éléments au début du tableau et renvoie la longueur du tableau ainsi modifié&nbsp;:

  ```js
  let monTableau = new Array("1", "2", "3");
  monTableau.unshift("4", "5"); // monTableau devient ["4", "5", "1", "2", "3"]
  ```

- [`slice(indice_début, indice_fin)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) extrait une portion d'un tableau et renvoie un nouveau tableau avec ce fragment&nbsp;:

  ```js
  let monTableau = new Array("a", "b", "c", "d", "e");
  monTableau = monTableau.slice(1, 4); // extrait les éléments entre l'indice 1 et jusqu'à
  // celui d'indice 3 (4-1), elle renvoie
  // [ "b", "c", "d"]
  ```

- [`splice(indice, nbASupprimer, ajouterElement1, ajouterElement2, ...)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) retire des éléments du tableau et (éventuellement) les remplace&nbsp;:

  ```js
  let monTableau = new Array("1", "2", "3", "4", "5");
  monTableau.splice(1, 3, "a", "b", "c", "d"); // monTableau vaut désormais ["1", "a", "b", "c", "d", "5"]
  // Le code remplace à partir de l'indice 1 (où il y avait la valeur "2"), supprime trois éléments puis
  // insère les arguments fournis à la suite.
  ```

- [`reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) transpose les éléments du tableau à même ce tableau&nbsp;: le premier élément devient le dernier, le dernier devient le premier et ainsi de suite&nbsp;:

  ```js
  let monTableau = new Array("1", "2", "3");
  monTableau.reverse(); // monTableau vaut maintenant [ "3", "2", "1" ]
  ```

- [`sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) trie les éléments d'un tableau à même ce tableau&nbsp;:

  ```js
  let monTableau = new Array("Air", "Feu", "Eau");
  monTableau.sort(); // trie le tableau [ "Air", "Eau", "Feu" ]
  ```

  `sort()` peut également utiliser une fonction de rappel (<i lang="en">callback</i>) qui détermine comment les éléments sont comparés. La fonction compare deux arguments et renvoie une valeur selon les règles suivantes&nbsp;:

  - Si `a` est inférieur à `b` selon l'ordre, renvoie -1 (ou un autre nombre négatif)
  - Si `a` est supérieur à `b` selon l'ordre, renvoie 1 (ou un autre nombre positif)
  - Si `a` et `b` sont considérés égaux, renvoie 0.

  Par exemple, on peut utilise la fonction suivante pour trier par rapport à la dernière lettre du mot&nbsp;:

  ```js
  let sortFn = function (a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
  };
  monTableau.sort(sortFn); // le tableau devient = ["Air","Feu","Eau"]
  ```

  Du code permettant d'émuler ces fonctions est disponible sur chacune des pages (_polyfill_). Le support natif de ces fonctionnalités dans les différents navigateurs peut être trouvé [ici](http://www.robertnyman.com/javascript/).

- [`indexOf(élémentRecherché[, indiceDépart])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) recherche la valeur `élémentRecherché` dans le tableau et renvoie l'indice du premier élément qui correspond&nbsp;:

  ```js
  let a = ["a", "b", "a", "b", "a"];
  console.log(a.indexOf("b")); // Affiche 1
  // On recherche après la première correspondance :
  console.log(a.indexOf("b", 2)); // Affiche 3
  console.log(a.indexOf("z")); // Affiche -1 car 'z' n'a pas été trouvé
  ```

- [`lastIndexOf(élémentRecherché[, fromIndex])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) fonctionne comme `indexOf`, mais recherche à partir de la fin du tableau&nbsp;:

  ```js
  let a = ["a", "b", "c", "d", "a", "b"];
  console.log(a.lastIndexOf("b")); // Affiche 5
  // On continue la recherche après la première correspondance en fin de tableau
  console.log(a.lastIndexOf("b", 4)); // Affiche 1
  console.log(a.lastIndexOf("z")); // Affiche -1
  ```

- [`forEach(callback[, objetThis])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) exécute la fonction `callback` sur chaque élément du tableau.

  ```js
  let a = ["a", "b", "c"];
  a.forEach(console.log); // Affichera la valeur de chaque élément dans la console
  ```

- [`map(callback[, objetThis])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) renvoie un nouveau tableau dont les éléments sont les images des éléments du tableau courant par la fonction `callback`&nbsp;:

  ```js
  let a1 = ["a", "b", "c"];
  let a2 = a1.map(function (item) {
    return item.toUpperCase();
  });
  console.log(a2); // affichera A,B,C dans la console
  ```

- [`filter(callback[, objetThis])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) renvoie un nouveau tableau qui contient les éléments du tableau courant pour lesquels `callback` a renvoyé `true`.

  ```js
  let a1 = ["a", 10, "b", 20, "c", 30];
  let a2 = a1.filter(function (item) {
    return typeof item == "number";
  });
  console.log(a2); // Affichera 10,20,30 dans la console
  ```

- [`every(callback[, objetThis])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every) renvoie `true` si `callback` renvoie `true` pour chaque élément du tableau.

  ```js
  function isNumber(value) {
    return typeof value === "number";
  }
  let a1 = [1, 2, 3];
  console.log(a1.every(isNumber)); // affiche true
  let a2 = [1, "2", 3];
  console.log(a2.every(isNumber)); // affiche false
  ```

- [`some(callback[, objetThis])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some) renvoie `true` si `callback` renvoie `true` pour au moins un élément du tableau.

  ```js
  function isNumber(value) {
    return typeof value === "number";
  }
  let a1 = [1, 2, 3];
  console.log(a1.some(isNumber)); // Affiche true
  let a2 = [1, "2", 3];
  console.log(a2.some(isNumber)); // Affiche true
  let a3 = ["1", "2", "3"];
  console.log(a3.some(isNumber)); // Affiche false
  ```

  Les méthodes présentées ci-avant qui prennent une fonction de rappel (<i lang="en">callback</i>) en argument sont appelées méthodes itératives, car elles parcourent le tableau de façon itérative. Chacune de ces méthodes peut prendre en compte un deuxième argument (optionnel) qui sera l'objet `this` pris en compte par le <i lang="en">callback</i>. Si ce deuxième argument n'est pas fourni, `this` vaudra la valeur de l'objet global.

  La fonction de rappel est appelée avec trois arguments&nbsp;: le premier étant la valeur de l'élément courant, le deuxième est l'indice de cet élément et le troisième représente le tableau lui-même. Les fonctions JavaScript ignorent les arguments supplémentaires qui ne sont pas déclarés explicitement dans la liste des paramètres, on peut donc utiliser une fonction prenant un seul argument comme fonction de rappel.

- [`reduce(callback[, valeurInitiale])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) applique `callback(premièreValeur, secondeValeur)` au fur et à mesure sur le tableau pour le réduire en une seule valeur, c'est cette valeur qui est renvoyée par la fonction&nbsp;:

  ```js
  let a = [10, 20, 30];
  let total = a.reduce(function (premier, deuxième) {
    return premier + deuxième;
  }, 0);
  console.log(total); // Affiche 60
  ```

- [`reduceRight(callback[, valeurInitiale])`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) fonctionne comme `reduce()`, mais débute avec le dernier élément (parcourt le tableau de droite à gauche).

  `reduce()` et `reduceRight()` sont à utiliser lorsqu'on souhaite n'obtenir qu'une seule valeur, récursivement, à partir des différents éléments du tableau. Pour plus d'informations sur l'utilisation d'une valeur d'initialisation pour ces deux fonctions, se référer à leurs pages&nbsp;: [`Array.reduceRight`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) et [`Array.reduce`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Tableaux multi-dimensionnels

Les tableaux peuvent être imbriqués les uns dans les autres. Cela signifie qu'un tableau peut avoir un élément dont la valeur est un tableau. En utilisant ce comportement, on peut donc créer des matrices, voire des tableaux à plusieurs dimensions.

Par exemple, avec le code suivant&nbsp;:

```js
let a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}
```

On pourra avoir le tableau suivant sur deux dimensions&nbsp;:

```js
Ligne 0 : [0,0] [0,1] [0,2] [0,3]
Ligne 1 : [1,0] [1,1] [1,2] [1,3]
Ligne 2 : [2,0] [2,1] [2,2] [2,3]
Ligne 3 : [3,0] [3,1] [3,2] [3,3]
```

### Utiliser les tableaux pour stocker d'autres propriétés

Il est aussi possible d'utiliser les tableaux comme des objets afin de stocker d'autres informations avec des propriétés.

```js
const tableau = [1, 2, 3];
tableau.propriete = "valeur";
console.log(tableau.propriete); // Affiche "valeur" dans la console
```

### Les tableaux et les expressions rationnelles

Lorsqu'un tableau est le résultat d'une correspondance entre une expression rationnelle et une chaîne de caractères, les éléments et propriétés du tableau fournissent des informations sur la correspondance. Les méthodes suivantes peuvent renvoyer un tableau&nbsp;: [`RegExp.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`String.split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split). Pour plus d'informations sur les tableaux et les expressions rationnelles, voir le chapitre du guide JavaScript sur [les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions).

### Manipuler des objets semblables à des tableaux

Certains objets JavaScript tels que [`NodeList`](/fr/docs/Web/API/NodeList) (renvoyé par [`document.getElementsByTagName()`](/fr/docs/Web/API/Document/getElementsByTagName)) ou l'objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) (disponible au sein d'une fonction) ressemblent à des tableaux mais n'en sont pas (ils n'ont pas toutes les méthodes décrites ci-avant par exemple). Ainsi, l'objet `arguments` fournit une propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) mais n'implémente pas la méthode [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Les méthodes du prototype des tableaux permettent d'utiliser les méthodes d'objets `Array` sur des objets semblables à des tableaux. Attention, elles ne sont pas appelables directement depuis ces objets&nbsp;:

```js example-bad
function printArguments() {
  arguments.forEach(function (item) {
    // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}
```

```js
function printArguments() {
  Array.prototype.forEach.call(arguments, function (item) {
    console.log(item);
  });
}
```

Il est possible d'utiliser ces méthodes génériques sur des chaînes de caractères&nbsp;:

```js
Array.prototype.forEach.call("une chaîne", function (chr) {
  console.log(chr);
});
```

## Les tableaux typés

[Les tableaux typés JavaScript](/fr/docs/Web/JavaScript/Typed_arrays) sont des objets semblables à des tableaux qui fournissent un moyen d'accéder à des données binaires. Comme on l'a vu ci-avant, les objets [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) grandissent et rétrécissent dynamiquement et peuvent contenir n'importe quelle valeur JavaScript. Les moteurs JavaScript effectuent des optimisations afin que les tableaux puissent être utilisés rapidement. Cependant, avec le développement des applications web, les applications viennent à manipuler des données audio, vidéo, binaires et accèdent à des données brutes via les [WebSockets](/fr/docs/Web/API/WebSockets_API) d'autres outils. Il apparaît donc nécessaire d'avoir les outils JavaScript pertinents pour manipuler efficacement des données binaires, organisées au sein de tableaux typés.

### Les vues et les tampons de mémoire (<i lang="en">buffers</i>)&nbsp;: l'architecture des tableaux typés

Afin de permettre un maximum de flexibilité et d'efficacité, les tableaux typés JavaScript séparent l'implémentation entre **les tampons (<i lang="en">buffers</i>)** et **les vues (<i lang="en">views</i>)**. Un tampon de mémoire, implémenté par l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), est un objet représentant un fragment de données. Un tampon n'a pas de format à proprement parler et il ne fournit aucun mécanisme pour accéder à son contenu. Afin d'accéder à la mémoire contenue dans le tampon, on a besoin d'utiliser une vue. Une vue fournit un contexte, c'est-à-dire un type de donnée, un indice de départ et un nombre d'éléments, qui permet de traiter les données initiales comme un vrai tableau typé.

![Tableaux typés dans un ArrayBuffer](typed_arrays.png)

### `ArrayBuffer`

Le type [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) est un type de donnée utilisé pour représenter un tampon de données binaire générique dont la longueur est fixée. Un tampon de données ne peut pas être manipulé directement. Pour manipuler les données, il faut créer une vue sur le tableau typé ou un objet [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView) qui représente le tampon dans un format spécifique et qui pourra être utilisé pour lire et écrire des informations du tampon.

### Les vues sur les tableaux typés

Les vues de tableaux typés possèdent des noms explicites et fournissent des vues pour les types numériques usuels tels que `Int8`, `Uint32`, `Float64` et ainsi de suite. Il existe un type de vue spécial qui est `Uint8ClampedArray`. Ce type ramène les différentes valeurs exploitées entre 0 et 255. Cela peut notamment être utile pour [le traitement des données d'un canvas](/fr/docs/Web/API/ImageData).

| Type                                                                                      | Intervalle de valeurs                                               | Taille exprimée en octets | Description                                                                        | Type Web IDL          | Type équivalent en C            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| [`Int8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)                 | `-128` à `127`                                                      | 1                         | Entier signé avec complément à deux sur 8 bits                                     | `byte`                | `int8_t`                        |
| [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)               | `0` à `255`                                                         | 1                         | Entier non-signé sur 8 bits                                                        | `octet`               | `uint8_t`                       |
| [`Uint8ClampedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | `0` à `255`                                                         | 1                         | Entier non-signé sur 8 bit (écrété)                                                | `octet`               | `uint8_t`                       |
| [`Int16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)               | `-32768` à `32767`                                                  | 2                         | Entier signé avec complément à deux sur 16 bits                                    | `short`               | `int16_t`                       |
| [`Uint16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)             | `0` à `65535`                                                       | 2                         | Entier non-signé sur 16 bits                                                       | `unsigned short`      | `uint16_t`                      |
| [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)               | `-2147483648` à `2147483647`                                        | 4                         | Entier signé avec complément à deux sur 32 bits                                    | `long`                | `int32_t`                       |
| [`Uint32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)             | `0` à `4294967295`                                                  | 4                         | Entier non-signé sur 32 bits                                                       | `unsigned long`       | `uint32_t`                      |
| [`Float32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)           | `-3.4E38` à `3.4E38` et `1.2E-38` est le plus petit nombre positif  | 4                         | Nombre flottant sur 32 bits IEEE 754 (7 chiffres significatifs, ex. `1.123456`)    | `unrestricted float`  | `float`                         |
| [`Float64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)           | `-1.8E308` à `1.8E308` et `5E-324` est le plus petit nombre positif | 8                         | Nombre flottant sur 64 bits IEEE 754 (16 chiffres significatifs, ex. `1.123...15`) | `unrestricted double` | `double`                        |
| [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)         | `-2^63` à `2^63 - 1`                                                | 8                         | Entier signé avec complément à deux sur 64 bits                                    | `bigint`              | `int64_t (signed long long)`    |
| [`BigUint64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)       | `0` à `2^64 - 1`                                                    | 8                         | Entier non-signé sur 64 bits                                                       | `bigint`              | `uint64_t (unsigned long long)` |

Pour plus d'informations sur les tableaux typés, voir [l'article de la référence](/fr/docs/Web/JavaScript/Typed_arrays) sur les différents objets [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
