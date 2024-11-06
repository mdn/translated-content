---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
---

{{APIRef("Canvas API")}}

A propriedade **`HTMLCanvasElement.height`** é um `inteiro` positivo que reflete o atributo [`height`](/pt-BR/docs/Web/HTML/Element/canvas#height) do elemento HTML {{HTMLElement("canvas")}} interpretado em pixels no CSS. Quando o atributo não é especificado, ou se for definido como um valor inválido, como um `inteiro` negativo, o valor padrão de `150` será usado.

Essa é uma de duas propriedades, que controla o tamanho do canvas, sendo a outra {{domxref("HTMLCanvasElement.width")}}.

## Sintaxe

```
var pxl = canvas.height;
canvas.height = pxl;
```

## Exemplos

Dado este elemento {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Você pode capturar a altura do canvas com o seguinte código:

```js
var canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A interface a define, {{domxref("HTMLCanvasElement")}}.
- Outra propriedade para controlar o tamanho do canvas, {{domxref("HTMLCanvasElement.width")}}.
