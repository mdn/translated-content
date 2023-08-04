---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
---

{{jsSidebar("Objects")}}

> **Attention :** Bien que `unescape(…)` ne soit pas strictement obsolète (au sens où elle n'a pas été retirée des standards), elle est définie au sein de [l'Annexe B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) du standard ECMA-262 qui commence par :
>
> > … L'ensemble des fonctionnalités et comportements définis dans cette annexe possède une ou plusieurs caractéristiques indésirables. En l'absence d'une utilisation historique, ces fonctionnalités seraient retirés de la spécification. …
> > … Les développeurs ne devraient pas utiliser ces fonctionnalités et comportements ou présupposer qu'elles existent lors de l'écriture de nouveau code ECMAScript. …

La fonction dépréciée **`unescape()`** calcule une nouvelle chaîne de caractères et remplace les séquences d'échappement hexadécimales par les caractères qu'elles représentent. Les séquences d'échappement peuvent provenir de la fonction {{jsxref("escape")}}. Cette méthode est obsolète, c'est pourquoi il est conseillé d'utiliser {{jsxref("decodeURI")}} ou {{jsxref("decodeURIComponent")}} à la place.

> **Note :** `unescape()` ne doit pas être utilisée pour décoder les URI. À la place, utilisez `decodeURI`.

## Syntaxe

```js
unescape(str);
```

### Paramètres

- `str`
  - : La chaîne de caractères à décoder.

### Valeur de retour

Une nouvelle chaîne de caractères dont les caractères ont été décodés.

## Description

La fonction `unescape` est une propriété de l'_objet global_.

## Exemples

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
