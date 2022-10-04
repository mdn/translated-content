---
title: Алгоритм обработки текста двусторонней направленности (Юникод)
slug: orphaned/Web/Guide/Unicode_Bidrectional_Text_Algorithm
tags:
  - Алгоритм
  - Локализация
  - Руководство
  - Юникод
  - направление
translation_of: Web/Guide/Unicode_Bidrectional_Text_Algorithm
original_slug: Web/Guide/Unicode_Bidrectional_Text_Algorithm
---
<div></div>

<p><span class="seoSummary"><strong>Алгоритм обработки текста двусторонней направленности</strong> (Unicode® Bidirectional Algorithm или <strong>BiDi</strong> Algorithm) — раздел стандарта текста Unicode, описывающий в каком порядке раскладываются символы во время обработки страницы {{Glossary("агентом пользователя")}}.</span>
Этот алгоритм полезен при создании локализированного веб-контента.</p>

<p class="summary">В руководстве рассказывается о том, как работает BiDi алгоритм и как его применить. Алгоритм непосредственно связан с {{Glossary("HTML")}} и {{Glossary("CSS")}}, при обработке которых определяется порядок и направление символов в тексте.</p>

<h2 id="Основы">Основы</h2>

<p>(Базовое направление, типы символов, и т.д.)</p>

<h2 id="Алгоритм">Алгоритм</h2>

<h3 id="Уровни_направленности_символов">Уровни направленности символов</h3>

<h3 id="Directional_runs">Directional runs</h3>

<p>(Что это, что такое базовое направление)</p>

<h3 id="Символы_нейтральной_направленности">Символы нейтральной направленности</h3>

<h2 id="Overriding_the_algorithm">Overriding the algorithm</h2>

<p>Content about using HTML and CSS to override the default behavior of the algorithm; include info about isolating ranges etc.</p>

<h3 id="Overiding_BiDi_using_Unicode_control_characters">Overiding BiDi using Unicode control characters</h3>

<p>Unicode provides a number of special control characters that make it possible to control directionality of ranges of text. There are two sets of control characters; one set opens the override, and another restores the original directionality. You must always follow each opening character with an appropriate closing character.</p>

<table class="standard-table">
 <caption>Initial Unicode BiDi algorithm control characters</caption>
 <thead>
  <tr>
   <th scope="row">Character</th>
   <th scope="col">Code point</th>
   <th scope="col">HTML entity</th>
   <th scope="col">Markup equivalent</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Left-to-Right Isolate (LRI)</th>
   <td>U+2066</td>
   <td><code>&amp;#x2066;</code></td>
   <td><code>dir="ltr"</code></td>
   <td>Sets the base direction to LTR, isolating the embedded content from the surrounding text</td>
  </tr>
  <tr>
   <th scope="row">Right-to-Left Isolate (LRI)</th>
   <td>U+2067</td>
   <td><code>&amp;#x2067;</code></td>
   <td><code>dir="rtl"</code></td>
   <td>Sets the base direction to RTL, isolating the embedded content from the surrounding text</td>
  </tr>
  <tr>
   <th scope="row">First Strong Isolate (FSI)</th>
   <td>U+2068</td>
   <td><code>&amp;#x2068;</code></td>
   <td><code>dir="auto"</code></td>
   <td>Isolates the content and sets the base direction according to the first strongly-typed directional character in the embedded content</td>
  </tr>
  <tr>
   <th scope="row">Left-to-Right Embedding (LRE)</th>
   <td>U+202A</td>
   <td><code>&amp;#x202A;</code></td>
   <td><code>dir="ltr"</code></td>
   <td>Sets the base direction to LTR but allows the embedded text to interact with the surrounding content; this risks the effect spilling over to the outer content</td>
  </tr>
  <tr>
   <th scope="row">Right-to-Left Embedding (RLE)</th>
   <td>U+202B</td>
   <td><code>&amp;#x202B;</code></td>
   <td><code>dir="rtl"</code></td>
   <td>Sets the base direction to RTL, but lets the embedded text interact with the surrounding content, risking spillover effects</td>
  </tr>
  <tr>
   <th scope="row">Left-to-Right Override (LRO)</th>
   <td>U+202D</td>
   <td><code>&amp;#x202D;</code></td>
   <td><code>&lt;bdo dir="ltr"&gt;</code></td>
   <td>Overrides the BiDi algorithm, displaying the characters in memory order, from left to right</td>
  </tr>
  <tr>
   <th scope="row">Right-to-Left Override (RLO)</th>
   <td>U+202E</td>
   <td><code>&amp;#x202E;</code></td>
   <td><code>&lt;bdo dir="rtl"&gt;</code></td>
   <td>Overrides the BiDi algorithm and displays the embedded characters in reverse memory order, from right to left</td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption>Closing Unicode BiDi algorithm control characters</caption>
 <thead>
  <tr>
   <th scope="row">Character</th>
   <th scope="col">Code point</th>
   <th scope="col">HTML entity</th>
   <th scope="col">Markup equivalent</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th rowspan="2" scope="row">Pop Directional Formatting (PDF)</th>
   <td rowspan="2">U+202C</td>
   <td rowspan="2"><code>&amp;#x202C;</code></td>
   <td>Closing whatever opening tag used the {{htmlattrxref("dir")}} attribute</td>
   <td>Used for RLE or LRE</td>
  </tr>
  <tr>
   <td><code>&lt;/bdo&gt;</code></td>
   <td>Used for RLO or LRO</td>
  </tr>
  <tr>
   <th scope="row">Pop Directional Isolate (PDI)</th>
   <td>U+2069</td>
   <td><code>&amp;#x2069;</code></td>
   <td>Closing whatever opening tag used the {{htmlattrxref("dir")}} attribute</td>
   <td>Used for RLI, LRI, or FSI</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="https://www.unicode.org/reports/tr9/">Соответствующий стандарт Юникод (Unicode® Standard Annex #9: Unicode Bidirectional Algorithm)</a></li>
 <li><a href="https://www.w3.org/International/articles/inline-bidi-markup/uba-basics">W3C: Unicode Bidirectional Algorithm basics</a></li>
 <li><a href="https://www.w3.org/International/questions/qa-bidi-unicode-controls">W3C Q&amp;A: How to use Unicode controls for bidi text</a></li>
</ul>
