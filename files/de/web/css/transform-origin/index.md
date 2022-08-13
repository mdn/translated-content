---
title: transform-origin
slug: Web/CSS/transform-origin
tags:
  - CSS
  - CSS Transformationen
  - CSS3
  - Fortgeschritten
translation_of: Web/CSS/transform-origin
---
{{ CSSRef("CSS Transforms") }}

Die CSS-Eigenschaft **`transform-origin`** legt den Ankerpunkt für die Transformationen eines Elements fest.

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword y-offset */
transform-origin: left 2px;

/* x-offset-keyword y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword x-offset-keyword */
transform-origin: top right;

/* x-offset y-offset z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword y-offset z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword y-offset-keyword z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword x-offset-keyword z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: unset;
```

```html hidden
<div class="grid">
  <div class="col">
    <div class="row">
      <div class="cell">
        rotate(<span class="angle">-120</span>deg);
        <div class="border">
          <div class="content">
            <div class="center"></div>
            <div class="tr d2"></div>
          </div>
        </div>
      </div>
      <div class="cell">
        rotatex(<span class="angle">-120</span>deg);
        <div class="border">
          <div class="content">
            <div class="center"></div>
            <div class="tr d3x"></div>
          </div>
        </div>
      </div>
      <div class="cell">
        rotatey(<span class="angle">-120</span>deg);
        <div class="border">
          <div class="content">
            <div class="center"></div>
            <div class="tr d3y"></div>
          </div>
        </div>
      </div>
      <div class="cell">
        rotatez(<span class="angle">-120</span>deg);
        <div class="border">
          <div class="content">
            <div class="center"></div>
            <div class="tr d3z"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="cell note">
      transform-origin: <input type="text" value="30% top -20px"> (<i>rotate by <input type="number" min="-360" max="360" value="-120"> deg</i>)
    </div>
  </div>
</div>
```

```css hidden
html,body {
  height: 100%;
  box-sizing: border-box;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  box-sizing: border-box;
  margin: .5em;
  padding: .5em;
  background-color: #FFF;
  overflow: hidden;
  text-align: center;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: 0 .5em .5em;
  font: .8em sans-serif;
  text-align: center;
  flex: none;
}

input[type=number] {
  width: 3rem;
}

.border {
  width : 140px;
  height: 140px;
  border: 1px solid #E4F0F5;
  margin: .5rem auto;
  overflow: hidden;
}

.content {
  width : 50px;
  height: 50px;
  margin: 44px;
  border: 1px dotted hsla(0, 100%, 50%, .5);
  position: relative;
}

.center {
  position: absolute;
  width : 5px;
  height: 5px;
  border-radius: 100%;
  background: red;
  top : 50%;
  left: 50%;
  transform: translate(-3px, -3px);
  z-index: 1;
}

.center:before {
  content: '';
  position: absolute;
  left  : 2px;
  right : 2px;
  top   : -6px;
  bottom: -6px;
  background: red;
}

.center:after {
  content: '';
  position: absolute;
  left  : -6px;
  right : -6px;
  top   : 2px;
  bottom: 2px;
  background: red;
}

.tr {
  width : 50px;
  height: 50px;
  background: hsla(215, 100%, 50%, 0.3);
  transition: transform 2s linear;
}

.tr.d2  { transform: rotate(-120deg);  }
.tr.d3x { transform: rotatex(-120deg); }
.tr.d3y { transform: rotatey(-120deg); }
.tr.d3z { transform: rotatez(-120deg); }
```

```js hidden
window.addEventListener('load', function () {
  var LENGTH = /^-?\d+(?:em|ex|cap|ch|ic|rem|lh|rlh|vh|vw|vi|vb|vmin|vmax|px|mm|q|cm|in|pt|pc$)/
  var LENGTH_PERCENT = /^-?\d+(?:em|ex|cap|ch|ic|rem|lh|rlh|vh|vw|vi|vb|vmin|vmax|px|mm|q|cm|in|pt|pc|%$)/

  var KEYX = /^left|center|right$/
  var KEYY = /^top|center|bottom$/
  var KEYALL = /^left|center|right|top|bottom$/

  var INPUT = document.querySelector('input[type=text]')
  var ANGLE = document.querySelector('input[type=number]')
  var CENTER= Array.from(document.querySelectorAll('.center'))
  var TR    = Array.from(document.querySelectorAll('.tr'))

  function update () {
    INPUT.style.boxShadow = 'none'
    var val  = INPUT.value.trim()
    var isValid = true
    var v = val.split(/\s+/)

    isValid = isValid && (v[2] === undefined || LENGTH.test(v[2]))
    isValid = isValid && (v[1] === undefined || LENGTH_PERCENT.test(v[1]) || KEYALL.test(v[1]))
    isValid = isValid && (LENGTH_PERCENT.test(v[0]) || KEYALL.test(v[0]))

    if (v.length === 2) {
      var double_key_words = KEYY.test(v[0]) && KEYX.test(v[1])
      var ordinary_value = (LENGTH_PERCENT.test(v[0]) || KEYX.test(v[0])) && (LENGTH_PERCENT.test(v[1]) || KEYY.test(v[1]))

      isValid = isValid && (double_key_words || ordinary_value)
    }


    if (!isValid) {
      val = '50% 50%'

      if (v[0] !== '') {
        INPUT.style.boxShadow = '0 0 .5em red'
      }
    }

    TR.forEach(function (tr, index) {
      tr.style.transformOrigin = val;

      setTimeout(function () {
        var pos = window.getComputedStyle(tr).transformOrigin.split(/\s+/);

        CENTER[index].style.left = pos[0]
        CENTER[index].style.top  = pos[1]
      }, 0)
    })
  }

  function rotate() {
    var value = Math.min(360, Math.max(-360, Number(ANGLE.value) || 0));

    document.querySelector('.d2').style.transform = 'rotate(' + value + 'deg)'
    document.querySelector('.d3x').style.transform = 'rotatex(' + value + 'deg)'
    document.querySelector('.d3y').style.transform = 'rotatey(' + value + 'deg)'
    document.querySelector('.d3z').style.transform = 'rotatez(' + value + 'deg)'
    Array.from(document.querySelectorAll('.angle')).forEach(function (node){
      node.innerText = value
    })
  }

  function mouseenter() {
    document.querySelector('.tr.d2' ).style.transform = 'rotate(0)'
    document.querySelector('.tr.d3x').style.transform = 'rotatex(0)'
    document.querySelector('.tr.d3y').style.transform = 'rotatey(0)'
    document.querySelector('.tr.d3z').style.transform = 'rotatez(0)'
  }

  INPUT.addEventListener('input', update)
  ANGLE.addEventListener('input', rotate)
  update()
  rotate()

  document.querySelector('.row').addEventListener('mouseenter', mouseenter)
  document.querySelector('.row').addEventListener('mouseleave', rotate)
})
```

{{EmbedLiveSample("transform-origin", "100%", 250, "", "", "example-outcome-frame")}}

Der Ankerpunkt ist somit der Punkt, um den eine Transformation angewendet wird. Zum Beispiel ist der Ankerpunkt der Funktion rotate() der Rotationsmittelpunkt. (Diese Eigenschaft wird angewendet, indem zuerst das Element durch den negierten Wert der Eigenschaft verschoben wird, dann die Transformation des Elements angewendet wird und dann um den Eigenschaftswert zurück verschoben wird.)

Werte, die nicht explizit definiert sind, werden auf die entsprechenden Standardwerte zurückgesetzt.

{{Cssinfo}}

## Syntax

Die Eigenschaft `transform-origin` kann mit einem, zwei oder drei Werten angegeben werden.

- Syntax mit einem Wert:

  - Der Wert muss als [{{cssxref("&lt;length&gt;")}}](/de/docs/Web/CSS/length), [{{cssxref("&lt;percentage&gt;")}}](/de/docs/Web/CSS/percentage), oder eines der Schlüsselwörter `left`, `center`, und `right` angegeben werden.

- Syntax mit zwei Werten:

  - Ein Wert muss eine Länge ([{{cssxref("&lt;length&gt;")}}](/de/docs/Web/CSS/length)), ein Prozentwert ([{{cssxref("&lt;percentage&gt;")}}](/de/docs/Web/CSS/percentage)) oder eines der Schlüsselwörter `left`, `center`, und `right` sein.
  - Der andere Wert muss als eine Länge ([{{cssxref("&lt;length&gt;")}}](/de/docs/Web/CSS/length)), ein Prozentwert([{{cssxref("&lt;percentage&gt;")}}](/de/docs/Web/CSS/percentage)) oder eines der Schlüsselwörter `top`, `center`, und `bottom` sein.

- Syntax mit drei Werten:

  - Die ersten zwei Werte entsprechen der Syntax mit zwei Werten.
  - Der dritte Wert muss ein {{cssxref("&lt;length&gt;")}}-Wert sein. Er repräsentiert immer den Wert auf der Z-Achse.

### Werte

- _x-offset_
  - : Ist als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} angegebener Versatz auf der X-Achse von der oberden linken Ecke.
- _offset-keyword_
  - : Die Schlüsselwörter `left`, `right`, `top`, `bottom`, und `center` beschreiben entsprechende Werte.
- _y-offset_
  - : Ist als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} angegebener Versatz auf der Y-Achse von der oberden linken Ecke.
- _x-offset-keyword_
  - : Die Schlüsselwörter `left`, `right`, oder `center` beschreiben entsprechende Werte für die horizontale Transformation.
- _y-offset-keyword_
  - : Die Schlüsselwörter `top`, `bottom`, oder `center` beschreiben entsprechende Werte für die vertikale Transformation.
- _z-offset_
  - : Als {{cssxref("&lt;length&gt;")}} (und nicht als {{cssxref("&lt;percentage&gt;")}}) beschreibt den Versatz auf der Z-Achse relativ zu 0.

Die Schlüsselwörte entschprechen folgenden Angaben in {{cssxref("&lt;percentage&gt;")}}:

| Schlüsselwort | Wert   |
| ------------- | ------ |
| `left`        | `0%`   |
| `center`      | `50%`  |
| `right`       | `100%` |
| `top`         | `0%`   |
| `bottom`      | `100%` |

### Formal syntax

{{csssyntax}}

## Beispiele

| Quellcode          | Ausgabe        |
| ------------------ | -------------- |
| `transform: none;` | ```html hidden |

<div class="box1">&nbsp;</div>
``````css hidden
.box1 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: none; -webkit-transform: none; }
```{{EmbedLiveSample('transform_none', '', '', '', '', 'no-button') }}                                                                                                             |
| `transform: rotate(30deg);`                              | ```html hidden
<div class="box2">&nbsp;</div>
``````css hidden
.box2 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: rotate(30deg); -webkit-transform: rotate(30deg); }
```{{EmbedLiveSample('transform_rotate_only', '', '', '', '', 'no-button') }}                                                                               |
| `transform: rotate(30deg); transform-origin: 0 0;`       | ```html hidden
<div class="box3">&nbsp;</div>
``````css hidden
.box3 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform-origin: 0 0; -webkit-transform-origin: 0 0; transform: rotate(30deg); -webkit-transform: rotate(30deg); }
```{{EmbedLiveSample('transform_rotate', '', '', '', '', 'no-button') }}                                 |
| `transform: rotate(30deg); transform-origin: 100% 100%;` | ```html hidden
<div class="box4">&nbsp;</div>
``````css hidden
.box4 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%; transform: rotate(30deg); -webkit-transform: rotate(30deg); }
```{{EmbedLiveSample('transform_rotate_with_percentage', '', '', '', '', 'no-button') }} |
| `transform: rotate(30deg); transform-origin: -1em -3em;` | ```html hidden
<div class="box5">&nbsp;</div>
``````css hidden
.box5 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform-origin: -1em -3em; -webkit-transform-origin: -1em -3em; transform: rotate(30deg); -webkit-transform: rotate(30deg); }
```{{EmbedLiveSample('transform_rotate_with_em', '', '', '', '', 'no-button') }}         |
| `transform: scale(1.9);`                                 | ```html hidden
<div class="box6">&nbsp;</div>
``````css hidden
.box6 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: scale(1.9); -webkit-transform: scale(1.9); }
```{{EmbedLiveSample('transform_scale_only', '', '', '', '', 'no-button') }}                                                                                         |
| `transform: scale(1.9); transform-origin: 0 0;`          | ```html hidden
<div class="box7">&nbsp;</div>
``````css hidden
.box7 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: scale(1.9); -webkit-transform: scale(1.9); transform-origin: 0 0; -webkit-transform-origin: 0 0; }
```{{EmbedLiveSample('transform_scale_without_origin', '', '', '', '', 'no-button') }}                   |
| `transform: scale(1.9); transform-origin: 100% -30%;`    | ```html hidden
<div class="box8">&nbsp;</div>
``````css hidden
.box8 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: scale(1.9); -webkit-transform: scale(1.9); transform-origin: 100% -30%; -webkit-transform-origin: 100% -30%; }
```{{EmbedLiveSample('transform_scale', '', '', '', '', 'no-button') }}                           |
| `transform: skewX(50deg); transform-origin: 100% -30%;`  | ```html hidden
<div class="box9">&nbsp;</div>
``````css hidden
.box9 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: skewX(50deg); -webkit-transform: skewX(50deg); transform-origin: 100% -30%; -webkit-transform-origin: 100% -30%; }
```{{EmbedLiveSample('transform_skew_x', '', '', '', '', 'no-button') }}                       |
| `transform: skewY(50deg); transform-origin: 100% -30%;`  | ```html hidden
<div class="box10">&nbsp;</div>
``````css hidden
.box10 { margin: 0.5em; width: 3em; height: 3em; border: solid 1px; background-color: palegreen; transform: skewY(50deg); -webkit-transform: skewY(50deg); transform-origin: 100% -30%; -webkit-transform-origin: 100% -30%; }
```{{EmbedLiveSample('transform_skew_y', '', '', '', '', 'no-button') }}                     |

## Spezifikation

| Spezifikation                                                                                                    | Status                                   | Notiz |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----- |
| {{ SpecName('CSS3 Transforms', '#transform-origin-property', 'transform-origin') }} | {{ Spec2('CSS3 Transforms') }} |       |

## Browserunterstützung

{{Compat("css.properties.transform-origin")}}

## Siehe auch

- [CSS Transformationen verwenden](/de/docs/Web/CSS/CSS_Transforms/CSS_Transformationen_verwenden)
