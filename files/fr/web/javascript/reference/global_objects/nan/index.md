---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
tags:
  - JavaScript
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/NaN
original_slug: Web/JavaScript/Reference/Objets_globaux/NaN
---
{{jsSidebar("Objects")}}

La propriété globale **`NaN`** est une valeur utilisée pour représenter une quantité qui n'est pas un nombre (**N**ot **a** **N**umber en anglais).

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## Syntaxe

    NaN

## Description

`NaN` est une propriété de _l'objet global_, c'est-à-dire qu'elle est accessible globalement.

La valeur initiale de `NaN` est `Number.NaN`. Dans les navigateurs modernes, `NaN` est une propriété non-configurable et non-écrivable. Si ce n'est pas le cas, il faut éviter de la modifier et de l'écraser.

Il est rare d'utiliser expressément `NaN` dans un programme. On récupère généralement `NaN` comme le résultat d'une fonction mathématique qui échoue (`Math.sqrt(-1)`) où quand une fonction qui tente d'interpréter un nombre échoue (`parseInt("blabla")`).

### Tester `NaN`

Les [opérateurs d'égalité](/fr/docs/Web/JavaScript/Les_diff%C3%A9rents_tests_d_%C3%A9galit%C3%A9_comment_les_utiliser) (`==` et `===`) ne peuvent pas être utilisé pour tester une valeur par rapport à `NaN`. Il faut utiliser {{jsxref("Number.isNaN()")}} ou {{jsxref("isNaN", "isNaN()")}} à la place.

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
```

La différence entre `isNaN()` et `Number.isNaN()` est la façon dont les valeurs sont, ou non, converties en nombre avant de vérifier si la valeur est `NaN` : `isNaN()` convertira l'argument en nombre avant de vérifier alors que `Number.isNaN()` ne renverra `true` que si l'opérande vaut `NaN`.

```js
isNaN('coucou monde');        // renvoie true
Number.isNaN('coucou monde'); // renvoie false
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3 |
| {{SpecName('ES5.1', '#sec-15.1.1.1', 'NaN')}}                                                 | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-value-properties-of-the-global-object-nan', 'NaN')}}         | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-value-properties-of-the-global-object-nan', 'NaN')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.NaN")}}

## Voir aussi

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
- [L'égalité en JavaScript](/fr/docs/Web/JavaScript/Guide/%C3%89galit%C3%A9_en_JavaScript)
