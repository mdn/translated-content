---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
original_slug: Web/CSS/@view-transition
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@view-transition`** est utilisée pour choisir les documents actuels et de destination qui subiront [une transition d'affichage](/fr/docs/Web/API/View_Transition_API), dans le cas d'une navigation entre plusieurs documents.

Pour qu'une transition entre documents fonctionne, les documents — actuel et cible — de la navigation doivent également provenir de la même origine.

## Syntaxe

```css
@view-transition {
  navigation: auto;
}
```

### Descripteurs

- `navigation`
  - : Spécifie l'effet que cette règle @ aura sur le comportement de transition d'affichage du document. Les valeurs possibles sont&nbsp;:
    - `auto`&nbsp;: Le document subira une transition d'affichage lorsqu'il prendra part à la navigation, à condition que celle-ci soit d'une même origine, sans redirection inter-origines, et que son {{domxref("NavigateEvent.navigationType", "navigationType")}} soit `traverse`, `push`, ou `replace`. Dans le cas de `push` ou `replace`, la navigation doit être initiée par un·e utilisateur·ice interagissant avec le contenu de la page, et non par une fonctionnalité de l'interface utilisateur du navigateur.

    - `none`&nbsp;: Le document ne subira pas de transition d'affichage.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Affichage de la page de transition

Les extraits de code suivants affichent des concepts clés utilisés dans une démo de transition de page.
La démo utilise des transitions de vue transversale&nbsp;; une demi-deuxième transition qui se produit lors de la navigation entre deux pages d'un site.
Pour la démo complète, voir le [Afficher la démonstration de l'application multipages avec transitions](https://mdn.github.io/dom-examples/view-transitions/mpa/).

La règle `@view-transition` est spécifiée dans le CSS pour vos documents actuels et de destination d'une navigation afin de les inclure tous les deux dans la transition d'affichage&nbsp;:

```css
@view-transition {
  navigation: auto;
}
```

En plus de `@view-transition`, nous utilisons la règle {{cssxref("@keyframes")}} pour définir deux animations d'images clés et utilisons la propriété abrégée {{cssxref("animation")}} pour appliquer ces animations d'images clés aux éléments des pages sortantes ({{cssxref("::view-transition-old()")}}) et entrantes ({{cssxref("::view-transition-new()")}}) que nous voulons animer.

```css
/* Créer une animation personnalisée */
@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Appliquer l'animation personnalisée aux anciens et nouveaux états de page */
::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

Voir la démonstration de [l'application multipages avec transitions](https://mdn.github.io/dom-examples/view-transitions/mpa/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair()")}}
- L'[API View Transition](/fr/docs/Web/API/View_Transition_API)
- [Règle CSS @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- [Fonctions des règles CSS @](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
