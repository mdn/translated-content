---
title: <blend-mode>
slug: Web/CSS/Reference/Values/blend-mode
original_slug: Web/CSS/blend-mode
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<blend-mode>`** définit la façon dont les couleurs doivent apparaître lorsque des éléments se superposent. Il est utilisé dans les propriétés {{CSSxRef("background-blend-mode")}} et {{CSSxRef("mix-blend-mode")}}.

## Syntaxe

Une valeur de type de données `<blend-mode>` s'écrit avec l'un des mots-clés suivants.

### Valeurs possibles

- `normal`
  - : La couleur finale obtenue est la couleur du premier plan, quelle que soit la couleur de l'arrière-plan. On obtient ainsi un effet similaire à la superposition de deux feuilles de papier opaques.
- `multiply`
  - : La couleur finale est obtenue en multipliant les couleurs du premier plan et de l'arrière-plan.
    Si une des couches est noire, le résultat obtenu sera une image noire. Si une des couches est blanche, cela ne modifiera pas l'autre image. On obtient ainsi un effet semblable à la superposition de deux transparents.
- `screen`
  - : La couleur finale est obtenue en : inversant les couleurs des deux plans, en les multipliant et en inversant la couleur obtenue. Si une des couches est noire, le résultat obtenu sera l'image de l'autre couche. Si une des couches est blanche, l'image obtenue sera blanche. L'effet obtenu est semblable à la projection de deux images sur un écran.
- `overlay`
  - : La couleur finale est celle décrite par `multiply` si l'arrière-plan est plus sombre ou de `screen` si elle est plus claire. On a un effet semblable à `hard-light` avec les couches interverties.
- `darken`
  - : La couleur finale est la couleur la plus sombre des deux couches.
- `lighten`
  - : La couleur finale est la couleur la plus claire des deux couches.
- `color-dodge`
  - : La couleur finale est obtenue en divisant la couleur de l'arrière-plan avec l'inverse de la couleur du premier plan.
    Un premier-plan noir n'entraînera aucun changement.
- `color-burn`
  - : La couleur finale est obtenu en inversant la couleur de l'arrière-plan qui sera divisée par la couleur du premier-plan puis inversée. Un premier-plan blanc n'entraînera aucun changement et un premier-plan qui possède exactement l'inverse de l'arrière-plan entraînera une image noire.
- `hard-light`
  - : La couleur finale est le résultat de `multiply` si le premier plan est plus sombre ou de `screen` si la couleur de premier-plan est plus claire. L'effet obtenu est équivalent à `overlay` avec les deux couches interverties.
- `soft-light`
  - : La couleur finale obtenue est semblable à `hard-light`, mais est plus douce*`.`*
- `difference`
  - : La couleur finale est obtenue en soustrayant la couleur la plus sombre à la couleur la plus claire. Une couche noire n'aura aucun effet et une couche blanche inversera l'autre image.
- `exclusion`
  - : La couleur finale obtenue est semblable à `difference` avec moins de contraste. Comme pour `difference`, une couche noire n'aura aucun effet et une couche blanche inversera l'autre couche.
- `hue`
  - : La couleur finale aura la teinte de la couleur du premier-plan et la saturation et la luminosité de la couleur de l'arrière-plan.
- `saturation`
  - : La couleur finale aura la saturation de la couleur du premier plan et la teinte et la luminosité de la couleur de l'arrière-plan.
- `color`
  - : La couleur finale aura la teinte et la saturation du premier plan et la luminosité de l'arrière-plan. Cet effet conserve les niveaux de gris et peut être utilisé pour coloriser le premier plan.
- `luminosity`
  - : La couleur finale aura la luminosité de la couleur du premier plan et la teinte et la saturation de la couleur de l'arrière-plan.

## Exemples

### Exemple avec `normal`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

Essayez d'autres valeurs pour `background-blend-mode` pour observer les différents résultats.

{{ EmbedLiveSample('exemple_avec_normal', "100%", "300") }}

### Comparaison des différentes valeurs de `background-blend-mode`

```html hidden
<div class="container"></div>
```

```css
.container {
  width: 720px;
  height: 760px;
  display: grid;
  grid: auto-flow 190px / repeat(4, 180px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container div div {
  margin-left: 15px;
  width: 150px;
  height: 150px;
  background: url("br.png"), url("tr.png");
}

.container div p {
  line-height: 30px;
  margin: 0;
  color: #a33333;
  text-align: center;
}
```

```js
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.style.backgroundBlendMode = item;

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

On crée plusieurs éléments HTML `<div>` en parcourant une liste et on applique une valeur différente de `backgroundBlendMode` à chacun.

{{ EmbedLiveSample('comparaison_des_différentes_valeurs_de_background-blend-mode', "100%", "780") }}

### Comparaison des différentes valeurs de `mix-blend-mode`

```html hidden
<div class="container"></div>
```

```css hidden
.container {
  width: 640px;
  height: 800px;
  display: grid;
  grid: auto-flow 160px / repeat(4, 160px);
  border-top: 1px solid #d8d8d8;
  border-left: 1px solid #d8d8d8;
}

.container > div {
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}

.container > div > div {
  position: relative;
  margin-left: 20px;
  width: 120px;
  height: 120px;
}

.container div p {
  margin: 0;
  line-height: 30px;
  color: #a33333;
  text-align: center;
}
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
  isolation: isolate; /* Sans isolation, la couleur de fond sera prise en compte */
  position: relative;
}
```

```js hidden
const list = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
  "plus-darker",
  "plus-lighter",
];

const containerElem = document.querySelector(".container");

list.forEach((item) => {
  const innerElem = document.createElement("div");
  innerElem.innerHTML = `
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  `;

  innerElem.querySelectorAll(".circle").forEach((circle) => {
    circle.style.mixBlendMode = item;
  });

  const textElem = document.createElement("p");
  textElem.innerText = item;

  const outerElem = document.createElement("div");
  outerElem.appendChild(textElem);
  outerElem.appendChild(innerElem);

  containerElem.appendChild(outerElem);
});
```

Dans l'exemple suivant, on crée plusieurs éléments `<div>` en parcourant une liste et on applique une valeur différente de `mixBlendMode` à chacun.

{{ EmbedLiveSample('comparaison_des_différentes_valeurs_de_mix-blend-mode', "100%", "820") }}

### Comparaison visuelle des modes de fusion

Dans l'exemple suivant, un `<div>` possède deux images de fond&nbsp;: un logo Firefox au-dessus d'un dégradé linéaire. En dessous, un menu `<select>` permet de changer la valeur de `background-blend-mode` appliquée au `<div>`, afin de comparer les différents effets de mode de fusion.

#### HTML

```html
<div></div>
<p>Choisissez un mode de fusion&nbsp;:</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background:
    url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png")
      no-repeat center,
    linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");

selectElem.addEventListener("change", () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### Résultat

{{EmbedLiveSample('comparaison_visuelle_des_modes_de_fusion', '100%', 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés utilisant des valeurs de ce type :
  - {{CSSxRef("background-blend-mode")}}
  - {{CSSxRef("mix-blend-mode")}}

- [Les modes de fusion sur Wikipédia (en anglais)](https://en.wikipedia.org/wiki/Blend_modes)
- [La référence CSS](/fr/docs/Web/CSS/Reference)
