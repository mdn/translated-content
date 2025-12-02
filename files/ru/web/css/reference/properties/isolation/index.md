---
title: isolation
slug: Web/CSS/Reference/Properties/isolation
original_slug: Web/CSS/isolation
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`isolation`** определяет должен ли элемент создавать новый [контекст наложения](/ru/docs/Web/CSS/CSS_positioned_layout/Stacking_context) {{glossary("stacking context")}}.

{{InteractiveExample("CSS Demo: isolation")}}

```css interactive-example-choice
isolation: auto;
```

```css interactive-example-choice
isolation: isolate;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="background-container">
    <div id="example-element">
      <img src="/shared-assets/images/examples/firefox-logo.svg" />
      <p><code>mix-blend-mode: multiply;</code></p>
    </div>
  </div>
</section>
```

```css interactive-example
.background-container {
  background-color: #f4f460;
  width: 250px;
}

#example-element {
  border: 1px solid black;
  margin: 2em;
}

#example-element * {
  mix-blend-mode: multiply;
  color: #8245a3;
}
```

Это свойство особенно полезно при использовании совместно с {{cssxref("background-blend-mode")}}.

## Синтаксис

```css
/* Ключевые слова */
isolation: auto;
isolation: isolate;

/* Глобальные значения */
isolation: inherit;
isolation: initial;
isolation: unset;
```

Свойство `isolation` указывается в качестве значения одного из нижеследующих ключевых слов.

### Значения

- `auto`
  - : Новый контекст наложения создаётся только в том случае, если это требуется для одного из свойств, применяемых к элементу.
- `isolate`
  - : Новый контекст наложения должен быть создан.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

```css
.a {
  background-color: rgb(0, 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
}
```

{{ EmbedLiveSample('Примеры', 230, 230) }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
