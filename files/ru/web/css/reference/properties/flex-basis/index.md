---
title: flex-basis
slug: Web/CSS/Reference/Properties/flex-basis
original_slug: Web/CSS/flex-basis
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`flex-basis`** задаёт базовый размер флекс элемента по **основной оси**. Это свойство определяет размер контент-бокса, если не задано иначе через {{Cssxref("box-sizing")}}.

{{InteractiveExample("CSS Demo: flex-basis")}}

```css interactive-example-choice
flex-basis: auto;
```

```css interactive-example-choice
flex-basis: 0;
```

```css interactive-example-choice
flex-basis: 200px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```

> [!NOTE]
> В случае, если для элемента одновременно заданы `flex-basis` (отличное от `auto`) и `width` ( или `height` в случае `flex-direction: column`), `flex-basis` имеет приоритет.

{{cssinfo}}

## Синтаксис

```css
/* Устанавливает <'ширину'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Автоматически изменяет размер на основе содержимого элемента */
flex-basis: content;

/* Глобальные значения */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

Свойство `flex-basis` задаётся через ключевое слово [`content`](#content) или через [`<'width'>`](#width).

### Значения

- `<'ширина'>`
  - : An absolute {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}} родительского flex контейнера главное size свойство, или ключевое слово `auto`. Негативные значения не допустимы.
- `content`
  - : Автоматический задаёт размер на основе содержимого элемента flex.

    > [!NOTE]
    > Это значение отсутствовало в первоначальном релизе Flexible Box Layout, и, следовательно, некоторые предыдущие релизы не будут поддерживать его. Аналогичный эффект можно получить, используя `auto` вместе с основным размером ([width](https://drafts.csswg.org/css2/visudet.html#propdef-width) или [height](https://drafts.csswg.org/css2/visudet.html#propdef-height)) `auto`.

    > [!NOTE]
    >
    > - Первоначально, `flex-basis:auto` означает "смотреть на значения `width` или `height`".
    > - Затем `flex-basis:auto` был изменён на автоматический размер, а "main-size" было введено как ключевое слово, означающее "смотреть на значения `width` или `height`". Это было реализован в [баге 1032922](https://bugzilla.mozilla.org/show_bug.cgi?id=1032922).
    > - Затем в [баге 1093316](https://bugzilla.mozilla.org/show_bug.cgi?id=1093316) это было возвращено обратно, поэтому `auto` снова означает "смотреть на значения `width` или `height`"; а новое ключевое слово `content` было введено для автоматического размера. ([Firefox bug 1105111](https://bugzil.la/1105111) охватывает добавление этого ключевого слова).

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5:after {
  content: "content";
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: "fill";
}
```

### Results

{{ EmbedLiveSample('Example', '100%', '360') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/ru/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
- {{cssxref("width")}}
