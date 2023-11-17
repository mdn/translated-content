---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

L'**instruction `for...of`** permet de créer une boucle {{jsxref("Array")}} qui parcourt un {{jsxref("Les_protocoles_iteration","objet itérable","#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB",1)}} (ce qui inclut les objets {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, l'objet {{jsxref("Fonctions/arguments","arguments")}}, etc.) et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## Syntaxe

```js
for (variable of iterable) {
  instruction;
}
```

- `variable`
  - : À chaque itération, la valeur d'une propriété différente est affectée à `variable` (cette variable peut être déclarée avec `const`, `let` ou `var`).
- `iterable`
  - : L'objet dont on parcourt les propriétés énumérables.
- `instruction`
  - : Une instruction à exécuter pour chaque propriété, cette instruction peut être composée de plusieurs instructions en utilisant un {{jsxref("Instructions/bloc","bloc","",1)}} d'instructions.

## Exemples

### Utiliser `for...of` sur un tableau

```js
let tableauItérable = [1, 2, 3];

for (let valeur of tableauItérable) {
  console.log(valeur);
}
// 1
// 2
// 3
```

Si la variable n'est pas réaffectée dans la boucle, on pourra également utiliser [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const) à la place de [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) :

```js
let tableauItérable = [1, 2, 3];

for (const valeur of tableauItérable) {
  console.log(valeur);
}
// 1
// 2
// 3
```

### Parcourir une chaîne de caractères avec `for...of`

```js
let iterable = "pixel";

for (let valeur of iterable) {
  console.log(valeur);
}
// p
// i
// x
// e
// l
```

### Parcourir un tableau typé ({{jsxref("TypedArray")}})

```js
let iterable = new Uint8Array([0x00, 0xff]);

for (let valeur of iterable) {
  console.log(valeur);
}
// 0
// 255
```

### Parcourir une {{jsxref("Map")}}

```js
let iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let element of iterable) {
  console.log(element);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [clef, valeur] of iterable) {
  console.log(valeur);
}
// 1
// 2
// 3
```

### Utiliser `Array.prototype.forEach()`

Pour obtenir les mêmes valeurs qu'avec une boucle `for...of`, on peut utiliser la méthode {{jsxref("Array.prototype.forEach()")}} :

```js
let arr = [3, 5, 7];
arr.toto = "coucou";

arr.forEach(function (element, index) {
  console.log(element); // affiche "3", "5", "7"
  console.log(index); // affiche "0", "1", "2"
});

// ou avec Object.keys()

Object.keys(arr).forEach(function (element, index) {
  console.log(arr[element]); // affiche "3", "5", "7", "coucou"
  console.log(arr[index]); // affiche "3", "5", "7", undefined
});
```

### Parcourir l'objet `arguments`

Il est possible de parcourir l'objet {{jsxref("Fonctions/arguments", "arguments")}} afin d'examiner l'ensemble des paramètres passés à la fonction :

```js
(function () {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
```

### Parcourir des collections DOM

Il est possible de parcourir des collections DOM telles que {{domxref("NodeList")}}. Dans cet exemple, on ajoute une classe `read` aux paragraphes qui sont des descendants directs d'un article :

```js
// Note : Cela ne fonctionnera que pour les plates-formes
// qui implémentent NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Clôturer les itérateurs

Dans les boucles `for...of`, on peut provoquer la fin de l'itérateur avec `break`, `continue`, `throw`, ou `return`. Dans ces cas, l'itérateur est fermé.

```js
function* toto() {
  yield 1;
  yield 2;
  yield 3;
}

