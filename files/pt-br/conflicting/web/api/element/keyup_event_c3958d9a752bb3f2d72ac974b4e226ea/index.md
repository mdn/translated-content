---
title: "Document: keyup event"
slug: conflicting/Web/API/Element/keyup_event_c3958d9a752bb3f2d72ac974b4e226ea
---

{{APIRef}}

O evento **`keyup`** é acionado quando a tecla é liberada.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Cancelável</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler propriedade</th>
      <td>
        {{domxref("GlobalEventHandlers.onkeyup", "onkeyup")}}
      </td>
    </tr>
  </tbody>
</table>

Os eventos {{domxref("Document/keydown_event", "keydown")}} e `keyup` fornecem um código indicando quando a tecla é pressionada, enquanto o {{domxref("Document/keypress_event", "keypress")}} indica quando um _character_ é inserido. Por exemplo, a letra minúscula "a", sera reportado como 65 por `keydown` e `keyup`, mas é 95 por `keypress`. Uma letra maiúscula é reportado como 65 por todos os eventos.

> **Nota:** Se você está procurando por uma maneira de reagir a mudanças no valor de um input, você deve usar o [`input` event](/pt-BR/docs/Web/API/HTMLElement/input_event). Algumas mudanças não são detectaveis por `keyup`, por exemplo, colar um texto de um contexto no input de texto.

## Exemplos

Este exemplo registra o valor {{domxref("KeyboardEvent.code")}} sempre que soltar a tecla.

### addEventListener keyup exemplo

```html
<p>
  Focus the IFrame first (e.g. by clicking in it), then try pressing some keys.
</p>
<p id="log"></p>
```

```js
const log = document.getElementById("log");

document.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_example")}}

### onkeyup equivalent

```js
document.onkeyup = logKey;
```

### Ignorando o keyup durante IME composition

é _Input Method Editor (IME)_ é um programa que permite usuários inserir caracteres que não são suportados pelo teclado usando alguma outra combinação de tecla.

Desde Firefox 65, os eventos {{domxref("Document/keydown_event", "keydown")}} e `keyup` agora são disparados durante IME composition, para melhorar a compatibildiade cross-browser para usuários CJKT [Erro do Firefox 354358](https://bugzil.la/354358). Para ignorar todos eventos `keyup` que são partes do composition, faça algo como isso (229 é um valor especial definido para o `keyCode` relacionando a um evento que sera processado no IME):

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- {{domxref("Document/keydown_event", "keydown")}}
- {{domxref("Document/keypress_event", "keypress")}}
- {{domxref("Element")}}: {{domxref("Element/keyup_event", "keyup")}} event
