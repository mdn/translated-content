---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
---

{{JSRef}}

L'objet global **`Array`** est utilisé pour créer des tableaux. Les tableaux sont des objets de haut-niveau (en termes de complexité homme-machine) semblables à des listes.

## Description

Les tableaux sont des objets semblables à des listes dont le prototype possède des méthodes qui permettent de parcourir et de modifier le tableau. Ni la longueur ni le type des éléments d'un tableau JavaScript sont fixés. Comme la longueur d'un tableau peut varier à tout moment et que les données peuvent être stockées à des emplacements qui ne sont pas nécessairement contigus, les tableaux JavaScript ne sont pas forcément «&nbsp;pleins&nbsp;» / denses. Généralement, ces particularités sont appréciables mais si elles ne correspondent pas à votre usage, vous pourriez vouloir utiliser les tableaux typés.

Les tableaux ne peuvent pas utiliser de chaînes de caractères comme indices pour les éléments (à la façon des [tableaux associatifs](https://fr.wikipedia.org/wiki/Tableau_associatif)) mais doivent utiliser des entiers. Définir une valeur ou tenter d'y accéder avec un indice non-entier via [la notation entre crochet](/fr/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties) (ou [la notation avec le point](/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) ne définira ou ne récupèrera pas la valeur mais définira ou récupèrera une variable associée [aux propriétés de l'objet](/fr/docs/Web/JavaScript/Data_structures#properties) formé par le tableau. Les propriétés et les éléments d'un tableau sont distincts et [les opérations de parcours et de modification du tableau](/fr/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) ne peuvent pas être appliquées à ces propriétés.

### Opérations fréquentes

**Créer un tableau**

```js
let fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2
```

**Accéder (via son index) à un élément du tableau**

```js
let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana
```

**Boucler sur un tableau**

```js
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

**Ajouter à la fin du tableau**

```js
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
```

**Supprimer le dernier élément du tableau**

```js
let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
```

**Supprimer le premier élément du tableau**

```js
let first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];
```

**Ajouter au début du tableau**

```js
let newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];
```

**Trouver l'index d'un élément dans le tableau**

```js
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf("Banana");
// 1
```

**Supprimer un élément par son index**

```js
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]
```

**Supprimer des éléments à partir d'un index**

```js
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1,
  n = 2;

let removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)
```

**Copier un tableau**

```js
let shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]
```

### Accéder aux éléments d'un tableau

Les tableaux sont indexés à partir de zéro: le premier élément d'un tableau a pour indice `0`, et la position du dernier élément est donnée par [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length) moins 1. Si on utilise un indice en dehors de cet intervalle, le résultat sera [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) (sous réserve qu'aucune propriété n'ait été ajoutée au préalable avec cet indice).

```js
let arr = ["le premier élément", "le deuxième élément", "le dernier élément"];
console.log(arr[0]); // affiche "le premier élément"
console.log(arr[1]); // affiche "le deuxième élément"
console.log(arr[arr.length - 1]); // affiche "le dernier élément"
```

Les éléments d'un tableau sont des propriétés d'objets de la même manière que `toString` est une propriété. Cependant, essayer d'accéder à un élément du tableau comme suit renverra une erreur, car le nom de la propriété utilisé est invalide :

```js
console.log(arr.0); // erreur de syntaxe
```

Ce comportement est tout à fait normal. En effet, il n'est pas possible d'accéder aux propriétés dont le nom commence par un chiffre avec cette notation (le point). Il est nécessaire d'utiliser la syntaxe avec les crochets pour accéder à ces propriétés. Ainsi, si pour un objet quelconque, on avait une propriété nommée '`3d`', on ne pourra y faire référence qu'en utilisant les crochets. Exemple :

```js
let années = [1950, 1960, 1970, 1980, 1990, 2000, 2010];

