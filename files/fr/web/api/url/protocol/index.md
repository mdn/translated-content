---
title: URL.protocol
slug: Web/API/URL/protocol
---

{{ApiRef("URL API")}}

La propriété **`protocol`** de l'interface {{domxref("URL")}} est une {{jsxref("String")}} représentant le schéma protocolaire de URL, incluant `':'` à la fin.

{{AvailableInWorkers}}

## Syntaxe

```js
string = object.protocol;
object.protocol = string;
```

### Valeur

Un {{jsxref("String")}}.

## Exemples

```js
var url = new URL("https://developer.mozilla.org/fr/docs/Web/API/URL/protocol");
var result = url.protocol; // Retourne:"https:"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("URL")}} dont il est contenu.
