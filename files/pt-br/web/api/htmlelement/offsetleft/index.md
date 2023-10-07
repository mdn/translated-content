---
title: HTMLElement.offsetLeft
slug: Web/API/HTMLElement/offsetLeft
---

{{ APIRef("HTML DOM") }}

O **`HTMLElement.offsetLeft`** é um método apenas de leitura que retorna a medida, em pixels, da distância do canto superior esquerdo do elemento atual para o nó {{domxref("HTMLElement.offsetParent")}}.

Para elementos "block-level", que ocupam todo o espaço do elemento pai, o `offsetTop`, `offsetLeft`, `offsetWidth`, e `offsetHeight` representam a borda de um elemento relativo ao `offsetParent`.

Entretando, para elementos "inline-level" (como o **span**) que podem envolver de uma linha para outra, o `offsetTop` e `offsetLeft` representam a posição da primeira borda (use {{domxref("Element.getClientRects()")}} para retornar a largura e altura), enquanto `offsetWidth` e `offsetHeight` representam as dimensões do bloco delimitador (use {{domxref("Element.getBoundingClientRect()")}} pra retornar sua posição). Portanto, um bloco que possua um left, top, widht ou height do `offsetLeft, offsetTop, offsetWidth` e `offsetHeight` não será um delimitador para um span com texto envolvido.

## Sintaxe

```
left = element.offsetLeft;
```

`left` é um número inteiro representando o deslocamento para esquerda, em pixels, do elemento pai mais próximo posicionado com relative.

## Exemplo

```
var colorTable = document.getElementById("t1");
var tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // deslocamento à esquerda maior que 5: faça alguma coisa
}
```

Esse exemplo mostra uma frase 'longa' envolvida por uma div com uma borda azul, e uma caixa vermelha que deveria delimitar o span.

![Image:offsetLeft.jpg](/@api/deki/files/790/=OffsetLeft.jpg)

```
<div style="width: 300px; border-color:blue;
  border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="long">Long span that wraps within this div.</span>
</div>

<div id="box" style="position: absolute; border-color: red;
  border-width: 1; border-style: solid; z-index: 10">
</div>

<script>
  var box = document.getElementById("box");
  var long = document.getElementById("long");
  box.style.left = long.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = long.offsetTop + document.body.scrollTop + "px";
  box.style.width = long.offsetWidth + "px";
  box.style.height = long.offsetHeight + "px";
</script>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
