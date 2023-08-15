---
title: Введение в CSS вёрстку
slug: Learn/CSS/CSS_layout/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

В этой статье мы рассмотрим некоторые функции макета CSS, которые мы затрагивали в предыдущих статьях, например различные значения свойства {{cssxref("display")}}, и разберём некоторые концепции, которые будут рассмотрены в этой статье.

| Требования: | Базовые знания HTML (изучите [введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), и понимание как работает CSS (изучите [введение в CSS](/ru/docs/Learn/CSS/Introduction_to_CSS).) |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:       | Предоставить вам обзор методов компоновки страниц CSS. Каждый метод может быть изучен более подробно в последующих статьях.                                                                 |

Методы компоновки страниц CSS позволяют нам использовать элементы, расположенные на веб-странице, и контролировать где они находятся относительно их позиции по умолчанию, других элементов вокруг них, их родителей или главного окна. Методы компоновки страниц, которые мы подробно рассмотрим в этой статье.

- Нормальный поток
- Свойство {{cssxref("display")}}
- Flexbox
- Grid
- Floats
- Позиционирование
- Макет таблицы
- Многоколоночный макет

Каждый метод имеет свои преимущества и недостатки и ни одна техника не предназначена для использования в изоляции от других. Разбирая данные методы, вы поймёте, какой из них лучший инструмент разметки для каждой задачи.

## Normal flow

Нормальный поток (Normal flow) это то как ваш браузер отображает по умолчанию, когда вы не меняли расположение элементов на странице. Взглянем на пример:

```html
<p>I love my cat.</p>

<ul>
  <li>Buy cat food</li>
  <li>Exercise</li>
  <li>Cheer up friend</li>
</ul>

<p>The end!</p>
```

По умолчанию ваш браузер выведет этот код следующим образом:

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

Заметьте, что HTML-элементы здесь отображаются точно в таком порядке, как и в исходном коде — первый параграф, за ним неупорядоченный список, затем второй параграф.

Элементы, выводящиеся один _под_ другим, называются _блочными_, в противоположность _строчным_, которые выводятся один _вслед_ за другим, как отдельные слова в обычном абзаце текста.

> **Примечание:** Направление, в котором отображается содержимое блока, называется Block Direction. Block Direction вертикально в языках типа Английского, имеющих горизонтальное направление письма. В языках, типа Японского, имеющих вертикальное направление письма, Block Direction горизонтально. Соответствующее Inline Direction отвечает за направление отображения строковых элементов (таких как предложение).

Когда вы используете CSS для создания разметки, вы двигаете элементы относительно их обычного расположения, но для многих элементов на вашей странице их обычное положение - это именно то, что вам подойдёт. Именно поэтому важно начинать вёрстку с создания правильно организованного HTML документа, для того, чтобы базовое расположение элементов впоследствии работало на вас.

Методы CSS, которыми вы можете управлять разметкой элементов:

- **Свойство {{cssxref("display")}}** — Стандартные значения `block`, `inline` или `inline-block` могут изменять поведение элементов в обычном потоке (см.подробнее [Types of CSS boxes](/ru/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)). Также можно менять сами методы разметки такими значениями свойства `display`, как [CSS Grid](/ru/docs/Learn/CSS/CSS_layout/Grids) или [Flexbox](/ru/docs/Learn/CSS/CSS_layout/Flexbox).
- **Floats** — Применение значения {{cssxref("float")}} типа `left` может заставить элемент блочного типа "прилепить" содержимое к одной стороне элемента, как иногда изображения обволакиваются текстом на газетных страницах.
- **Свойство {{cssxref("position")}}** — Позволяет точно контролировать положение блоков внутри других блоков. `static` позиционирование является стандартным, но также можно применять другие значения свойства, например фиксированное в углу экрана.
- **Макет Таблицы** — свойства для разметки таблиц могут быть использованы и для нетабличных элементов, с помощью `display: table` и соответствующих свойств.
- **Multi-column layout** — [Многоколоночный макет](/ru/docs/Web/CSS/CSS_Columns) поможет расположить содержимое столбцами, как в газетах.

## Свойство display

Значения свойства `display` являются главными методами вёрстки разметки страницы в CSS. Это свойство позволяет нам менять то, как что-то отображается по умолчанию. Каждый элемент по умолчанию имеет свойство `display`, влияющее на то, как этот элемент отображается. Например, параграфы на английском располагаются один под другим только потому что они имеют по умолчанию свойство `display: block`. Если же вы создадите ссылку внутри параграфа, эта ссылка будет отображаться в общем потоке с остальным текстом, без переноса на новую строку. Это потому что у элемента {{htmlelement("a")}} по умолчанию установлено свойство `display: inline`.

Вы можете изменить дефолтное поведение display. К примеру, {{htmlelement("li")}} отображается как `display: block` по умолчанию, это означает что элементы списка отображаются один за другим в нашем документе.Если мы изменим значение display на `inline` они будут отображаться друг за другом, как это делают слова в предложении. Тот факт, что вы можете изменить значение display для любого элемента означает, что вы можете выбирать HTML-элементы по их семантическому значению, не беспокоясь о том как они будут выглядеть. То как они выглядят это то, что вы можете поменять.

В дополнение к возможности менять значение с `block` на `inline` и обратно, есть и другие возможности вёрстки с другими значениями `display`. Однако, в основном все они требуют использования дополнительных свойств. Двумя наиболее важными для задач вёрстки страниц являются `display: flex` и `display: grid`.

## Flexbox

Flexbox (сокращение от [Flexible Box Layout](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout)) это модуль, разработанный для облегчения вёрстки в одном из измерений — как ряд или как колонка. Для использования, установите свойство `display: flex` для родительского элемента тех элементов, к которым хотите применить этот тип вёрстки; все его прямые потомки станут flex элементами. Рассмотрим это на простом примере.

Разметка HTML, представленная ниже, состоит из элемента `wrapper`, включающего в себя три {{htmlelement("div")}} элемента. По умолчанию все они будут изображаться как блочные, один под другим.

Но если мы добавим свойство `display: flex` родительскому элементу, три дочерних сгруппируются в колонки. Всё это потому что они сами становятся элементами _flex_ и наследуют некоторые свойства, установленные контейнеру, в котором они находятся. Они выстраиваются в строку, потому что начальное значение {{cssxref("flex-direction")}} это `row`. Высота становится равной высоте самого высокого элемента, потому что начальное значение {{cssxref("align-items")}} установлено как `stretch`. Это значит, элементы вытягиваются по высоте контейнера, который в этом случае сам принимает высоту самого высокого элемента. Все они группируются в начале контейнера, оставляя пустое пространство в конце строки.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Flex_1', '300', '200') }}

В дополнение к свойствам, применяемым к контейнеру, существуют свойства, применяемые ко вложенным элементам. Эти свойства помимо всего прочего, могут менять размеры элемента, растягивая его и заставляя занимать всё доступное место.

В качестве простого примера, добавим свойство {{cssxref("flex")}} ко всем дочерним элементам, со значением `1`. Это заставит все элементы растянуться и заполнить контейнер, не оставляя свободного места в конце строки. Если освободится дополнительное пространство, элементы растянутся; если доступное место убавится - элементы сожмутся. Также, если вы добавите дополнительный элемент, остальные элементы станут меньше, для того, чтобы все они были одного размера.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Flex_2', '300', '200') }}

> **Примечание:** Это было очень краткое введение в то что возможно во Flexbox, чтобы узнать больше см. нашу статью [Flexbox](/ru/docs/Learn/CSS/CSS_layout/Flexbox).

## Grid Layout

В то время как flexbox предназначен для одномерной разметки, Grid Layout предназначен для двумерной — выстраивая предметы в ряды и столбцы.

Ещё раз, вы можете переключиться на Grid Layout при помощи конкретного значения отображения — `display: grid`. Пример ниже использует разметку подобную примеру flex, а также мы определяем некоторые дорожки рядов и столбцов в родительском элементе, используя свойства {{cssxref("grid-template-rows")}} и {{cssxref("grid-template-columns")}} соответственно. Мы определили три столбца каждый по `1fr` и два ряда по `100px`. Мне не надо вводить какие-либо правила для дочерних элементов; они автоматически помещаются в ячейки, созданные нашей сеткой.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
  <div class="box6">Six</div>
</div>
```

{{ EmbedLiveSample('Grid_1', '300', '330') }}

Когда у вас есть сетка (grid), мы можете точно размещать на ней свои элементы, а не полагаться на поведение авто-размещения, отмеченного выше. Ниже во втором примере мы задали ту же сетку, но в этот раз с тремя дочерними элементами. Мы задали начало и конец линии каждого элемента используя свойства {{cssxref("grid-column")}} и {{cssxref("grid-row")}}. Это заставляет элементы охватывать несколько дорожек.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Grid_2', '300', '330') }}

> **Примечание:** Эти два примера всего лишь малая часть мощности Grid layout; чтобы узнать больше см. нашу статью [Grid Layout](/ru/docs/Learn/CSS/CSS_layout/Grids).

Остальная часть этого руководства освещает другие методы разметок, которые менее важны для основной структуры разметки вашей страницы, но всё равно могут помочь вам в достижении определённых задач. Понимая природу задачи каждой разметки, вы вскоре обнаружите, что, глядя на конкретный компонент вашего дизайна, часто будет ясно какой тип разметки подходит лучше всего.

## Floats

Делая элемент плавающим (float) мы меняем поведение этого элемента и элементов блочного уровня, следующих за ним в нормальном потоке. Элемент перемещается влево или вправо и удаляется из нормального потока (normal flow), а окружающий контент обтекает плавающий элемент.

Свойство {{cssxref("float")}} имеет четыре возможных значения:

- `left` — Элемент выравнивается слева и другие элементы обтекают его справа.
- `right` — Элемент выравнивается справа и другие элементы обтекают его слева.
- `none` — Не задаёт float совсем. Это значение по умолчанию.
- `inherit` — Определяет, что значение свойства `float` должно быть унаследовано от родительского элемента.

В примере ниже мы задаём элементу `<div>` float - left и даём {{cssxref("margin")}} с правой стороны чтобы отталкивать текст от этого элемента. Это даёт нам эффект того, что текст оборачивает этот блок и является большей частью того, что вам нужно знать о float, используемых в современном веб-дизайне.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
  line-height: 2;
  word-spacing: 0.1rem;
}

.box {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  border-radius: 5px;
}
```

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

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

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

{{ EmbedLiveSample('Float_1', '100%', 600) }}

> **Примечание:** Float полностью объяснён в нашем уроке по свойствам [float и clear](/ru/docs/Learn/CSS/CSS_layout/Floats). До таких методов как Flexbox и Grid Layout, float использовался как метод создания макетов колонок. Вы все ещё можете встретить эти методы в интернете; мы рассмотрим их в уроке по [устаревшим методам разметки](/ru/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods).

## Методы позиционирования

Позиционирование позволяет вам перемещать элементы с места, где бы они располагались при нормальном потоке в другую локацию. Позиционирование не является методом создания основной разметки страницы, это больше об управлении и точной настройке положения определённых элементов на странице.

Однако, существуют полезные методы точной разметки шаблонов, которые полагаются на свойство {{cssxref("position")}}. Понимание позиционирования также способствует пониманию нормального потока и того, что значит вывести элемент из нормального потока.

Существует пять типов позиционирования о которых вам следует знать:

- **Static positioning (статическое позиционирование)** — умолчание, которое получают все элементы — это всё лишь значит "поместить элемент в его нормальную позицию в разметке документа — тут нет ничего особенного на что посмотреть".
- **Relative positioning (относительное позиционирование)** позволяет вам менять положение элемента на странице, перемещая его относительно его положения в нормальном потоке — в том числе заставляя его перекрывать другие элементы на странице.
- **Absolute positioning (абсолютное позиционирование)** полностью перемещает элемент из нормального потока разметки страницы так будто он находится на своём собственном отдельном слое. Оттуда вы можете исправлять его положение относительно краёв `<html>` элемента страницы (или его ближайшего позиционированного элемента предка). Это является полезным при создании сложных эффектов разметки такие как вкладки, в которых различные панели содержимого располагаются друг над другом и отображаются и/или скрываются по желанию или информационные панели, которые располагаются на экране по умолчанию, но могут скользить по экрану используя кнопки управления.
- **Fixed positioning (фиксированное позиционирование)** очень похоже на абсолютное за исключением того, что он изменяет положение относительно окна просмотра браузера, а не другого элемента. Это полезно при создании эффектов таких как постоянное меню навигации, которое всегда остаётся в одном и том же месте на экране, в то время как другой контент прокручивается.
- **Sticky positioning (липкое позиционирование)** это новый метод позиционирования, который заставляет элемент вести себя как `position: static` пока не достигнет определённой линии окна просмотра и с этого момента будет вести себя как `position: fixed`.

### Пример простого позиционирования

Для ознакомления с этими методами вёрстки, мы покажем вам пару быстрых примеров. Наши примеры будут иметь одинаковый HTML, который выглядит следующим образом:

```html
<h1>Positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">I am a basic block level element.</p>
<p>I am a basic block level element.</p>
```

Этот HTML по умолчанию будет стилизован, используя следующий CSS:

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

Результат выглядит следующим образом:

{{ EmbedLiveSample('Пример_простого_позиционирования', '100%', 300) }}

### Relative positioning

Относительное (Relative) позиционирование позволяет вам смещать элемент относительно положения, которое он бы имел по умолчанию в нормальном потоке. Это значит, что вы можете выполнить такую задачу как перемещение иконки немного вниз, так чтобы он был на одной линии с текстовой меткой. Чтобы сделать это, мы можем добавить следующее правило для добавления относительного позиционирования.

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Здесь мы даём нашему среднему параграфу {{cssxref("position")}} со значением `relative` — сам по себе он ничего не делает, поэтому мы также добавляем свойства {{cssxref("top")}} и {{cssxref("left")}}. Они служат для перемещения задействованного элемента вниз и вправо — что может выглядеть как противоположность тому, чего вы ожидаете, но вам надо думать об этом так будто элемент отталкивается от левого или верхнего края, и в результате он перемещается вправо и вниз.

Добавление этого кода даст следующий результат:

```html hidden
<h1>Relative positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">This is my relatively positioned element.</p>
<p>I am a basic block level element.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: relative;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Relative_1', '100%', 300) }}

### Absolute positioning

Абсолютное (Absolute) позиционирование используется чтобы полностью удалить элемент из нормального потока и разместить его, используя смещение от краёв содержащего блока.

Возвращаясь к нашему примеру без позиционирования, мы можем добавить следующее CSS-правило, чтобы реализовать абсолютное позиционирование:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

Здесь мы даём нашему среднему параграфу {{cssxref("position")}} со значением `absolute`, и все те же свойства {{cssxref("top")}} и {{cssxref("left")}} как ранее. Однако, добавление этого кода даст следующий результат:

```html hidden
<h1>Absolute positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">This is my absolutely positioned element.</p>
<p>I am a basic block level element.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: absolute;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Absolute_1', '100%', 300) }}

Это совсем другое! Позиционированный элемент теперь совершенно отделен от разметки остальной страницы и располагается поверх него. Другие два параграфа теперь располагаются вместе так будто бы их позиционированный брат не существует. Свойства {{cssxref("top")}} и {{cssxref("left")}} имеют иной эффект на абсолютно позиционированные элементы, чем на относительно позиционированные элементы. В данном случае смещения были рассчитаны сверху и слева от страницы. Возможно изменить родительский элемент так что он становится контейнером, но мы рассмотрим это в уроке по [позиционированию](/ru/docs/Learn/CSS/CSS_layout/Positioning).

### Fixed positioning

Фиксированное (Fixed) позиционирование удаляет наш элемент из потока документа так же, как и абсолютное позиционирование. Однако, вместо смещения применяемого относительно контейнера, оно применяется относительно окна просмотра. Поскольку элемент остаётся зафиксированным относительно окна просмотра, мы можем создавать такие эффекты как меню, которое остаётся зафиксированным пока страница прокручивается под ним.

Для этого примера наш HTML это три параграфа текста для того, чтобы мы могли прокручивать страницу и блок, которому мы дадим `position: fixed`.

```html
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

<p>Paragraph 1.</p>
<p>Paragraph 2.</p>
<p>Paragraph 3.</p>
```

```html hidden
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

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
  position: fixed;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Fixed_1', '100%', 200) }}

### Sticky positioning

Липкое (Sticky) позиционирование — это последний тип позиционирования которой мы имеем в нашем распоряжении. Это микс дефолтного статического позиционирования с фиксированным позиционированием. когда элемент имеет `position: sticky` он будет прокручиваться в нормальном потоке пока не достигнет границы окна просмотра которую мы задали. С этого момента он (элемент) "прилипает", как если бы был применён `position: fixed`.

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

> **Примечание:** чтобы узнать больше о позиционировании, см. нашу статью [Позиционирование.](/ru/docs/Learn/CSS/CSS_layout/Positioning)

## Макет таблицы

HTML таблицы хороши для отображения табличных данных, но много лет назад — до того, как даже базовый CSS надёжно поддерживался в браузерах — веб-разработчики также использовали таблицы для разметки всей веб-страницы — размещая свои заголовки, нижние колонтитулы, различные колонки и т.д. в разных строках и столбцах таблиц. Это работало в то время, но оно имеет много проблем — разметка таблиц не гибкая, очень тяжёлая в вёрстке, сложна в отладке, и семантически не верная. (например, пользователи скринридеров имеют проблемы с навигацией в табличном макете).

То, как таблица выглядит на веб-странице при использовании разметки таблицы, обусловлено набором свойств CSS, которые определяют макет таблицы. Эти свойства могут использоваться для размещения элементов, которые не являются таблицами, использование, которое иногда описывается как «использование CSS таблиц».

Пример ниже показывает одно такое использование; использование CSS таблиц для вёрстки должно считаться устаревшим методом на данный момент, для тех ситуаций, когда у вас старые браузеры без поддержки Flexbox или Grid.

Давайте взглянем на пример. Во-первых, немного простой разметки, которая создаёт HTML форму. Каждый input элемент имеет label, и мы также заключили описание в параграф. каждая пара label/input обёрнута в {{htmlelement("div")}}, для целей вёрстки.

```html
<form>
  <p>First of all, tell us your name and age.</p>
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" id="age" />
  </div>
</form>
```

А теперь CSS для нашего примера. Большая часть CSS довольно обычна, за исключением использования свойства {{cssxref("display")}}. {{htmlelement("form")}}-е, {{htmlelement("div")}}-ам, а также {{htmlelement("label")}}-ам и {{htmlelement("input")}}-ам было сказано отображать как таблица, табличные строки и табличные ячейки соответственно — в принципе, они будут вести себя как разметка HTML таблицы, заставляя label-ы and input-ы красиво выравниваться по умолчанию. Все что мы должны будем сделать это добавить немного размеров, margin и т.д., чтобы все выглядело красивей, и на этом мы закончили.

Вы заметите, что параграфу с описанием дано `display: table-caption;` — что заставляет его вести себя как табличный {{htmlelement("caption")}} — а `caption-side: bottom;` для того чтобы указать описанию располагаться снизу таблицы в целях дизайна, не смотря на то что разметка находится до `<input>` элементов в источнике. Это обеспечивает гибкостью.

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```

Это даёт нам следующий результат:

{{ EmbedLiveSample('Макет_таблицы', '100%', '170') }}

Также вы можете посмотреть этот живой пример на [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) (смотрите также [исходный код](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html).)

## Многоколоночный макет

Модуль многоколоночного макета (multi-column layout) даёт нам способ располагать контент в столбцах, подобно тому, как текст располагается в газете. Хоть и чтение столбцов вверх и вниз менее полезно в контексте веба, так как вы не хотите заставлять пользователей прокручивать вверх и вниз, размещение контента по столбцам может быть полезной техникой.

Чтобы превратить блок в многоколоночный контейнер мы используем свойство {{cssxref("column-count")}}, которое говорит браузеру сколько колонок мы хотим иметь, либо свойство {{cssxref("column-width")}}, которое говорит браузеру заполнить контейнер как можно большим количеством столбцов, по крайней мере, такой ширины.

В примере ниже мы начинаем с HTML блоком, который содержится в элементе `<div>` с классом `container`.

```html
<div class="container">
  <h1>Multi-column layout</h1>

  <p>Paragraph 1.</p>
  <p>Paragraph 2.</p>
</div>
```

Мы используем `column-width` 200 px для этого контейнера, заставляя браузер создавать столько 200 пиксельных столбцов, сколько уместится в этом контейнере и затем разделить оставшееся пространство между созданными столбцами.

```html hidden
<div class="container">
  <h1>Multi-column Layout</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

```css hidden
body {
  max-width: 800px;
  margin: 0 auto;
}
```

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('Multicol_1', '100%', 200) }}

## Заключение

Эта статья предоставила короткое обобщение всех методов макетов о которых вам следует знать. Читайте далее для получения дополнительной информации по каждому методу!

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

## В этом модуле

- [Введение в CSS вёрстку](/ru/docs/Learn/CSS/CSS_layout/Introduction)
- [Нормальный поток](/ru/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/ru/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/ru/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/ru/docs/Learn/CSS/CSS_layout/Floats)
- [Позиционирование](/ru/docs/Learn/CSS/CSS_layout/Positioning)
- [Многоколоночный макет](/ru/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Устаревшие методы вёрстки](/ru/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Поддержка старых браузеров](/ru/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Оценка понимания базовых макетов](/ru/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
