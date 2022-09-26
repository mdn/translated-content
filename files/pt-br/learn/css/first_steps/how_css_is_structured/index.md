---
title: Como CSS é estruturado
slug: Learn/CSS/First_steps/How_CSS_is_structured
translation_of: Learn/CSS/First_steps/How_CSS_is_structured
original_slug: Learn/CSS/First_steps/Como_CSS_e_estruturado
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}</div>

<p class="summary">Agora que você tem uma ideia sobre o que é o CSS e seu uso basico, é hora de olhar um pouco mais a fundo das estruturas da linguagem em si. Nós ja conhecemos muitos conceitos discutidos aqui, entretanto, você pode voltar para qualquer um em específico, se achar algum dos proximos conceitos um tanto confuso</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Conceitos básicos de computação, <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software">softwares básicos instalados</a>, conhecimentos básicos de <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files">operação com arquivos</a>,  básico de HTML (veja <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introdução ao HTML</a>), e  uma ideia de <a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works">Como  funciona o CSS</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Aprender as estruturas da sintaxe básica do CSS em detalhes.</td>
  </tr>
 </tbody>
</table>

<h2 id="Aplicando_CSS_no_seu_HTML">Aplicando CSS no seu HTML</h2>

<p>A primeira coisa que você vai olhar é, os três métodos de aplicação do CSS em um documento.</p>

<h3 id="Folha_de_Estilos_Externa">Folha de Estilos Externa</h3>

<p>Em <a href="https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico">Começando com o CSS</a> nós linkamos uma folha de estilos externas em nossa página. Isso é o metodo mias comum utilizado para juntar CSS em um documento, podendo utilizar tal método em multiplas páginas, permitindo você estillizar todas as páginas como as mesmas folha de estilos. Na maioria dos casos, as diferentes páginas do site vão parecer bem iguais entre si e por isso você pode usar as mesmas regras para o estilo padrão da página.</p>

<p><code><font face="Arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">Uma folha de estilos externa  é quando você tem seu CSS escrito em um arquivo separado com uma extensão </span></font>.css</code>, e você o refere dentro de um elemento <code>&lt;link&gt;</code> do HTML:</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My CSS experiment&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is my first CSS example&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>O arquivo CSS deve se parecer com algo nesse estilo:</p>

<pre class="brush: css notranslate">h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}</pre>

<p>O atributo <code>href</code> do elemento {{htmlelement("link")}}, precisa fazer referência a um arquivo em nosso sistema de arquivos.</p>

<p>No exemplo abaixo, o arquivo CSS está na mesma pasta que o documento HTML, mas você pode colocá-lo em outro lugar e reajustar o caminho marcado para encontrá-lo, como a seguir: </p>

<pre class="brush: html notranslate">&lt;!-- Inside a subdirectory called styles inside the current directory --&gt;
&lt;link rel="stylesheet" href="styles/style.css"&gt;

&lt;!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory --&gt;
&lt;link rel="stylesheet" href="styles/general/style.css"&gt;

&lt;!-- Go up one directory level, then inside a subdirectory called styles --&gt;
&lt;link rel="stylesheet" href="../styles/style.css"&gt;</pre>

<h3 id="Folha_de_estilos_interna">Folha de estilos interna</h3>

<p>Uma folha de estilos interna é  usada quando você não tem um arquivo CSS externo, mas, ao contrário,  coloca seu CSS dentro de elemento {{htmlelement("style")}} localizado no {{htmlelement("head")}} do documento HTML.</p>

<p>Deste modo, seu HTML se parecerá assim:</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My CSS experiment&lt;/title&gt;
    &lt;style&gt;
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is my first CSS example&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Isso pode ser útil em algumas circunstâncias (talvez você esteja trabalhando em um sistema de gerenciamento de conteúdo - CMS - onde não tem permissão para modificar diretamente os arquivos CSS), entretanto isso não é tão eficiente quanto o uso de folhas de estilo externas — em um website, o CSS precisaria ser repetido em todas as páginas e atualizado em vários locais sempre que mudanças fossem necessárias.</p>

<h3 id="Estilos_inline">Estilos inline</h3>

