---
title: blur (evento)
slug: Web/API/Element/blur_event
---

O evento `blur` é acionado quando um elemento perde foco. A diferença principal entre este evento e [`focusout`](/pt-BR/docs/Web/API/Element/focusout_event) é que apenas o segundo 'borbulha'.

## Informação geral

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur)
- Interface
  - : {{domxref("FocusEvent")}}
- Borbulha
  - : Não
- Cancelável
  - : Não
- Alvo
  - : Elemento
- Ação padrão
  - : Nenhuma

> [!NOTE]
> O valor de {{domxref("Document.activeElement")}} varia entre navegadores enquanto este evento é processado ([Erro do Firefox 452307](https://bugzil.la/452307)): O IE10 define-o para o elemento para onde o foco moverá, enquanto Firefox e Chrome muitas vezes definem-o para o `body` do documento.

## Propriedades

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target (DOM element)                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | null                                       |

## Delegação do evento

Existem duas maneiras de implementar a delegação de eventos para este evento: usando o evento `focusout` nos navegadores que suportam-o, ou definindo o parâmetro "useCapture" do [`addEventListener`](/pt-BR/docs/Web/API/EventTarget/addEventListener) para `true`:

### Conteúdo HTML

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

### Conteúdo JavaScript

```js
var form = document.getElementById("form");
form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
  },
  true,
);
form.addEventListener(
  "blur",
  function (event) {
    event.target.style.background = "";
  },
  true,
);
```

{{EmbedLiveSample('Event_delegation')}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Eventos relacionados

- [`focus`](/pt-BR/docs/Web/API/Element/focus_event)
- [`blur`](/pt-BR/docs/Web/API/Element/blur_event)
- [`focusin`](/pt-BR/docs/Web/API/Element/focusin_event)
- [`focusout`](/pt-BR/docs/Web/API/Element/focusout_event)
