---
title: "Response : méthode formData()"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`formData()`** de l'interface {{DOMxRef("Response")}} lit un flux de {{DOMxRef("Response" "réponse", "", 1)}} jusqu'à son terme. Elle retourne une promesse qui est résolue avec un objet {{DOMxRef("FormData")}}.

> [!NOTE]
> Ceci est principalement pertinent pour les [service workers](/fr/docs/Web/API/Service_Worker_API). Si un·e utilisateur·ice soumet un formulaire et qu'un service worker intercepte la requête, vous pouvez par exemple appeler `formData()` dessus pour obtenir une table clé-valeur, modifier certains champs, puis envoyer le formulaire au serveur (ou l'utiliser localement).

## Syntaxe

```js-nolint
formData()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un objet {{DOMxRef("FormData")}}.

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : La requête a été [annulée](/fr/docs/Web/API/Fetch_API/Using_Fetch#annuler_une_requête).
- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la réponse est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur est survenue lors du décodage du contenu du corps (par exemple parce que l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).
    - Le type {{Glossary("MIME")}} du corps ne peut pas être déterminé à partir des en‑têtes HTTP {{HTTPHeader("Content-Type")}} inclus dans la réponse, ou n'est pas `application/x-www-form-urlencoded` ni `multipart/form-data`.
    - Le corps ne peut pas être analysé en tant qu'objet `FormData`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
