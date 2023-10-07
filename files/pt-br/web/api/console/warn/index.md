---
title: Console.warn()
slug: Web/API/console/warn
---

{{APIRef("Console API")}}{{non-standard_header}}

Escreve uma mensagem de alerta no Console Web.

{{AvailableInWorkers}}

> **Nota:** No Firefox, warnings têm um pequeno icone de ponto de exclamação perto deles no log do Console Web.

## Sintaxe

```
console.warn(obj1 [, obj2, ..., objN]);
console.warn(msg [, subst1, ..., substN]);
```

## Parâmetros

- `obj1` ... `objN`
  - : Uma lista de objetos JavaScript para escrever. A representação String de cada um destes objetos é ligada junto na ordem listada e escrita.
- `msg`
  - : Uma string JavaScript contendo zero ou mais strings de substituição.
- `subst1` ... `substN`
  - : Objetos JavaScript com qual as strings de substituição `msg` serão substituidas. Isto dá um contriole adicional sobre a mensagem que será escrita.

Ver [Outputting text to the console](/pt-BR/docs/Web/API/console#Outputting_text_to_the_console) na documentação do {{domxref("console")}} para mais detalhes.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
