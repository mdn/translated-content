---
title: Разметка и содержащий блок
slug: Web/CSS/Containing_block
---

{{cssref}}

На размер и позицию элемента часто влияет его **содержащий блок** (containing block). Чаще всего содержащим блоком является content область ([content area](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area)) ближайшего блочного ([block-level](/ru/docs/Web/HTML/Block-level_elements)) предка, но это не всегда так. В этой статье мы рассмотрим факторы, которые определяют содержащий блок элемента.

Когда пользовательский агент (такой как ваш браузер) делает разметку документа, он создаёт бокс (box) для каждого элемента. Каждый бокс разделяется на следующие области:

1. Content область или область контента (content area).
2. Padding область или область внутреннего поля (padding area).
3. Border область или область границы (border area).
4. Margin область или область внешнего поля (margin area).

![Diagram of the box model](box-model.png)

Многие разработчики верят, что содержащий блок элемента - это всегда content область его родителя, но это не всегда является правдой. Давайте исследуем факторы, которые определяют, что представляет собой содержащий элемент блок.

## Эффекты содержащего блока

Перед изучением того, что определяет содержащий блок элемента, будет полезно сначала узнать, почему этот блок так важен.

На размер и положение элемента часто влияет его содержащий блок.

Значения заданные в процентах для свойств {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, и свойства задающие смещение абсолютно позиционированного элемента (т.е., такого, у которого свойство {{cssxref("position")}} имеет значение `absolute` или `fixed`) рассчитываются исходя из его содержащего блока.

## Определение содержащего блока

Определение содержащего блока элемента полностью зависит от значения свойства {{cssxref("position")}}:

1. Если свойство `position` имеет значение **`static`**, **`relative`**, или **`sticky`**, то содержащий блок задаётся краем _content бокса_ ближайшего предка, который:

   - либо является **блочным контейнером** (block container), например, если его свойство display имеет значение inline-block, block или list-item.
   - либо **устанавливает контекст форматирования** (formatting context), например, контейнер таблицы (table container), flex-контейнер (flex container), grid-контейнер (grid container) или блочный контейнер (block container).

2. Если свойство **`position`** имеет значение **`absolute`**, то содержащий блок задаётся краем _padding бокса_ ближайшего предка, у которого свойство **`position`** имеет значение отличное от `static` (`fixed`, `absolute`, `relative` или `sticky`).
3. Если свойство **`position`** имеет значение **`fixed`**, то содержащий блок задаётся:

   - в случае непрерывного медиа (continuous media) областью просмотра (вьюпорт - {{glossary("viewport")}});
   - в случае страничного медиа (paged media) областью страницы.

4. Если свойство **`position`** имеет значение **`absolute`** или **`fixed`**, то содержащий блок может также задаваться краем padding бокса ближайшего предка, у которого:

   1. Свойство {{cssxref("transform")}} или {{cssxref("perspective")}} имеет значение отличное от `none`.
   2. Свойство {{cssxref("will-change")}} имеет значение `transform` или `perspective`.
   3. Свойство {{cssxref("filter")}} имеет значение отличное от `none` или `will-change` value of `filter` (работает только в Firefox).
   4. Свойство {{cssxref("contain")}} имеет значение `paint` (например, `contain: paint;`).

> **Примечание:**Содержащий блок в котором находится корневой элемент ({{HTMLElement("html")}}) представляет собой прямоугольник, который называется **начальный содержащий блок**. Он имеет размеры области просмотра (вьюпорт - viewport) для непрерывного медиа (continuous media) или области страницы (page area) для страничного медиа (paged media).

## Calculating percentage values from the containing block

As noted above, when certain properties are given a percentage value, the computed value depends on the element's containing block. The properties that work this way are **box model properties** and **offset properties**:

1. The {{cssxref("height")}}, {{cssxref("top")}}, and {{cssxref("bottom")}} properties compute percentage values from the `height` of the containing block.
2. The {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, and {{cssxref("margin")}} properties compute percentage values from the `width` of the containing block.

## Some examples

The HTML code for all our examples is:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Only the CSS is altered in each instance below.

### Example 1

In this example, the paragraph is statically positioned, so its containing block is {{HTMLElement("section")}} because it's the nearest ancestor that is a block container.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  margin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_1','100%','300')}}

### Example 2

In this example, the paragraph's containing block is the {{HTMLElement("body")}} element, because `<section>` is not a block container (because of `display: inline`) and doesn't establish a formatting context.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%; /* == half the body's width */
  height: 200px; /* Note: a percentage would be 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Example_2','100%','300')}}

### Example 3

In this example, the paragraph's containing block is `<section>` because the latter's `position` is `absolute`. The paragraph's percentage values are affected by the `padding` of its containing block, though if the containing block's {{cssxref("box-sizing")}} value were `border-box` this would not be the case.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_3','100%','300')}}

### Example 4

In this example, the paragraph's `position` is `fixed`, so its containing block is the initial containing block (on screens, the viewport). Thus, the paragraph's dimensions change based on the size of the browser window.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%; /* == (50vw - (width of vertical scrollbar)) */
  height: 50%; /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%; /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%; /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
```

{{EmbedLiveSample('Example_4','100%','300')}}

### Example 5

In this example, the paragraph's `position` is `absolute`, so its containing block is `<section>`, which is the nearest ancestor with a {{cssxref("transform")}} property that isn't `none`.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  height: 25%; /* == 40px */
  margin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_5','100%','300')}}

## Смотрите также

- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/Syntax)
  - [@-правила](/ru/docs/Web/CSS/At-rule)
  - [комментарии](/ru/docs/Web/CSS/Comments)
  - [специфичность](/ru/docs/Web/CSS/Specificity)
  - [наследование](/ru/docs/Web/CSS/inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Web/CSS/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/Web/CSS/initial_value)
    - [вычисленные](/ru/docs/Web/CSS/computed_value)
    - [используемые](/ru/docs/Web/CSS/used_value)
    - [действительные](/ru/docs/Web/CSS/actual_value)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/Replaced_element)
- The {{cssxref("all")}} property resets all CSS declarations to a given known state
