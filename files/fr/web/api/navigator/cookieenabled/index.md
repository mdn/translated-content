---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
translation_of: Web/API/Navigator/cookieEnabled
---
{{ ApiRef("HTML DOM") }}

`navigator.cookieEnabled` retourne une valeur booléenne qui indique si les cookies sont activés. Cette propriété est en lecture seule.

## Syntax

```js
var cookieEnabled = navigator.cookieEnabled;
```

- `cookieEnabled` est un [Boolean](/en-US/docs/Glossary/Boolean): `true` ou `false`.

## Example

```js
if (!navigator.cookieEnabled) {
  // Ce navigateur ne supporte pas ou bloque les cookies.
}
```

## Spécifications

| Specification                                                                                                                            | Status                           | Comment             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "webappapis.html#dom-navigator-cookieenabled", "Navigator.cookieEnabled")}} | {{Spec2("HTML WHATWG")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Navigator.cookieEnabled")}}
