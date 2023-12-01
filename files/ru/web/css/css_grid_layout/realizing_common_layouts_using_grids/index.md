---
title: Realizing common layouts using CSS Grid Layout
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
---

Чтобы завершить набор руководств по CSS Grid Layout, я собираюсь пройтись по основным видам макетов, которые демонстрируют несколько различных методов, которые можно использовать при проектировании с помощью grid layout. Мы рассмотрим пример использования областей сетки-шаблона, типичную гибкую сеточную систему с 12 столбцами, а также список продуктов с использованием автоматического размещения. Как вы можете видеть из этого списка примеров, существует несколько способов достижения желаемого результата с помощью компоновки сетки. Выберите метод, который вы считаете наиболее полезным для решения проблем, которые вы решаете, и проектов, которые вам нужно реализовать.

## Адаптивный 1-3 колоночный макет с использованием `grid-template-areas`

Многие веб-сайты являются разновидностью такого типа макета, с основным содержанием, боковыми панелями, хедером и футером. В адаптивном дизайне вы можете отобразить макет в виде одного столбца, добавив боковую панель в определённом месте, а затем ввести макет из трёх столбцов для более широких экранов.

![Изображение трех разных макетов созданных переопределением нашей грид разметки в двух точках.](11-responsive-areas.png)

Я собираюсь создать этот макет, используя именованные области шаблонов, о которых мы узнали в руководстве _[Grid template areas](/ru/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_.

Моя разметка-это контейнер с элементами внутри для хедера и футера, основного контента, навигации, боковой панели и блока, в который я собираюсь поместить рекламу.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Main article area</h1>
    <p>
      In this layout, we display the areas in source order for any screen less
      that 500 pixels wide. We go to a two column layout, and then to a three
      column layout by redefining the grid, and the placement of items on the
      grid.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

Поскольку мы используем {{cssxref("grid-template-areas")}} для создания макета, вне каких-либо медиавыражений, мне нужно назвать области. Мы называем области, используя свойство {{cssxref("grid-area")}}.

```css
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.main-nav {
  grid-area: nav;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
```

Это не создаст никакого макета, однако наши элементы теперь имеют имена, которые мы можем использовать для создания. Оставаясь вне каких-либо медиавыражений, я теперь собираюсь настроить макет для мобильной платформы. Здесь я держу все в исходном порядке, пытаясь избежать любого разрыва между источником и дисплеем, как описано в руководстве _[Grid layout and accessibility](/ru/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)_. У меня нет столбцов или строк, т. к. такой макет предполагает один столбец, и строки будут создаваться по мере необходимости для каждого из элементов неявной сетки.

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}
```

После настройки мобильного макета мы получим единственный столбец при всех размерах экрана, теперь мы можем добавить медиавыражение и переопределить наш макет для того обстоятельства, что у нас достаточно экранного места, чтобы разместить два столбца.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Вы можете видеть, как макет принимает форму в значении {{cssxref("grid-template-areas")}}. Заголовок охватывает две дорожки столбцов, как и навигационная система. В треке третьего ряда у нас есть боковая панель рядом с содержимым. В четвёртой строке я решил разместить свой рекламный контент – так он появляется под боковой панелью, а затем футер, рядом с ним под контентом. Я использую flexbox в навигации, чтобы отобразить его в разнесённом ряду.

Теперь я могу добавить конечные точки в наш 3-х колоночный макет.

```css
@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: column;
  }
}
```

Трёхколоночный макет имеет две боковые колонки размером `1fr` и среднюю колонку, размером `4fr` . Это означает, что доступное пространство в контейнере разделено на 6 ячеек и распределено пропорционально нашему макету – по одной части к боковым колонкам и по 4 части к центру.

В этом макете я показываю навигацию в левой колонке, рядом с содержимым. В правой колонке у нас есть боковая панель, а под ней блок рекламы (ad). Футер теперь охватывает всю нижнюю часть макета. Затем я использую flexbox для отображения навигации в виде столбца.

{{ EmbedLiveSample('layout_1', '800', '500') }}

Это простой пример, но он демонстрирует, как мы можем использовать grid layout для перестройки нашего макета. В частности, я изменяю расположение рекламного блока, как заложено в настройках столбцов. Этот метод очень полезен на этапе прототипирования, он легко позволяет экспериментировать с расположением элементов. Вы всегда можете использовать сетку таким образом для прототипирования, даже несмотря на особенности отражения в различных браузерах, которые показывают ваш сайт.

## Гибкий 12-колоночный макет

Если вы работали с фреймворками или grid системами, вам знакомо размещение сайта на гибкой сетке с 12 или 16 столбцами. Мы можем создать такой макет, используя CSS Grid Layout. В качестве простого примера я создаю гибкую сетку из 12 столбцов, которая имеет 12 линий столбцов размером 12 `1fr`-все они имеют начальную линию с именем `col-start`. Это означает, что у нас будет двенадцать линий сетки с именем `col-start`.

```css hidden
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
```

Чтобы продемонстрировать, как работает эта сеточная система, у меня внутри оболочки есть четыре дочерних элемента.

```html
<div class="wrapper">
  <div class="item1">Start column line 1, span 3 column tracks.</div>
  <div class="item2">
    Start column line 6, span 4 column tracks. 2 row tracks.
  </div>
  <div class="item3">Start row 2 column line 2, span 2 column tracks.</div>
  <div class="item4">
    Start at column line 3, span to the end of the grid (-1).
  </div>
