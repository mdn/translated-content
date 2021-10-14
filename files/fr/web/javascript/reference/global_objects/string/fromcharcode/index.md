---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
tags:
  - JavaScript
  - Méthode
  - Reference
  - String
  - UTF-16
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
original_slug: Web/JavaScript/Reference/Objets_globaux/String/fromCharCode
---
{{JSRef}}

La méthode statique **`String.fromCharCode()`** renvoie une chaîne de caractères créée à partir de points de code UTF-16.

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html")}}

## Syntaxe

    String.fromCharCode(num1, ..., numN)

### Paramètres

- `num1, ..., numN`
  - : Une séquence de nombres représentant des points de code UTF-16 entre 0 et 65535 (`0xFFFF`). Les nombres supérieurs à `0xFFFF` sont tronqués.

### Valeur de retour

Une chaîne de caractères qui contient les caractères correspondants à la série de points de code UTF-16.

## Description

Cette méthode renvoie une chaîne de caractère et non un objet {{jsxref("String")}}.

La méthode `fromCharCode()` étant une méthode statique de l'objet `String`, elle doit toujours être utilisée avec la syntaxe `String.fromCharCode()` plutôt qu'en appelant la méthode à partir d'un objet `String` construit sur mesure.

## Exemples

Pour les caractères du plan multilingue de base, UTF-16 utilise une seule unité de code :

```js
String.fromCharCode(65,66,67); // ABC
String.fromCharCode(0x2014);   // "—"
String.fromCharCode(0x12014);  // "—" également, le 1 a été tronqué
String.fromCharCode(8212);     // renvoie également "—" car 8212
                               // est la forme décimale
```

Les caractères hors de ce plan utilisent deux unités de code (on parle de _surrogate pair_) :

```js
String.fromCharCode(0xD83C, 0xDF03); // Point de code U+1F303 pour l'émoji nuit étoilée

// Forme décimale équivalente :
String.fromCharCode(55356, 57091);

String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07);
// "\uD834\uDF06a\uD834\uDF07"
```

## Utiliser des valeurs Unicode plus grandes

En UTF-16, les caractères les plus communs sont représentables sur une seule valeur de 16 bits. Toutefois, cet ensemble de caractères (aussi appelé plan multilingue de base ou BMP en anglais) ne représente qu'1/17e de l'espace total représenté par les caractères Unicode. Le reste des points de code, sur l'intervalle 65536 (0x010000) à 1114111 (0x10FFFF) sont des caractères additionnels qui sont représentés par deux valeurs sur 16 bits qu'on appelle _surrogate pairs_ en anglais.

La méthode `fromCharCode()` ne fonctionne qu'avec des valeurs sur 16 bits et il faudra donc fournir une paire de codets pour obtenir certains caractères. Ainsi, `String.fromCharCode(0xD83C, 0xDF03)` renvoie le point de code U+1F303 qui représente l'émoji « nuit étoilée ».

Bien qu'il y ait une relation mathématique entre la valeur composée et les deux codets qui forment la paire, on a besoin d'une étape supplémentaire à chaque fois. Aussi, il sera plus pratique d'utiliser {{jsxref("String.fromCodePoint()")}} (ES2015 / ES6) qui permet de manipuler les codes des caractères hors BMP : on pourra ainsi écrire `String.fromCodePoint(0x1F303)` pour renvoyer le caractère U+1F303 (émoji « nuit étoilée »).

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.3.2', 'StringfromCharCode')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.fromcharcodes', 'String.fromCharCode')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.fromcharcodes', 'String.fromCharCode')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.fromCharCode")}}

## Voir aussi

- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
