---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect/deleteProperty
---
{{JSRef}}

La méthode statique **`Reflect.deleteProperty()`** permet de supprimer des propriétés. Il agit comme l'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete).

{{EmbedInteractiveExample("pages/js/reflect-deleteproperty.html", "taller")}}

## Syntaxe

```js
Reflect.deleteProperty(cible, cléPropriété)
```

### Paramètres

- `cible`
  - : L'objet cible sur lequel on souhaite supprimer la propriété.
- `cléPropriété`
  - : Le nom de la propriété à supprimer.

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui indique si la suppression de la propriété s'est bien passée.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.deleteProperty` permet de supprimer une propriété d'un objet. Elle renvoie un {{jsxref("Boolean")}} qui indique si la propriété a été supprimée correctement. Cette méthode est très proche de l'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete).

## Exemples

```js
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
arr; // [1, 2, 3, , 5]

// Renvoie true si aucune propriété correspondante n'existe
Reflect.deleteProperty({}, "toto"); // true

// Renvoie false si une propriété n'est pas configurable
Reflect.deleteProperty(Object.freeze({toto: 1}),"toto"); // false
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-reflect.deleteproperty', 'Reflect.deleteProperty')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-reflect.deleteproperty', 'Reflect.deleteProperty')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Reflect.deleteProperty")}}

## Voir aussi

- {{jsxref("Reflect")}}
- [Opérateur `delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete)
