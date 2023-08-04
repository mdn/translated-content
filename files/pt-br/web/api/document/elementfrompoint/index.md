---
title: Document.elementFromPoint()
slug: Web/API/Document/elementFromPoint
---

{{APIRef("DOM")}}

O método **`elementFromPoint()`** da interface {{domxref("Document")}} retorna o elemento de maior nível nas coordenadas especificadas.

Se o elemento no ponto especificado pertencer à outro documento (por exemplo, um subdocumento em um iframe), será retornado o pai do subdocumento (o próprio iframe). Se o elemento em determinado ponto for anônimo ou for um conteudo gerado por XBL, como por exemplo barras de scroll de caixas de texto, então será retornado o primeiro elemento pai, não-anônimo (por exemplo, a própria caixa de texto).

Se o ponto especificado estiver fora dos limites visíveis do documento ou tiver uma coordenada negativa, o resultado é `null`.

Se você precisa encontrar uma posição específica dentro do elemento, use {{domxref("Document.caretPositionFromPoint()")}}.

> **Nota:** Chamados por documentos XUL devem esperar até o evento `onload` ser acionado antes de chamar este método.

## Sintaxe

```
var element = document.elementFromPoint(x, y);
```

### Parâmetros

- x
  - : Uma posição horizontal dentro do viewport atual.
- y
  - : Uma position vertical dentro do viewport atual.

### Valor retornado

O objeto de nível mais alto {{domxref("Element")}} dentro das coordenadas declaradas.

## Exemplo

```html
<!doctype html>
<html lang="en">
  <head>
    <title>exemplo de elementFromPoint</title>

    <script>
      function changeColor(newColor) {
        elem = document.elementFromPoint(2, 2);
        elem.style.color = newColor;
      }
    </script>
  </head>

  <body>
    <p id="para1">Algum texto aqui</p>
    <button onclick="changeColor('blue');">azul</button>
    <button onclick="changeColor('red');">vermelho</button>
  </body>
</html>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
