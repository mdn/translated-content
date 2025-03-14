---
title: "Performance : Événement resourcetimingbufferfull"
slug: Web/API/Performance/resourcetimingbufferfull_event
---

{{APIRef}}

L'événement `resourcetimingbufferfull` se déclenche lorsque la mémoire [tampon de synchronisation des ressources](/fr/docs/Web/API/Performance/setResourceTimingBufferSize) du navigateur est pleine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Propagation</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">
        Propriété pour le gestionnaire d'événements correspondant
      </th>
      <td>
        {{domxref("Performance.onresourcetimingbufferfull", "onresourcetimingbufferfull")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

L'exemple suivant définit une fonction de rappel sur la propriété `onresourcetimingbufferfull`.

```js
function buffer_full(event) {
  console.log("AVERTISSEMENT : La mémoire tampon des ressources est COMPLÈTE !");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // Définit un rappel si le tampon de ressources est rempli.
  performance.onresourcetimingbufferfull = buffer_full;
}
<body onload="init()">
```

Notez que vous pouvez également configurer le gestionnaire à l'aide de la fonction addEventListener() :

```js
performance.addEventListener("resourcetimingbufferfull", buffer_full);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
