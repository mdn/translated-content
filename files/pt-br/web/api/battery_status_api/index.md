---
title: Battery Status API
slug: Web/API/Battery_Status_API
---

{{DefaultAPISidebar("Battery API")}}

A **API Battery Status**, mais conhecida como **Battery API**, fornece informações sobre o nível de carga da bateria presente no sistema e permite que você seja notificado por eventos que são enviados quando os níveis sofrem alterações. Isto pode ser usado para ajustar a utilização de recursos do seu aplicativo, reduzindo a quantidade de energia drenada por ele quando a bateria estiver em nível baixo, ou ainda para salvar mudanças antes da bateria acabar, prevenindo a perda de dados.

A API Battery Status API estende {{domxref("Window.navigator")}} com uma propriedade {{domxref("Navigator.battery")}} que é um objeto {{domxref("BatteryManager")}}, e adiciona alguns novos eventos que você pode receber para monitorar o status da bateria.

## Exemplo

Neste exemplo, nós observamos as mudanças em ambos os status de carregamento (se estamos ou não conectados e carregando) e para mudanças no nível da bateria. Isto é feito escutando pelos eventos {{event("chargingchange")}} e {{event("levelchange")}}, respectivamente.

```js
var battery =
  navigator.battery || navigator.mozBattery || navigator.webkitBattery;

function updateBatteryStatus() {
  console.log("Status da bateria: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("A bateria está carregando");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();
```

Veja também [o exemplo na especificação](http://dev.w3.org/2009/dap/system-info/battery-status.html#introduction).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Hacks blog post - Usando a API Battery API (em inglês)](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery","navigator.battery")}}
