---
title: padding-left
slug: Web/CSS/Reference/Properties/padding-left
original_slug: Web/CSS/padding-left
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`padding-left`** определяет ширину левого внутреннего отступа элемента.

{{InteractiveExample("CSS Demo: padding-left")}}

```css interactive-example-choice
padding-left: 1.5em;
```

```css interactive-example-choice
padding-left: 10%;
```

```css interactive-example-choice
padding-left: 20px;
```

```css interactive-example-choice
padding-left: 1ch;
```

```css interactive-example-choice
padding-left: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

Внутренний отступ элемента (англ. "padding") - это пространство между его содержимым и его границей.

> [!NOTE]
> Свойство {{cssxref ("padding")}} можно использовать для установки внутренних отступов на всех четырёх сторонах элемента одним значением.

## Синтаксис

```css
/ * <length> значения * /
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/ * <percentage> значение * /
padding-left: 10%;

/ * Глобальные значения * /
padding-left: inherit;
padding-left: initial;
padding-left: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Фиксированный размер заполнения отступа. Не может быть отрицательным.
- {{cssxref("&lt;percentage&gt;")}}
  - : Размер заполнения зависит от ширины блока. Не может быть отрицательным.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

```css
.content {
  padding-left: 5%;
}
.sidebox {
  padding-left: 10px;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
