---
title: orphans
slug: Web/CSS/orphans
---

{{CSSRef}}

Свойство [CSS](/ru/docs/CSS) `orphans` устанавливает _минимальное_ число строк в блочном контейнере, которое должно быть показано _внизу_ [страницы](/ru/docs/Web/CSS/Paged_Media), региона или [столбца](/ru/docs/Web/CSS/CSS_Columns).

```css
/* <integer> значения */
orphans: 2;
orphans: 3;

/* Глобальные значения */
orphans: inherit;
orphans: initial;
orphans: unset;
```

> **Примечание:** В типографии, _orphan_ это первая линия абзаца, которая отображается внизу страницы. (Абзац продолжается на следующей странице.)

{{cssinfo}}

## Синтаксис

### Значения

- {{cssxref("&lt;integer&gt;")}}
  - : Минимальное число строк, которое можно оставить внизу фрагмента перед разрывом фрагмента. Значение должно быть положительным.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how widows work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
```

### CSS

```css
div {
  background-color: #8cffa0;
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

```css

```

### Результат

{{EmbedLiveSample("Пример", 380, 150)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("widows")}}
- [Paged media](/ru/docs/Web/CSS/Paged_Media)
