---
title: URLSearchParams.entries()
slug: Web/API/URLSearchParams/entries
---

{{APIRef("URL API")}}{{SeeCompatTable}}

La méthode **`URLSearchParams.entries()`** retourne un itérateur( {{jsxref("Iteration_protocols",'iterator')}}) permettant de parcourir les paires de clé/valeur contenues dans cet objet. La clé et la valeur de chaque paire est un objet {{domxref("USVString")}} .

> [!NOTE]
> This method is available in [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
searchParams.entries();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the key/value pairs
for (var pair of searchParams.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
```

The result is:

```
key1, value1
key2, value2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Other URL-related interfaces: {{domxref("URL")}}, {{domxref("URLUtils")}}.
