---
title: border-end-start-radius
slug: Web/CSS/Reference/Properties/border-end-start-radius
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-end-start-radius`** définit un rayon de bordure logique sur un élément, qui correspond à un rayon de bordure physique dépendant de {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}} de l'élément. Ceci est utile pour créer des styles qui fonctionnent quel que soit [l'orientation du texte](/fr/docs/Web/CSS/Reference/Properties/text-orientation) et le [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes).

Cette propriété affecte l'angle entre les côtés block-end et inline-start de l'élément. Par exemple, dans un mode d'écriture `horizontal-tb` avec une direction `ltr`, elle correspond à la propriété {{CSSxRef("border-bottom-left-radius")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-end-start-radius")}}

```css interactive-example-choice
border-end-start-radius: 80px 80px;
```

```css interactive-example-choice
border-end-start-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-end-start-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-end-start-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un coin inférieur gauche arrondi.
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
/* Valeurs detype <length> */
/* Avec une valeur, le coin sera circulaire */
border-end-start-radius: 10px;
border-end-start-radius: 1em;

/* Avec deux valeurs, le coin sera une ellipse */
border-end-start-radius: 1em 2em;

/* Valeurs globales */
border-end-start-radius: inherit;
border-end-start-radius: initial;
border-end-start-radius: revert;
border-end-start-radius: revert-layer;
border-end-start-radius: unset;
```

### Valeurs

- `<length-percentage>`
  - : Cette valeur exprime le rayon de courbure ou les demi-axes d'une ellipse. Pour les valeurs qui expriment une longueur, on peut utiliser n'importe quelle valeur du type de donnée {{CSSxRef("&lt;length&gt;")}}. Les pourcentages sur l'axe horizontal sont relatifs à la largeur de la boîte et à la hauteur de la boîte pour l'axe vertical. Les valeurs négatives sont invalides.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Rayon de bordure avec texte vertical

#### HTML

```html
<div>
  <p class="exempleTexte">Exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-end-start-radius: 10px;
}

.exempleTexte {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: white;
  border-end-start-radius: 10px;
}
```

#### Résultat

{{EmbedLiveSample("Rayon de bordure avec texte vertical", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- La propriété physique correspondante&nbsp;: {{CSSxRef("border-top-right-radius")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
