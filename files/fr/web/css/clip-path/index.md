---
title: clip-path
slug: Web/CSS/clip-path
translation_of: Web/CSS/clip-path
browser-compat: css.properties.clip-path
---
{{CSSRef}}

La propriété **`clip-path`** empêche une portion d'un élément d'être affichée en définissant une région de rognage. Seule une zone spécifique de l'élément sera affichée.

{{EmbedInteractiveExample("pages/css/clip-path.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
clip-path: none;

/* Valeurs pointant vers une image */
/* Type <clip-source> */
clip-path: url(resources.svg#c1);

/* Valeurs de boîte */
clip-path: border-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: margin-box;
clip-path: padding-box;
clip-path: stroke-box;
clip-path: view-box;

/* Valeurs géométriques <basic-shape> */
/* avec une notation fonctionnelle */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 0 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* Combinaison boîte & géométrie */
clip-path: padding-box circle(50px at 0 100px);

/* Valeurs globales */
clip-path: inherit;
clip-path: initial;
clip-path: revert;
clip-path: unset;
```

La propriété `clip-path` est définie avec une ou plusieurs des valeurs listées ci-après.

### Valeurs

- `<clip-source>`
  - : Une [`url()`](/fr/docs/Web/CSS/url()) qui référence un élément [SVG](/fr/docs/Web/SVG) [`<clipPath>`](/fr/docs/Web/SVG/Element/clipPath).

- [`<basic-shape>`](/fr/docs/Web/CSS/basic-shape)

  - : Une forme dont la taille et la position sont définies par la valeur `<geometry-box>`. Si aucune valeur de géométrie n'est fournie, `border-box` sera utilisée comme boîte de référence. La forme peut être définie avec l'une de ces valeurs&nbsp;:

    - [`inset()`](/fr/docs/Web/CSS/basic-shape/inset())
      - : Définit un rectangle.
    - [`circle()`](/fr/docs/Web/CSS/basic-shape/circle())
      - : Définit un cercle avec un rayon et une position.
    - [`ellipse()`](/fr/docs/Web/CSS/basic-shape/ellipse())
      - : Définit une ellipse avec ses deux demi-rayons et une position.
    - [`polygon()`](/fr/docs/Web/CSS/basic-shape/polygon())
      - : Définit un polygone en utilisant une règle de remplissage SVG et un ensemble d'arêtes.
    - [`path()`](/fr/docs/Web/CSS/path())
      - : Définit une forme en utilisant une règle de remplissage SVG optionnelle et une définition de chemin SVG.

- `<geometry-box>`

  - : Si cette valeur est combinée avec une valeur `<basic-shape>`, elle définira la boîte de référence dans laquelle placer la forme. Si elle est utilisée seule, ce sont les bords de la boîte (ainsi que les éventuels coins arrondis définis avec [`border-radius`](/fr/docs/Web/CSS/border-radius)) qui sont utilisés comme ligne de rognage. Cette composante peut prendre les valeurs suivantes&nbsp;:

    - `margin-box`
      - : La [boîte de marge](/fr/docs/Web/CSS/CSS_Shapes/From_box_values#margin-box) est utilisée comme boîte de référence.
    - `border-box`
      - : La [boîte de bordure](/fr/docs/Web/CSS/CSS_Shapes/From_box_values#border-box) est utilisée comme boîte de référence.
    - `padding-box`
      - : La [boîte de remplissage (<i lang="en">padding</i>)](/fr/docs/Web/CSS/CSS_Shapes/From_box_values#padding-box) est utilisée comme boîte de référence.
    - `content-box`
      - : La [boîte de contenu](/fr/docs/Web/CSS/CSS_Shapes/From_box_values#content-box) est utilisée comme boîte de référence.
    - `fill-box`
      - : La boîte englobant (<i lang="en">bounding box</i>) est utilisée comme boîte de référence.
    - `stroke-box`
      - : La boîte de contour de la boîte englobante est utilisée comme boîte de référence.
    - `view-box`
      - : La zone d'affichage SVG la plus proche est utilisée comme boîte de référence. Si un attribut [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est défini pour l'élément qui crée la zone d'affichage SVG, la boîte de référence est située à l'origine du système construit par `viewBox` et les dimensions de la boîte de référence sont les valeurs de hauteur et de largeur de l'attribut `viewBox`.

- `none`
  - : Aucun chemin de rognage n'est créé.

> **Note :** Si [la valeur calculée](/fr/docs/Web/CSS/computed_value) est différente de `none`, cela entraînera la création d'un nouveau [contexte d'empilement](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) (de la même façon qu'[`opacity`](/fr/docs/Web/CSS/opacity) avec des valeurs différentes de `1`).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Comparaison entre HTML et SVG

```html hidden
<svg class="defs">
  <defs>
    <clipPath id="myPath" clipPathUnits="objectBoundingBox">
      <path d="M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z" />
    </clipPath>
  </defs>
</svg>

<div class="grid">
  <div class="col">
    <div class="note">clip-path: none</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="none">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="none">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: url(#myPath)<br><br>
      Assuming the following clipPath definition:
      <pre>
&lt;svg&gt;
  &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;
    &lt;path d="M0.5,1
      C 0.5,1,0,0.7,0,0.3
      A 0.25,0.25,1,1,1,0.5,0.3
      A 0.25,0.25,1,1,1,1,0.3
      C 1,0.7,0.5,1,0.5,1 Z" /&gt;
  &lt;/clipPath&gt;
&lt;/svg&gt;</pre>
    </div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="svg">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="svg">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z')
    </div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="svg2">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="svg2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>



    <div class="note">clip-path: circle(25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape1">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape1">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape2">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape2">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: fill-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape3">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape3">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: stroke-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape4">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape4">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: view-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape5">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape5">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: margin-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape6">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape6">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: border-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape7">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape7">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: padding-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape8">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape8">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="note">clip-path: content-box circle(25% at 25% 25%)</div>
    <div class="row">
      <div class="cell"> <span>HTML</span>
        <div class="container">
          <p class="shape9">
            J'ADORE<br><em>le rognage</em>
          </p>
        </div>
      </div>
      <div class="cell"> <span>SVG</span>
        <div class="container viewbox">
          <svg viewBox="0 0 192 192">
            <g class="shape9">
              <rect x="24" y="24" width="144" height="144" />
              <text x="96" y="91">J'ADORE</text>
              <text x="96" y="109" class="em">le rognage</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
html,body {
  height: 100%;
  box-sizing: border-box;
  background: #EEE;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  font: 1em monospace;
}

.row {
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

.col {
  flex: 1 auto;
}

.cell {
  margin: .5em;
  padding: .5em;
  background-color: #FFF;
  overflow: hidden;
  text-align: center;
  flex: 1;
}

.note {
  background: #fff3d4;
  padding: 1em;
  margin: .5em .5em 0;
  font: .8em sans-serif;
  text-align: left;
  white-space: nowrap;
}

.note + .row .cell {
  margin-top: 0;
}

.container {
  display: inline-block;
  border: 1px dotted grey;
  position:relative;
}

.container:before {
  content: 'margin';
  position: absolute;
  top: 2px;
  left: 2px;
  font: italic .6em sans-serif;
}

.viewbox {
  box-shadow: 1rem 1rem 0 #EFEFEF inset, -1rem -1rem 0 #EFEFEF inset;
}

.container.viewbox:after {
  content: 'viewbox';
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  font: italic .6em sans-serif;
}

.cell span {
  display: block;
  margin-bottom: .5em;
}

p {
  font-family: sans-serif;
  background: #000;
  color: pink;
  margin: 2em;
  padding: 3em 1em;
  border: 1em solid pink;
  width: 6em;
}

.none { clip-path: none; }
.svg  { clip-path: url(#myPath); }
.svg2 { clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z');}
.shape1 { clip-path: circle(25%); }
.shape2 { clip-path: circle(25% at 25% 25%); }
.shape3 { clip-path: fill-box    circle(25% at 25% 25%); }
.shape4 { clip-path: stroke-box circle(25% at 25% 25%); }
.shape5 { clip-path: view-box    circle(25% at 25% 25%); }
.shape6 { clip-path: margin-box circle(25% at 25% 25%); }
.shape7 { clip-path: border-box circle(25% at 25% 25%); }
.shape8 { clip-path: padding-box circle(25% at 25% 25%); }
.shape9 { clip-path: content-box circle(25% at 25% 25%); }

.defs {
  width: 0;
  height: 0;
  margin: 0;
}

pre { margin-bottom: 0; }

svg {
  margin: 1em;
  font-family: sans-serif;
  width: 192px;
  height: 192px;
}

svg rect {
  stroke: pink;
  stroke-width: 16px;
}

svg text {
  fill: pink;
  text-anchor: middle;
}

svg text.em {
  font-style: italic;
}
```

{{EmbedLiveSample("", "100%", 800, "", "", "example-outcome-frame")}}

### Exemple complet

#### HTML

```html
<img id="clipped" src="mdn.svg"
    alt="MDN logo">
<svg height="0" width="0">
  <defs>
    <clipPath id="cross">
      <rect y="110" x="137" width="90" height="90"/>
      <rect x="0" y="110" width="90" height="90"/>
      <rect x="137" y="0" width="90" height="90"/>
      <rect x="0" y="0" width="90" height="90"/>
    </clipPath>
  </defs>
</svg>

<select id="clipPath">
  <option value="none">none</option>
  <option value="circle(100px at 110px 100px)">circle</option>
  <option value="url(#cross)" selected>cross</option>
  <option value="inset(20px round 20px)">inset</option>
  <option value="path('M 0 200 L 0,110 A 110,90 0,0,1 240,100 L 200 340 z')">path</option>
</select>
```

#### CSS

```css
#clipped {
  margin-bottom: 20px;
  clip-path: url(#cross);
}
```

```js hidden
var clipPathSelect = document.getElementById("clipPath");
clipPathSelect.addEventListener("change", function (evt) {
  document.getElementById("clipped").style.clipPath = evt.target.value;
});
```

#### Résultat

{{EmbedLiveSample("", 230, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS
  - [`mask`](/fr/docs/Web/CSS/mask)
  - [`filter`](/fr/docs/Web/CSS/filter)
- [Appliquer des effets SVG sur du contenu HTML](/fr/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [Les formes CSS, le rognage et le masquage&nbsp;: comment les utiliser (en anglais)](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- Les attributs SVG&nbsp;:
  - [`clip-path`](/fr/docs/Web/SVG/Attribute/clip-path)
  - [`clip-rule`](/fr/docs/Web/SVG/Attribute/clip-rule)
