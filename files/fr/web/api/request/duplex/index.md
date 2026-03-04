---
title: "Request : propriété duplex"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 3a9a6f9dd92859dca2f928c59b34d9177adb9ae5
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

La propriété en lecture seule **`duplex`** de l'interface {{DOMxRef("Request")}} retourne le mode duplex de la requête, ce qui détermine si le navigateur doit envoyer la requête entière avant de traiter la réponse.

## Valeur

Une chaîne de caractères avec la valeur suivante&nbsp;:

- `"half"`
  - : Le navigateur doit envoyer la requête entière avant de traiter la réponse.

## Notes

Bien que `duplex` puisse être passé comme option lors de la construction d'une `Request`, il n'est pas actuellement exposé comme propriété accessible en lecture sur l'objet `Request` résultant dans tous les navigateurs.

## Exemples

### Vérifier le mode duplex d'une requête

```js
const flux = new ReadableStream({
  /* ... */
});
const requete = new Request("/upload", {
  method: "POST",
  body: flux,
  duplex: "half", // Requis pour les requêtes en flux
});

console.log(requete.duplex); // "half"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- Le constructeur {{DOMxRef("Request.Request", "Request()")}}
- [`RequestInit.duplex`](/fr/docs/Web/API/RequestInit#duplex) dans les options de requête
- [Consommer un fetch comme un flux](/fr/docs/Web/API/Streams_API/Using_readable_streams#consommer_une_récupération_sous_forme_de_flux)
