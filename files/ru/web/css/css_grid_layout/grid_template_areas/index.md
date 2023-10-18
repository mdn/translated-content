---
title: Шаблоны грид-областей
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
---

В [предыдущем обзоре](/ru/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) мы рассмотрели грид-линии и то, как с их помощью размещать элементы в гридах. Когда вы работаете с CSS Grid Layout, у вас всегда есть грид-линии, поэтому они - быстрый, прямой и надёжный способ расположить элементы. Как бы то ни было, существует альтернативный метод, и этот метод можно использовать как в одиночку, так и в сочетании с расположением элементов по грид-линиям. В этом методе элементы располагаются с помощью именованных, заранее определённых грид-областей. Давайте рассмотрим, как он работает, и вы скоро поймёте, почему его называют методом ascii-искусства в концепции макетов на гридах!

## Имя для грид-области

Вы уже знакомы со свойством {{cssxref("grid-area")}}. Это то свойство, которое принимает в качестве значения номера четырёх грид-линий, определяющих расположение грид-области.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Что мы делаем, когда задаём все четыре значения? Мы определяем область, ограниченную данными грид-линиями.

![Грид область, определенная грид-линиями](4_area.png)

Другой способ определить грид-область, - задать ей имя и определить местоположение как значения свойства {{cssxref("grid-template-areas")}}. Вы можете выбрать для грид-области любое имя. Например, если нам нужно создать макет согласно картинке ниже, мы можем назвать четыре основных области следующим образом:

- header
- footer
- sidebar
- основное содержимое content

![На изображении показан простой двухколоночный макет с заголовком и подвалом](4_layout.png)

С помощью свойства {{cssxref("grid-area")}} мы можем назначить каждой из этих областей своё собственное имя. Именование областей ещё не создаёт никакого макета, однако теперь у нас есть именованные области, которые мы можем в нем использовать.

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

Определив имена, мы можем приступить к созданию макета. На этот раз вместо того, чтобы расположить элементы с помощью номеров линий, заданных для самих элементов, мы создаём весь макет в грид-контейнере.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Grid_Area_1', '300', '330') }}

Если мы используем этот метод, то нам не нужно задавать что-то отдельно для грид-элементов, все задаётся для грид-контейнера. Весь макет описывается значением свойства {{cssxref("grid-template-areas")}}.

## Оставляем ячейку пустой

В данном примере мы полностью заполнили грид областями и не оставили пустого пространства. Однако, наш метод также позволяет оставлять грид-ячейки пустыми. Чтобы сделать это воспользуйтесь символом точки, '`.`'. Если нам нужно отображать футер только под основным содержимым страницы, значит, мы должны оставить три ячейки под сайдбаром пустыми.

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    ".  .  .  ft   ft   ft   ft   ft   ft";
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Оставляем_ячейку_пустой', '300', '330') }}

Чтобы сделать наш макет чище, мы можем использовать множество символов `.`. Если между точками нет пробелов, то они считаются одной ячейкой. В комплексных макетах подобная возможность помогает аккуратно выравнивать строки и колонки. То есть, вы прямо в CSS можете видеть, как выглядит ваш макет.

## Охватываем несколько ячеек

В нашем примере каждая из областей охватывает несколько грид-ячеек, и получаем мы подобный эффект за счёт того, что через пробел повторяем имя этой грид-области несколько раз. Вы можете добавить дополнительные пробелы, чтобы аккуратно выравнять значения в `grid-template-areas`. В нашем примере мы пробелами подравняли `hd` и `ft` , чтобы они коррелировали с `main`.

Область, которую мы создаём подобными цепочками имён, должна быть прямоугольной. На данном этапе нельзя создать L-образную область. В спецификации говорится, что, возможно, в будущем подобная функциональность добавится. А сейчас мы можем охватывать строки так же легко, как и колонки. Например, давайте сделаем так, чтобы наш сайдбар простирался до конца футера. Для этого поменяем `.` на `sd`.

