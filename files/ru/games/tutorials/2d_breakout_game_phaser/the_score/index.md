---
title: Очки
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
translation_of: Games/Tutorials/2D_breakout_game_Phaser/The_score
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs/")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Победа")}}</p>

<div class="summary">
<p>Это <strong>11 </strong>из 16 уроков <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">руководства разработки игры с помощью Phaser</a>. Исходный код этого урока вы можете найти здесь:  <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html">Gamedev-Phaser-Content-Kit/demos/lesson11.html</a>.</p>
</div>

<p><span class="seoSummary">Очки сделают игру более интересной — вы можете пробовать побить собственный рекорд или рекорд друзей. В этой главе мы добавим систему очков в нашу игру.</span></p>

<p>Мы будем использовать отдельные переменные для хранения количества очков и текста, который Phaser выведет на экран при помощи функции <code>text()</code>.</p>

<h2 id="Определим_переменные">Определим переменные</h2>

<p>Добавьте две новых переменных после всех наших текущих определений переменных:</p>

<pre class="brush: js">// ...
var scoreText;
var score = 0;
</pre>

<h2 id="Выводим_очки_на_экран">Выводим очки на экран</h2>

<p>А сейчас добавим строку кода в самый конец функции <code>create()</code>:</p>

<pre class="brush: js">scoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });
</pre>

<p>Функция <code>text()</code> может принимать четыре параметра:</p>

<ul>
 <li>Координаты x и y текста.</li>
 <li>Сам текст.</li>
 <li>Шрифт и стиль текста.</li>
</ul>

<p>Последний параметр выглядит очень похожим на CSS-стиль. В нашем случае, текст будет голубой, размер 18 пикселей, шрифт Arial.</p>

<h2 id="Обновляем_очки_при_разрушении_кирпича">Обновляем очки при разрушении кирпича</h2>

<p>Мы будем увеличивать количество очков каждый раз, когда мячик разобьёт кирпич и обновлять текст <code>scoreText</code>, который отображает на экране текущие очки. Текст обновляется вызовом функции <code>setText()</code>. Добавьте эти две строчки кода в функцию <code>ballHitBrick()</code>:</p>

<pre class="brush: js">function ballHitBrick(ball, brick) {
    brick.kill();
    score += 10;
    scoreText.setText('Points: '+score);
}
</pre>

<p>Вот и всё — обновите страницу <code>index.html</code> и проверьте, как очки изменяются, при разрушении кирпича.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}</p>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Теперь мы имеем систему очков, но какой смысл в этом, если мы не можем выиграть? Давайте добавим логику <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0">выигрыша</a>.</p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Победа")}}</p>
