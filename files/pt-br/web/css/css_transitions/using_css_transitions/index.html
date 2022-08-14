---
title: Using CSS transitions
slug: Web/CSS/CSS_Transitions/Using_CSS_transitions
translation_of: Web/CSS/CSS_Transitions/Using_CSS_transitions
---
<p>{{CSSref}}</p>

<p><span class="seoSummary"><strong>CSS transitions</strong> provê uma forma de controlar a velocidade de uma animação quando há mudanças de propriedades CSS. Ao invés de uma propriedade entrar em vigor imediatamente, você pode fazer com que as mudanças em uma propriedade ocorram durante um periodo de tempo. Por exemplo, se você mudar a cor de um elemento de branco para preto, a alteração será instantanea. Utilizando transições CSS, as alterações acontecem em uma intervalo de tempo que seguem uma curva de aceleração, e todas podem ser personalizadas</span></p>

<p>Animações que envolvem transições entre dois estados geralmente são chamadas de <em>transições implicitas, </em>como os estados entre o começo e o fim são implicitamente definidos pelo browser</p>

<p><img alt="A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions." src="/files/4529/TransitionsPrinciple.png" style="display: block; height: 196px; margin: auto; width: 680px;"></p>

<p>Animações CSS permitem que você decida quais propriedades animar (listando-os explicitamente), quando a animação deve começar (definindo o delay), quão longa a transição será (definindo a duração), e como a transição irá ocorrer (definindo o tempo da função, linear ou rápido no início, lento no final).</p>

<h2 id="Quais_propriedade_CSS_podem_transicionadas">Quais propriedade CSS podem transicionadas?</h2>

<p>Você mesmo pode definir qual propriedade será transicionada e de qual maneira. E isso permite a criação de transições complexas. Como não faz sentido animar algumas propriedades, existe uma lista finita <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties">com propriedades que podem ser transicionadas</a>.</p>

<div class="note">Observação:  A lista de propriedades que podem ser animadas sofre alterações a medida que a especificação se desenvolve.</div>

<p class="note">O valor <code>automatico</code> ,  geralmente é complexo.  A especificação recomenda não animar com valores automaticos. Alguns <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/User-Agent">user agents</a>, como aqueles baseados no Genko, implementam esse requisito, como aqueles baseados no WebKit, são menos rigosos. Animações CSS que utlizam o valor <code>automatico,</code> podem levar resultados imprevisiveis, dependendo do Browser e da versão, e isso pode ser evitado.</p>

<h2 id="Definindo_transições">Definindo transições</h2>

<p>Transições CSS são controladas usando a propriedade {{cssxref("transition")}}. Essa é a melhor maneira de configurar uma transição, assim evitamos parâmetros fora de sintonia, o que pode ser muito frustrante desperdiçar tanto tempo debuggando CSS.</p>

<p>Você pode controlar componentes individuais da transição com a seguinte sub propriedade:</p>

<p><strong>(Observe que essas transições fazem um loop infinitamente apenas para o propósito de nossos exemplos; <code>transitions</code> apenas visualizam a mudança na propriedade de começo ao fim. Se você precisar de visualizações desse loop, procure na propriedade {{cssxref("animation")}}.)</strong></p>

<dl>
 <dt>{{cssxref("transition-property")}}</dt>
 <dd>Especifica o nome ou nomes das propriedades CSS que as transições serão aplicadas. Somente as propriedades listadas aqui serão animadas durante a transição; alterações e todas outras propriedades ocorrem instantaneamente.</dd>
 <dt>{{cssxref("transition-duration")}}</dt>
 <dt></dt>
 <dd>Especifica a duração em que as transições devem ocorrer. Você pode especificar uma única duração que se aplica a todas as propriedades durante a transição ou vários valores para permitir que cada propriedade faça a transição em um período de tempo diferente.
 <div>
 <div id="duration_0_5s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-duration: 0.5s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush:css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transformv color;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("duration_0_5s", 275, 150)}}</div>
 </div>

 <div id="duration_1s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-duration: 1s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top -webkit-transform color;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top -webkit-transform transform color;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("duration_1s",275,150)}}</div>
 </div>

 <div id="duration_2s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-duration: 2s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 2s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 2s;
    transition-timing-function: ease-in-out;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("duration_2s",275,150)}}</div>
 </div>

 <div id="duration_4s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-duration: 4s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration: 4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 4s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration: 4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration: 4s;
    transition-timing-function: ease-in-out;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("duration_4s",275,150)}}</div>
 </div>
 </div>
 </dd>
 <dt>{{cssxref("transition-timing-function")}}</dt>
 <dt></dt>
 <dd><img alt="" src="/files/3434/TF_with_output_gt_than_1.png" style="float: left; height: 173px; margin-right: 5px; width: 130px;"> Especifica uma função para definir como os valores intermediários das propriedades são calculados. As<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function"> timing functions</a> determinam como os valores intermediários da transição são calculados. A maioria das funções de temporização pode ser especificada fornecendo o gráfico da função correspondente, conforme definido por quatro pontos definindo um bezier cúbico. Você também pode escolher o <a href="http://easings.net/">Easing Functions Cheat Sheet</a>.
 <div class="cleared">
 <div id="ttf_ease" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-timing-function: ease</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: ease;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: ease;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: ease;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: ease;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("ttf_ease",275,150)}}</div>
 </div>

 <div id="ttf_linear" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-timing-function: linear</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: linear;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("ttf_linear",275,150)}}</div>
 </div>

 <div id="ttf_stepend" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-timing-function: step-end</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: step-end;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: step-end;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: step-end;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: step-end;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("ttf_stepend",275,150)}}</div>
 </div>

 <div id="ttf_step4end" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-timing-function: steps(4, end)</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: steps(4, end);
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: steps(4, end);
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-timing-function: steps(4, end);
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-timing-function: steps(4, end);
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("ttf_step4end",275,150)}}</div>
 </div>
 </div>
 </dd>
 <dt>{{cssxref("transition-delay")}}</dt>
 <dd>Define quanto tempo esperar entre o momento que uma propriedade é alterada e a transição começa.
 <div>
 <div id="delay_0_5s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-delay: 0.5s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent {
    width: 250px;
    height: 125px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 0.5s;
    transition-timing-function: linear;
}

