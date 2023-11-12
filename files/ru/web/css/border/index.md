---
title: border
slug: Web/CSS/border
---

{{CSSRef("CSS Borders")}}

Свойство [CSS](/ru/docs/CSS) **`border`** это [универсальное свойство](/ru/docs/Web/CSS/Shorthand_properties) для указания всех персональных свойств границ за раз: {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, и {{Cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/border.html")}}

Как и во всех универсальных свойствах, любое персональное значение, которое не указанно, устанавливается в начальное значение. Обратите внимание, `border` не может быть использован для указания пользовательского значения {{cssxref("border-image")}}, но вместо этого устанавливает его в начальное значение, т.е. `none`.

```css
border: 1px;
border: 2px dotted;
border: medium dashed green;
```

> **Примечание:** Рекомендуется использовать `border`, когда вы хотите установить все свойства границ одновременно. Тогда как универсальные свойства {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, и {{Cssxref("border-color")}} принимают до четырёх значений, позволяя установить различные значения для каждого ребра, `border` принимает единственное значение для каждого свойства. И этот стиль применяется для всех четырёх границ.

## Синтаксис

Свойство `border` указывается используя одно или более значений [`<br-width>`](#br-width), [`<br-style>`](#br-style), и [`<color>`](#color) указанных ниже.

### Значения

- `<br-width>`
  - : Толщина границ. По умолчанию `medium` если отсутствует. Больше информации {{Cssxref("border-width")}}.
- `<br-style>`
  - : Стиль линии границ. По умолчанию `none` если отсутствует. Больше информации {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Цвет границ. По умолчанию принимает значение свойства элементов {{cssxref("color")}}. Больше информации {{Cssxref("border-color")}}.

### Обычный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<div class="fun-border">Look at my borders.</div>
<p>Вы можете редактировать CSS ниже для экспериментов со стилями границ!</p>
<style contenteditable>
  .fun-border {
    border: 2px solid red;
  }
</style>
```

### CSS

```css
style {
  display: block;
  border: 1px dashed black;
}
```

### Результат

{{EmbedLiveSample('Examples')}}

## Спецификация

{{Specifications}}

{{cssinfo}}

## Совместимость браузеров

{{Compat}}

## Также смотрите

- {{ Cssxref("border-radius") }}-related CSS properties: {{ Cssxref("border-top-left-radius") }}, {{ Cssxref("border-top-right-radius") }}, {{ Cssxref("border-bottom-right-radius") }}, {{ Cssxref("border-bottom-left-radius") }}
