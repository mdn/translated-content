---
title: CSS Animations tips and tricks
slug: Web/CSS/CSS_Animations/Tips
tags:
  - Animações CSS
  - CSS
  - Comofazer
  - Exemplo
  - Tutorial
translation_of: Web/CSS/CSS_Animations/Tips
---
<p><span class="seoSummary">Animações CSS tornam possível fazer coisas incríveis com os elementos que compoem seus documentos e aplicativos. No entanto, existem coisas que você pode querer fazer que não são óbvias, ou jeitos espertos de fazer coisas que você pode não ter pensado de imediato. Esse artigo é uma coleção de dicas e truques que descobrimos que podem tornar seu trabalho mais fácil, incluindo como rodar uma animação parada novamente.</span></p>

<h2 id="Run_an_animation_again" name="Run_an_animation_again">Rode uma animação novamente</h2>

<p>A especificação <a href="/en-US/docs/Web/CSS/CSS_Animations">Animações CSS</a> não oferece um modo de rodar uma animação novamente. Não existe um método mágico <code>resetAnimation()</code> nos elementos, e você não pode nem mesmo apenas atribuir o {{cssxref("animation-play-state")}} do elemento para <code>"running"</code> de novo. Ao invés disso, você tem que usar macetes para fazer com que uma animação parada reexecute.</p>

<p>Aqui está um modo de fazer o qual achamos estável e confiável o suficiente para sugerir à você.</p>

<h3 id="Conteúdo_HTML">Conteúdo HTML</h3>

<p>Primeiro, vamos definir o HTML para uma {{HTMLElement("div")}} que gostaríamos de animar e um botão que vai executar (ou reexecutar) a animação.</p>

<pre class="brush: html">&lt;div class="box"&gt;
&lt;/div&gt;

&lt;div class="runButton"&gt;Clique em mim para rodar a animação&lt;/div&gt;</pre>

<h3 id="Conteúdo_CSS">Conteúdo CSS</h3>

<p>Agora vamos definir a animação em sí usando CSS. Algum CSS que não é importante (o estilo do botão "Rodar" em sí) não é mostrado aqui, por brevidade.</p>

<div class="hidden">
<pre class="brush: css">.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font: 14px "Open Sans", "Arial", sans-serif;
}</pre>
</div>

<pre class="brush: css">@keyframes colorchange {
  0% { background: yellow }
  100% { background: blue }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}</pre>

<p>Existem duas classes aqui. A classe "<code>box</code>" é a descrição básica da aparência da caixa, sem nenhuma informação de animação inclusa. Os detalhes da animação são incluídos na classe "<code>changing</code>", a qual diz que o {{cssxref("@keyframes")}} chamado <code>"colorchange"</code> deveria ser usado no decorrer de dois segundos para animar a caixa.</p>

<p>Perceba que por isso a caixa não começa com nenhum efeito de animação configurado, então não será animada.</p>

<h3 id="Conteúdo_JavaScript">Conteúdo JavaScript</h3>

<p>A seguir vamos olhar para o JavaScript que faz o trabalho. O macete dessa técnica está na função <code>play()</code> , a qual é chamada quando o usuário clica no botão de "rodar".</p>

<pre class="brush: js">function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}</pre>

<p>Isso parece esquisito, não parece? É porque a única maneira de executar uma animação novamente é removendo o efeito de animação, deixar o documento recomputar os estilos para que ele saiba que você fez isso, e então adicionar o efeito de animação de volta ao elemento. Para fazer isso acontecer temos que ser criativos.</p>

<p>Aqui está o que acontece quando a função <code>play()</code> é chamada:</p>

<ol>
 <li>The box's list of CSS classes is reset to simply <code>"box"</code>. This has the effect of removing any other classes currently applied to the box, including the <code>"changing"</code> class that handles animation. In other words, we're removing the animation effect from the box. However, changes to the class list don't take effect until the style recomputation is complete and a refresh has occurred to reflect the change.</li>
 <li>To be sure that the styles are recalculated, we use {{domxref("window.requestAnimationFrame()")}}, specifying a callback. Our callback gets executed just before the next repaint of the document. The problem for us is that because it's before the repaint, the style recomputation hasn't actually happened yet! So...</li>
 <li>Our callback cleverly calls <code>requestAnimationFrame()</code> a second time! This time, the callback is run before the next repaint, which is after the style recomputation has occurred. This callback adds the <code>"changing"</code> class back onto the box, so that the repaint will start the animation once again.</li>
</ol>

<p>Claro, também precisamos adicionar um tratador de evento para o nosso botão de "rodar" para que ele de fato faça algo:</p>

<pre class="brush: js">document.querySelector(".runButton").addEventListener("click", play, false);</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{ EmbedLiveSample('Run_an_animation_again', 320, 160) }}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>Animações CSS</li>
 <li>Usando Animações CSS</li>
 <li>{{domxref("Window.requestAnimationFrame()")}}</li>
</ul>
