---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
---

{{APIRef}}

## Sumário

Esta propriedade indica se a janela está sendo exibida em modo de tela cheia ("_full screen_") ou não. Ela é confiável apenas no Gecko 1.9 (Firefox 3) e posteriores, veja as Notas abaixo.

## Sintaxe

```
isInFullScreen = windowRef.fullScreen;
```

Com "_chrome privileges_" (privilégios para acesso a funções de baixo nível), a propriedade é de leitura e escrita, caso contrário é de apenas leitura. Tenha em mente que se você tentar definir esta propriedade sem _chrome privileges_, isto não irá gerar uma excessão; ao invés disto, irá simples e silenciosamente falhar. Isto é para prevenir que _scripts_ projetados para definir esta propriedade no Internet Explorer se quebrem.

## Valor de Retorno

- `isInFullScreen`

  - : Um booleano. Valores possíveis:

    - `true`: A janela está em modo de tela cheia.
    - `false`: A janela não está em modo de tela cheia.

## Exemplos

{{todo}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Notas

- Esta propriedade só é confiável no Mozilla 1.9 (Firefox 3) e posteriores. Mozilla 1.8 e anteriores têm esta propriedade, mas sempre retorna `false`, mesmo quando a janela está em modo de tela cheia ([Erro do Firefox 127013](https://bugzil.la/127013)).
- Alternar entre a janela normal e tela cheia irá disparar o evento "resize" na janela correspondente.
