---
title: CSS selectors
slug: Learn/CSS/Building_blocks/Selectors
tags:
  - Attribute
  - Beginner
  - CSS
  - Class
  - Learn
  - NeedsTranslation
  - Pseudo
  - Selectors
  - TopicStub
  - id
translation_of: Learn/CSS/Building_blocks/Selectors
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}</div>

<p class="summary">Em {{Glossary("CSS")}}, <font>os seletores são usados ​​para direcionar os </font><font>elementos</font> {{glossary("HTML")}} <font>em nossas páginas da web que queremos estilizar. </font><font>Há uma grande variedade de seletores CSS disponíveis, permitindo uma precisão refinada ao selecionar os elementos a serem estilizados. </font><font>Neste artigo e seus sub-artigos, examinaremos os diferentes tipos em grande detalhe, vendo como eles funcionam.</font></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td><font><font>Conhecimento </font><font>básico de informática, </font></font><a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"><font><font>software básico instalado</font></font></a><font><font> , conhecimento básico de como </font></font><a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"><font><font>trabalhar com arquivos</font></font></a><font><font> , conceitos básicos de HTML (estude </font></font><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"><font><font>Introdução ao HTML</font></font></a><font><font> ) e uma ideia de como o CSS funciona (estude os </font></font><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"><font><font>primeiros passos do CSS</font></font></a><font><font> ).</font></font></td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Para saber como os seletores CSS funcionam em detalhes.</td>
  </tr>
 </tbody>
</table>

<h2 id="O_que_é_um_seletor"><font><font>O que é um seletor?</font></font></h2>

<p><font><font>Você já conheceu os seletores. </font><font>Um seletor CSS é a primeira parte de uma regra CSS. </font><font>É um padrão de elementos e outros termos que informam ao navegador quais elementos HTML devem ser selecionados para que os valores de propriedade CSS dentro da regra sejam aplicados a eles. </font><font>O elemento ou elementos que são selecionados pelo seletor são referidos como o </font></font><em><font><font>assunto do seletor</font></font></em><font><font> .</font></font></p>

<p><img alt="Some code with the h1 highlighted." src="https://mdn.mozillademos.org/files/16550/selector.png" style="border: 1px solid #cccccc; height: 218px; width: 471px;"></p>

<p><font><font>Em artigos anteriores, você conheceu alguns seletores diferentes e aprendeu que existem seletores que direcionam o documento de maneiras diferentes - por exemplo, selecionando um elemento como </font></font><code>h1</code><font><font>, ou uma classe como </font></font><code>.special</code><font><font>.</font></font></p>

<p><font><font>Em CSS, os seletores são definidos na especificação dos seletores CSS; </font><font>como qualquer outra parte do CSS, eles precisam ter suporte em navegadores para funcionarem. </font><font>A maioria dos seletores que você encontrará são definidos na </font></font><a href="https://www.w3.org/TR/selectors-3/" rel="noopener"><font><font>especificação de Seletores de nível 3</font></font></a><font><font> , que é uma especificação madura, portanto, você encontrará um excelente suporte de navegador para esses seletores.</font></font></p>

<h2 id="Listas_de_seleção"><font><font>Listas de seleção</font></font></h2>

<p><font><font>Se você tiver mais de um item que usa o mesmo CSS, os seletores individuais podem ser combinados em uma </font></font><em><font><font>lista de seletores</font></font></em><font><font> para que a regra seja aplicada a todos os seletores individuais. </font><font>Por exemplo, se eu tiver o mesmo CSS para um </font></font><code>h1</code><font><font>e também para uma classe de </font></font><code>.special</code><font><font>, poderia escrever isso como duas regras separadas.</font></font></p>

<pre class="brush: css notranslate"><code>h1 {
  color: blue;
}

.special {
  color: blue;
} </code></pre>

<p><font><font>Eu também poderia combiná-los em uma lista de seletores, adicionando uma vírgula entre eles.</font></font></p>

<pre class="brush: css notranslate"><code>h1, .special {
  color: blue;
} </code></pre>

<p><font><font>O espaço em branco é válido antes ou depois da vírgula. </font><font>Você também pode achar os seletores mais legíveis se cada um estiver em uma nova linha.</font></font></p>

<pre class="brush: css notranslate"><code>h1,
.special {
  color: blue;
} </code></pre>

<p><font>No exemplo ao vivo abaixo, tente combinar os dois seletores que têm declarações idênticas. </font><font>A exibição visual deve ser a mesma após combiná-los.</font></p>

<p>{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}} </p>

<p><font><font>Ao agrupar seletores dessa forma, se algum seletor for inválido, a regra inteira será ignorada.</font></font></p>

<p><font><font>No exemplo a seguir, a regra do seletor de classe inválida será ignorada, enquanto o </font></font><code>h1</code><font><font>ainda seria estilizado.</font></font></p>

<pre class="brush: css notranslate"><code>h1 {
  color: blue;
}

..special {
  color: blue;
} </code></pre>

<p><font><font>Quando combinados, no entanto, nem o </font></font><code>h1</code><font><font>nem a classe terão o estilo, pois a regra inteira é considerada inválida.</font></font></p>

<pre class="brush: css notranslate"><code>h1, ..special {
  color: blue;
} </code></pre>

<h2 id="Tipos_de_seletores"><font><font>Tipos de seletores</font></font></h2>

