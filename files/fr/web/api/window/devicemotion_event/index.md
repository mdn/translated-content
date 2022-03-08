---
title: 'Window: devicemotion event'
slug: Web/API/Window/devicemotion_event
translation_of: Web/API/Window/devicemotion_event
browser-compat: api.Window.devicemotion_event
---
{{APIRef}}

L'évènement `devicemotion` est déclenché à intervalles réguliers et indique la quantité de force physique d'accélération que le périphérique reçoit à ce moment. Il fournit également des informations sur le taux de rotation, si disponible.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bouillonne</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td><a href="/fr/docs/Web/API/DeviceMotionEvent"><code>DeviceMotionEvent</code></a></td>
    </tr>
    <tr>
      <th scope="row">Propriété gestionnaire d'évènement</th>
      <td><a href="/fr/docs/Web/API/Window/ondevicemotion"><code>Window.ondevicemotion</code></a></td>
    </tr>
  </tbody>
</table>

## Exemples

```js
function handleMotionEvent(event) {

  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  // Faire quelque chose de génial.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)
- [`DeviceOrientation Event` (en anglais)](https://www.w3.org/TR/orientation-event/#devicemotion)
