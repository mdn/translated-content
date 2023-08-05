---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

La méthode **`decodeURI()`** permet de décoder un Uniform Resource Identifier (URI) créé par la méthode {{jsxref("encodeURI","encodeURI()")}} ou une méthode similaire.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## Syntaxe

```js
decodeURI(encodedURI);
```

### Paramètres

- `encodedURI`
  - : Un URI complet, encodé.

### Valeur de retour

Une nouvelle chaîne de caractères dont certains caractères ont été décodés à partir de l'URI encodée passée en argument.

### Exceptions

Cette méthode lève une exception {{jsxref("URIError")}} ("_malformed URI sequence"_) lorsque la chaîne passée en argument contient des séquences de caractères invalides.

## Description

Cette méthode remplace chaque séquence d'échappement présente dans l'URI encodée avec le caractère correspondant. Les séquences d'échappement qui n'auraient pas pu être introduites par {{jsxref("encodeURI", "encodeURI()")}} ne seront pas décodées. Le caractère « `#` » n'est pas décodé au sein des séquences d'échappement.

## Exemples

### Décoder une URL cyrillique

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### Gérer les exceptions

```js
try {
  var a = decodeURI("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// Cela produira "URIError: malformed URI sequence"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("decodeURIComponent","decodeURIComponent()")}}
- {{jsxref("encodeURI","encodeURI()")}}
- {{jsxref("encodeURIComponent","encodeURIComponent()")}}
