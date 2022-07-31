---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/add
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/add
---
{{JSRef}}

La méthode **`add()`** permet d'ajouter un nouvel élément ayant une valeur donnée à un ensemble `Set`. Cette valeur sera ajoutée à la fin de l'objet `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## Syntaxe

```js
monSet.add(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. La valeur de l'élément qu'on souhaite ajouter à l'objet `Set`.

### Valeur de retour

L'objet `Set` (ce qui permet de chaîner une suite d'instructions utilisant cette méthode).

## Exemples

```js
var monSet = new Set();

monSet.add(1);
monSet.add(5).add("du texte"); // ajouts en chaîne

console.log(monSet);
// Set [1, 5, "du texte"]
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.add', 'Set.prototype.add')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set.prototype.add', 'Set.prototype.add')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.add")}}

## Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
