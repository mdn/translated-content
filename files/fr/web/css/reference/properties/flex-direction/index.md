---
title: flex-direction
slug: Web/CSS/Reference/Properties/flex-direction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`flex-direction`** définit la façon dont les éléments flexibles sont placés dans le conteneur flexible, en définissant l'axe principal et la direction (normale ou inversée).

{{InteractiveExample("Démonstration CSS&nbsp;: flex-direction")}}

```css interactive-example-choice
flex-direction: row;
```

```css interactive-example-choice
flex-direction: row-reverse;
```

```css interactive-example-choice
flex-direction: column;
```

```css interactive-example-choice
flex-direction: column-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Élément Un</div>
    <div>Élément Deux</div>
    <div>Élément Trois</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

On notera que les valeurs `row` et `row-reverse` sont impactées par la direction du conteneur. Si [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) vaut `ltr`, `row` représente l'axe horizontal allant de la gauche vers la droite et `row-reverse` représente le même axe allant de la droite vers la gauche. Si `dir` vaut `rtl`, `row` correspondra à l'axe horizontal orienté de la droite vers la gauche et `row-reverse` de la gauche vers la droite.

## Syntaxe

```css
/* La direction suit une ligne */
flex-direction: row;

/* Semblable à <row> mais dans la direction opposée */
flex-direction: row-reverse;

/* Les lignes de texte sont empilées */
flex-direction: column;

/* Semblable à <column> mais dans la direction opposée */
flex-direction: column-reverse;

/* Valeurs globales */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Valeurs

Les valeurs suivantes sont acceptées&nbsp;:

- `row`
  - : L'axe principal du conteneur flexible suit la direction du texte. Les points **main-start** et **main-end** vont dans la même direction que le contenu.
- `row-reverse`
  - : L'axe principal du conteneur flexible suit la direction du texte. Les points **main-start** et **main-end** vont dans la direction opposée au contenu.
- `column`
  - : L'axe principal du conteneur flexible suit l'axe de bloc (perpendiculaire à la direction du texte). Les points **main-start** et **main-end** correspondent aux points **before** et **after** de {{CSSxRef("writing-mode")}}.
- `column-reverse`
  - : Se comporte comme `column` mais **main-start** et **main-end** sont échangés.

## Accessibilité

Lorsqu'on utilise `flex-direction` avec les valeurs `row-reverse` ou `column-reverse`, on crée une déconnexion entre la présentation visuelle du contenu et l'ordre du DOM. Cela aura un impact négatif pour les utilisateurs qui naviguent à l'aide d'outils d'assistance tels que les les lecteurs d'écran. Si l'ordre visuel est important, les utilisateurs de lecteurs d'écran n'auront pas accès à l'ordre correct pour la lecture.

- [Les boîtes flexibles et la déconnexion par rapport à la navigation au clavier, Tink <sup>(angl.)</sup>](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [L'importance de l'ordre de la source, Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2015/09/source-order-matters.html)
- [Comprendre les règles 1.3 du WCAG sur MDN](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.3_—_créer_du_contenu_pouvant_être_présenté_de_différentes_façons)
- [Comprendre les critères de réussite 1.3.2 WCAG 2.0, W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Inverser les colonnes et les lignes du conteneur flexible

#### HTML

```html
<h4>Un exemple avec column-reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>Un exemple avec row-reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

### Résultat

{{EmbedLiveSample("Inverser les colonnes et les lignes du conteneur flexible", "", 550)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété abrégée CSS {{CSSxRef("flex-flow")}} pour les propriétés CSS `flex-direction` et {{CSSxRef("flex-wrap")}}.
- [Les concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
