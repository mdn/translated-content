---
title: Инициализация фреймворка
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
tags:
  - 2D
  - Canvas
  - HTML
  - JavaScript
  - Phaser
  - Игры
  - Руководство
translation_of: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("ru/docs/")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Scaling")}}</p>

<div class="summary">
<p>Это первый из 16 уроков о том, как пользоваться <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">Gamedev Phaser</a>. После прочтения вы можете найти исходный код для этого урока на <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html">Gamedev-Phaser-Content-Kit/demos/lesson01.html</a>.</p>
</div>

<p><span class="seoSummary">Перед тем, как мы начнём разрабатывать функциональность игры, нам нужно создать базовую структуру, чтобы рендерить её. Это может быть сделано с помощью HTML:  фреймворк Phaser создаст обязательный элемент </span>{{htmlelement("canvas")}}.</p>

<h2 id="HTML-код_игры">HTML-код игры</h2>

<p>Структура HTML-документа достаточно простая. Игра будет отображаться в элементе {{htmlelement("canvas")}}, который будет сгенерирован фреймворком. Используя свой любимый редактор, создайте новый HTML-документ, сохраните его как <code>index.html</code> и добавьте в него следующий код:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Gamedev Phaser Workshop - lesson 01: Initialize the framework&lt;/title&gt;
    &lt;style&gt;* { padding: 0; margin: 0; }&lt;/style&gt;
    &lt;script src="js/phaser.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
      preload: preload, create: create, update: update
    });
    function preload() {}
    function create() {}
    function update() {}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Загрузка_Phaser">Загрузка Phaser</h2>

<p>Дальше мы должны скачать исходный код фреймворка Phaser и использовать его в нашем HTML-документе. Это руководство использует Phaser V2, который не будет работать с текущей версией Phaser V3. Ссылка на скачивание Phaser V2 доступна в разделе Archive. </p>

<ol>
 <li>Перейдите на <a href="https://phaser.io/download/release/2.7.6">страницу загрузки Phaser</a>.</li>
 <li>Выберите наиболее удобный для вас вариант загрузки. Я рекомендую <em>min.js </em>скачивание, потому что исходный код будет меньше, да и вам не придётся разбираться в нём.</li>
 <li>Сохраните Phaser внутри <code>/js</code> директории, находящейся в том же месте, что и <code>index.html</code></li>
 <li>Обновите атрибут <code>src</code> в первом элементе {{htmlelement("script")}}, как это показано выше.</li>
</ol>

<h2 id="Что_мы_имеем">Что мы имеем</h2>

<p>На данный момент у нас есть обозначенный <code>charset</code>, {{htmlelement("title")}} и немного CSS, что убрать значения свойств <code>margin</code> и <code>padding</code> по умолчанию. Также мы добавили элемент {{htmlelement("script")}}, который позволяет использовать Phaser на странице. Во втором {{htmlelement("script")}} мы написали код, который позволит отображать игру и управлять ею. </p>

<p>Фреймворк автоматически создаёт элемент {{htmlelement("canvas")}}. Мы инициализировали его, создав новый <code>Phaser.Game</code> объект и присвоив его переменной. Также мы добавили параметры:</p>

<ul>
 <li><code>width</code> и <code>height</code> устанавливают ширину и высоту {{htmlelement("canvas")}} соответственно.</li>
 <li>Метод рендеринга. Здесь есть три опции <code>AUTO</code>, <code>CANVAS</code> и <code>WEBGL</code>. Мы можем установить одно из двух последних значений или <code>AUTO</code>, чтобы Phaser сам определил, что использовать. Обычно используется WebGL, но если браузер его не поддерживает, то Canvas 2D.</li>
 <li><code>id</code> элемента {{htmlelement("canvas")}} используется для рендеринга, если один {{htmlelement("canvas")}} уже есть (мы установили значение <code>null</code>, чтобы Phaser создал свой собственный).</li>
 <li>Дальше идут названия трёх ключевых функций Phaser: загрузки (load), старта (start) и обновления (update) игры на каждом кадре; мы выбрали такие же названия, чтобы сохранять чистоту кода.
  <ul>
   <li><code>preload</code> заботится о предзагрузке ресурсов игры</li>
   <li><code>create</code> вызывается только один раз, когда всё загружено и готово</li>
   <li><code>update</code> вызывается на каждом кадре</li>
  </ul>
 </li>
</ul>

<div class="warning">
<p><strong>Важно: </strong>До конца прохождения всех уроков вы должны использовать <code>CANVAS</code>, как метод рендеринга, а не <code>AUTO</code>, как это было в нашем коде. Всё это нужно, потому что метод <code>AUTO</code> больше не поддерживается в последних версиях браузера.</p>
</div>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Это весь исходный код, который мы написали на этом уроке:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}</p>

<h2 id="Следующее">Следующее</h2>

<p>Мы создали базовую HTML структуру и узнали немного об инициализации Phaser. Давайте продолжим и узнаем про <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Scaling">масштабирование</a>.</p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Scaling")}}</p>
