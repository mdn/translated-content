---
title: Collections avec clés
slug: Web/JavaScript/Guide/Keyed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Collections_indexées", "Web/JavaScript/Guide/Utiliser_les_objets")}}

Ce chapitre présente les collections de données qui sont ordonnées avec une clé. Les objets `Map` et `Set` contiennent des éléments sur lesquels on peut itérer dans leur ordre d'insertion.

## Maps

### Le type `Map`

ECMAScript 2015 introduit une nouvelle structure de données pour faire correspondre des données entre elle. Un objet {{jsxref("Map")}} représente une collection de données qui sont des correspondances entre des clés ou valeurs et pour lequel on peut itérer dans l'ordre d'insertion pour lister les différentes clés / valeurs.

Le code suivant illustre certaines opérations basiques avec `Map`. Pour plus d'informations sur cet objet, voir également la page de référence {{jsxref("Map")}}. Il est possible d'utiliser une boucle {{jsxref("Instructions/for...of","for...of")}} pour renvoyer un tableau `[clé, valeur]` à chaque itération.

```js
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"
```

### Comparaison entre les types `Object` et `Map`

Habituellement, les objets {{jsxref("Object", "objets", "", 1)}} ont été utilisés pour faire correspondre des chaînes avec des valeurs. Les objets permettent d'associer des clés avec des valeurs, de récupérer ces valeurs, de supprimer des clés, de détecter si quelque chose est enregistré dans une clé. Le type `Map` possède cependant certains avantages pour être utilisés comme _maps_.

- Les clés d'un objet de type `Object` sont des chaînes de caractères. Pour `Map`, une clé peut être une valeur de n'importe quel type.
- On peut simplement obtenir la taille d'un objet `Map` alors qu'il faut tenir compte manuellement du nombre de clés contenue dans un objet `Object`.
- Les itérations sur les _maps_ se font dans l'ordre d'insertion des éléments.
- Un objet de type `Object` possède un prototype, il y a donc des clés par défaut déjà présentes dans l'objet. (cela peut être surchargé en utilisant `map = Object.create(null)`).

Pour savoir si on doit utiliser le type `Map` ou le type `Object`, on peut considérer les aspects suivants :

- On utilisera des _maps_ plutôt que des objets lorsque les clés sont inconnues avant l'exécution et lorsque toutes les clés sont de même type et que les valeurs sont de même type.
- On utilisera des _maps_ lorsque les clés peuvent être des valeurs primitives autres que des chaînes de caractères (en effet, les objets considèrent toutes leurs clés comme des chaînes en convertissant les valeurs).
- On utilisera des objets lorsqu'il y a une logique propre à des éléments individuels.

### Le type `WeakMap`

L'objet {{jsxref("WeakMap")}} est une collection de paires clés/valeurs pour lesquelles **les clés sont uniquement des objets** (les valeurs peuvent être d'un type arbitraire). Les références vers les objets sont des références « faibles ». Cela signifie qu'elles seront collectées par le ramasse-miettes s'il n'y a pas d'autres références vers cet objet. L'API `WeakMap` offre les mêmes fonctionnalités que l'API `Map`.

La différence entre le type `Map` et le type `WeakMap` est que les clés d'un objet `WeakMap` ne sont pas énumérables (c'est-à-dire qu'on n'a pas de méthode pour donner la liste des clés). S'il en existait une, la liste dépendrait de l'état d'avancement du ramasse-miettes, ce qui introduirait un non-déterminisme.

Pour plus d'informations et d'exemples, voir également le paragraphe « Pourquoi WeakMap ? » sur l'article {{jsxref("WeakMap")}} de la référence.

Un cas d'utilisation des objets `WeakMap` est le stockage de données privées d'un objet ou pour cacher certains détails d'implémentation. L'exemple qui suit est tiré du billet de blog de Nick Fitzgerald [« Masquer des détails d'implémentation avec les WeakMaps ECMAScript 6 »](http://fitzgeraldnick.com/weblog/53/). Les données et méthodes privées sont stockées dans l'objet WeakMap `privates`. Tout ce qui est exposé par l'instance et le prototype est public. Tout ce qui est en dehors est inaccessible car `privates` n'est pas exporté depuis le module :

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Les données privées ici
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // On fait des choses avec les données privées dans `me`...
};

