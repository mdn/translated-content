---
title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`view-transition-class`** fournit aux éléments sélectionnés une classe d'identification (un {{CSSxRef("&lt;custom-ident&gt;")}}), offrant une méthode supplémentaire pour styliser les transitions de vue pour ces éléments.

## Syntaxe

```css
/* Exemples de valeurs <custom-ident> */
view-transition-class: card;

/* Valeurs avec un mot-clé */
view-transition-class: none;

/* Valeurs globales */
view-transition-class: inherit;
view-transition-class: initial;
view-transition-class: revert;
view-transition-class: revert-layer;
view-transition-class: unset;
```

### Valeurs

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Un nom d'identification qui permet à l'élément sélectionné de participer à une [transition de vue](/fr/docs/Web/API/View_Transition_API) distincte de la transition de vue racine. L'identifiant doit être unique. Si deux éléments rendus ont le même `view-transition-name` en même temps, {{DOMxRef("ViewTransition.ready")}} rejettera et la transition sera ignorée.
- `none`
  - : Aucune classe ne s'appliquerait aux pseudo-éléments de transition de vue nommés générés pour cet élément.

## Description

La valeur `view-transition-class` fournit un point d'accroche pour le style, similaire à un nom de classe CSS, qui peut être utilisé pour appliquer les mêmes styles à plusieurs pseudo-éléments de transition de vue. Elle ne marque pas un élément pour la capture. Chaque élément individuel a encore besoin de son propre {{CSSxRef("view-transition-name")}} unique&nbsp;; la `view-transition-class` est uniquement utilisée comme un moyen supplémentaire de mettre en forme les éléments qui ont déjà un `view-transition-name`.
Le support pour déterminer automatiquement le `view-transition-name` est en cours de discussion dans la spécification [Module des transitions de vue CSS Niveau 2 <sup>(angl.)</sup>](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name).

La propriété `view-transition-class` applique des styles en utilisant les pseudo-éléments de transition de vue, y compris {{CSSxRef("::view-transition-group()")}}, {{CSSxRef("::view-transition-image-pair()")}}, {{CSSxRef("::view-transition-old()")}} et {{CSSxRef("::view-transition-new()")}}. Cela diffère de la propriété `view-transition-name`, qui correspond aux transitions de vue entre l'élément dans l'état ancien et son élément correspondant dans le nouvel état.

Jusqu'à ce que la propriété `view-transition-class` soit entièrement prise en charge dans tous les navigateurs prenant en charge les transitions de vue, incluez un `::view-transition-group()` personnalisé pour chaque élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```css
::view-transition-group(.fast-card-slide) {
  animation-duration: 3s;
}

.product {
  view-transition-class: fast-card-slide;
}

.product#card1 {
  view-transition-name: show-card;
}

.product#card2 {
  view-transition-name: hide-card;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("view-transition-name")}}
- Le guide [Utiliser l'API de transition de vue](/fr/docs/Web/API/View_Transition_API/Using)
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
- [Transitions fluides avec l'API de transition de vue <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)
