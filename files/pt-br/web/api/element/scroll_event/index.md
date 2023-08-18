---
title: GlobalEventHandlers.onscroll
slug: Web/API/Element/scroll_event
---

{{ApiRef("HTML DOM")}}

A propriedade **`onscroll`** do {{domxref("GlobalEventHandlers")}} é uma mistura de eventos {{event("Event_handlers", "event handler")}} que processam eventos `scroll`.

O evento `scroll` é disparado quando uma visão do documento ou um elemento foi rolado, seja por um usuário, uma [API Web](/pt-BR/docs/Web/API), ou o {{glossary("user agent")}}.

> **Nota:** Não confunda `onscroll` com {{domxref("GlobalEventHandlers.onwheel", "onwheel")}}: `onwheel` manipula a rotação da roda do mouse, enquanto `onscroll` manipula rolagem do conteúdo do objeto.

## Sintaxe

```
target.onscroll = functionRef;
```

### Valor

`functionRef` é o nome de uma função ou uma [expressão de função](/pt-BR/docs/Web/JavaScript/Reference/Operators/function). A função recebe um {{domxref("UIEvent")}} objeto com um único argumento.

Apenas um manipulador `onscroll` pode ser associado à um objeto por vez. Para uma maior flexibilidade, você pode passar um {{event("scroll")}} evento para o {{domxref("EventTarget.addEventListener()")}} metódo ao invés disso.

## Exemplo

Este exemplo monitora rolagens sobre o elemento {{HtmlElement("textarea")}}, e registra a posição vertical adequadamente.

### HTML

```html
<textarea>1 2 3 4 5 6 7 8 9</textarea>
<p id="log"></p>
```

### CSS

```css
textarea {
  width: 4rem;
  height: 8rem;
  font-size: 3rem;
}
```

### JavaScript

```js
const textarea = document.querySelector("textarea");
const log = document.getElementById("log");

textarea.onscroll = logScroll;

function logScroll(e) {
  log.textContent = `Posição do scroll: ${e.target.scrollTop}`;
}
```

### Resultado

{{EmbedLiveSample("Exemplo", 700, 200)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Document: evento `scroll`](/pt-BR/docs/Web/API/Document/scroll_event)
- [Element: evento `scroll`](/pt-BR/docs/Web/API/Element/scroll_event)
