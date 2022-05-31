---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/String/valueOf
---
{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive de l'objet {{jsxref("String")}}.

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## Syntaxe

```js
str.valueOf()
```

### Valeur de retour

Une chaîne de caractères qui représente la valeur primitive d'un objet {{jsxref("String")}}.

## Description

La méthode `valueOf()` de `String` renvoie la valeur primitive de l'objet `String` sous la forme d'une chaine de caractères. Cette valeur est équivalente à {{jsxref("String.prototype.toString()")}}.

Cette méthode est généralement appelée en interne par JavaScript et non explicitement dans du code.

## Exemples

```js
var x = new String("Coucou monde");
console.log(x.valueOf()); // affiche "Coucou monde"
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.5.4.3', 'String.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.valueof', 'String.prototype.valueOf')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.valueof', 'String.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.valueOf")}}

## Voir aussi

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
