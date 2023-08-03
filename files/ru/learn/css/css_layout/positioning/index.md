---
title: Позиционирование
slug: Learn/CSS/CSS_layout/Positioning
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

Позиционирование позволяет вам изымать элементы из нормального потока макета документа и заставить их вести себя по-другому; например, располагаться друг на друге или всегда оставаться на одном и том же месте внутри окна просмотра браузера. Эта статья объясняет разные значения {{cssxref("position")}} и как их использовать.

| Необходимые знания: | Основы HTML (изучите [Введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), идея о том как работает CSS (изучите [Введение в CSS](/ru/docs/Learn/CSS/Introduction_to_CSS).) |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Изучить как работает CSS позиционирование.                                                                                                                                         |

Нам бы хотелось чтобы вы следовали за нами с упражнениями на вашем локальном ПК, если возможно возьмите копию [`0_basic-flow.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) из нашего GitHub репозитория ([исходный код здесь](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/0_basic-flow.html)) и используйте его как отправную точку.

## Введение в позиционирование

Вся идея позиционирования заключается в том, чтобы позволить нам переопределять поведение базового потока документа, описанного выше, для того чтобы производить интересные эффекты. Что если вам захочется слегка изменить позицию каких-либо блоков внутри макета относительно их позиции в потоке макета по умолчанию? Ваш инструмент - позиционирование. Или если вы хотите создать элемент пользовательского интерфейса, который плавает над другими частями страницы и/или всегда располагается на одном и том же месте в окне браузера не зависимо от того сколько прокручивалась страница? Позиционирование делает возможным работу таких макетов.

Существует несколько разных типов позиционирования, которые вы можете применить к элементам HTML. Для активации специфического типа позиционирования у элемента, мы используем свойство {{cssxref("position")}}.

### Статическое позиционирование

Статическое позиционирование — это умолчание, которое получает каждый элемент, что всего лишь значит "поставить элемент в его нормальное положение в потоке макета документа — ничего особенного для рассмотрения".

Чтобы продемонстрировать это и настроить ваш образец для будущих разделов, сначала добавьте `class` `positioned` ко второму {{htmlelement("p")}} в HTML:

```html
<p class="positioned">...</p>
```

А теперь добавьте следующее правило в конец вашего CSS:

```css
.positioned {
  position: static;
  background: yellow;
}
```

И если вы сейчас сохраните и обновите, то вы не увидите никаких изменений, не считая обновлённого цвета фона 2-го параграфа. Это нормально, как мы и говорили ранее, статическое позиционирование является поведением по умолчанию!

> **Примечание:** вы можете посмотреть живой пример на данном этапе на [`1_static-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/1_static-positioning.html)).

### Относительное позиционирование

Относительное позиционирование первый тип позиции, который мы рассмотрим. Оно очень похоже на статическое позиционирование, за исключением того что вы можете модифицировать окончательное положение позиционируемого объекта занявшего своё место в макете нормального потока, в том числе заставлять его перекрывать другие элементы на странице. Двигайтесь далее и обновите объявление `position` в вашем коде:

```css
position: relative;
```

Если вы сохраните и обновите на данном этапе, в результате вы совсем не увидите изменений. Так как же вам модифицировать положение? Вам необходимо использовать свойства {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, и {{cssxref("right")}} которые мы объясним в следующем разделе.

### Введение в top, bottom, left, и right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, и {{cssxref("right")}} используются вместе с {{cssxref("position")}} чтобы указать куда именно перемещать позиционируемый элемент. Для того чтобы попробовать, добавьте следующее объявление к правилу `.positioned` в вашем CSS:

```css
top: 30px;
left: 30px;
```

> **Примечание:** значения этих свойств могут принимать любые [единицы](/ru/docs/Learn/CSS/Introduction_to_CSS/Values_and_units) которые вы ожидаете по логике: пиксели, мм, rems, %, и т.д.

Если вы сейчас сохраните и обновите, вы получите примерно такой результат:

```html hidden
<h1>Relative positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Введение_в_top_bottom_left_и_right', '100%', 500) }}

Круто, правда? Хорошо, вероятно это не то, чего вы ожидали — почему он переместился вниз и вправо, когда мы указали вверх и влево? Как бы нелогично это ни звучало это всего лишь способ того как работает позиционирование — вам надо думать о невидимой силе толкающей указанную сторону позиционируемого блока, перемещая его в противоположную сторону. Так, например, если вы указали `top: 30px;`, сила толкает блок, заставляя его перемещаться вниз на 30px.

> **Примечание:** вы можете посмотреть пример на этом этапе на [`2_relative-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/2_relative-positioning.html)).

