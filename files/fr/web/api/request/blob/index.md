---
title: "Request : méthode blob()"
short-title: blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`blob()`** de l'interface {{DOMxRef("Request")}}
lit le corps de la requête et le retourne sous forme d'une promesse qui se résout avec un {{DOMxRef("Blob")}}.

## Syntaxe

```js-nolint
blob()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse qui se résout avec un {{DOMxRef("Blob")}} dont les données sont les octets du corps et le type MIME est la valeur de l'en-tête `Content-Type` de la requête.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la requête est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, parce que l'en-tête HTML {{HTTPHeader("Content-Encoding")}} est incorrect).

## Exemples

```js
const objet = { hello: "world" };
const monBlob = new Blob([JSON.stringify(objet, null, 2)], {
  type: "application/json",
});

const requete = new Request("/monPointDeTerminaison", {
  method: "POST",
  body: monBlob,
});

requete.blob().then((monBlob) => {
  // faire quelque chose avec le blob envoyé dans la requête
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Response.blob()")}}
