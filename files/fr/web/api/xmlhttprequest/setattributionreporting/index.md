---
title: "XMLHttpRequest : méthode setAttributionReporting()"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Attribution Reporting API")}}{{SecureContext_Header}}{{Non-standard_Header}}

La méthode **`setAttributionReporting()`** de l'interface {{DOMxRef("XMLHttpRequest")}} indique que vous souhaitez que la réponse de la requête puisse enregistrer une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#évènements_de_sources_basés_sur_javascript) ou un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#déclencheurs_dattribution_basés_sur_javascript) basé sur JavaScript.

Voir [l'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

## Syntaxe

```js-nolint
setAttributionReporting(options)
```

### Paramètres

- `options`
  - : Un objet fournissant des options de rapport d'attribution, qui comprend les propriétés suivantes&nbsp;:
    - `eventSourceEligible`
      - : Un booléen. Si défini sur `true`, la réponse de la requête est éligible pour enregistrer une source d'attribution. Si défini sur `false`, elle ne l'est pas.
    - `triggerEligible`
      - : Un booléen. Si défini sur `true`, la réponse de la requête est éligible pour enregistrer un déclencheur d'attribution. Si défini sur `false`, elle ne l'est pas.

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'objet {{DOMxRef("XMLHttpRequest")}} associé n'a pas encore été {{DOMxRef("XMLHttpRequest.open", "ouvert", "", "nocode")}}, ou a déjà été {{DOMxRef("XMLHttpRequest.send", "envoyé", "", "nocode")}}.
- `TypeError` {{DOMxRef("DOMException")}}
  - : Levée si l'utilisation de [l'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) est bloquée par un en-tête {{HTTPHeader("Permissions-Policy")}} [`attribution-reporting`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting).

## Exemples

```js
const rapportAttribution = {
  eventSourceEligible: true,
  triggerEligible: false,
};

function declencherSourceInteraction() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://shop.example/endpoint");
  // Vérifie la disponibilité de setAttributionReporting() avant de l'appeler
  if (typeof req.setAttributionReporting === "function") {
    req.setAttributionReporting(rapportAttribution);
    req.send();
  } else {
    throw new Error("Attribution reporting not available");
    // Inclut le code de récupération ici si nécessaire
  }
}

// Associe le déclencheur d'interaction avec l'élément
// et l'évènement qui ont du sens pour votre code
elem.addEventListener("click", declencherSourceInteraction);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API)
