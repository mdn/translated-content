---
title: MouseEvent.clientX
slug: Web/API/MouseEvent/clientX
---

{{APIRef("DOM Events")}}

O **`clientX`** é uma propriedade somente de leitura da interface {{domxref("MouseEvent")}} que fornece as coordenadas horizontais dentro da área do aplicativo do cliente em que o evento ocorreu (diferente das coordenadas dentro da página). Por exemplo, clicando no canto superior esquerdo da área do cliente sempre irá resultar em um evento de mouse com um valor `clientX` de 0, independentemente se a página foi rolada horizontalmente. Originalmente, essa propriedade era definida como o número inteiro `long`. O Módulo de Visualização CSSOM o redefiniu como a fração`double`. Veja a seção de compatibilidade do Navegador para detalhes.

## Sintaxe

```
var x = instanceOfMouseEvent.clientX
```

### Valor de retorno

Um número

## Exemplo

```html
<!doctype html>
<html>
  <head>
    <title>clientX/clientY example</title>

    <script>
      function showCoords(evt) {
        alert(
          "clientX value: " +
            evt.clientX +
            "\n" +
            "clientY value: " +
            evt.clientY +
            "\n",
        );
      }
    </script>
  </head>
  <body onmousedown="showCoords(event)">
    <p>Para mostrar as coordenadas do mouse em qualquer lugar da página.</p>
  </body>
</html>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
