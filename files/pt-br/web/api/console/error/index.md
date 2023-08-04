---
title: Console.error()
slug: Web/API/console/error
---

{{APIRef("Console API")}}{{Non-standard_header}}

'_Escreve_' uma mensagem de erro no Web Console.

{{AvailableInWorkers}}

## Sintaxe

```
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
console.exception(obj1 [, obj2, ..., objN]);
console.exception(msg [, subst1, ..., substN]);
```

> **Nota:** `console.exception()` é um alias para `console.error()`; as funcionalidades deles são identicas.

### Parâmetros

- `obj1` ... `objN`
  - : Uma lista de objetos Javascript para serem escritos. As representações String de cada um destes objetos é ligada junto na ordem listada e escrita.
- `msg`
  - : Uma String Javascript contendo zero ou mais Strings de substituição.
- `subst1` ... `substN`
  - : Objetos JavaScript o qual substituirão as Strings no `msg`. Este parâmetro fornece controle adicional sobre o formato de output.

Veja [Outputting text to the console](/pt-BR/docs/Web/API/console#Outputting_text_to_the_console) na documentação de {{domxref("console")}} para mais detalhes.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
