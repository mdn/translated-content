---
title: CSS Scrollbars
slug: Web/CSS/CSS_scrollbars_styling
---

{{CSSRef}} {{SeeCompatTable}}

Le module de spécification _CSS Scrollbars_ standardise la mise en forme des barres de défilement (_scrollbar_) notamment introduite en 2000 avec Windows IE 5.5.

## Exemples

Dans l'exemple qui suit, on crée une barre de défilement fine avec une piste verte et un curseur violet.

### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
```

### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Référence

### Propriétés

- {{cssxref("scrollbar-width")}}
- {{cssxref("scrollbar-color")}}

## Accessibilité

Lors du paramétrage des barres de défilement, on s'assurera que le contraste avec les éléments alentour est suffisant et que la surface d'interaction est suffisamment grande pour les personnes qui utilisent une interface tactile.

- [Règles de base pour l'utilisabilité des barres de défilement, par Adrian Roselli (en anglais)](http://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("-ms-overflow-style")}}
