---
title: Propriété CSS `transform-style`
short-title: transform-style
slug: Web/CSS/Reference/Properties/transform-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`transform-style`** définit si les éléments-fils d'un éléments sont positionnés dans l'espace tridimensionnel ou s'ils sont aplatis dans le plan de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: transform-style")}}

```css interactive-example-choice
transform-style: flat;
```

```css interactive-example-choice
transform-style: preserve-3d;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all layer" id="example-element">
    <p>Parent</p>
    <div class="numeral"><code>rotate3d(1, 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css interactive-example
.layer {
  background: #623e3f;
  border-radius: 0.75rem;
  color: white;
  transform: perspective(200px) rotateY(30deg);
}

.numeral {
  background-color: #ffba08;
  border-radius: 0.2rem;
  color: black;
  margin: 1rem;
  padding: 0.2rem;
  transform: rotate3d(1, 1, 1, 45deg);
}
```

Si les éléments sont aplatis, les éléments-fils n'existeront pas dans leur propre espace tridimensionnel.

Comme cette propriété n'est pas héritée, elle doit être définie pour tous les descendants non-feuilles de l'élément.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
transform-style: preserve-3d;
transform-style: flat;

/* Valeurs globales */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: revert-layer;
transform-style: unset;
```

### Valeurs

- `flat`
  - : Indique que les fils de l'éléments sont positionnés dans le plan de l'élément.
- `preserve-3d`
  - : Indique que les fils de l'élément ciblé doivent être positionnés dans l'espace tridimensionnel.

## Description

La spécification répertorie certaines [valeurs de regroupement de propriétés <sup>(angl.)</sup>](https://drafts.csswg.org/css-transforms-2/#grouping-property-values), qui exigent que l'agent utilisateur crée une représentation aplatie des éléments descendants avant de pouvoir les appliquer, et donc force l'élément à avoir une [valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) de `transform-style: flat`, même lorsque `preserve-3d` est défini. Ces valeurs de propriété incluent&nbsp;:

- {{CSSxRef("overflow")}}&nbsp;: toute valeur autre que `visible` ou `clip`.
- {{CSSxRef("opacity")}}&nbsp;: toute valeur inférieure à `1`.
- {{CSSxRef("filter")}}&nbsp;: toute valeur autre que `none`.
- {{CSSxRef("clip")}}&nbsp;: toute valeur autre que `auto`.
- {{CSSxRef("clip-path")}}&nbsp;: toute valeur autre que `none`.
- {{CSSxRef("isolation")}}&nbsp;: valeur utilisée de `isolate`.
- {{CSSxRef("mask-image")}}&nbsp;: toute valeur autre que `none`.
- {{CSSxRef("mask-border-source")}}&nbsp;: toute valeur autre que `none`.
- {{CSSxRef("mix-blend-mode")}}&nbsp;: toute valeur autre que `normal`.
- {{CSSxRef("contain")}}&nbsp;: `paint` et toute autre combinaison propriété/valeur qui provoque un confinement de peinture. Cela inclut toute propriété qui affecte la valeur utilisée de la propriété `contain`, comme `content-visibility: hidden`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Démonstration du style de transformation

Dans cet exemple, nous avons un cube 3D créé à l'aide de transformations. Le conteneur parent des faces du cube a `transform-style: preserve-3d` défini par défaut, il est donc transformé dans l'espace 3D et vous pouvez le voir comme prévu.

Nous fournissons également une case à cocher permettant de basculer entre cela et `transform-style: flat`. Dans cet état alternatif, les faces du cube sont toutes aplaties sur le plan de leur parent, et vous pourriez ne pas être en mesure de les voir du tout, selon le navigateur que vous utilisez.

#### HTML

```html
<section id="example-element">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>

<div class="checkbox">
  <label for="preserve"><code>preserve-3d</code></label>
  <input type="checkbox" id="preserve" checked />
</div>
```

#### CSS

```css
#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### JavaScript

```js
const cube = document.getElementById("example-element");
const checkbox = document.getElementById("preserve");

checkbox.addEventListener("change", () => {
  cube.style.transformStyle = checkbox.checked ? "preserve-3d" : "flat";
});
```

#### Résultat

{{EmbedLiveSample("Démonstration du style de transformation", "100%", 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
