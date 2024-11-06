---
title: Navigator.battery
slug: Web/API/Navigator/getBattery
---

{{ ApiRef("Battery API") }}

## Resumo

O objeto `battery` fornece informações sobre o nível de carga da bateria do sistema; você pode também escutar eventos enviados por ele que fornecem atualizações sobre o status atual da carga. Isso implementa a [Battery Status API](/pt-BR/docs/WebAPI/Battery_Status); consulte essa documentação para mais detalhes, um guia de utilização da API e códigos de exemplo.

## Sintaxe

```
var battery = window.navigator.battery;
```

## Valor

`navigator.battery` é um objeto do tipo {{domxref("BatteryManager")}}.

## Especificações

{{page("/pt-BR/docs/Web/API/BatteryManager","Specifications")}}

## Compatibilidade com navegadores

{{page("/pt-BR/docs/Web/API/BatteryManager","Browser_compatibility")}}

## Veja também

- {{domxref("BatteryManager")}}
- the [Battery Status API](/pt-BR/docs/WebAPI/Battery_Status) article
- [Blog post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh on the JavaScript Battery Api](http://davidwalsh.name/battery-api)
- [battery.js - a tiny cross-browser wrapper](https://github.com/pstadler/battery.js)
