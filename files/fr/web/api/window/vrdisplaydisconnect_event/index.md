---
title: 'Window: vrdisplaydisconnect event'
slug: Web/API/Window/vrdisplaydisconnect_event
tags:
  - Evènement
  - Reference
  - WebVR
  - onvrdisplaydisconnect
  - vrdisplaydisconnect
translation_of: Web/API/Window/vrdisplaydisconnect_event
---
{{APIRef("Window")}}

L'événement **`vrdisplaydisconnect`** de l'[API WebVR](/en-US/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR compatible est déconnecté de l'ordinateur.

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplaydisconnect"
            >onvrdisplaydisconnect</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Vous pouvez utiliser l'événement `vrdisplaydisconnect` dans une méthode [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) :

```js
window.addEventListener('vrdisplaydisconnect', function() {
  info.textContent = 'Affichage déconnecté';
  reportDisplays();
});
```

Ou utilisez la propriété du gestionnaire d'événements [`onvrdisplaydisconnect`](/en-US/docs/Web/API/Window/onvrdisplaydisconnect) :

```js
window.onvrdisplaydisconnect = function() {
  info.textContent = 'Affichage déconnecté';
  reportDisplays();
);
```

## Spécifications

| Spécification                                                                                                    | Statut                       | Commentair          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('WebVR 1.1', '#dom-window-onvrdisplaydisconnect', 'vrdisplaydisconnect')}} | {{Spec2('WebVR 1.1')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Window.vrdisplaydisconnect_event")}}

## Voir également

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — démos, téléchargements et autres ressources de l'équipe Mozilla VR.
