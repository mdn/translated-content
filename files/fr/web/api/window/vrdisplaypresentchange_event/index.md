---
title: 'Window: vrdisplaypresentchange event'
slug: Web/API/Window/vrdisplaypresentchange_event
tags:
  - Evènement
  - Reference
  - WebVR
  - onvrdisplaypresentchange
  - vrdisplaypresentchange
translation_of: Web/API/Window/vrdisplaypresentchange_event
---
{{APIRef("Window")}}

L'événement **`vrdisplaypresentchange`** de l'[API WebVR](/en-US/docs/Web/API/WebVR_API) est déclenché lorsque l'état de présentation d'un affichage VR change — c'est à dire passe de la présentation à la non présentation, ou vice versa.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("VRDisplayEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/Window/onvrdisplaypresentchange"
            >onvrdisplaypresentchange</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Vous pouvez utiliser l'événement `vrdisplaypresentchange` dans une méthode [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) :

```js
window.addEventListener('vrdisplaypresentchange', function() {
  if(vrDisplay.isPresenting) {
    info.textContent = "L'affichage a commencé à présenter.";
  } else {
    info.textContent = "L'affichage a cessé de se présenter.";
  }
  reportDisplays();
});
```

Ou utilisez la propriété de gestionnaire d'événements [`onvrdisplaypresentchange`](/en-US/docs/Web/API/Window/onvrdisplaypresentchange) :

```js
window.onvrdisplaypresentchange = function() {
  if(vrDisplay.isPresenting) {
    info.textContent = "L'affichage a commencé à présenter.";
  } else {
    info.textContent = "L'affichage a cessé de se présenter.";
  }
  reportDisplays();
};
```

## Spécifications

| Spécification                                                                                                            | Statut                       | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('WebVR 1.1', '#dom-window-onvrdisplaypresentchange', 'vrdisplaypresentchange')}} | {{Spec2('WebVR 1.1')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Window.vrdisplaypresentchange_event")}}

## Voir également

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — démos, téléchargements et autres ressources de l'équipe Mozilla VR.
