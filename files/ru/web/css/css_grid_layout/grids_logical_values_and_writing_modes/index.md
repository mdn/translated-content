---
title: CSS grids, logical values and writing modes
slug: Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes
---

В этих руководствах я уже затронул важную особенность grid layout: поддержка различных режимов записи, встроенных в спецификацию. В этом руководстве мы рассмотрим эту особенность grid и других современных методов компоновки, немного узнав о режимах записи и логических и физических свойствах, когда мы это делаем.

## Логические и физические свойства и ценности

CSS полон **физических** слов позиционирования - слева и справа, сверху и снизу. Если мы позиционируем элемент с использованием абсолютного позиционирования, мы используем эти физические ключевые слова в качестве значений смещения, чтобы обжимать элемент вокруг. В нижеприведённом фрагменте кода элемент помещается в 20 пикселей сверху и 30 пикселей слева от контейнера:

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

```html
<div class="container">
  <div class="item">Item</div>
</div>
```

Ещё одно место, где вы можете увидеть используемые физические ключевые слова, - это использовать `text-align: right` выравнивать текст вправо. В CSS есть также физические **свойства**. Мы добавляем поля, дополнения и границы, используя эти физические свойства {{cssxref ("margin-left")}}, {{cssxref ("padding-left")}} и т. д.

Мы называем эти ключевые слова и свойства _физическими_, потому что они относятся к экрану, на который вы смотрите. Слева всегда слева, независимо от того, в каком направлении работает ваш текст.

Это может стать проблемой при разработке сайта, который должен работать на нескольких языках, включая языки с текстом, начинающимся справа, а не слева. Браузеры хорошо справляются с направлением текста и вам даже не нужно работать на языке {{glossary ("rtl")}}, чтобы посмотреть. В приведённом ниже примере у меня есть два абзаца. У одного не установлено {{cssxref ("text-align")}}, второе имеет выравнивание текста (`text-align`) влево. Я добавил `dir = "rtl"` в элемент `html`, который переключает режим записи по умолчанию для документа на английском языке `ltr`. Вы можете видеть, что первый абзац остаётся слева направо, из-за оставленного значения выравнивания текста. Второе, однако, переключает направление и текст пробегает справа налево.

![Простой пример выравнивания текста.](8_direction_simple_example.png)

Это очень простой пример проблемы с физическими значениями и свойствами, которые используются в CSS. Они не позволяют браузеру выполнять работу по переключению режима записи, поскольку они делают предположение, что текст течёт слева направо и сверху вниз.

### Логические свойства и значения

Логические свойства и значения не делают предположения о направлении текста. Именно поэтому в Grid Layout мы используем ключевое слово `start` при выравнивании чего-либо с началом контейнера. Для меня, работая на английском языке, `start` может быть слева, но это не обязательно и слово `start` не имеет физического местоположения.

## Block и Inline

Как только мы начнём заниматься логическими, а не физическими свойствами, мы перестаём видеть мир как слева направо, так и сверху вниз. Нам нужна новая контрольная точка и именно здесь понимание использования _блока_ и _встроенных_ осей, которые мы встретили ранее в руководстве по выравниванию, становится очень полезным. Если вы можете начать видеть макет с точки зрения блочного и встроенного, то, как все работает в сетке, становится намного больше смысла.

![На изображении показано направление блочной и строчной осей по-умолчанию.](8-horizontal-tb.png)

## Режимы записи CSS