for (let o of toto()) {
  console.log(o);
  break; // L'itérateur est fermé
}
```

### Itérer sur les générateurs

Grâce à cette instruction, on peut également itérer sur les {{jsxref("Instructions/function*","générateurs","",1)}} :

```js
function* fibonacci() {
  // une fonction génératrice
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // on arrête la séquence à 1000
  if (n >= 1000) {
    break;
  }
}
```

### Itérer sur les autres objets itérables

Il est aussi possible d'itérer sur un objet qui implémente [le protocole itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_») de façon explicite :

```js
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (let value of iterable) {
  console.log(value);
}
console.log("fini !");
// 0
// 1
// 2
```

### Les différences entre `for...of` et `for...in`

Les deux instructions `for...in` et `for...of` permettent de parcourir un ensemble. Mais elles ne parcourent pas le même ensemble.

L'instruction {{jsxref("Instructions/for...in", "for...in")}} permet de parcourir [les propriétés énumérables](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement) d'un objet dans un ordre arbitraire.

L'instruction `for...of` permet quant à elle de parcourir les données contenues dans l'[objet itérable](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Itérables) visé.

Dans l'exemple qui suit, on illustre la différence de comportement entre une boucle `for...of` et une boucle `for...in` utilisées sur un tableau ({{jsxref("Array")}}).

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.toto = "coucou";

for (let i in iterable) {
  console.log(i); // affiche 0, 1, 2, "toto",
  // "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // affiche 0, 1, 2, "toto"
  }
}

for (let i of iterable) {
  console.log(i); // affiche 3, 5, 7
}
```

Chaque objet héritera de la propriété `objCustom` et chaque objet qui est un tableau ({{jsxref("Array")}}) héritera de la propriété `arrCustom` car on les ajoute aux prototypes {{jsxref("Object.prototype")}} et {{jsxref("Array.prototype")}}. L'objet `iterable` hérite donc des propriétés `objCustom` et `arrCustom` grâce [à l'héritage et à la chaîne de prototypes](/fr/docs/Web/JavaScript/Héritage_et_chaîne_de_prototypes).

```js
for (let i in iterable) {
  console.log(i); // affiche 0, 1, 2, "toto",
  // "arrCustom" et "objCustom"
}
```

Cette boucle ne parcourt que les [propriétés énumérables](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement) de l'objet `iterable` dans un ordre arbitraire. Les éléments du tableau `3`, `5`, `7` ou `hello` ne sont pas affichés car ce ne sont pas des propriétés (et encore moins des propriétés énumérables). En revanche, on retrouve bien les indices du tableau et les propriétés `arrCustom` et `objCustom`. Pour décrire plus précisément ce comportement, vous pouvez consulter {{jsxref("Instructions/for...in", "for...in", "#/fr/docs/Web/JavaScript/Reference/Instructions/for...in#Utiliser_for...in_et_parcourir_un_tableau")}}.

```js
for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // affiche 0, 1, 2, "toto"
  }
}
```

Cette boucle ressemble à la première mais ajoute la méthode {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} qui permet de vérifier si la propriété énumérable recensée est directement disponible sur l'objet (c'est-à-dire si elle n'est pas héritée). La console affiche donc les propriétés `0`, `1`, `2` et `toto` car ce sont des propriétés directement rattachées à l'objet `iterable`. En revanche, les propriétés `arrCustom` et `objCustom` ne sont pas affichées car elles proviennent de l'héritage.

```js
for (let i of iterable) {
  console.log(i); // affiche 3, 5, 7
}
```

Cette boucle parcourt les valeurs définies comme itérables par [l'objet itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB) et dans ce cas ce sont les éléments du tableau `3`, `5`, `7` et pas les propriétés de l'objet.

### Attention à ne pas réutiliser les générateurs

Les générateurs ne doivent pas être réutilisés, même lorsque la boucle `for...of` a été interrompue (par exemple lorsque {{jsxref("Instructions/break","break")}} est utilisé). Lorsqu'on quitte une boucle, le générateur est clôturé et si on l'utilise à nouveau, il ne fournira aucun résultat. Firefox n'a pas encore implémenté ce comportement standard (cf. [bug Firefox 1147371](https://bugzil.la/1147371)).

```js
var gen = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break; // L'itérateur est fermé
}

// Le générateur ne doit pas être réutilisé !
for (let o of gen) {
  console.log(o); // Ceci n'est jamais exécuté
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
