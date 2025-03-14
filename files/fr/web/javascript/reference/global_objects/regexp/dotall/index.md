---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
---

{{JSRef}}

La propriété **`dotAll`** indique si le marqueur "`s`" est utilisé pour l'expression rationnelle. `dotAll` est une propriété en lecture seule et qui renseigne à propos de l'expression rationnelle courante.

{{JS_Property_Attributes(0, 0, 1)}}

## Description

`dotAll` est un booléen qui vaut `true` si le marqueur "`s`" a été utilisé pour l'expression et `false` sinon. Le marqueur "`s`" indique que le caractère spécial point ("`.`") doit également correspondre aux caractères de saut de ligne (et pour lesquels il ne correspondrait pas s'il n'était pas activé) :

- U+000A LINE FEED (LF) ("`\n`")
- U+000D CARRIAGE RETURN (CR) ("`\r`")
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Cela signifie ainsi que le point peut correspondre à n'importe quel caractère du plan multilingue de base Unicode (ou _Basic Multilingual Plane_ (BMP)). Si on souhaite également cibler les caractères des plans astraux, il faudra utiliser le marqueur "`u`" (unicode). En utilisant les deux marqueurs simultanément, on peut alors cibler n'importe quel caractère Unicode.

Cette propriété est uniquement accessible en lecture et ne peut pas être modifiée.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
