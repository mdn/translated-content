---
title: Использование CSS-градиентов
slug: Web/CSS/CSS_Images/Using_CSS_gradients
tags:
  - Градиенты
  - Примеры
  - Руководство
translation_of: Web/CSS/CSS_Images/Using_CSS_gradients
---
<div>{{CSSRef}}</div>

<p><strong>CSS-градиенты</strong> представлены типом данных {{cssxref("&lt;gradient&gt;")}}, специальным типом {{cssxref("&lt;image&gt;")}}, состоящим из последовательного перехода между двумя и более цветами. Вы можете выбрать один из трёх типов градиентов: <em>линейный</em> (создаётся с помощью функции {{cssxref("linear-gradient")}}), <em>круговой</em> (создаётся с помощью {{cssxref("radial-gradient")}}) и конический (создаётся с помощью функции {{cssxref("conic-gradient")}}). Вы можете также создавать повторяющиеся градиенты с помощью функций {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}} и {{cssxref("repeating-conic-gradient")}}.</p>

<p>Градиенты могут быть использованы везде, где может быть использован тип <code>&lt;image&gt;</code>, например в качестве фона. Так как градиенты генерируются динамически, они могут избавить от необходимости использовать файлы растровых изображений, которые ранее использовались для достижения похожих эффектов. В дополнение к этому, так как градиенты генерируются браузером, они выглядят лучше, чем растровые изображения в случае увеличения масштаба, и их размер может быть изменён на лету.</p>

<p>Мы начнём с того, что покажем вам линейные градиенты, затем покажем возможности, поддерживаемые всеми типами градиентов, используя линейные градиенты в качестве примера, затем перейдём к круговым, коническим и повторяющимся градиентам.</p>

<h2 id="Использование_линейных_градиентов">Использование линейных градиентов</h2>

<p>Линейный градиент создаёт цветную полосу, имеющую вид прямой линии.</p>

<div>
<h3 id="Обычный_линейный_градиент">Обычный линейный градиент</h3>

<p>Чтобы создать самый простой тип градиента, всё, что вам нужно – это указать два цвета. Они называются <em>точки остановки цвета</em>. Их должно быть, как минимум, две, но у вас может быть столько, сколько захотите.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="simple-linear"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.simple-linear {
  background: linear-gradient(blue, pink);
}</pre>

<p>{{ EmbedLiveSample('Обычный_линейный_градиент', 120, 120) }}</p>
</div>

<div>
<h3 id="Изменение_направления">Изменение направления</h3>

<p>По умолчанию линейные градиенты идут сверху вниз. Вы можете изменить угол поворота путём задания направления.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="horizontal-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
</pre>

<p>{{ EmbedLiveSample('Изменение_направления', 120, 120) }}</p>
</div>

<div>
<h3 id="Диагональные_градиенты">Диагональные градиенты</h3>

<p>Вы можете даже создать градиент, проходящий диагонально, из угла в угол.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="diagonal-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 200px;
  height: 100px;
}</pre>
</div>

<pre class="brush: css">.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
</pre>

<p>{{ EmbedLiveSample('Диагональные_градиенты', 200, 100) }}</p>
</div>

<div>
<h3 id="Использование_углов">Использование углов</h3>

<p>Если вы хотите больше контроля над его направлением, вы можете задать градиенту определённый угол.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="angled-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
</pre>

<p>{{ EmbedLiveSample('Использование_углов', 120, 120) }}</p>

<p>При использовании угла <code>0deg</code> создаётся вертикальный градиент, идущий снизу вверх, <code>90deg</code> создаёт горизонтальный градиент, идущий слева направо, и так далее по часовой стрелке. Отрицательные углы идут против часовой стрелки.</p>

<p><img alt="linear_redangles.png" class="default internal" src="/files/3811/linear_red_angles.png"></p>
</div>

<h2 id="Указание_цветов_и_создание_эффектов">Указание цветов и создание эффектов</h2>

