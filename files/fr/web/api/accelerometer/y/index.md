---
title: "Accelerometer : propriété y"
short-title: y
slug: Web/API/Accelerometer/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{SecureContext_Header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

La propriété en lecture seule **`y`** de l'interface {{DOMxRef("Accelerometer")}} retourne un nombre définissant l'accélération de l'appareil le long de son axe y.

## Valeur

Un nombre ({{JSxRef("Number")}}).

## Exemples

L'accélération est généralement lue dans la fonction de rappel de l'évènement {{DOMxRef("Sensor.reading_event", "reading")}}. Dans l'exemple ci-dessous, cela se produit soixante fois par seconde.

```js
const accelerometre = new Accelerometer({ frequency: 60 });

accelerometre.addEventListener("reading", (e) => {
  console.log(`L'accélération le long de l'axe X ${accelerometre.x}`);
  console.log(`L'accélération le long de l'axe Y ${accelerometre.y}`);
  console.log(`L'accélération le long de l'axe Z ${accelerometre.z}`);
});
accelerometre.start();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
