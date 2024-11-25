---
title: BatteryManager.ondischargingtimechange
slug: Web/API/BatteryManager/dischargingtimechange_event
---

{{APIRef("Battery API")}}

Especifica um _event listener_ para receber eventos [`dischargingtimechange`](/pt-BR/docs/Web/Events/dischargingtimechange). Esses eventos ocorrem quando a propriedade {{domxref("BatteryManager.dischargingTime","dischargingTime")}} (tempo de descarregamento) da bateria é atualizada.

## Sintaxe

```
navigator.battery.ondischargingtimechange = funcRef
```

Onde `funcRef` é uma função para ser chamada quando o evento [`dischargingtimechange`](/pt-BR/docs/Web/Events/dischargingtimechange) ocorre.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
