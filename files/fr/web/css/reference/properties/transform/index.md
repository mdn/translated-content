---
title: Propriété CSS `transform`
short-title: transform
slug: Web/CSS/Reference/Properties/transform
l10n:
  sourceCommit: b069bf45c0a5706f838f9e46d8494cd7babd605a
---

La propriété [CSS](/fr/docs/Web/CSS) **`transform`** permet de faire pivoter, redimensionner, incliner ou déplacer un élément.
Elle modifie l'espace de coordonnées du [modèle de mise en forme visuelle](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model) en CSS.

Si la propriété est différente de `none`, un [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) est créé.
Dans ce cas, l'élément agît comme le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) pour les éléments qu'il contient et qui ont `position: fixed;` ou `position: absolute;`.

Vous pouvez également utiliser les propriétés de transformation individuelles&nbsp;: {{CSSxRef("translate")}}, {{CSSxRef("rotate")}} et {{CSSxRef("scale")}}. Ces propriétés sont appliquées dans l'ordre suivant&nbsp;: `translate`, `rotate`, `scale` et enfin `transform`.

> [!WARNING]
> Seuls certains éléments peuvent être transformés.
> Les éléments dont la disposition est gérée avec des [boîtes en ligne non-remplacées](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model#les_éléments_en_ligne_et_les_boîtes_en_ligne), des [colonnes de tableau](/fr/docs/Web/HTML/Reference/Elements/col) ou des [groupes de colonnes de tableau](/fr/docs/Web/HTML/Reference/Elements/colgroup) ne peuvent pas être transformés.

{{InteractiveExample("Démonstration CSS&nbsp;: transform")}}

```css interactive-example-choice
transform: matrix(1, 2, 3, 4, 5, 6);
```

```css interactive-example-choice
transform: translate(120px, 50%);
```

```css interactive-example-choice
transform: scale(2, 0.5);
```

```css interactive-example-choice
transform: rotate(0.5turn);
```

```css interactive-example-choice
transform: skew(30deg, 20deg);
```

```css interactive-example-choice
transform: scale(0.5) translate(-100%, -100%);
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
/* Valeurs avec un mot-clé */
transform: none;

/* Valeurs fonctionnelles */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Valeurs avec plusieurs fonctions */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate3d(10px, 0, 20px) rotateY(30deg);

/* Valeurs globales */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

La propriété `transform` peut être définie avec une valeur ayant pour mot-clé `none` ou avec une ou plusieurs valeurs de type `<transform-function>`.

### Valeurs

- {{CSSxRef("&lt;transform-function&gt;")}}
  - : Une ou plusieurs [fonctions de transformation CSS](/fr/docs/Web/CSS/Reference/Values/transform-function) à appliquer.
    Les fonctions de transformation sont combinées de gauche à droite — chaque fonction établit un nouvel espace de coordonnées pour la fonction suivante, et ainsi de suite — de sorte que le résultat visuel correspond à l'ordre écrit des fonctions. Alternativement, en gardant l'espace de coordonnées parent fixe, la même transformation peut être décrite comme l'application des fonctions dans l'ordre inverse (de droite à gauche).
- `none`
  - : Aucune transformation n'est appliquée.

## Accessibilité

Les animations de déplacement ou de zoom peuvent poser des problèmes d'accessibilité en déclenchant certaines migraines. Si vous devez inclure des animations sur votre site web, vous devez fournir aux utilisateur·ice·s une méthode qui leur permette de réduire voire de désactiver les animations sur l'ensemble du site.

À cet égard, on peut utiliser la caractéristique média {{CSSxRef("@media/prefers-reduced-motion", "prefers-reduced-motion")}} qui permet d'utiliser une requête média pour désactiver les animations si l'utilisateur·ice a indiqué une telle préférence avec son système / son navigateur.

Pour en savoir plus&nbsp;:

- [Comprendre de WCAG sur le MDN, explication de la règle 2.3](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.3_—_crises_et_réactions_physiques_ne_concevez_pas_de_contenu_susceptible_de_provoquer_des_crises_ou_des_réactions_physiques)
- [Comprendre le critère de succès 2.3.3 | Comprendre le WCAG 2.1 du W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Déplacer et pivoter un élément

#### HTML

```html
<div>L'élément transformé</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### Résultat

{{EmbedLiveSample("Déplacer et pivoter un élément", 400, 170)}}

### Comparer l'ordre des fonctions de transformation

L'ordre des fonctions de transformation est important.
Dans cet exemple, deux boîtes sont pivotées et déplacées par les mêmes valeurs, mais les fonctions sont dans l'ordre inverse. Les lignes pointillées indiquent l'axe horizontal avant et après la rotation.

#### HTML

```html
<div class="original"></div>
<div class="un">1</div>
<div class="deux">2</div>
```

#### CSS

```css hidden
div {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 200px;
  top: 50px;
  font-size: 4rem;
  line-height: 200px;
  text-align: center;
}
.original {
  border: 1px dashed;
}
.original::before,
.original::after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original::after {
  transform: rotate(135deg);
}
.un {
  background-color: #cccccc;
}
.deux {
  background-color: #d6bb72;
}
```

```css
.un {
  transform: translateX(200px) rotate(135deg);
}
.deux {
  transform: rotate(135deg) translateX(200px);
}
```

#### Résultat

{{EmbedLiveSample("Comparer l'ordre des fonctions de transformation", 400, 460)}}

- La boîte 1 (premier `translateX()`, puis `rotate()`)&nbsp;: L'espace de coordonnées se déplace d'abord de `200px` le long de l'axe X, puis pivote de `135deg` dans cet espace décalé, de sorte que l'élément se retrouve à droite de sa position d'origine, pivoté.
- La boîte 2 (premier `rotate()`, puis `translateX()`)&nbsp;: L'espace de coordonnées pivote d'abord de `135deg`, de sorte que l'élément se déplace ensuite de `200px` le long de l'axe pivoté, dans la direction indiquée par les lignes pointillées.
- Veuillez consulter [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using) et {{CSSxRef("&lt;transform-function&gt;")}} pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}} avec toutes les fonctions de transformation expliquées.
- Propriétés CSS individuelles&nbsp;: {{CSSxRef("translate")}}, {{CSSxRef("rotate")}} et {{CSSxRef("scale")}} (il n'y a pas de propriété `skew`).
- L'attribut SVG {{SVGAttr("transform")}}
- Outil en ligne pour visualiser les fonctions de transformation CSS&nbsp;: [Terrain d'essai de transformations CSS <sup>(angl.)</sup>](https://css-transform.moro.es/)
