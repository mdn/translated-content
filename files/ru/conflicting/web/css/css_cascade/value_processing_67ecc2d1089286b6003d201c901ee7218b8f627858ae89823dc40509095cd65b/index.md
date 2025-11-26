---
title: Используемое значение
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b
original_slug: Web/CSS/CSS_cascade/used_value
---

{{cssref}}**Используемое значение** - [CSS](/ru/docs/Web/CSS) свойство, которое используется, когда все вычисления уже выполнены, смотрите [вычисленное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d).

После того как {{glossary("user agent")}} закончил свои расчёты каждое свойство CSS имеет своё значение. Используемые значения (например, {{cssxref("width")}}, {{cssxref("line-height")}}) в пикселях. Используемые значения сокращённых свойств (например, {{cssxref("background")}}) согласуются с теми из свойств компонентов (например, {{cssxref("background-color")}} или {{cssxref("background-size")}}) и с {{cssxref("position")}} и {{cssxref("float")}}.

> [!NOTE]
> {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API возвращает [решённое значение](/ru/docs/Web), которое может быть [численным значением](/ru/docs/Web) или [используемым значением](/ru/docs/Web), в зависимости от свойства.

## Пример

Данный пример показывает вычисление и отображение значения `width` трёх элементов (обновление при изменении размера):

### HTML

```html
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  var div = document.querySelector(`#${id}`);
  var par = div.querySelector(".show-used-width");
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### Результат

{{ EmbedLiveSample('Пример', '80%', 372) }}

## Difference from computed value

CSS 2.0 defined only _computed value_ as the last step in a property's calculation. Then, CSS 2.1 introduced the distinct definition of used value. An element could then explicitly inherit a width/height of a parent, whose computed value is a percentage. For CSS properties that don't depend on layout (e.g., `display`, `font-size`, or `line-height`), the computed values and used values are the same. The following are the CSS 2.1 properties that do depend on layout, so they have a different computed value and used value: (taken from [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q36)):

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## Спецификации

{{Specifications}}

## Смотреть так же

- {{domxref("window.getComputedStyle")}}
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/CSS_syntax/Syntax)
  - [@-правила](/ru/docs/Web/CSS/CSS_syntax/At-rules)
  - [комментарии](/ru/docs/Web/CSS/CSS_syntax/Comments)
  - [специфичность](/ru/docs/Web/CSS/CSS_cascade/Specificity)
  - [наследование](/ru/docs/Web/CSS/CSS_cascade/Inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Glossary/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [вычисленные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/ru/docs/Web/CSS/CSS_cascade/Value_processing)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/CSS_images/Replaced_element_properties)
