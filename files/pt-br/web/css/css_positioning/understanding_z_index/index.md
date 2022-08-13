---
title: Understanding CSS z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index
tags:
  - CSS
  - Entendendo_CSS_z-index
  - Guía
  - Web
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index
original_slug: Web/Guide/CSS/Understanding_z_index
---
<p>Normalmente páginas HTML podem ser consideradas bi-dimensionais, pois texto, imagens e outros elementos podem ser dispostos na página sem sobreposição. Há apenas um fluxo de renderização e todos os elementos sabem do espaço ocupado por outros. O atributo {{cssxref("z-index")}} lhe permite ajustar a ordem de sobreposição dos objetos ao renderizar o conteúdo.</p>

<blockquote>
<p style=""><em>Em CSS 2.1, cada caixa tem uma posição nas três dimensões. Em adição às suas posições na horizontal e vertical, caixas ficam no "eixo-z" e são formatadas uma em cima da outra. Posições no Eixo-Z são particularmente relevantes quando caixas se sobrepõem visualmente.</em></p>
</blockquote>

<p>(from <a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#z-index">CSS 2.1 Section 9.9.1 - Layered presentation</a>)</p>

<p>Isso significa que as regras de CSS te permitem posicionar caixas em camadas em adição ao <em>render</em> normal da camada (level 0). A posição Z de cada camada é expressa como um inteiro representando a ordem da pilha para renderização. Números maiores significam que são mais próximos do observador. A posição Z pode ser controlada pela propriedade CSS {{ cssxref("z-index")}}.</p>

<p>Usar z-index aparenta ser extremamente fácil: uma única propriedade, endereçada a um único número inteiro, com um comportamento fácil-de-entender. No entanto, quando o z-index é aplicado para a hierarquia complexa dos elementos de HTML, seu comportamento pode ser difícil de entender ou até imprevisível. Isso é devido às complexas regras de <em>stacking</em>. Uma sessão dedicada foi  reservada na especificação do CSS  <a class="external" href="http://www.w3.org/TR/CSS21/zindex.html">CSS-2.1 Appendix E</a> para explicar melhor essas regras.</p>

<p>Esse artigo tentará explicar essas regras, com algumas simplificações e vários exemplos.</p>

<ol>
 <li><a href="/en/CSS/Understanding_z-index/Stacking_without_z-index" title="en/CSS/Understanding_z-index/Stacking_without_z-index">Stacking without z-index</a> : Regras padrões de empilhamento</li>
 <li><a href="/en/CSS/Understanding_z-index/Stacking_and_float" title="en/CSS/Understanding_z-index/Stacking_and_float">Stacking and float</a> : Como lidar com elementos que usam <em>float</em></li>
 <li><a href="/en/CSS/Understanding_z-index/Adding_z-index" title="en/CSS/Understanding_z-index/Adding_z-index">Adding z-index</a> : Usando index-z para mudar o empilhamento padrão</li>
 <li><a href="/en/CSS/Understanding_z-index/The_stacking_context" title="en/CSS/Understanding_z-index/The_stacking_context">The stacking context</a> : Notas sobre contexto do empilhamento</li>
 <li><a href="/en/CSS/Understanding_z-index/Stacking_context_example_1" title="en/CSS/Understanding_z-index/Stacking_context_example_1">Stacking context example 1</a> : 2-level HTML hierarquia, z-index no último <em>level</em></li>
 <li><a href="/en/CSS/Understanding_z-index/Stacking_context_example_2" title="en/CSS/Understanding_z-index/Stacking_context_example_2">Stacking context example 2</a> : 2-level HTML hierarquia, z-index em todos os <em>levels</em></li>
 <li><a href="/en/CSS/Understanding_z-index/Stacking_context_example_3" title="en/CSS/Understanding_z-index/Stacking_context_example_3">Stacking context example 3</a> : 3-level HTML hierarquia, z-index no segundo <em>level</em></li>
</ol>

<p><small><em>Note of the author: Thanks to Wladimir Palant and Rod Whiteley for the review.</em> </small></p>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">Original Document Information</h3>

<ul>
 <li>Author(s): Paolo Lombardi</li>
 <li>This article is the English translation of an article I wrote in Italian for <a class="external" href="http://www.yappy.it">YappY</a>. I grant the right to share all the content under <a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a></li>
 <li>Last Updated Date: July 9th, 2005</li>
</ul>
</div>

<p> </p>
