---
title: PositionOptions
slug: conflicting/Web/API/Geolocation/getCurrentPosition
---

{{APIRef("Geolocation API")}}A interface **`PositionOptions`** consiste em um objeto que contém propriedades opcionais para passar como um parâmetro de {{domxref("Geolocation.getCurrentPosition()")}} e {{domxref("Geolocation.watchPosition()")}}.

## Propriedades

_A interface `PositionOptions` não herda_ **qualquer propriedade**.

- {{domxref("PositionOptions.enableHighAccuracy")}}
  - : É um {{domxref("Boolean")}} que indica se a aplicação deve receber os melhores (mais exatos) resultados possíveis. Se o valor for `true` e o dispositivo puder disponibilizar uma posição mais exata, ele o fará. Note que isto pode resultar em respostas mais lentas ou aumentar o consumo de bateria. (GPS em um dispositivo mobile). Se o valor for `false`, o dispositivo toma a liberdade de salvar os recursos respondendo mais rapidamente e/ou utilizando menos bateria. Default: `false`
- {{domxref("PositionOptions.timeout")}}
  - : É um valor `long` positivo que representa o tamanho máximo do tempo (em milissegundos) que o dispositivo deve levar para retornar uma posição. O valor default é [`Infinity`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Infinity), o que significa que `getCurrentPosition()` não terá retorno até que a posição esteja disponível.
- {{domxref("PositionOptions.maximumAge")}}
  - : É um valor `long` positivo indicando o valor máximo em milissegundos de uma possível posição em cache aceitável para retornar. Se o valor for `0`, significa que o dispositivo não deve utilizar uma posição em cache e deve tentar obter a posição atual real. Se o valor for [`Infinity`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Infinity) o dispositivo deve retornar uma posição em cache, independente de seu tempo de expiração. Default: 0.

## Métodos

A interface `PositionOptions` não implementa ou herda nenhum método.

## Especificações

| Specification                                                                            | Status                           | Comment            |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('Geolocation', '#positionoptions', 'PositionOptions')}} | {{Spec2('Geolocation')}} | Initial definition |

## Navegadores compatíveis

{{Compat}}

## Veja também

- [Usando geolocation](/pt-BR/docs/WebAPI/Using_geolocation)
- A interface {{domxref("Geolocation")}} que utiliza **`PositionOptions`**.
