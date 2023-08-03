---
title: Макет с несколькими столбцами
slug: Learn/CSS/CSS_layout/Multiple-column_Layout
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}

Спецификация макет с несколькими столбцами даёт вам метод вёрстки контента по столбцам, точно также как вы можете видеть в газете. Эта статья объясняет, как использовать эту функцию.

| Необходимые знания: | Основы HTML (изучите [Введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), идея о том как работает CSS (изучите [Введение в CSS](/ru/docs/Learn/CSS/Introduction_to_CSS).) |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Изучить как создавать макет с несколькими столбцами на веб-страницах, такой как вы можете найти в газете.                                                                          |

## Базовый пример

Сейчас мы будем изучать как использовать макет с несколькими столбцами, часто называемый _multicol._ Вы можете следовать за нами [скачав файл отправной точки multicol](https://github.com/mdn/learning-area/blob/master/css/css-layout/multicol/0-starting-point.html) и добавлять CSS в соответствующие места. В конце раздела вы можете посмотреть живой пример того, как конечный код должен выглядеть.

Наша отправная точка содержит немного очень простого HTML; обёртка с классом `container` внутри которого имеется заголовок и несколько параграфов.

{{htmlelement("div")}} с классом контейнер станет нашим multicol контейнером. Мы включаем multicol используя одно из двух свойств {{cssxref("column-count")}} или {{cssxref("column-width")}}. Какое значение вы дадите свойству `column-count` столько столбцов он и создаст, поэтому если вы добавите следующий CSS в ваши стили и перезагрузите страницу, то получите три столбца:

```css
.container {
  column-count: 3;
}
```

Колонки, которые вы создаёте имеют гибкую ширину — браузер решает какое пространство назначить каждому столбцу.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html
<div class="container">
  <h1>Simple multicol example</h1>

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

```css
.container {
  column-count: 3;
}
```

{{ EmbedLiveSample('Multicol_1', '100%', 400) }}

Измените ваш CSS чтобы использовать следующий `column-width`:

```css
.container {
  column-width: 200px;
}
```

Теперь браузер будет давать столько столбцов размером, который вы определили, сколько он сможет; любое оставшееся пространство далее делится между существующими столбцами. Это значит, что вы не получите точную ширину, которую вы задали, только если ваш контейнер не делится точно на эту ширину.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

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

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('Multicol_2', '100%', 400) }}

## Стилизация столбцов

Столбцы, созданные при помощи multicol не могут быть стилизованы по одному. Нет способа сделать один столбец больше, чем другие, или изменить фон или цвет текста одного столбца. У вас есть две возможности изменить способ отображения столбцов:

- Изменение размера отступов между столбцами используя {{cssxref("column-gap")}}.
- Добавление линейки между столбцами при помощи {{cssxref("column-rule")}}.

Используя ваш пример выше, измените размер отступа добавлением свойства `column-gap`:

```css
.container {
  column-width: 200px;
  column-gap: 20px;
}
```

Вы можете поиграть с разными значениями — свойство принимает любые единицы измерения длины. Теперь добавьте линейку между столбцами при помощи `column-rule`. Таким же способом как и свойство {{cssxref("border")}} с которым вы сталкивались в предыдущих уроках, `column-rule` — это короткая запись {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} и {{cssxref("column-rule-width")}} и принимает те же значения что и `border`.

```css
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}
```

Попробуйте добавить линейки других стилей и цветов.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

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

{{ EmbedLiveSample('Multicol_3', '100%', 400) }}

Следует обратить внимание на то, что линейка не занимает никакой ширины. Она располагается в промежутках, которые вы создали при помощи `column-gap`. Чтобы придать больше пространства по обе стороны от линейки, вам нужно увеличить размер `column-gap`.

## Свойств column-span

Вы можете заставить элемент растянуться через все столбцы. В этом случае контент разрывается, когда сталкивается со spanning элементом и продолжается ниже, создавая новый набор блоков столбцов. Чтобы растянуть элемент через все столбцы используйте свойство {{cssxref("column-span")}} установленное на значение `all`.

> **Примечание:** Обратите внимание что невозможно растянуть элемент через несколько столбцов. Это свойство может иметь либо значение `none` (по умолчанию) либо `all`.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}
h2 {
  column-span: all;
  background-color: rgb(79, 185, 227);
  color: white;
  padding: 0.5em;
}
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.

  <h2>Spanning subhead</h2>
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

{{ EmbedLiveSample('Multicol_Span', '100%', 400) }}

## Столбцы и фрагментация

Содержимое макета нескольких столбцов является фрагментированным. По сути, он ведёт себя так же, как контент в постраничных медиа — так же, как когда вы печатаете веб-страницы. Когда вы переводите ваш контент в multicol контейнер он фрагментируется на столбцы и контент разбивается чтобы позволить этому произойти.

Порой это разрывание происходит в местах, мешающих чтению. В живом примере ниже, я использовал multicol чтобы разместить несколько блоков, каждый из которых имеет заголовок и немного текста внутри. Заголовок отделяется от текста, если столбцы разделяются между ними.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html
<div class="container">
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('Multicol_4', '100%', 600) }}

Для того чтобы управлять этим поведением мы можем использовать свойства из спецификации [CSS Фрагментации](/ru/docs/Web/CSS/CSS_Fragmentation). Эта спецификация даёт нам свойства для управления разрывами контента в multicol и постраничных медиа. Например, добавьте свойство {{cssxref("break-inside")}} со значением `avoid` к правилам `.card`. Это контейнер заголовка и текста и поэтому мы не хотим фрагментировать этот блок.

В настоящее время также стоит добавлять старое свойство `page-break-inside: avoid` для лучшей поддержки старых браузеров.

```css
.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

Перезагрузите страницу и ваши блоки должны остаться в целости.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('Multicol_5', '100%', 600) }}

## Проверь свои навыки!

Вы достигли конца этой статьи, но помните ли вы самую важную информацию? Вы можете найти дальнейшие тесты для проверки того, что вы усвоили эту информацию прежде чем, отправитесь дальше — см. [Поверьте свои навыки: Макет с несколькими столбцами](/ru/docs/Learn/CSS/CSS_layout/Multicol_skills).

## Заключение

Вы теперь знаете, как использовать базовые функции макета с несколькими столбцами, ещё один инструмент в вашем распоряжении при выборе метода макета для дизайна который вы строите.

## Смотрите также

- [CSS Фрагментация](/ru/docs/Web/CSS/CSS_Fragmentation)
- [Применение макета с несколькими столбцами](/ru/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}

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
