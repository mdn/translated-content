---
title: column-rule
slug: Web/CSS/column-rule
---

{{CSSRef}}

[Краткая форма записи](/ru/docs/Web/CSS/Shorthand_properties) [CSS](/ru/docs/Web/CSS) свойств **`column-rule`** устанавливает ширину, стиль и цвет линии, находящейся между колонками в мультиколоночной вёрстке.

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

Эта краткая форма записи задаёт индивидуальные `column-rule-*` свойства, обычно задаваемые: {{Cssxref("column-rule-width")}}, {{Cssxref("column-rule-style")}}, и {{Cssxref("column-rule-color")}}.

> **Примечание:** Как и с другими краткими формами записи, любые индивидуальные значения, не указанные явно принимают значение по умолчанию (возможно переопределение значений, заданных ранее с помощью свойств, не являющихся краткими формами).

## Синтаксис

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* глобальные значения */
column-rule: inherit;
column-rule: initial;
column-rule: unset;
```

Свойство `column-rule` указывается в виде одного, двух или трёх значений, перечисленных ниже, в любом порядке.

### Значения

- `<'column-rule-width'>`
  - : {{cssxref("&lt;length&gt;")}} или одно из трёх ключевых свойств, `thin`, `medium`, или `thick`. См. подробно - {{cssxref("border-width")}}.
- `<'column-rule-style'>`
  - : См. подробно {{cssxref("border-style")}} .
- `<'column-rule-color'>`
  - : Значение {{cssxref("&lt;color&gt;")}} .

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Example 1

```css
/* Аналогично "medium dotted currentColor" */
p.foo {
  column-rule: dotted;
}

/* Аналогично "medium solid blue" */
p.bar {
  column-rule: solid blue;
}

/* Аналогично "8px solid currentColor" */
p.baz {
  column-rule: solid 8px;
}

p.abc {
  column-rule: thick inset blue;
}
```

### Example 2

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns. Take note of how the
  `column-rule` property is used to adjust the style, width, and color of the
  rule that appears between the columns.
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ff7;
  column-count: 3;
  column-rule: inset 2px #33f;
}
```

#### Результат

{{EmbedLiveSample('Example_2')}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}
