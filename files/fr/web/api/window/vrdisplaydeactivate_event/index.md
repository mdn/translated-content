---
title: "Window : évènement vrdisplaydeactivate"
short-title: vrdisplaydeactivate
slug: Web/API/Window/vrdisplaydeactivate_event
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("Window")}}{{Non-standard_Header}}

L'évènement **`vrdisplaydeactivate`** de [l'API WebVR](/fr/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR ne peut plus être présenté, par exemple si un HMD est passé en veille ou en mode veille en raison d'une période d'inactivité.

> [!NOTE]
> Cet évènement faisait partie de l'ancienne [API WebVR <sup>(angl.)</sup>](https://immersive-web.github.io/webvr/spec/1.1/). Il a été remplacé par [l'API WebXR Device <sup>(angl.)</sup>](https://immersive-web.github.io/webxr/).

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("vrdisplaydeactivate", (event) => { })

onvrdisplaydeactivate = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("VRDisplayEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("VRDisplayEvent")}}

## Exemples

Vous pouvez utiliser l'évènement `vrdisplaydeactivate` dans une méthode [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener)&nbsp;:

```js
window.addEventListener("vrdisplaydeactivate", () => {
  info.textContent = "Affichage désactivé.";
  reportDisplays();
});
```

Ou utilisez la propriété de gestionnaire d'évènement `onvrdisplaydeactivate`&nbsp;:

```js
window.onvrdisplaydeactivate = () => {
  info.textContent = "Affichage désactivé.";
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
