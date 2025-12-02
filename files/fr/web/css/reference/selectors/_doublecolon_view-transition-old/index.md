---
title: ::view-transition-old()
slug: Web/CSS/Reference/Selectors/::view-transition-old
original_slug: Web/CSS/::view-transition-old
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::view-transition-old()`** représente l'état de vue «&nbsp;<i lang="en">old</i>&nbsp;» d'une transition de vue — une représentation instantanée de l'état avant la transition.

Lors d'une transition de vue, `::view-transition-old()` est inclus dans l'arbre des pseudo-éléments associés comme expliqué dans [L'arbre des pseudo-éléments de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#larbre_des_pseudo-éléments_de_transition_de_vue), à condition qu'il y ait un état de vue «&nbsp;<i lang="en">old</i>&nbsp;» à représenter. Il est seulement un enfant d'un {{cssxref("::view-transition-image-pair()")}}, et n'a jamais d'enfants.

C'est un élément remplacé et peut donc être manipulé avec des propriétés telles que {{cssxref("object-fit")}} et {{cssxref("object-position")}}. Il a des dimensions naturelles égales à la taille du contenu.

Le style par défaut suivant est inclus dans la feuille de style de l'agent utilisateur&nbsp;:

```css
:root::view-transition-old(*),
:root::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}

/* Keyframes pour le mélange lorsqu'il y a 2 images */
@keyframes -ua-mix-blend-mode-plus-lighter {
  from {
    mix-blend-mode: plus-lighter;
  }
  to {
    mix-blend-mode: plus-lighter;
  }
}

@keyframes -ua-view-transition-fade-out {
  to {
    opacity: 0;
  }
}
```

> [!NOTE]
> Des styles de transition de vue supplémentaires sont également configurés pour animer `::view-transition-old()`. Ceux-ci sont générés dynamiquement pendant la transition de vue&nbsp;; voir les sections [configurer les pseudo-éléments de transition <sup>(angl.)</sup>](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) et [mettre à jour les styles des pseudo-éléments <sup>(angl.)</sup>](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) de la spécification pour plus de détails.

## Syntaxe

```css-nolint
::view-transition-old([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Paramètres

- `*`
  - : Le sélecteur universel (`*`) sélectionne tous les groupes de transition de vue sur une page.
- `root`
  - : Fait correspondre le pseudo-élément au groupe de transition de vue par défaut `root` créé par l'agent utilisateur pour contenir la transition de vue pour l'ensemble de la page. Ce groupe inclut tout élément non affecté à son propre groupe de capture d'écran de transition de vue spécifique via la propriété `view-transition-name`.
- `<pt-name-selector>`
  - : Le {{cssxref("custom-ident")}} défini comme valeur de la propriété {{cssxref("view-transition-name")}}.
- `<pt-class-selector>`
  - : Le {{cssxref("custom-ident")}} défini comme valeur de la propriété {{cssxref("view-transition-class")}} précédé d'un point (`.`).

## Exemples

```css
figcaption {
  view-transition-name: figure-caption;
}

@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API de transition de vue](/fr/docs/Web/API/View_Transition_API)
- [Transitions fluides avec l'API de transition de vue <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)
