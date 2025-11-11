---
title: Console.log()
slug: Web/API/console/log_static
---

{{APIRef("Console API")}}{{Non-standard_header}}

## Sumário

Exibe uma mensagem na console do navegador.

## Syntax

```
console.log(obj1[, obj2, ..., objN]);
console.log(msg[, subst1, ..., substN]);
```

## Parameters

- `obj1` ... `objN`
  - : Uma lista de objetos JavaScript para exibir. A representação por escrito de cada um desses objetos é exibida na ordem com a qual foram inseridos na função.
- `msg`
  - : Uma string JavaScript com zero ou mais substituições.
- `subst1` ... `substN`
  - : Strings ou objetos JavaScript para substituirem as marcações de substituição em `msg`. Estas substituições ocorrem de um para um e na ordem em que são passadas para a console.log.

Veja [Exibindo texto na console](/pt-BR/docs/Web/API/console#outputting_text_to_the_console) na documentação do objeto {{domxref("console")}} para mais detalhes.

## Especificação

Não faz parte de nenhuma especificação.

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- [Opera Dragonfly documentation: Console](https://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Firebug wiki: Console API](https://getfirebug.com/wiki/index.php/Console_API) - Firebug supports additional features in its console.log() implementation, such as [styled logging](http://www.softwareishard.com/blog/firebug/firebug-tip-styled-logging/).
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
