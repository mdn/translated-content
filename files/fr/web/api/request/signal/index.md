---
title: "Request : propriété signal"
short-title: signal
slug: Web/API/Request/signal
l10n:
  sourceCommit: 242b21a3650efeec0d5d2c74cbd171891748c115
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`signal`** de l'interface {{DOMxRef("Request")}} retourne l'objet {{DOMxRef("AbortSignal")}} associé à la requête.

## Valeur

Un objet {{DOMxRef("AbortSignal")}}.

## Exemples

```js
// Créer un nouveau contrôleur d'annulation
const controleur = new AbortController();

// Créer une requête avec l'objet AbortSignal de ce contrôleur
const requete = new Request("/", { signal: controleur.signal });

// Ajouter un gestionnaire d'évènement qui affiche un message en cas d'annulation
requete.signal.addEventListener("abort", () => {
  console.log("annulation");
});

// En cas d'annulation, afficher la raison de l'AbortSignal, si elle existe
fetch(requete).catch(() => {
  if (requete.signal.aborted) {
    if (requete.signal.reason) {
      console.log(`Requête annulée avec la raison : ${requete.signal.reason}`);
    } else {
      console.log("Requête annulée mais aucune raison n'a été fournie.");
    }
  } else {
    console.log("Requête terminée de façon anormale, sans annulation.");
  }
});

// Annuler effectivement la requête
controleur.abort();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
