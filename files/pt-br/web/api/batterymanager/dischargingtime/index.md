---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
---

{{APIRef("Battery API")}}

Indica a quantidade de tempo, em segundos, que restam até a bateria estar totalmente descarregada.

## Sintaxe

```
var time = navigator.battery.dischargingTime
```

No retorno, `time` é o tempo restante em segundos até que a bateria esteja totamente descarregada e o sistema suspenda. Este valor é [`Infinity`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity) se a bateria estiver carregando, ao invés de descarregando, ou se o sistema não for capaz de determinar o tempo restante de carregamento (ou ainda se não existir uma bateria disponível).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
