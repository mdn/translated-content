---
title: Otimizando canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
tags:
  - Canvas
  - Gráfico 2D
  - Otimização
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/Guide/HTML/Canvas_tutorial/Otimizando_Canvas
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</div>

<div class="summary">
<p>O elemento {{HTMLElement("canvas")}} é um dos padrões mais largamente utilizados para renderização de gráficos 2D na Web. É muito usado em jogos e em visualizações complexas. Porém, quando sítios web e aplicativos utilizam canvas até seus limites, começam a surgir problemas de perda de performance. <span class="seoSummary">Este artigo tem o objetivo de prover sugestões de otimização de seu elemento canvas e garantir que seu site ou aplicativo funcione melhor.</span></p>
</div>

<h2 id="Dicas_de_performance">Dicas de performance</h2>

<p>O que segue é uma coleção de dicas para melhorar a performance.</p>

<h3 id="Pre-render_similar_primitives_or_repeating_objects_on_an_off-screen_canvas">Pre-render similar primitives or repeating objects on an off-screen canvas</h3>

<p>If you find yourself with complex drawing operations on each frame, consider creating an offscreen canvas, draw to it once (or whenever it changes) on the offscreen canvas, then on each frame draw the offscreen canvas.</p>

<pre class="brush: js">myEntity.offscreenCanvas = document.createElement('canvas');
myEntity.offscreenCanvas.width = myEntity.width;
myEntity.offscreenCanvas.height = myEntity.height;
myEntity.offscreenContext = myEntity.offscreenCanvas.getContext('2d');

myEntity.render(myEntity.offscreenContext);
</pre>

<h3 id="Avoid_floating-point_coordinates_and_use_integers_instead">Avoid floating-point coordinates and use integers instead</h3>

<p>Sub-pixel rendering occurs when you render objects on a canvas without whole values.</p>

<pre class="brush: js">ctx.drawImage(myImage, 0.3, 0.5);
</pre>

<p>This causes the browser to do extra calculations to create the anti-aliasing effect. To avoid this, make sure to round all co-ordinates used in calls to {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} using {{jsxref("Math.floor()")}}, for example.</p>

<h3 id="Don’t_scale_images_in_drawImage">Don’t scale images in <code>drawImage</code></h3>

<p>Cache various sizes of your images on an offscreen canvas when loading as opposed to constantly scaling them in {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.</p>

<h3 id="Use_multiple_layered_canvases_for_complex_scenes">Use multiple layered canvases for complex scenes</h3>

<p>You may find you have some elements that are frequently changing and moving around whereas other things (like UI) never change. An optimization in this situation is to create layers using multiple canvas elements.</p>

<p>For example you could create a UI layer that sits on top of everything and is only drawn during user input. You could create game layer where the frequently updating entities exist and a background layer for entities that rarely update.</p>

<pre class="brush: html">&lt;div id="stage"&gt;
  &lt;canvas id="ui-layer" width="480" height="320"&gt;&lt;/canvas&gt;
  &lt;canvas id="game-layer" width="480" height="320"&gt;&lt;/canvas&gt;
  &lt;canvas id="background-layer" width="480" height="320"&gt;&lt;/canvas&gt;
&lt;/div&gt;

&lt;style&gt;
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black
  }
  canvas { position: absolute; }
  #ui-layer { z-index: 3 }
  #game-layer { z-index: 2 }
  #background-layer { z-index: 1 }
&lt;/style&gt;
</pre>

<h3 id="CSS_for_large_background_images">CSS for large background images</h3>

<p>If like most games you have a static background image, use a plain {{HTMLElement("div")}} element with a CSS {{cssxref("background")}} property and position it under the canvas. This will avoid drawing a large image to the canvas on every tick.</p>

<h3 id="Scaling_canvas_using_CSS_transforms">Scaling canvas using CSS transforms</h3>

<p><a href="/en-US/docs/Web/Guide/CSS/Using_CSS_transforms">CSS transforms</a> are faster by using the GPU. Best case is to not scale the canvas or have a smaller canvas and scale up rather than a bigger canvas and scale down. For Firefox OS, target 480 x 320 px.</p>

<pre class="brush: js">var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
</pre>

<h3 id="Turn_off_transparency">Turn off transparency</h3>

<p>If your game uses canvas and doesn’t need to be transparent, set the <code>alpha</code> option to <code>false</code> when creating a drawing context with <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext" title="The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported."><code>HTMLCanvasElement.getContext()</code></a>. This information can be used internally to optimize rendering.</p>

<pre class="brush: js">var ctx = canvas.getContext('2d', { alpha: false });</pre>

<h3 id="More_tips">More tips</h3>

<ul>
 <li>Batch canvas calls together (for example, draw a poly-line instead of multiple separate lines).</li>
 <li>Avoid unnecessary canvas state changes.</li>
 <li>Render screen differences only, not the whole new state.</li>
 <li>Avoid the {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} property whenever possible.</li>
 <li>Avoid <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text">text rendering</a> whenever possible.</li>
 <li>Try different ways to clear the canvas ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. resizing the canvas)</li>
 <li>With animations, use {{domxref("window.requestAnimationFrame()")}} instead of {{domxref("window.setInterval()")}} .</li>
 <li>Be careful with heavy physics libraries</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref">Improving HTML5 Canvas Performance – HTML5 Rocks</a></li>
 <li><a href="https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/">Optimizing your JavaScript game for Firefox OS – Mozilla Hacks</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</p>
