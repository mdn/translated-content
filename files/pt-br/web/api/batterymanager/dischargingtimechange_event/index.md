---
title: BatteryManager.ondischargingtimechange
slug: Web/API/BatteryManager/dischargingtimechange_event
tags:
  - API
  - Battery API
  - Event Handler
  - Propriedade
  - Referencia
translation_of: Web/API/BatteryManager/ondischargingtimechange
original_slug: Web/API/BatteryManager/ondischargingtimechange
---

{{APIRef("Battery API")}}

Especifica um _event listener_ para receber eventos {{event("dischargingtimechange")}}. Esses eventos ocorrem quando a propriedade {{domxref("BatteryManager.dischargingTime","dischargingTime")}} (tempo de descarregamento) da bateria é atualizada.

## Sintaxe

    navigator.battery.ondischargingtimechange = funcRef

Onde `funcRef` é uma função para ser chamada quando o evento {{event("dischargingtimechange")}} ocorre.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery")}}
