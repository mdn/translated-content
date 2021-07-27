---
title: Privacidade e o seletor :visited
slug: Web/CSS/Privacy_and_the_:visited_selector
tags:
  - CSS
  - Guía
  - Pseudo-classe
  - Referencia
  - Segurança
  - Seletores
translation_of: Web/CSS/Privacy_and_the_:visited_selector
original_slug: Web/CSS/Privacidade_e_o_seletor_:visited
---
<div>{{cssref}}</div>

<p>Antes de 2010, o seletor <a href="/en-US/docs/Web/CSS">CSS</a> {{ cssxref(":visited") }} permitia que websites descobrissem o histórico de navegação dos usuários e quais sites estes haviam visitado. Isto foi feito por meio do {{domxref("window.getComputedStyle")}} e outras tecnicas. Este processo era fácil de ser feito, e tornou possível não somente determinar onde os usuários estiveram na internet, mas também poderia ser usado para descobrir um monte de informação sobre a identidade destes.</p>

<p>Para contornar este problema, {{ Gecko("2") }} implementou atualizações de privacidade para limitar a quantidade de informações que poderiam ser obtidas através dos links visitados. Outros navegadores também fizeram mudanças similares.</p>

<h2 id="Pequenas_mentiras_brancas">Pequenas mentiras brancas</h2>

<p>Para preservar a privacidade dos usuários, Firefox e outros navegadores irão mentir para aplicações webs sob certas circustâncias:</p>

<ul>
 <li>O método <code>window.getComputedStyle</code>, e funções similares tal como {{ domxref("element.querySelector") }}, sempre retornarão valores indicando que os usuários nunca visitaram quaisquer links em uma página.</li>
 <li>Se você usa seletores como <strong>seletores de irmãos</strong> como <code>:visited + span</code>, o elemento imediato (<code>span</code> neste exemplo) será estilizado como se o link não houvesse sido visitado.</li>
 <li>Em raros casos, se você está utilizando elementos de links aninhados e o elemento que está sendo correspondido é diferente do link cuja presença no histórico está sendo testado, o elemento também será renderizado como se o link não houvesse sido visitado.</li>
</ul>

<h2 id="Limites_para_estilos_de_links_visitados">Limites para estilos de links visitados</h2>

<p>Você pode estilizar links visitados, porém existem limites de quais estilos você pode usar. Somente os seguintes estilos podem ser aplicados para links visitados:</p>

<ul>
 <li>{{ cssxref("color") }}</li>
 <li>{{ cssxref("background-color") }}</li>
 <li>{{ cssxref("border-color") }} (e suas subpropriedades)</li>
 <li>{{ cssxref("column-rule-color") }}</li>
 <li>{{ cssxref("outline-color") }}</li>
 <li>As partes de cor dos atributos {{SVGAttr("fill")}} e {{SVGAttr("stroke")}}</li>
</ul>

<p>Em adição, mesmo para os estilos acima, você não poderá alterar a transparência entre links visitados e não visitados, ou de outra maneira você seria capaz de usar <code><a href="/en-US/docs/Web/CSS/color_value#rgba()">rgba()</a></code>, <code><a href="/en-US/docs/Web/CSS/color_value#hsla()">hsla()</a></code>, ou a palavra chave <code><a href="/en-US/docs/Web/CSS/color_value#transparent">transparent</a></code>.</p>

<p>Aqui está um exemplo de como estilizar com as restrições acima mencionadas:</p>

<pre class="brush: css">:link {
  outline: 1px dotted blue;
  background-color: white;
  /* O valor padrão de background-color é `transparent`. Você precisa
     especificar um valor diferente, caso contrário as mudanças
     feitas em :visited não se aplicam. */
}

:visited {
  outline-color: orange;    /* Links visitados tem contornos laranja */
  background-color: green;  /* Links visitados tem um fundo verde */
  color: yellow;            /* Links visitados tem texto amarelo */
}
</pre>

<h2 id="Impacto_nos_desenvolvedores_web">Impacto nos desenvolvedores web</h2>

<p>No geral, essas restrições estas restrições não deveriam afetar desenvolvedores web tão significamente. Eles poderiam, como sempre, They may, no entanto, requerer essas seguintes mudanças nos sites existentes:</p>

<ul>
 <li>Usar imagens de fundo para estilizar links baseados se eles foram visitados não irá funcionar, desde que apenas cores podem ser usadas para estilizar links visitados.</li>
 <li>As cores que são transparentes deixarão de aparecer se estilizados em seletores <code>:visited</code>.</li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a class="external" href="http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/">privacy-related changes coming to CSS :visited</a> em Mozilla Hacks (em inglês)</li>
 <li><a class="external" href="http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/">Plugging the CSS History Leak</a> em the Mozilla Security Blog (em inglês)</li>
 <li><a class="external" href="http://dbaron.org/mozilla/visited-privacy">Preventing attacks on a user's history through CSS :visited selectors </a> (em inglês)</li>
</ul>
