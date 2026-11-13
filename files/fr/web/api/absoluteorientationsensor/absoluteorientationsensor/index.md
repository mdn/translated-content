---
title: "AbsoluteOrientationSensor : constructeur AbsoluteOrientationSensor()"
short-title: AbsoluteOrientationSensor()
slug: Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SecureContext_Header}}{{APIRef("Sensor API")}}

Le constructeur **`AbsoluteOrientationSensor()`** crée un nouvel objet {{DOMxRef("AbsoluteOrientationSensor")}} qui décrit l'orientation physique de l'appareil par rapport au système de coordonnées de référence de la Terre.

## Syntaxe

```js-nolint
new AbsoluteOrientationSensor()
new AbsoluteOrientationSensor(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Les options sont les suivantes&nbsp;:
    - `frequency` {{Optional_Inline}}
      - : Le nombre souhaité de fois par seconde qu'un échantillon doit être pris, ce qui signifie le nombre de fois par seconde que l'évènement {{DOMxRef("sensor.reading_event", "reading")}} est appelé. Un nombre entier ou décimal peut être utilisé, ce dernier pour des fréquences inférieures à une seconde. La fréquence de lecture réelle dépend du matériel de l'appareil et peut donc être inférieure à celle demandée.
    - `referenceFrame` {{Optional_Inline}}
      - : Soit `'device'` soit `'screen'`. La valeur par défaut est `'device'`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("sensor.reading_event", "reading")}}
