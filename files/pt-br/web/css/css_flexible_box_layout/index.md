---
title: CSS Flexible Box Layout
slug: Web/CSS/CSS_Flexible_Box_Layout
tags:
  - CSS
  - CSS Flexible Boxes
  - Guia
  - Visão Geral
  - Referência
  - flexbox
---
{{CSSRef}}

**CSS Flexible Box Layout** é um módulo do [CSS](/pt-BR/docs/Web/CSS) que define um layout multicoluna otimizado para o design de interfaces de usuário, para isso busca lidar com o layout dos itens de maneira unidimensional. No modelo de layout do Flexbox, os filhos de um contêiner flex podem ser dispostos em qualquer direção, e podem "flexibilizar" seus tamanhos, crescendo para preencher o espaço vazio ou diminuindo para evitar o transbordamento do elemento pai. O alinhamento horizontal e vertical dos filhos podem ser facilmente manipulados.

## Exemplo Básico

No exemplo a seguir um contêiner foi definido como `display: flex`, o que significa que os três items filhos dele se tornaram flex. O valor de `justify-content` foi definido como `space-between` para espaçar os itens uniformemente no eixo principal. Uma quantidade igual de espaço é colocada entre cada item com a esquerda e direita dos itens sendo niveladas com as bordas do contêiner flex. Você também pode perceber que os items estão alongados no eixo transversal, isso acontece por causa do valor padrão de `align-items` ser `stretch`(esticar). Os itens se estendem até a altura do contêiner flex, fazendo com que eles sejam tão altos quanto o item mais alto.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 600)}}

## Referência

### Propriedades CSS

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### Propriedades de Alinhamento

A propriedade `align-content`, `align-self`, `align-items` e `justify-content` apareceram inicialmente na especificação do Flexbox, mas agora estão definidas em Box Alignment. As especificações do Flexbox agora referência a especificação do Box Alignment para definições atualizadas. Propriedades de alinhamento adicional agora também são definidas em Box Alignment.

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Entradas do glossário

- {{Glossary("Flexbox", "", 1)}}
- {{Glossary("Flex Container", "", 1)}}
- {{Glossary("Flex Item", "", 1)}}
- {{Glossary("Main Axis", "", 1)}}
- {{Glossary("Cross Axis", "", 1)}}
- {{Glossary("Flex", "", 1)}}

## Guia

- [Conceitos básicos de flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
  - : Uma visão geral sobre as funcionalidades do Flexbox
- [Relação entre o Flexbox e os outros métodos de layout](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : Como o Flexbox está relacionado aos outros métodos de layout, e outras especificações CSS
- [Alinhando itens em um contêiner flex](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
  - : Como as propriedades Box Alignment trabalham com Flexbox.
- [Ordenando itens flex](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
  - : Explicando as diferentes formas de mudar a order e direção dos itens, e cobrindo os possíveis problemas em fazer isso.
- [Proporções de Controle de itens flex ao longo do eixo principal](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
  - : Explicando as propriedades flex-grow, flex-shrink e flex-basis.
- [Dominando a embalagem de itens flex](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
  - : Como criar contêiners flex com múltiplas linhas e controlar a exibição dos itens nessas linhas.
- [Casos típicos de uso do Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
  - : Padrão de projeto comuns que são casos de uso típicos do Flexbox.
- [Retrocompatibilidade do Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
  - : Status do Flexbox nos browsers, problemas de interoperabilidade e suporte para browsers antigos e versões das especificações

## Especificações

| Especificação                            | Status                               | Comentário             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{ SpecName('CSS3 Flexbox') }} | {{ Spec2('CSS3 Flexbox') }} | Definição inicial. |

## Veja também

- [Flexbugs](https://github.com/philipwalton/flexbugs)
  - : Uma lista curada pela comunidade de bugs do Flexbox nos navegadores e soluções alternativas
