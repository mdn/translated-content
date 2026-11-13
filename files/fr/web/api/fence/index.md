---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: 3a839eeed13a60d34db1d39a5ce1594050d56ab0
---

{{APIRef("Fenced Frame API")}}

L'interface **`Fence`** de {{DOMxRef("Fenced Frame API", "l'API Fenced Frame", "", "nocode")}} contient plusieurs fonctions liées à la fonctionnalité des éléments HTML {{HTMLElement("fencedframe")}}.

Les objets `Fence` sont accessibles avec la propriété {{DOMxRef("Window.fence")}}, mais ils ne sont disponibles que dans les documents intégrés dans des {{HTMLElement("fencedframe")}} (chargés avec des interfaces {{DOMxRef("FencedFrameConfig")}}) ou des éléments HTML {{HTMLElement("iframe")}} (chargés avec des URN opaques).

> [!NOTE]
> Voir [Fonctionnement des `<fencedframe>`](/fr/docs/Web/API/Fenced_frame_API#index_fonctionnement_des_fencedframe) pour une description des `FencedFrameConfig` et des URN opaques.

{{InheritanceDiagram}}

## Méthodes d'instance

- {{DOMxRef("Fence.getNestedConfigs", "getNestedConfigs()")}} {{Deprecated_Inline}}
  - : Retourne les {{DOMxRef("FencedFrameConfig")}} chargés dans les `<fencedframe>` imbriqués à l'intérieur du `<fencedframe>` courant.
- {{DOMxRef("Fence.reportEvent", "reportEvent()")}} {{Deprecated_Inline}}
  - : Déclenche l'envoi de données de rapport avec un [signal](/fr/docs/Web/API/Beacon_API) vers une ou plusieurs URL spécifiques enregistrées avec la méthode `registerAdBeacon()` de [l'API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr), dans le but de collecter les résultats d'enchères publicitaires.
- {{DOMxRef("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} {{Deprecated_Inline}}
  - : Définit les données d'évènement envoyées lorsqu'une navigation a lieu dans un `<fencedframe>`. Ces données sont envoyées avec un signal automatique vers une ou plusieurs URL spécifiques enregistrées avec la méthode `registerAdBeacon()` de [l'API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr), afin de collecter les données de rapport pour les résultats d'enchères publicitaires.

## Exemples

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["acheteur", "vendeur"],
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