<p>Все типы CSS-градиентов – это диапазон позиционно-зависимых цветов. Цвета, создаваемые CSS-градиентами, могут варьироваться непрерывно с изменением позиции, создавая плавные цветовые переходы. Возможно также создавать полосы сплошных цветов, и резкие переходы между двумя цветами. Следующее примеры работают во всех градиентных функциях:</p>

<div>
<h3 id="Использование_более_двух_цветов">Использование более двух цветов</h3>

<p>Вам не нужно ограничиваться двумя цветами – вы можете использовать столько, сколько хотите! По умолчанию цвета равномерно распределены по градиенту.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="auto-spaced-linear-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
</pre>

<p>{{ EmbedLiveSample('Использование_более_двух_цветов', 120, 120) }}</p>
</div>

<div>
<h3 id="Расположение_точек_остановок_цветов">Расположение точек остановок цветов</h3>

<p>Вам не нужно оставлять ваши точки остановок цветов на их исходных позициях. Чтобы подправить их расположение, вы можете не задавать каждому ничего, или задать одну или две процентные, а для круговых и линейных градиентов – абсолютные значения. Если вы зададите расположение с процентах, <code>0%</code> будет представлять начальную точку, в то время как <code>100%</code> будет являться конечной точкой; однако, если необходимо, вы можете использовать значения и вне этого диапазона для достижения желаемого эффекта. Если вы не будете задавать расположение, позиция этой точки остановки будет автоматически рассчитана за вас так, что первая точка остановки будет расположена на <code>0%</code>, а последняя – на <code>100%</code>, а все остальные точки остановки будут расположены на полпути между соседними точками остановки.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="multicolor-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.multicolor-linear {
   background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
</pre>

<p>{{ EmbedLiveSample('Расположение_точек_остановок_цветов', 120, 120) }}</p>
</div>

<div>
<h3 id="Создание_резких_переходов">Создание резких переходов</h3>

<p>Чтобы создать резкий переход между двумя цветами, т. е. получить черту вместо постепенного перехода, обе соседние точки остановки должны быть установлены в одном месте. В этом примере цвета делят точку остановки на отметке <code>50%</code>, посередине градиента:</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="striped"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.striped {
   background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}</pre>

<p>{{ EmbedLiveSample('Создание_резких_переходов', 120, 120) }}</p>
</div>

<div>
<h3 id="Подсказки_градиента">Подсказки градиента</h3>

<p>По умолчанию градиент идёт плавно от одного цвета до другого. Вы можете добавить цветовую подсказку, чтобы переместить значение средней точки перехода в определённую точку градиента. В этом примере мы переместили среднюю точку перехода из отметки 50% на отметку 10%.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="color-hint"&gt;&lt;/div&gt;
&lt;div class="simple-linear"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px; float: left; margin-right: 10px;
}</pre>
</div>

<pre class="brush: css">.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}</pre>

<p>{{ EmbedLiveSample('Подсказки_градиента', 120, 120) }}</p>
</div>

<div>
<h3 id="Создание_цветных_линий_и_полосок">Создание цветных линий и полосок</h3>

<p>Чтобы добавить внутрь градиента сплошную цветную область без плавного перехода, добавьте две позиции для точки остановки. Точки остановки могут быть в двух позициях, что эквивалентно двум подряд точкам остановки с тем же цветом на разных позициях. Цвет достигнет полной насыщенности на первой точке, проследует с той же насыщенностью до второй точки остановки и перейдёт в цвет следующей точки остановки через первую позицию следующей точки остановки.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="multiposition-stops"&gt;&lt;/div&gt;
&lt;div class="multiposition-stop2"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}</pre>
</div>

