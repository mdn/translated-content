---
title: HTMLInputElement.setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
---

{{APIRef("HTML DOM")}}

O método**`HTMLInputElement.setSelectionRange()`** define as posições inicial e final da seleção atual do texto em um elemento {{HTMLElement("input")}}.

Opcionalmente, em navegadores mais novos, você pode especificar a direção na qual a seleção deve ser feita; isso permite a você indicar, por exemplo, que a seleção foi feita como se o usuário tivesse clicado no fim do texto selecionado e arrastado em direção ao início.

Esse método atualiza ao mesmo tempo `HTMLInputElement.selectionStart`, `selectionEnd`, and `selectionDirection`.

## Syntax

```
inputElement.setSelectionRange(selectionStart, selectionEnd, [optional] selectionDirection);
```

### Parameters

- _selectionStart_
  - : The 0-based index of the first selected character.
- _selectionEnd_
  - : The 0-based index of the character _after_ the last selected character.
- _selectionDirection_ {{optional_inline}}
  - : A string indicating the direction in which the selection is performed. This string can be "forward" or "backward", or "none" if the direction is unknown or irrelevant.

## Example

The following code:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JS Bin</title>
    <script>
      function SelectText() {
        var input = document.getElementById("mytextbox");
        input.focus();
        input.setSelectionRange(2, 5);
      }
    </script>
  </head>
  <body>
    <p><input type="text" id="mytextbox" size="20" value="Mozilla" /></p>
    <p><button onclick="SelectText()">Select text</button></p>
  </body>
</html>
```

will produce the following:

![example.png](/@api/deki/files/6104/=example.png)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
