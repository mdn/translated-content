---
title: mix-blend-mode
slug: Web/CSS/mix-blend-mode
---

{{CSSRef}}

CSS-свойство **`mix-blend-mode`** определяет режим смешивания цветов выбранного элемента с низлежащими слоями.

{{EmbedInteractiveExample("pages/css/mix-blend-mode.html")}}

## Синтаксис

```css
/* Ключевые слова */
mix-blend-mode: normal;
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: hard-light;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity;

/* Глобальные значения */
mix-blend-mode: initial;
mix-blend-mode: inherit;
mix-blend-mode: unset;
```

### Значения

- {{cssxref("&lt;blend-mode&gt;")}}
  - : Режим смешивания, который нужно применить.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```html hidden
<div class="grid">
  <div class="col">
    <div class="note">
      Blending in isolation (no blending with the background)
    </div>
    <div class="row isolate">
      <div class="cell">
        normal
        <div class="container normal">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <defs>
                <linearGradient id="red">
                  <stop offset="0" stop-color="hsl(0,100%,50%)" />
                  <stop offset="100%" stop-color="hsl(0,0%,100%)" />
                </linearGradient>
                <linearGradient id="green">
                  <stop offset="0" stop-color="hsl(120,100%,50%)" />
                  <stop offset="100%" stop-color="hsl(120,0%,100%)" />
                </linearGradient>
                <linearGradient id="blue">
                  <stop offset="0" stop-color="hsl(240,100%,50%)" />
                  <stop offset="100%" stop-color="hsl(240,0%,100%)" />
                </linearGradient>
              </defs>
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        multiply
        <div class="container multiply">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        darken
        <div class="container darken">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        screen
        <div class="container screen">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        lighten
        <div class="container lighten">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        overlay
        <div class="container overlay">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        color-dodge
        <div class="container color-dodge">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        color-burn
        <div class="container color-burn">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        hard-light
        <div class="container hard-light">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        soft-light
        <div class="container soft-light">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        difference
        <div class="container difference">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        exclusion
        <div class="container exclusion">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        hue
        <div class="container hue">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        saturation
        <div class="container saturation">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        color
        <div class="container color">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        luminosity
        <div class="container luminosity">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="note">Blending globally (blend with the background)</div>
    <div class="row">
      <div class="cell">
        normal
        <div class="container normal">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        multiply
        <div class="container multiply">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        darken
        <div class="container darken">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        screen
        <div class="container screen">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        lighten
        <div class="container lighten">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        overlay
        <div class="container overlay">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        color-dodge
        <div class="container color-dodge">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        color-burn
        <div class="container color-burn">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        hard-light
        <div class="container hard-light">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        soft-light
        <div class="container soft-light">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        difference
        <div class="container difference">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        exclusion
        <div class="container exclusion">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        hue
        <div class="container hue">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        saturation
        <div class="container saturation">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        color
        <div class="container color">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        luminosity
        <div class="container luminosity">
          <div class="group">
            <div class="item firefox"></div>
            <svg viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css hidden
html,
body {
  height: 100%;
  box-sizing: border-box;
  background: #eee;
}

.grid {
  width: 100%;
  display: flex;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  height: auto;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0.5em 0.5em 0;
  font: 0.8em sans-serif;
  text-align: left;
  white-space: nowrap;
}

.note + .row .cell {
  margin-top: 0;
}

.container {
  position: relative;
  background: linear-gradient(to right, #000 0%, transparent 50%, #fff 100%),
    linear-gradient(to bottom, #ff0 0%, #f0f 50%, #0ff 100%);
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.R {
  transform-origin: center;
  transform: rotate(-30deg);
  fill: url(#red);
}

.G {
  transform-origin: center;
  transform: rotate(90deg);
  fill: url(#green);
}

.B {
  transform-origin: center;
  transform: rotate(210deg);
  fill: url(#blue);
}

.isolate .group {
  isolation: isolate;
}

.normal .item {
  mix-blend-mode: normal;
}
.multiply .item {
  mix-blend-mode: multiply;
}
.screen .item {
  mix-blend-mode: screen;
}
.overlay .item {
  mix-blend-mode: overlay;
}
.darken .item {
  mix-blend-mode: darken;
}
.lighten .item {
  mix-blend-mode: lighten;
}
.color-dodge .item {
  mix-blend-mode: color-dodge;
}
.color-burn .item {
  mix-blend-mode: color-burn;
}
.hard-light .item {
  mix-blend-mode: hard-light;
}
.soft-light .item {
  mix-blend-mode: soft-light;
}
.difference .item {
  mix-blend-mode: difference;
}
.exclusion .item {
  mix-blend-mode: exclusion;
}
.hue .item {
  mix-blend-mode: hue;
}
.saturation .item {
  mix-blend-mode: saturation;
}
.color .item {
  mix-blend-mode: color;
}
.luminosity .item {
  mix-blend-mode: luminosity;
}
```

{{EmbedLiveSample("mix-blend-mode", "100%", 1600, "", "", "example-outcome-frame")}}

### Пример HTML

```html
<div class="isolate">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
  <div class="circle circle-3"></div>
</div>
```

```css
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  mix-blend-mode: screen;
  position: absolute;
}

.circle-1 {
  background: red;
}

.circle-2 {
  background: lightgreen;
  left: 40px;
}

.circle-3 {
  background: blue;
  left: 20px;
  top: 40px;
}

.isolate {
  isolation: isolate; /* Без isolation, цвет фона будет учитываться */
  position: relative;
}
```

{{EmbedLiveSample("Пример_HTML", "100%", "180")}}

### Пример SVG

Этот пример повторяет предыдущий с использованием SVG.

```html
<svg>
  <g class="isolate">
    <circle cx="40" cy="40" r="40" fill="red" />
    <circle cx="80" cy="40" r="40" fill="lightgreen" />
    <circle cx="60" cy="80" r="40" fill="blue" />
  </g>
</svg>
```

```css
circle {
  mix-blend-mode: screen;
}
.isolate {
  isolation: isolate;
} /* Без isolation, цвет фона будет учитываться */
```

{{EmbedLiveSample("Пример_SVG", "100%", "180")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("background-blend-mode")}}
