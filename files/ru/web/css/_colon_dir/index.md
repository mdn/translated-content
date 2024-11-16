---
title: ":dir()"
slug: Web/CSS/:dir
---

{{CSSRef}}{{SeeCompatTable}}

**`:dir()`** — это [псевдокласс](/ru/docs/Web/CSS/Pseudo-classes) [CSS](/ru/docs/Web/CSS), который выбирает элементы на основе направления текста в них.

```css
/* Выбирает все элементы с текстом справа-налево */
:dir(rtl) {
  background-color: red;
}
```

`:dir()` учитывает только _семантическое_ направление, т.е. заданное в самом документе. Он не учитывает _стилизованное_ направление, т.е. заданное CSS-правилами, например {{cssxref("direction")}}.

> [!NOTE]
> Помните о том, что псевдокласс `:dir()` **не эквивалентен** [выбору по атрибуту](/ru/docs/Web/CSS/Attribute_selectors) `[dir=…]`. Последний применяется только к тем элементам HTML, у которых есть атрибут [`dir`](/ru/docs/Web/HTML/Global_attributes#dir), игнорируя те, у которых он не задан — даже если они унаследовали его значение. (Похожим образом `[dir=rtl]` и `[dir=ltr]` не будут включать `auto`.) `:dir()`, же, напротив, соответствует значению вычисленному {{glossary("user agent")}}, даже унаследованному.

> [!NOTE]
> В HTML, направление задаётся атрибутом [`dir`](/ru/docs/Web/HTML/Global_attributes#dir). В других форматах могут использоваться иные методы.

## Синтаксис

`:dir()` требует одного параметра, представляющего желаемое направление.

### Parameters

- `ltr`
  - : Выбирает элементы с направлением текста слева-направо.
- `rtl`
  - : Выбирает элементы с направлением текста справа-налево.

### Formal syntax

{{csssyntax}}

## Пример

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### Result

{{ EmbedLiveSample('Пример') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Языково-специфичные селекторы CSS: {{cssxref(":lang")}}, {{cssxref(":dir")}}
