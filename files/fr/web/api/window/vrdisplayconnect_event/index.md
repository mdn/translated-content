---
title: "Window: vrdisplayconnect event"
slug: Web/API/Window/vrdisplayconnect_event
---

{{APIRef("Window")}}

L'événement **`vrdisplayconnect`** de l'[API WebVR](/fr/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR compatible est connecté à l'ordinateur.

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
          ><a href="/fr/docs/Web/API/Window/onvrdisplayconnect"
            >onvrdisplayconnect</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Vous pouvez utiliser l'événement `vrdisplayconnect` dans une méthode [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener) :

```js
window.addEventListener("vrdisplayconnect", function () {
  info.textContent = "Affichage connecté.";
  reportDisplays();
});
```

Ou utilisez la propriété du gestionnaire d'événements [`onvrdisplayconnect`](/fr/docs/Web/API/Window/onvrdisplayconnect) :

```js
window.onvrdisplayconnect = function () {
  info.textContent = "Affichage connecté.";
  reportDisplays();
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebVR API homepage](/fr/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — démos, téléchargements et autres ressources de l'équipe Mozilla VR.
