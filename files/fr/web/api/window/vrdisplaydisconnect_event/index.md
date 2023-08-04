---
title: "Window: vrdisplaydisconnect event"
slug: Web/API/Window/vrdisplaydisconnect_event
---

{{APIRef("Window")}}

L'événement **`vrdisplaydisconnect`** de l'[API WebVR](/fr/docs/Web/API/WebVR_API) est déclenché lorsqu'un écran VR compatible est déconnecté de l'ordinateur.

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
          ><a href="/fr/docs/Web/API/Window/onvrdisplaydisconnect"
            >onvrdisplaydisconnect</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Vous pouvez utiliser l'événement `vrdisplaydisconnect` dans une méthode [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener) :

```js
window.addEventListener("vrdisplaydisconnect", function () {
  info.textContent = "Affichage déconnecté";
  reportDisplays();
});
```

Ou utilisez la propriété du gestionnaire d'événements [`onvrdisplaydisconnect`](/fr/docs/Web/API/Window/onvrdisplaydisconnect) :

```js
window.onvrdisplaydisconnect = function() {
  info.textContent = 'Affichage déconnecté';
  reportDisplays();
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebVR API homepage](/fr/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — démos, téléchargements et autres ressources de l'équipe Mozilla VR.
