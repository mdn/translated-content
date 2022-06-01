---
title: 'Window: vrdisplayconnect event'
slug: Web/API/Window/vrdisplayconnect_event
tags:
  - Evènement
  - Reference
  - WebVR
  - onvrdisplayconnect
  - vrdisplayconnect
translation_of: Web/API/Window/vrdisplayconnect_event
---
{{APIRef("Window")}}

L'événement **`vrdisplayconnect`** de l'[API WebVR](/en-US/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR compatible est connecté à l'ordinateur.

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplayconnect"
            >onvrdisplayconnect</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Vous pouvez utiliser l'événement `vrdisplayconnect` dans une méthode [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) :

```js
window.addEventListener('vrdisplayconnect', function() {
  info.textContent = 'Affichage connecté.';
  reportDisplays();
});
```

Ou utilisez la propriété du gestionnaire d'événements [`onvrdisplayconnect`](/en-US/docs/Web/API/Window/onvrdisplayconnect) :

```js
window.onvrdisplayconnect = function() {
  info.textContent = 'Affichage connecté.';
  reportDisplays();
};
```

## Spécifications

| Spécification                                                                                            | Statut                       | Commentair          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('WebVR 1.1', '#dom-window-onvrdisplayconnect', 'vrdisplayconnect')}} | {{Spec2('WebVR 1.1')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Window.vrdisplayconnect_event")}}

## Voir également

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — démos, téléchargements et autres ressources de l'équipe Mozilla VR.