<pre class="brush: css">.multiposition-stops {
   background: linear-gradient(to left,
       lime 20%, red 30%, red 45%, cyan 55%, cyan 70%, yellow 80% );
   background: linear-gradient(to left,
       lime 20%, red 30% 45%, cyan 55% 70%, yellow 80% );
}
.multiposition-stop2 {
   background: linear-gradient(to left,
      lime 25%, red 25%, red 50%, cyan 50%, cyan 75%, yellow 75% );
   background: linear-gradient(to left,
      lime 25%, red 25% 50%, cyan 50% 75%, yellow 75% );
}
</pre>

<p>{{ EmbedLiveSample('Создание_цветных_линий_и_полосок', 120, 120) }}</p>

<p>В первом примере выше лаймовый цвет идёт от отметки 0%, далее, как указано, до отметки 20%, сделает переход от лаймового до красного через 10% ширины градиента, достигнет сплошного красного на отметке 30%, и останется таким до 45% градиента, где он потускнеет до голубого, оставаясь таким ещё 15% градиента, и так далее.</p>

<p>Во втором примере каждая вторая точка остановки для каждого цвета находится на той же позиции, что и первая точка остановки соседнего цвета, создавая полосатый эффект.</p>

<p>В обоих примерах градиент написан дважды: первый – это метод из CSS-изображений уровня 3 использующий повторения цвета на каждой остановке, а второй пример – это метод из CSS-изображений уровня 4, где в линейном объявлении точек остановки используются множественные точки остановки с двумя значениями длин точек остановки.</p>
</div>

<div>
<h3 id="Управление_переходом_градиента">Управление переходом градиента</h3>

<p>По умолчанию градиент плавно переходит между цветами двух соседних точек остановки, а средняя точка между этими двумя точками остановки является средним значением цветового перехода. Вы можете контролировать интерполяцию или переход между двумя точками остановки добавлением его расположения в цветовой подсказке. В этом примере цвет достигает средней точки перехода от лаймового до голубого на расстоянии 20% градиента вместо стандартных 50%. Во втором примере нет такой подсказки, чтобы подчеркнуть отличие, получаемое при её использовании:</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="colorhint-gradient"&gt;&lt;/div&gt; &lt;div class="regular-progression"&gt;&lt;/div&gt;

</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}</pre>
</div>

<pre class="brush: css">.colorhint-gradient {
  background: linear-gradient(to top, black, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, black, cyan);
}
</pre>

<p>{{ EmbedLiveSample('Управление_переходом_градиента', 120, 120) }}</p>
</div>

<h3 id="Перекрытие_градиентов">Перекрытие градиентов</h3>

<p>Градиенты поддерживают прозрачность, так что вы можете накладывать фоны для получения всяких разных эффектов. Фоны накладываются снизу вверх таким образом, что первый объявленный будет лежать поверх остальных.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="layered-image"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 300px;
  height: 150px;
}</pre>
</div>

<pre class="brush: css">.layered-image {
  background: linear-gradient(to right, transparent, mistyrose),
      url("https://mdn.mozillademos.org/files/15525/critters.png");
}
</pre>

<p>{{ EmbedLiveSample('Перекрытие_градиентов', 300, 150) }}</p>

<h3 id="Наслаивание_градиентов">Наслаивание градиентов</h3>

<p>Вы можете даже наслаивать градиенты друг на друга. Если верхние градиенты не полностью непрозрачны, градиенты, лежащие под ними, тоже будут видны.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="stacked-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 200px;
  height: 200px;
}</pre>
</div>

<pre class="brush: css">.stacked-linear {
  background:
      linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}
</pre>

<p>{{ EmbedLiveSample('Наслаивание_градиентов', 200, 200) }}</p>

<h2 id="Использование_круговых_градиентов">Использование круговых градиентов</h2>

<p>Круговые градиенты схожи с линейными градиентами, за исключением того, что они создают градиентный круг по направлению от центральной точки. Вы можете указать, где должна находиться центральная точка. Вы также можете сделать её круглой или овальной.</p>

