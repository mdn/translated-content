---
title: Proximity
slug: Web/API/Proximity_Events
tags:
  - WebAPI
translation_of: Web/API/Proximity_Events
original_slug: WebAPI/Proximity
---
{{ SeeCompatTable }}

## Résumé

Les événements de proximité permettent, simplement, de savoir lorsqu'un utilisateur est près de l'appareil. Ces événements permettent de réagir par rapport à cette proximité, par exemple en éteignant l'écran lorsqu'un utilisateur est en train de passer un appel téléphonique et que l'appareil est près de l'oreille.

> **Note :** Bien entendu, il faut un capteur de proximité pour que cette API fonctionne, ceux-ci sont généralement disponibles sur les appareils mobile. Les appareils ne disposant pas d'un tel capteur pourront supporter de tels événements, ils seront en revanche incapables de les déclencher.

## Événements de proximité

Lorsque le capteur de l'appareil détecte un changement entre l'appareil et l'objet, il informe le navigateur de ce changement en lui envoyant une notification. Lorsque le navigateur reçoit une notification comme celle-ci, il déclenche un événement {{domxref("DeviceProximityEvent")}} à chaque fois qu'il y a un changement et un événement  {{domxref("UserProximityEvent")}} dans le cas où un changement plus brutal se produit.

Cet événement peut être capturé en utilisant un objet au niveau `window` en utilisant la méthode {{domxref("EventTarget.addEventListener","addEventListener")}} (en utilisant les noms d'événements {{event("deviceproximity")}} ou {{event("userproximity")}}) ou en attachant un gestionnaire d'événement à la propriété {{domxref("window.ondeviceproximity")}} ou à la propriété {{domxref("window.onuserproximity")}}.

Une fois qu'il a été capturé, l'événement donne accès à différentes informations :

- L'événement {{domxref("DeviceProximityEvent")}} permet de connaître la distance exacte entre l'appareil et l'objet avec sa propriété {{domxref("DeviceProximityEvent.value","value")}}. Il fournit également la distance la plus courte et la distance la plus grande que l'appareil peut détecter avec les propriétés {{domxref("DeviceProximityEvent.min","min")}} et {{domxref("DeviceProximityEvent.max","max")}}.
- L'événement {{domxref("UserProximityEvent")}} fournit une valeur approximative pour la distance en utilisant un booléen. La propriété  {{domxref("UserProximityEvent.near")}} vaut `true` si l'objet est proche ou `false` si l'objet est loin.

## Exemple

```js
window.addEventListener('userproximity', function(event) {
  if (event.near) {
    // extinction de l'écran
    navigator.mozPower.screenEnabled = false;
  } else {
    // allumage de l'écran
    navigator.mozPower.screenEnabled = true;
  }
});
```

## Spécifications

| Spécification                                                                | Statut                                   | Commentaire            |
| ---------------------------------------------------------------------------- | ---------------------------------------- | ---------------------- |
| {{ SpecName('Proximity Events', '', 'Proximity Events') }} | {{ Spec2('Proximity Events') }} | Spécification initiale |

## Compatibilité des navigateurs

### `DeviceProximityEvent`

{{Compat("api.DeviceProximityEvent")}}

### `UserProximityEvent`

{{Compat("api.UserProximityEvent")}}

## Voir aussi

- {{domxref("DeviceProximityEvent")}}
- {{domxref("UserProximityEvent")}}
- {{event("deviceproximity")}}
- {{event("userproximity")}}
