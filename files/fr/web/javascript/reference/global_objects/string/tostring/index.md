---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/String/toString
---
{{JSRef}}

La méthode **`toString()`** renvoie une chaine de caractères représentant l'objet renseigné.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntaxe

    str.toString()

### Valeur de retour

Une chaîne de caractères représentant la chaîne appelante.

## Description

L'objet {{jsxref("String")}} surcharge la méthode `toString()` de l'objet {{jsxref("Object")}} ; il n'hérite pas de {{jsxref("Object.toString","Object.prototype.toString()")}}. Pour Les objets `String`, la méthode `toString()` renvoie une chaine de caractères représentant l'objet, et est similaire à la méthode {{jsxref("String.prototype.valueOf()")}}.

## Exemples

L'exemple suivant affiche la valeur textuelle d'un objet  {{jsxref("String")}} :

```js
var x = new String("coucou monde");
console.log(x.toString()); // affiche "coucou monde"
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                             | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.5.4.2', 'String.prototype.toString')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.tostring', 'String.prototype.toString')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.tostring', 'String.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.toString")}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
