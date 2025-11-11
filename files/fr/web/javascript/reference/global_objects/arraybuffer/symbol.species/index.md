---
title: "ArrayBuffer : accesseur statique [Symbol.species]"
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur statique **`ArrayBuffer[Symbol.species]`** retourne le constructeur utilisé pour construire les valeurs de retour des méthodes du tableau de mémoire tampon.

> [!WARNING]
> L'existence de `[Symbol.species]` permet l'exécution de code arbitraire et peut créer des vulnérabilités de sécurité. Elle complique également certaines optimisations. Les responsables des moteurs [étudient la possibilité de supprimer cette fonctionnalité <sup>(angl.)</sup>](https://github.com/tc39/proposal-rm-builtin-subclassing). Évitez d'y recourir si possible.

## Syntaxe

```js-nolint
ArrayBuffer[Symbol.species]
```

### Valeur de retour

La valeur du constructeur (`this`) sur lequel `get [Symbol.species]` a été appelé. La valeur de retour est utilisée pour construire les valeurs de retour des méthodes du tableau de mémoire tampon qui créent de nouveaux tableaux de mémoire tampon.

## Description

La propriété d'accesseur `[Symbol.species]` retourne le constructeur par défaut pour les objets `ArrayBuffer`. Les constructeurs des sous-classes peuvent la redéfinir pour modifier l'affectation du constructeur. L'implémentation par défaut est essentiellement&nbsp;:

```js
// Implémentation sous-jacente hypothétique à titre d'illustration
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

En raison de cette implémentation polymorphe, `[Symbol.species]` des sous-classes dérivées retourne également, par défaut, le constructeur lui-même.

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

Lorsqu'on appelle des méthodes du tableau de mémoire tampon qui ne mutent pas l'objet existant mais retournent une nouvelle instance de tableau de mémoire tampon (par exemple, [`slice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)), le `constructor[Symbol.species]` de l'objet est accédé. Le constructeur retourné est utilisé pour construire la valeur de retour de la méthode.

## Exemples

### `Species` dans les objets ordinaires

La propriété `[Symbol.species]` retourne la fonction constructeur par défaut, qui est le constructeur `ArrayBuffer`.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### `Species` dans les objets dérivés

Dans une instance d'une sous-classe personnalisée de `ArrayBuffer`, comme `MyArrayBuffer`, le species de `MyArrayBuffer` est le constructeur `MyArrayBuffer`. Cependant, vous pouvez vouloir le redéfinir pour retourner des objets `ArrayBuffer` parents dans les méthodes de votre classe dérivée :

```js
class MyArrayBuffer extends ArrayBuffer {
  // Redéfinit le species de MyArrayBuffer vers le constructeur parent ArrayBuffer
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{JSxRef("ArrayBuffer")}}
- L'accesseur statique {{JSxRef("Symbol.species")}}