### Абсолютное позиционирование

Абсолютное позиционирование даёт совершенно другие результаты. Давайте попробуем изменить объявление позиции в вашем коде как показано ниже:

```css
position: absolute;
```

Если вы сохраните и обновите, то вы должны увидеть нечто подобное:

```html hidden
<h1>Absolute positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Абсолютное_позиционирование', '100%', 420) }}

В первую очередь обратите внимание на то, что интервал там, где должен быть позиционируемый элемент в потоке документа теперь отсутствует — первый и третий элементы сблизились так будто, он больше не существует! Ну, в каком-то смысле это правда. Абсолютно позиционированный элемент больше не существует в нормальном потоке макета документа. Вместо этого он располагается на своём собственном слое отдельно от всего остального. Это очень полезно: это значит, что мы можем создавать изолированные функции пользовательского интерфейса, которые не влияют на макет других элементов страницы. Например, всплывающие информационные блоки и меню управления; опрокидывающиеся панели; функции пользовательского интерфейса, которые можно перетаскивать в любом месте страницы; и так далее...

Во-вторых, обратите внимание, что позиция элемента изменилась — это потому, что {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, и {{cssxref("right")}} ведут себя по-другому с абсолютным позиционированием. Вместо того, чтобы позиционировать элемент на основе его относительного положения в обычном потоке макета документа, они определяют расстояние, на котором элемент должен находиться от каждой из сторон содержащего элемента. Поэтому в этом случае мы говорим, что абсолютно позиционированный элемент должен располагаться в 30px от верха "содержащего элемента" и 30px от левого края (В этом случае "содержащий элемент" является **исходным содержащим блоком**. См. раздел ниже для дополнительной информации).

> **Примечание:** вы можете использовать {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, и {{cssxref("right")}} для изменения размера элемента если вам надо. Попробуйте установить `top: 0; bottom: 0; left: 0; right: 0;` и `margin: 0;` для вашего позиционируемого элемента и посмотрите, что произойдёт! Потом снова все верните...

> **Примечание:** Да, margin-ы все ещё влияют на позиционируемый элемент. Однако, схлопывания margin не происходит.

> **Примечание:** вы можете посмотреть пример на этом этапе на [`3_absolute-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/3_absolute-positioning.html)).

### Контекст позиционирования

Какой элемент является "содержащим" относительно абсолютно позиционируемого элемента? Это очень сильно зависит от свойства позиции предка позиционируемого элемента (см. [Определение содержащего блока](/ru/docs/Web/CSS/Containing_block#Identifying_the_containing_block)).

Если никакие из элементов предков не имеют конкретно заданного свойства позиции, то по умолчанию все элементы предков будут иметь статическую позицию. В результате этого абсолютно позиционируемый элемент будет содержаться в **исходным содержащем блоке**. Исходный содержащий блок имеет размеры области просмотра, а также является блоком, содержащим элемент {{htmlelement("html")}}. Проще говоря, абсолютно позиционируемый элемент будет отображаться за пределами элемента {{htmlelement("html")}} и будет расположен относительно исходного окна просмотра.

Позиционируемый элемент вложен в {{htmlelement ("body")}} в исходном HTML, но в конечном макете он расположен на 30px от верхнего и левого края страницы. Мы можем изменить **контекст** **позиционирования** — относительно какого элемента позиционируется позиционируемый элемент. Это делается путём установки позиционирования на одном из предков элемента — на один из элементов, внутри которого он вложен (вы не можете позиционировать его относительно элемента, внутри которого он НЕ вложен). Чтобы продемонстрировать это, добавьте следующее объявление в правило вашего `body`:

```css
position: relative;
```

Это должно дать следующий результат:

```html hidden
<h1>Positioning context</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Контекст_позиционирования', '100%', 420) }}

Позиционируемый элемент теперь располагается относительно элемента {{htmlelement("body")}}.

> **Примечание:** вы можете посмотреть живой пример на этом этапе на [`4_positioning-context.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/4_positioning-context.html)).

