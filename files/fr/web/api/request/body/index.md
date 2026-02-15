---
title: "Request : propriété body"
short-title: body
slug: Web/API/Request/body
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`body`** de l'interface {{DOMxRef("Request")}}
contient un {{DOMxRef("ReadableStream")}} avec le contenu du corps
qui a été ajouté à la requête. Notez qu'une requête utilisant la
méthode `GET` ou `HEAD` ne peut pas avoir de corps
et `null` est retourné dans ces cas.

## Valeur

Un objet {{DOMxRef("ReadableStream")}} ou {{JSxRef("Operators/null", "null")}}.

## Exemples

```js
const requete = new Request("/monPointDeTerminaison", {
  method: "POST",
  body: "Bonjour le monde",
});

requete.body; // ReadableStream
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Request.bodyUsed")}}
