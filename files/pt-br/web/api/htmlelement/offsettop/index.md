---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
---

{{ APIRef("HTML DOM") }}

O **`HTMLElement.offsetTop`** é um método apenas de leitura que retorna a medida, em pixels, da distância do elemento atual em relação ao topo do {{domxref("HTMLelement.offsetParent","offsetParent")}}.

## Sintaxe

```
topPos = element.offsetTop;
```

### Parâmetros

- `topPos` é o número, em pixels, que representa a distância do elemento para o topo do elemento pai mais próximo posicionado com relative.

## Exemplo

```js
var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos > 10) {
  // deslocamento em relação ao topo maior
  // que 10pixels do topo
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