.box1 {
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position: absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 0.5s;
    transition-timing-function: linear;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("delay_0_5s",275,150)}}</div>
 </div>

 <div id="delay_1s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-delay: 1s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent {
    width: 250px;
    height: 125px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 1s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 1s;
    transition-timing-function: linear;
}

.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 1s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 1s;
    transition-timing-function: linear;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("delay_1s",275,150)}}</div>
 </div>

 <div id="delay_2s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-delay: 2s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent {
    width: 250px;
    height: 125px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 2s;
    transition-timing-function: linear;
}

.box1 {
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 2s;
    transition-timing-function: linear;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("delay_2s",275,150)}}</div>
 </div>

 <div id="delay_4s" style="width: 251px; display: inline-block; margin-right: 1px; margin-bottom: 1px;">
 <p><code>transition-delay: 4s</code></p>

 <div class="hidden">
 <pre class="brush:html"> &lt;div class="parent"&gt;
  &lt;div class="box"&gt;Lorem&lt;/div&gt;
&lt;/div&gt;
  </pre>

 <pre class="brush: css">.parent {
    width: 250px;
    height: 125px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 4s;
    transition-timing-function: ease-in-out;
}

.box1 {
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top: 25px;
    position: absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 4s;
    transition-timing-function: ease-in-out;
}
</pre>

 <pre class="brush:js">function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
</pre>
 </div>

 <div>{{EmbedLiveSample("delay_4s",275,150)}}</div>
 </div>
 </div>
 </dd>
</dl>

<p>A sintaxe do CSS é abreviada da seguinte forma:</p>

<pre class="brush: css">div {
    transition: &lt;property&gt; &lt;duration&gt; &lt;timing-function&gt; &lt;delay&gt;;
}</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Exemplo_simples">Exemplo simples</h3>

<p>Esse exemplo executa uma transição de com duração de 4 segundos de delay entre o tempo que o usuário passa o mouse sobre o elemento (evento mouseover), e o início do efeito da animação</p>

<pre class="brush: css">#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
</pre>

<h3 id="Exemplo_de_multiplicas_animações_de_propriedades">Exemplo de multiplicas animações de propriedades </h3>

<div class="hidden">
<h4 id="Conteúdo_HTML">Conteúdo HTML</h4>

<pre class="brush: html; highlight:[3]">&lt;body&gt;
    &lt;p&gt;The box below combines transitions for: width, height, background-color, transform. Hover over the box to see these properties animated.&lt;/p&gt;
    &lt;div class="box"&gt;Sample&lt;/div&gt;
&lt;/body&gt;</pre>
</div>

<h4 id="Conteúdo_CSS">Conteúdo CSS</h4>

<pre class="brush: css; highlight:[8,9]">.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
</pre>

<p>{{EmbedLiveSample('Multiple_animated_properties_example', 600, 300)}}</p>

<h3 id="Quando_os_tamanhos_dos_valores_das_listas_das_propriedades_são_de_tamanhos_diferentes">Quando os tamanhos dos valores das listas das propriedades são de tamanhos diferentes</h3>

<p>Se alguma propriedade da lista de valores for menor que os outros, esse valor será repetido para que eles correspondam. Por exemplo:</p>

<pre class="brush: css">div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
</pre>

<p>Isso é tratado como se fosse:</p>

<pre class="brush: css">div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}</pre>