Я собираюсь представить здесь ещё одну спецификацию, которую я буду использовать в своих примерах: спецификация CSS Writing Modes. Эта спецификация подробно описывает, как мы можем использовать эти разные режимы записи в CSS, а не только для поддержки языков, которые имеют другой режим записи на английском языке, но также и для творческих целей. Я буду использовать свойство {{cssxref ("write-mode")}}, чтобы внести изменения в режим записи, применяемый к нашей сетке, чтобы продемонстрировать, как работают логические значения. Однако, если вы хотите, чтобы вы меняли в режиме записи, я бы рекомендовал вам прочитать Jen Simmons отличную статью о [CSS Writing Modes](https://24ways.org/2016/css-writing-modes/). Это более подробно описано в этой спецификации, чем мы коснёмся здесь.

### writing-mode

Режимы записи - это больше, чем текст слева направо и справа налево, а свойство `writing-mode` помогает отображать текст в других направлениях. Свойство {{cssxref ("write-mode")}} может иметь значения:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

Значение `horizontal-tb` является значением по умолчанию для текста в Интернете. Это направление, в котором вы читаете это руководство. Другие свойства изменят способ передачи текста в нашем документе, соответствующий различным режимам записи, найденным по всему миру. Опять же, для получения полной информации об этом см. [Jen's article](https://24ways.org/2016/css-writing-modes/). В качестве простого примера у меня есть два параграфа ниже. Первый использует по умолчанию `horizontal-tb`, а второй использует `vertical-rl`. В тексте режима все ещё выполняется влево-вправо, однако направление текста вертикально - встроенный текст теперь проходит вниз по странице, сверху вниз.

```css hidden
.wrapper > p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
  max-width: 300px;
}
```

```html
<div class="wrapper">
  <p style="writing-mode: horizontal-tb">
    I have writing mode set to the default <code>horizontal-tb</code>
  </p>
  <p style="writing-mode: vertical-rl">
    I have writing mode set to <code>vertical-rl</code>
  </p>
</div>
```

{{ EmbedLiveSample('writing_1', '500', '420') }}

## Writing modes в grid layouts

Если мы сейчас рассмотрим пример компоновки сетки, мы увидим, как изменение режима записи означает изменение нашей идеи о том, где находятся Block и Inline Axis.

В моем следующем примере сетка имеет три столбца и две строки. Это означает, что на оси блока есть три дорожки. В режиме записи по умолчанию сетка автоматически помещает элементы, начинающиеся в верхнем левом углу, перемещаясь вправо, заполняя три ячейки на встроенной оси. Затем он переходит на следующую строку, создавая новый дорожку Row и заполняя больше элементов:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
</div>
```

{{ EmbedLiveSample('writing_2', '500', '330') }}

Если мы добавим `writing-mode: vertical-lr` в контейнер сетки, мы увидим, что блок и встроенная ось теперь работают в другом направлении. Ось блока или столбца теперь проходит через страницу слева направо, Inline запускается вниз по странице, создавая строки сверху вниз.

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
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
</div>
```

{{ EmbedLiveSample('writing_3', '500', '330') }}

![На изображении показано направление блочной и строчной осей при writing-mode: vertical-lr](8-vertical-lr.png)

## Логические значения для выравнивания

Когда блок и встроенная ось могут изменять направление, логические значения свойств выравнивания начинают иметь больше смысла.

В следующем примере я использую выравнивание для выравнивания элементов внутри сетки, которая настроена на `writing-mode: vertical-lr`. `start` и `end` свойства работают точно так же, как в режиме записи по умолчанию, и остаются логичными в том смысле, что использование левого и правого, верхнего и нижнего уровней для выравнивания элементов не будет выполнено. Это происходит, когда мы перевернули сетку сбоку, например:

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
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 10px;
}

.item1 {
  grid-column: 1 / 4;
  align-self: start;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: start;
}

.item3 {
  grid-column: 3;
  grid-row: 2 / 4;
  align-self: end;
  justify-self: end;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('writing_4', '500', '330') }}

Если вы хотите посмотреть, как они работают, как справа, так и сверху вниз, переключите `vertical-lr` на `vertical-rl,` который является вертикальным режимом записи, работающим справа налево.

## Auto-placement and Writing Modes

В примере, который уже показан, вы можете видеть, как режим записи меняет направление, в котором элементы помещаются в сетку. Элементы по умолчанию помещают себя вдоль оси Inline, а затем переходят в новую строку. Однако эта линейная ось может не всегда выполняться слева направо.

## Линейное размещение и режимы записи

Главное, что следует помнить при размещении элементов по номеру строки, является то, что строка 1 является стартовой линией, независимо от того, в каком режиме записи вы находитесь. Строка -1 - это конечная строка, независимо от того, в каком режиме записи вы находитесь.

В следующем примере у меня есть сетка, которая находится в направлении по умолчанию `ltr`. Я разместил три элемента, используя линейное размещение.

- Item 1 starts at column line 1, охватывающей один трек.
- Item 2 starts at column line -1, охватывая -3.
- Item 3 starts at column line 1, охватывая строку столбца 3.

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
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('writing_5', '500', '330') }}

