---
title: Position
slug: Web/API/GeolocationPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

A interface **`Position`** representa a posição do dispositivo em questão em um dado momento. A posição, representada por um objeto {{domxref("Coordinates")}}, compreende a posição 2D do dispositivo, em um esferóide representando a Terra, e também inclui sua altitude e velocidade.

## Propriedades

_A interface `Position` não herda nenhuma propriedade_.

- {{domxref("Position.coords")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um objeto {{domxref("Coordinates")}} definindo a localização atual.
- {{domxref("Position.timestamp")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um {{domxref("DOMTimeStamp")}} representando o momento em que a localização foi detectada.

## Métodos

**A inteface `Position` não implementa ou herda nenhum método*.***

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando geolocalização](/pt-BR/docs/WebAPI/Using_geolocation)
- A interface {{domxref("Geolocation")}} que usa isto
