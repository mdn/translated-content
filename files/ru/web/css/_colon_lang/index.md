---
title: ":lang()"
slug: Web/CSS/:lang
---

{{CSSRef}}

[Псевдо-класс](/ru/docs/Web/CSS/Pseudo-classes) [CSS](/ru/docs/Web/CSS) **`:lang()`** выбирает элементы основываясь на языке, на котором они определены.

```css
/* Выбирает все <p>, что на английском (en) */
p:lang(en) {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
```

> **Примечание:** В HTML язык определяется комбинацией атрибута [`lang`](/ru/docs/Web/HTML/Global_attributes#lang), элемента {{HTMLElement("meta")}} и иногда информацией из протокола (такой, как заголовки HTTP ). Для других типов документов могут быть другие методы определения языка.

## Синтаксис

### Формальный синтаксис

{{csssyntax}}

### Параметр

- `<language-code>`
  - : {{cssxref("&lt;string&gt;")}}, представляющая язык, который вы хотите отобрать. Допустимые значения указаны в документации [HTML](/ru/docs/Web/HTML).

## Пример

In this example, the `:lang()` pseudo-class is used to match the parents of quote elements ({{htmlElement("q")}}) using [child combinators](/ru/docs/Web/CSS/Child_selectors). Note that this doesn't illustrate the only way to do this, and that the best method to use depends on the type of document. Also note that {{glossary("Unicode")}} values are used to specify some of the special quote characters.

### HTML

```html
<div lang="en">
  <q>This English quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="fr">
  <q>This French quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="de">
  <q>This German quote has a <q>nested</q> quote inside.</q>
</div>
```

### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039" "\203A";
}
```

### Результат

{{EmbedLiveSample('Пример', 350)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Также смотрите

- Language-related pseudo-classes: {{cssxref(":lang")}}, {{cssxref(":dir")}}
- HTML [`lang`](/ru/docs/Web/HTML/Global_attributes#lang) attribute
- [BCP 47 - Tags for Identifying Languages](https://tools.ietf.org/html/bcp47)
