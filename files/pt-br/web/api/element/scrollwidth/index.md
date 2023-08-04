---
title: Element.scrollWidth
slug: Web/API/Element/scrollWidth
---

{{ APIRef("DOM") }}

A propriedade de somente leitura **`Element.scrollWidth`** retorna a largura em pixels do conteúdo de um elemento ou a largura do elemento em si, o que for maior. Se o elemento for mais amplo do que a área de conteúdo (por exemplo, se houver barras de rolagem para percorrer o conteúdo), o `scrollWidth` é maior do que o `clientWidth`.

> **Nota:** Esta propriedade irá arredondar o valor para um número inteiro. Se você precisar de um valor fracionário, use {{ domxref("element.getBoundingClientRect()") }}.

## Syntaxe

```
var xScrollWidth = element.scrollWidth;
```

_xScrollWidth_ é a largura do conteúdo do _elemento_ em pixels.

## Exemplo

```html
<!doctype html>
<html>
  <head>
    <title>Example</title>
    <style>
      div {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #aDiv {
        width: 100px;
      }

      button {
        margin-bottom: 2em;
      }
    </style>
  </head>

  <body>
    <div id="aDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="aButton">Check for overflow</button>

    <div id="anotherDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="anotherButton">Check for overflow</button>
  </body>
  <script>
    var buttonOne = document.getElementById("aButton"),
      buttonTwo = document.getElementById("anotherButton"),
      divOne = document.getElementById("aDiv"),
      divTwo = document.getElementById("anotherDiv");

    //check to determine if an overflow is happening
    function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
    }

    function alertOverflow(element) {
      if (isOverflowing(element)) {
        alert("Contents are overflowing the container.");
      } else {
        alert("No overflows!");
      }
    }

    buttonOne.addEventListener("click", function () {
      alertOverflow(divOne);
    });

    buttonTwo.addEventListener("click", function () {
      alertOverflow(divTwo);
    });
  </script>
</html>
```

## Especificação

| Especificação                                                                 | Status                  | Comentário        |
| ----------------------------------------------------------------------------- | ----------------------- | ----------------- |
| {{SpecName("CSSOM View", "#dom-element-scrollwidth", "Element.scrollWidth")}} | {{Spec2("CSSOM View")}} | Definição inicial |

## Referências

{{Compat("api.Element.scrollWidth")}}

## Veja também

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determinando as dimensões dos elementos](/pt-BR/docs/Determining_the_dimensions_of_elements)