<h3 id="Обычный_круговой_градиент">Обычный круговой градиент</h3>

<p>Как и в случае с линейными градиентами, всё, что вам нужно, чтобы создать круговой градиент – это два цвета. По умолчанию центр градиента находится на отметке 50% 50%, градиент становится овальным с учётом соотношения сторон содержащего его блока:</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="simple-radial"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 240px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.simple-radial {
  background: radial-gradient(red, blue);
}
</pre>

<p>{{ EmbedLiveSample('Обычный_круговой_градиент', 120, 120) }}</p>

<h3 id="Размещение_круговых_точек_остановки">Размещение круговых точек остановки</h3>

<p>Опять же, как и у линейных градиентов, вы можете расположить каждую круговую точку остановки, указав значение в виде процентной или абсолютной длины.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="radial-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
</pre>

<p>{{ EmbedLiveSample('Размещение_круговых_точек_остановки', 120, 120) }}</p>

<h3 id="Расположение_центра_градиента">Расположение центра градиента</h3>

<p>Вы можете расположить центр градиента с помощью ключевых значений, процентной или абсолютной длины. Значения в виде числа или процента повторяются в случае, если указано только одно из них, иначе порядок повторения будет определяться порядком расположения, начиная слева и сверху.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="radial-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 240px;
}</pre>
</div>

<pre class="brush: css">.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
</pre>

<p>{{ EmbedLiveSample('Расположение_центра_градиента', 120, 120) }}</p>

<h3 id="Задание_размеров_кругового_градиента">Задание размеров кругового градиента</h3>

<p>В отличие от линейных градиентов, круговому градиенту можно задавать размеры. Возможные значения включат в себя: ближайший угол, ближайшая сторона, самый дальний угол и самая дальняя сторона, самый дальний угол – значение по умолчанию.</p>

<h4 id="Пример_ближайшая_сторона_для_эллипса">Пример: ближайшая сторона для эллипса</h4>

<p>В этом примере используется значение размера <code>closest-side</code>, которое означает, что размер определяется расстоянием от начальной точки (центра) до ближайшей стороны блока.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="radial-ellipse-side"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 240px;
  height: 100px;
}</pre>
</div>

<pre class="brush: css">.radial-ellipse-side {
  background: radial-gradient(ellipse closest-side,
      red, yellow 10%, #1e90ff 50%, beige);
}
</pre>

<p>{{ EmbedLiveSample('Пример_ближайшая_сторона_для_эллипса', 240, 100) }}</p>

<h4 id="Пример_самый_дальний_угол_для_эллипса">Пример: самый дальний угол для эллипса</h4>

<p>Этот пример схож с предыдущим, за исключением того, что его размер указан как <code>farthest-corner</code>, что устанавливает размер градиента значением расстояния от начальной точки до самого дальнего угла блока.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="radial-ellipse-far"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 240px;
  height: 100px;
}</pre>
</div>

<pre class="brush: css">.radial-ellipse-far {
  background: radial-gradient(ellipse farthest-corner at 90% 90%,
      red, yellow 10%, #1e90ff 50%, beige);
}
</pre>

<p>{{ EmbedLiveSample('Пример_самый_дальний_угол_для_эллипса', 240, 100) }}</p>

<h4 id="Пример_ближайшая_сторона_для_круга">Пример: ближайшая сторона для круга</h4>

<p>Этот пример использует <code>closest-side</code>, что задаёт размер круга как расстояние между начальной точкой (центром) и ближайшей стороной. Радиус круга – это расстояние между центром градиента и ближайшей стороной. Круг, с учётом позиционирования в точке 25% от левой стороны и 25% от низа, ближе всего к низу, так как расстояние по высоте в этом случае меньше, чем по ширине.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="radial-circle-close"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 240px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.radial-circle-close {
  background: radial-gradient(circle closest-side at 25% 75%,
      red, yellow 10%, #1e90ff 50%, beige);
}
</pre>

<p>{{ EmbedLiveSample('Пример_ближайшая_сторона_для_круга', 240, 120) }}</p>

<h3 id="Наложение_круговых_градиентов">Наложение круговых градиентов</h3>

<p>Вы можете накладывать круговые градиенты так же, как линейные. Первый объявленный будет сверху, последний – снизу.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="stacked-radial"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 200px;
  height: 200px;
}</pre>
</div>

<pre class="brush: css">.stacked-radial {
  background:
      radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,0,.5),
        rgba(0,255,0,0) 70.71%) beige;
  border-radius: 50%;
}
</pre>

