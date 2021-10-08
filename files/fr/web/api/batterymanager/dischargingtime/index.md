---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
translation_of: Web/API/BatteryManager/dischargingTime
---
{{obsolete_header}}{{APIRef("Battery API")}}

Indique le temps, en secondes, qu'il reste jusqu'à que la batterie soit déchargée.

> **Note :** Même si le temps retourné devrait être précis à la seconde, les navigateurs arrondissent cette valeur (typiquement à 15 minutes près) afin de limiter l'identification et le suivi des utilisateurs.

## Syntax

    var time = battery.dischargingTime

`time` est le temps restant en secondes jusqu'à que `battery`, qui est un objet de type {{domxref("BatteryManager")}}, soit complètement déchargée. La variable vaut [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity) si la batterie est en train d'être chargée ou si le système ne parvient pas à calculer un temps restant.

## Exemple

### Code HTML

```html
<div id="dischargingTime">(temps de d&eacute;charge inconnu)</div>
```

### Code JavaScript

```js
navigator.getBattery().then(function(battery) {

    var time = battery.dischargingTime;

    document.querySelector('#dischargingTime').textContent = battery.dischargingTime;
});
```

{{ EmbedLiveSample('Example', '100%', 30) }}

## Spécifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.BatteryManager.dischargingTime")}}

## Voir aussi

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
