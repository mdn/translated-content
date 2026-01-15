---
title: Fence
slug: Web/API/Fence
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

L'interface **`Fence`** de l'{{domxref("Fenced Frame API", "API Fenced Frame", "", "nocode")}} contient plusieurs fonctions liées à la fonctionnalité des éléments HTML {{htmlelement("fencedframe")}}.

Les objets `Fence` sont accessibles via la propriété {{domxref("Window.fence")}}, mais ils ne sont disponibles que dans les documents intégrés dans des {{htmlelement("fencedframe")}} (chargés via des interfaces {{domxref("FencedFrameConfig")}}) ou des éléments HTML {{htmlelement("iframe")}} (chargés via des URN opaques).

> [!NOTE]
> Voir [Fonctionnement des `<fencedframe>`](/fr/docs/Web/API/Fenced_frame_API#index_fonctionnement_des_fencedframe) pour une description des `FencedFrameConfig` et des URN opaques.

{{InheritanceDiagram}}

## Méthodes d'instance

- {{domxref("Fence.getNestedConfigs", "getNestedConfigs()")}} {{Experimental_Inline}}
  - : Retourne les {{domxref("FencedFrameConfig")}} chargés dans les `<fencedframe>` imbriqués à l'intérieur du `<fencedframe>` courant.
- {{domxref("Fence.reportEvent", "reportEvent()")}} {{Experimental_Inline}}
  - : Déclenche l'envoi de données de rapport via un [beacon](/fr/docs/Web/API/Beacon_API) vers une ou plusieurs URL spécifiques enregistrées via la méthode {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} de l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr), dans le but de collecter les résultats d'enchères publicitaires.
- {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} {{Experimental_Inline}}
  - : Définit les données d'événement envoyées lorsqu'une navigation a lieu dans un `<fencedframe>`. Ces données sont envoyées via un beacon automatique vers une ou plusieurs URL spécifiques enregistrées via la méthode {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} de l'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr), afin de collecter les données de rapport pour les résultats d'enchères publicitaires.

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
