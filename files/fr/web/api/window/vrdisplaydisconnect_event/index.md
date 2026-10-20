---
title: "Window : évènement vrdisplaydisconnect"
short-title: vrdisplaydisconnect
slug: Web/API/Window/vrdisplaydisconnect_event
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("Window")}}{{Non-standard_Header}}

L'évènement **`vrdisplaydisconnect`** de [l'API WebVR](/fr/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR compatible est déconnecté de l'ordinateur.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("vrdisplaydisconnect", (event) => { })

onvrdisplaydisconnect = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("VRDisplayEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("VRDisplayEvent")}}

## Exemples

Vous pouvez utiliser l'évènement `vrdisplaydisconnect` dans une méthode [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener)&nbsp;:

> [!NOTE]
> Cet évènement faisait partie de l'ancienne [API WebVR <sup>(angl.)</sup>](https://immersive-web.github.io/webvr/spec/1.1/). Il a été remplacé par [l'API WebXR Device <sup>(angl.)</sup>](https://immersive-web.github.io/webxr/).

```js
window.addEventListener("vrdisplaydisconnect", () => {
  info.textContent = "Affichage déconnecté.";
  reportDisplays();
});
```

Ou utilisez la propriété de gestionnaire d'évènement `onvrdisplaydisconnect`&nbsp;:

```js
window.onvrdisplaydisconnect = () => {
  info.textContent = "Affichage déconnecté.";
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
