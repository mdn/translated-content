---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
---

{{APIRef("Battery API")}}

Indica o nível de carga atual da bateria como um valor entre `0.0` e `1.0`.

## Sintaxe

```
var level = navigator.battery.level
```

No retorno, `level` é um número representando o nível de carga da bateria do sistema em uma escala de valores entre 0.0 e 1.0. Um valor de 0.0 significa que a bateria está vazia e o sistema está prestes a ser suspenso. Um valor de 1.0 significa que a bateria está cheia. Um valor de 1.0 é também retornado se a implementação não é capaz de determinar o nível de carga ou se o sistema não é alimentado por bateria.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.battery","navigator.battery")}}