<p>{{ EmbedLiveSample('Наложение_круговых_градиентов', 200, 200) }}</p>

<h2 id="Использование_конических_градиентов">Использование конических градиентов</h2>

<p><a href="/en-US/docs/Web/CSS">CSS</a>-функция <strong><code>conic-gradient()</code></strong> создаёт изображение, состоящее из градиента с переходом цвета, обёрнутым вокруг центральной точки (в отличие от градиента, исходящего кругом от центральной точки). Образцом конического градиента можно назвать круговые диаграммы и цветовые круги, но он также может быть использован для создания шахматной доски (клетки) и других интересных эффектов.</p>

<p>Синтаксис конического градиента схож с синтаксисом кругового градиента, но с тем отличием, что точки остановки цвета располагаются вокруг градиентной дуги, вдоль длины окружности круга, а не по градиентной линии, идущей от центра градиента. Также, точки остановки цвета задаются только в процентах или градусах, абсолютные величины недопустимы.</p>

<p>В круговом градиенте цвета переходят от центра окружности наружу, во всех направлениях. В случае конического градиента цвета идут, как бы оборачиваясь вокруг центра круга, начиная сверху и двигаясь по часовой стрелке. Так же, как и в круговом градиенте, вы можете указать расположение центра градиента. Так же, как и в линейном градиенте, вы можете изменять угол градиента.</p>

<div>
<h3 id="Обычный_конический_градиент">Обычный конический градиент</h3>

<p>Так же, как и в случае с линейными и круговыми градиентами, всё, что вам нужно для создания конического градиента – это два цвета. По умолчанию центр градиента находится в точке 50% 50%, начало градиента направлено вверх:</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="simple-conic"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.simple-conic {
  background: conic-gradient(red, blue);
}
</pre>

<p>{{ EmbedLiveSample('Обычный_конический_градиент', 120, 120) }}</p>
</div>

<div>
<h3 id="Расположение_конического_центра">Расположение конического центра</h3>

<p>Как и в круговом градиенте, вы можете задать расположение центра конического градиента с помощью ключевых значений, процентных или абсолютных величин с использованием ключевого слова "at".</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="conic-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
</pre>

<p>{{ EmbedLiveSample('Расположение_конического_центра', 120, 120) }}</p>
</div>

<div>
<h3 id="Изменение_угла">Изменение угла</h3>

<p>Вы можете задать угол, в котором направлено начало градиента значением типа {{cssxref("&lt;angle&gt;")}}, с предшествующим ему ключевым словом "from".</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="conic-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.conic-gradient {
  background: conic-gradient(from 45deg, red, orange, yellow, green, blue, purple);
}
</pre>

<p>{{ EmbedLiveSample('Изменение_угла', 120, 120) }}</p>
</div>

<h2 id="Использование_повторяющихся_градиентов">Использование повторяющихся градиентов</h2>

<p>Функции {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}} и {{cssxref("conic-gradient")}} не поддерживают автоматически повторяющиеся точки остановки цвета. Однако, для реализации этой функциональности существуют функции {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}} и {{cssxref("repeating-conic-gradient")}}.</p>

