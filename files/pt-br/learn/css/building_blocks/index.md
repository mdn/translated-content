---
title: Construindo blocos CSS
slug: Learn/CSS/Building_blocks
translation_of: Learn/CSS/Building_blocks
original_slug: Aprender/CSS/Construindo_blocos
---
<div>{{LearnSidebar}}</div>

<p class="summary">Este módulo continua onde <a href="/en-US/docs/Learn/CSS/First_steps">Primeiros passos em CSS</a> parou — agora que você já ganhou familiaridade com a linguagem e sua sintaxe, e já tem alguma experiência básica usando-a, é hora de mergulhar um pouco mais fundo. Este módulo analisa a conceitos de cascata e herança , todos os tipos de seletores que temos disponíveis, unidades, dimensionamentos, estilos de fundo e bordas, depuração, e muito mais.</p>

<p class="summary">O objetivo aqui é lhe prover com um conjunto de ferramentas para construir um código CSS competente e ajuda-lo a entender toda a teoria essencial, antes de passarmos para tópicos mais específicos como <a href="/en-US/docs/Learn/CSS/Styling_text">Estilização de texto</a> e <a href="/en-US/docs/Learn/CSS/CSS_layout">Modelo CSS</a>.</p>

<h2 id="Pré-requisitos">Pré-requisitos</h2>

<p>Antes de iniciar este módulo, você deve ter:</p>

<ol>
 <li>Familiaridade básica com uso de computadores, e usar a Web passivamente (por exemplo. apenas olhar, consumindo o conteúdo.)</li>
 <li>Um ambiente de trabalho básico configurado conforme detalhado em <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Instalando software básico</a>, e um entendimento de como criar e gerenciar arquivos, como detalhado em <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Lidando com arquivos</a>.</li>
 <li>Familiaridade básica com HTML, como foi discutido no módulo <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introdução ao HTML</a>.</li>
 <li>Um entendimento do básico em CSS, como o mostrado no módulo  <a href="/en-US/docs/Learn/CSS/First_steps">Primeiros Passos com CSS</a>.</li>
</ol>

<div class="note">
<p><strong>Nota</strong>: Se você estiver usando um computador/tablet/outro dispositivo onde você não puder criar seus próprios arquivos, você pode tentar rodar (a maioria) os códigos de exemplo em um programa de codificação online como o <a href="http://jsbin.com/">JSBin</a> ou <a href="https://glitch.com/">Glitch</a>.</p>
</div>

<h2 id="Guias">Guias</h2>

<p>Este módulo contém os seguintes artigos, que cobrem a maioria das partes essenciais da linguagem CSS. Ao longo do caminho você encontrará vários exercícios para testar seu entendimento.</p>

