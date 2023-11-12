---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
---

{{ APIRef("DOM") }}

A propriedade **Element.scrollLeft** obtem, ou define o número de pixels do contéudo de um elemento que é rolado para a esquerda.

Note que se os {{cssxref("direction")}} do elemento do elemento é rtl (direita-para-esquerda) então `scrollLeft` é `0` quando a barra de rolagem está na posição mais à direita (o início do conteúdo rolado) e então, fica cada vez mais negativa à medida que se desloca em direção ao fim do conteúdo.

## Sintaxe

```
// Obtem o número de pixels rolado
var sLeft = element.scrollLeft;
```

_sLeft_ é um inteiro representando o número de pixels do _elemento_ que foi movido para a esquerda.

```
// Define o número de pixels rolado
element.scrollLeft = 10;
```

`scrollLeft` pode ser definido para qualquer valor inteiro, entretanto:

- Se o elemento não pode ser rolado (ex.: ele é no overflow), `scrollLeft` é definido para 0.
- Se definido um valor menor que 0 (maior que 0 para elementos direita-para-esquerda), `scrollLeft` é definido para 0.
- Se o definido um valor maior que o máximo, que o conteúdo pode ser rolado, é`scrollLeft` é definido para o valor máximo.

## Exemplo

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      #container {
        border: 1px solid #ccc;
        height: 100px;
        overflow: scroll;
        width: 100px;
      }
      #content {
        background-color: #ccc;
        width: 250px;
      }
    </style>
    <script>
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          var button = document.getElementById("slide");
          button.onclick = function () {
            document.getElementById("container").scrollLeft += 20;
          };
        },
        false,
      );
    </script>
  </head>
  <body>
    <div id="container">
      <div id="content">Lorem ipsum dolor sit amet.</div>
    </div>
    <button id="slide" type="button">Slide</button>
  </body>
</html>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