<p>Размер повторяющейся градиентной линии или дуги – это длина от значения первой до значения последней точки остановки цвета. Если первая точка остановки содержит только цвет без указания длины до точки остановки, то используется значение по умолчанию, равное 0. Если последняя точка остановки содержит только цвет без указания длины до точки установки, то используется значение по умолчанию, равное 100%. Если ни то, ни другое не определено, то линия градиента будет равна 100%, что означает, что линейный и конический градиент не будет повторяться, а круговой градиент будет повторяться, только если радиус градиента меньше, чем расстояние между центром градиента и самым дальним углом. Если первая точка остановки определена и имеет значение больше 0, градиент будет повторяться при условии, что размер линии или дуги равен разнице между первой и последней точкой остановки, если эта разница меньше, чем 100% или 360 градусов.</p>

<div>
<h3 id="Повторяющиеся_линейные_градиенты">Повторяющиеся линейные градиенты</h3>

<p>В этом примере используется {{cssxref("repeating-linear-gradient")}} для создания повторяющегося градиента, идущего по прямой линии. Цветовая последовательность начинается заново с каждым повторением градиента. В данном случае градиент имеет длину 10px.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="repeating-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.repeating-linear {
  background: repeating-linear-gradient(-45deg, red, red 5px, blue 5px, blue 10px);
}
</pre>

<p>{{ EmbedLiveSample('Повторяющиеся_линейные_градиенты', 120, 120) }}</p>
</div>

<div>
<h3 id="Множественные_повторяющиеся_линейные_градиенты">Множественные повторяющиеся линейные градиенты</h3>

<p>Так же, как и в случае с обычными линейными и круговыми градиентами, вы можете использовать множественные градиенты, один поверх другого. Это имеет смысл, только если градиенты частично прозрачны, что позволяет видеть одни градиенты сквозь прозрачные части других градиентов, этого же можно достичь при условии использования разных <a href="/en-US/docs/Web/CSS/background-size">размеров фона (background-size)</a>, при этом возможно ещё и при разных значениях свойства <a href="/en-US/docs/Web/CSS/background-position">background-position</a> для каждого градиента. Мы использовали прозрачность.</p>

<p>В данном случае градиентные линии имеют длину 300px, 230px и 300px.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="multi-repeating-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 600px;
  height: 400px;
}</pre>
</div>

<pre class="brush: css">.multi-repeating-linear {
  background:
      repeating-linear-gradient(190deg, rgba(255, 0, 0, 0.5) 40px,
        rgba(255, 153, 0, 0.5) 80px, rgba(255, 255, 0, 0.5) 120px,
        rgba(0, 255, 0, 0.5) 160px, rgba(0, 0, 255, 0.5) 200px,
        rgba(75, 0, 130, 0.5) 240px, rgba(238, 130, 238, 0.5) 280px,
        rgba(255, 0, 0, 0.5) 300px),
      repeating-linear-gradient(-190deg, rgba(255, 0, 0, 0.5) 30px,
        rgba(255, 153, 0, 0.5) 60px, rgba(255, 255, 0, 0.5) 90px,
        rgba(0, 255, 0, 0.5) 120px, rgba(0, 0, 255, 0.5) 150px,
        rgba(75, 0, 130, 0.5) 180px, rgba(238, 130, 238, 0.5) 210px,
        rgba(255, 0, 0, 0.5) 230px),
      repeating-linear-gradient(23deg, red 50px, orange 100px,
        yellow 150px, green 200px, blue 250px,
        indigo 300px, violet 350px, red 370px);
}
</pre>

<p>{{ EmbedLiveSample('Множественные_повторяющиеся_линейные_градиенты', 600, 400) }}</p>
</div>

<h3 id="Клетчатый_градиент">Клетчатый градиент</h3>

<p>Для создания клетчатого градиента мы используем несколько полупрозрачных перекрывающих друг друга градиентов. В первом объявлении фона мы внесли в список каждую остановку цвета отдельно. Во втором объявлении свойства background используется синтаксис многопозиционных остановок цвета:</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="plaid-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">div {
  width: 200px;
  height: 200px;
}</pre>
</div>

