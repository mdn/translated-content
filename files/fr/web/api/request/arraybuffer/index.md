---
title: "Request : méthode arrayBuffer()"
short-title: arrayBuffer()
slug: Web/API/Request/arrayBuffer
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`arrayBuffer()`** de l'interface {{DOMxRef("Request")}}
lit le corps de la requête et le retourne sous forme d'une promesse qui se résout avec un objet {{JSxRef("ArrayBuffer")}}.

## Syntaxe

```js-nolint
arrayBuffer()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse qui se résout avec un objet {{JSxRef("ArrayBuffer")}}.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la requête est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, parce que l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).
- {{JSxRef("RangeError")}}
  - : Levée s'il y a un problème lors de la création de l'`ArrayBuffer` associé (par exemple, si la taille des données est trop grande).

## Exemples

```js
const monTableau = new Uint8Array(10);

const requete = new Request("/monPointDeTerminaison", {
  method: "POST",
  body: monTableau,
});

requete.arrayBuffer().then((tampon) => {
  // faire quelque chose avec le tampon envoyé dans la requête
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Response.arrayBuffer()")}}
