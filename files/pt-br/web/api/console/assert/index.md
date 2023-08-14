---
title: Console.assert()
slug: Web/API/console/assert
---

{{APIRef("Console API")}}

Escreve uma mensagem de erro para o console se a afirmação é falsa. Se a firmação é verdadeira, nada acontece.

{{AvailableInWorkers}}

> **Nota:** _O método `console.assert()` é implementado de forma diferente em Node.js._
> Especificamente, em navegadores, chamando o método console.assert() com uma afirmação falsa fará com que a mensagem a ser impressa para o console não interrompa a execução do código subsequente. Em Node.js, no entanto, uma afirmação falsa causará um _AssertionError._

## Sintaxe

```
console.assert(afirmação, obj1 [, obj2, ..., objN]);
console.assert(afirmação, msg [, subst1, ..., substN]); // c-mensagem de formatação
```

### Parâmetros

- `afirmação`
  - : Qualquer expressão booleana. Se a afirmação é falsa, a mensagem é impressa no console.
- `obj1` ... `objN`
  - : Uma lista de objetos JavaScript para escrever. As representações de strings de cada um desses objetos são acrescentados juntos na ordem dada e saída.
- `msg`
  - : Uma String que contém zero ou mais seguências de substituição.
- `subst1` ... `substN`
  - : Objetos JavaScript com qual as strings de substituição `msg` serão substituidas. Isto dá um contriole adicional sobre a mensagem que será escrita.

Ver [Outputting text to the console](/pt-BR/docs/Web/API/console#Outputting_text_to_the_console) na documentação do {{domxref("console")}} para mais detalhes.

**Especificações**

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- [WHATWG Console Standard: console.assert](https://console.spec.whatwg.org/#assert-condition-data)
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developer.chrome.com/devtools/docs/console#assertions)
