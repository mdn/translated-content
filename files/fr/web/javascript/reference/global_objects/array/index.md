---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - Array
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array
original_slug: Web/JavaScript/Reference/Objets_globaux/Array
---
{{JSRef}}

L'objet global **`Array`** est utilisé pour créer des tableaux. Les tableaux sont des objets de haut-niveau (en termes de complexité homme-machine) semblables à des listes.

**Créer un tableau**

```js
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2
```

**Accéder (via son index) à un élément du tableau**

```js
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana
```

**Boucler sur un tableau**

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

**Ajouter à la fin du tableau**

```js
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
```

**Supprimer le dernier élément du tableau**

```js
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
```

**Supprimer le premier élément du tableau**

```js
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];
```

**Ajouter au début du tableau**

```js
var newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];
```

**Trouver l'index d'un élément dans le tableau**

```js
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1
```

**Supprimer un élément par son index**

```js
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]
```

**Supprimer des éléments à partir d'un index**

```js
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)
```

**Copier un tableau**

```js
var shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]
```

## Syntaxe

    [element0, element1, ..., elementN]
    new Array(element0, element1[, ...[, elementN]])
    new Array(arrayLength)

### Paramètres

- `element0, element1, ..., elementN`
  - : Un tableau est initialisé avec les éléments donnés, sauf dans le cas où un seul argument est passé au constructeur `Array` et que cet argument est un nombre. (Voir ci-après.) Notez que ce cas spécial s'applique aux tableaux créés avec le constructeur `Array`, et non aux tableaux créés avec la syntaxe crochets.
- `arrayLength`
  - : Si le seul argument passé au constructeur `Array` est un entier entre 0 et 2^32-1 (inclus), un nouveau tableau sera créé avec ce nombre d'éléments (note : le tableau sera créé avec `arrayLength` emplacements vides, et non avec de véritables valeurs `undefined`). Si l'argument est un nombre en dehors de la plage autorisée, une exception {{jsxref("RangeError")}} est levée.

## Description

Les tableaux sont des objets qui servent de liste et possèdent plusieurs méthodes incorporées pour exécuter des opérations de parcours et de modification.

Ni la taille d'un tableau ni le types de ses éléments n'est fixé. Puisque la dimension d'un tableau peut augmenter ou diminuer à tout moment, et que les éléments du tableau peuvent être stockés à des emplacements non contigus, les tableaux ne sont pas garantis d'être compacts. En général, ce sont des caractéristiques pratiques, mais si ces fonctionnalités ne sont pas souhaitables pour votre cas d'utilisation, vous pouvez envisager d'utiliser des tableaux typés.

