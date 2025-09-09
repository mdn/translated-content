---
title: Codet (code unit)
slug: Glossary/Code_unit
l10n:
  sourceCommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{GlossarySidebar}}

Un **codet** (<i lang="en">code unit</i> en anglais) correspond au composant élémentaire utilisé par un système d'encodage des caractères (comme UTF-8 ou UTF-16). Un système d'encodage des caractères utilise un ou plusieurs codets pour encoder un [point de code](/fr/docs/Glossary/Code_point) Unicode.

En UTF-16 (le système d'encodage utilisé pour les chaînes de caractères en JavaScript), les codets sont des valeurs sur 16 bits. Cela signifie que les opérations pour manipuler les index ou obtenir la longueur d'une chaîne de caractères manipulent ces codets de 16 bits. Toutefois, ces unités ne correspondent pas toujours exactement à ce que nous interprétons comme étant des caractères.

Par exemple, certains caractères avec des diacritiques comme des accents peuvent être représentés en UTF-16 à l'aide de deux codets&nbsp;:

```js
const maChaine = "\u006E\u0303";
console.log(maChaine); // ñ
console.log(maChaine.length); // 2
```

De plus, 16 bits ne suffisent pas à exprimer tous les points de code définis par Unicode. De nombreux points de code Unicode sont encodés à l'aide d'une paire de deux codets UTF-16 (parfois appelés demi-codets ou <i lang="en">surrogate pair</i> en anglais)&nbsp;:

```js
const visage = "🥵";
console.log(visage.length); // 2
```

La méthode JavaScript [`codePointAt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) de l'objet [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) permet de récupérer les codets Unicode à partir de la forme encodée&nbsp;:

```js
const visage = "🥵";
console.log(visage.codePointAt(0)); // 129397 soit 0x1F975 en hexadécimal
```

## Voir aussi

- [Gestion des caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes)
- [La FAQ sur l'encodage Unicode (en anglais)](https://www.unicode.org/faq/utf_bom.html)