<p>Estilos inline são declarações CSS que afetam apenas um determinado elemento, inserido em um atributo <code>style</code>:</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My CSS experiment&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1 style="color: blue;background-color: yellow;border: 1px solid black;"&gt;Hello World!&lt;/h1&gt;
    &lt;p style="color:red;"&gt;This is my first CSS example&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p><strong>Por favor, não utilize isso a menos que seja estritamente necessário!</strong> É péssimo para manutenção (você precisará atualizar a mesma informação diversas vezes em cada documento), além do que, mistura sua informação de estilização do CSS com sua informação de estrutura HTML, tornando seu código de difícil leitura e compreensão. Manter diferentes tipos de código separados torna o trabalho muito mais fácil para todos os que trabalham no código.</p>

<p>Existem alguns lugares onde o estilo embutido é mais comum, ou mesmo aconselhável. Você pode ter que recorrer ao uso deles se seu ambiente de trabalho for realmente restritivo (talvez o seu CMS permita apenas que você edite o corpo do HTML). Você também os verá sendo muito usados em e-mails em HTML de modo a obter compatibilidade com o maior número possível de clientes de e-mail.</p>

<h2 id="Playing_with_the_CSS_in_this_article">Playing with the CSS in this article</h2>

<p>There is a lot of CSS to play with in this article. To do so, we'd recommend creating a new directory/folder on your computer, and inside it creating a copy of the following two files:</p>

<p>index.html:</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My CSS experiments&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;p&gt;Create your test HTML here&lt;/p&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>styles.css:</p>

<pre class="brush: css notranslate">/* Create your test CSS here */

p {
  color: red;
}</pre>

<p>Then, when you come across some CSS you want to experiment with, replace the HTML <code>&lt;body&gt;</code> contents with some HTML to style, and start adding CSS to style it inside your CSS file.</p>

<p>If you are not using a system where you can easily create files, you can instead use the interactive editor below to experiment.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}} </p>

<p>Read on, and have fun!</p>

<h2 id="Seletores">Seletores</h2>

<p>Não é possível falar de CSS sem conhecer os seletores, e nós já descobrimos vários tipos diferentes no tutorial Começando com o Css. Um seletor é o modo pelo qual nós apontamos para alguma coisa no nosso documento HTML para aplicar os estilos à ela. Se os seus estilos não forem aplicados, então é provável que o seu seletor não esteja ligado aquilo que você pensa que ele deveria.</p>

<p>Each CSS rule starts with a selector or a list of selectors in order to tell the browser which element or elements the rules should apply to. All of the following are examples of valid selectors, or lists of selectors.</p>

<pre class="brush: css notranslate">h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro</pre>

<p><strong>Try creating some CSS rules that use the above selectors, and some HTML to be styled by them. If you don't know what some of the above syntax means, try searching for it on MDN!</strong></p>

<div class="blockIndicator note">
<p><strong>Note</strong>: You will learn a lot more about selectors in our <a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">CSS selectors</a> tutorials, in the next module.</p>
</div>

<h3 id="Specificity">Specificity</h3>

<p>There will often be scenarios where two selectors could select the same HTML element. Consider the stylesheet below where I have a rule with a <code>p</code> selector that will set paragraphs to blue, and also a class that will set selected elements red.</p>

<pre class="brush: css notranslate">.special {
  color: red;
}

p {
  color: blue;
}</pre>

<p>Let's say that in our HTML document we have a paragraph with a class of <code>special</code>. Both rules could apply, so which one wins? What color do you think our paragraph will become?</p>

<pre class="brush: html notranslate">&lt;p class="special"&gt;What color am I?&lt;/p&gt;</pre>

<p>The CSS language has rules to control which rule will win in the event of a collision — these are called <strong>cascade</strong> and <strong>specificity</strong>. In the below code block we have defined two rules for the <code>p</code> selector, but the paragraph ends up being colored blue. This is because the declaration that sets it to blue appears later in the stylesheet, and later styles override earlier ones. This is the cascade in action.</p>

<pre class="brush: css notranslate">p {
  color: red;
}

p {
  color: blue;
}</pre>

