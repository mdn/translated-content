---
title: BatteryManager.charging
slug: Web/API/BatteryManager/charging
translation_of: Web/API/BatteryManager/charging
---
{{obsolete_header}}{{APIRef("Battery API")}}

Une valeur booléenne indiquant si la batterie de l'équipement est en train d'être chargée.

## Syntax

    var charging = battery.charging

`charging` indique si `battery`, qui est un objet du type {{domxref("BatteryManager")}}, est en charge; si la batterie est en charge, la variable a la valeur `true`. Sinon, dans le cas de la décharge, la variable a la valeurvaux `false`.

## Exemple

### Code HTML

```html
<div id="charging">(&ecirc;tat de charge inconnu)</div>
```

### Code JavaScript

```js
navigator.getBattery().then(function(battery) {

    var charging = battery.charging;

    document.querySelector('#charging').textContent = charging ;
});
```

{{ EmbedLiveSample('Example', '100%', 30) }}

## Spécifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.BatteryManager.charging")}}

## Voir aussi

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