<p>Da mesma forma, se um valor da propriedade da lista, for maior que a {{cssxref("transition-property")}}, ela será truncada, então você terá o seguinte CSS:</p>

<pre class="brush: css">div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}</pre>

<p>Isso pode ser interpretado como:</p>

<pre class="brush: css">div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}</pre>

<h3 id="Usando_transições_ao_destacar_menus">Usando transições ao destacar menus</h3>

<p>Um uso comum de css é para destacar os itens do menu, como hover quando o usúario passa o mouse sobre um elemento. É facíl fácil usar transições CSS para tornar o efeito mais atraente;</p>

<p>Antes de olharmos para os códigos, você poderia dar uma olhada nesse <a href="https://codepen.io/anon/pen/WOEpva">live demo</a> (assumindo que seu browser suporte transições).</p>

<p>Primeiro, nós criamos o menu utilizando apenas HTML</p>

<pre class="brush: html">&lt;nav&gt;
  &lt;a href="#"&gt;Home&lt;/a&gt;
  &lt;a href="#"&gt;About&lt;/a&gt;
  &lt;a href="#"&gt;Contact Us&lt;/a&gt;
  &lt;a href="#"&gt;Links&lt;/a&gt;
&lt;/nav&gt;</pre>

<p>Em seguida, nós implementamos o CSS para implementar o visual e aparência do nosso menu. As partes relevantes são serão mostrada aqui:</p>

<pre class="brush: css">a {
  color: #fff;
  background-color: #333;
  transition: all 1s ease-out;
}

a:hover,
a:focus {
  color: #333;
  background-color: #fff;
}
</pre>

<p>Este CSS estabelece a aparência do menu, com as cores de fundo e texto mudando quando o o ocorre o evento de {{cssxref(":hover")}} e estado de {{cssxref(":focus")}}.</p>

<h2 id="Exemplos_JavaScript">Exemplos JavaScript</h2>

<div class="note">
<p>Cuidados devem ser tomados ao usar uma transição imediatamente após:</p>

<ul>
 <li>adding the element to the DOM using <code>.appendChild()</code></li>
 <li>removing an element's <code>display: none;</code> property.</li>
</ul>

<p>This is treated as if the initial state had never occurred and the element was always in its final state. The easy way to overcome this limitation is to apply a <code>window.setTimeout()</code> of a handful of milliseconds before changing the CSS property you intend to transition to.</p>
</div>

<h3 id="Using_transitions_to_make_JavaScript_functionality_smooth">Using transitions to make JavaScript functionality smooth</h3>

<p>Transitions are a great tool to make things look much smoother without having to do anything to your JavaScript functionality. Take the following example.</p>

<pre class="brush: html">&lt;p&gt;Click anywhere to move the ball&lt;/p&gt;
&lt;div id="foo"&gt;&lt;/div&gt;
</pre>

<p>Using JavaScript you can make the effect of moving the ball to a certain position happen:</p>

<pre class="brush: js">var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);
</pre>

<p>With CSS you can make it smooth without any extra effort. Simply add a transition to the element and any change will happen smoothly:</p>

<pre class="brush: css">p {
  padding-left: 60px;
}

#foo {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
</pre>

<p>Você pode brincar um pouco aqui: <a href="http://jsfiddle.net/9h261pzo/291/">http://jsfiddle.net/9h261pzo/291/</a></p>

<h3 id="Detectando_o_começo_e_a_completude_de_uma_transição">Detectando o começo e a completude de uma transição</h3>

<p>Você pode usar o evento {{event("transitionend")}} para detectar a uma animação que estava sendo executada chegou ao fim. Esse é o objeto {{domxref("TransitionEvent")}}, que possúi duas propriedades adicionadas além do objeto típico </p>

<dl>
 <dt><code>propertyName</code></dt>
 <dd>A string indicando o nome da propriedade CSS cuja transição será completada</dd>
</dl>



<dl>
 <dt><code>elapsedTime</code></dt>
 <dd>A float indicating the number of seconds the transition had been running at the time the event fired. This value isn't affected by the value of {{cssxref("transition-delay")}}.</dd>
</dl>

<p>As usual, you can use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method to monitor for this event:</p>

<pre class="brush: js">el.addEventListener("transitionend", updateTransition, true);
</pre>

<p>Você detecta o começo de uma transição usando {{event("transitionrun")}} (antes do delay) e {{event("transitionstart")}} (depois do delay):</p>

<pre class="brush: js">el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);</pre>

<div class="note"><strong>Observação</strong>: O evento <code>transitionend</code> não dispara se a transição é abortada antes de a transição ser concluída, porque o efeito é feito com {{cssxref("display")}}<code>: none</code></div>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '', '')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td>Definição Inícial</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_Também">Veja Também</h2>

<ul>
 <li>The {{domxref("TransitionEvent")}} interface and the {{event("transitionend")}} event.</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">Utilizando animações css</a></li>
</ul>
