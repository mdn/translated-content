---
title: URL.hash
slug: Web/API/URL/hash
tags:
  - API
  - Hash
  - Propriété
  - Reference
  - URL
translation_of: Web/API/URL/hash
---

{{ APIRef("URL API") }}

La propriété **`hash`** de l'interface {{domxref("URL")}} retourne un {{domxref("USVString")}} contenant le caractère `'#'` suivi par l'identificateur de fragment de URL.

Le fragment n'est pas [décodé en pourcent](/fr/docs/Glossary/percent-encoding). Si l'URL ne contient pas d'identificateur de fragment, la valeur de cette propriété est une chaîne de caractère vide — `""`.

{{AvailableInWorkers}}

## Syntaxe

```js
string = object.hash;
object.hash = string;
```

### Valeur

Un {{domxref("USVString")}}.

## Exemples

```html
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
url.hash // Returns '#Examples'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("URL")}} dont il est contenu.
