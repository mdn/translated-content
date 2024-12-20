---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
---

{{APIRef("Battery API")}}

Indica a quantidade de tempo, em segundos, que resta até que a bateria esteja totalmente carregada.

## Sintaxe

```
var time = navigator.battery.chargingTime
```

No retorno, `time` é o tempo restante em segundos até que a bateria esteja totalmente carregada, ou 0 se a bateria já estiver com sua carga completa. Se a bateria estiver descarregando (ou se o sistema não é capaz de derminar o tempo restante para o carregamento), este valor é [`Infinity`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
