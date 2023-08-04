---
title: Coordinates
slug: Web/API/GeolocationCoordinates
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

O **`Coordinates`** iinterface representa a posição e a altitude do dispositivo na Terra, bem como a precisão com que essas propriedades são calculadas.

## Propriedades

_A interface do `Coordinates` não herda nenhuma propiedade_.

- {{domxref("Coordinates.latitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double` representando a latitude da posição em graus decimais.
- {{domxref("Coordinates.longitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double` representando a longitude da posição em graus decimais.
- {{domxref("Coordinates.altitude")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double` representando a altitude da posição em metros, em relação ao nível do mar. Esse valor pode ser `null` se a implementação não puder fornecer os dados.
- {{domxref("Coordinates.accuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double` representação da precisão das propriedades em `latitude` e `longitude`, expressa em metros.
- {{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double` representação da precisão da `altitude` expressa em metros. Esse valor pode ser `null`.
- {{domxref("Coordinates.heading")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double` representação da direção na qual o dispositivo está viajando. Esse valor, especificado em graus, indica o quão longe do título verdadeiro do norte do dispositivo. `0` representam o verdadeiro norte e a direção é determinada no sentido horário (o que significa que o leste é `90`graus e oeste é `270`graus). Se `speed`é `0`, `heading`é [`NaN`](/pt-BR/docs/JavaScript/Reference/Global_Objects/NaN). Se o dispositivo não conseguir fornecer `heading`informações, esse valor é `null`.
- {{domxref("Coordinates.speed")}} {{readonlyInline}} {{securecontext_inline}}
  - : Retorna um `double`representação da velocidade do dispositivo em metros por segundo. Esse valor pode ser `null`.

## Métodos

**A interface da `Coordinates` _não implementa, nem herda nenhum método._**

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando geolocalização](/pt-BR/docs/Web/API/Geolocation)
- O {{domxref("Geolocation")}} e a interface que o usa.
