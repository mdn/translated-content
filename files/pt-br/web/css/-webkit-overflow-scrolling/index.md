---
title: "-webkit-overflow-scrolling"
slug: Web/CSS/-webkit-overflow-scrolling
---

{{CSSRef}}{{Non-standard_header}}

## Resumo

A propriedade CSS `-webkit-overflow-scrolling` controla quando dispositivos com a funcionalidade de toque na tela usam uma rolagem baseada no "momentum" de um dado elemento.

{{cssinfo}}

## Valores

- `auto`
  - : Usa a rolagem "regular", onde o conteúdo imediatamente cessa a rolagem quando você remove o dedo da tela que reconhece os toques.
- `touch`
  - : Usa a rolagem baseada em "momentos", onde o conteúdo continua a rolar por um momento depois do gesto de rolagem ter sido finalizado quando o usuário deixar de tocar com o dedo na tela. A velocidade e duração da rolagem contínua é proporcional ao quão vigoroso a rolagem. Também cria um novo contexto estagnado.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
-webkit-overflow-scrolling: touch; /* deixa a rolagem suave */

-webkit-overflow-scrolling: auto; /* pare de rolar imediatamente */
```

## Especificações

Não faz parte de nenhuma especificação. A Apple tem [uma descrição na referência de CSS do Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling).

## Compatibilidade do navegador

{{Compat("css.properties.-webkit-overflow-scrolling")}}

## Veja também

- [Artigo do CSS-Tricks com demo](http://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