console.log(années.0);  // erreur de syntaxe
console.log(années[0]); // fonctionne correctement
```

```js
renderer.3d.setTexture(model, "personnage.png");   // erreur de syntaxe
renderer["3d"].setTexture(model, "personnage.png");// fonctionne correctement
```

Dans cet exemple, on utilise des doubles quotes autour de `3d`. On peut aussi utiliser les doubles quotes pour accéder aux éléments d'un tableau (ex. : `années["2"]` au lieu de `années[2]`), mais ce n'est pas obligatoire. Dans l'instruction `années[2]`, le nombre sera converti en une chaîne de caractères par le moteur JavaScript. Pour cette raison, si on utilise les noms de propriété "2" et "02", on fera référence à deux propriétés différentes, et le fragment de code suivant renvoie donc `true`:

```js
console.log(années["2"] != années["02"]);
```

De manière similaire, les propriétés nommées avec des mots-clés réservés ne peuvent être consultées qu'en utilisant la syntaxe avec crochets :

```js
let promise = {
  var: "text",
  array: [1, 2, 3, 4],
};

console.log(promise["var"]);
```

### Relation entre `length` et les propriétés numériques

La propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length) d'un tableau est liée aux propriétés numériques du tableau. Plusieurs méthodes natives utilisent cette propriété : [`join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join), [`slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), etc. D'autres méthodes comme [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) et [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) modifient le tableau et la propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

```js
let fruits = [];
fruits.push("banane", "pomme", "pêche");

console.log(fruits.length); // 3
```

Lorsqu'on définit une nouvelle propriété numérique pour un tableau, que l'index utilisé est valide et que celui-ci est dehors des limites actuelles du tableau, le moteur JavaScript mettra à jour la propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length) :

```js
fruits[5] = "mangue";
console.log(fruits[5]); // "mangue"
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

On peut également modifier la propriété directement (cela n'ajoutera pas de nouveaux éléments) :

```js
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
```

En revanche, si on diminue la valeur de [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length), cela supprimera des éléments :

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Pour plus d'informations sur le comportement de cette propriété, voir la page [`Array.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

### Création d'un tableau utilisant le résultat d'une correspondance

Le résultat d'une correspondance entre une expression rationnelle et une chaîne peut créer un tableau. Ce tableau possède des propriétés et des éléments qui fournissent des informations sur cette correspondance. Il est possible d'obtenir un tableau grâce aux méthodes [`RegExp.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match), et [`String.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace). Pour mieux comprendre le fonctionnement de ces propriétés et de ces éléments, on pourra utiliser l'exemple et le tableau qui suivent :

```js
// Matche un "d" suivit par un ou plusieurs "b" et suivit d'un "d"
// Capture les "b" et le "d" qui suit
// Ignore la casse

let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec("cdbBdbsbz");

console.log(monTableau);
// [ 0:"dbBd", 1:"bB", 2:"d", index:1, input:"cdbBdbsbz", length:3 ]
```

Les propriétés et les éléments retournés depuis cette correspondance sont les suivants :

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">Propriété/Élément</th>
      <th class="header" scope="col">Description</th>
      <th class="header" scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>input</code></td>
      <td>
        Une propriété en lecture seule qui reflète la chaîne originale sur
        laquelle l'expression rationnelle a été appliquée.
      </td>
      <td>cdbBdbsbz</td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>
        Une propriété en lecture seule qui est l'indice de la correspondance
        dans la chaîne (les indices commencent à 0)
      </td>
      <td>1</td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>
        Une propriété en lecture seule qui spécifie les derniers caractères
        correspondants.
      </td>
      <td>dbBd</td>
    </tr>
    <tr>
      <td><code>[1], ...[n]</code></td>
      <td>
        Des éléments en lecture seule qui contiennent les groupes capturés, s'il
        y en a dans l'expression régulière. Le nombre de groupes capturés
        possibles est illimité.
      </td>
      <td>[1]: bB<br />[2]: d</td>
    </tr>
  </tbody>
</table>

## Constructeur

- [`Array()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
  - : Crée un nouvel objet `Array`.

## Propriétés statiques

- [`get Array[@@species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species)
  - : La fonction de construction utilisée pour créer les objets dérivés.

## Méthodes statiques

- [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
  - : Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un objet semblable à un tableau ou d'un itérable.
- [`Array.isArray()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
  - : Cette méthode renvoie `true` si la variable est un tableau, `false` sinon.
- [`Array.of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
  - : Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un nombre variable d'arguments (peu importe la quantité ou le type des arguments utilisés).

## Propriétés des instances

- [`Array.prototype.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
  - : La propriété de longueur pour le constructeur `Array`, elle vaut 1.
- [`Array.prototype[@@unscopables]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/@@unscopables)
  - : Un symbole contenant les noms des propriétés à exclure d'une portée de liaison avec [`with`](/fr/docs/Web/JavaScript/Reference/Statements/with).

## Méthodes des instances

- [`Array.prototype.at()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at){{Experimental_Inline}}
  - : REnvoie l'élément du tableau à l'indice indiqué. Les entiers négatifs sont acceptés en argument et, dans ce cas, la recherche de l'élément se fait depuis la fin du tableau.
- [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
  - : Renvoie un nouveau tableau qui est le tableau courant, joint avec d'autres tableaux ou valeurs.
- [`Array.prototype.copyWithin()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
  - : Copie une séquence d'élément d'un tableau au sein du tableau courant.
- [`Array.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les paires de clés/valeurs pour chaque indice dans le tableau.
- [`Array.prototype.every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
  - : Renvoie `true` si chaque élément du tableau vérifie la condition fixée par la fonction passée en argument.
- [`Array.prototype.fill()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
  - : Remplit tous les éléments d'un tableau à partir d'un indice de début jusqu'à un indice de fin avec une valeur statique.
- [`Array.prototype.filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - : Renvoie un nouveau tableau qui contient tous les éléments du tableau courant pour lesquels la fonction de filtre passée en argument a renvoyé `true`.
- [`Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  - : Renvoie l'élément trouvé dans le tableau si un des éléments satisfait la condition fixée par la fonction passée en paramètre. Renvoie `undefined` si aucun élément correspondant n'est trouvé.
- [`Array.prototype.findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  - : Renvoie l'indice de l'élément trouvé dans le tableau si un élément du tableau satisfait la condition fixée par la fonction passée en argument ou `-1` si aucun élément n'est trouvé.
- [`Array.prototype.flat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
  - : Renvoie un nouveau tableau avec l'ensemble des sous-éléments concaténés récursivement dans le tableau jusqu'à une profondeur indiquée.
- [`Array.prototype.flatMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
  - : Renvoie un nouveau tableau formé en appliquant une fonction de rappel donnée à chaque élément du tableau puis en «&nbsp;aplatissant&nbsp;» le tableau d'un niveau.
- [`Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - : Appelle une fonction pour chaque élément du tableau.
- [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  - : Détermine si le tableau contient une valeur et renvoie `true` ou `false` selon le cas de figure.
- [`Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  - : Renvoie l'indice le plus petit d'un élément du tableau égal à la valeur passée en argument ou `-1` si aucun élément n'est trouvé.
- [`Array.prototype.join()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  - : Fusionne tous les éléments du tableau en une chaîne de caractères.
- [`Array.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les clés de chaque indice du tableau.
- [`Array.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
  - : Renvoie le plus grand indice d'un élément du tableau égal à la valeur passée en argument ou `-1` si aucun élément n'est trouvé.
- [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - : Renvoie un nouveau tableau contenant les résultats de l'appel de la fonction passée en argument sur chaque élément du tableau.
- [`Array.prototype.pop()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
  - : Retire le dernier élément du tableau et renvoie cet élément.
- [`Array.prototype.push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  - : Ajoute un ou plusieurs éléments à la fin du tableau et renvoie la nouvelle longueur (`length`) du tableau.
- [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  - : Applique une fonction sur un accumulateur et chaque valeur du tableau (de gauche à droite) afin de réduire le tableau à une seule valeur.
- [`Array.prototype.reduceRight()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
  - : Applique une fonction sur un accumulateur et chaque valeur du tableau (de droite à gauche) afin de réduire le tableau à une seule valeur.
- [`Array.prototype.reverse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
  - : Inverse l'ordre des éléments du tableau _à même le tableau_ (le premier élément devient le dernier, le dernier devient le premier, etc.).
- [`Array.prototype.shift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
  - : Retire le premier élément du tableau et renvoie cet élément.
- [`Array.prototype.slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
  - : Extrait une section du tableau courant et renvoie un nouveau tableau.
- [`Array.prototype.some()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
  - : Renvoie `true` si au moins un des éléments du tableau satisfait la condition fournie par la fonction passée en paramètre.
- [`Array.prototype.sort()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - : Trie les éléments du tableau à même le tableau et renvoie le tableau.
- [`Array.prototype.splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - : Ajoute et/ou retire des éléments du tableau.
- [`Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Cette méthode surcharge la méthode [`Object.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- [`Array.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)
  - : Renvoie une chaîne de caractères qui représente le tableau et ses éléments. Cette méthode surcharge la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`Array.prototype.unshift()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
  - : Ajoute un ou plusieurs éléments à l'avant du tableau et renvoie la nouvelle longueur du tableau.
- [`Array.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les valeurs pour chaque indice du tableau.
- <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator()"><code>Array.prototype[@@iterator]()</code></a>
  - : Renvoie un nouvel _itérateur de tableau_ qui contient les valeurs pour chaque indice du tableau.

## Exemples

### Créer un tableau

Dans l'exemple suivant, on crée un tableau `tableauMsg`, d'une longueur nulle. Ensuite, on lui affecte des valeurs pour `tableauMsg[0]` et `tableauMsg[99]`, ce qui aura pour effet de modifier la propriété `length` (qui vaudra alors 100).

```js
let tableauMsg = [];
tableauMsg[0] = "Coucou";
tableauMsg[99] = "monde";

if (tableauMsg.length === 100) {
  console.log("La longueur du tableau vaut 100.");
}
```

### Créer un tableau à deux dimensions

Dans l'exemple qui suit, on crée un plateau d'échec grâce à un tableau en deux dimensions qui contient des caractères. Le premier mouvement est effectué en copiant 'p' de (6,4) vers (4,4). La position anciennement occupée par le pion (6,4) devient vide.

```js
let plateau = [
  ["T", "C", "F", "R", "K", "F", "C", "T"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["t", "c", "f", "k", "r", "f", "c", "t"],
];

console.log(plateau.join("\n") + "\n\n");

// On déplace le pion de deux cases en avant 2
plateau[4][4] = plateau[6][4];
plateau[6][4] = " ";
console.log(plateau.join("\n"));
```

Voici le résultat affiché :

```
T,C,F,R,K,F,C,T
P,P,P,P,P,P,P,P
  , , , , , , ,
  , , , , , , ,
  , , , , , , ,
  , , , , , , ,
p,p,p,p,p,p,p,p
t,c,f,k,r,f,c,t

T,C,F,R,K,F,C,T
P,P,P,P,P,P,P,P
  , , , , , , ,
  , , , , , , ,
  , , , ,p, , ,
  , , , , , , ,
p,p,p,p, ,p,p,p
t,c,f,k,r,f,c,t
```

### Utiliser un tableau pour tabuler un ensemble de valeurs

```js
values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Résulte en

```plain
0  1  0
1  2  2
2  4  8
3  8  18
4  16  32
5  32  50
6  64  72
7  128  98
8  256  128
9  512  162
```

(Le première colonne est l'index)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Chapitres du guide JavaScript
  - [Guide JavaScript : indexer les propriétés d'un objet](/fr/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties)
  - [Guide JavaScript : Les objets natifs : l'objet `Array`](/fr/docs/Web/JavaScript/Guide/Indexed_collections#array_object)
- [Les tableaux typés](/fr/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
