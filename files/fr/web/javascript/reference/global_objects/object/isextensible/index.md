---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

{{JSRef}}

La méthode **`Object.isExtensible()`** permet de déterminer si un objet est extensible (c'est-à-dire qu'on peut lui ajouter de nouvelles propriétés).

{{EmbedInteractiveExample("pages/js/object-isextensible.html")}}

## Syntaxe

```js
Object.isExtensible(obj);
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite vérifier s'il est extensible.

### Valeur de retour

Un booléen qui indique si oui ou non l'objet passé en argument peut être étendu.

## Description

Par défaut, les objets sont extensibles, on peut leur ajouter de nouvelles propriétés (et pour les moteurs qui supportent [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}, leur propriété \_\_proto\_\_ peut être modifiée). Un objet peut devenir non-extensible en utilisant les méthodes {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, ou {{jsxref("Object.freeze()")}}.

## Exemples

```js
// Les nouveaux objets sont extensibles.
var vide = {};
Object.isExtensible(vide); // true

// ...mais on peut les rendre non-extensibles.
Object.preventExtensions(vide);
Object.isExtensible(vide); // false

// Les objets scellés sont, par définition, non-extensibles.
var scellé = Object.seal({});
Object.isExtensible(scellé); // false

// Les objets gelés sont également, par définition, non-extensibles.
var gelé = Object.freeze({});
Object.isExtensible(gelé); // false
```

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet mais une valeur d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, un argument qui n'est pas un objet sera traité comme un objet ordinaire non-extensible, la méthode renverra `false`.

```js
Object.isExtensible(1);
// TypeError: 1 n'est pas un objet (code ES5)

Object.isExtensible(1);
// false                           (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
