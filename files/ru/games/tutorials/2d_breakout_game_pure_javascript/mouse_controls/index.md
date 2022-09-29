---
title: Управление мышью
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
tags:
  - Игры
  - Начинающий
  - канвас
  - мышь
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
original_slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Управление_мышью
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Заключение")}}</p>

<div class="summary">
<p>Это 9-й шаг из 10 в <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Вы можете найти исходный код к этому уроку в <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html">Gamedev-Canvas-workshop/lesson9.html</a>.</p>
</div>

<p><span class="seoSummary">Сама игра на самом деле закончена, так что давайте отполируем её. Мы уже добавили элементы управления клавиатуру, но мы могли бы легко добавить элемент управления мышь.</span></p>

<h2 id="Отслеживание_движений_мыши">Отслеживание движений мыши</h2>

<p>Отслеживание движений мыши ещё проще, чем обработка нажатий клавиш. Все, что нам нужно, это следить за событиями {{event("mousemove")}}. Добавьте следующую строку в том же месте, как и для других событий, чуть ниже <code>keyup event</code>:</p>

<pre class="brush: js">document.addEventListener("mousemove", mouseMoveHandler, false);</pre>

<h2 id="Привязка_движения_ракетки_к_движению_мыши">Привязка движения ракетки к движению мыши</h2>

<p>Мы можем обновить положение ракетки на основе координат указателя - следующая функция обработчика сделает именно это. Добавьте в код следующую функцию под предыдущей добавленной строкой:</p>

<pre class="brush: js">function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX &gt; 0 &amp;&amp; relativeX &lt; canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}</pre>

<p>В этой функции мы сначала разрабатываем значение <code>relativeX</code>, которое равно горизонтальному положению мыши в окне браузера (<code>e.clientX</code>) минус расстояние между левым краем canvas и левым краем окна браузера (<code>canvas.offsetLeft</code>) - фактически это равно расстоянию между левым краем canvas и указателем мыши. Если относительный указатель позиции X больше нуля и меньше, чем ширина Canvas, указатель находится в пределах границы Canvas, и <code>paddleX</code> установки (крепится на левый край ракетки) - устанавливается на <code>relativeX</code> значение минус половина ширины ракетки, так что движение будет по отношению к середине ракетки.</p>

<p>Ракетка теперь будет следовать за положением курсора мыши, но так как мы ограничиваем движение размером Canvas, он не исчезнет полностью с обеих сторон.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Это последнее состояние кода для сравнения:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/1L9ep9r2/1/","","395")}}</p>

<div class="summary">
<p>Упражнение: отрегулируйте границы движения ракетки так, что вся ракетка будет видна на обоих краях Canvas, а не только на его половину.</p>
</div>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Теперь у нас есть полная игра, мы закончим нашу серию уроков с ещё несколькими небольшими хитростями — <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch/Finishing_up">Finishing up</a>.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up")}}</p>
