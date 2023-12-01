---
title: Construindo blocos CSS
slug: Learn/CSS/Building_blocks
---

{{LearnSidebar}}

Este módulo continua onde [Primeiros passos em CSS](/pt-BR/docs/Learn/CSS/First_steps) parou — agora que você já ganhou familiaridade com a linguagem e sua sintaxe, e já tem alguma experiência básica usando-a, é hora de mergulhar um pouco mais fundo. Este módulo analisa a conceitos de cascata e herança , todos os tipos de seletores que temos disponíveis, unidades, dimensionamentos, estilos de fundo e bordas, depuração, e muito mais.

O objetivo aqui é lhe prover com um conjunto de ferramentas para construir um código CSS competente e ajuda-lo a entender toda a teoria essencial, antes de passarmos para tópicos mais específicos como [Estilização de texto](/pt-BR/docs/Learn/CSS/Styling_text) e [Modelo CSS](/pt-BR/docs/Learn/CSS/CSS_layout).

## Pré-requisitos

Antes de iniciar este módulo, você deve ter:

1. Familiaridade básica com uso de computadores, e usar a Web passivamente (por exemplo. apenas olhar, consumindo o conteúdo.)
2. Um ambiente de trabalho básico configurado conforme detalhado em [Instalando software básico](/pt-BR/docs/Learn/Getting_started_with_the_web/Installing_basic_software), e um entendimento de como criar e gerenciar arquivos, como detalhado em [Lidando com arquivos](/pt-BR/docs/Learn/Getting_started_with_the_web/Dealing_with_files).
3. Familiaridade básica com HTML, como foi discutido no módulo [Introdução ao HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML).
4. Um entendimento do básico em CSS, como o mostrado no módulo [Primeiros Passos com CSS](/pt-BR/docs/Learn/CSS/First_steps).

