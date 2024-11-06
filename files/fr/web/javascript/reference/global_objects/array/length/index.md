---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef}}

La propriété **`length`** (longueur) est un entier non-signé de 32 bits qui indique le nombre d'éléments présents dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.

{{EmbedInteractiveExample("pages/js/array-length.html")}}

## Description

La valeur de la propriété `length` est un entier de signe positif dont la valeur est inférieure à 2 à la puissance 32 (2^32).

```js
var tableauA = new Array(4294967296); // 2 à la puissance 32 = 4294967296
var tableauC = new Array(-100); // une valeur négative

console.log(tableauA.length); // RangeError: Invalid array length
console.log(tableauC.length); // RangeError: Invalid array length

var tableauB = [];
tableauB.length = Math.pow(2, 32) - 1; // On déclare une longueur inférieure à 2 puissance 32
console.log(tableauB.length); // 4294967295
```

Vous pouvez modifier la propriété `length` d'un tableau à loisir pour le tronquer. Quand vous étendez un tableau en modifiant la valeur de sa propriété `length`, le nombre d'éléments réellement présents dans ce tableau n'augmente pas : par exemple, si vous affectez la valeur 3 à la propriété `length` d'un tableau alors qu'elle vaut 2, le tableau contiendra toujours seulement 2 éléments. La troisième « case » ne sera pas itérable. De ce fait, la propriété `length` d'un tableau ne renseigne en rien sur le nombre de valeurs définies dans le tableau. Voir aussi [la relation entre longueur et propriétés numériques](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Relation_entre_length_et_les_propri.C3.A9t.C3.A9s_num.C3.A9riques).

```js
const arr = [1, 2, 3];
console.table(arr);
// [1, 2]

arr.length = 5; // On définit une longueur à 5
console.table(arr);
// [1, 2, <3 éléments vides>]

arr.forEach((element) => console.log(element));
// 1
// 2
```

{{js_property_attributes(1,0,0)}}

## Exemples

### Renvoyer la longueur d'un tableau

```js
var items = ["chaise", "bureau", "table", "sac"];
items.length; // 4
```

### Parcourir un tableau

Dans l'exemple suivant, on itère sur le tableau `nombres` en utilisant la propriété `length` afin de connaître son nombre d'élément. La valeur de chaque élément est ensuite multipliée par deux :

```js
var nombres = [1, 2, 3, 4, 5];

for (var i = 0; i < nombres.length; i++) {
  nombres[i] *= 2;
}
// nombres vaut maintenant [2,4,6,8,10];
```

### Tronquer un tableau

L'exemple suivant raccourcit le tableau `etatsUS` à 50 si sa longueur actuelle est supérieure à 50.

```js
if (etatsUS.length > 50) {
  etatsUS.length = 50;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array")}}
