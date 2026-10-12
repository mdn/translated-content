---
title: "Window : évènement vrdisplayconnect"
short-title: vrdisplayconnect
slug: Web/API/Window/vrdisplayconnect_event
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("Window")}}{{Non-standard_Header}}

L'évènement **`vrdisplayconnect`** de [l'API WebVR](/fr/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR compatible est connecté à l'ordinateur.

> [!NOTE]
> Cet évènement faisait partie de l'ancienne [API WebVR <sup>(angl.)</sup>](https://immersive-web.github.io/webvr/spec/1.1/). Il a été remplacé par [l'API WebXR Device <sup>(angl.)</sup>](https://immersive-web.github.io/webxr/).

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{domxref("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("vrdisplayconnect", (event) => { })

onvrdisplayconnect = (event) => { }
```

## Type d'évènement

Un objet {{domxref("VRDisplayEvent")}}. Hérite de {{domxref("Event")}}.

{{InheritanceDiagram("VRDisplayEvent")}}

## Exemples

Vous pouvez utiliser l'évènement `vrdisplayconnect` dans une méthode [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener)&nbsp;:

```js
window.addEventListener("vrdisplayconnect", function () {
  info.textContent = "Affichage connecté.";
  reportDisplays();
});
```

Ou utilisez la propriété du gestionnaire d'évènements [`onvrdisplayconnect`](/fr/docs/Web/API/Window/vrdisplayconnect_event)&nbsp;:

```js
window.onvrdisplayconnect = function () {
  info.textContent = "Affichage connecté.";
  reportDisplays();
};
```

## Spécifications

Cet évènement faisait partie de l'ancienne [API WebVR <sup>(angl.)</sup>](https://immersive-web.github.io/webvr/spec/1.1/) qui a été remplacée par [l'API WebXR Device <sup>(angl.)</sup>](https://immersive-web.github.io/webxr/). Il n'est plus en voie de devenir un standard.

Jusqu'à ce que tous les navigateurs aient implémenté la nouvelle [API WebXR Device <sup>(angl.)</sup>](https://immersive-web.github.io/webxr/), il est recommandé de s'appuyer sur des cadriciels, comme [A-Frame <sup>(angl.)</sup>](https://aframe.io/), [Babylon.js <sup>(angl.)</sup>](https://www.babylonjs.com/), ou [Three.js <sup>(angl.)</sup>](https://threejs.org/), ou sur une [prothèse d'émulation <sup>(angl.)</sup>](https://github.com/immersive-web/webxr-polyfill), pour développer des applications WebXR qui fonctionnent sur tous les navigateurs. Consultez le guide [de portage de WebVR vers WebXR <sup>(angl.)</sup>](https://developers.meta.com/vr/documentation/web/port-vr-xr/) de Meta pour plus d'informations.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API WebVR](/fr/docs/Web/API/WebVR_API)