<p>However, in the case of our earlier block with the class selector and the element selector, the class will win, making the paragraph red — even thought it appears earlier in the stylesheet. A class is described as being more specific, or having more specificity than the element selector, so it wins.</p>

<p><strong>Try the above experiment for yourself — add the HTML to your experiment, then add the two <code>p { ... }</code> rules to your stylesheet. Next, change the first <code>p</code> selector to <code>.special</code> to see how it changes the styling.</strong></p>

<p>The rules of specificity and the cascade can seem a little complicated at first and are easier to understand once you have built up further CSS knowledge. In our <a href="/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascade and inheritance</a> article, which you'll get to in the next module, I'll explain this in detail, including how to calculate specificity. For now, remember that this exists, and that sometimes CSS might not apply like you expect it to because something else in your stylesheet has a higher specificity. Identifying that more than one rule could apply to an element is the first step in fixing such issues.</p>

<h2 id="Propriedades_e_valores">Propriedades e valores</h2>

<p>At its most basic level, CSS consists of two building blocks:</p>

<ul>
 <li><strong>Properties</strong>: Human-readable identifiers that indicate which stylistic features (e.g. <code><a href="/en-US/docs/Web/CSS/font-size">font-size</a></code>, <code><a href="/en-US/docs/Web/CSS/width">width</a></code>, <code><a href="/en-US/docs/Web/CSS/background-color">background-color</a></code>) you want to change.</li>
 <li><strong>Values</strong>: Each specified property is given a value, which indicates how you want to change those stylistic features (e.g. what you want to change the font, width or background color to.)</li>
</ul>

<p>The below image highlights a single property and value. The property name is <code>color</code>, and the value <code>blue</code>.</p>

<p><img alt="A declaration highlighted in the CSS" src="https://mdn.mozillademos.org/files/16498/declaration.png" style="border: 1px solid #cccccc; display: block; height: 218px; margin: 0 auto; width: 471px;"></p>

<p>A property paired with a value is called a <em>CSS declaration</em>. CSS declarations are put within <em>CSS Declaration Blocks</em>. This next image shows our CSS with the declaration block highlighted.</p>

<p><img alt="A highlighted declaration block" src="https://mdn.mozillademos.org/files/16499/declaration-block.png" style="border: 1px solid #cccccc; display: block; height: 218px; margin: 0 auto; width: 471px;"></p>

<p>Finally, CSS declaration blocks are paired with <em>selectors</em> to produce <em>CSS Rulesets</em> (or <em>CSS Rules</em>). Our image contains two rules, one for the <code>h1</code> selector and one for the <code>p</code> selector. The rule for <code>h1</code> is highlighted.</p>

<p><img alt="The rule for h1 highlighted" src="https://mdn.mozillademos.org/files/16500/rules.png" style="border: 1px solid #cccccc; display: block; height: 218px; margin: 0 auto; width: 471px;"></p>

<p>Setting CSS properties to specific values is the core function of the CSS language. The CSS engine calculates which declarations apply to every single element of a page in order to appropriately lay it out and style it. What is important to remember is that both properties and values are case-sensitive in CSS. The property and value in each pair is separated by a colon (<code>:</code>).</p>

<p><strong>Try looking up different values of the following properties, and writing CSS rules that apply them to different HTML elements: </strong></p>

<ul>
 <li><strong>{{cssxref("font-size")}}</strong></li>
 <li><strong>{{cssxref("width")}}</strong></li>
 <li><strong>{{cssxref("background-color")}}</strong></li>
 <li><strong>{{cssxref("color")}}</strong></li>
 <li><strong>{{cssxref("border")}}</strong></li>
</ul>

<div class="warning">
<p><strong>Important</strong>: If a property is unknown or if a value is not valid for a given property, the declaration is deemed <em>invalid</em> and is completely ignored by the browser's CSS engine.</p>
</div>

<div class="warning">
<p><strong>Important</strong>: In CSS (and other web standards), US spelling has been agreed on as the standard to stick to where language uncertainty arises. For example, <code>color</code> should <em>always</em> be spelled <code>color</code>. <code>colour</code> won't work.</p>
</div>

