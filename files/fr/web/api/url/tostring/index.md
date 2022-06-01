---
title: URL.toString()
slug: Web/API/URL/toString
tags:
  - API
  - Méthode
  - Reference
  - URL
  - toString()
translation_of: Web/API/URL/toString
---
{{ApiRef("URL API")}}

La méthode **`URL.toString()`** retourne un {{domxref("USVString")}} contenant tout l'URL. C'est en effet, une version de {{domxref("URL.href")}} en lecture seule.

{{AvailableInWorkers}}

## Syntaxe

    string = url.toString();

### Paramètres

Aucun.

### Valeur de retour

Un {{domxref("USVString")}}.

## Examples

```js
const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toString() // doit retourner l'URL en tant que chaîne
```

## Spécifications

| Spécification                                                                            | Statut               | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| {{SpecName('URL', '#URL-stringification-behavior', 'stringifier')}} | {{Spec2('URL')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.URL.toString")}}

## Voir aussi

- L'interface {{domxref("URL")}} à laquelle elle appartient.
