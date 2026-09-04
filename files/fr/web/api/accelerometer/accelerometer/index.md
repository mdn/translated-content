---
title: "Accelerometer : constructeur Accelerometer()"
short-title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Le constructeur **`Accelerometer()`** crée un nouvel objet {{DOMxRef("Accelerometer")}} qui retourne l'accélération de l'appareil le long des trois axes au moment de la lecture.

## Syntaxe

```js-nolint
new Accelerometer()
new Accelerometer(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Les options sont les suivantes&nbsp;:
    - `frequency` {{Optional_Inline}}
      - : Le nombre souhaité de fois par seconde qu'un échantillon doit être pris, ce qui signifie le nombre de fois par seconde que l'évènement {{DOMxRef("sensor.reading_event", "reading")}} est appelé. Un nombre entier ou décimal peut être utilisé, ce dernier pour des fréquences inférieures à une seconde. La fréquence de lecture réelle dépend du matériel de l'appareil et peut donc être inférieure à celle demandée.
    - `referenceFrame` {{Optional_Inline}}
      - : Soit `'device'` soit `'screen'`. La valeur par défaut est `'device'`.

### Exceptions

- `SecurityError` {{DOMxRef("DOMException")}}
  - : L'utilisation de cette fonctionnalité a été bloquée par une [Politique de Permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("sensor.reading_event", "reading")}}
