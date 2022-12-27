---
title: BatteryManager.onchargingchange
slug: Web/API/BatteryManager/chargingchange_event
tags:
  - API
  - Battery API
  - Event Handler
  - Propriedade
  - Referencia
translation_of: Web/API/BatteryManager/onchargingchange
original_slug: Web/API/BatteryManager/onchargingchange
---
{{APIRef("Battery API")}}

Especifica um _event listener_ para receber eventos {{event("chargingchange")}}. Esses eventos ocorrem quando o estado {{domxref("BatteryManager.charging", "charging")}} (carregando) da bateria é atualizado.

## Sintaxe

```
navigator.battery.onchargingchange = funcRef
```

Onde `funcRef` é uma função para ser chamada quando o evento {{event("chargingchange")}} ocorre.

## Especificações

{{page("/pt-BR/docs/Web/API/BatteryManager","Specifications")}}

## Compatibilidade com navegadores

{{page("/pt-BR/docs/Web/API/BatteryManager","Browser_compatibility")}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
