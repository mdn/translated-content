---
title: perspective-origin
slug: Web/CSS/perspective-origin
tags:
  - CSS
  - Propriété
  - Reference
  - Transformations CSS
translation_of: Web/CSS/perspective-origin
---
{{CSSRef}}

La propriété **`perspective-origin`** détermine la poisition depuis laquelle le spectateur regarde le document. Elle est utilisée comme point de fuite par la propriété {{cssxref("perspective")}}.

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

Les propriétés `perspective-origin` et {{cssxref("perspective")}} sont à rattacher à l'élément parent de l'élément qu'on veut placer dans un espace 3D. En revanche, la fonction [`perspective()`](/fr/docs/Web/CSS/transform-function/perspective) s'applique à même l'élément qu'on veut placer en 3D.

## Syntaxe

```css
/* Syntaxe avec une valeur */
perspective-origin: x-position;

/* Syntaxe avec deux valeurs */
perspective-origin: x-position y-position;

/* Lorsque x-position et y-position sont des mots-clés */
/* on peut aussi avoir la forme suivante valide        */
perspective-origin: y-position x-position;

/* Valeurs globales */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: unset;
```

### Valeurs

- _x-position_

  - : Indique l'abscisse de la position du point de fuite. La valeur peut être :

    - De type {{cssxref("&lt;length-percentage&gt;")}} : la position est indiquée comme une longueur absolue ou relativement à la largeur de l'élément. La valeur peut être négative.
    - `left` : un mot-clé qui est un alias pour indiquer une longueur nulle.
    - `center` : un mot-clé qui est un alias pour indiquer une valeur de pourcentage de `50%`.
    - `right` : un mot-clé qui est un alias pour indiquer un pourcentage de `100%`.

- _y-position_

  - : Indique l'ordonnée de la position du point de fuite. La valeur peut être :

    - De type {{cssxref("&lt;length-percentage&gt;")}} : la position est indiquée comme une longueur absolue ou relativement à la hauteur de l'élément. La valeur peut être négative.
    - De type {{cssxref("&lt;length&gt;")}} : la position est indiquée avec une valeur de longueur. La valeur peut être négative.
    - `top` : un mot-clé qui est un alias pour indiquer une longueur nulle.
    - `center` : un mot-clé qui est un alias pour indiquer une valeur de pourcentage de `50%`.
    - `bottom` : un mot-clé qui est un alias pour indiquer un pourcentage de `100%`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Cubes avec des valeurs communes pour `perspective-origin`

#### HTML

```html
<section>
<figure>
  <caption><code>perspective-origin: top left;</code></caption>
    <div class="container">
    <div class="cube potl">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
</figure>

<figure>
  <caption><code>perspective-origin: top;</code></caption>
   <div class="container">
    <div class="cube potm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: top right;</code></caption>
  <div class="container">
    <div class="cube potr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: left;</code></caption>
  <div class="container">
    <div class="cube poml">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: 50% 50%;</code></caption>
  <div class="container">
    <div class="cube pomm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: right;</code></caption>
  <div class="container">
    <div class="cube pomr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: bottom left;</code></caption>
  <div class="container">
    <div class="cube pobl">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: bottom;</code></caption>
  <div class="container">
    <div class="cube pobm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: bottom right;</code></caption>
  <div class="container">
    <div class="cube pobr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: -200% -200%;</code></caption>
  <div class="container">
    <div class="cube po200200neg">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: 200% 200%;</code></caption>
  <div class="container">
    <div class="cube po200200pos">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <caption><code>perspective-origin: 200% -200%;</code></caption>
  <div class="container">
    <div class="cube po200200">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

</section>
```

#### CSS

```css
/* Valeurs de perspective-origin (uniques pour chaque exemple) */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* On définit le conteneur, le cube et une face générique */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* On définit chaque face */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}
.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* On améliore la disposition */
section {
  background-color: #EEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

#### Résultat

{{EmbedLiveSample('Cubes_avec_des_valeurs_communes_pour_perspective-origin', 620, 800)}}

## Spécifications

| Spécification                                                                                                        | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS Transforms 2', '#perspective-origin-property', 'perspective-origin')}} | {{Spec2('CSS Transforms 2')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.perspective-origin")}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS "CSS/Using_CSS_transforms")
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [La fonction de transformation `perspective()`](/fr/docs/Web/CSS/transform-function/perspective)