module.exports = Public;
```

## Les ensembles

### Le type `Set`

Les objets {{jsxref("Set")}} sont des ensembles de valeurs. Il est possible de les parcourir dans l'ordre d'insertion des éléments. Une valeur d'un élément `Set` ne peut y apparaître qu'une seule fois, il est unique pour cette instance de `Set`.

Le code suivant illustre certaines opérations basiques avec `Set`. Voir aussi la page {{jsxref("Set")}} pour plus d'exemples et l'API complète.

```js
var monEnsemble = new Set();
monEnsemble.add(1);
monEnsemble.add("du texte");
monEnsemble.add("toto");

monEnsemble.has(1); // true
monEnsemble.delete("toto");
monEnsemble.size; // 2

for (let item of monEnsemble) console.log(item);
// 1
// "du texte"
```

### Convertir des tableaux (`Array`) en ensembles (`Set`)

Il est possible de créer un {{jsxref("Array")}} à partir d'un `Set` grâce à {{jsxref("Array.from")}} ou l'[opérateur de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition). Pour effectuer la conversion dans l'autre sens, on peut utiliser le constructeur `Set` avec un argument de type `Array`. Encore une fois, les objets `Set` stockent des valeurs uniques, les éléments dupliqués dans un tableau seront supprimés lors de la conversion.

```js
Array.from(monSet);
[...monSet2];

monSet2 = new Set([1, 2, 3, 4]);
```

### Comparaison entre `Array` et `Set`

Historiquement, on représentait des ensembles avec des tableaux JavaScript. Ce nouveau type, `Set`, possède certains avantages :

- Lorsqu'on souhaite vérifier si un élément existe déjà dans un tableau, on est obligé d'utiliser {{jsxref("Array.indexOf", "indexOf")}} ce qui peut diminuer les performances.
- Les objets `Set` permettent de supprimer les éléments avec leur valeur. Avec un tableau, il faudrait « découper » le tableau sur l'indice de l'élément.
- Dans un tableau, la valeur {{jsxref("NaN")}} ne peut pas être trouvée avec la méthode `indexOf`.
- Les objets `Set` permettent de stocker des valeurs uniques, il n'est pas nécessaire d'effectuer des vérifications manuellement.

### Le type `WeakSet`

Les objets {{jsxref("WeakSet")}} sont des ensembles d'objets. Un objet d'un `WeakSet` ne peut y apparaître qu'une seule fois maximum. On ne peut pas itérer sur les objets `WeakSet` (ils ne sont pas énumérables).

Les principales différences avec l'objet {{jsxref("Set")}} sont :

- Contrairement aux objets `Set`, les objets `WeakSet` sont des ensembles qui ne comprennent **que des objets**, les valeurs ne peuvent pas être d'un type arbitraire.
- Les objets `WeakSet` utilisent des références faibles vers les objets. Ainsi, s'il n'y a pas d'autres références vers l'objet stocké dans le `WeakSet`, celui-ci pourra être collecté par le ramasse-miettes pour libérer de la mémoire. Cela signifie également qu'on ne peut pas maintenir une liste des différents objets contenus dans l'ensemble : les objets `WeakSet` ne sont pas énumérables.

Les cas d'utilisations pour les objets `WeakSet` objects sont relativement limités. Ils empêcheront toute fuite mémoire donc on pourra, de façon sécurisée, les utiliser avec des éléments DOM qui pourront être des clés (pour les utiliser par ailleurs, etc.).

## Égalité des clés et des valeurs avec `Map` et `Set`

L'égalité utilisée pour les clés des objets `Map` et celle utilisée pour les valeurs des objets `Set` sont les mêmes : elles sont basées sur [l'algorithme suivant](https://tc39.github.io/ecma262/#sec-samevaluezero) :

- L'égalité fonctionne de la même façon qu'avec l'opérateur d'égalité stricte `===`.
- `-0` et `+0` sont considérés égaux.
- {{jsxref("NaN")}} est considéré égal à lui-même (contrairement à ce qu'on obtient avec `===`).

{{PreviousNext("Web/JavaScript/Guide/Collections_indexées", "Web/JavaScript/Guide/Utiliser_les_objets")}}