<p><font><font>Existem alguns agrupamentos diferentes de seletores e saber qual tipo de seletor você pode precisar o ajudará a encontrar a ferramenta certa para o trabalho. </font><font>Nos subartículos deste artigo, examinaremos os diferentes grupos de seletores com mais detalhes.</font></font></p>

<h3 id="Seletores_de_tipo_classe_e_ID"><font><font>Seletores de tipo, classe e ID</font></font></h3>

<p><font><font>Este grupo inclui seletores que têm como alvo um elemento HTML, como um </font></font><code>&lt;h1&gt;</code><font><font>.</font></font></p>

<pre class="brush: css notranslate">h1 { }</pre>

<p><font><font>Também inclui seletores que direcionam uma classe:</font></font></p>

<pre class="brush: css notranslate">.box { }</pre>

<p><font><font>ou um ID:</font></font></p>

<pre class="brush: css notranslate">#unique { }</pre>

<h3 id="Seletores_de_atributos"><font><font>Seletores de atributos</font></font></h3>

<p><font><font>Este grupo de seletores oferece diferentes maneiras de selecionar elementos com base na presença de um determinado atributo em um elemento:</font></font></p>

<pre class="brush: css notranslate">a[title] { }</pre>

<p><font><font>Ou até mesmo faça uma seleção com base na presença de um atributo com um valor específico:</font></font></p>

<pre class="brush: css notranslate">a[href="https://example.com"] { }</pre>

<h3 id="Pseudo_classes_e_pseudo-elementos"><font><font>Pseudo classes e pseudo-elementos</font></font></h3>

<p><font><font>Este grupo de seletores inclui pseudo classes, que definem o estilo de certos estados de um elemento. </font><font>A </font></font><code>:hover</code><font><font>pseudoclasse, por exemplo, seleciona um elemento apenas quando ele está sendo passado pelo ponteiro do mouse:</font></font></p>

<pre class="brush: css notranslate">a:hover { }</pre>

<p><font><font>Também inclui pseudoelementos, que selecionam uma determinada parte de um elemento em vez do próprio elemento. </font><font>Por exemplo, </font></font><code>::first-line</code><font><font>sempre seleciona a primeira linha de texto dentro de um elemento (a </font></font><code>&lt;p&gt;</code><font><font>no caso abaixo), agindo como se a tivesse </font></font><code>&lt;span&gt;</code><font><font>sido colocado em volta da primeira linha formatada e então selecionado.</font></font></p>

<pre class="brush: css notranslate">p::first-line { }</pre>

<h3 id="Combinadores"><font><font>Combinadores</font></font></h3>

<p><font><font>O grupo final de seletores combina outros seletores para direcionar os elementos em nossos documentos. </font><font>O seguinte, por exemplo, seleciona parágrafos que são filhos diretos de </font></font><code>&lt;article&gt;</code><font><font>elementos usando o combinador filho ( </font></font><code>&gt;</code><font><font>):</font></font></p>

<pre class="brush: css notranslate">article &gt; p { }</pre>

<h2 id="Próximos_passos"><font><font>Próximos passos</font></font></h2>

<p><font><font>Você pode dar uma olhada na tabela de referência de seletores abaixo para obter links diretos para os vários tipos de seletores nesta seção Aprender ou no MDN em geral, ou continuar para iniciar sua jornada descobrindo sobre </font></font><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors"><font><font>seletores de tipo, classe e ID</font></font></a><font><font> .</font></font></p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}</p>

<h2 id="Tabela_de_referência_de_seletores"><font><font>Tabela de referência de seletores</font></font></h2>

<p><font><font>A tabela a seguir fornece uma visão geral dos seletores disponíveis para uso, juntamente com links para as páginas deste guia que mostram como usar cada tipo de seletor. </font><font>Também incluí um link para a página MDN de cada seletor, onde você pode verificar as informações de suporte do navegador. </font><font>Você pode usar isso como uma referência para voltar quando precisar consultar os seletores mais tarde no material, ou quando você experimentar CSS em geral.</font></font></p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Selector</th>
   <th scope="col">Example</th>
   <th scope="col">Learn CSS tutorial</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Type_selectors">Type selector</a></td>
   <td><code>h1 {  }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Type_selectors">Type selectors</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Universal_selectors">Universal selector</a></td>
   <td><code>* {  }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#The_universal_selector">The universal selector</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Class_selectors">Class selector</a></td>
   <td><code>.box {  }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Class_selectors">Class selectors</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/ID_selectors">id selector</a></td>
   <td><code>#unique { }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#ID_Selectors">ID selectors</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Attribute_selectors">Attribute selector</a></td>
   <td><code>a[title] {  }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Attribute selectors</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Pseudo-classes">Pseudo-class selectors</a></td>
   <td><code>p:first-child { }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class">Pseudo-classes</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Pseudo-elements">Pseudo-element selectors</a></td>
   <td><code>p::first-line { }</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element">Pseudo-elements</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Descendant_combinator">Descendant combinator</a></td>
   <td><code>article p</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Descendant_Selector">Descendant combinator</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Child_combinator">Child combinator</a></td>
   <td><code>article &gt; p</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Child_combinator">Child combinator</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/Adjacent_sibling_combinator">Adjacent sibling combinator</a></td>
   <td><code>h1 + p</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Adjacent_sibling">Adjacent sibling</a></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/CSS/General_sibling_combinator">General sibling combinator</a></td>
   <td><code>h1 ~ p</code></td>
   <td><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#General_sibling">General sibling</a></td>
  </tr>
 </tbody>
</table>

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
