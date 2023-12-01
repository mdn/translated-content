---
title: Расположение элементов по грид-линиям с помощью CSS Grid
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement
---

В статье, касавшейся [основных понятий позиционирования элементов с помощью гридов](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout), мы кратенько рассмотрели, как располагать элементы в гриде, используя номера линий. Теперь давайте детально исследуем то, как работает эта фундаментальная часть спецификации.

Собственно, начать квест по гридам со знакомства с пронумерованными линиями - логично, потому что в ситуации, когда вы работаете с гридами, пронумерованные линии у вас есть **всегда**. Линии нумеруются и для колонок, и для строк, отсчёт начинается с 1. Нужно заметить, что грид индексируется в соответствии с режимом написания (writing mode) документа. В языках с написанием слева направо, таких как русский, например, линия 1 - самая левая линия грида. Если написание справа налево, то линия 1 будет, соответственно, самой правой линией в гриде. По ходу изучения недр мы детально узнаем, как гриды взаимодействуют с режимами написания, поэтому не исчезайте, впереди много интересного.

## Базовый пример

В качестве крайне простого примера давайте возьмём грид с тремя треками-колонками и тремя треками-строками. Такой грид даёт нам по 4 линии для каждого направления.

Внутри нашего грид-контейнера у нас есть четыре дочерних элемента. Если мы не размещаем их явным образом, эти элементы будут расположены в гриде в соответствии с правилами авторазмещения, то есть, по одному элементу - в каждой из четырёх первых ячеек. Если вы воспользуетесь [Firefox Grid Highlighter](/ru/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) , то увидите, как грид инициирует колонки и строки.

![Подсветка нашей грид разметки в инструментах разработчка.](3_hilighted_grid.png)

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('Базовый_пример', '300', '330') }}

## Позиционирование элементов по номерам линий

Мы можем воспользоваться размещением по линиям (line-based placement), чтобы расположить элементы на гриде. Например, нам нужно, чтобы первый элемент начинался от левого края и занимал один трек-колонку. Пусть он также начинается с первой строчной линии, то есть, от верхнего края грида, и занимает пространство до четвёртой строчной линии.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
}
```

Если вы явно позиционируете одни элементы, другие элементы грида по-прежнему размещаются в соответствии с правилами авторазмещения. Дальше мы детально рассмотрим, как это происходит, а пока вы и сами могли заметить, что по мере размещения одних элементов, оставшиеся элементы занимают пустые ячейки грида.

Задавая адреса для каждого элемента по отдельности, мы можем разместить все наши четыре элемента по колонкам и строкам. Заметьте, что при желании можно оставить ячейки пустыми. Одна из самых приятных вещей при работе с Grid Layout - возможность создавать негативное пространство (пустые области в макете) без кувырков через голову и прочих хаков.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box2 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

{{ EmbedLiveSample('Line_Number', '300', '330') }}

## Сокращения `grid-column` и `grid-row`

Мы написали много кода, чтобы разместить каждый элемент. Неудивительно, что существует [краткая форма записи свойств](/ru/docs/Web/CSS/Shorthand_properties). {{cssxref("grid-column-start")}} и {{cssxref("grid-column-end")}} могут быть объединены в одном {{cssxref("grid-column")}}, а {{cssxref("grid-row-start")}} и {{cssxref("grid-row-end")}} - в {{cssxref("grid-row")}}.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
```

{{ EmbedLiveSample('Grid_Shorthands', '300', '330') }}

### Расположение элемента по умолчанию

В примерах выше мы задавали конечную линию для строки и колонки, чтобы продемонстрировать работу свойств, однако, если элемент занимает только один трек, вы можете опустить значение `grid-column-end` или `grid-row-end`. Грид по умолчанию размещает элемент таким образом, чтобы он занимал всего один трек. Это значит, что длинная запись свойств в нашем первоначальном примере может выглядеть вот так:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
}
.box2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box3 {
  grid-column-start: 2;
  grid-row-start: 1;
}
.box4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
}
```

{{ EmbedLiveSample('End_Lines', '300', '330') }}

Поэтому, если мы хотим, чтобы элементы занимали только один трек, наша сокращённая запись будет выглядеть вот так, без слеша и без второго значения:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
```

{{ EmbedLiveSample('New_Shorthand', '300', '330') }}

## Свойство `grid-area`

Мы можем пойти ещё дальше и определить целую область с помощью одного единственного свойства – {{cssxref("grid-area")}}. Порядок свойств для грид-области следующий:

