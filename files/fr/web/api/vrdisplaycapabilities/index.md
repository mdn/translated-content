---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

L'interface **`VRDisplayCapabilities`** de [WebVR API](/fr/docs/Web/API/WebVR_API) décrit les capacités d'un appareil {{domxref("VRDisplay")}} — ses fonctionalités peuvent être utilisée pour tester les capacités de l'appareil, par exemple il peut retourner de l'information sur la position.

Cet interface est accessible à partir de la propriété {{domxref("VRDisplay.capabilities")}}.

## Properties

- {{domxref("VRDisplayCapabilities.canPresent")}} {{readonlyInline}}
  - : Retourne un objet {{domxref("Boolean")}} qui décrit si l'écran RV est capable de présenter du contenu (e.g. en utilisant un visiocasque).
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{readonlyInline}}
  - : Retourne un objet {{domxref("Boolean")}} indiquant si l'écran RV est séparé de l'écran primaire de l'appareil.
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{readonlyInline}}
  - : Retourne un objet {{domxref("Boolean")}} indiquant si l'écran RV peut suivre le mouvement de l'appareil et retourne de l'information sur l'orientation.
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{readonlyInline}}
  - : Retourne un objet {{domxref("Boolean")}} indiquant si l'écran RV peut suivre le mouvement de l'appareil et retourne de l'information sur l'orientation.
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{readonlyInline}}
  - : Retourne un nombre indiquant le nombre maximal de {{domxref("VRLayer")}}s que l'écran RV peut présenter en même temps (e.g. la longueur maximale du tableau que {{domxref("Display.requestPresent()")}} peut accepter.)

## Exemples

TBD.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Page d'accueil de l'API WebVR](/fr/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — démos, téléchargements et autres ressources de l'équipe Mozilla VR.
