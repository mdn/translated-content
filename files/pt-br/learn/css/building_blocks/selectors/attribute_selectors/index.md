---
title: Attribute selectors
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
translation_of: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
---
<p>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}</p>

<p>Como você sabe de seu estudo de HTML, os elementos podem ter atributos que fornecem mais detalhes sobre o elemento que está sendo marcado. Em CSS, você pode usar seletores de atributo para direcionar elementos com determinados atributos. Esta lição mostrará como usar esses seletores que são muito úteis.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>Basic computer literacy, <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software">basic software installed</a>, basic knowledge of <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files">working with files</a>, HTML basics (study <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), and an idea of how CSS works (study <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To learn what attribute selectors are and how to use them.</td>
  </tr>
 </tbody>
</table>

<h2 id="Seletores_de_Presença_e_Valor">Seletores de Presença e Valor</h2>

<p>Esses seletores permitem a seleção de um elemento com base na presença de um atributo sozinho (por exemplo, href) ou em várias correspondências diferentes com o valor do atributo.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Selector</th>
   <th scope="col">Example</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[<em>attr</em>]</code></td>
   <td><code>a[title]</code></td>
   <td>Corresponde a elementos com um atributo attr (cujo nome é o valor entre colchetes).</td>
  </tr>
  <tr>
   <td><code>[<em>attr</em>=<em>value</em>]</code></td>
   <td><code>a[href="https://example.com"]</code></td>
   <td>Corresponde a elementos com um atributo attr cujo valor é exatamente value - a string entre aspas.</td>
  </tr>
  <tr>
   <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
   <td><code>p[class~="special"]</code></td>
   <td>
    <p>Corresponde a elementos com um atributo attr cujo valor é exatamente value, ou contém valor em sua lista de valores (separados por espaço).</p>
   </td>
  </tr>
  <tr>
   <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
   <td><code>div[lang|="zh"]</code></td>
   <td>Corresponde a elementos com um atributo attr cujo valor é exatamente value ou começa com value imediatamente seguido por um hífen.</td>
  </tr>
 </tbody>
</table>

<p>No exemplo abaixo você pode ver esses seletores sendo usados.</p>

<ul>
 <li>usando <code>li[class]</code> podemos combinar qualquer seletor com um atributo de classe. Isso corresponde a todos os itens da lista, <u>exceto o primeiro.</u></li>
 <li><code>li[class="a"]</code> corresponde a um seletor com uma classe de a, mas não a um seletor com uma classe de a com outra classe separada por espaço como parte do valor. Ele seleciona o segundo item da lista.</li>
 <li><code>li[class~="a"]</code> corresponderá a uma classe de a, mas também a um valor que contém a classe de a como parte de uma lista separada por espaços em branco. Ele seleciona o segundo e o terceiro itens da lista.</li>
</ul>

<ul>
</ul>

<p>{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}</p>

<h2 id="Seletores_de_SubString">Seletores de SubString</h2>

<p>Esses seletores permitem uma correspondência mais avançada de substrings dentro do valor do seu atributo. Por exemplo, se você tivesse classes de <code>box-warning</code> e <code>box-error</code> e quisesse combinar tudo que começou com a string "box-", você poderia usar <code>[class^="box-"]</code> para selecionar os dois (ou <code>[class|="box"]</code> como descrito abaixo).</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Selector</th>
   <th scope="col">Example</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[<em>attr</em>^=<em>value</em>]</code></td>
   <td><code>li[class^="box-"]</code></td>
   <td>Corresponde a elementos com um atributo attr (cujo nome é o valor entre colchetes), cujo valor começa com valor.</td>
  </tr>
  <tr>
   <td><code>[<em>attr</em>$=<em>value</em>]</code></td>
   <td><code>li[class$="-box"]</code></td>
   <td>Corresponde a elementos com um atributo attr cujo valor termina com valor.</td>
  </tr>
  <tr>
   <td><code>[<em>attr</em>*=<em>value</em>]</code></td>
   <td><code>li[class*="box"]</code></td>
   <td>Corresponde a elementos com um atributo attr cujo valor contém o valor em qualquer lugar dentro da string.</td>
  </tr>
 </tbody>
</table>

<p>(À parte/lado: pode ser útil notar que <code>^</code> e <code>$</code> há muito são usados como âncoras nas chamadas expressões regulares para significar que começa com e termina com.)</p>

<p>O próximo exemplo mostra o uso desses seletores:</p>

<ul>
 <li>li [class ^ = "a"] corresponde a qualquer valor de atributo que comece com a, portanto, corresponde aos dois primeiros itens da lista.</li>
 <li>li [class $ = "a"] corresponde a qualquer valor de atributo que termina com a, portanto, corresponde ao primeiro e terceiro item da lista.</li>
 <li>li [class * = "a"] corresponde a qualquer valor de atributo onde a apareça em qualquer lugar na string, portanto, corresponde a todos os itens da nossa lista</li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}</p>

<h2 id="Case-sensitivity">Case-sensitivity</h2>

<p>Se você deseja combinar valores de atributo sem distinção entre maiúsculas e minúsculas, você pode usar o valor i antes do colchete de fechamento. Este sinalizador informa ao navegador para corresponder caracteres ASCII sem distinção entre maiúsculas e minúsculas. Sem o sinalizador, os valores serão correspondidos de acordo com a distinção entre maiúsculas e minúsculas do idioma do documento - no caso do HTML, será sensível a maiúsculas e minúsculas.</p>

<p>No exemplo abaixo, o primeiro seletor corresponderá a um valor que começa com um - ele corresponde apenas ao primeiro item da lista porque os outros dois itens da lista começam com um A maiúsculo. O segundo seletor usa o sinalizador que não diferencia maiúsculas de minúsculas e, portanto, corresponde a todos os itens da lista.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Há tambem um valor mais novo <code>s</code>, que forçará a correspondência com distinção entre maiúsculas e minúsculas em contextos em que a correspondência normalmente não diferencia maiúsculas de minúsculas; no entanto, isso não é bem suportado em navegadores e não é muito útil em um contexto HTML.</p>
</div>

<h2 id="Próximos_passos">Próximos passos</h2>

<p>Agora que terminamos com os seletores de atributo, você pode continuar no próximo artigo e ler sobre <a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">pseudo-class and pseudo-element selectors</a>.</p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}</p>

<h2 id="In_this_module">In this module</h2>

<ol>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascade and inheritance</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">CSS selectors</a>
  <ul>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Type, class, and ID selectors</a></li>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Attribute selectors</a></li>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Pseudo-classes and pseudo-elements</a></li>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinators</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/The_box_model">The box model</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Backgrounds and borders</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">Handling different text directions</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content">Overflowing content</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">Values and units</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Sizing items in CSS</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements">Images, media, and form elements</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Styling_tables">Styling tables</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS">Debugging CSS</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Organizing">Organizing your CSS</a></li>
</ol>
