---
title: Float
slug: Learn/CSS/CSS_layout/Floats
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

Первоначально используемое для "обтекания" картинок текстом, свойство {{cssxref("float")}} стало одним из наиболее часто используемых инструментов для создания макетов из нескольких столбцов на веб-страницах. С появлением flexbox и grid оно снова используется как задумывалось в начале, о чем подробнее в этой статье.

| Предварительные требования: | Базовое знакомство с HTML (изучите [Введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), а также идея о том как работает CSS (изучите [Введение в CSS](/ru/docs/Learn/CSS/Introduction_to_CSS).) |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:                     | Научиться как создавать обтекаемые свойства на веб-страницах и как использовать свойство clear и другие методы очистки обтекаемых элементов.                                                             |

## Общие сведения о float

Свойство {{cssxref("float")}} вводилось для того, чтобы разработчики могли включать изображение, с обтеканием текста вокруг него слева или справа, как это часто используется в газетах.

Но разработчики быстро осознали, что можно обтекать всё что угодно, не только изображения, поэтому использование float расширилось, например для вёрстки забавных эффектов таких как [drop-caps](https://css-tricks.com/snippets/css/drop-caps/) (буквица).

Floats очень часто использовались для создания макетов целых веб-страниц, отображающих несколько колонок информации, обтекаемых так, что колонки располагаются друг за другом (поведение по умолчанию предполагает, что колонки должны располагаются друг за другом, в том же порядке в котором они появляются в источнике). Доступны более новые, лучшие методы и поэтому использование floats для этих целей следует рассматривать как [устаревшей техникой](/ru/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods).

В этой статье мы сконцентрируемся только на надлежащем использовании floats.

## Простой пример float

Давайте выясним как использовать floats. Мы начнём с очень простого примера включающего обтекание элемента блоком текста. Вы можете следовать за нами создав новый `index.html` файл на вашем компьютере, заполнив его [простым шаблоном HTML](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html), и вставив код ниже в подходящее место. В конце раздела вы можете увидеть живой пример того, как должен выглядеть финальный код.

Во-первых, мы начнём с некоторого простого HTML — добавьте следующее в body вашего HTML, удалив всё что там было до этого:

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
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
```

А теперь примените следующий CSS для вашего HTML (используя элемент {{htmlelement("style")}} или {{htmlelement("link")}} на отдельный файл `.css` — на ваше усмотрение):

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

Если вы сохраните и обновите сейчас, то вы увидите нечто похожее на то, чего ожидаете — блок располагается выше текста, при нормальном потоке. Для того чтобы текст обтекал его вокруг добавьте два свойства к правилу `.box`:

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

Если вы сохраните и обновите сейчас, то вы увидите нечто похожее на следующее:

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_1', '100%', 500) }}

Итак, давайте подумаем над тем, как работает float — элемент с установленным float (элемент {{htmlelement("div")}} в данном случае) изымается из нормального потока документа и крепится с левой стороны от родительского контейнера (элемент {{htmlelement("body")}} в данном случае). Любой контент, который следует ниже за обтекаемым элементом в макете при нормальном потоке теперь будет оборачивать его вокруг, заполняя пространство справа от него начиная на той же высоте что и вершина обтекаемого элемента. Там он остановится.

Обтекание контента справа имеет точно такой же эффект, но наоборот — обтекаемый элемент будет прилипать справа, а контент будет оборачивать вокруг слева. Попробуйте изменить значение на `right` и замените {{cssxref("margin-right")}} на {{cssxref("margin-left")}} в последнем наборе правил, чтобы увидеть каков результат.

В то время как мы можем добавлять margin к обтекаемому элементу чтобы оттолкнуть текст от него, мы не можем добавлять margin к тексту чтобы отодвинуть его от обтекаемого элемента. так происходит потому, что обтекаемые элементы изъяты из нормального потока, а следующие за ним блоки фактически располагаются за обтекаемым элементом. Вы можете продемонстрировать это, внеся некоторые изменения в ваш пример.

Добавьте класс `special` к первому параграфу текста, тот который непосредственно следует за обтекаемым блоком, далее добавьте следующие правила в ваш CSS. Они дадут нашему параграфу цвет фона.

```css
.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

Чтобы эффект был лучше виден, измените `margin-right` обтекаемого объекта на `margin`, так вы получите пространство вокруг него. Вы сможете увидеть фон параграфа располагающегося прям под обтекаемым блоком, как на примере ниже.

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

{{ EmbedLiveSample('Float_2', '100%', 500) }}

[Линейные блоки](/ru/docs/Web/CSS/Visual_formatting_model#Line_boxes) нашего последующего элемента были сокращены так что текст располагается вокруг обтекаемого объекта, но из-за того, что обтекаемый объект удаляется из нормального потока блок вокруг параграфа все ещё остаётся в полную ширину.

## Очистка обтекания

Мы увидели, что обтекаемый объект удалён из нормального потока и что другие элементы будут располагаться за ним, поэтому если мы хотим остановить перемещение следующего элемента нам необходимо очистить его; что достигается при помощи свойства {{cssxref("clear")}}.

Добавьте класс `cleared` ко второму параграфу после обтекаемого элемента в ваш HTML из предыдущего примера. Далее добавьте следующий CSS:

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.cleared {
  clear: left;
}
```

{{ EmbedLiveSample('Float_3', '100%', 600) }}

Вы должны увидеть, что следующий параграф очищает float элемента и больше не появляется рядом с ним. Свойство `clear` принимает следующие значения:

- `left`: очищает объекты, обтекаемые слева.
- `right`: очищает объекты, обтекаемые справа.
- `both`: очищает любые обтекаемые объекты, слева или справа.

## Очистка блоков обёрнутых вокруг обтекаемых элементов

Вы теперь знаете, как очистить что-либо следующее за обтекаемым элементом, но давайте посмотрим, что происходит если у вас имеется высокий обтекаемый объект и короткий параграф с блоком, оборачивающим оба элемента. Измените ваш документ так чтоб первый параграф и наш обтекаемый блок были обёрнуты в {{htmlelement("div")}} с классом `wrapper`.

```html
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
```

В вашем CSS добавьте следующее правило для класса `.wrapper` и обновите страницу:

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

В добавок удалите класс `.cleared`:

```css
.cleared {
  clear: left;
}
```

Вы увидите, что, точно так же как и в примере где мы устанавливаем цвет фона для параграфа, цвет фона располагается за обтекаемым объектом.

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_4', '100%', 600) }}

И ещё раз, так происходит потому, что обтекаемый объект изымается из нормального потока. Очистка следующего элемента не помогает с этой проблемой очистки блока, где вы хотите, чтобы нижняя часть блока обернула обтекаемый объект и оборачивающий контент даже если контент короче. Существует три потенциальных способа разобраться с этой проблемой, два из которых работают во всех браузерах, но при этом немного хитры и третий новый способ, который правильно справляется с этой ситуацией.

### Clearfix hack

Традиционно эта ситуация решалась с помощью так называемого «clearfix hack». Это включает вставку некоторого сгенерированного контента после блока, содержащего обтекаемый объект и обёрточный контент, а также настройки для очистки обоих.

Добавьте следующий CSS в наш пример:

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

Теперь перезагрузите страницу и блок должен быть очищенным. По сути, это то же самое, как если бы вы добавили HTML-элемент такой как `<div>` ниже объекта и установили `clear: both`.

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

{{ EmbedLiveSample('Float_5', '100%', 600) }}

### Использование overflow

Альтернативный метод — это задать свойство {{cssxref("overflow")}} для обёртки (wrapper) на значение отличное от `visible`.

Удалите clearfix CSS который вы добавляли в предыдущей секции и вместо него добавьте `overflow: auto` к правилу для обёртки. Блок снова должен быть очищен.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_6', '100%', 600) }}

Этот пример работает путём создания того, что известно как **Блочный Контекст Форматирования (block formatting context** (BFC)**).** Это как мини макет внутри вашей страницы, внутри которого содержится все, следовательно наш обтекаемый элемент находится внутри BFC и фон располагается за обоими элементами. Обычно это будет срабатывать, однако, в определённых случаях вы можете обнаружить нежелательную полосу прокрутки или обрезанные тени из-за непреднамеренный последствий использования overflow.

### display: flow-root

Современный способ решения этой проблемы — это использование значения `flow-root` свойства `display`. Он существует только для создания BFC без использования хака — не будет возникать непреднамеренных последствий, когда вы используете его. Удалите `overflow: auto` из вашего правила `.wrapper` и добавьте `display: flow-root`. Если предположить, что у вас [поддерживающий браузер](/ru/docs/Web/CSS/display#Browser_compatibility), блок будет очищаться.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_7', '100%', 600) }}

## Проверьте свои навыки!

Вы достигли конца этой статьи, но помните ли вы самую важную информацию? Вы можете найти дополнительные тесты, чтобы убедиться, что вы усвоили эту информацию, прежде чем двигаться дальше — см. [Проверка ваших навыков: Floats](/ru/docs/Learn/CSS/CSS_layout/Floats_skills).

## Заключение

Теперь вы знаете все, что нужно знать о float в современной веб-разработке. См. Статью об [устаревших методах макета](/ru/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) устаревших методах макета для получения информации о том, как они использовались раньше, что может быть полезно, если вы работаете над старыми проектами.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

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
- [Устаревшие методы макета](/ru/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Поддержка старых браузеров](/ru/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Базовая оценка понимания макета](/ru/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
