---
title: ::first-letter (:first-letter)
slug: Web/CSS/::first-letter
---

{{ CSSRef() }}

## Sumário

O [pseudo-elemento](/pt-BR/docs/Web/CSS/Pseudo-elements) [CSS](/pt-BR/docs/Web/CSS) `::first-letter` seleciona a primeira letra da primeira linha de um bloco, desde que não seja precedida por outro conteúdo (como imagens ou tabelas embutidas/inline) na mesma linha.

A primeira letra de um elemento não é necessariamente uma identificação trivial:

- Pontuação, que é qualquer caractere definido em Unicode de abertura (Ps), de fechamento (Pe), aspa inicial (Pi), aspa final (Pf) e outras pontuações (Po), precedendo ou imediatamente após a primeira letra também é correspondida por esse pseudo-elemento.
- Da mesma forma, alguns idiomas têm dígitos que são sempre escritos em maiúsculas, como o IJ em holandês. Nesses casos raros, as duas letras do dígrafo devem corresponder ao pseudo-elemento `::first-letter`. (Isso é pouco suportado pelos navegadores, verifique [a tabela de compatibilidade](#compatibilidade_de_navegadores)).
- Finalmente, uma combinação do pseudoelemento {{cssxref ("::before")}} e a propriedade {{cssxref ("content")}} podem injetar algum texto no início do elemento. Nesse caso, `::first-letter` corresponderá à primeira letra deste conteúdo gerado.

Uma primeira linha tem apenas significado em uma caixa de contêiner de bloco; portanto, o pseudo-elemento `::first-letter` apenas afeta os elementos com um valor de {{cssxref ("display")}} de `block`, `inline-block`, `table-cell`, `list-item` ou `table-caption`. Em todos os outros casos, `::first-letter` não tem efeito.

Somente um pequeno subconjunto de todas as propriedades CSS pode ser usado dentro de um bloco de declaração de um conjunto de regras CSS que contém um seletor usando o pseudoelemento `::first-letter`:

- Todas as propriedades de fonts : {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} and {{ Cssxref("font-family") }}.
- Todas as propriededas de background : {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, and {{cssxref("background-blend-mode")}}.
- Todas as propriedades de margem: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}.
- Todas as propriedades de "padding" (preenchimento): {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}.
- Todas as bordas: the taquigraficas {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, e as propriedades manuscritas.
- A propriedade {{ cssxref("color") }}.
- As propriedades CSS: {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (somente se `float` for `none`).

Como toda essa lista será estendida no futuro, é recomendado que você não use qualquer propriedade dentro da declaração do bloco, afim de manter o CSS a qualquer prova.

> [!NOTE]
> No CSS 2, os pseudoelementos eram prefixados com um caractere de dois pontos (`:`). Como as pseudo-classes também estavam seguindo a mesma convenção, elas eram indistinguíveis. Para resolver isso, o CSS 2.1 mudou a convenção para pseudoelementos. Agora, um pseudoelemento é prefixado com dois caracteres de dois pontos (`::`) e uma pseudo-classe ainda é prefixado com um único dois pontos (`:`).
>
> Exemplo de **pseudoclasse**:
> `.classedoelemento:hover { ... }`
>
> Exemplo de **pesudoelemento:** > `.classedoelemento::first-letter { ... }`
>
> Como vários navegadores já implementaram a versão CSS 2 em uma versão de lançamento, todos os navegadores que suportam a sintaxe de dois pontos também suportam a antiga sintaxe de dois pontos.
>
> > [!WARNING]
> > Mas isso pode mudar, portanto use SEMPRE `::` para pseudolementos
> >
> > ...a não se que você **precise muito** que seu código seja compatível com Internet Explore 8, então use um carectere de dois pontos.

## Exemplo

```css
/* Fazendo odas as letras dos paragrados maior e vermelha */

p::first-letter {
  /* Use :first-letter if você precise muito de compatibilidade com IE 8 */
  color: red;
  font-size: 130%;
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O peseudo-elemento {{cssxref("::first-line")}} .
