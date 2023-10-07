---
title: HTMLElement.blur()
slug: orphaned/Web/API/HTMLOrForeignElement/blur
---

{{ APIRef("HTML DOM") }}

O método **`HTMLElement.blur()`** remove o foco do teclado no elemento corrente.

## Sintaxe

```
elemento.blur();
```

## Exemplos

### Removendo o foco de um input de texto

#### HTML

```html
<input type="text" id="meuTexto" value="Texto Exemplo">
<br><br>
<button type="button" onclick="focusInput()">Clique para definir o foco</button>
<button type="button" onclick="blurInput()">Clique para remover o foco</button>
```

#### JavaScript

```js
function focusInput() {
  document.getElementById('meuTexto').focus();
}
function blurInput() {
  document.getElementById('meuTexto').blur();
}
```

#### Resultado

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## Especificação

| Especificação                                                                    | Status                           | Comentário |
| -------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'editing.html#dom-blur', 'blur')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5.1', 'editing.html#blur()-0', 'blur')}}     | {{Spec2('HTML5.1')}}     |            |
| {{SpecName('HTML5 W3C', 'editing.html#dom-blur', 'blur')}}     | {{Spec2('HTML5 W3C')}}     |            |
| {{SpecName('DOM2 HTML', 'html.html#ID-28216144', 'blur')}}     | {{Spec2('DOM2 HTML')}}     |            |

## Compatibilidade com navegadores

{{Compat("api.HTMLElement.blur")}}

## Veja também

- Método DOM {{domxref("HTMLElement.focus()")}}
