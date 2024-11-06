---
title: URL.toString()
slug: Web/API/URL/toString
---

{{ApiRef("URL API")}}

La méthode **`URL.toString()`** retourne un {{domxref("USVString")}} contenant tout l'URL. C'est en effet, une version de {{domxref("URL.href")}} en lecture seule.

{{AvailableInWorkers}}

## Syntaxe

```js
string = url.toString();
```

### Paramètres

Aucun.

### Valeur de retour

Un {{domxref("USVString")}}.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/fr/docs/Web/API/URL/toString",
);
url.toString(); // doit retourner l'URL en tant que chaîne
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("URL")}} à laquelle elle appartient.