<pre class="brush: css">.plaid-gradient {
  background:
      repeating-linear-gradient(90deg, transparent, transparent 50px,
        rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px,
        transparent 56px, transparent 63px,
        rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px,
        transparent 69px, transparent 116px,
        rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
      repeating-linear-gradient(0deg, transparent, transparent 50px,
        rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px,
        transparent 56px, transparent 63px,
        rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px,
        transparent 69px, transparent 116px,
        rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
      repeating-linear-gradient(-45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px),
      repeating-linear-gradient(45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px);

  background:
      repeating-linear-gradient(90deg, transparent 0 50px,
        rgba(255, 127, 0, 0.25) 50px 56px,
        transparent 56px 63px,
        rgba(255, 127, 0, 0.25) 63px 69px,
        transparent 69px 116px,
        rgba(255, 206, 0, 0.25) 116px 166px),
      repeating-linear-gradient(0deg, transparent 0 50px,
        rgba(255, 127, 0, 0.25) 50px 56px,
        transparent 56px 63px,
        rgba(255, 127, 0, 0.25) 63px 69px,
        transparent 69px 116px,
        rgba(255, 206, 0, 0.25) 116px 166px),
      repeating-linear-gradient(-45deg, transparent 0 5px,
        rgba(143, 77, 63, 0.25) 5px 10px),
      repeating-linear-gradient(45deg, transparent 0 5px,
        rgba(143, 77, 63, 0.25) 5px 10px);
}
</pre>

<p>{{ EmbedLiveSample('Клетчатый_градиент', 200, 200) }}</p>

<h3 id="Повторяющиеся_круговые_градиенты">Повторяющиеся круговые градиенты</h3>

<p>В этом примере для создания кругового градиента, повторяющегося из центральной точки, используется {{cssxref("repeating-radial-gradient")}}. Цветовая последовательность начинаются заново с каждой итерацией повторения градиента.</p>

<div class="hidden">
<pre class="brush: html">&lt;div class="repeating-radial"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css">.repeating-radial {
  background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
}
</pre>

<p>{{ EmbedLiveSample('Повторяющиеся_круговые_градиенты', 120, 120) }}</p>

<h3 id="Множественные_повторяющиеся_круговые_градиенты">Множественные повторяющиеся круговые градиенты</h3>

<div class="hidden">
<pre class="brush: html">&lt;div class="multi-target"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">div {
  width: 250px;
  height: 150px;
}</pre>
</div>

<pre class="brush: css">.multi-target {
  background:
      repeating-radial-gradient(ellipse at 80% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 15px, rgba(255,255,255,0.5) 15px,
        rgba(255,255,255,0.5) 30px) top left no-repeat,
      repeating-radial-gradient(ellipse at 20% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 10px, rgba(255,255,255,0.5) 10px,
        rgba(255,255,255,0.5) 20px) top left no-repeat yellow;
  background-size: 200px 200px, 150px 150px;
}
</pre>

<p>{{ EmbedLiveSample('Множественные_повторяющиеся_круговые_градиенты', 250, 150) }}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Градиентные функции: {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("conic-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("repeating-conic-gradient")}}</li>
 <li>Типы данных CSS, связанные с градиентами: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}</li>
 <li>Свойства CSS, связанные с градиентами: {{cssxref("background")}}, {{cssxref("background-image")}}</li>
 <li><a class="external" href="http://lea.verou.me/css3patterns/">Галерея шаблонов градиентов CSS, от Lea Verou</a></li>
 <li><a class="external" href="http://standardista.com/cssgradients">Библиотека градиентов CSS3, от Estelle Weyl</a></li>
 <li><a href="https://cssgenerator.org/gradient-css-generator.html">Генератор градиентов CSS</a></li>
</ul>
