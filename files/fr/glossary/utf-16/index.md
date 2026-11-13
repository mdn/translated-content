---
title: UTF-16
slug: Glossary/UTF-16
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

UTF-16 est une norme d'{{Glossary("character encoding", "encodage de caractères")}} pour {{Glossary("Unicode")}}. Elle encode chaque {{Glossary("code point", "point de code")}} Unicode en utilisant une ou deux {{Glossary("code unit", "unités de code")}}. Chaque unité de code est une valeur sur 16 bits.

Les points de code dont la valeur est inférieure à 2<sup>16</sup> sont encodés comme une seule unité de code, numériquement égale à la valeur du point de code. Ces points de code composent le [plan multilingue de base (BMP) <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>), et incluent les caractères les plus courants, dont le latin, le grec, le cyrillique et de nombreux caractères d'Asie de l'Est.

Par exemple, le caractère latin «&nbsp;A&nbsp;» se voit attribuer le point de code `U+0041` dans Unicode, et cela est représenté en UTF-16 comme l'unique unité de code `41`.

Les points de code dont la valeur est supérieure à 2<sup>16</sup> sont encodés à l'aide d'une paire d'unités de code, appelée _paire de substitution_. Les valeurs utilisées pour les paires de substitution ne sont pas utilisées pour les points de code Unicode, afin d'éviter toute ambiguïté.

Par exemple, le caractère emoji «&nbsp;🦊&nbsp;» (tête de renard) se voit attribuer le point de code `U+1F98A` dans Unicode, et cela est représenté en UTF-16 comme la paire de substitution `d83e dd8a`.

## Utiliser l'UTF-16 dans JavaScript

Les chaînes de caractères en JavaScript sont représentées en UTF-16, et de nombreuses API de {{JSxRef("String")}} opèrent sur les unités de code, et non sur les points de code. Par exemple, {{JSxRef("String.length")}} retourne `2` pour une chaîne contenant un seul caractère Unicode qui n'est pas dans le BMP&nbsp;:

```js
const string = "🦊"; // U+1F98A
console.log(string.length); // 2
```

La méthode {{JSxRef("String.charCodeAt()")}} retourne l'unité de code à l'indice donné, et la méthode {{JSxRef("String.codePointAt()")}} retourne le point de code à l'indice donné&nbsp;:

```js
const string = "🦊"; // U+1F98A

console.log(string.charCodeAt(0).toString(16)); // d83e
console.log(string.charCodeAt(1).toString(16)); // dd8a

console.log(string.codePointAt(0).toString(16)); // 1f98a
```

Voir [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_de_points_de_code_unicode_et_groupes_de_graphèmes) pour en savoir plus sur la gestion des chaînes UTF-16 en JavaScript.

## UTF-16 et UTF-8

{{Glossary("UTF-8")}} est un encodage alternatif pour Unicode, qui utilise de un à quatre octets pour chaque point de code Unicode. UTF-8 est un encodage bien plus courant pour les documents sur le Web que UTF-16.

## UTF-16 et UCS-2

UCS-2 est un encodage obsolète pour Unicode. Il est identique à UTF-16, sauf qu'il ne prend pas en charge les paires de substitution, et ne peut donc pas encoder les points de code en dehors du BMP.

## Voir aussi

- [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_de_points_de_code_unicode_et_groupes_de_graphèmes)
- {{Glossary("UTF-8")}}
- [UTF-16](https://fr.wikipedia.org/wiki/UTF-16) sur Wikipedia