<dl>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascata e Herança</a></dt>
 <dd>O objetivo desta lição é desenvolver seu entendimento de alguns dos conceitos mais fundamentais do CSS — a cascata, especificidade e herança — que controlam como o CSS será aplicado ao HTML e como conflitos são resolvidos.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">Seletores CSS</a></dt>
 <dd>Há uma ampla variedade de seletores CSS disponíveis, permitindo uma fina precisão ao selecionar elementos para estilizar. Neste artigo e em seus sub-artigos, examinaremos os diferentes tipos em detalhes, vendo como eles funcionam. Os sub-artigos são os seguintes:
 <ul>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Tipo, classe e seletores de ID</a></li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Seletores de atributo</a></li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Pseudo-classes e pseudo-elementos</a></li>
  <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinadores</a></li>
 </ul>
 </dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/The_box_model">O modelo de caixa</a> (Ou Box Model)</dt>
 <dd>Tudo em CSS está dentro de caixas, e entender essas caixas é a chave para estar apto a criar layouts (modelos) em CSS, ou alinhar itens com outros itens. Nesta lição,trataremos mais propriamente sobre Modelo de Caixa CSS, afim de que você possa passar para tarefas de Layout mais complexas com um entendimento de como isto funciona e a terminologia relacionada a este modelo.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Planos de fundo e bordas</a></dt>
 <dd>Nesta lição, examinaremos algumas das coisas criativas que você pode fazer com os planos de fundo e as bordas do CSS. Desde a criação de gradientes, imagens de plano de fundo e cantos arredondados, planos de fundo e bordas são a resposta para muitas questões de estilo em CSS.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">Manipulando diferentes direções de texto</a></dt>
 <dd>Nos últimos anos, o CSS evoluiu para oferecer melhor suporte a diferentes direções de conteúdo, incluindo o conteúdo da direita para a esquerda, mas também de cima para baixo (como o japonês) - essas diferentes direções são chamadas de modos de escrita. À medida que você progride em seu estudo e começa a trabalhar com o layout, o entendimento dos <strong>modos de escrita</strong> será muito útil para você; portanto, os apresentaremos neste artigo..</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content">Transbordando conteúdo</a></dt>
 <dd>Nesta lição, examinaremos outro conceito importante em CSS - overflow, efeito de transbordar. O overflow é o que acontece quando há muito conteúdo para ser contido adequadamente dentro de uma "caixa". Neste guia, você aprenderá o que é e como gerenciá-lo.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">Valores CSS e unidades</a></dt>
 <dd>Cada propriedade usada em CSS tem um valor ou um conjunto de valores que são permitidos para uma dada propriedade, veremos alguns dos valores e unidades mais comuns em uso.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Dimensionando itens em CSS</a></dt>
 <dd>Nas várias lições até agora, você encontrou várias maneiras de dimensionar itens em uma página da Web usando CSS. É importante entender o tamanho dos diferentes recursos do seu design e, nesta lição, resumiremos as várias maneiras pelas quais os elementos obtêm um tamanho via CSS e definiremos alguns termos de dimensionamento que ajudarão você no futuro.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements">Imagens, mídia, e elementos de formulário</a></dt>
 <dd>Nesta lição, veremos como certos elementos especiais são tratados no CSS. Imagens, outras mídias e elementos de formulário se comportam de maneira um pouco diferente em termos de sua capacidade de estilizá-los com CSS do que as caixas regulares. Compreender o que é e o que não é possível pode poupa-lo de algumas frustrações, e esta lição destacará algumas das principais coisas que você precisa saber.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Styling_tables">Estilizando Tabelas</a></dt>
 <dd>Estilizar uma tabela HTML não é o trabalho mais fascinante do mundo, mas às vezes todos nós precisamos fazê-lo. Este artigo fornece um guia para melhorar a aparência das tabelas HTML, com algumas técnicas específicas de estilo de tabela destacadas.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS">Depurando CSS</a></dt>
 <dd>Às vezes, ao escrever CSS, você encontrará um problema em que seu CSS parece não estar fazendo o que você espera. Este artigo fornecerá orientações sobre como depurar um problema de CSS e mostrará como os DevTools (ferramentas de desenvolvedor) incluídos em todos os navegadores modernos podem ajudá-lo a descobrir o que está acontecendo.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Organizing">Organizando seu CSS</a></dt>
 <dd>Ao começar a trabalhar com folhas de estilo e em projetos maiores, você descobrirá que manter um grande arquivo CSS pode ser desafiador. Neste artigo, examinaremos brevemente algumas práticas recomendadas para escrever seu CSS para facilitar a manutenção e algumas das soluções que você encontrará em uso por outras pessoas para ajudar a melhorar a capacidade de manutenção.</dd>
</dl>

<h2 id="Avaliações">Avaliações</h2>

<p>Deseja testar suas habilidades de CSS? As avaliações a seguir testarão sua compreensão do CSS abordado nos guias acima.</p>

<dl>
 <dt><a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension">Entendimento fundamental de CSS</a></dt>
 <dd>Esta avaliação testará seu entendimento da sintaxe básica, seletores, especificidade, modelo caixa, e mais.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper">Criando uma carta timbrada ideal</a></dt>
 <dd>Se você deseja causar uma boa impressão, escrever uma carta em papel timbrado bonito pode ser um bom começo. Nesta avaliação, desafiaremos você a criar um modelo online para obter essa aparência.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Styling_boxes/A_cool_looking_box">Caixa de estilo atraente</a></dt>
 <dd>Aqui você aprenderá a usar o estilo de plano de fundo e borda para criar uma caixa agradável.</dd>
</dl>

<h2 id="Veja_também">Veja também</h2>

<dl>
 <dt><a href="/en-US/docs/Learn/CSS/Building_blocks/Advanced_styling_effects">Efeitos de estilo avançados</a></dt>
 <dd>Este artigo funciona como uma caixa de truques, fornecendo uma introdução a alguns recursos avançados de estilo interessantes, como sombras de caixa, modos de mesclagem e filtros.</dd>
</dl>
