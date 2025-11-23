---
title: <corner-shape-value>
slug: Web/CSS/Reference/Values/corner-shape-value
original_slug: Web/CSS/corner-shape-value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<corner-shape-value>`** qui décrit la forme d'un coin de conteneur. Il est utilisé par la propriété abrégée {{CSSxRef("corner-shape")}} et ses [propriétés constitutives](/fr/docs/Web/CSS/corner-shape#propriétés_constitutives) pour définir la forme à appliquer aux coins concernés du conteneur.

## Syntaxe

Le type de donnée `<corner-shape-value>` peut prendre la fonction {{CSSxRef("superellipse()")}} qui définit une forme personnalisée, ou l'une des six valeurs-mots-clés qui correspondent à des valeurs courantes de `superellipse()`.

### Valeurs

- {{CSSxRef("superellipse()")}}
  - : Définit une forme de superellipse personnalisée pour le coin. Un paramètre négatif crée une courbe vers l'intérieur (concave), tandis qu'un paramètre positif crée une courbe vers l'extérieur (convexe).
- Mots-clés
  - : Les mots-clés disponibles sont&nbsp;:
    - `bevel`
      - : Définit un coin droit et diagonal, ni convexe ni concave. Le mot-clé `bevel` est équivalent à `superellipse(0)`.
    - `notch`
      - : Définit un coin carré concave à 90 degrés. Le mot-clé `notch` est équivalent à `superellipse(-infinity)`.
    - `round`
      - : Définit une ellipse convexe ordinaire, qui correspond au coin arrondi standard créé par {{CSSxRef("border-radius")}} sans `corner-shape` appliqué. Le mot-clé `round` est équivalent à `superellipse(1)`. Il s'agit de la valeur initiale (par défaut) pour toutes les propriétés `corner-shape`.
    - `scoop`
      - : Définit une ellipse concave ordinaire. Le mot-clé `scoop` est équivalent à `superellipse(-1)`.
    - `square`
      - : Définit un coin carré convexe à 90 degrés, qui est la forme de coin par défaut lorsqu'aucun `border-radius` (ou `border-radius: 0`) n'est appliqué. Le mot-clé `square` est équivalent à `superellipse(infinity)`.
    - `squircle`
      - : Définit un «&nbsp;squircle&nbsp;», une courbe convexe intermédiaire entre `round` et `square`. Le mot-clé `squircle` est équivalent à `superellipse(2)`.

> [!NOTE]
> Il est possible d'animer de façon fluide différentes valeurs de `superellipse()` et de passer d'un mot-clé de forme de coin à un autre, car l'animation interpole entre leurs équivalents `superellipse()`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des valeurs `<corner-shape-value>`

Dans cet exemple, un menu déroulant permet de sélectionner différentes valeurs `<corner-shape-value>` et un curseur ajuste la valeur de {{CSSxRef("border-radius")}} du conteneur. Cela permet de visualiser l'effet des différents mots-clés et des paramètres de la fonction `superellipse()`.

La propriété `corner-shape` définit la forme des coins de la boîte, tandis que la zone à laquelle la forme s'applique est déterminée par la propriété `border-radius`. Le code est masqué pour plus de clarté, mais vous pouvez trouver [une explication complète des valeurs de `corner-shape`](/fr/docs/Web/CSS/corner-shape#comparaison_des_valeurs_corner-shape) ainsi que d'autres exemples sur la page de référence {{CSSxRef("corner-shape")}}.

```html hidden live-sample___value-comparison
<form>
  <div>
    <label for="corner-shape-choice"
      >Choisissez une valeur corner-shape&nbsp;:</label
    >
    <select id="corner-shape-choice">
      <optgroup label="Mots-clés">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Fonctions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider"
      >Choisissez une valeur border-radius&nbsp;:</label
    >
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

```css hidden live-sample___value-comparison
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___value-comparison
const rectangle = document.querySelector("section");
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

{{EmbedLiveSample("value-comparison", "100%", "300")}}

> [!NOTE]
> Voir aussi l'exemple de [comparaison des valeurs de la fonction `superellipse()`](/fr/docs/Web/CSS/Reference/Values/superellipse#comparaison_des_valeurs_superellipse).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("corner-shape")}}
- La propriété {{CSSxRef("border-radius")}}
- La fonction {{CSSxRef("superellipse()")}}
- Le module des [bordures et décorations de boîte CSS](/fr/docs/Web/CSS/CSS_borders_and_box_decorations)