### Введение в z-index

Все это абсолютное позиционирование — хорошее развлечение, но кое-что чего мы ещё не рассмотрели — когда элементы начинают перекрываться, что определяет который из элементов будет появляться поверх другого элемента? В примере, который мы видели все это время, у нас имеется только один позиционируемый элемент в контексте позиционирования, и он появляется сверху поскольку позиционируемые элементы "побеждают" не позиционированные элементы. Что же насчёт того, когда мы имеем более одного?

Попробуйте добавить следующий CSS, чтобы сделать первый параграф так же абсолютно позиционированным:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

На этом этапе вы увидите, что первый параграф окрашенный в лаймовый изъят из потока документа и помещён чуточку выше того места, где он был исходно. А также он расположен под оригинальным параграфом `.positioned`, где они оба перекрываются. Это потому что параграф `.positioned` является вторым параграфом по порядку в источнике и позже позиционируемые элементы в порядке источника выигрывают над ранее позиционируемыми элементами в порядке источника.

Можете ли вы изменить порядок наложения? Да, можете, используя свойство {{cssxref("z-index")}}. "z-index" это ссылка к z-оси. Вы можете вспомнить из предыдущих этапов в этом курсе, где мы обсуждали использование горизонтальных (x-ось) и вертикальных (y-оси) координат веб-страницами для определения позиции для таких вещей, как фоновые изображения и смещение теней. (0,0) находится наверху слева страницы (или элемента) и оси x- и y- направляются направо и вниз страницы (во всяком случае, для языков, направленных слева на право).

У веб-страниц также имеется z-ось: воображаемая линия, которая направляется от поверхности вашего экрана к вашему лицу (или что ещё вам нравится иметь перед экраном). Значения {{cssxref("z-index")}} влияют на то где позиционируемый элемент располагается на этой оси; положительные значения перемещают их выше по наложению, а отрицательные значения перемещают их ниже по наложению. По умолчанию все позиционируемые элементы имеют `z-index` `auto`, что фактически равно 0.

Для того чтобы изменить порядок наложения, попробуйте объявить для вашего `p:nth-of-type(1)` правила:

```css
z-index: 1;
```

Теперь вы должны видеть законченный пример, с параграфом лаймового цвета сверху:

```html hidden
<h1>z-index</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

{{ EmbedLiveSample('Введение_в_z-index', '100%', 400) }}

Обратите внимание что `z-index` принимает значения индекса только без единиц измерения; вы не можете задавать значения, что хотите, чтобы какой-то элемент был на 23 пикселя выше по z-оси — это так не работает. Более высокие значения будут располагаться над меньшими значениями и от вас зависит какие значения вы используете. Используя 2 и 3, вы получите тот же эффект что и 300 и 40000.

> **Примечание:** вы можете посмотреть живой пример на этом этапе на [`5_z-index.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/5_z-index.html)).

### Фиксированное позиционированиее

А теперь давайте посмотрим на фиксированное позиционирование. Оно работает точно также как и абсолютное позиционирование, одним ключевым отличием: в то время как абсолютное позиционирование фиксирует элемент в месте относительно его ближайшего позиционированного предка (исходный содержащий блок если нет иного), **фиксированное позиционирование** _обычно_ фиксирует элемент в месте относительно видимой части области просмотра, кроме случаев, когда один из его потомков является фиксированным блоком из-за того, что его [свойству transform](/ru/docs/Web/CSS/transform) отличается от none. Это значит, что вы можете создать элементы пользовательского интерфейса, которые зафиксированы на месте, как постоянные меню навигации, которые всегда видимы вне зависимости от того сколько прокручивается страница.

Давайте составим простой пример, чтобы показать, что мы имеем в виду. Во-первых, удалите существующие правила `p:nth-of-type(1)` и `.positioned` из вашего CSS.

