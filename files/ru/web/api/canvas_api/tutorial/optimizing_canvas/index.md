---
title: Оптимизация canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
tags:
  - Canvas
  - Graphics
  - HTML
  - HTML5
  - Tutorial
  - Оптимизация
  - Урок
  - Холст
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</div>

<div class="summary">
<p>Элемент {{HTMLElement ("canvas")}} является одним из наиболее широко используемых инструментов для рендеринга 2D-графики в Интернете. Однако когда веб-сайты и приложения используют Canvas API на пределе его возможностей, производительность начинает снижаться. В этой статье приводятся предложения по оптимизации использования элемента canvas для обеспечения хорошей работы графики.</p>
</div>

<h2 id="Советы_по_производительности">Советы по производительности</h2>

<p>Ниже приведён сборник советов по улучшению производительности canvas.</p>

<h3 id="Предварительно_отрисуйте_похожие_примитивы_или_повторяющиеся_объекты_на_offscreen_canvas">Предварительно отрисуйте похожие примитивы или повторяющиеся объекты на offscreen canvas</h3>

<p>Если вы повторяете одни и те же операции рисования в каждом кадре анимации, рассмотрите возможность их выгрузки на offscreen canvas. Затем вы можете визуализировать закадровое изображение на свой основной canvas так часто, как это необходимо, без необходимости повторять шаги, необходимые для его генерации.</p>

<pre class="brush: js">myCanvas.offscreenCanvas = document.createElement('canvas');
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext('2d').drawImage(myCanvas.offScreenCanvas, 0, 0);
</pre>

<h3 id="Избегайте_координат_с_плавающей_точкой_и_используйте_вместо_них_целые_числа">Избегайте координат с плавающей точкой и используйте вместо них целые числа</h3>

<p>Субпиксельный рендеринг происходит при рендеринге объектов на canvas без целых значений.</p>

<pre class="brush: js">ctx.drawImage(myImage, 0.3, 0.5);
</pre>

<p>Это заставляет браузер выполнять дополнительные вычисления для создания эффекта сглаживания. Чтобы избежать этого, обязательно округлите все координаты, используемые в вызовах {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}, например, с помощью {{jsxref("Math.floor()")}}.</p>

<h3 id="Не_масштабируйте_изображения_в_drawImage">Не масштабируйте изображения в <code>drawImage</code></h3>

<p>При загрузке кешируйте изображения разных размеров на offscreen canvas, а не постоянно масштабируйте их в {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.</p>

<h3 id="Используйте_несколько_слоёв_canvas_для_сложных_сцен">Используйте несколько слоёв canvas для сложных сцен</h3>

<p>Вы можете обнаружить, что некоторые объекты в вашем приложении нужно часто перемещать или менять, в то время как другие остаются относительно статичными. Возможной оптимизацией в этой ситуации является наложение ваших элементов с использованием нескольких элементов <code>&lt;canvas&gt;</code>.</p>

<p>Например, допустим, у вас есть игра с пользовательским интерфейсом наверху, геймплеем в середине и статическим фоном внизу. В этом случае вы можете разбить свою игру на три слоя <code>&lt;canvas&gt;</code>. Пользовательский интерфейс будет меняться только при изменении пользователем, слой с игровым процессом будет меняться с каждым новым кадром, а фон останется в основном неизменным.</p>

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
    border: 2px solid black;
  }

  canvas { position: absolute; }
  #ui-layer { z-index: 3; }
  #game-layer { z-index: 2; }
  #background-layer { z-index: 1; }
&lt;/style&gt;
</pre>

<h3 id="Используйте_простой_CSS_для_больших_фоновых_изображений">Используйте простой CSS для больших фоновых изображений</h3>

<p>Если у вас есть статическое фоновое изображение, вы можете нарисовать его на простом элементе {{HTMLElement("div")}}, используя свойство CSS {{cssxref("background")}}, и расположить его под canvas. Это сведёт на нет необходимость рендеринга фона на canvas на каждом тике.</p>

<h3 id="Масштабирование_холста_с_использованием_CSS-преобразований">Масштабирование холста с использованием CSS-преобразований</h3>

<p><a href="/en-US/docs/Web/Guide/CSS/Using_CSS_transforms">CSS-преобразования</a> быстрее, поскольку они используют графический процессор. В идеале, не стоит не масштабировать canvas, или можно использовать меньший canvas и увеличивать его при необходимости, но не уменьшать.</p>

<pre class="brush: js">var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
</pre>

<h3 id="Отключите_прозрачность">Отключите прозрачность</h3>

<p>Если ваше приложение использует canvas и не нуждается в прозрачном фоне, установите для параметра <code>alpha</code>значение <code>false</code> при создании контекста рисования с помощью {{domxref("HTMLCanvasElement.getContext()")}}. Эта информация может использоваться браузером для оптимизации рендеринга.</p>

<pre class="brush: js">var ctx = canvas.getContext('2d', { alpha: false });</pre>

<h3 id="Другие_советы">Другие советы</h3>

<ul>
 <li>Объединяйте запросы к canvas. Например, рисуйте одну ломанную линию вместо нескольких отдельных линий.</li>
 <li>Избегайте ненужных изменений состояния canvas.</li>
 <li>Отображайте только изменения экрана, а не заново перерисовывайте.</li>
 <li>По возможности избегайте свойства {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}.</li>
 <li>Избегайте <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text">рендеринга текста</a>, когда это возможно.</li>
 <li>Попробуйте разные способы очистки canvas (({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}, или {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}, или изменение размера canvas).</li>
 <li>С анимациями используйте {{domxref("window.requestAnimationFrame()")}} вместо {{domxref("window.setInterval()")}}.</li>
 <li>Будьте осторожны с тяжёлыми физическими библиотеками.</li>
</ul>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref">Improving HTML5 Canvas Performance – HTML5 Rocks</a></li>
 <li><a href="https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/">Optimizing your JavaScript game for Firefox OS – Mozilla Hacks</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</p>
