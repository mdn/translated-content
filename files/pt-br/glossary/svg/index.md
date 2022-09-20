---
title: SVG
slug: Glossary/SVG
tags:
  - Glossário
  - Iniciante
  - SVG
  - graficos
  - l10n:priority
translation_of: Glossary/SVG
original_slug: Glossario/SVG
---
<p><em>Scalable Vector Graphics</em> (<strong>SVG</strong>) é um formato de imagem vetorial 2D baseado em uma sintaxe {{Glossary("XML")}}.</p>

<p>A {{Glossary("W3C")}} iniciou o trabalho no SVG no final dos anos 1990, mas o SVG só se tornou popular quando o {{Glossary("Microsoft Internet Explorer", "Internet Explorer")}} 9 foi lançado com suporte a SVG. Atualmente a maioria dos {{Glossary("browser","navegadores")}} suportam SVG.</p>

<p>Baseado na sintaxe de {{Glossary("XML")}}, SVG pode ser estilizado com {{Glossary("CSS")}} e apresentar interatividade usando {{Glossary("JavaScript")}}. Em HTML5 é possível embutir diretamente {{Glossary("Tag","tags")}} SVG em um documento {{Glossary("HTML")}}.</p>

<p>Sendo um formato para <a href="https://pt.wikipedia.org/wiki/Desenho_vetorial" rel="external">gráficos vetoriais</a>, imagens SVG podem ser redimensionadas infinitamente, tendo um valor inestimável em {{Glossary("responsive design","design responsivo")}}, já que você pode criar elementos de interface e gráficos que se comportam bem em qualquer tamanho de tela. SVG também traz um conjunto de funcionalidades úteis, como clipping, máscaras, filtros e animações.</p>

<h2 id="Exemplo">Exemplo</h2>

<p>Abaixo você pode conferir a renderização de dois círculos de tamanhos e cores diferentes utilizando SVG. </p>

<pre class="brush: xml"><code>&lt;svg width="100" height="300"&gt;
   &lt;circle cx="50" cy="50" r="40" stroke="blue" stroke-width="10" fill="red" /&gt;
   &lt;circle cx="50" cy="150" r="20" stroke="green" stroke-width="10" fill="yellow" /&gt;
&lt;/svg&gt;</code></pre>

<p>Repare que <code>cx</code> e <code>cy</code> são para definir as coordenadas x e y do círculo, <code>r</code> é para definir o raio do círculo, o preenchimento é definido com <code>fill</code>, a largura do contorno é definida com <code>stroke-width</code> e a cor do contorno é definida com <code>stroke</code>. Lembrando que a largura e altura do <code>svg</code> em si são definidas no próprio elemento.</p>

<h2 id="Saiba_mais">Saiba mais</h2>

<h3 id="Conhecimento_Geral">Conhecimento Geral</h3>

<ul>
 <li>{{Interwiki("wikipedia", "SVG")}} na Wikipedia</li>
</ul>

<h3 id="Aprendendo_SVG">Aprendendo SVG</h3>

<ul>
 <li><a href="https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html">W3.org's SVG Primer</a> (em inglês)</li>
</ul>

<h3 id="Informação_técnica">Informação técnica</h3>

<ul>
 <li><a href="/en-US/docs/Web/SVG">Documentação sobre SVG na MDN</a></li>
 <li><a href="http://www.w3.org/TR/SVG/" rel="external">Especificação SVG mais recente</a> (em inglês)</li>
</ul>
