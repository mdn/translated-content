---
title: "Fence : méthode reportEvent()"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

La méthode **`reportEvent()`** de l'interface {{DOMxRef("Fence")}} déclenche l'envoi de données de rapport avec un [signal](/fr/docs/Web/API/Beacon_API) vers une ou plusieurs URL spécifiques enregistrées avec la méthode {{DOMxRef("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} de [l'API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr), dans le but de collecter les résultats d'enchères publicitaires.

> [!NOTE]
> {{DOMxRef("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} permet un envoi similaire de données de rapport, sauf que dans ce cas l'envoi est déclenché par une navigation plutôt que par un appel explicite de méthode.

## Syntaxe

```js-nolint
reportEvent(event)
```

### Paramètres

- `event`
  - : Un objet ou une chaîne de caractères représentant les données à envoyer.
    - Un objet définit un évènement de rapport spécifique à envoyer. Les propriétés requises sont&nbsp;:
      - `eventType`
        - : Chaîne de caractères représentant le type d'évènement à rapporter — par exemple, le nombre de clics sur une publicité. Cette chaîne de caractères peut être n'importe quel nom d'évènement pertinent (par exemple [`click`](/fr/docs/Web/API/Element/click_event)). Elle doit correspondre au type d'évènement défini dans l'appel associé à {{DOMxRef("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} dans un worklet de [l'API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr).
      - `eventData`
        - : Chaîne de caractères représentant les données à envoyer.
      - `destination`
        - : Tableau contenant une ou plusieurs valeurs énumérées représentant les types de destinataires. Ce sont les parties qui reçoivent les données à leurs URL enregistrées (avec {{DOMxRef("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). Valeurs possibles&nbsp;:
          - `"buyer"`&nbsp;: L'enchérisseur dans l'enchère publicitaire.
          - `"seller"`&nbsp;: Le vendeur principal qui gère l'enchère publicitaire.
          - `"component-seller"`&nbsp;: Le vendeur d'une enchère composant dans une enchère à plusieurs niveaux.
          - `"direct-seller"`&nbsp;: Le vendeur qui a directement géré l'enchère à laquelle l'acheteur a participé. Si la publicité est une enchère à un seul niveau, la valeur utilisée est `"seller"`. Si c'est une enchère à plusieurs niveaux, la valeur est `"component-seller"`.
          - `"shared-storage-select-url"`&nbsp;: Un emplacement de stockage de [l'API Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr), tel que défini dans un appel à la méthode {{DOMxRef("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}}.
    - Une chaîne de caractères représente un `eventType`, par exemple `"click"` (voir la définition précédente de `eventType`). Lorsqu'une chaîne de caractères est passée à `reportEvent()`, cela déclenche l'envoi de toutes les contributions Private Aggregation conditionnées à ce type d'évènement (par exemple avec {{DOMxRef("PrivateAggregation.contributeToHistogramOnEvent()")}}).

### Valeur de retour

Aucune (`undefined`).

## Exemples

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
