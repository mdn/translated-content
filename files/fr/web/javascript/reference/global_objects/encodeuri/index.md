---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
tags:
  - JavaScript
  - Reference
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
original_slug: Web/JavaScript/Reference/Objets_globaux/encodeURI
---
{{jsSidebar("Objects")}}

La fonction **`encodeURI()`** encode un Uniform Resource Identifier (URI) en remplaçant chaque exemplaire de certains caractères par une, deux, trois ou quatre séquences d'échappement représentant le caractère encodé en UTF-8 (les quatre séquences d'échappement ne seront utilisées que si le caractère est composé de deux caractères « _surrogate_ »).

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

## Syntaxe

    encodeURI(URI)

### Paramètres

- `URI`
  - : Un Uniform Resource Identifier complet.

### Valeur de retour

Une nouvelle chaîne de caractères représentant un URI, encodé, à partir de la chaîne de caractères passée en argument.

## Description

`encodeURI()` échappe tous les caractères sauf ceux-ci :

    A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #

`encodeURI()` est différente de {{jsxref("encodeURIComponent")}}. Par exemple :

```js
var set1 = ";,/?:@&=+$#";  // Caractères réservés
var set2 = "-_.!~*'()";   // Caractères non-réservés
var set3 = "ABC abc 123"; // Caractères alphanumériques et espace

console.log(encodeURI(set1)); // ;,/?:@&=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (l'espace est encodé en %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (l'espace est encodé en %20)
```

Une exception {{jsxref("URIError")}} sera levée si on tente d'encoder un caractère *surrogate* (demi-codet) qui ne fait pas partie d'une paire :

```js
// On a une paire de codets surrogate
console.log(encodeURI('\uD800\uDFFF'));

// Ici, seul le caractère "haut"
// ce qui déclenche une "URIError: malformed URI sequence"
console.log(encodeURI('\uD800'));

// Ici, seul le caractère "bas"
// ce qui déclenche une "URIError: malformed URI sequence"
console.log(encodeURI('\uDFFF'));
```

`encodeURI()` ne permet pas de former des requêtes HTTP GET ou POST (par exemple avec {{domxref("XMLHTTPRequest")}}) car "&", "+" et "=" ne sont pas encodés et sont traités comme des caractères spéciaux (toutefois, la méthode. {{jsxref("encodeURIComponent")}} pourra être utilisée pour encoder ces caractères).

Si on souhaite suivre la [RFC3986](http://tools.ietf.org/html/rfc3986) qui concerne les URL et qui rend les crochets réservés (pour IPv6) (il ne faut donc plus encoder ces caractères lorsqu'ils font partie d'une URL (notamment pour la partie représentant l'hôte), on pourra utiliser le fragment de code suivant :

```js
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-encodeuri-uri', 'encodeURI')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES6', '#sec-encodeuri-uri', 'encodeURI')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ES5.1', '#sec-15.1.3.3', 'encodeURI')}}         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES3')}}                                                     | {{Spec2('ES3')}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.encodeURI")}}

## Voir aussi

- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
