---
title: BatteryManager
slug: Web/API/BatteryManager
---

{{APIRef("Battery API")}}

## Resumo

A interface `BatteryManager` fornece maneiras de obter informações sobre o nível de carga da bateria do sistema.

A propriedade {{domxref("Navigator.battery","navigator.battery")}} retorna uma instância da interface `BatteryManager` que você pode utilizar para interajir com a API de status da bateria.

## Propriedades

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : Um valor Booleano que indica se a bateria está sendo carregada no momento.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : Um número representando o tempo restante em segundos até a bateria estar completamente carregada, ou 0 se a carga já estiver completa.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : Um número representando o tempo restante em segundos até a bateria estar completamente descarregada e o sistema ser suspenso.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : Um número representando o nível de carga da bateria do sistema em uma escala de valores entre 0.0 e 1.0.

### Eventos

- {{domxref("BatteryManager.onchargingchange")}}
  - : Tratamento para o evento {{event("chargingchange")}}; Esse evento é enviado quando o status de carregamento da bateria é atualizado.
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : Tratamento para o evento {{event("chargingtimechange")}}; Esse evento é enviado quando o tempo de carregamento da bateria é atualizado.
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - : Tratamento para o evento {{event("dischargingtimechange")}}; Esse evento é enviado quando o tempo de descarregamento da bateria é atualizado.
- {{domxref("BatteryManager.onlevelchange")}}
  - : Tratamento para o evento {{event("levelchange")}}; Esse evento é enviado quando a nível da bateria é atualizado.

## Métodos

Herdado de {{domxref("EventTarget")}}:

{{page("/pt-BR/docs/Web/API/EventTarget","Métodos")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ domxref("Navigator.battery","navigator.battery") }}
- A [Battery Status API](/pt-BR/docs/WebAPI/Battery_Status)
