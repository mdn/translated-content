---
title: "Window : propriété fence"
short-title: fence
slug: Web/API/Window/fence
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

La propriété en lecture seule `fence` de l'interface {{domxref("Window")}} retourne une instance d'objet {{domxref("Fence")}} pour le contexte du document courant.

Les objets `Fence` ne sont disponibles que dans les documents intégrés dans des éléments HTML {{htmlelement("fencedframe")}} (chargés via des {{domxref("FencedFrameConfig")}}) ou des éléments HTML {{htmlelement("iframe")}} (chargés via des URN opaques).

> [!NOTE]
> Voir [Fonctionnement des `<fencedframe>`](/fr/docs/Web/API/Fenced_frame_API#fonctionnement_des_fencedframe) pour une description des `FencedFrameConfig` et des URN opaques.

## Valeur

Une instance d'objet {{domxref("Fence")}}, ou `null` si le contexte du document n'a pas accès à un objet {{domxref("Fence")}}.

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
