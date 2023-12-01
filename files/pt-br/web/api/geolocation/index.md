---
title: Geolocation
slug: Web/API/Geolocation
---

{{APIRef("Geolocation API")}}

A interface **Geolocation** representa um objeto ábil de programaticamente obter a posição do aparelho. Dá ao conteúdo web acesso à localização do aparelho. Isto permite com que o website ou a aplicação ofereça resultados customizados baseados na localização do usuário.

Um objeto com tal interface é obtido utilizando a propriedade {{domxref("NavigatorGeolocation.geolocation")}} implementada pelo objeto {{domxref("Navigator")}}.

> **Nota:** Por questões de segurança, quando uma página tenta obter acesso às informações de localização o usuário é notificado e uma requisição é feita para o mesmo fornecesser a permissão. Saiba que cada navegaor possui suas próprias políticas e métodos para requisitar tal permissão.

## Propriedades

_A interface_ Geolocation _não implementa nem herda qualquer propriedade._

## Métodos

_A interface_ Geolocation _não herda qualquer métodos._

- {{domxref("Geolocation.getCurrentPosition()")}}
  - : Determina a posição atual do aparelho e retorna um objeto {{domxref("Position")}} com os dados.
- {{domxref("Geolocation.watchPosition()")}}
  - : Retorna um valor long representando a nova função de callback estabelecida para ser invocada a qualquer momento que o localização do aparelho alterar-se.
- {{domxref("Geolocation.clearWatch()")}}
  - : Remove qualquer encarregado previamente instalado usando _watchPosition()_.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- [Usando Geolocation](/pt-BR/docs/WebAPI/Using_geolocation)
