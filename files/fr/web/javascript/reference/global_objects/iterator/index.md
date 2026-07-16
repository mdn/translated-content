---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

L'objet **`Iterator`** est un objet qui respecte le [protocole itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_») en fournissant une méthode `next()` qui retourne un objet résultat d'itérateur. Tous les itérateurs intégrés héritent de la classe `Iterator`. La classe `Iterator` fournit une méthode [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator) qui retourne l'objet itérateur lui-même, rendant l'itérateur également [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»). Elle propose aussi des méthodes utilitaires pour manipuler les itérateurs.

## Description

Voici tous les itérateurs JavaScript intégrés&nbsp;:

- _L'itérateur de tableau_ retourné par {{JSxRef("Array.prototype.values()")}}, {{JSxRef("Array.prototype.keys()")}}, {{JSxRef("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{JSxRef("TypedArray.prototype.values()")}}, {{JSxRef("TypedArray.prototype.keys()")}}, {{JSxRef("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) et [`arguments[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator).
- _L'itérateur de chaîne de caractères_ retourné par [`String.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).
- _L'itérateur de Map_ retourné par {{JSxRef("Map.prototype.values()")}}, {{JSxRef("Map.prototype.keys()")}}, {{JSxRef("Map.prototype.entries()")}} et [`Map.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- _L'itérateur de Set_ retourné par {{JSxRef("Set.prototype.values()")}}, {{JSxRef("Set.prototype.keys()")}}, {{JSxRef("Set.prototype.entries()")}} et [`Set.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).
- _L'itérateur de chaîne de caractères RegExp_ retourné par [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) et {{JSxRef("String.prototype.matchAll()")}}.
- L'objet {{JSxRef("Generator")}} retourné par les [fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*).
- _L'itérateur de segments_ retourné par la méthode [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator) de l'objet [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) retourné par [`Intl.Segmenter.prototype.segment()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment).
- _L'itérateur d'aide_ retourné par les méthodes d'aide d'itérateur telles que {{JSxRef("Iterator.prototype.filter()")}} et {{JSxRef("Iterator.prototype.map()")}}.

Les API Web peuvent également retourner des itérateurs. Certaines réutilisent les itérateurs JavaScript principaux tandis que d'autres définissent leurs propres itérateurs. Par exemple&nbsp;:

