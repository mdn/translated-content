---
title: Document.activeElement
slug: Web/API/Document/activeElement
---

{{APIRef("DOM")}}

Retorna o {{ domxref("Element", "elemento") }} atualmente em foco, ou seja, o elemento que receberá os eventos do teclado caso o usuário digite algo. Esse atributo é somente-leitura.

Geralmente retorna um {{ HTMLElement("input") }} ou {{ HTMLElement("textarea") }}, caso esteja com uma seleção de texto ativa. Caso esteja, pode obter mais informações sobre a seleção utilizando as propriedades `selectionStart` e `selectionEnd`. Caso o elemento em foco seja um {{ HTMLElement("select") }}(menu) ou {{ HTMLElement("input") }} do tipo `button`, `checkbox` ou `radio`.

> **Nota:** No Mac, elementos que nao sejam campos de texto geralmente não recebem foco.

Normalmente o usuário pode navegar entre os elementos que pode receber foco na página com o uso da tecla `tab` e ativar estes elementos com a tecla `espaço` (apertar um botão ou selecionar uma opção).

Não confunda foco com uma seleção de texto no documento, que consiste em sua maioria de nódos de texto estáticos. Veja {{ domxref("window.getSelection()") }}.

Quando não há nada selecionado, o `activeElement` da página é o {{ HTMLElement("body") }} ou `null`.

> **Nota:** Este atributo é parte da seção "Em desenvolvimento" da especificação do HTML 5.

## Sintaxe

```
var curElement = document.activeElement;
```

## Exemplo

```html
<!doctype html>
<html>
  <head>
    <script type="text/javascript" charset="utf-8">
      function init() {
        function onMouseUp(e) {
          console.log(e);
          var outputElement = document.getElementById("output-element");
          var outputText = document.getElementById("output-text");
          var selectedTextArea = document.activeElement;
          var selection = selectedTextArea.value.substring(
            selectedTextArea.selectionStart,
            selectedTextArea.selectionEnd,
          );
          outputElement.innerHTML = selectedTextArea.id;
          outputText.innerHTML = selection;
        }

        document
          .getElementById("ta-example-one")
          .addEventListener("mouseup", onMouseUp, false);
        document
          .getElementById("ta-example-two")
          .addEventListener("mouseup", onMouseUp, false);
      }
    </script>
  </head>
  <body onload="init()">
    <div>Select some text from one of the Textareas below:</div>
    <form id="frm-example" action="#" accept-charset="utf-8">
      <textarea name="ta-example-one" id="ta-example-one" rows="8" cols="40">
This is Textarea Example One:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.
</textarea
      >
      <textarea name="ta-example-two" id="ta-example-two" rows="8" cols="40">
This is Textarea Example Two:
Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.
</textarea
      >
    </form>
    Active Element Id: <span id="output-element"></span><br />
    Selected Text: <span id="output-text"></span>
  </body>
</html>
```

[View on JSFiddle](https://jsfiddle.net/w9gFj)

## Notas

Originalmente apresentada como extensão DOM proprietária no Internet Explorer 4, esta propriedade também é suportada no Opera e Safari (versão 4 ou maior)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Eventos relacionados

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
