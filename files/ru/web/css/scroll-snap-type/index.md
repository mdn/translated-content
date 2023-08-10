---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`scroll-snap-type`** определяет как строго прокрутка контейнера привязывается к точкам привязки.

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

Это свойство не уточняет какие именно анимации используются для привязки прокрутки, это остаётся за агентом пользователя.

```css
/* Ключевые слова */
scroll-snap-type: none;
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* Опционально mandatory | proximity*/
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* и т.д. */

/* Глобальные значения */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : Когда визуальный {{Glossary("viewport")}} этого контейнера прокручивается, точки прокрутки игнорируются.
- `x`
  - : Прокрутка контейнера привязывается только по горизонтальной оси.
- `y`
  - : Прокрутка контейнера привязывается только по вертикальной оси.
- `block`
  - : Прокрутка контейнера привязывается только по блоковой оси.
- `inline`
  - : Прокрутка контейнера привязывается только по строчной оси.
- `both`
  - : Прокрутка контейнера независимо привязывается только по обоим осям (потенциально может привязываться к разным элементам на разных осях).
- `mandatory`
  - : Визуальный viewport контейнера остаётся на точке привязки, если он в данный момент не прокручивается. То есть он привязывается к точке, когда прокручивание завершилось. Если контент добавлен, перемещён, удалён или если изменён его размер, прокрутка будет отрегулирована так, чтобы оставаться на этой же точке.
- `proximity`
  - : Визуальный viewport контейнера может оставаться на точке привязки, если он в данный момент не прокручивается, в зависимости от параметров пользовательского агента. Если контент добавлен, перемещён, удалён или если изменён его размер, прокрутка может быть отрегулирована так, чтобы оставаться на этой же точке.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div class="holster">
  <div class="container x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

### CSS

```css
/* setup */
html,
body,
.holster {
  height: 100%;
}
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}
/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container > div:nth-child(even) {
  background-color: #87ea87;
}

.container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

### Результат

{{EmbedLiveSample("Example", "100%", "1630")}}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
