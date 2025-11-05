---
title: ::view-transition-image-pair()
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
original_slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::view-transition-image-pair()`** représente un conteneur pour les états de vue «&nbsp;<i lang="en">old</i>&nbsp;» et «&nbsp;<i lang="en">new</i>&nbsp;» d'une [transition de vue](/fr/docs/Web/API/View_Transition_API) — avant et après la transition.

Durant une transition de vue, `::view-transition-image-pair()` est inclus dans l'arbre des pseudo-éléments associés comme expliqué dans [L'arbre des pseudo-éléments de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#larbre_des_pseudo-éléments_de_transition_de_vue). Il est seulement un enfant d'un {{cssxref("::view-transition-group()")}}. En termes d'enfants, il peut avoir un {{cssxref("::view-transition-new()")}} ou un {{cssxref("::view-transition-old()")}}, ou les deux.

`::view-transition-image-pair()` est donné le style par défaut suivant dans la feuille de style l'agent utilisateur&nbsp;:

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

Durant une transition de vue, `::view-transition-image-pair()` a {{cssxref("isolation", "isolation: isolate")}} défini sur lui dans la feuille de style de transition de vue afin que ses enfants puissent être mélangés avec des modes de fusion non normaux sans affecter d'autres sorties visuelles.

## Syntax

```css-nolint
::view-transition-image-pair([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Parameters

- `*`
  - : Le [sélecteur universel (`*`)](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors)&nbsp;; sélectionne tous les groupes de transition de vue sur une page.
- `root`
  - : Fait correspondre le pseudo-élément au groupe de capture d'instantané de transition de vue `root` par défaut créé par l'agent utilisateur pour contenir la transition de vue pour l'ensemble de la page. Ce groupe inclut tout élément non assigné à son propre groupe d'instantané de transition de vue spécifique via la propriété {{cssxref("view-transition-name")}}.
- `<pt-name-selector>`
  - : Le {{cssxref("custom-ident")}} défini comme valeur de la propriété {{cssxref("view-transition-name")}}.
- `<pt-class-selector>`
  - : Le {{cssxref("custom-ident")}} défini comme valeur de la propriété {{cssxref("view-transition-class")}} précédé d'un point (`.`).

## Examples

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-image-pair(.card) {
  isolation: isolate;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API de transition de vue](/fr/docs/Web/API/View_Transition_API)
- [Transitions fluides avec l'API de transition de vue <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)
