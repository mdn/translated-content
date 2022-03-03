---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakSet
translation_of: Web/JavaScript/Reference/Global_Objects/WeakSet/has
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakSet/has
---
{{JSRef}}

La méthode **`has()`** renvoie un booléen indiquant si un objet donné est contenu dans l'ensemble `WeakSet`.

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## Syntaxe

    ws.has(valeur);

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. Il représente l'objet dont on souhaite savoir s'il est, ou non, présent dans l'objet `WeakSet`.

### Valeur renvoyée

- Booléen
  - : La méthode renvoie `true` si l'objet `WeakSet` contient bien un élément avec la valeur donnée, `false` sinon.

## Exemples

```js
var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window);  // renvoie true
mySet.has(obj);     // renvoie false
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-weakset.prototype.has', 'WeakSet.prototype.has')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-weakset.prototype.has', 'WeakSet.prototype.has')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakSet.has")}}

## Voir aussi

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
