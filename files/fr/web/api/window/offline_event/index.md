---
title: "Window: Evenement offline"
slug: Web/API/Window/offline_event
---

{{APIRef}}

L'événement **`offline`** de l'interface {{domxref("Window")}} se déclenche lorsque le navigateur perd la connexion au réseau et la valeur de {{domxref("Navigator.onLine")}} bascule à `false`.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        {{domxref("GlobalEventHandlers.onoffline", "onoffline")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

```js
//version addEventListener
window.addEventListener("offline", (event) => {
  console.log("La Connexion au réseau est perdu.");
});

// onoffline version
window.onoffline = (event) => {
  console.log("La Connexion au réseau a été perdue.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`online`](/fr/docs/Web/API/Window/online_event)