<h3 id="Functions">Functions</h3>

<p>While most values are relatively simple keywords or numeric values, there are some possible values which take the form of a function. An example would be the <code>calc()</code> function. This function allows you to do simple math from within your CSS, for example:</p>

<div id="calc_example">
<pre class="brush: html notranslate">&lt;div class="outer"&gt;&lt;div class="box"&gt;The inner box is 90% - 30px.&lt;/div&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}</pre>
</div>

<p>This renders like so:</p>

<p>{{EmbedLiveSample('calc_example', '100%', 200)}}</p>

<p>A function consists of the function name, and then some brackets into which the allowed values for that function are placed. In the case of the <code>calc()</code> example above I am asking for the width of this box to be 90% of the containing block width, minus 30 pixels. This isn't something I can calculate ahead of time and just enter the value into the CSS, as I don't know what 90% will be. As with all values, the relevant page on MDN will have usage examples so you can see how the function works.</p>

<p>Another example would be the various values for {{cssxref("transform")}}, such as <code>rotate()</code>.</p>

<div id="transform_example">
<pre class="brush: html notranslate">&lt;div class="box"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}</pre>
</div>

<p>The output from the above code looks like this:</p>

<p>{{EmbedLiveSample('transform_example', '100%', 200)}}</p>

<p><strong>Try looking up different values of the following properties, and writing CSS rules that apply them to different HTML elements: </strong></p>

<ul>
 <li><strong>{{cssxref("transform")}}</strong></li>
 <li><strong>{{cssxref("background-image")}}, in particular gradient values</strong></li>
 <li><strong>{{cssxref("color")}}, in particular rgb/rgba/hsl/hsla values</strong></li>
</ul>

<h2 id="rules">@rules</h2>

<p>As yet, we have not encountered <code><a href="/en-US/docs/Web/CSS/At-rule">@rules</a></code> (pronounced "at-rules"). These are special rules giving CSS some instruction on how to behave. Some <code>@rules</code> are simple with the rule name and a value. For example, to import an additional stylesheet into your main CSS stylesheet you can use <code>@import</code>:</p>

<pre class="brush: css notranslate">@import 'styles2.css';</pre>

<p>One of the most common <code>@rules</code> you will come across is <code>@media</code>, which allows you to use <a href="/en-US/docs/Web/CSS/Media_Queries">media queries</a> to apply CSS only when certain conditions are true (e.g. when the screen resolution is above a certain amount, or the screen is wider than a certain width).</p>

<p>In the below CSS, we have a stylesheet that gives the <code>&lt;body&gt;</code> element a pink background color. However, we then use <code>@media</code> to create a section of our stylesheet that will only be applied in browsers with a viewport wider than 30em. If the browser is wider than 30em then the background color will be blue.</p>

<pre class="brush: css notranslate">body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}</pre>

<p>You will encounter other <code>@rules</code> throughout these tutorials.</p>

<p><strong>See if you can add a media query to your CSS that changes styles based on the viewport width. Change the width of your browser window to see the result.</strong></p>

<h2 id="Shorthands">Shorthands</h2>

<p>Some properties like {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, and {{cssxref("margin")}} are called <strong>shorthand properties</strong> — this is because they allow you to set several property values in a single line, saving time and making your code neater in the process.</p>

<p>For example, this line:</p>

<pre class="brush: css notranslate">/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;</pre>

<p>Does the same thing as all these together:</p>

<pre class="brush: css notranslate">padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;</pre>

<p>Whereas this line:</p>

<pre class="brush: css notranslate">background: red url(bg-graphic.png) 10px 10px repeat-x fixed;</pre>

<p>Does the same thing as all these together:</p>

<pre class="brush: css notranslate">background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;</pre>

<p>We won't attempt to teach these exhaustively now — you'll come across many examples later on in the course, and you are advised to look up the shorthand property names in our <a href="/en-US/docs/Web/CSS/Reference">CSS reference</a> to find out more.</p>

<p><strong>Try adding the above declarations to your CSS to see how it affects the styling of your HTML. Try experimenting with some different values.</strong></p>

<div class="blockIndicator warning">
<p><strong>Warning</strong>: While shorthands often allow you to miss out values, they will then reset any values that you do not include to their initial values. This ensures that a sensible set of values are used. However, this might be confusing if you were expecting the shorthand to only change the values you passed in.</p>
</div>

<h2 id="Comments">Comments</h2>

<p>As with HTML, you are encouraged to make comments in your CSS, to help you understand how your code works when coming back to it after several months, and to help others coming to the code to work on it understand it.</p>

<p>Comments in CSS begin with <code>/*</code> and end with <code>*/</code>. In the below code block I have used comments to mark the start of different distinct code sections. This is useful to help you navigate your codebase as it gets larger — you can search for the comments in your code editor.</p>

<pre class="brush: css notranslate">/* Handle basic element styling */
/* -------------------------------------------------------------------------------------------- */
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Let's special case the global font size. On large screen or window,
     we increase the font size for better readability */
  body {
    font-size: 130%;
  }
}

