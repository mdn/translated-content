---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
---

{{jsSidebar("Objects")}}

> **Attention :** Bien que `escape(…)` ne soit pas strictement obsolète (au sens où elle n'a pas été retirée des standards), elle est définie au sein de [l'Annexe B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) du standard ECMA-262 qui commence par :
>
> > … L'ensemble des fonctionnalités et comportements définis dans cette annexe possède une ou plusieurs caractéristiques indésirables. En l'absence d'une utilisation historique, ces fonctionnalités seraient retirés de la spécification. …
> > … Les développeurs ne devraient pas utiliser ces fonctionnalités et comportements ou présupposer qu'elles existent lors de l'écriture de nouveau code ECMAScript. …

La fonction **`escape()`** permet de renvoyer une nouvelle chaîne de caractères dont certains caractères ont été remplacés par leur séquence d'échappement hexadécimale. Cette méthode est obsolète et il est donc conseillé d'utiliser {{jsxref("encodeURI")}} ou {{jsxref("encodeURIComponent")}} à la place.

> **Note :** Cette fonction pouvait être utilisée pour l'encodage de fragment de requêtes d'URL. Si on souhaite remplacer des caractères par leur séquence d'échappement correcte (avec `%20` par exemple), on pourra utiliser [`decodeURIComponent`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/decodeURIComponent).

## Syntaxe

```js
escape(str);
```

### Paramètres

- `str`
  - : Une chaîne de caractères à encoder.

### Valeur de retour

Une nouvelle chaîne de caractères dont certains caractères ont été échappés.

## Description

La fonction `escape` est une propriété de l'_objet global_. Les caractères spéciaux, sauf `@*_+-./`, seront encodés.

La forme hexadécimale des caractères dont la valeur du codet est inférieure à 0xFF sera représentée sur deux chiffres : %xx. Pour les caractères avec un code supérieur, quatre chiffres seront utilisés avec le format suivant %**u**xxxx.

## Exemples

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// caractères spéciaux
escape("@*_+-./"); // "@*_+-./"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
