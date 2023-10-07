---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef("DOM") }}

A propriedade Element.scrollTop obtém ou define o número de pixels quando o conteúdo de um elemento é rolado para baixo. O ScrollTop de um elemento é uma medida da distância do topo de um elemento para o seu conteúdo superior visível. Quando um conteúdo de elemento não gera uma barra de rolagem vertical, então o seu valor será padronizado scrollTop = 0.

## Sintaxe

```
// Obtém o número de pixels rolados
var intElemScrollTop = element.scrollTop;
```

Depois de executar este código, intElemScrollTop é um número inteiro correspondente ao número de pixels que o {{domxref ("elemento")}} conteúdo foi rolado para cima.

```
// Define o número de pixels rolados
element.scrollTop = intValue;
```

`scrollTop` pode ser definido como qualquer valor inteiro, com algumas ressalvas:

- Se o elemento não pode ser rolada (por exemplo, se o elemento é não-rolagem), scrollTop = 0.
- Se for definido como um valor menor do que 0, scrollTop é definido = 0.
- Se for definido como um valor maior do que o máximo que o conteúdo pode ser rolada, scrollTop está definido para o máximo.

## Exemplo

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

![Image:scrollTop.png](/@api/deki/files/842/=ScrollTop.png)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Referências

- [W3C Draft CSSOM View Module](http://dev.w3.org/csswg/cssom-view/#dom-element-scrolltop)
- [MSDN's scrollTop definition](<http://msdn.microsoft.com/en-us/library/ms534618(VS.85).aspx>)
- [MSDN's Measuring Element Dimension and Location](<http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