h1 {font-size: 1.5em;}

/* Handle specific elements nested in the DOM  */
/* -------------------------------------------------------------------------------------------- */
div p, #id:first-line {
  background-color: red;
  background-style: none
}

div p{
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}</pre>

<p>Comments are also useful for temporarily <em>commenting out</em> certain parts of the code for testing purposes, for example if you are trying to find which part of your code is causing an error. In the next example I have commented out the rules for the <code>.special</code> selector.</p>

<pre class="brush: css notranslate">/*.special {
  color: red;
}*/

p {
  color: blue;
}</pre>

<p><strong>Add some comments to your CSS, to get used to using them.</strong></p>

<h2 id="Whitespace">Whitespace</h2>

<p>White space means actual spaces, tabs and new lines. In the same manner as HTML, the browser tends to ignore much of the whitespace inside your CSS; a lot of the whitespace is just there to aid readability.</p>

<p>In our first example below we have each declaration (and rule start/end) on its own line — this is arguably a good way to write CSS, as it makes it easy to maintain and understand:</p>

<pre class="brush: css notranslate">body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  background-style: none
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
</pre>

<p id="Very_compact">You could write exactly the same CSS like so, with most of the whitespace removed — this is functionally identical to the first example, but I'm sure you'll agree that it is somewhat harder to read:</p>

<pre class="brush: css notranslate">body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) { body {font-size: 130%;} }

h1 {font-size: 1.5em;}

div p, #id:first-line {background-color: red; background-style: none}
div p {margin: 0; padding: 1em;}
div p + p {padding-top: 0;}
</pre>

<p>The code layout you choose is usually a personal preference, although when you start to work in teams, you may find that the existing team has its own styleguide that specifies an agreed convention to follow.</p>

<p>The whitespace you do need to be careful of in CSS is the whitespace between the properties and their values. For example, the following declarations are valid CSS:</p>

<pre class="brush: css notranslate">margin: 0 auto;
padding-left: 10px;</pre>

<p>But the following are invalid:</p>

<pre class="brush: css notranslate">margin: 0auto;
padding- left: 10px;</pre>

<p><code>0auto</code> is not recognised as a valid value for the <code>margin</code> property (<code>0</code> and <code>auto</code> are two separate values,) and the browser does not recognise <code>padding-</code> as a valid property. So you should always make sure to separate distinct values from one another by at least a space, but keep property names and property values together as single unbroken strings.</p>

<p><strong>Try playing with whitespace inside your CSS, to see what breaks things and what doesn't.</strong></p>

<h2 id="Whats_next">What's next?</h2>

<p>It's useful to understand a little about how the browser takes your HTML and CSS and turns it into a webpage, so in the next article — <a href="/en-US/docs/Learn/CSS/First_steps/How_CSS_works">How CSS works</a> — we will take a look at that process.</p>

<p>{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ol>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/What_is_CSS">O que é CSS?</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/Getting_started">Começando com CSS</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured">Como o CSS é  estruturad</a>o</li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/How_CSS_works">Como o CSS funciona</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/Using_your_new_knowledge">Usando seu novo conhecimento</a></li>
</ol>
