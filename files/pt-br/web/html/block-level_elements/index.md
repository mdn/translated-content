---
title: Elementos block-level
slug: Web/HTML/Block-level_elements
tags:
  - Desenvolvimento
  - Guía
  - HTML
  - HTML5
  - Iniciante
  - Web
translation_of: Web/HTML/Block-level_elements
original_slug: Web/HTML/Elementos_block-level
---
<p>Elementos HTML <strong>(Linguagem de marcação de hipertexto) </strong>historicamente foram categorizados como “nível de bloco” ou <a href="/en-US/docs/HTML/Inline_elements">elementos “em linha”</a><span class="seoSummary">. Um elemento em nível de bloco ocupa todo o espaço de seu elemento pai (container), criando assim um “bloco”. Este artigo ajuda a explicar o que isso significa.</span></p>

<p>Navegadores normalmente mostram o elemento em nível de bloco com uma nova linha antes e depois do elemento. O exemplo a seguir demonstra a influência desse elemento em nível de bloco:</p>

<h2 id="Block-level_Example" name="Block-level_Example"><span style="color: #333333; margin-left: -3px; text-transform: none;">Elementos em nível de bloco</span></h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Este parágrafo é um elemento block-level; seu plano de fundo foi colorido para exibir o elemento pai do parágrafo.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p { background-color: #8ABB55; }
</pre>

<p>{{ EmbedLiveSample('Block-level_Example') }}</p>

<h2 id="Utilização">Utilização</h2>

<ul>
 <li>Elementos nível de bloco podem aparecer apenas dentro do elemento {{ HTMLElement("body") }} </li>
</ul>

<h2 id="Nível-de-bloco_vs._em-linha">Nível-de-bloco vs. em-linha</h2>

<p>Existem algumas diferenças importantes entre os elementos no nível do bloco e os elementos em linha:</p>

<dl>
 <dt>Modelo de conteúdo</dt>
 <dd>Geralmente, os elementos no nível de bloco podem conter elementos em linha e, às vezes, outros elementos no nível de bloco. Inerente a essa distinção estrutural está a idéia de que elementos de bloco criam estruturas "maiores" que elementos em linha.</dd>
 <dt>Formatação padrão</dt>
 <dd><font>Por padrão, os elementos no nível de bloco começam em novas linhas, mas, os elementos em linha, podem iniciar em qualquer lugar.</font></dd>
</dl>

<p>A distinção entre elementos em nível de bloco e elementos em linha foi usada nas especificações HTML até 4.01. No HTML5, essa distinção binária é substituída por um conjunto mais complexo de <a href="/en-US/docs/HTML/Content_categories">categorias de conteúdo</a>. Enquanto a categoria "em linha" corresponde aproximadamente à categoria de <a href="/en-US/docs/HTML/Content_categories#Phrasing_content">conteúdo de frases</a>, a categoria "nível de bloco" não corresponde diretamente a nenhuma categoria de conteúdo HTML5. Mas, os elementos "nível de bloco" e "embutido" combinados, correspondem ao <a href="/en-US/docs/HTML/Content_categories#Flow_content">conteúdo de fluxo</a>, em HTML5. Existem também categorias adicionais, por exemplo <a href="/en-US/docs/Web/Guide/HTML/Content_categories#Interactive_content">conteúdo interativo</a>.</p>

<h2 id="Elementos">Elementos</h2>

<p>A seguir, é apresentada uma lista completa de todos os elementos no nível de bloco HTML (embora "nível de bloco" não esteja tecnicamente definido para elementos novos no HTML5).</p>

<div class="threecolumns">
<dl>
 <dt>{{ HTMLElement("address") }}</dt>
 <dd>Informação de contato.</dd>
 <dt>{{ HTMLElement("article") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Conteúdo do artigo.</dd>
 <dt>{{ HTMLElement("aside") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Conteúdo lateral.</dd>
 <dt>{{ HTMLElement("blockquote") }}</dt>
 <dd>Citação longa ("bloco").</dd>
 <dt>{{ HTMLElement("details") }}</dt>
 <dd>Widget de divulgação.</dd>
 <dt>{{ HTMLElement("dialog") }}</dt>
 <dd>Caixa de diálogo.</dd>
 <dt>{{ HTMLElement("dd") }}</dt>
 <dd>Descreve um termo em uma lista de descrição.</dd>
 <dt>{{ HTMLElement("div") }}</dt>
 <dd>Divisão de conteúdo.</dd>
 <dt>{{ HTMLElement("dl") }}</dt>
 <dd>Lista de descrição.</dd>
 <dt>{{ HTMLElement("fieldset") }}</dt>
 <dd>Rótulo de conjunto de campos.</dd>
</dl>

<dl>
 <dt>{{ HTMLElement("figcaption") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Legenda da figura.</dd>
 <dt>{{ HTMLElement("figure") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Groups media content with a caption (see {{ HTMLElement("figcaption") }}).</dd>
 <dt>{{ HTMLElement("footer") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Section or page footer.</dd>
 <dt>{{ HTMLElement("form") }}</dt>
 <dd>Input form.</dd>
 <dt>{{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}</dt>
 <dd>Heading levels 1-6.</dd>
 <dt>{{ HTMLElement("header") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Section or page header.</dd>
 <dt>{{ HTMLElement("hgroup") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Groups header information.</dd>
 <dt>{{ HTMLElement("hr") }}</dt>
 <dd>Horizontal rule (dividing line).</dd>
 <dt>{{ HTMLElement("li") }}</dt>
 <dd>List item.</dd>
 <dt>{{ HTMLElement("main") }}</dt>
 <dd>Contains the central content unique to this document.</dd>
 <dt>{{ HTMLElement("nav") }}</dt>
 <dd>Contains navigation links.</dd>
</dl>

<dl>
 <dt>{{ HTMLElement("ol") }}</dt>
 <dd>Ordered list.</dd>
 <dt>{{ HTMLElement("p") }}</dt>
 <dd>Paragraph.</dd>
 <dt>{{ HTMLElement("pre") }}</dt>
 <dd>Preformatted text.</dd>
 <dt>{{ HTMLElement("section") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Section of a web page.</dd>
 <dt>{{ HTMLElement("table") }}</dt>
 <dd>Table.</dd>
 <dt>{{ HTMLElement("tfoot") }}</dt>
 <dd>Table footer.</dd>
 <dt>{{ HTMLElement("ul") }}</dt>
 <dd>Unordered list.</dd>
 <dt>{{ HTMLElement("video") }} {{ HTMLVersionInline(5) }}</dt>
 <dd>Video player.</dd>
</dl>
</div>

<h3 id="See_also" name="See_also">Veja também</h3>

<ul>
 <li><a href="/en-US/docs/Web/HTML/Inline_elements" title="en/HTML/Inline_elements">Elementos Emlinha</a></li>
</ul>
