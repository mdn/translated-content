---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/sort
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/sort
---
{{JSRef}}

La méthode **`sort()`** trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.

La complexité en espace mémoire et en temps utilisée pour le tri ne peut pas être garantie car elle dépend de l'implémentation.

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## Syntaxe

    arr.sort()
    arr.sort(fonctionComparaison)

### Paramètres

- `fonctionComparaison` {{optional_inline}}
  - : Ce paramètre optionnel permet de spécifier une fonction définissant l'ordre de tri. Si absente, le tableau est trié selon la valeur de point de code [Unicode](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_litt%C3%A9raux#Unicode) de chaque caractère, d'après la conversion en chaine de caractères de chaque élément. Cette fonction prendra deux arguments : le premier élément à comparer et le deuxième élément à comparer.

### Valeur de retour

Le tableau trié (le tri est effectué sur le tableau courant qui est modifié, aucune copie n'est réalisée).

## Description

Si le paramètre `fonctionComparaison` n'est pas fourni, les éléments qui ne valent pas `undefined` sont triés en les convertissant en chaines de caractères et en comparant ces chaines selon l'ordre des points de code Unicode. Par exemple, "banane" sera trié avant "cerise", mais "Cerise" arrivera avant "banane" à cause de la majuscule (les majuscules arrivent avant dans la liste). Dans un tri numérique, 9 sera trié avant 80, mais comme ces nombres sont convertis en chaînes de caractères, "80" arrive avant "9" selon l'ordre des unités de code UTF-16. Les éléments valant `undefined` sont placés à la fin du tableau.

> **Note :** En UTF-16, les caractères Unicode situés après `\uFFFF` sont encodés avec deux unités de code _surrogates_ sur l'intervalle `\uD800`-`\uDFFF`. Pour comparer les chaînes de caractères entre elles, ce sont les unités de code séparées qui sont prises en compte. Ainsi, le caractère formé par la paire _surrogate_ `\uD655 \uDE55` sera trié avant le caractère `\uFF3A`.

Si le paramètre `fonctionComparaison` est fourni, les éléments du tableau (qui ne valent pas `undefined`) sont triés selon la valeur de retour de la fonction de comparaison. Si `a` et `b` sont deux éléments à comparer, alors :

- Si `fonctionComparaison(a, b)` est inférieur à 0, on trie `a` avec un indice inférieur à `b` (`a` sera classé avant `b`)
- Si `fonctionComparaison(a, b)` renvoie 0, on laisse `a` et `b` inchangés l'un par rapport à l'autre, mais triés par rapport à tous les autres éléments. Note : la norme ECMAScript ne garantit pas ce comportement, par conséquent tous les navigateurs (par exemple les versions de Mozilla antérieures à 2003) ne respectent pas ceci.
- Si `fonctionComparaison(a, b)` est supérieur à 0, on trie `b` avec un indice inférieur à `a`.
- `fonctionComparaison(a, b)` doit toujours renvoyer le même résultat à partir de la même paire d'arguments. Si la fonction renvoie des résultats incohérents, alors l’ordre dans lequel sont triés les éléments n’est pas défini.

Une fonction de comparaison aura donc généralement la forme suivante :

```js
function compare(a, b) {
  if (a est inférieur à b selon les critères de tri)
     return -1;
  if (a est supérieur à b selon les critères de tri)
     return 1;
  // a doit être égal à b
  return 0;
}
```

Pour comparer des nombres plutôt que des chaînes, la fonction de comparaison peut simplement soustraire `b` à `a` (cela fonctionnera si le tableau ne contient pas {{jsxref("NaN")}} ou {{jsxref("Infinity")}}) :

```js
function compareNombres(a, b) {
  return a - b;
}
```

L'usage des {{jsxref("Opérateurs/L_opérateur_function", "expressions de fonctions","",11)}} s'avère très pratique avec la méthode `sort()` :

```js
var nombres = [4, 2, 5, 1, 3];
nombres.sort(function(a, b) {
  return a - b;
});
console.log(nombres);
// [1, 2, 3, 4, 5]
```

ECMAScript 2015 permet d'utiliser [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) et ainsi d'obtenir une syntaxe plus concise :

```js
let nombres = [4, 2, 5, 1, 3];
nombres.sort((a, b) => a - b);
console.log(nombres);
```

Les objets peuvent être triés d'après les valeurs d'une de leurs propriétés.

```js
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
items.sort(function (a, b) {
  return a.value - b.value;
});
```

### Différences d'implémentation

Certaines implémentations de JavaScript utilisent un tri stable : l'ordre partiel de `a` et `b` ne change pas si `a` et `b` sont égaux. Si l'indice de `a` était inférieur à celui de `b` avant le tri, il le sera toujours après, quels que soient les mouvements de `a` et `b` dus au tri.

Le tri est stable dans [SpiderMonkey](/fr/docs/SpiderMonkey) et tous les navigateurs basés sur Mozilla à partir de [Gecko](/fr/docs/Gecko) 1.9 (voir le {{ Bug(224128) }}).

Le comportement de la méthode `sort()` a changé entre JavaScript 1.1 et JavaScript 1.2.

En JavaScript 1.1, sur certaines plateformes, la méthode `sort` ne fonctionnait pas. Le tri fonctionne sur toutes les plateformes à partir de JavaScript 1.2.

En JavaScript 1.2, cette méthode ne convertit plus les éléments non définis (`undefined`) en `null` ; elle les place en fin de tableau. Par exemple, supposons que vous ayez ce script :

```js
var a = [];
a[0] = "araignée";
a[5] = "zèbre";

function writeArray(x) {
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
    if (i < x.length-1)
      console.log(", ");
  }
}

writeArray(a);
a.sort();
console.log("\n");
writeArray(a);
```

En JavaScript 1.1, cette fonction affichait :

    araignée, null, null, null, null, zèbre
    araignée, null, null, null, null, zèbre

En JavaScript 1.2, elle affichera :

    araignée, undefined, undefined, undefined, undefined, zèbre
    araignée, zèbre, undefined, undefined, undefined, undefined

## Exemples

### Création, affichage et tri d'un tableau

L'exemple qui suit crée quatre tableaux et affiche le tableau original, puis les tableaux triés. Les tableaux numériques sont triés d'abord sans, puis avec une fonction de comparaison.

```js
var stringArray = ["Bosse", "Bleue", "Béluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNombres(a, b) {
  return a - b;
}

console.log("Chaînes : " + stringArray.join() +"\n");
console.log("Triées : " + stringArray.sort() +"\n\n");

console.log("Nombres : " + numberArray.join() +"\n");
console.log("Triés sans fonction de comparaison : " + numberArray.sort() +"\n");
console.log("Triés avec compareNombres : " + numberArray.sort(compareNombres) +"\n\n");

console.log("Chaînes numériques : " + numericStringArray.join() +"\n");
console.log("Triées sans fonction de comparaison : " + numericStringArray.sort() +"\n");
console.log("Triées avec compareNombres : " + numericStringArray.sort(compareNombres) +"\n\n");

console.log("Nombres et chaînes numériques : " + mixedNumericArray.join() +"\n");
console.log("Triés sans fonction de comparaison : " + mixedNumericArray.sort() +"\n");
console.log("Triés avec compareNombres : " + mixedNumericArray.sort(compareNombres) +"\n\n");
```

Cet exemple produit la sortie suivante. Comme on peut le voir, lorsqu'on utilise la fonction de comparaison, les nombres sont triés correctement qu'ils soient des nombres ou des chaînes numériques.

    Chaînes : Bosse,Bleue,Béluga
    Triées : Bleue,Bosse,Béluga

    Nombres : 40,1,5,200
    Triés sans fonction de comparaison : 1,200,40,5
    Triés avec compareNombres : 1,5,40,200

    Chaînes numériques : 80,9,700
    Triées sans fonction de comparaison : 700,80,9
    Triées avec compareNombres : 9,80,700

    Nombres et chaînes numériques : 80,9,700,40,1,5,200
    Triés sans fonction de comparaison : 1,200,40,5,700,80,9
    Triés avec compareNombres : 1,5,9,40,80,200,700

### Trier des caractères non-ASCII

Pour des chaines de caractères contenant des caractères non ASCII, c'est à dire des chaines de caractères contenant par exemple des accents (é, è, a, ä, etc.) : utilisez {{jsxref("String.localeCompare")}}. Cette fonction peut comparer ces caractères afin qu'ils apparaissent dans le bon ordre.

```js
var items = ["réservé", "premier", "cliché", "communiqué", "café" ,"adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]
```

### Trier avec map

La fonction de comparaison peut être amenée à être appelée plusieurs fois pour un même élément du tableau. Selon la fonction utilisée, cela peut entraîner des problèmes de performances. Plus le tableau est grand et plus la fonction de comparaison est complexe, plus il sera judicieux d'envisager des opérations de fonctions appliquées au tableau (_map_). L'idée est la suivante : on extrait les valeurs du tableau original, en appliquant des opérations dans un tableau temporaire, puis on trie ce tableau temporaire. Enfin, on recompose le tableau final avec les éléments du premier tableau et l'ordre obtenu.

```js
// le tableau à trier
var liste = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// Création d'objet temporaire qui contient les positions
// et les valeurs en minuscules
var mapped = liste.map(function(e, i) {
  return { index: i, value: e.toLowerCase() };
})

// on trie l'objet temporaire avec les valeurs réduites
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// on utilise un objet final pour les résultats
var result = mapped.map(function(e){
  return liste[e.index];
});
```

> **Note :** Une bibliothèque _open source_ utilise cette approche : [`mapsort`](https://null.house/open-source/mapsort).

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.4.4.11', 'Array.prototype.sort')}}                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-array.prototype.sort', 'Array.prototype.sort')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-array.prototype.sort', 'Array.prototype.sort')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.sort")}}

## Voir aussi

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- [À propos de la stabilité du tri pour le moteur V8](https://v8.dev/blog/array-sort)