А теперь, обновите правило `body` удалив объявление `position: relative;` и добавьте фиксированную высоту как тут:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Теперь мы собираемся дать элементу {{htmlelement("h1")}} `position: fixed;`, а также заставить его располагаться на верху окна просмотра. Добавьте следующее правило в ваш CSS:

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```

`top: 0;` необходим чтобы приклеить его к верху экрана. мы дали заголовку ту же ширину что и колонкам с контентом и затем даём ему белый фон и немного padding и margin, чтобы контент не был видимым под ним.

Если вы сохраните и обновите сейчас, вы увидите маленький забавный эффект, при котором заголовок останется неизменным, а содержимое будет прокручиваться вверх и исчезать под ним. Но мы можем улучшить это — в данный момент некоторый контент начинается под заголовком. Это из-за того, что позиционируемый заголовок больше не появляется в потоке документа, поэтому остальное содержимое поднимается наверх. Нам надо сдвинуть все это немного вниз; мы можем сделать это установив немного верхнего margin к первому параграфу. Добавьте его сейчас:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Теперь вы должны видеть законченный пример:

```html hidden
<h1>Fixed positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">I'm not positioned any more...</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('Фиксированное_позиционированиее', '100%', 400) }}

> **Примечание:** вы можете посмотреть живой пример на этом этапе на [`6_fixed-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/6_fixed-positioning.html)).

### position: sticky

Доступно другое значение позиции называемое `position: sticky`, которое несколько новее чем другие. По сути, это гибрид относительной и фиксированной позиции, который позволяет позиционируемому элементу вести себя как будто он относительно позиционирован, до тех пор пока он не будет прокручен до определённой пороговой точки (например, 10px от вершины окна просмотра), после чего он становится фиксированным. Это можно использовать, например, чтобы заставить панель навигации прокручиваться вместе со страницей до определённой точки, а затем задерживать в верхней части страницы.

```html hidden
<h1>Sticky positioning</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Sticky</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Sticky_1', '100%', 200) }}

Интересное и общее использование `position: sticky` заключается в создании индексных страниц с прокруткой, где разные заголовки липнут к верху страницы, когда они достигают его. Разметка такого примера может выглядеть так:

```html
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

CSS может выглядеть как показано ниже. В нормальном потоке элементы {{htmlelement("dt")}} будут прокручиваться вместе с контентом. Когда мы добавляем `position: sticky` к элементу {{htmlelement("dt")}}, вместе со значением {{cssxref("top")}} 0, поддерживающие браузеры будут приклеивать заголовки к вершине окна просмотра когда они будут достигать той позиции. каждый последующий заголовок будет затем заменять предыдущий при его прокрутке вверх к той позиции.

```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```html hidden
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

{{ EmbedLiveSample('Sticky_2', '100%', 200) }}

Липкие элементы являются "липкими" относительно ближайшего предка с "прокручивающимся механизмом", который определяется свойством [позиции](/ru/docs/Web/CSS/position) его предка.

> **Примечание:** вы можете посмотреть живой пример на этом этапе на [`7_sticky-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ([см. исходный код](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/7_sticky-positioning.html)).

## Проверь свои навыки!

Вы достигли конца этой статьи, но помните ли вы самую важную информацию? Вы можете найти дальнейшую проверку что вы усвоили эту информацию прежде чем, отправитесь дальше — см. [Проверьте свои навыки: Позиционирование](/ru/docs/Learn/CSS/CSS_layout/Position_skills).

## Заключение

Я уверен, что вы повеселились с основами позиционирования; хотя это не является методом, который вы бы использовали для целого макета, всё же как вы видите, существует много задач, подходящих для него.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

## Смотрите также

- Справка свойства {{cssxref("position")}}.
- [Примеры практического позиционирования](/ru/docs/Learn/CSS/CSS_layout/Practical_positioning_examples), для дополнительных полезных идей

## В этом модуле

- [Введение в CSS макет](/ru/docs/Learn/CSS/CSS_layout/Introduction)
- [Нормальный поток](/ru/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/ru/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/ru/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/ru/docs/Learn/CSS/CSS_layout/Floats)
- [Позиционирование](/ru/docs/Learn/CSS/CSS_layout/Positioning)
- [Макет с несколькими столбцами](/ru/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Отзывчивый дизайн](/ru/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Руководство по медиавыражениям для новичков](/ru/docs/Learn/CSS/CSS_layout/Media_queries)
- [Устаревшие методы макетов](/ru/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Поддержка старых браузеров](/ru/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Базовая оценка понимания макета](/ru/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
