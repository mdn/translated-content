---
title: URL.searchParams
slug: Web/API/URL/searchParams
---

{{APIRef("URL API")}} La propriété en lecture seule **`searchParams`** de l'interface {{domxref("URL")}} retourne un objet {{domxref("URLSearchParams")}} permettant d'accéder aux arguments décodés de la requête GET contenue dans l'URL.

{{AvailableInWorkers}}

## Syntaxe

```js
var urlSearchParams = URL.searchParams;
```

### Value

Un objet {{domxref("URLSearchParams")}}.

## Exemples

Si l'URL de votre page est `https://example.com/?nom=Jonathan%20Smith&age=18`
vous pouvez extraire les paramètres 'nom' et 'age' en utilisant:

```js
let params = new URL(document.location).searchParams;
let name = params.get("nom"); // la chaine de caractère "Jonathan Smith".
let age = parseInt(params.get("age")); // le nombre 18
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
