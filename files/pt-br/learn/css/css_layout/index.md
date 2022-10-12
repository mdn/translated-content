---
title: CSS layout
slug: Learn/CSS/CSS_layout
tags:
  - Beginner
  - CSS
  - Floating
  - Grids
  - Guide
  - Landing
  - Layout
  - Learn
  - Module
  - Multiple column
  - NeedsTranslation
  - Positioning
  - TopicStub
  - flexbox
  - float
translation_of: Learn/CSS/CSS_layout
---
{{LearnSidebar}}

Até esse ponto nós já vimos fundamentos do CSS, como estilizar textos, e como estilizar e manipular os blocos que envolvem o conteúdo. Chegou a hora de ver como posicionar seus blocos no lugar certo tendo como referência o viewport ou outro elemento. Cobrimos os pré-requisitos necessários para que possamos ir mais a fundo no layout CSS, veremos diferentes configurações de exibição, métodos tradicionais de layout envolvendo float e posicionamento, e ferramentas modernas de layout como flexbox.

## Prerequisitos

Antes de iniciar esse modulo, você precisa:

1. Ter um conhecimento básico de HTML, como discutido no módulo [Introdução ao HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML).
2. Estar confortável com os fundamentos do CSS, como discutido em [Introdução ao CSS](/pt-BR/docs/Learn/CSS/Introduction_to_CSS).
3. Entender como [estilizar blocos](/pt-BR/docs/Learn/CSS/Styling_boxes).

> **Nota:** Se você estiver trabalhando em um computador/tablete/outro dispositivo em que você não possa criar seus próprios arquivos, você pode testar (muitos dos) os códigos de exemplo em um programa de códigos online como o [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/).

## Guias

Esse artigo ira introduzir as ferramentas fundamentais para o layout e as técnicas disponiveis no CSS.

- [Introdução ao CSS](/pt-BR/docs/Learn/CSS/CSS_layout/Introduction)
  - : Este artigo recapitulará alguns dos recursos de layout CSS que já abordamos em módulos anteriores — como diferentes valores {{cssxref("display")}} — e apresentará alguns dos conceitos que abordaremos ao longo deste módulo.
- [Fluxo normal](/pt-BR/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Os elementos das páginas web apresentam-se de acordo com o fluxo normal (até que façamos algo para mudar isso). Este artigo explica os fundamentos do fluxo normal, bem como uma base para aprender como alterá-lo.
- [Flexbox](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox)
  - : É um método para criar layout unidimensional, renderizando itens em linhas ou colunas. Os itens flexíveis preenchem os espaços pondendo encolher para caberem em espaços menores. Este artigo explica todos os fundamentos.
- [Grids](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox)
  - : CSS Grid layout é um sistema de layout bidimensional para páginas web. Ele permite que você coloque conteúdo em linhas e colunas. Tem muitos recursos que facilitam a criação de layouts complexos. Este artigo fornecerá tudo o que você precisa saber para começar a usar Grid layout em suas páginas.
- [Floats](/pt-BR/docs/Learn/CSS/CSS_layout/Floats)
  - : Originalmente para imagens flutuantes em blocos de texto, a propriedade {{cssxref("float")}} tornou-se uma das ferramentas mais usadas para criar layouts de várias colunas em páginas web. Com o advento do Flexbox e do Grid o Flot retorna ao seu propósto original. Este artigo explica tudo.
- [Posicionamento](/pt-BR/docs/Learn/CSS/CSS_layout/Positioning)
  - : O posicionamento permite retirar elementos do fluxo normal do layout do documento fazendo com que se comportem de maneira diferente, por exemplo, posicionando-se um em cima do outro ou permanecendo numa posição fixa no navegador. Este artigo explica os diferentes valores de {{cssxref("position")}} e como usá-los.
- [Layout de múltiplas colunas](/pt-BR/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : A especificação de layout de várias colunas fornece um método para colocar conteúdo em colunas, como nos jornais. Este artigo explicará como usar este recurso.
- [Exemplos práticos de posicionamento](/pt-BR/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Com as noções básicas de posicionamento abordadas no último artigo, veremos agora a construção de alguns exemplos do mundo real, para ilustrar que tipos de coisas você pode fazer com o posicionamento.
- [Grids](/pt-BR/docs/Learn/CSS/CSS_layout/Grids)
  - : Os sistemas de Grid são outro recurso muito comum usado nos layouts de CSS, que tendem a ser implementados usando flutuadores ou outros recursos de layout. Você imagina seu layout como um número definido de colunas (por exemplo, 4, 6 ou 12) e ajusta suas colunas de conteúdo dentro dessas colunas imaginárias. Neste artigo, exploraremos a idéia básica por trás da criação de um sistema de grade, examinaremos o uso de um sistema de grade pronto fornecido por uma estrutura de grade e terminaremos com a experiência com CSS Grids - um novo recurso de navegador que torna a implementação do design de grade em a Web muito mais fácil.
