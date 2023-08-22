---
title: Layout using named grid lines
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
---

В предыдущих руководствах мы рассматривали размещение элементов по линиям, созданным путём определения треков сетки, а также способы размещения элементов с помощью именованных областей шаблона. В этом руководстве мы рассмотрим, как эти две вещи работают вместе, когда мы используем именование линий. Именование линий очень полезно, но при комбинировании именований и размеров сетки иногда получаются очень запутанный синтаксис. Представленные примеры помогут внести ясность и упростить понимание синтаксиса.

## Именование линий при определении сетки

Когда вы определяете свою сетку с помощью свойств `grid-template-rows` и `grid-template-columns`, вы можете присвоить имя некоторым или всем линиям в вашей сетке. Для демонстрации я использую простой макет, созданный в руководстве по линейному размещению. На этот раз я создам сетку, используя именованные линии.

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

При определении сетки я задаю линиям имена, помещая их внутри квадратных скобок. Можете использовать любые имена, какие вам нравятся. Я задал имена `main-start` для начала и `main-end` для конца контейнера, причём как для строк, так и для столбцов. Затем определил центральный блок сетки как `content-start` и `content-end`, опять же как для столбцов, так и для строк. Но вам необязательно именовать все линии в вашей сетке, можете именовать только опорные линии вашего макета.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Теперь, когда линии имеют свои имена, мы можем использовать эти мена для размещения элементов.

```css
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}

.box2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}

.box3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}

.box4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
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

{{ EmbedLiveSample('example_named_lines', '500', '330') }}

Теперь при линейном размещении вы можете смешивать номера строк или их имена. Именование строк полезно при создании адаптивного дизайна, в котором вы переопределяете саму сетку, а не положение содержимого внутри сетки.

### Присвоение линиям нескольких имён

При необходимости можно присвоить строке более одного имени. Например, `sidebar-end` для обозначении конца области `sidebar`, и `main-start` для начала области `main`. Укажите имена внутри квадратных скобок через пробел `[sidebar-end main-start]`. В дальнейшем вы можете обращаться к этой строке по любому из этих имён.

## Неявные области сетки из именованных линий

Ранее уже упоминалось, что вы можете выбирать для линий любые имена. Такое имя является [custom ident](https://drafts.csswg.org/css-values-4/#custom-idents) - именем, определяемым автором. При выборе имени вам нужно избегать слов, которые могут использоваться в спецификации, что приведёт к путанице - например, `span`. Идентификаторы не заключаются в кавычки.

Хотя вы можете выбрать любые имена, но если вы добавляете `-start` и `-end` к линиям вокруг области, как в приведённом выше примере, то сетка создаст вам именованную область основного используемого имени. Возьмём приведённый выше пример, у меня есть `content-start` и `content-end` как для строк, так и для столбцов. Это означает, что будет создана также область сетки с именем `content`, которую можно по своему усмотрению.

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

Я использую те же определения сетки, что и выше, однако на этот раз я собираюсь поместить один элемент в содержимое `content` области.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

```html
<div class="wrapper">
  <div class="thing">I am placed in an area named content.</div>
</div>
```

{{ EmbedLiveSample('implicit_areas_from_lines', '500', '330') }}

Нам не нужно определять, где находятся наши области с помощью `grid-template-areas` поскольку наши именованные линии создали для нас эту область.

## Неявные линии сетки из именованных областей

Мы видели, как с помощью именованных линий можно создать именованную область. Это работает и наоборот. Именованные области создают именованные строки, которые можно использовать для размещения элементов. Если мы возьмём макет, созданный в руководстве по областям шаблона сетки, мы можем использовать линии, созданные нашими областями, чтобы увидеть, как это работает.

В этом примере я добавил дополнительный div с классом `overlay`. Мы назвали области, созданные с помощью свойства grid-area, а затем макет, созданный в grid-template-areas. Именованные области:

- `hd`
- `ft`
- `main`
- `sd`

Строки и линии:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Вы можете видеть именованные строки на рисунке, обратите внимание, что некоторые строки имеют двойное именование - например, `sd-end` и `main-start` относящиеся к одной и той же строке столбца.

![На изображении показаны именованные строки, неявно созданные грид-областью.](5_multiple_lines_from_areas.png)

Позиционировать `overlay` используя неявные именованные линии, это то же самое, что позиционировать элемент с помощью названных нами строк..

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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}

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

.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92, 148, 13);
  background-color: rgba(92, 148, 13, 0.4);
  color: rgb(92, 148, 13);
  font-size: 150%;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
  <div class="overlay">Overlay</div>
</div>
```

{{ EmbedLiveSample('implicit_lines_from_area', '500', '330') }}

Учитывая, что у нас есть возможность позиционировать создание линий из именованных областей и областей из именованных линий, стоит потратить время на планирование стратегии именования, когда вы начинаете создавать свой макет. Выбирайте имена, которые будут иметь смысл для вас и вашей команды, это облегчит использование созданных вами макетов.

## Определение одноимённых линий при помощи функции repeat()

Если вы хотите дать всем линиям в вашей сетке уникальное имя, то вам нужно будет написать длинное определение трека, а не использовать синтаксис повтора, так как вам нужно добавить имя в квадратных скобках при определении треков. Если вы используете синтаксис повтора, то в конечном итоге получите несколько строк с одинаковым именем, однако это тоже может быть очень полезно.

