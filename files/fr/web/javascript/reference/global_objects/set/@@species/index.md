---
title: get Set[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Set/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/@@species
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/@@species
---
{{JSRef}}

**`Set[@@species]`** renvoie le constructeur `Set`.

## Syntaxe

    Set[Symbol.species]

## Description

L'accesseur `species` renvoie le constructeur par défaut pour les objets `Set`. Les constructeurs pour les classes filles peuvent surcharger cette propriété afin de modifier le constructeur utilisé lors de l'affectation.

## Exemples

La propriété `species` renvoie la fonction utilisée comme constructeur par défaut, dans le cas des objets `Set`, c'est le constructeur `Set` :

```js
Set[Symbol.species]; // function Set()
```

Pour les objets dérivés (par exemple une classe `MonSet` que vous auriez construite), la propriété species pour `MonSet` sera le constructeur `MonSet`. Cependant, si vous souhaitez surcharger ce comportement afin de renvoyer le constructeur `Set` dans les méthodes des classes dérivées, vous pourrez utiliser :

```js
class MonSet extends Set
  // On surcharge la propriété species de MonSet
  // avec le constructeur Set de la classe parente
  static get [Symbol.species()]() { return Set;}
}
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-get-set-@@species', 'get Set [ @@species ]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-set-@@species', 'get Set [ @@species ]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.@@species")}}

## Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