- grid-row-start
- grid-column-start
- grid-row-end
- grid-column-end

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
.box2 {
  grid-area: 1 / 3 / 3 / 4;
}
.box3 {
  grid-area: 1 / 2 / 2 / 3;
}
.box4 {
  grid-area: 3 / 2 / 4 / 4;
}
```

{{ EmbedLiveSample('Свойство_grid-area', '300', '330') }}

Порядок значений для `grid-area` может показаться немного странным, он противоположен тому порядку, в котором мы, например, записываем значения для сокращённых свойств margin и padding. Но сделано это потому, что грид работает с направлениями относительно потока, определёнными в спецификации CSS Writing Modes. В дальнейшем мы рассмотрим, как гриды взаимодействуют с режимами написания (writing modes), но пока давайте примем за данность, что мы имеем дело с концепцией четырёх направлений относительно потока:

- block-start (начало блока)
- block-end (конец блока)
- inline-start (начало строки)
- inline-end (конец строки)

Мы работаем с русским, языком с написанием слева направо. Начало нашего блока (block-start) - верхняя строчная линия грид-контейнера, конец блока (block-end) - последняя строчная линия контейнера. Начало строки (inline-start) - самая левая колоночная линия, поскольку начало строки - это всегда точка, с которой начинается написание текста в заданном режиме написания. Конец строки (inline-end) - последняя колоночная линия грида.

Когда мы задаём нашу грид-область с помощью свойства `grid-area` , мы сначала определяем обе начальные линии `block-start` и `inline-start`, а затем обе конечные линии `block-end` и `inline-end`. Поскольку мы давно работаем с физическими свойствами top, right, bottom и left, поначалу это кажется непривычным, но вполне осмысленно, если осознать, что относительно режима написания веб-сайты - многонаправленные структуры.

## Считая с конца

Мы также можем отсчитывать грид-линии с конца, то есть с последней (для русского языка - самой правой) колоночной и последней (самой нижней) строчной линий. Индекс этих линий будет `-1`, а линий непосредственно перед ними `-2,` и так далее. Нужно помнить, что под последней линией понимается последняя линия явного грида (_explicit grid)_, то есть грида, определённого с помощью `grid-template-columns` и `grid-template-rows`. Любые линии строк и колонок, добавленные неявным гридом (_implicit grid)_ не считаются.

В примере ниже мы "перевернули" определение нашего грида, при размещении элементов задавая линии с конца, то есть, от правого и нижнего краёв.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}
.box2 {
  grid-column-start: -3;
  grid-column-end: -4;
  grid-row-start: -1;
  grid-row-end: -3;
}
.box3 {
  grid-column-start: -2;
  grid-column-end: -3;
  grid-row-start: -1;
  grid-row-end: -2;
}
.box4 {
  grid-column-start: -2;
  grid-column-end: -4;
  grid-row-start: -3;
  grid-row-end: -4;
}
```

{{ EmbedLiveSample('Считая_с_конца', '300', '330') }}

### Как растянуть элемент на длину всего грида?

Возможность адресовать и первую, и последнюю линии грида становится крайне полезной, если нам нужно растянуть элемент на всю длину грида. Сделать это можно вот так:

```css
.item {
  grid-column: 1 / -1;
}
```

## Зазоры (Gutters) или аллеи (Alleys)

Спецификация CSS Grid включает возможность добавлять промежутки (зазоры) между треками-колонками и треками-строками с помощью свойств {{cssxref("grid-column-gap")}} и {{cssxref("grid-row-gap")}}. Эти свойства задают промежутки, которые во многом действуют точно так же, как свойство {{cssxref("column-gap")}} в многоколоночных макетах.

Зазоры появляются только между треками и не добавляют пространство сверху, снизу, справа или слева грид-контейнеру. Мы можем добавить зазоры в предыдущий пример, дописав эти свойства грид-контейнеру.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / 4;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / 4;
  grid-row: 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-column-gap: 20px;
  grid-row-gap: 1em;
}
```

{{ EmbedLiveSample('Зазоры_Gutters_или_аллеи_Alleys', '300', '350') }}

### Сокращённая запись для грид-зазоров

Оба свойства также можно записать с помощью свойства-сокращения {{cssxref("grid-gap")}}. Если задать только одно значение, то оно определит размер зазоров и между колонками, и между строками. Если мы задаём два значения, то первое используется для `grid-row-gap` , а второе - для `grid-column-gap`.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em 20px;
}
```

В терминах расположения элементов по грид-линиям (line-based positioning) зазоры ведут себя так, как если бы самой линии была добавлена толщина. Все, что должно было начинаться от линии, начинается от неё на расстоянии зазора, и вы не можете адресовать зазор напрямую или поместить в него что-нибудь. Если вам нужны зазоры, которые ведут себя, как обыкновенные треки, что же - определите трек, а не зазор.

## Использование ключевого слова `span`

В дополнение к возможности обращаться к начальной и конечной линии по их номерам вы можете задать номер начальной линии, а после - количество треков, которые должен занять элемент.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.box3 {
  grid-column: 2;
  grid-row: 1;
}
.box4 {
  grid-column: 2 / span 2;
  grid-row: 3;
}
```

{{ EmbedLiveSample('Использование_ключевого_слова_span', '300', '330') }}

Ключевое слово `span` также можно использовать в качестве значения `grid-row-start`/`grid-row-end` и `grid-column-start/grid-column-end`. Два примера ниже создают одну и ту же грид-область. В первом примере мы задаём начальную строчную линию, а после говорим свойству, отвечающему за конечную линию: эй, мы хотим занять под этот элемент три линии. В итоге, грид-область начинается с первой линии и занимает пространство до 4-ой.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}
```

Во втором примере поступим наоборот: зададим конечную строчную линию, а в значении свойства, отвечающего за начальную линию, напишем `span 3`. Это значит, что элемент должен занять три трека до заданной конечной линии. Грид-область начинается с линии 4 и занимает три трека до линии 1.

```css
.box1 {
  grid-column-start: 1;
  grid-row-start: span 3;
  grid-row-end: 4;
}
```

Чтобы лучше освоиться с размещением элементов по грид-линиям, попробуйте собрать несколько распространённых макетов, располагая элементы на гридах с различным количеством колонок. Помните, что если вы не размещаете все ваши элементы, оставшиеся располагаются в соответствии с правилами авторазмещения. В результате может получиться как раз тот макет, который вам нужен, но не факт, и если что-то пошло не так, проверьте, определили ли вы позицию для проблемного элемента.

Также помните, что элементы на гриде могут перекрывать друг друга, если вы намеренно разместили их так, чтобы они друг друга перекрывали. Подобное поведение позволяет получить интересные эффекты, но, если вы некорректно задали начальные и конечные линии, результат может неприятно вас удивить. [Firefox Grid Highlighter](/ru/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) будет крайне полезен в процессе обучения, особенно, когда вы строите сложные гриды.
