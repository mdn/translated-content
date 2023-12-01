---
title: Document.hasFocus()
slug: Web/API/Document/hasFocus
---

{{APIRef}}O método **`Document.hasFocus()`** retorna um valor {{jsxref("Boolean")}} que indica se o documento ou qualquer elemento dentro do documento está com o foco ativo. Este método pode ser usado para determinar se o elemento ativo em um documento tem foco.

> **Nota:** Quando se está visualizando um documento, um elemento com focus é sempre o ativo no mesmo, mas um elemento ativo não necessariamente tem o foco. Por exemplo, um elemento ativo com uma janela (popup) que não é a principal não tem foco.

## Sintaxe

```
focused = document.hasFocus();
```

### Valor retornado

`false` se o elemento ativo no documento não tem foco; `true` se o elemento ativo no documento tem foco.

## Exemplo

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TEST</title>
    <style>
      #message {
        font-weight: bold;
      }
    </style>
    <script>
      setInterval( checkPageFocus, 200 );

      function checkPageFocus() {
        var info = document.getElementById("message");

        if ( document.hasFocus() ) {
          info.innerHTML = "O documento tem o foco.";
        } else {
          info.innerHTML = "O documento não tem o foco.";
        }
      }

      function openWindow() {
        window.open (
          "http://developer.mozilla.org/",
          "mozdev",
          "width=640,
          height=300,
          left=150,
          top=260"
        );
      }
    </script>
  </head>
  <body>
    <h1>Exemplo do JavaScript hasFocus</h1>
    <div id="message">Esperando por ação do usuário</div>
    <div><button onclick="openWindow()">Abre uma nova janela</button></div>
  </body>
</html>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando a API de Page Visibility](/pt-BR/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)