Если теперь добавить свойство {{cssxref ("direction")}} со значением `rtl` в контейнер сетки, строка 1 станет правой частью сетки, а строка -1 - слева.

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
  direction: rtl;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>
```

{{ EmbedLiveSample('writing_6', '500', '330') }}

То, что это демонстрирует, заключается в том, что если вы переключаете направление текста на целые страницы или на части страниц и используете строки: вы можете назвать свои строки, если вы не хотите, чтобы макет полностью переключал направление , для некоторых вещей, например, когда сетка содержит текстовое содержимое, это переключение может быть именно тем, что вы хотите. Для других целей это не так.

### Странный порядок значений в свойстве grid-area

Вы можете использовать свойство {{cssxref ("grid-area")}}, чтобы указать все четыре строки области сетки как одно значение. Когда люди впервые сталкиваются с этим, они часто удивляются тому, что значения не следуют тому же порядку, что и сокращённое поле, которое работает по часовой стрелке: сверху, справа, внизу, слева.

Порядок значений `grid-area`:

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

Что для английского языка, слева направо означает, что заказ:

- `top`
- `left`
- `bottom`
- `right`

Это против часовой стрелки! Итак, обратное тому, что мы делаем для полей и заполнения. Как только вы поймёте, что `grid-area` видит мир как "block и inline", вы можете помнить, что мы устанавливаем два запуска, а затем два конца. Когда вы знаете, это становится намного логичнее!

## Смешанные режимы записи и макет сетки

В дополнение к отображению документов, используя правильный режим записи для языка, режимы записи могут быть использованы творчески в документах, которые в противном случае будут `ltr`. В следующем примере у меня есть макет сетки с набором ссылок вниз с одной стороны. Я использовал режимы записи, чтобы включить их на стороне в треке столбца:

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em Helvetica,
    Arial,
    sans-serif;
}
.wrapper nav {
  writing-mode: vertical-lr;
}
.wrapper ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
.wrapper a {
  text-decoration: none;
}
```

```html
<div class="wrapper">
  <div class="content">
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>

    <p>
      Nori grape silver beet broccoli kombu beet greens fava bean potato
      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
      turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter
      purslane fennel azuki bean earthnut pea sierra leone bologi leek soko
      chicory celtuce parsley jícama salsify.
    </p>
  </div>
  <nav>
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
      <li><a href="">Link 3</a></li>
    </ul>
  </nav>
</div>
```

{{ EmbedLiveSample('writing_7', '500', '330') }}

## Физические значения и grid layout

Мы часто сталкиваемся с физическими свойствами при создании веб-сайтов и в то время как свойства и значения размещения и выравнивания сетки соответствуют режимам записи, есть вещи, которые вы можете сделать с Grid, которые заставляют вас использовать физические свойства и значения. В руководстве по [выравниванию ячеек и сеткам](/ru/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) я продемонстрировал, как автоматические поля работают в области сетки. Использование автоматической маржи, чтобы оттолкнуть один элемент от других, является общим трюком flexbox, однако это также связывает макет с физическим пространством.

Если вы используете абсолютное позиционирование в области сетки, то вы снова будете использовать физические смещения, чтобы нажимать элемент вокруг области сетки. Главное, что нужно знать, - это напряжение между физическими и логическими свойствами и ценностями. Например, имейте в виду, что вам может потребоваться внести изменения в ваш CSS, чтобы справиться с переходом от `ltr` до `rtl`.

### Логические свойства для всего!

Наши новые методы компоновки дают нам возможность использовать эти логические значения для размещения элементов, однако, как только мы начнём объединять их с физическими свойствами, используемыми для полей и отступов, нам нужно помнить, что эти физические свойства не изменятся в соответствии с режимом записи.

[Спецификация логических свойств CSS](https://drafts.csswg.org/css-logical/) имеет целью изменить это и в будущем мы сможем использовать [логические эквиваленты](/ru/docs/Web/CSS/CSS_Logical_Properties) для свойств, такие как {{cssxref ("margin-left")}} и {{cssxref ("margin-right") }}, в нашем CSS. Firefox уже реализовал их, поэтому вы можете попробовать их прямо сейчас в Firefox. Я знаю в будущем, как только эти корабли повсюду, ваши знания «Блокировать и встроить» с помощью Grid означают, что вы точно знаете, как их использовать.
