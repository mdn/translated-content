---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
translation_of: Web/API/BatteryManager/level
---
{{obsolete_header}}{{APIRef("Battery API")}}

Indique le niveau de charge de la batterie en tant que valeur comprise entre `0.0` (déchargée) et `1.0` (rechargée).

## Syntaxe

    var level = battery.level

`level` est un nombre représentant le niveau de charge de la batterie en tant que valeur comprise entre `0.0` et `1.0`. Une veleur de `0.0` signifie que `battery`, qui est un objet de type {{domxref("BatteryManager")}}, est vide, et que le système est sur le point d'être désactivé. Une valeur de `1.0` signifie que la batterie est pleine.

La valeur `1.0` est aussi retournée si le système n'est pas capable de déterminer son niveau de charge ou si le système n'est pas alimenté par une batterie.

## Exemple

### Code HTML

```html
<div id="level">(niveau de batterie inconnu)</div>
```

### Code JavaScript

```js
navigator.getBattery().then(function(battery) {

    var level = battery.level;

    document.querySelector('#level').textContent = level;
});
```

{{ EmbedLiveSample('Example', '100%', 30, '', 'Web/API/BatteryManager/level') }}

## Spécifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.BatteryManager.level")}}

## Voir aussi

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
