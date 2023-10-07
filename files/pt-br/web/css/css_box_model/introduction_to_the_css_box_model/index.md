---
title: Box model
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
---

## Resumo

Em uma página WEB, cada elemento é representado como um _box_ retangular. Determinar o tamanho, propriedades - como sua cor, fundo, estilo das bordas - e a posição desses _boxes_ é o objetivo do mecanismo de renderização.

No CSS, cada um desses _boxes_ retangulares é descrita usando o _box model_ padrão. Este modelo descreve o conteúdo do espaço ocupado por um elemento. Cada box possui 4 edges: **margin edge**, **border edge**, **padding edge** e **content edge**.

![CSS Box model](</pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/boxmodel-(3).png>)

A **área de conteúdo** (content area) é a área ocupada pelo conteúdo real do elemento. Ele frequentamente possui um fundo, uma cor de fonte ou uma imagem (nessa ordem, uma imagem opaca esconde a cor de fundo) e é localizada dentro do _content edge_; suas dimensões são a largura do conteúdo, ou largura do box de conteúdo, e altura do conteúdo, ou altura do box de conteúdo.

Se a propriedade CSS {{ cssxref("box-sizing") }} está configurada como padrão, as propriedades CSS {{ cssxref("width") }}, {{ cssxref("min-width") }}, {{ cssxref("max-width") }}, {{ cssxref("height") }}, {{ cssxref("min-height") }} e {{ cssxref("max-height") }} controlam o tamanho do conteúdo.

A **área de preenchimento** (padding area) estende-se para a borda em torno do enchimento. Quando a área de conteúdo tem um fundo, cor ou imagem, isso será estendido para a área de preenchimento, por esse motivo, você pode pensar o preenchimento como a extensão do conteúdo. O preenchimento está localizado dentro do _padding edge,_ e suas dimensões são a _largura do padding-box_ e a _altura do padding-box._

O espaço entre os edges de preenchimento e conteúdo podem ser controlados utilizando as seguintes propriedades CSS {{ cssxref("padding-top") }}, {{ cssxref("padding-right") }}, {{ cssxref("padding-bottom") }}, {{ cssxref("padding-left") }} e na forma generalizada {{ cssxref("padding") }}.

A **área de borda** (border area**)** estende a área de preenchimento para a área que contém as bordas. Esta é a área de dentro do _border edge_, e suas dimensões são a largura e a altura do _border-box._ Esta área depende do tamanho da borda que está definido pela propriedade {{ cssxref("border-width") }} ou pela propriedade {{ cssxref("border") }}.

A **área de margem** (margin area) estende a área de borda com um espaço vazio utilizado para separar o elemento dos elementos vizinhos. Esta é a área de dentro do _margin edge,_ e suas dimensões são a largura e a altura do _margin-box_.

O tamanho da área de margem é controlada utilizando as seguintes propriedades CSS {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }}, {{ cssxref("margin-left") }} e na forma generalizada {{ cssxref("margin") }}.

Quando ocorre um [colapso de margens](/pt-BR/docs/Web/CSS/margin_collapsing), a área de margem não está claramente definida, uma vez que as margens são compartilhadas entre os boxes.

Finalmente, note que, para elementos não substituídos inline, o total de espaço ocupado (para a altura da linha) é determinado pela propriedade {{ cssxref('line-height') }}, mesmo que a borda e o padding aparecerem visualmente em torno do conteúdo.

## Especificação

| Especificação                                     | Status                | Comentário                                                        |
| ------------------------------------------------- | --------------------- | ----------------------------------------------------------------- |
| {{ SpecName("CSS2.1","box.html#box-dimensions")}} | {{ Spec2('CSS2.1') }} | Embora mais precisamente formulada, não existem mudanças práticas |
| {{ SpecName("CSS1","#formatting-model")}}         | {{ Spec2('CSS1') }}   |                                                                   |

## Veja também

- [Referência CSS](/pt-BR/docs/Web/CSS/CSS_Reference)
- Propriedades CSS relacionadas: {{ cssxref("box-sizing") }}, {{ cssxref("background-clip") }}, {{ cssxref("height") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("width") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("padding") }}, {{ cssxref("padding-top") }}, {{ cssxref("padding-right") }}, {{ cssxref("padding-bottom") }}, {{ cssxref("padding-left") }}, {{ cssxref("border") }}, {{ cssxref("border-top") }}, {{ cssxref("border-right") }}, {{ cssxref("border-bottom") }}, {{ cssxref("border-left") }}, {{ cssxref("border-width") }}, {{ cssxref("border-top-width") }}, {{ cssxref("border-right-width") }}, {{ cssxref("border-bottom-width") }}, {{ cssxref("border-left-width") }}, {{ cssxref("margin") }}, {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }}, {{ cssxref("margin-left") }}
