---
title: Accelerometer
slug: Web/API/Accelerometer
l10n:
  sourceCommit: 37a8f396715c6e2e6a0e3d3225e1481484a825b7
---

{{SecureContext_Header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

L'interface **`Accelerometer`** des [APIs Sensor](/fr/docs/Web/API/Sensor_APIs) fournit à chaque lecture l'accélération appliquée à l'appareil le long des trois axes.

Pour utiliser ce capteur, l'utilisateur·ice doit accorder la permission au capteur de l'appareil `'accelerometer'` avec [l'API Permissions](/fr/docs/Web/API/Permissions_API).

Cette fonctionnalité peut être bloquée par une [Politique de Permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) définie sur votre serveur.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("Accelerometer.Accelerometer()", "Accelerometer()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Accelerometer`.

## Propriétés d'instance

_En plus des propriétés listées ci-dessous, `Accelerometer` hérite des propriétés de ses interfaces parentes, {{DOMxRef("Sensor")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Accelerometer.x")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne un double contenant l'accélération de l'appareil le long de l'axe x de l'appareil.
- {{DOMxRef("Accelerometer.y")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne un double contenant l'accélération de l'appareil le long de l'axe y de l'appareil.
- {{DOMxRef("Accelerometer.z")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne un double contenant l'accélération de l'appareil le long de l'axe z de l'appareil.

## Méthodes d'instance

_`Accelerometer` n'a pas ses propres méthodes. Cependant, il hérite des méthodes de ses interfaces parentes, {{DOMxRef("Sensor")}} et {{DOMxRef("EventTarget")}}._

## Évènements

_`Accelerometer` n'a pas ses propres évènements. Cependant, il hérite des évènements de son interface parente, {{DOMxRef("Sensor")}}._

## Exemples

L'accélération est généralement lue dans une fonction de rappel de l'évènement {{DOMxRef("Sensor.reading_event", "reading")}}. Dans l'exemple ci-dessous, cela se produit soixante fois par seconde.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  console.log(`Acceleration along the Z-axis ${acl.z}`);
});

acl.start();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
