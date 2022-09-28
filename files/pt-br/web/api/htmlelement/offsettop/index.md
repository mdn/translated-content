---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
tags:
  - API
  - ApenasLeitura
  - Propriedade
translation_of: Web/API/HTMLElement/offsetTop
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

## Especificação

| Especificação                                                                                | Status                           | Comentário |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('CSSOM View', '#dom-htmlelement-offsettop', 'offsetTop')}} | {{Spec2('CSSOM View')}} |            |

## Compatibilidade do navegador

{{Compat("api.HTMLElement.offsetTop")}}

Em conformidade com a especificação, essa propriedade retornará `null` no Webkit se o elemento não estiver sendo exibido (o `style.display` desse elemento ou ancestral estiver como `"none"`) ou se o `style.position` do elemento estiver setado como `"fixed"`.

Essa propriedade retornará `null` no Internet Explorer (9) se o `style.position` do elemento estiver setado como `"fixed"`. (Ter `display:none` não afeta esse browser.)
