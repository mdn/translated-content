---
title: border-start-end-radius
slug: Web/CSS/Reference/Properties/border-start-end-radius
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-start-end-radius`** définit un rayon de bordure logique sur un élément, qui correspond à un rayon de bordure physique selon les valeurs de {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}} de l'élément. Ceci est utile pour créer des styles qui fonctionnent quel que soit [l'orientation du texte](/fr/docs/Web/CSS/Reference/Properties/text-orientation) et le [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes).

Cette propriété affecte le coin entre les côtés block-start et inline-end de l'élément. Par exemple, en mode d'écriture `horizontal-tb` avec une direction `ltr`, elle correspond à la propriété {{CSSxRef("border-top-right-radius")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-start-end-radius")}}

```css interactive-example-choice
border-start-end-radius: 80px 80px;
```

```css interactive-example-choice
border-start-end-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-start-end-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-start-end-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un coin arrondi en haut à droite.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
/* Avec une valeur, le coin sera circulaire */
border-start-end-radius: 10px;
border-start-end-radius: 1em;

/* Avec deux valeurs, le coin sera une ellipse */
border-start-end-radius: 1em 2em;

/* Valeurs globales */
border-start-end-radius: inherit;
border-start-end-radius: initial;
border-start-end-radius: revert;
border-start-end-radius: revert-layer;
border-start-end-radius: unset;
```

### Valeurs

- `<length-percentage>`
  - : Cette valeur exprime le rayon de courbure ou les demi-axes d'une ellipse. Pour les valeurs qui expriment une longueur, on peut utiliser n'importe quelle valeur du type de donnée {{CSSxRef("&lt;length&gt;")}}. Les pourcentages sur l'axe horizontal sont relatifs à la largeur de la boîte et à la hauteur de la boîte pour l'axe vertical. Les valeurs négatives sont invalides.

## Définition formelle

{{CSSInfo}}

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Bordure arrondie avec un texte vertical

### HTML

```html
<div>
  <p class="exempleTexte">Exemple</p>
</div>
```

### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-start-end-radius: 10px;
}

.exempleTexte {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: white;
  border-start-end-radius: 10px;
}
```

### Résultat

{{EmbedLiveSample("Bordure arrondie avec un texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- La propriété physique correspondante&nbsp;: {{CSSxRef("border-bottom-left-radius")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