- Les objets [similaires à des tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#objets_ressemblant_à_des_tableaux) tels que {{DOMxRef("NodeList")}} retournent un _itérateur de tableau_ depuis leurs méthodes respectives `keys()`, `values()`, `entries()` et `[Symbol.iterator]()`.
- Les objets [similaires à des Map](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map#api_de_navigateur_ressemblant_à_des_map) issus des API Web comme {{DOMxRef("Headers")}} retournent leur propre type d'itérateur, tel que _itérateur de Headers_, depuis leurs méthodes respectives `keys()`, `values()`, `entries()` et `[Symbol.iterator]()`.
- Les objets [similaires à des Set](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set#api_de_navigateur_ressemblant_à_des_set) issus des API Web comme {{DOMxRef("FontFaceSet")}} retournent leur propre type d'itérateur, tel que _itérateur de FontFaceSet_, depuis leurs méthodes respectives `keys()`, `values()`, `entries()` et `[Symbol.iterator]()`.

> [!NOTE]
> L'API {{DOMxRef("NodeIterator")}} et d'autres anciennes interfaces sont nommées ainsi mais ne respectent pas le [protocole d'itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_») ou le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»).

Chacun de ces itérateurs possède un objet prototype distinct, qui définit la méthode `next()` utilisée par l'itérateur en question. Par exemple, tous les objets itérateurs de chaîne de caractères héritent d'un objet caché `StringIteratorPrototype`, qui possède une méthode `next()` qui itère cette chaîne de caractères par points de code. `StringIteratorPrototype` possède également une propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) dont la valeur initiale est la chaîne de caractères `"String Iterator"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}. De même, d'autres prototypes d'itérateurs ont également leurs propres valeurs `[Symbol.toStringTag]`, qui sont identiques aux noms donnés ci-dessus.

Tous ces objets prototype héritent de `Iterator.prototype`, qui fournit une méthode [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) qui retourne l'objet itérateur lui‑même, rendant l'itérateur également [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»).

### Méthodes d'aide pour les itérateurs

> [!NOTE]
> Ces méthodes sont des aides _d'itérateur_, et non des aides _d'itérable_, car la seule exigence pour qu'un objet soit itérable est la présence d'une méthode `[Symbol.iterator]()`. Il n'existe pas de prototype partagé sur lequel installer ces méthodes.

La classe `Iterator` fournit elle-même certaines méthodes d'aide pour travailler avec les itérateurs. Par exemple, vous pourriez être tenté de faire ce qui suit&nbsp;:

```js
const nomDuDepot = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const depotTotal = [...nomDuDepot.values()].reduce((a, b) => a + b);
```

Cela convertit d'abord l'itérateur retourné par {{JSxRef("Map.prototype.values()")}} en un tableau, puis utilise la méthode {{JSxRef("Array.prototype.reduce()")}} pour calculer la somme. Cependant, cela crée un tableau intermédiaire et itère le tableau deux fois. À la place, vous pouvez utiliser la méthode `reduce()` de l'itérateur lui-même&nbsp;:

```js
const depotTotal = nomDuDepot.values().reduce((a, b) => a + b);
```

Cette méthode peut être plus efficace, notamment en termes de mémoire, car elle n'itère l'itérateur qu'une seule fois, sans mémoriser aucune valeur intermédiaire. Les méthodes d'aide à l'itérateur sont nécessaires pour travailler avec des itérateurs infinis&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const seq = fibonacci();
const troisPremiersChiffres = seq.find((n) => n >= 100);
```

Vous ne pouvez pas convertir `seq` en tableau, car il est infini. À la place, vous pouvez utiliser la méthode `find()` de l'itérateur lui-même, qui itère `seq` uniquement jusqu'à ce qu'il trouve la première valeur qui satisfait la condition.

Vous trouverez de nombreuses méthodes d'itérateur analogues aux méthodes de tableau, telles que&nbsp;:

| Méthode d'itérateur                        | Méthode de tableau                      |
| ------------------------------------------ | --------------------------------------- |
| {{JSxRef("Iterator.prototype.every()")}}   | {{JSxRef("Array.prototype.every()")}}   |
| {{JSxRef("Iterator.prototype.filter()")}}  | {{JSxRef("Array.prototype.filter()")}}  |
| {{JSxRef("Iterator.prototype.find()")}}    | {{JSxRef("Array.prototype.find()")}}    |
| {{JSxRef("Iterator.prototype.flatMap()")}} | {{JSxRef("Array.prototype.flatMap()")}} |
| {{JSxRef("Iterator.prototype.forEach()")}} | {{JSxRef("Array.prototype.forEach()")}} |
| {{JSxRef("Iterator.prototype.map()")}}     | {{JSxRef("Array.prototype.map()")}}     |
| {{JSxRef("Iterator.prototype.reduce()")}}  | {{JSxRef("Array.prototype.reduce()")}}  |
| {{JSxRef("Iterator.prototype.some()")}}    | {{JSxRef("Array.prototype.some()")}}    |

{{JSxRef("Iterator.prototype.drop()")}} et {{JSxRef("Iterator.prototype.take()")}} combinés sont quelque peu analogues à {{JSxRef("Array.prototype.slice()")}}.

### Objets d'aide à l'itérateur

> [!NOTE]
> Les _objets d'aide à l'itérateur_ et les _méthodes d'aide à l'itérateur_ sont deux concepts différents. Un objet d'aide à l'itérateur est détectable lors de l'exécution, tandis qu'une «&nbsp;méthode d'aide à l'itérateur&nbsp;» est simplement le nom donné à un ensemble de méthodes de compréhension. Le terme _aide à l'itérateur_ peut désigner soit l'objet, soit la méthode, selon le contexte.

Parmi les méthodes d'aide à l'itérateur, {{JSxRef("Iterator/filter", "filter()")}}, {{JSxRef("Iterator/flatMap", "flatMap()")}}, {{JSxRef("Iterator/map", "map()")}}, {{JSxRef("Iterator/drop", "drop()")}}, et {{JSxRef("Iterator/take", "take()")}} retournent un nouvel objet _Aide à l'itérateur_. L'aide à l'itérateur est également une instance de `Iterator`, ce qui rend ces méthodes d'aide chaînables. Tous les objets d'aide à l'itérateur héritent d'un objet prototype commun, qui implémente le protocole d'itérateur&nbsp;:

- `next()`
  - : Appelle la méthode `next()` de l'itérateur sous-jacent, applique la méthode d'aide au résultat et renvoie le résultat.
- `return()`
  - : Appelle la méthode `return()` de l'itérateur sous-jacent et retourne le résultat.

L'aide à l'itérateur partage la même source de données que l'itérateur sous-jacent, donc l'itération de l'aide à l'itérateur entraîne également l'itération de l'itérateur sous-jacent. Il n'existe aucun moyen de dupliquer un itérateur pour le parcourir plusieurs fois.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentiellement une copie
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Itérateurs appropriés

Il existe deux types «&nbsp;d'itérateurs&nbsp;»&nbsp;: les objets conformes au [protocole itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_») (qui, au minimum, nécessite uniquement la présence d'une méthode `next()`) et les objets qui héritent de la classe `Iterator`, qui bénéficient des méthodes d'aide. Ils ne s'impliquent pas mutuellement — les objets qui héritent de `Iterator` ne deviennent pas automatiquement des itérateurs, car la classe `Iterator` ne définit pas de méthode `next()`. Au lieu de cela, l'objet doit définir lui-même une méthode `next()`. Un _itérateur approprié_ est celui qui respecte à la fois le protocole itérateur et hérite de `Iterator`, et la plupart du code s'attend à ce que les itérateurs soient des itérateurs appropriés et que les objets itérables retournent des itérateurs appropriés. Pour créer des itérateurs appropriés, définissez une classe qui étend {{JSxRef("Iterator/Iterator", "Iterator")}}, ou utilisez la méthode {{JSxRef("Iterator.from()")}}.

```js
class MonIterateur extends Iterator {
  next() {
    // …
  }
}

const monIterateur = Iterator.from({
  next() {
    // …
  },
});
```

## Constructeur

- {{JSxRef("Iterator/Iterator", "Iterator()")}}
  - : Destiné à être [étendu](/fr/docs/Web/JavaScript/Reference/Classes/extends) par d'autres classes qui créent des itérateurs. Lève une erreur lorsqu'il est construit seul.

## Méthodes statiques

- {{JSxRef("Iterator.concat()")}}
  - : Crée un nouvel objet `Iterator` à partir d'une liste d'objets itérables. Le nouvel itérateur produit les valeurs de chacun des itérables d'entrée, en séquence.
- {{JSxRef("Iterator.from()")}}
  - : Crée un nouvel objet `Iterator` à partir d'un itérateur ou d'un objet itérable.
- {{JSxRef("Iterator.zip()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Iterator` qui agrège les éléments de plusieurs objets itérables en produisant des tableaux contenant les éléments à la même position.
- {{JSxRef("Iterator.zipKeyed()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Iterator` qui agrège les éléments de plusieurs objets itérables en produisant des objets contenant les éléments à la même position, avec des clés définies par l'entrée.

## Propriétés d'instance

Ces propriétés sont définies sur `Iterator.prototype` et partagées par toutes les instances de `Iterator`.

- {{JSxRef("Object/constructor", "Iterator.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Iterator`, la valeur initiale est le constructeur {{JSxRef("Iterator/Iterator", "Iterator")}}.
- `Iterator.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Iterator"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

    > [!NOTE]
    > Contrairement à la propriété `[Symbol.toStringTag]` de la plupart des classes intégrées, `Iterator.prototype[Symbol.toStringTag]` est modifiable pour des raisons de compatibilité web.

## Méthodes d'instance

- {{JSxRef("Iterator.prototype.drop()")}}
  - : Retourne un nouvel objet aide à l'itérateur qui ignore le nombre d'éléments donné au début de cet itérateur.
- {{JSxRef("Iterator.prototype.every()")}}
  - : Retourne `false` si un élément ne satisfait pas la fonction de test fournie. Sinon, si l'itérateur est épuisé sans trouver un tel élément, retourne `true`.
- {{JSxRef("Iterator.prototype.filter()")}}
  - : Retourne un nouvel objet aide à l'itérateur qui produit uniquement les éléments de l'itérateur pour lesquels la fonction de rappel fournie retourne `true`.
- {{JSxRef("Iterator.prototype.find()")}}
  - : Retourne le premier élément produit par l'itérateur qui satisfait la fonction de test fournie. Si aucune valeur ne satisfait la fonction de test, {{JSxRef("undefined")}} est retourné.
- {{JSxRef("Iterator.prototype.flatMap()")}}
  - : Retourne un nouvel objet aide à l'itérateur qui prend chaque élément de l'itérateur d'origine, le passe dans une fonction de correspondance, et produit les éléments retournés par la fonction de correspondance (qui sont contenus dans un autre itérateur ou objet pouvant être parcouru).
- {{JSxRef("Iterator.prototype.forEach()")}}
  - : Exécute une fonction fournie une fois pour chaque élément produit par l'itérateur.
- {{JSxRef("Iterator.prototype.map()")}}
  - : Retourne un nouvel objet aide à l'itérateur qui produit les éléments de l'itérateur, chacun transformé par une fonction de correspondance.
- {{JSxRef("Iterator.prototype.reduce()")}}
  - : Exécute une fonction de réduction fournie par l'utilisateur·ice sur chaque élément produit par l'itérateur, en passant la valeur retournée par le calcul sur l'élément précédent. Le résultat final de la réduction sur tous les éléments est une seule valeur.
- {{JSxRef("Iterator.prototype.some()")}}
  - : Retourne `true` si un élément satisfait la fonction de test fournie. Sinon, si l'itérateur est épuisé sans trouver un tel élément, retourne `false`.
- {{JSxRef("Iterator.prototype.take()")}}
  - : Retourne un nouvel objet aide à l'itérateur qui produit le nombre d'éléments donné dans cet itérateur puis se termine.
- {{JSxRef("Iterator.prototype.toArray()")}}
  - : Crée une nouvelle instance de l'objet {{JSxRef("Array")}} remplie avec les éléments produits par l'itérateur.
- [`Iterator.prototype[Symbol.dispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
  - : Appelle la méthode `return()` de `this`, si elle existe. Cela implémente le _protocole de libération_ et permet de le libérer lorsqu'il est utilisé avec {{JSxRef("Statements/using", "using")}} ou {{JSxRef("Statements/await_using", "await using")}}.
- [`Iterator.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : Retourne l'objet itérateur lui-même. Cela permet aux objets itérateurs d'être également itérables.

## Exemples

### Utiliser un itérateur comme itérable

Tous les itérateurs intégrés sont également itérables, vous pouvez donc les utiliser dans une boucle `for...of`&nbsp;:

```js
const tableauIterateur = [1, 2, 3].values();
for (const valeur of tableauIterateur) {
  console.log(valeur);
}
// Affiche : 1, 2, 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator` et des aides associées <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'instruction {{JSxRef("Statements/function*", "function*")}}
- [Protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
