---
title: PositionError
slug: Web/API/GeolocationPositionError
---

{{APIRef("Geolocation API")}}

A interface **`PositionError`** representa a rasão de um erro ocorrer quando usando o dispositivo de geolocalização.

## Propriedades

_A interface `PositionError` não herda nenhuma propriedade_.

- {{domxref("PositionError.code")}} {{readonlyInline}}

  - : Retorna um tipo `unsigned short` representando o código de erro. Os valores possíveis são os seguintes:

    | Valor | Constante associada    | Descrição                                                                                                                                              |
    | ----- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `1`   | `PERMISSION_DENIED`    | Não foi possível obter a informação sobre geolocalização por que a página não possuía permissão para fazê-lo.                                          |
    | `2`   | `POSITION_UNAVAILABLE` | A obtenção da geolocalização falhou por que pelo menos uma fonte interna de posicionamento retornou um erro interno.                                   |
    | `3`   | `TIMEOUT`              | O tempo máximo permitido para obter a geolocalização, definido por {{domxref("PositionOptions.timeout")}} foi atingido antes de se obter a informação. |

- {{domxref("PositionError.message")}} {{readonlyInline}}
  - : Retorna um {{domxref("DOMString")}} humanamente legível descrevendo os detalhes do erro. A especificação observa que esta informação é primariamente projetada para propósitos de debug e não deve ser exibida diretamente na interface com o usuário.

## Métodos

**A interface `PositionError` não implementa nem herda qualquer método*.***

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando geolocation](/pt-BR/docs/WebAPI/Using_geolocation)
- A interface {{domxref("Geolocation")}} que o utiliza.
