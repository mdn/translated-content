---
title: "Fence : méthode setReportEventDataForAutomaticBeacons()"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

La méthode **`setReportEventDataForAutomaticBeacons()`** de l'interface {{DOMxRef("Fence")}} définit les données d'évènement qui sont envoyées lorsqu'une navigation a lieu dans un élément HTML {{HTMLElement("fencedframe")}}. Ces données sont envoyées avec un [signal](/fr/docs/Web/API/Beacon_API) automatique vers une ou plusieurs URL spécifiques enregistrées avec la méthode {{DOMxRef("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} de [l'API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr), afin de collecter les données de rapport pour les résultats d'enchères publicitaires.

> [!NOTE]
> {{DOMxRef("Fence.reportEvent", "reportEvent()")}} permet un envoi similaire de données de rapport, sauf que dans ce cas l'envoi est déclenché par un appel explicite de méthode plutôt que par une navigation.

## Syntaxe

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Paramètres

- `event`
  - : Un objet représentant les données à envoyer. Les propriétés possibles sont&nbsp;:
    - `eventType`
      - : Chaîne de caractères représentant le type d'évènement à rapporter. Les valeurs disponibles sont&nbsp;:
        - `reserved.top_navigation_start`&nbsp;: Un évènement déclenché au début d'une navigation de niveau supérieur.
        - `reserved.top_navigation_commit`&nbsp;: Un évènement déclenché à la fin d'une navigation de niveau supérieur.
    - `eventData`
      - : Chaîne de caractères représentant les données à envoyer.
    - `destination`
      - : Tableau contenant une ou plusieurs valeurs énumérées représentant les types de destinataires. Ce sont les parties qui reçoivent les données à leurs URL enregistrées (avec {{DOMxRef("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). Valeurs possibles&nbsp;:
        - `"buyer"`&nbsp;: L'enchérisseur dans l'enchère publicitaire.
        - `"seller"`&nbsp;: Le vendeur principal qui gère l'enchère publicitaire.
        - `"component-seller"`&nbsp;: Le vendeur d'une enchère composant dans une enchère à plusieurs niveaux.
        - `"direct-seller"`&nbsp;: Le vendeur qui a directement géré l'enchère à laquelle l'acheteur a participé. Si la publicité est une enchère à un seul niveau, la valeur utilisée est `"seller"`. Si c'est une enchère à plusieurs niveaux, la valeur est `"component-seller"`.
        - `"shared-storage-select-url"`&nbsp;: Un emplacement de stockage de [l'API Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr), tel que défini dans un appel à la méthode {{DOMxRef("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}}.
    - `once` {{Optional_Inline}}
      - : Booléen. Si défini à `true`, le signal automatique n'est envoyé que pour le prochain évènement, et aucun signal n'est envoyé pour les évènements suivants tant que `setReportEventDataForAutomaticBeacons()` n'est pas invoqué à nouveau. Par exemple, utilisé avec un gestionnaire de clic, cela permet d'envoyer des données de signal uniquement pour certaines navigations de niveau supérieur, et non pour toutes. Cette propriété vaut `false` par défaut.

### Valeur de retour

Aucune (`undefined`).

## Exemples

```js
window.fence.setReportEventDataForAutomaticBeacons({
  eventType: "reserved.top_navigation_start",
  eventData: "une chaîne d'exemple",
  destination: ["seller", "buyer"],
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
