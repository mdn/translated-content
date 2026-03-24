---
title: mix-blend-mode
slug: Web/CSS/Reference/Properties/mix-blend-mode
l10n:
  sourceCommit: fa647850ec257db6f807993c556f21a6c269cc4f
---

La propriété [CSS](/fr/docs/Web/CSS) **`mix-blend-mode`** définit la façon dont le contenu d'un élément doit se mélanger avec le contenu de l'élément parent et avec son arrière-plan.

{{InteractiveExample("Démonstration CSS&nbsp;: mix-blend-mode")}}

```css interactive-example-choice
mix-blend-mode: normal;
```

```css interactive-example-choice
mix-blend-mode: multiply;
```

```css interactive-example-choice
mix-blend-mode: hard-light;
```

```css interactive-example-choice
mix-blend-mode: difference;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      id="example-element"
      src="/shared-assets/images/examples/firefox-logo.svg"
      width="200" />
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: sandybrown;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
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
mix-blend-mode: plus-darker;
mix-blend-mode: plus-lighter;

/* Valeurs globales */
mix-blend-mode: inherit;
mix-blend-mode: initial;
mix-blend-mode: revert;
mix-blend-mode: revert-layer;
mix-blend-mode: unset;
```

### Valeurs

- {{CSSxRef("&lt;blend-mode&gt;")}}
  - : Le mode de fusion qui doit être appliqué.
- `plus-darker` {{Experimental_Inline}}
  - : Fusion utilisant [l'opérateur de composition _plus-darker_ <sup>(angl.)</sup>](https://drafts.csswg.org/compositing-2/#porterduffcompositingoperators_plus_darker).
- `plus-lighter`
  - : Fusion utilisant [l'opérateur de composition _plus-lighter_ <sup>(angl.)</sup>](https://drafts.csswg.org/compositing-2/#porterduffcompositingoperators_plus_lighter). Utile pour les effets de fondu enchaîné (empêche le clignotement indésirable lorsque deux éléments superposés animent leur opacité dans des directions opposées).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Effet des différentes valeurs de `mix-blend-mode`

```html hidden
<div class="grid">
  <div class="col">
    <div class="note">
      Fusion en isolation (pas de fusion avec l'arrière-plan)
    </div>
    <div class="row isolate">
      <div class="cell">
        normal
        <div class="container normal">
          <div class="group">
            <div class="item firefox"></div>
            <svg class="item" viewBox="0 0 150 150">
              <defs>
                <linearGradient id="red">
                  <stop offset="0" stop-color="hsl(0 100% 50%)" />
                  <stop offset="100%" stop-color="hsl(0 0% 100%)" />
                </linearGradient>
                <linearGradient id="green">
                  <stop offset="0" stop-color="hsl(120 100% 50%)" />
                  <stop offset="100%" stop-color="hsl(120 0% 100%)" />
                </linearGradient>
                <linearGradient id="blue">
                  <stop offset="0" stop-color="hsl(240 100% 50%)" />
                  <stop offset="100%" stop-color="hsl(240 0% 100%)" />
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        plus-darker
        <div class="container plus-darker">
          <div class="group">
            <div class="item firefox"></div>
            <svg class="item" viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        plus-lighter
        <div class="container plus-lighter">
          <div class="group">
            <div class="item firefox"></div>
            <svg class="item" viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="note">Fusion globale (fusion avec l'arrière-plan)</div>
    <div class="row">
      <div class="cell">
        normal
        <div class="container normal">
          <div class="group">
            <div class="item firefox"></div>
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
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
            <svg class="item" viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        plus-darker
        <div class="container plus-darker">
          <div class="group">
            <div class="item firefox"></div>
            <svg class="item" viewBox="0 0 150 150">
              <ellipse class="item R" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item G" cx="75" cy="75" rx="25" ry="70"></ellipse>
              <ellipse class="item B" cx="75" cy="75" rx="25" ry="70"></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div class="cell">
        plus-lighter
        <div class="container plus-lighter">
          <div class="group">
            <div class="item firefox"></div>
            <svg class="item" viewBox="0 0 150 150">
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
  background: #eeeeee;
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
  background-color: white;
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
  background:
    linear-gradient(to right, black 0%, transparent 50%, white 100%),
    linear-gradient(to bottom, yellow 0%, magenta 50%, cyan 100%);
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.R {
  transform-origin: center;
  transform: rotate(-30deg);
  fill: url("#red");
}

.G {
  transform-origin: center;
  transform: rotate(90deg);
  fill: url("#green");
}

.B {
  transform-origin: center;
  transform: rotate(210deg);
  fill: url("#blue");
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
.plus-darker .item {
  mix-blend-mode: plus-darker;
}
.plus-lighter .item {
  mix-blend-mode: plus-lighter;
}
```

{{EmbedLiveSample("Effet des différentes valeurs de `mix-blend-mode`", "100%", 1600)}}

### Utiliser `mix-blend-mode` avec du SVG

#### SVG

```html
<svg>
  <g class="isolate">
    <circle cx="40" cy="40" r="40" fill="red" />
    <circle cx="80" cy="40" r="40" fill="lightgreen" />
    <circle cx="60" cy="80" r="40" fill="blue" />
  </g>
</svg>
```

#### CSS

```css
circle {
  mix-blend-mode: screen;
}
.isolate {
  isolation: isolate;
} /* Sans isolation, la couleur de fond sera prise en compte */
```

#### Résultat

{{EmbedLiveSample("Utiliser `mix-blend-mode` avec du SVG", "100%", 180)}}

### Utiliser `mix-blend-mode` avec du texte

Cet exemple utilise `mix-blend-mode` pour mélanger la couleur du texte avec la couleur de fond de son élément parent.

#### HTML

```html
<div class="container">
  <p>Plutôt inoffensif</p>
  <p class="multiply">Plutôt inoffensif</p>
  <p class="screen">Plutôt inoffensif</p>
  <p class="hard-light">Plutôt inoffensif</p>
</div>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap";

.container {
  background-color: blue;
}

p {
  font:
    4rem "Rubik Moonrocks",
    cursive;
  font-weight: bold;
  color: orange;
  padding: 0.5rem;
  margin: 0;
}

.multiply {
  mix-blend-mode: multiply;
}

.screen {
  mix-blend-mode: screen;
}

.hard-light {
  mix-blend-mode: hard-light;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `mix-blend-mode` avec du texte", "", 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;blend-mode&gt;")}}
- La propriété {{CSSxRef("background-blend-mode")}}
