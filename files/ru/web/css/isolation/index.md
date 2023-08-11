---
title: isolation
slug: Web/CSS/isolation
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`isolation`** определяет должен ли элемент создавать новый [контекст наложения](/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) {{glossary("stacking context")}}.

{{EmbedInteractiveExample("pages/css/isolation.html")}}

Это свойство особенно полезно при использовании совместно с {{cssxref("background-blend-mode")}}.

## Синтаксис

```css
/* Значения ключевого слова */
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

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
