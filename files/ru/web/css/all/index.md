---
title: all
slug: Web/CSS/all
---

{{CSSRef}}

## Описание

Сокращённое свойство CSS **`all`** сбрасывает все свойства, кроме {{cssxref("unicode-bidi")}} и {{cssxref("direction")}}, до их начального или унаследованного значения.

{{cssinfo}}

## Синтаксис

```css
all: initial;
all: inherit;
all: unset;

/* CSS Cascading and Inheritance Level 4 */
all: revert;
```

### Значения

- `initial`
  - : Это ключевое слово указывает на изменение всех свойств, применяемых к элементу или родительскому элементу. Значения {{cssxref("unicode-bidi")}} и {{cssxref("direction")}} не затрагиваются.
- `inherit`
  - : Это ключевое слово указывает на изменение всех свойств, применяемых к элементу или родительскому элементу, на значение их родителя. Значения {{cssxref("unicode-bidi")}} и {{cssxref("direction")}} не затрагиваются.
- `unset`
  - : Это ключевое слово указывает на изменение всех свойств, применимых к элементу или родительскому элементу, на значение их родителя, если они наследуются или на их начальное значение, если нет. Значения {{cssxref("unicode-bidi")}} и {{cssxref("direction")}} не затрагиваются.
- `revert`
  - : Если каскадным значением свойства является ключевое слово revert, поведение зависит от источника, которому принадлежит объявление:
    - user-agent origin
      - : Эквивалент unset.
    - user origin
      - : Откатывает каскад до уровня пользовательского агента, так что указанное значение вычисляется так, как если бы для этого свойства не были заданы правила уровня автора или уровня пользователя.
    - author origin
      - : Откатывает каскад до уровня пользователя, так что указанное значение вычисляется так, как если бы для этого свойства не было задано никаких правил уровня автора. В целях возврата этот источник включает в себя источники переопределения и анимации.

### Формальный синтаксис

{{csssyntax}}

## Примеры

**HTML**

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

**CSS**

```css
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

Результат:

#### No `all` property

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("ex0", "200", "125")}}

{{HTMLElement("blockquote")}} использует стили браузера по умолчанию вместе с определённым фоном и цветом текста. Он также ведёт себя как _block_ элемент : текст, который следует за ним, находится под ним.

#### `all:unset`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: unset;
}
```

{{EmbedLiveSample("ex1", "200", "125")}}

{{HTMLElement("blockquote")}} не использует стили браузера по умолчанию: теперь это _inline_ элемент (начальное значение), его {{cssxref("background-color")}} является `transparent` (начальное значение), но его {{cssxref("font-size")}} по-прежнему `small` унаследованное значение) и его {{cssxref("color")}} является `blue` (унаследованное значение).

#### `all:initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: initial;
}
```

{{EmbedLiveSample("ex2", "200", "125")}}

{{HTMLElement("blockquote")}} не использует стили браузера по умолчанию: теперь это _inline_ элемент(начальное значение), его {{cssxref("background-color")}} является `transparent` (начальное значение), его {{cssxref("font-size")}} является `normal` (начальное значение) и его {{cssxref("color")}} является `black` (начальное значение).

#### `all:inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: inherit;
}
```

{{EmbedLiveSample("ex3", "200", "125")}}

{{HTMLElement("blockquote")}} не использует стили браузера по умолчанию: теперь это _block_ элемент (унаследованное значение от содержащего его {{HTMLElement("div")}}), его {{cssxref("background-color")}} является `transparent` (унаследованное значение), его {{cssxref("font-size")}} является `small` (унаследованное значение) и его {{cssxref("color")}} является `blue` (унаследованное значение).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

Значения свойств в масштабе CSS: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, и {{cssxref("revert")}}.
