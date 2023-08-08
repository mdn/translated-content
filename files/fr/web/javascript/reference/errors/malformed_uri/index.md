---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
---

{{jsSidebar("Errors")}}

## Message

```
URIError: The URI to be encoded contains invalid character (Edge)
URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
```

## Type d'erreur

{{jsxref("URIError")}}

## Quel est le problème ?

Il y a eu une erreur lors de l'encodage ou du décodage de l'URI. Un argument fourni à {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}} ou à {{jsxref("decodeURIComponent")}} n'était pas valide et la fonction concernée n'a pas pu encoder ou décoder la valeur correctement.

## Exemples

### Encodage

L'encodage permet de remplacer certains caractères par une, deux, trois voire quatre séquences d'échappement qui représente l'encodage UTF-8 du caractère. Une exception {{jsxref("URIError")}} sera levée si on tente d'encoder un caractère _surrogate_ qui ne fait pas partie d'une paire de codets :

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

En revanche, si on dispose de la paire de codets :

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### Décodage

Le décodage permet de remplacer chaque séquence d'échappement dans le composant encodé par le caractère qu'elle représente. S'il n'existe aucun caractère correspondant, une exception sera déclenchée :

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

Avec la valeur d'entrée correcte, on a généralement quelque chose qui ressemble à :

```js example-good
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## Voir aussi

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