> **Nota:** Se você estiver usando um computador/tablet/outro dispositivo onde você não puder criar seus próprios arquivos, você pode tentar rodar (a maioria) os códigos de exemplo em um programa de codificação online como o [JSBin](http://jsbin.com/) ou [Glitch](https://glitch.com/).

## Guias

Este módulo contém os seguintes artigos, que cobrem a maioria das partes essenciais da linguagem CSS. Ao longo do caminho você encontrará vários exercícios para testar seu entendimento.

- [Cascata e Herança](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
  - : O objetivo desta lição é desenvolver seu entendimento de alguns dos conceitos mais fundamentais do CSS — a cascata, especificidade e herança — que controlam como o CSS será aplicado ao HTML e como conflitos são resolvidos.
- [Seletores CSS](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors)

  - : Há uma ampla variedade de seletores CSS disponíveis, permitindo uma fina precisão ao selecionar elementos para estilizar. Neste artigo e em seus sub-artigos, examinaremos os diferentes tipos em detalhes, vendo como eles funcionam. Os sub-artigos são os seguintes:

    - [Tipo, classe e seletores de ID](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Seletores de atributo](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes e pseudo-elementos](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinadores](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [O modelo de caixa](/pt-BR/docs/Learn/CSS/Building_blocks/The_box_model) (Ou Box Model)
  - : Tudo em CSS está dentro de caixas, e entender essas caixas é a chave para estar apto a criar layouts (modelos) em CSS, ou alinhar itens com outros itens. Nesta lição,trataremos mais propriamente sobre Modelo de Caixa CSS, afim de que você possa passar para tarefas de Layout mais complexas com um entendimento de como isto funciona e a terminologia relacionada a este modelo.
- [Planos de fundo e bordas](/pt-BR/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : Nesta lição, examinaremos algumas das coisas criativas que você pode fazer com os planos de fundo e as bordas do CSS. Desde a criação de gradientes, imagens de plano de fundo e cantos arredondados, planos de fundo e bordas são a resposta para muitas questões de estilo em CSS.
- [Manipulando diferentes direções de texto](/pt-BR/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : Nos últimos anos, o CSS evoluiu para oferecer melhor suporte a diferentes direções de conteúdo, incluindo o conteúdo da direita para a esquerda, mas também de cima para baixo (como o japonês) - essas diferentes direções são chamadas de modos de escrita. À medida que você progride em seu estudo e começa a trabalhar com o layout, o entendimento dos **modos de escrita** será muito útil para você; portanto, os apresentaremos neste artigo..
- [Transbordando conteúdo](/pt-BR/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : Nesta lição, examinaremos outro conceito importante em CSS - overflow, efeito de transbordar. O overflow é o que acontece quando há muito conteúdo para ser contido adequadamente dentro de uma "caixa". Neste guia, você aprenderá o que é e como gerenciá-lo.
- [Valores CSS e unidades](/pt-BR/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : Cada propriedade usada em CSS tem um valor ou um conjunto de valores que são permitidos para uma dada propriedade, veremos alguns dos valores e unidades mais comuns em uso.
- [Dimensionando itens em CSS](/pt-BR/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : Nas várias lições até agora, você encontrou várias maneiras de dimensionar itens em uma página da Web usando CSS. É importante entender o tamanho dos diferentes recursos do seu design e, nesta lição, resumiremos as várias maneiras pelas quais os elementos obtêm um tamanho via CSS e definiremos alguns termos de dimensionamento que ajudarão você no futuro.
- [Imagens, mídia, e elementos de formulário](/pt-BR/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : Nesta lição, veremos como certos elementos especiais são tratados no CSS. Imagens, outras mídias e elementos de formulário se comportam de maneira um pouco diferente em termos de sua capacidade de estilizá-los com CSS do que as caixas regulares. Compreender o que é e o que não é possível pode poupa-lo de algumas frustrações, e esta lição destacará algumas das principais coisas que você precisa saber.
- [Estilizando Tabelas](/pt-BR/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : Estilizar uma tabela HTML não é o trabalho mais fascinante do mundo, mas às vezes todos nós precisamos fazê-lo. Este artigo fornece um guia para melhorar a aparência das tabelas HTML, com algumas técnicas específicas de estilo de tabela destacadas.
- [Depurando CSS](/pt-BR/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : Às vezes, ao escrever CSS, você encontrará um problema em que seu CSS parece não estar fazendo o que você espera. Este artigo fornecerá orientações sobre como depurar um problema de CSS e mostrará como os DevTools (ferramentas de desenvolvedor) incluídos em todos os navegadores modernos podem ajudá-lo a descobrir o que está acontecendo.
- [Organizando seu CSS](/pt-BR/docs/Learn/CSS/Building_blocks/Organizing)
  - : Ao começar a trabalhar com folhas de estilo e em projetos maiores, você descobrirá que manter um grande arquivo CSS pode ser desafiador. Neste artigo, examinaremos brevemente algumas práticas recomendadas para escrever seu CSS para facilitar a manutenção e algumas das soluções que você encontrará em uso por outras pessoas para ajudar a melhorar a capacidade de manutenção.

## Avaliações

Deseja testar suas habilidades de CSS? As avaliações a seguir testarão sua compreensão do CSS abordado nos guias acima.

- [Entendimento fundamental de CSS](/pt-BR/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension)
  - : Esta avaliação testará seu entendimento da sintaxe básica, seletores, especificidade, modelo caixa, e mais.
- [Criando uma carta timbrada ideal](/pt-BR/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)
  - : Se você deseja causar uma boa impressão, escrever uma carta em papel timbrado bonito pode ser um bom começo. Nesta avaliação, desafiaremos você a criar um modelo online para obter essa aparência.
- [Caixa de estilo atraente](/pt-BR/docs/Learn/CSS/Styling_boxes/A_cool_looking_box)
  - : Aqui você aprenderá a usar o estilo de plano de fundo e borda para criar uma caixa agradável.

## Veja também

- [Efeitos de estilo avançados](/pt-BR/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : Este artigo funciona como uma caixa de truques, fornecendo uma introdução a alguns recursos avançados de estilo interessantes, como sombras de caixa, modos de mesclagem e filtros.
