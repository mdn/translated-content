---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
---

{{ ApiRef("HTML DOM") }}

`navigator.cookieEnabled` retourne une valeur booléenne qui indique si les cookies sont activés. Cette propriété est en lecture seule.

## Syntaxe

```js
var cookieEnabled = navigator.cookieEnabled;
```

- `cookieEnabled` est un [Boolean](/fr/docs/Glossary/Boolean): `true` ou `false`.

## Example

```js
if (!navigator.cookieEnabled) {
  // Ce navigateur ne supporte pas ou bloque les cookies.
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
