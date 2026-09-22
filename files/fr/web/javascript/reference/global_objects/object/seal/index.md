---
title: "Object : méthode statique seal()"
short-title: seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.seal()`** _scelle_ un objet. Sceller un objet [empêche les extensions](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) et rend les propriétés existantes non-configurables. Un objet scellé a un ensemble de propriétés fixe&nbsp;: de nouvelles propriétés ne peuvent pas être ajoutées, les propriétés existantes ne peuvent pas être supprimées, leur énumérabilité et leur capacité à être configurées ne peuvent pas être modifiées, et son prototype ne peut pas être réassigné. Les valeurs des propriétés existantes peuvent toujours être modifiées tant qu'elles sont accessibles en écriture. `seal()` retourne le même objet qui a été passé en argument.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.seal()")}}

```js interactive-example
const object = {
  toto: 42,
};

Object.seal(object);
object.toto = 33;
console.log(object.toto);
// Résultat attendu : 33

delete object.toto; // Ne peut pas supprimer lorsque scellé
console.log(object.toto);
// Résultat attendu : 33
```

## Syntaxe

```js-nolint
Object.seal(obj)
```

### Paramètres

- obj
  - : L'objet qui doit être scellé.

### Valeur de retour

L'objet qui est scellé.

## Description

Sceller un objet équivaut à [empêcher les extensions](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) puis à modifier tous les [descripteurs de propriétés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) existants pour les rendre `configurable: false`. Cela a pour effet de fixer l'ensemble des propriétés de l'objet. Rendre toutes les propriétés non configurables empêche également leur conversion de propriétés de données en accesseurs et vice versa, mais n'empêche pas la modification des valeurs des propriétés de données. Toute tentative de suppression ou d'ajout de propriétés à un objet scellé, ou de conversion d'une propriété de données en accesseur ou vice versa, échoue, soit silencieusement, soit en lançant une exception {{JSxRef("TypeError")}} (le plus souvent, bien que pas exclusivement, en {{JSxRef("Strict_mode", "mode strict", "", 1)}}).

[Les éléments privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements) ne sont pas des propriétés et n'ont pas le concept de descripteurs de propriétés. Les éléments privés ne peuvent pas être ajoutés ou supprimés de l'objet, que l'objet soit scellé ou non.

La chaîne de prototypes reste intacte. Cependant, en raison de l'effet de [l'empêchement des extensions](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions), le `[[Prototype]]` ne peut pas être réassigné.

Contrairement à {{JSxRef("Object.freeze()")}}, les objets scellés avec `Object.seal()` peuvent voir leurs propriétés existantes modifiées, tant qu'elles sont modifiables.

## Exemples

### Utiliser `Object.seal()`

```js
const obj = {
  prop() {},
  toto: "truc",
};

// Les nouvelles propriétés peuvent être ajoutées, les propriétés
// existantes peuvent être modifiées ou supprimées.
obj.toto = "machin";
obj.blop = "blip";
delete obj.prop;

const o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// Changer les valeurs des propriétés d'un objet scellé
// fonctionne toujours.
obj.toto = "moh";

// Mais on ne peut pas convertir les propriétés de données en accesseurs,
// ou vice versa.
Object.defineProperty(obj, "toto", {
  get: function () {
    return "g";
  },
}); // lève une TypeError

// Maintenant toute modification, autre que celle des valeurs
// des propriétés, échoue.
obj.coincoin = "mon canard";
// n'ajoute pas la propriété de manière silencieuse
delete obj.toto;
// ne supprime pas la propriété de manière silencieuse

// … et en mode strict,
// cela lève une TypeError
function echec() {
  "use strict";
  delete obj.toto; // lève une TypeError
  obj.tutu = "arf"; // lève une TypeError
}
echec();

// Tente d'ajouter une propriété avec
// Object.defineProperty va aussi échouer.
Object.defineProperty(obj, "ohai", {
  value: 17,
}); // lève une TypeError
Object.defineProperty(obj, "toto", {
  value: "eit",
}); // change la valeur de la propriété existante
```

### Argument d'une valeur primitive

Dans ES5, si l'argument passé à cette méthode n'est pas un objet (un primitif), cela entraîne une exception {{JSxRef("TypeError")}}. Dans ES2015, elle retourne `false` sans aucune erreur si un argument non-objet est passé, puisque les primitifs sont, par définition, immuables.

```js
Object.seal(1);
// TypeError : 1 n'est pas un objet (code ES5)

Object.seal(1);
// 1                                (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.isSealed()")}}
- La méthode statique {{JSxRef("Object.preventExtensions()")}}
- La méthode statique {{JSxRef("Object.isExtensible()")}}
- La méthode statique {{JSxRef("Object.freeze()")}}
- La méthode statique {{JSxRef("Object.isFrozen()")}}
