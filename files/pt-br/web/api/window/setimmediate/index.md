---
title: Window.setImmediate()
slug: Web/API/Window/setImmediate
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}

Esse método é usado para interromper operações de longa duração e executar uma função de retorno de chamada imediatamente após o navegador ter concluído outras operações, como eventos e atualizações de exibição.

> [!NOTE]
> Não se espera que este método se torne padrão, e é implementado somente por compilações recentes do Internet Explorer e Node.js 0.10+. Existem resistencias de ambos [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201) (Firefox) e [Webkit](https://code.google.com/p/chromium/issues/detail?id=146172) (Google/Apple).

## Sintaxe

```
var immediateID = setImmediate(func, [param1, param2, ...]);
var immediateID = setImmediate(func);
```

- onde `immediateID` é o ID da immediate que poderá ser usado depois com {{ domxref("window.clearImmediate") }}.
- `func` é a função que será executada.

Todos parametros serão passados diretamente para sua função .

## Notas

O método {{ domxref("window.clearImmediate") }} pode ser usado para limpar as ações immediate, como por exemplo {{ domxref("window.clearTimeout") }} para {{ domxref("window.setTimeout") }}.

Esse método pode ser usado ao invés de `setTimeout(fn, 0)`, para executar [operações pesadas](https://www.nczonline.net/blog/2009/08/11/timed-array-processing-in-javascript/).

Essa função pode ser emulada de algumas maneiras:

- {{ domxref("window.postMessage") }} pode ser usada para disparar um immediate mas produzindo um callback. Tenha em mente que o Internet Explorer 8 inclui uma versão síncrona do postMessage, que não deverá ser usado como alternativa.
- [MessageChannel](/pt-BR/docs/Web/API/MessageChannel) pode ser usado com confiança dentro de Web Workers onde a semantica do postMessage significa que não pode ser usado lá.
- `setTimeout(fn, 0)`_pode_ ser usado potencialmente, no entanto, como é apertado em 4ms para temporizadores aninhados com mais de 5 profundidades [por especificação HTML](https://html.spec.whatwg.org/multipage/webappapis.html#timers), não faz para um polifil adequado para o imediatismo natural de setImmediate.

Todas essas técnicas são incorporadas em um [setImmediate polyfill](https://github.com/NobleJS/setImmediate).

## Especificação

Não faz parte de denhuma especificação.

## Compatibilidade com navegadores

{{Compat}}

## Ver também

{{ domxref("window.clearImmediate") }}

[Microsoft setImmediate API Demo](http://ie.microsoft.com/testdrive/Performance/setImmediateSorting/Default.html)
