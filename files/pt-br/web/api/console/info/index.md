---
title: Console.info()
slug: Web/API/console/info
---

{{APIRef("Console API")}}{{Non-standard_header}}

Apresenta uma mensagem de saída no console do navegador . No Firefox e Chrome , um pequeno ícone "i" e apresentado próximo aos items do log do console .

{{AvailableInWorkers}}

## Sintaxe

```
console.info(obj1 [, obj2, ..., objN]);
console.info(msg [, subst1, ..., substN]);
```

## Parâmetros

- `obj1` ... `objN`
  - : `A lista de objetos javascript para saída . As representações de strings de cada um desses objetos são anexados juntos em ordem de listagem e saida .`
- `msg`
  - : `Uma string javascript que contém zero ou mais strings para substituição.`
- `subst1` ... `substN`
  - : `Objeto javascript o qual substitui strings com msg. Isso permite controle adicional sobre o formato da saída.`

Veja [Outputting text to the console](/pt-BR/docs/Web/API/console#Outputting_text_to_the_console) na documentação {{domxref("console")}} para mais detalhes.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
