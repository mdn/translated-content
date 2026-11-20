---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Un objet **`WeakSet`** est une collection de valeurs pouvant être collectées par le ramasse-miette (<i lang="en">garbage collector</i> en anglais), incluant des objets et des [symboles non enregistrés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_et_registre_global_des_symboles). Une valeur dans le `WeakSet` ne peut apparaître qu'une seule fois. Elle est unique dans la collection du `WeakSet`.

## Description

Les valeurs d'un `WeakSet` doivent pouvoir être collectées par le ramasse-miette. La plupart des {{Glossary("Primitive", "types de données primitives")}} peuvent être créées arbitrairement et n'ont pas de durée de vie, elles ne peuvent donc pas être stockées. Les objets et les [symboles non enregistrés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_et_registre_global_des_symboles) peuvent être stockés, car ils sont collectables par le ramasse-miette.

Les principales différences avec l'objet {{JSxRef("Set")}} sont&nbsp;:

- Les `WeakSet` sont des collections **uniquement d'objets et de symboles**. Ils ne peuvent pas contenir des valeurs de n'importe quel type, contrairement aux {{JSxRef("Set")}}.
- Le `WeakSet` est _faible_, ce qui signifie que les références aux objets dans un `WeakSet` sont maintenues _faiblement_. Si aucune autre référence à une valeur stockée dans le `WeakSet` n'existe, ces valeurs peuvent être collectées par le ramasse-miette.

  > [!NOTE]
  > Cela signifie également qu'il n'existe pas de liste des valeurs actuellement stockées dans la collection. Les `WeakSet` ne sont pas énumérables.

### Égalité des clés

Comme pour un `Set`, l'égalité des valeurs est basée sur l'algorithme [SameValueZero](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#égalité_de_valeurs_nulles), qui est équivalent à l'opérateur `===`, car un `WeakSet` ne peut contenir que des objets et des symboles. Cela signifie que pour les objets, l'égalité est basée sur l'identité de l'objet. Ils sont comparés par [référence](/fr/docs/Glossary/Object_reference), et non par valeur.

## Constructeur

- {{JSxRef("WeakSet/WeakSet", "WeakSet()")}}
  - : Crée un nouvel objet `WeakSet`.

## Propriétés d'instance

Ces propriétés sont définies sur le `WeakSet.prototype` et partagées par toutes les instances de `WeakSet`.

- {{JSxRef("Object/constructor", "WeakSet.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `WeakSet`, la valeur initiale est le constructeur {{JSxRef("WeakSet/WeakSet", "WeakSet")}}.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"WeakSet"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes des instances

- {{JSxRef("WeakSet.prototype.add()")}}
  - : Ajoute `valeur` à l'ensemble `WeakSet`.
- {{JSxRef("WeakSet.prototype.delete()")}}
  - : Retire `valeur` de l'ensemble `WeakSet`. Suite à cette opération, `WeakSet.prototype.has(valeur)` retourne `false`.
- {{JSxRef("WeakSet.prototype.has()")}}
  - : Retourne un booléen indiquant si `valeur` est (ou non) au sein de l'ensemble `WeakSet`.

## Exemples

### Utiliser un objet `WeakSet`

```js
const ws = new WeakSet();
const toto = {};
const truc = {};

ws.add(toto);
ws.add(truc);

ws.has(toto); // true
ws.has(truc); // true

ws.delete(toto); // retire toto de l'ensemble
ws.has(toto); // false, toto a été enlevé
ws.has(truc); // toujours true
```

Notez que `toto !== truc`. Bien que ce soient des objets similaires, ce ne sont pas _**les mêmes objets**_. Aussi, les deux sont ajoutés à l'ensemble.

### Détecter les références circulaires

Les fonctions récursives doivent faire attention aux structures de données circulaires qu'elles consomment. Les objets `WeakSets` peuvent être utilisés pour ça&nbsp;:

```js
// Appeler un callback sur ce qui est stocké dans un objet
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // On évite une récursion infinie
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const toto = {
  toto: "Toto",
  truc: {
    truc: "Truc",
  },
};

toto.truc.machin = toto; // Référence circulaire !
execRecursively((obj) => console.log(obj), toto);
```

Ici, on a un objet `WeakSet` qui est créé lors de la première exécution et qui est passé ensuite à chaque appel qui suit (avec l'argument interne `_refs`).

Le nombre d'objets ou l'ordre de parcours n'a pas d'importance et un objet `WeakSet` est donc plus adapté (y compris en termes de performances) qu'un {{JSxRef("Set")}}, notamment si un grand nombre d'objets sont concernés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation (<i lang="en">polyfill</i> en anglais) pour `WeakSet` avec la bibliothèque `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/collections#h-weakset)
- L'objet natif {{JSxRef("Map")}}
- L'objet natif {{JSxRef("Set")}}
- L'objet natif {{JSxRef("WeakMap")}}
