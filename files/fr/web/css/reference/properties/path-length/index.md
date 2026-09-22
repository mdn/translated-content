---
title: Propriété CSS `path-length`
short-title: path-length
slug: Web/CSS/Reference/Properties/path-length
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`path-length`** permet de définir une longueur totale de chemin, en unités utilisateur·ice. Tous les calculs de chemin sont ensuite mis à l'échelle en utilisant le ratio `path-length` / _(valeur calculée de la longueur du chemin)_ — cela inclut les chemins de texte, les chemins d'animation et diverses opérations de trait.

La propriété `path-length` s'applique seulement sur les éléments imbriqués {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} et {{SVGElement("rect")}} dans un {{SVGElement("svg")}}.

> [!NOTE]
> Si elle est présente, la propriété CSS `path-length` remplace l'attribut {{SVGAttr("pathLength")}} d'un élément SVG.
> Cette propriété ne s'applique pas aux éléments SVG, HTML ou pseudo-éléments autres que ceux listés ci-dessus.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
path-length: none;

/* Valeurs de type <length> */
path-length: 0;
path-length: 70;
path-length: 500;

/* Valeurs globales */
path-length: inherit;
path-length: initial;
path-length: revert;
path-length: revert-layer;
path-length: unset;
```

### Valeurs

- `none`
  - : Aucune longueur de chemin n'est définie par l'auteur·ice&nbsp;; la longueur de chemin calculée par l'agent utilisateur est utilisée pour tous les calculs liés au chemin.

- `<length>`
  - : Une valeur positive ou nulle, sans unité, représentant une longueur de chemin totale définie par l'auteur·ice, en unités utilisateur·ice.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple définit un chemin et montre comment appliquer une longueur de chemin à celui-ci en utilisant la propriété CSS `path-length`.

#### SVG

Notre SVG définit un seul élément SVG {{SVGElement("path")}} courbé avec un trait ({{SVGAttr("stroke")}}) coloré. Il inclut un attribut {{SVGAttr("stroke-dasharray")}} qui définit un motif de tirets réguliers pour le trait.

```html live-sample___basic-path-length live-sample___path-length-animation
<svg viewBox="0 0 600 200">
  <path
    d="M 30 100 C 150 20, 250 180, 380 100 S 520 20, 570 100"
    fill="none"
    stroke="#D85A30"
    stroke-width="4"
    stroke-dasharray="24 24"></path>
</svg>
```

#### CSS

On définit une valeur `path-length` sur le `<path>`&nbsp;:

```css live-sample___basic-path-length
path {
  path-length: 500;
}
```

#### Résultat

{{EmbedLiveSample("basic-path-length", "100%", 250)}}

Le fait de définir une grande valeur pour `path-length` entraîne des tirets plus petits et plus fréquents.

### Animer une `path-length`

Un des principaux avantages de rendre `path-length` disponible en tant que propriété CSS est que vous pouvez lui appliquer des fonctionnalités CSS standard telles que les [animations](/fr/docs/Web/CSS/Guides/Animations) et les [transitions](/fr/docs/Web/CSS/Guides/Transitions). Cet exemple s'appuie sur le précédent, montrant comment animer un `path-length` avec une animation CSS.

#### HTML et SVG

Cet exemple inclut le même `<path>` SVG que le précédent. De plus, il inclut un élément HTML [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) qui peut être utilisé pour modifier la valeur de `path-length` appliquée au chemin (`<path>`) à l'exécution. Nous incluons également un élément HTML {{HTMLElement("output")}} pour afficher la valeur actuelle du curseur.

```html live-sample___path-length-animation
<div>
  <label for="path-slider">Ajustez path-length</label>
  <input type="range" id="path-slider" min="0" max="800" value="200" />
  <output>200</output>
</div>
```

#### CSS

Sur l'élément {{CSSxRef(":root")}}, nous définissons une [propriété personnalisée CSS](/fr/docs/Web/CSS/Reference/Properties/--*) appelée `--longueur-chemin` et lui donnons une valeur initiale de `200`. Nous définissons ensuite la valeur de `path-length` de l'élément `<path>` sur la propriété `--longueur-chemin`, et lui appliquons une {{CSSxRef("animation")}} qui s'exécute un nombre infini de fois et alterne entre l'avant et l'arrière.

```css live-sample___path-length-animation
:root {
  --longueur-chemin: 200;
}

path {
  path-length: var(--longueur-chemin);
  animation: anim-longueur-chemin 2s alternate infinite ease-in-out;
}
```

```css hidden live-sample___path-length-animation
div {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
}
```

Ensuite, nous définissons le bloc {{CSSxRef("@keyframes")}} pour l'animation — il anime la propriété `path-length` entre la valeur `--longueur-chemin` et la valeur `--longueur-chemin` multipliée par `1.5`.

```css live-sample___path-length-animation
@keyframes anim-longueur-chemin {
  from {
    path-length: var(--longueur-chemin);
  }

  to {
    path-length: calc(var(--longueur-chemin) * 1.5);
  }
}
```

#### JavaScript

Nous commençons notre script en récupérant les références aux éléments `<input type="range">`, `<output>` et `:root`.

```js live-sample___path-length-animation
const slider = document.querySelector("input");
const output = document.querySelector("output");
const rootElem = document.querySelector(":root");
```

Ensuite, nous ajoutons un gestionnaire d'évènements `input` au curseur de plage afin que, lorsque sa valeur est modifiée, le `textContent` de l'élément `<output>` et la valeur de la propriété personnalisée `--longueur-chemin` soient définis pour être égaux à la nouvelle valeur du curseur.

```js live-sample___path-length-animation
slider.addEventListener("input", () => {
  output.textContent = slider.value;
  rootElem.style.setProperty("--longueur-chemin", slider.value);
});
```

#### Résultats

{{EmbedLiveSample("path-length-animation", "100%", 250)}}

Ajustez le curseur et notez comment des valeurs plus grandes entraînent une taille de tiret plus petite.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("pathLength")}}
