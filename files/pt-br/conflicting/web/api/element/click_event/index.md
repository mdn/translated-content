---
title: GlobalEventHandlers.onclick
slug: conflicting/Web/API/Element/click_event
---

{{ ApiRef("HTML DOM") }}

A propriedade **`onclick`** do mixin {{domxref("GlobalEventHandlers")}} é o [`event handler`](/pt-BR/docs/Web/Events/Event_handlers) para o processamento de eventos de [`click`](/pt-BR/docs/Web/API/Element/click_event) em um dado elemento.

O evento `click` acontece quando o usuário clica em um elemento. É disparado após os eventos [`mousedown`](/pt-BR/docs/Web/API/Element/mousedown_event) e[`mouseup`](/pt-BR/docs/Web/API/Element/mouseup_event) na respectiva ordem.

> [!NOTE]
> Ao usar o evento `click` para disparar uma ação, considere também adicionar essa mesma ação ao evento [`keydown`](/pt-BR/docs/Web/API/Element/keydown_event), para permitir o uso dessa mesma ação a pessoas que não usam um mouse ou uma touchscreen.

## Sintaxe

```
elemento.onclick = refDeFuncao;
```

### Value

`refDeFuncao` é o nome de uma função ou uma [expressão de função](/pt-BR/docs/Web/JavaScript/Reference/Operators/function). Essa função recebe um objeto {{domxref("MouseEvent")}} como único argumento. Dentro da função, [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) será o elemento de qual o evento foi disparado.

Apenas um manipulador `onclick` pode estar associado a um objeto em um momento. Em vez disso, você talvez prefira usar o método {{domxref("EventTarget.addEventListener()")}}, já que ele é mais flexível.

## Exemplo

Esse evento registra a posição dos cliques.

### HTML

```html
<p>Clique em qualquer lugar nesse exemplo.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Posição: (${e.clientX}, ${e.clientY})`;
}
```

### Result

{{EmbedLiveSample("Exemplo")}}

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [`click`](/pt-BR/docs/Web/API/Element/click_event) event
- Manipuladores de evento relacionados:

  - {{domxref("GlobalEventHandlers.onauxclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