</div>
```

Затем я могу поместить их в сетку, используя именованные линии, а также ключевое слово span.

```css
.item1 {
  grid-column: col-start / span 3;
}
.item2 {
  grid-column: col-start 6 / span 4;
  grid-row: 1 / 3;
}
.item3 {
  grid-column: col-start 2 / span 2;
  grid-row: 2;
}
.item4 {
  grid-column: col-start 3 / -1;
  grid-row: 3;
}
```

{{ EmbedLiveSample('layout_2', '800', '400') }}

Как описано в руководстве по именованным строкам, мы используем именованную строку для размещения нашего элемента. Поскольку у нас есть 12 строк с одинаковым именем, мы используем имя, а затем индекс строки. Вы также можете использовать только индекс строки, если избегаете использования именованных строк.

Вместо того чтобы устанавливать номер конечной строки, я решил указать, сколько треков должен охватить этот элемент, используя ключевое слово span. Мне нравится этот подход, поскольку при работе с системой макета с несколькими столбцами мы обычно думаем о блоках с точки зрения количества треков сетки, которые они охватывают, и в зависимости от этого корректируем. Чтобы увидеть, как блоки выравниваются по трекам, используйте инспектор сетки [Firefox Grid Inspector](/ru/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts). Он наглядно демонстрирует, как расположены наши предметы.

![Расположение элементов на грид-сетке с подсветкой грид-трэков.](11-grid-inspector-12col.png)

Существуют некоторые ключевые различия в том, как макет сетки работает над сеточными системами, которые вы, возможно, использовали ранее. Как вы можете видеть, нам не нужно добавлять какую-либо разметку для создания строки, сеточные системы должны сделать это, чтобы остановить элементы, появляющиеся в строке выше. С помощью CSS Grid Layout мы можем размещать элементы в строки, не опасаясь, что они поднимутся в строку выше, если она останется пустой. Благодаря этому строгому размещению столбцов и строк мы также можем легко оставить пустое пространство в нашем макете. Нам также не нужны специальные классы, чтобы тянуть или толкать элементы, чтобы вдавливать их в сетку. Все, что нам нужно сделать, это указать начальную и конечную строку для элемента.

### Построение макета с использованием 12-столбцовой системы

Чтобы увидеть, как этот метод макета работает на практике, мы можем создать тот же самый макет, который мы создали с {{cssxref("grid-template-areas")}}, на этот раз используя сеточную систему из 12 столбцов. Я начинаю с той же разметки, которая используется для примера областей шаблона сетки.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Main article area</h1>
    <p>
      In this layout, we display the areas in source order for any screen less
      that 500 pixels wide. We go to a two column layout, and then to a three
      column layout by redefining the grid, and the placement of items on the
      grid.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

Затем я настраиваю сетку как в примере выше.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
}
```

Мы снова собираемся сделать этот макет адаптивным, но на этот раз с использованием именованных линий. Каждая контрольная точка будет использовать сетку из 12 столбцов, однако количество дорожек, которые будут охватывать элементы, будет меняется в зависимости от размера экрана.

Прежде всего мы запускаем мобильные устройства, и все, что нам нужно для самых узких экранов, - это чтобы элементы оставались в исходном порядке и были расположены прямо по сетке.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

В следующей контрольной точке мы хотим перейти к двухколоночному макету. Наш заголовок и навигация по-прежнему охватывают всю сетку, поэтому нам не нужно указывать для них какое-либо позиционирование. Боковая панель начинается с первой строки столбца с именем col-start, охватывающей 3 строки. Он идёт после строки 3, так как заголовок и навигация находятся в первых двух дорожках строки.

Панель объявлений находится ниже боковой панели, поэтому начинается с строки сетки 4. Затем у нас есть основное содержимое и футер, начинающийся с col-start 4 и охватывающий 9 треков, ведущих их к концу сетки.

