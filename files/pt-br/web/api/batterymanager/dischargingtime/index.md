---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
tags:
  - API
  - Battery API
  - Propriedade
  - Referencia
translation_of: Web/API/BatteryManager/dischargingTime
---
{{APIRef("Battery API")}}

Indica a quantidade de tempo, em segundos, que restam até a bateria estar totalmente descarregada.

## Sintaxe

```
var time = navigator.battery.dischargingTime
```

No retorno, `time` é o tempo restante em segundos até que a bateria esteja totamente descarregada e o sistema suspenda. Este valor é [`Infinity`](/en-US/docs/JavaScript/Reference/Global_Objects/Infinity) se a bateria estiver carregando, ao invés de descarregando, ou se o sistema não for capaz de determinar o tempo restante de carregamento (ou ainda se não existir uma bateria disponível).

## Especificações

{{page("/pt-BR/docs/Web/API/BatteryManager","Specifications")}}

## Compatibilidade com navegadores

{{page("/pt-BR/docs/Web/API/BatteryManager","Browser_compatibility")}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
