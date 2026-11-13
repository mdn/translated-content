---
title: BatteryManager.onchargingtimechange
slug: Web/API/BatteryManager/chargingtimechange_event
---

{{APIRef("Battery API")}}

Especifica um _event listener_ para receber eventos [`chargingtimechange`](/pt-BR/docs/Web/Events/chargingtimechange). Esses eventos ocorrem quando a propriedade {{domxref("BatteryManager.chargingTime","chargingTime")}} (tempo de carregamento) da bateria é atualizada.

## Sintaxe

```
navigator.battery.onchargingtimechange = funcRef
```

Onde `funcRef` é uma função para ser chamada quando o evento [`chargingtimechange`](/pt-BR/docs/Web/Events/chargingtimechange) ocorre.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