```css
@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content,
  .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Наконец, мы переходим к трёхколоночной версии этого макета. Заголовок продолжает распространяться прямо по сетке, но теперь навигация перемещается вниз, чтобы стать первой боковой панелью с основным содержимым, а затем боковой панелью рядом с ней. Футер теперь также охватывает весь макет.

```css
@media (min-width: 700px) {
  .main-nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
```

{{ EmbedLiveSample('layout_3', '800', '450') }}

Снова смотрим [Grid Inspector](/ru/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts), чтобы увидеть, какую форму принял наш макет.

![Макет с грид-трэками, подсвеченными инспектором.](11-grid-inspector-12col-layout.png)

При создании этого макета следует отметить, что нам не нужно было явно размещать каждый элемент сетки в каждой контрольной точке. Мы унаследовали ранее настроенное размещение – преимущество работы "сначала мобильный". Мы также можем воспользоваться преимуществами автоматического размещения сетки. Сохраняя элементы в логическом порядке, автоматическое размещение делает довольно много работы за нас при размещении элементов в сетке. В последнем примере этого руководства мы создадим макет, который полностью зависит от автоматического размещения.

## Создание списка с помощью авторазмещения

Многие макеты, по сути, представляют собой наборы "карточек" - списки продуктов, галереи изображений и так далее. Сетка может очень легко создавать эти списки таким образом, чтобы они были отзывчивыми, без необходимости добавления медиавыражений. В следующем примере я комбинирую CSS Grid и Flexbox макеты, чтобы сделать простой макет списка продуктов.

Разметка моего списка-это неупорядоченный список элементов. Каждый элемент содержит заголовок, некоторый текст различной высоты и ссылку с призывом к действию.

```html
<ul class="listing">
  <li>
    <h2>Item One</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Two</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li class="wide">
    <h2>Item Three</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
      <p>This one has more text than the other items.</p>
      <p>Quite a lot more</p>
      <p>Perhaps we could do something different with it?</p>
    </div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Four</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Five</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

Мы собираемся создать сетку с гибким количеством гибких столбцов. Я хочу, чтобы они никогда не становились меньше 200 пикселей, а затем делили любое доступное оставшееся пространство поровну – так мы всегда получаем одинаковые по ширине дорожки столбцов. Мы достигаем этого с помощью функции `minmax()` в нашей повторной нотации для определения размера трека.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Как только я добавляю этот CSS, элементы начинают раскладываться в виде сетки. Если я сделаю окно меньше или шире, количество дорожек столбцов изменится – без необходимости переопределять сетку.

Затем я могу привести в порядок внутренние части ячеек, используя flexbox. Я установил для элемента списка `display: flex` and и `flex-direction` для `column`. Затем я могу использовать margin auto для `.cta` чтобы подтолкнуть этот элемент вниз к нижней части ячейки.

```css
.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

Это действительно одна из ключевых причин, по которой я буду использовать flexbox, а не сетку, если я просто выравниваю или распределяю что-то в одном измерении, это вариант использования flexbox.

{{ EmbedLiveSample('layout_4', '800', '900') }}

Теперь все это выглядит более завершённым. Однако иногда у нас есть эти элементы, которые содержат больше контента, чем другие. Было бы неплохо, чтобы они охватывали два трека, и тогда они не будут такими высокими. У меня есть класс `wide` для большого элемента, и я добавляю правило {{cssxref("grid-column-end")}} со значением `span 2`. Теперь, когда grid столкнётся с этим элементом, он назначит ему два трека. В некоторых точках это означает, что мы получим разрыв в сетке – там, где нет места для размещения двухтрекового элемента.

![В макете есть пробелы, так как нет места для двухтрекового элемента.](11-grid-auto-flow-sparse.png)

Я могу привести причину недостатка заполнения с помощью {{cssxref("grid-auto-flow")}}: `dense` в грид ячейке. Будьте осторожны, когда делаете это, поскольку это действительно уводит элементы от их логического исходного порядка. Вы должны делать это только в том случае, если ваши элементы не имеют установленного порядка – и быть в курсе проблем порядка вкладок после источника, а не вашего переупорядоченного отображения.

```html hidden
<ul class="listing">
  <li>
    <h2>Item One</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Two</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li class="wide">
    <h2>Item Three</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
      <p>This one has more text than the other items.</p>
      <p>Quite a lot more</p>
      <p>Perhaps we could do something different with it?</p>
    </div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Four</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Five</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}

.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}
```

{{ EmbedLiveSample('layout_5', '800', '900') }}

Этот метод использования автоматического размещения с некоторыми правилами, применяемыми к определённым элементам, очень полезен и может помочь вам с контентом, который выводится CMS, например, где у вас есть повторяющиеся элементы и, возможно, вы можете добавить класс к определённым элементам, когда они отображаются в HTML.

## Дальнейшие исследования

Лучший способ научиться использовать сеточный макет-это продолжать строить примеры, подобные тем, которые мы рассмотрели здесь. Выберите что-то, что вы обычно строите, используя свой фреймворк выбора или используя поплавки, и посмотрите, сможете ли вы построить его с помощью сетки. Не забудьте найти примеры, которые невозможно построить с помощью современных методов. Это может означать, что вы черпаете вдохновение из журналов или других источников, не связанных с интернетом. Сеточный макет открывает возможности, которых у нас раньше не было, нам не нужно быть привязанными к тем же старым макетам, чтобы использовать его.

- For inspiration see the [_Layout Labs_ from Jen Simmons](http://labs.jensimmons.com/), she has been creating layouts based on a range of sources.
- For additional common layout patterns see _[Grid by Example](http://gridbyexample.com)_, where there are many smaller examples of grid layout and also some larger UI patterns and full page layouts.
