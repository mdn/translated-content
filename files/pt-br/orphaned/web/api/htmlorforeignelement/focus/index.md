---
title: HTMLElement.focus()
slug: orphaned/Web/API/HTMLOrForeignElement/focus
---

{{ APIRef("HTML DOM") }}

O método **`HTMLElement.focus()`** seta o foco em um determinado elemento em especifico, caso esse elemento permita ter o foco neste elemento.

## Síntaxe

```
element.focus()
```

## Especificação

| Especificação                                                                            | Status                           | Comentário |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'editing.html#dom-focus', 'focus')}}     | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5.1', 'editing.html#focus()-0', 'focus')}}             | {{Spec2('HTML5.1')}}     |            |
| {{SpecName('HTML5 W3C', 'editing.html#dom-focus', 'focus')}}         | {{Spec2('HTML5 W3C')}}     |            |
| {{SpecName('DOM2 HTML', 'html.html#ID-32130014', 'focus')}}         | {{Spec2('DOM2 HTML')}}     |            |
| {{SpecName('DOM1', 'level-one-html.html#method-focus', 'focus')}} | {{Spec2('DOM1')}}         |            |

## Notas

Caso você utilize o `HTMLElement.focus()` por meio da manipulação de um evento mousedown , você deve utilizar o evento `event.preventDefault()` a fim de o foco não sair do arquivo `HTMLElement`.

## Veja também

- Método DOM {{domxref("HTMLElement.blur()")}} para remover o foco de um determinado elemento.
- {{ domxref("document.activeElement") }} para saber qual elemento do html que está com o foco.
