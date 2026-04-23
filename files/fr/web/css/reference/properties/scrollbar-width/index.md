---
title: Propriété CSS `scrollbar-width`
short-title: scrollbar-width
slug: Web/CSS/Reference/Properties/scrollbar-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`scrollbar-width`** permet aux auteur·ice·s de définir l'épaisseur souhaitée des barres de défilement d'un élément lorsqu'elles sont affichées.

L'objectif de la propriété `scrollbar-width` est d'optimiser l'espace occupé par la barre de défilement sur une page ou un élément&nbsp;; cet objectif n'est pas lié à l'esthétique de la barre de défilement. Les valeurs prédéfinies de `scrollbar-width` indiquent à l'agent utilisateur si une barre de défilement normale ou plus fine doit être rendue. Évitez d'utiliser `none`, car masquer une barre de défilement a un impact négatif sur [l'accessibilité](#accessibility).

> [!NOTE]
> Pour les éléments qui ne sont défilables que par des moyens programmatiques et non par une interaction directe de l'utilisateur·ice, utilisez la propriété {{CSSxRef("overflow")}} avec une valeur de `hidden` plutôt que `scrollbar-width: none`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* Valeurs globales */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: revert;
scrollbar-width: revert-layer;
scrollbar-width: unset;
```

### Valeurs

- `auto`
  - : La largeur par défaut de la barre de défilement pour la plateforme.
- `thin`
  - : Une variante plus fine de la barre de défilement sur les plateformes qui offrent cette option, ou une barre de défilement plus fine que la largeur par défaut de la plateforme.
- `none`
  - : Aucune barre de défilement n'est affichée, mais l'élément reste défilable.

> [!NOTE]
> Les agents utilisateur doivent appliquer toute valeur de `scrollbar-width` définie sur l'élément racine à la zone d'affichage (<i lang="en">viewport</i> en anglais).

## Accessibilité

Utilisez cette propriété avec prudence — définir `scrollbar-width` sur `thin` ou `none` peut rendre le contenu difficile ou impossible à faire défiler si l'auteur·ice ne fournit pas de mécanisme de défilement alternatif. Bien que les gestes de balayage ou les roues de souris puissent permettre de faire défiler ce contenu, certains appareils n'ont pas d'alternative de défilement.

Le critère WCAG 2.1.1 (Clavier) existe depuis longtemps pour conseiller sur l'accessibilité de base au clavier, et cela devrait inclure le défilement des zones de contenu. Introduit dans WCAG 2.1, le critère 2.5.5 (Taille de la cible) conseille que les cibles tactiles doivent avoir au moins 44px de largeur et de hauteur (bien que le problème soit amplifié sur les écrans haute résolution&nbsp;; des tests approfondis sont recommandés).

- [Comprendre le WCAG sur le MDN, explications de la règle 2.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.1_—_accessibilité_au_clavier_rendre_toutes_les_fonctionnalités_accessibles_au_clavier)
- [Comprendre le WCAG sur le MDN, explications de la règle 2.5](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.5_—_modalités_de_saisie_faciliter_lutilisation_des_fonctionnalités_via_différents_modes_dentrée_au-delà_du_clavier)
- [Comprendre le critère de succès 2.1.1 | Comprendre le WCAG 2.1 du W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Comprendre le critère de succès 2.5.5 | Comprendre le WCAG 2.1 du W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Redimensionner les barres de défilement

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### Résultat

{{EmbedLiveSample("Redimensionner les barres de défilement")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [de mise en forme des barres de défilement CSS](/fr/docs/Web/CSS/Guides/Scrollbars_styling)
- La propriété {{CSSxRef("overflow")}}
- La propriété {{CSSxRef("scrollbar-gutter")}}
- La propriété {{CSSxRef("scrollbar-color")}}
