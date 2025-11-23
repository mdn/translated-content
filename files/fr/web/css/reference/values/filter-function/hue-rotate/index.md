---
title: hue-rotate()
slug: Web/CSS/Reference/Values/filter-function/hue-rotate
original_slug: Web/CSS/filter-function/hue-rotate
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`hue-rotate()`** permet d'appliquer une rotation de teinte sur une image. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: hue-rotate()")}}

```css interactive-example-choice
filter: hue-rotate(0);
```

```css interactive-example-choice
filter: hue-rotate(90deg);
```

```css interactive-example-choice
filter: hue-rotate(-0.25turn);
```

```css interactive-example-choice
filter: hue-rotate(3.142rad);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntaxe

```css
hue-rotate(angle)
```

### Paramètres

- `angle` {{Optional_Inline}}
  - : Le changement relatif de la teinte de l'échantillon d'entrée, exprimé avec un {{CSSxRef("&lt;angle&gt;")}}. Une valeur de `0deg` laisse l'entrée inchangée. Une rotation positive augmente la valeur de la teinte, tandis qu'une rotation négative la diminue. La valeur initiale pour {{Glossary("interpolation", "l'interpolation")}} est `0`. Il n'y a pas de valeur minimale ou maximale. L'effet des valeurs supérieures à `360deg` est, pour `hue-rotate(Ndeg)`, équivalent à `N` modulo 360. La valeur par défaut est `0deg`.

Le type de données CSS `<angle>` représente une valeur d'angle exprimée en degrés, en grades, en radians ou en tours. Les éléments suivants sont équivalents&nbsp;:

```css
hue-rotate(-180deg)
hue-rotate(540deg)
hue-rotate(200grad)
hue-rotate(3.14159rad)
hue-rotate(0.5turn)
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Avec la propriété `backdrop-filter`

Cet exemple applique un filtre `hue-rotate()` via la propriété CSS `backdrop-filter` au paragraphe, ce qui modifie la teinte de la zone située derrière le `<p>`.

```css
.container {
  background: url("/shared-assets/images/examples/listen_to_black_women.jpg")
    no-repeat left / contain #011296;
}
p {
  backdrop-filter: hue-rotate(240deg);
  text-shadow: 2px 2px #011296;
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: white;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Le texte sur les images peut être illisible et inaccessible même avec une
    ombre portée.
  </p>
</div>
```

{{EmbedLiveSample('Avec la propriété `backdrop-filter`','100%','280')}}

### Avec la propriété `filter`

Cet exemple applique un filtre `hue-rotate()` via la propriété CSS `filter`, ce qui modifie la teinte de l'ensemble de l'élément, y compris le contenu, la bordure et l'image d'arrière-plan.

```css
p {
  filter: hue-rotate(-60deg);
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: goldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
}
```

```css hidden
p {
  padding: 0.5rem;
  font-size: 2rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>La personne qui a écrit cet exemple n'est pas designer, heureusement.</p>
```

{{EmbedLiveSample('Avec la propriété `filter`','100%','220')}}

### Avec `url()` et le filtre SVG `hue-rotate`

L'élément SVG {{SVGElement("filter")}} est utilisé pour définir des effets de filtre personnalisés qui peuvent ensuite être référencés par [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Le type `hueRotate` de la primitive {{SVGElement("feColorMatrix")}} du `<filter>` fournit le même effet. Étant donné ce qui suit&nbsp;:

```html live-sample___svg_filter
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 220 220"
  color-interpolation-filters="sRGB"
  height="220"
  width="220">
  <filter id="hue-rotate">
    <feColorMatrix type="hueRotate" values="90" />
  </filter>
</svg>
```

Ces valeurs produisent le même résultat&nbsp;:

```css
filter: hue-rotate(90deg); /* rotation de 90deg */
filter: url("#hue-rotate"); /* avec SVG intégré */
filter: url("folder/fileName.svg#hue-rotate"); /* définition de filtre svg externe */
```

Cet exemple montre trois images&nbsp;: l'image avec la fonction de filtre `hue-rotate()` appliquée, l'image avec un filtre `url()` équivalent, et l'image d'origine pour comparaison&nbsp;:

```html hidden live-sample___svg_filter
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>hue-rotate()</code></th>
      <th><code>url()</code></th>
      <th>Image d'origine</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag with rotated colors" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag with rotated colors" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden live-sample___svg_filter
.css-filter {
  filter: hue-rotate(90deg);
}
.svg-filter {
  filter: url("#hue-rotate");
}
svg:not(:root) {
  display: none;
}
```

{{EmbedLiveSample('svg_filter','100%','280')}}

### `hue-rotate()` ne préserve pas la saturation ni la luminosité

Le diagramme ci-dessous compare deux dégradés de couleurs à partir du rouge&nbsp;: le premier est généré avec `hue-rotate()`, le second utilise de vraies valeurs HSL. Remarquez que le dégradé obtenu avec `hue-rotate()` présente des différences notables de saturation et de luminosité au centre.

```html
<div>
  <p>Avec <code>hue-rotate()</code></p>
  <div id="hue-rotate"></div>
</div>
<div>
  <p>Avec <code>hsl()</code></p>
  <div id="hsl"></div>
</div>
```

```css hidden
#hue-rotate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#hue-rotate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const hueRotate = document.getElementById("hue-rotate");
const hsl = document.getElementById("hsl");

for (let i = 0; i < 360; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(${i}, 100%, 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "red";
  div2.style.filter = `hue-rotate(${i}deg)`;
  hueRotate.appendChild(div2);
}
```

{{EmbedLiveSample("`hue-rotate()` ne préserve pas la saturation ni la luminosité", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- Les autres fonctions {{CSSxRef("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} sont&nbsp;:
  - {{CSSxRef("filter-function/blur", "blur()")}}
  - {{CSSxRef("filter-function/brightness", "brightness()")}}
  - {{CSSxRef("filter-function/contrast", "contrast()")}}
  - {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - {{CSSxRef("filter-function/invert", "invert()")}}
  - {{CSSxRef("filter-function/opacity", "opacity()")}}
  - {{CSSxRef("filter-function/saturate", "saturate()")}}
  - {{CSSxRef("filter-function/sepia", "sepia()")}}