В следующем примере я создаю сетку с двенадцатью равными по ширине столбцами. Перед определением размера 1fr трека столбца я также определяю имя строки `[col-start]`. Это означает, что в конечном итоге мы получим сетку, содержащую 12 строк столбцов с именами `col-start` перед столбцом шириной `1fr` .

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
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

После того, как вы создали сетку, вы можете разместить на ней элементы. Поскольку у нас есть несколько строк с именем col-start, если вы размещаете элемент после строки col-start, сетка использует самую первую строку с именем col-start, в нашем случае это будет крайняя левая строка. Чтобы обратиться к другой строке, используйте имя плюс номер для этой строки:

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

Вы можете использовать ключевое слово `span`. Следующий элемент будет расположен начиная с седьмой линии и займёт три линии.

```css
.item2 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="wrapper">
  <div class="item1">I am placed from col-start line 1 to col-start 5</div>
  <div class="item2">I am placed from col-start line 7 spanning 3 lines</div>
</div>
```

{{ EmbedLiveSample('multiple_lines_same_name', '500', '330') }}

Если вы посмотрите на этот макет в Firefox Grid Highlighter вы можете увидеть, как отображаются линии столбцов и как наши элементы помещаются против этих линий..

![12 грид-колонок с элементами. Подсветка инструмента разработчика показывает положение линий.](5_named_lines1.png)

Синтаксис повтора также может принимать трек-лист , это не просто должен быть один размер трека, который повторяется. Приведённый ниже код создаст сетку из восьми дорожек с более узким столбцом ширины 1fr с именем col1-start и более широким столбцом 3fr с именем col2-start.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Если ваш повторяющийся синтаксис помещает две строки рядом друг с другом, то они будут объединены и создадут тот же результат, что и присвоение строке нескольких имён в неповторяющемся определении трека. Следующее определение создаёт четыре трека 1fr, каждый из которых имеет начальную и конечную линии.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Если мы запишем это определение без использования повторяющейся нотации, то оно будет выглядеть следующим образом .

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Если вы использовали список треков, то вы можете использовать ключевое слово `span` не только для охвата ряда строк, но и для охвата ряда строк с определённым именем..

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
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}

.item1 {
  grid-column: col1-start / col2-start 2;
}

.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html
<div class="wrapper">
  <div class="item1">
    I am placed from col1-start line 1 to col2-start line 2
  </div>
  <div class="item2">
    I am placed from col1-start line 2 spanning 2 lines named col1-start
  </div>
</div>
```

{{ EmbedLiveSample('span_line_number', '500', '330') }}

За последние три руководства вы обнаружили, что существует множество различных способов размещения элементов с помощью сетки. На первый взгляд это может показаться чрезмерно сложным, но помните, что вам не нужно использовать их все. На практике я нахожу, что для простых макетов хорошо работает использование именованных областей шаблонов, это даёт хорошее визуальное представление о том, как выглядит ваш макет, и возможность легко перемещать элементы по сетке.

Если вы работаете со строгим макетом из нескольких столбцов, например, демонстрация именованных строк в последней части этого руководства работает очень хорошо. Если вы рассматриваете сеточные системы, в таких фреймворках, как Foundation или Bootstrap, которые основаны на сетке из 12 столбцов. Затем фреймворк импортирует код для выполнения всех вычислений, чтобы убедиться, что столбцы складываются до 100%. С помощью Grid layout единственный код, который нам нужен для нашего грид-фреймворка, - это:

```css
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Затем мы можем использовать этот фреймворк для вёрстки нашей страницы. Например, чтобы создать макет из трёх столбцов с верхним и нижним колонтитулами, у меня может быть следующая разметка.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <header class="main-header">I am the header</header>
  <aside class="side1">I am sidebar 1</aside>
  <article class="content">I am the main article</article>
  <aside class="side2">I am sidebar 2</aside>
  <footer class="main-footer">I am the footer</footer>
</div>
```

Затем я мог бы разместить это в своей структуре компоновки сетки следующим образом.

```css
.main-header,
.main-footer {
  grid-column: col-start / span 12;
}

.side1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}

.content {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}

.side2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{ EmbedLiveSample('three_column', '500', '330') }}

Опять же , маркер сетки полезен, чтобы показать нам, как работает сетка, в которую мы поместили наши элементы.

![Макет с подсветкой грид разметки.](5_named_lines2.png)

Это все, что мне нужно. Мне не нужно делать никаких вычислений, сетка автоматически удалила мою 10- пиксельную дорожку желоба, прежде чем назначить пространство для треков столбцов 1fr. Когда вы начнёте создавать свои собственные макеты, вы обнаружите, что синтаксис становится более знакомым, и вы выбираете способы, которые лучше всего подходят для вас, а также тип проектов,которые вам нравятся. Попробуйте построить несколько общих шаблонов с помощью этих различных методов, и вскоре вы найдёте свой самый продуктивный способ работы. В следующем руководстве мы рассмотрим, как сетка может размещать элементы для нас - без необходимости использовать свойства размещения вообще!
