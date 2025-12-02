---
title: ::view-transition-group()
slug: Web/CSS/Reference/Selectors/::view-transition-group
original_slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::view-transition-group()`** représente un groupe instantané de transition de vue.

Lors d'une transition de vue, `::view-transition-group()` est inclus dans l'arbre des pseudo-éléments associés comme expliqué dans [L'arbre des pseudo-éléments de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#larbre_des_pseudo-éléments_de_transition_de_vue). Il est uniquement un enfant de {{cssxref("::view-transition")}}, et a un {{cssxref("::view-transition-image-pair()")}} comme enfant.

`::view-transition-group()` reçoit le style par défaut suivant dans la feuille de style de l'agent utilisateur&nbsp;:

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

Par défaut, les éléments sélectionnés reflètent initialement la taille et la position du pseudo-élément {{cssxref("::view-transition-old()")}} représentant l'état de vue «&nbsp;<i lang="en">old</i>&nbsp;» ou du pseudo-élément {{cssxref("::view-transition-new()")}} représentant l'état de vue «&nbsp;<i lang="en">new</i>&nbsp;» s'il n'y a pas d'état de vue «&nbsp;<i lang="en">old</i>&nbsp;».

S'il y a, à la fois, un état de vue «&nbsp;<i lang="en">old</i>&nbsp;» et un état de vue «&nbsp;<i lang="en">new</i>&nbsp;», les styles dans la feuille de style de transition de vue animent la largeur ({{cssxref("width")}}) et la hauteur ({{cssxref("height")}}) de ce pseudo-élément de la taille de la boîte de bord de l'état de vue «&nbsp;<i lang="en">old</i>&nbsp;» à celle de l'état de vue «&nbsp;<i lang="en">new</i>&nbsp;».

> [!NOTE]
> Les styles de transition de vue sont générés dynamiquement pendant la transition de vue&nbsp;; voir les sections [configurer les pseudo-éléments de transition <sup>(angl.)</sup>](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) et [mettre à jour les styles des pseudo-éléments <sup>(angl.)</sup>](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) de la spécification pour plus de détails.

De plus, la transformation de l'élément est animée de la transformation de l'espace écran de l'état de vue «&nbsp;<i lang="en">old</i>&nbsp;» à celle de l'état de vue «&nbsp;<i lang="en">new</i>&nbsp;». Ce style est généré dynamiquement puisque les valeurs des propriétés animées sont déterminées au moment où la transition commence.

## Syntaxe

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### Paramètres

- `*`
  - : Le [sélecteur universel (`*`)](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors)&nbsp;; sélectionne tous les groupes de transition de vue sur une page.
- `root`
  - : Le {{cssxref("view-transition-name")}} appliqué à {{cssxref(":root")}} fait correspondre le pseudo-élément au groupe de transition de vue par défaut `root`. C'est le groupe de capture d'écran créé par l'agent utilisateur pour contenir la transition de vue pour l'ensemble de la page. Ce groupe inclut tout élément non affecté à son propre groupe de capture d'écran de transition de vue spécifique via la propriété `view-transition-name`.
- `<pt-name-selector>`
  - : Le {{cssxref("custom-ident")}} défini comme valeur de la propriété {{cssxref("view-transition-name")}}.
- `<pt-class-selector>`
  - : Le {{cssxref("custom-ident")}} défini comme valeur de la propriété {{cssxref("view-transition-class")}}, précédé d'un point (`.`).

La {{cssxref("specificity")}} du pseudo-élément de transition de vue nommé est égale à la [spécificité du sélecteur de type](/fr/docs/Web/CSS/Guides/Cascade/Specificity#type_column), à moins que le sélecteur universel ne soit utilisé, auquel cas la spécificité est nulle.

## Exemples

```css
::view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}

::view-transition-group(.card) {
  animation-duration: 1s;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API de transition de vue](/fr/docs/Web/API/View_Transition_API)
- [Transitions fluides avec l'API de transition de vue <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)