Les tableaux ne peuvent pas utiliser de chaîne de caractères comme indice (comme dans un [tableau associatif](https://fr.wikipedia.org/wiki/Tableau_associatif)) mais des entiers. Utiliser ou accéder à des index non entiers, en utilisant la [notation avec crochets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#Les_objets_et_les_propri%C3%A9t%C3%A9s) (ou [avec point](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_membres)) ne va pas définir ou récupérer un élément sur le tableau lui-même, mais une variable associée à la  [collection de propriétés d'objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es#Propri%C3%A9t%C3%A9s) de ce tableau.  Les propriétés du tableau et la liste de ses éléments sont séparées, et les [opérations de parcours et de modification](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Collections_index%C3%A9es#M%C3%A9thodes_des_tableaux) ne s'appliquent pas à ces propriétés.

### Accéder aux éléments d'un tableau

Les tableaux sont indexés à partir de zéro: le premier élément d'un tableau a pour indice `0`, et la position du dernier élément est donnée par {{jsxref("Array.length", "length")}} moins 1. Si on utilise un indice en dehors de cet intervalle, le résultat sera {{jsxref("undefined")}} (sous réserve qu'aucune propriété n'ait été ajoutée au préalable avec cet indice).

```js
var arr = ["le premier élément", "le deuxième élément", "le dernier élément"];
console.log(arr[0]);             // affiche "le premier élément"
console.log(arr[1]);             // affiche "le deuxième élément"
console.log(arr[arr.length - 1]);// affiche "le dernier élément"
```

Les éléments d'un tableau sont des propriétés d'objets de la même manière que `toString` est une propriété. Cependant, essayer d'accéder à un élément du tableau comme suit renverra une erreur car le nom de la propriété utilisé est invalide :

```js
console.log(arr.0); // erreur de syntaxe
```

Ce comportement est tout à fait normal. En effet, il n'est pas possible d'accéder aux propriétés dont le nom commence par un chiffre avec cette notation (le point). Il est nécessaire d'utiliser la syntaxe avec les crochets pour accéder à ces propriétés. Ainsi, si pour un objet quelconque, on avait une propriété nommée '`3d`', on ne pourra y faire référence qu'en utilisant les crochets. Exemple :

```js
var années = [1950, 1960, 1970, 1980, 1990, 2000, 2010];

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
var promise = {
  'var' : 'text',
  'array': [1, 2, 3, 4]
};

console.log(promise['var']);
```

> **Note :** Depuis Firefox 40.0a2, il est possible d'utiliser la notation avec le point pour accéder aux propriétés dont les noms ne sont pas des identifiants valides.

### Relation entre `length` et les propriétés numériques

La propriété {{jsxref("Array.length", "length")}} d'un tableau est liée aux propriétés numériques du tableau. Plusieurs méthodes natives utilisent cette propriété : {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}}, etc. D'autres méthodes comme {{jsxref("Array.push", "push()")}} et {{jsxref("Array.splice", "splice()")}} modifient le tableau et la propriété {{jsxref("Array.length", "length")}}.

```js
var fruits = [];
fruits.push("banane", "pomme", "pêche");

console.log(fruits.length); // 3
```

Lorsqu'on définit une nouvelle propriété numérique pour un tableau, que l'index utilisé est valide et que celui-ci est dehors des limites actuelles du tableau, le moteur JavaScript mettra à jour la propriété {{jsxref("Array.length", "length")}} :

```js
fruits[5] = "mangue";
console.log(fruits[5]);  // "mangue"
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6 
```

On peut également modifier la propriété directement (cela n'ajoutera pas de nouveaux éléments) :

```js
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);  // 10
```

En revanche, si on diminue la valeur de {{jsxref("Array.length", "length")}}, cela supprimera des éléments :

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Pour plus d'informations sur le comportement de cette propriété, voir la page {{jsxref("Array.length")}}.

### Création d'un tableau utilisant le résultat d'une correspondance

Le résultat d'une correspondance entre une expression rationnelle et une chaîne peut créer un tableau. Ce tableau possède des propriétés et des éléments qui fournissent des informations sur cette correspondance. Il est possible d'obtenir un tableau grâce aux méthodes {{jsxref("RegExp.exec")}}, {{jsxref("String.match")}}, and {{jsxref("String.replace")}}. Pour mieux comprendre le fonctionnement de ces propriétés et de ces éléments, on pourra utiliser l'exemple et le tableau qui suivent :

```js
// Matche un "d" suivit par un ou plusieurs "b" et suivit d'un "d"
// Capture les "b" et le "d" qui suit
// Ignore la casse

var maRegexp = /d(b+)(d)/i;
var monTableau = maRegexp.exec("cdbBdbsbz");

console.log(monTableau);
// [ 0:"dbBd", 1:"bB", 2:"d", index:1, input:"cdbBdbsbz", length:3 ]
```

Les propriétés et les éléments retournés depuis cette correspondance sont les suivants :

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header">Propriété/Élément</td>
      <td class="header">Description</td>
      <td class="header">Exemple</td>
    </tr>
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

## Propriétés

- {{jsxref("Array.prototype.length")}}
  - : La propriété de longueur pour le constructeur `Array`, elle vaut 1.
- {{jsxref("Array.@@species", "get Array[@@species]")}}
  - : La fonction de construction utilisée pour créer les objets dérivés.
- {{jsxref("Array.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à tous les tableaux.

## Méthodes

- {{jsxref("Array.from()")}}
  - : Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un objet semblable à un tableau ou d'un itérable.
- {{jsxref("Array.isArray()")}}
  - : Cette méthode renvoie `true` si la variable est un tableau, `false` sinon.
- {{jsxref("Array.of()")}}
  - : Cette méthode permet de créer une nouvelle instance d'`Array` à partir d'un nombre variable d'arguments (peu importe la quantité ou le type des arguments utilisés).

## Instances d'`Array`

Toutes les instances d'`Array` héritent de {{jsxref("Array.prototype")}}. Le prototype du constructeur `Array` peut être modifié afin d'affecter l'ensemble des instances grâce à l'héritage.

### Les propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/prototype', 'Propriétés')}}

### Les méthodes

#### Les mutateurs

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/prototype', 'Mutateurs')}}

#### Les accesseurs

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/prototype', 'Accesseurs')}}

#### Les méthodes d'itération

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/prototype', 'Méthodes_itératives')}}

## Les méthodes génériques de manipulation de tableaux

> **Attention :** Ces méthodes génériques ne sont pas standard. Elles sont dépréciées et seront retirées dans un avenir proche. Celles-ci ne peuvent être utilisées sur tous les navigateurs. Toutefois, il existe [un _shim_ disponible sur GitHub](https://github.com/plusdude/array-generics).

Parfois, on peut vouloir appliquer des méthodes pour les tableaux sur des chaînes ou d'autres objets semblables aux tableaux (ex. : l'objet {{jsxref("Fonctions/arguments", "arguments", "", 1)}}). Une chaîne sera donc traitée comme un tableau de caractères. Ainsi, si on souhaite vérifier que chaque caractère d'une chaîne `str` est bien une lettre comprise entre 'a' et 'z', on pourra utiliser :

```js
function estUneLettre(caractère) {
  return caractère >= 'a' && caractère <= 'z';
}

if (Array.prototype.every.call(str, estUneLettre)) {
  console.log("La chaîne '" + str + "' ne contient que des lettres entre a et z!");
}
```

Cette notation étant plutôt verbeuse, une notation raccourcie a été introduite avec JavaScript 1.6 :

```js
if (Array.every(str,estUneLettre)) {
  console.log("La chaîne '" + str + "' ne contient que des lettres entre a et z !");
}
```

Des {{jsxref("Objets_globaux/String", "méthodes génériques", "#Méthodes_génériques_de_String", 1)}} sont également disponibles pour les {{jsxref("Objets_globaux/String", "String")}}.

Cette fonctionnalité ne fait pas partie du standard ECMAScript et n'est pas prise en charge par les navigateurs qui ne sont pas basés sur Gecko. Comme alternative standard, vous pouvez convertir votre objet en véritable tableau grâce à la méthode {{jsxref("Array.from()")}} (attention, cette méthode n'est pas supportée dans les anciens navigateurs) :

```js
if (Array.from(str).every(estUneLettre)) {
  console.log("La chaîne '" + str + "' contient uniquement des lettres !");
}
```

## Exemples

### Créer un tableau

Dans l'exemple suivant, on crée un tableau `tableauMsg`, d'une longueur nulle. Ensuite, on lui affecte des valeurs pour `tableauMsg[0]` et `tableauMsg[99]`, ce qui aura pour effet de modifier la propriété `length` (qui vaudra alors 100).

```js
var tableauMsg = [];
tableauMsg[0] = 'Coucou';
tableauMsg[99] = 'monde';

if (tableauMsg.length === 100) {
  console.log('La longueur du tableau vaut 100.');
}
```

### Créer un tableau à deux dimensions

Dans l'exemple qui suit, on crée un plateau d'échec grâce à un tableau en deux dimensions qui contient des caractères. Le premier mouvement est effectué en copiant 'p' de (6,4) vers (4,4). La position anciennement occupée par le pion (6,4) devient vide.

```js
var plateau = [
  ['T','C','F','R','K','F','C','T'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['t','c','f','k','r','f','c','t'] ];

console.log(plateau.join('\n') + '\n\n');

// On déplace le pion de deux cases en avant 2
plateau[4][4] = plateau[6][4];
plateau[6][4] = ' ';
console.log(plateau.join('\n'));
```

Voici le résultat affiché :

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

### Utiliser un tableau pour tabuler un ensemble de valeurs

```js
values = [];
for (var x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)
```

Résulte en

```plain
0	1	0
1	2	2
2	4	8
3	8	18
4	16	32
5	32	50
6	64	72
7	128	98
8	256	128
9	512	162
```

(Le première colonne est l'index)

## Spécifications

| Spécification                                                            | État                         | Commentaires                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Définition initiale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| {{SpecName('ES5.1', '#sec-15.4', 'Array')}}                 | {{Spec2('ES5.1')}}     | Ajout de nouvelles méthodes : {{jsxref("Array.isArray")}}, {{jsxref("Array.prototype.indexOf", "indexOf")}}, {{jsxref("Array.prototype.lastIndexOf", "lastIndexOf")}}, {{jsxref("Array.prototype.every", "every")}}, {{jsxref("Array.prototype.some", "some")}}, {{jsxref("Array.prototype.forEach", "forEach")}}, {{jsxref("Array.prototype.map", "map")}}, {{jsxref("Array.prototype.filter", "filter")}}, {{jsxref("Array.prototype.reduce", "reduce")}}, {{jsxref("Array.prototype.reduceRight", "reduceRight")}} |
| {{SpecName('ES6', '#sec-array-objects', 'Array')}}     | {{Spec2('ES6')}}         | Ajout de nouvelles méthodes : {{jsxref("Array.from")}}, {{jsxref("Array.of")}}, {{jsxref("Array.prototype.find", "find")}}, {{jsxref("Array.prototype.findIndex", "findIndex")}}, {{jsxref("Array.prototype.fill", "fill")}}, {{jsxref("Array.prototype.copyWithin", "copyWithin")}}                                                                                                                                                                                                                                                                                                             |
| {{SpecName('ES7', '#sec-array-objects', 'Array')}}     | {{Spec2('ES7')}}         | Ajout de la méthode {{jsxref("Array.prototype.includes()")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| {{SpecName('ESDraft', '#sec-array-objects', 'Array')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array")}}

## Voir aussi

- [Guide JavaScript : indexer les propriétés d'un objet](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#Indexer_les_propri.C3.A9t.C3.A9s_d'un_objet)
- [Guide JavaScript : Les objets natifs : l'objet `Array`](/fr/docs/Web/JavaScript/Guide/Objets_élémentaires_JavaScript#Les_tableaux_.3A_objet_Array)
- [Les compréhensions de tableau](/fr/docs/Web/JavaScript/Reference/Opérateurs/Compréhensions_de_tableau)
- [Émulation pour les méthodes génériques et autres fonctionnalités ECMAScript 5 pour les tableaux](https://github.com/plusdude/array-generics) (en anglais)
- [Les tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typés)
