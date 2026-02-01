---
title: border-image-outset
slug: Web/CSS/Reference/Properties/border-image-outset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-image-outset`** définit la distance de dépassement de l'[image de bordure](/fr/docs/Web/CSS/Reference/Properties/border-image) d'un élément par rapport à sa boîte de bordure.

Les parties de l'image de bordure qui sont affichées en dehors de la boîte de bordure de l'élément avec `border-image-outset` ne déclenchent pas de barres de défilement d'overflow et ne capturent pas les évènements de souris.

{{InteractiveExample("Démonstration CSS&nbsp;: border-image-outset")}}

```css interactive-example-choice
border-image-outset: 0;
```

```css interactive-example-choice
border-image-outset: 15px;
```

```css interactive-example-choice
border-image-outset: 30px;
```

```css interactive-example-choice
border-image-outset: 40px;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Ceci est une boîte entourée d'une bordure.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
border-image-outset: 1rem;

/* Valeurs de type <number> */
border-image-outset: 1.5;

/* côtés verticaux | horizontaux */
border-image-outset: 1 1.2;

/* haut | côtés horizontaux | bas */
border-image-outset: 30px 2 45px;

/* haut | droit | bas | gauche */
border-image-outset: 7px 12px 14px 5px;

/* Valeurs globales */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: revert;
border-image-outset: revert-layer;
border-image-outset: unset;
```

La propriété `border-image-outset` peut être définie à l'aide d'une, deux, trois ou quatre valeurs. Chaque valeur est une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un nombre ({{CSSxRef("&lt;number&gt;")}}). Les valeurs négatives sont invalides (la déclaration est alors ignorée).

1. Si **une** valeur est indiquée, elle s'applique **aux quatre côtés**.
2. Si **deux** valeurs sont indiquées, la première s'applique aux côtés **haut et bas** et la seconde s'applique aux côtés **gauche et droit**.
3. Si **trois** valeurs sont indiquées, la première s'applique au côté **haut**, la deuxième aux côtés **gauche et droit**, et la troisième au côté **bas**.
4. Si **quatre** valeurs sont indiquées, elles s'appliquent dans le sens des aiguilles d'une montre&nbsp;: la première au côté **haut**, la seconde au côté **droit**, la troisième au côté **bas**, et la quatrième au côté **gauche**.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du dépassement de l'image de bordure en tant que dimension — un nombre avec une unité.
- {{CSSxRef("&lt;number&gt;")}}
  - : La taille du dépassement de l'image de bordure en tant que multiple des largeurs des bordures ({{CSSxRef("border-width")}}) correspondantes de l'élément. Par exemple, si un élément a `border-width: 1em 2px 0 1.5rem` et `border-image-outset: 2`, la valeur finale de `border-image-outset` sera calculée comme `2em 4px 0 3rem`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Décaler la bordure d'une image

#### HTML

```html
<div id="outset">Un élément avec une bordure décalée&nbsp;!</div>
```

#### CSS

```css
#outset {
  width: 10rem;
  background: #cceeff;
  border: 1.4rem solid;
  border-image: radial-gradient(#ffff22, #5555ff) 40;
  border-image-outset: 1.5; /* 1.5 × 1.4rem = 2.1rem */
  margin: 2.1rem;
}
```

#### Résultat

{{EmbedLiveSample("Décaler la bordure d'une image", "auto", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les arrière-plans et bordures](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Apprendre le CSS&nbsp;: les arrière-plans et les bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Images de bordure dans CSS&nbsp;: un domaine clé pour l'Interop 2023](/fr/blog/border-images-interop-2023/) sur le blog MDN (2023)
