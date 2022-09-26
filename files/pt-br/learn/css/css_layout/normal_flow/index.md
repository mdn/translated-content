---
title: Fluxo Normal
slug: Learn/CSS/CSS_layout/Normal_Flow
translation_of: Learn/CSS/CSS_layout/Normal_Flow
original_slug: Learn/CSS/CSS_layout/Fluxo_Normal
---
<div>{{LearnSidebar}}</div>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</p>

<p class="summary">Este artigo aborda o <em>Fluxo Normal</em> de alinhamento e acomodação do conteúdo de uma página HTML, na qual o desenvolvedor não inseriu estilos pessoais. Este fluxo é um padrão usado pelos navegodares web. É uma solução preguiçosa ou rápida. Se o <em>Fluxo Normal</em> por ventura não desagradar o programador, poupado será o seu tempo e esforço. Com o ônus adiado para quando ele quiser algo diferente.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerrequisitos:</th>
   <td>Introdução ao HTML (study <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), e uma noção de como o CSS funciona (study <a href="/en-US/docs/Learn/CSS/Introduction_to_CSS">Introduction to CSS</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Objectivo:</th>
   <td>Explicar qual é o leiaute padrão aplicado pelos navegadores web - a um arquivo HTML - sempre que não houver estilo ou formatos definidos pelo desenvolvedor da referida página.</td>
  </tr>
 </tbody>
</table>

<p>Conforme detalhado na última lição de introdução ao leiaute, os elementos em uma página da web acomodam-se em Fluxo Normal, quando não é aplicada qualquer regra CSS para alterar a maneira como estes se comportam.  And, as we began to discover, you can change how elements behave either by adjusting their position in that normal flow, or removing them from it altogether. Starting with a solid, well-structured document that is readable in normal flow is the best way to begin any webpage. It ensures that your content is readable, even if the user is using a very limited browser or a device such as a screen reader that reads out the content of the page. In addition, as normal flow is designed to make a readable document, by starting in this way you are working with the document rather than fighting against it as you make changes to the layout.</p>

<p>Before digging deeper into different layout methods, it is worth revisiting some of the things you will have studied in previous modules with regard to normal document flow.</p>

<h2 id="How_are_elements_laid_out_by_default">How are elements laid out by default?</h2>

<p>First of all, individual element boxes are laid out by taking the elements' content, then adding any padding, border and margin around them — it's that box model thing again, which we've looked at earlier.</p>

<p>By default, a <a href="/en-US/docs/Web/HTML/Block-level_elements">block level element</a>'s content is 100% of the width of its parent element, and as tall as its content. <a href="/en-US/docs/Web/HTML/Inline_elements">Inline elements</a> are as tall as their content, and as wide as their content. You can't set width or height on inline elements — they just sit inside the content of block level elements. If you want to control the size of an inline element in this manner, you need to set it to behave like a block level element with <code>display: block;</code> (or even,<code>display: inline-block;</code> which mixes characteristics from both.)</p>

<p>That explains individual elements, but what about how elements interact with one another? The normal layout flow (mentioned in the layout introduction article) is the system by which elements are placed inside the browser's viewport. By default, block-level elements are laid out in the <em>block flow direction</em>, based on the parent's <a href="/en-US/docs/Web/CSS/writing-mode">writing mode</a> (<em>initial</em>: horizontal-tb) — each one will appear on a new line below the last one, and they will be separated by any margin that is set on them. In English therefore, or any other horizontal, top to bottom writing mode, block-level elements are laid out vertically.</p>

<p>Inline elements behave differently — they don't appear on new lines; instead, they sit on the same line as one another and any adjacent (or wrapped) text content, as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing text or elements will move down to a new line.</p>

<p>If two adjacent elements both have the margin set on them and the two margins touch, the larger of the two remains, and the smaller one disappears — this is called margin collapsing, and we have met this before too.</p>

<p>Let's look at a simple example that explains all of this:</p>

<div id="Normal_Flow">
<pre class="brush: html">&lt;h1&gt;Basic document flow&lt;/h1&gt;

&lt;p&gt;I am a basic block level element. My adjacent block level elements sit on new lines below me.&lt;/p&gt;

&lt;p&gt;By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.&lt;/p&gt;

&lt;p&gt;We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.&lt;/p&gt;

&lt;p&gt;inline elements &lt;span&gt;like this one&lt;/span&gt; and &lt;span&gt;this one&lt;/span&gt; sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements will &lt;span&gt;wrap onto a new line if possible (like this one containing text)&lt;/span&gt;, or just go on to a new line if not, much like this image will do: &lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css">body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255,84,104,0.3);
  border: 2px solid rgb(255,84,104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}</pre>
</div>

<p>{{ EmbedLiveSample('Normal_Flow', '100%', 500) }}</p>

<h2 id="Summary">Summary</h2>

<p>Now that you understand normal flow, and how the browser lays things out by default, move on to understand how to change this default display to create the layout needed by your design.</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Introduction">Introduction to CSS layout</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow">Normal flow</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Grids">Grid</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Floats">Floats</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Positioning">Positioning</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">Multiple-column layout</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design">Responsive design</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Media_queries">Beginner's guide to media queries</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">Legacy layout methods</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Supporting older browsers</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">Fundamental layout comprehension assessment</a></li>
</ul>
