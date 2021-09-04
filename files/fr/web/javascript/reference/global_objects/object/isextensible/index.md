---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/isExtensible
---
{{JSRef}}

La méthode **`Object.isExtensible()`** permet de déterminer si un objet est extensible (c'est-à-dire qu'on peut lui ajouter de nouvelles propriétés).

{{EmbedInteractiveExample("pages/js/object-isextensible.html")}}

## Syntaxe

    Object.isExtensible(obj)

### Paramètres

- `obj`
  - : L'objet dont on souhaite vérifier s'il est extensible.

### Valeur de retour

Un booléen qui indique si oui ou non l'objet passé en argument peut être étendu.

## Description

Par défaut, les objets sont extensibles, on peut leur ajouter de nouvelles propriétés (et pour les moteurs qui supportent {{jsxref("Object.proto", "__proto__")}} {{deprecated_inline}}, leur propriété \_\_proto\_\_ peut être modifiée). Un objet peut devenir non-extensible en utilisant les méthodes {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, ou {{jsxref("Object.freeze()")}}.

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

| Spécification                                                                                        | État                         | Commentaires                                            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.13', 'Object.isExtensible')}}                 | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.isextensible', 'Object.isExtensible')}}         | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-object.isextensible', 'Object.isExtensible')}} | {{Spec2('ESDraft')}} |                                                         |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.isExtensible")}}

## Voir aussi

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
