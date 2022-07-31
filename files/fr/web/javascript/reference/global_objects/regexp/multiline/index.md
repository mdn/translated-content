---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/multiline
---
{{JSRef}}

La propriété **`multiline`** indique si le drapeau (_flag_) "`m`" a été utilisé ou non pour l'expression rationnelle. `multiline` est une propriété liée à l'instance, accessible en lecture seule.

{{EmbedInteractiveExample("pages/js/regexp-prototype-multiline.html", "taller")}}{{js_property_attributes(0,0,1)}}

## Description

La valeur de `multiline` est un booléen. Elle vaut `true` si le drapeau "`m`" a été utilisé et `false` sinon. Le flag "`m`" indique qu'une chaine de caractères qui s'étend sur plusieurs lignes doit être traitée comme une série de ligne. Ainsi, si "`m`" est utilisé, "`^`" et "`$`" ne correspondent plus au début et à la fin de la chaîne mais aux débuts et aux fins de chaque ligne de la chaîne.

Cette propriété ne peut pas être modifiée directement.

## Exemples

```js
var regex = new RegExp("toto", "m");

console.log(regex.multiline); // true
```

## Spécifications

| Spécification                                                                                                                | Statut                       | Commentaires                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. Avec JavaScript 1.5 : `multiline` est une propriété liée à l'instance de {{jsxref("RegExp")}} et non à l'objet `RegExp`. |
| {{SpecName('ES5.1', '#sec-15.10.7.4', 'RegExp.prototype.multiline')}}                                 | {{Spec2('ES5.1')}}     |                                                                                                                                                                                        |
| {{SpecName('ES6', '#sec-get-regexp.prototype.multiline', 'RegExp.prototype.multiline')}}         | {{Spec2('ES6')}}         | `multiline` est désormais un propriété du prototype sous forme d'accesseur plutôt qu'une propriété directement liée à l'instance.                                                      |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.multiline', 'RegExp.prototype.multiline')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                        |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.multiline")}}

## Notes de compatibilité

- Avant Firefox 48 , une propriété globale non-standard `RegExp.multiline` existait en plus de la propriété `RegExp.prototype.multiline`. Elle a été retirée dans les nouvelles versions du moteur (cf. {{bug(1219757)}}). On utilisera la propriété décrite sur cette page ou le [marqueur `m`](</fr/docs/Web/JavaScript/Guide/Expressions_régulières#Effectuer_des_recherches_avancées_en_utilisant_les_drapeaux_(flags)>) à la place.

## Voir aussi

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
