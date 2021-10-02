---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
translation_of: Web/API/BatteryManager/chargingTime
---
{{obsolete_header}}

{{APIRef("Battery API")}}

Indique le temps, en secondes, qu'il reste jusqu'à que la batterie soit rechargée.

> **Note :** Même si le temps retourné devrait être précis à la seconde, les navigateurs arrondissent cette valeur (typiquement à 15 minutes près) afin de limiter l'identification et le suivi des utilisateurs.

## Syntaxe

    var time = battery.chargingTime

`time` est le temps restant en secondes jusqu'à que `battery`, qui est un objet de type {{domxref("BatteryManager")}}, soit rechargée, ou vaut 0 si la batterie est déjà rechargée. Si la batterie est en décharge, la variable vaut [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity).

## Exemple

### Code HTML

```html
<div id="chargingTime">(temps de charge inconnu)</div>
```

### Code JavaScript

```js
navigator.getBattery().then(function(battery) {

   var time = battery.chargingTime;

   document.querySelector('#chargingTime').textContent = battery.chargingTime;
});
```

{{ EmbedLiveSample('Example', '100%', 30) }}

## Spécifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.BatteryManager.chargingTime")}}

## Voir aussi

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
