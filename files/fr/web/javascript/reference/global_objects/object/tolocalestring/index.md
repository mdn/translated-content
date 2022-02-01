---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/toLocaleString
---
{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaine de caractères représentant l'objet. Cette méthode est destinée à être surchargée par les objets dérivés à des fins spécifiques pour prendre en compte les locales.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Syntaxe

    obj.toLocaleString()

### Valeur de retour

Une chaîne de caractères qui représente l'objet en tenant compte de la locale.

## Description

La méthode `toLocaleString` renvoie le résultat de l'appel à la méthode {{jsxref("Object.toString", "toString()")}}.

Cette fonction est destinée à fournir aux objets une méthode générique `toLocaleString`, même si tous ne peuvent l'utiliser. Voir la liste ci-dessous.

### Objets surchargeant la méthode toLocaleString

- {{jsxref("Array")}} : {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}} : {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}} : {{jsxref("Date.prototype.toLocaleString()")}}

## Spécifications

| Spécification                                                                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.2.4.3', 'Object.prototype.toLocaleString')}}                                     | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-object.prototype.tolocalestring', 'Object.prototype.toLocaleString')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-object.prototype.tolocalestring', 'Object.prototype.toLocaleString')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.toLocaleString")}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
