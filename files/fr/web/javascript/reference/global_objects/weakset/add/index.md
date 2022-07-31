---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakSet
translation_of: Web/JavaScript/Reference/Global_Objects/WeakSet/add
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakSet/add
---
{{JSRef}}

La méthode **`add()`** permet d'ajouter un nouvel objet à un objet `WeakSet`.

{{EmbedInteractiveExample("pages/js/weakset-prototype-add.html", "taller")}}

## Syntaxe

```js
ws.add(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. Il correspond à l'objet qu'on souhaite ajouter à l'ensemble `WeakSet`.

### Valeur de retour

L'objet {{jsxref("WeakSet")}}.

## Exemples

```js
var ws = new WeakSet();

ws.add(window); // on ajouter l'objet window à l'objet WeakSet

ws.has(window); // tru

// WeakSet ne peut contenir que des objets
ws.add(1);
// TypeError: Invalid value used in weak set -> Chrome
// TypeError: 1 is not a non-null obect -> Firefox
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-weakset.prototype.add', 'WeakSet.prototype.add')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-weakset.prototype.add', 'WeakSet.prototype.add')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakSet.add")}}

## Voir aussi

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