```css
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Охватываем_несколько_ячеек', '300', '330') }}

Значение {{cssxref("grid-template-areas")}} должно отображать законченный грид, а иначе оно невалидно (и игнорируется!). Это значит, что у вас должно быть одинаковое количество ячеек в каждой строке, а если какая-то ячейка должна быть пустой, то вместо имени в ней должна быть точка. Грид будет также невалидным, если области в нем не прямоугольные.

## Переопределение грида с медиавыражениями

Поскольку наш макет теперь содержится в одной части CSS, вносить изменения для различных контрольных точек (breakpoints) становится крайне легко. Сделать это можно либо переопределив сам грид, либо положение элементов на гриде, либо и то, и другое одновременно.

При этом определяйте имена для ваших грид-областей за пределами медиавыражений. В таком случае, область основного содержимого (content) всегда будет называться `main` независимо от того, где она находится на сетке.

Мы можем теперь изменить наш макет для узкой ширины экрана на более простой, где все грид-области будут друг над другом в одном столбце.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}

.wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

Внутри медиавыражений мы переопределяем этот макет на двухколонный, а при увеличении свободного пространства — на трёхколонный. Обратите внимание, что для широкого макета я оставляю свою девятиколонную трековую сетку, а с помощью `grid-template-areas` я указываю куда стоит разместить грид-области.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 700px) {
  .wrapper {
    grid-template-areas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Переопределение_грида_с_медиавыражениями', '550', '330') }}

## Использование `grid-template-areas` для элементов UI

Многие из примеров grid, которые вы найдёте в Интернете, предполагают, что вы будете использовать grid для макета главной страницы, однако grid может быть столь же полезна для небольших элементов. Использование {{cssxref ("grid-template-areas")}} может быть особенно приятным, так как в коде легко видеть, как выглядит ваш элемент.

В качестве очень простого примера мы можем создать «медиа-объект». Это компонент с пространством для изображения или другого носителя с одной стороны, а контент - с другой. Изображение может отображаться справа или слева от окна.

![На изображении показан простой пример «медиа-объекта»](4_media_objects.png)

Наша сетка представляет собой двухколоночную трековую сетку, со столбцом для изображения размером `1fr` и текстом `3fr`. Если вы хотите область с фиксированной шириной изображения, тогда вы можете установить столбец изображения как ширину пикселя и назначить текстовую область `1fr`. Одна колонка трека `1fr` затем займёт оставшуюся часть пространства.

Мы предоставляем области изображения имя области сетки `img` и содержимое текстовой области, затем мы можем выложить их, используя свойство `grid-template-areas`.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('Media_1', '300', '200') }}

### Отображение изображения с другой стороны окна

Возможно, нам захочется отобразить нашу коробку с изображением наоборот. Для этого мы переопределим сетку, чтобы поместить последний трек `1fr` и просто переверните значения {{cssxref ("grid-template-areas")}}.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media.flipped {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content img";
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media flipped">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('Media_2', '300', '200') }}

## Сокращения определения сетки

Рассмотрев различные способы размещения элементов на наших сетках и многие свойства, используемые для определения сетки, самое время взглянуть на пару сокращений, доступных для определения сетки и многое из всего этого в одной строке CSS.

Они могут быстро стать трудными для чтения для других разработчиков или даже для вашего будущего. Однако они являются частью спецификации и, вероятно, вы столкнётесь с ними в примерах или в использовании другими разработчиками, даже если вы решите не использовать их.

Прежде чем использовать какие-либо сокращения (shorthand), стоит помнить, что shorthand не только позволяют устанавливать множество свойств за один раз, но также действуют, чтобы **сбросить объекты** до их начальных значений, которых вы не используете, или не можете установить в сокращении. Поэтому, если вы используете сокращения, помните, что оно может сбросить все, что вы применили в другом месте.

Два сокращения (shorthand) для контейнера сетки - это Explicit Grid Shorthand `grid-template` и Grid Definition Shorthand `grid`.

### `grid-template`

Свойство {{cssxref ("grid-template")}} задаёт следующие свойства:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Свойство называется явным сокращением сетки, потому что оно устанавливает те вещи, которые вы контролируете, когда вы определяете явную сетку, а не те, которые влияют на любые неявные строки или столбцы, которые могут быть созданы.

Следующий код создаёт макет, используя {{cssxref ("grid-template")}}, который совпадает с макетом, созданным ранее в этом руководстве.

```css
.wrapper {
  display: grid;
  grid-template:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Первое значение - это значение нашей `grid-template-areas`, но мы также объявляем размер строки в конце каждой строки. Это то, что делает `minmax (100px, auto)`.

Затем после `grid-template-areas` у нас есть косая черта, после чего явный список треков столбцов.

### `grid`

Сокращение {{cssxref ("grid")}} идёт ещё дальше, а также задаёт свойства, используемые неявной сеткой. Таким образом, вы будете устанавливать:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Свойство также сбрасывает {{cssxref ("grid-gap")}} свойство на `0`, однако вы не можете указывать пробелы в этой сокращенности.

Вы можете использовать этот синтаксис точно так же, как сокращение {{cssxref ("grid-template")}}, просто знайте, что при этом вы сбросите другие значения, установленные этим свойством.

```css
.wrapper {
  display: grid;
  grid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Мы снова рассмотрим другие функции, предлагаемые этом сокращением позже в этих руководствах, когда мы рассмотрим автоматическое размещение и свойство `grid-auto-flow`.

Если вы проработали эти начальные руководства, теперь вы должны иметь возможность создавать сетки с использованием линейного размещения или названных областей. Потратьте некоторое время на создание некоторых общих шаблонов макетов с использованием сетки, в то время как есть много новых терминов для изучения, синтаксис относительно прост. По мере того, как вы разрабатываете примеры, вы, вероятно, придумаете некоторые вопросы и воспользуетесь случаями, которые мы ещё не рассмотрели. В остальных этих руководствах мы рассмотрим некоторые детали, включённые в спецификацию, - чтобы вы могли начать создавать с ним расширенные макеты.
