---
title: Propriété CSS `view-transition-class`
short-title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: 7447816a276e95c5b4c2ab2f6a1f80b081371de2
---

La propriété [CSS](/fr/docs/Web/CSS) **`view-transition-class`** fournit aux éléments sélectionnés une ou plusieurs classes d'identification (des {{CSSxRef("&lt;custom-ident&gt;")}}), offrant une méthode supplémentaire pour styliser les transitions de vue pour ces éléments.

## Syntaxe

```css
/* Exemples de valeurs <custom-ident> */
view-transition-class: card;
view-transition-class: card fast-slide;

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
  - : Un nom d'identification utilisé pour sélectionner les pseudo-éléments de transition de vue pour le style. Contrairement à `view-transition-name`, une classe n'a pas besoin d'être unique et ne fait pas participer l'élément à un groupe de transition de vue distinct.
- `none`
  - : Aucune classe ne s'appliquerait aux pseudo-éléments de transition de vue nommés générés pour cet élément.

## Description

La valeur `view-transition-class` fournit un point d'accroche pour le style, similaire à un nom de classe CSS, qui peut être utilisé pour appliquer les mêmes styles à plusieurs pseudo-éléments de transition de vue. Elle ne marque pas un élément pour la capture. Chaque élément individuel a encore besoin de son propre {{CSSxRef("view-transition-name")}} unique&nbsp;; la `view-transition-class` est uniquement utilisée comme un moyen supplémentaire de mettre en forme les éléments qui ont déjà un `view-transition-name`.
Le support pour déterminer automatiquement le `view-transition-name` est en cours de discussion dans la spécification [Module des transitions de vue CSS Niveau 2 <sup>(angl.)</sup>](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name).

Les `view-transition-class` appliquent des styles en utilisant les pseudo-éléments de transition de vue, y compris {{CSSxRef("::view-transition-group()")}}, {{CSSxRef("::view-transition-image-pair()")}}, {{CSSxRef("::view-transition-old()")}} et {{CSSxRef("::view-transition-new()")}}. Cela diffère de la propriété `view-transition-name`, qui correspond aux transitions de vue entre l'élément dans l'état ancien et son élément correspondant dans le nouvel état.

Jusqu'à ce que la propriété `view-transition-class` soit entièrement prise en charge dans tous les navigateurs prenant en charge les transitions de vue, incluez un `::view-transition-group()` personnalisé pour chaque élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mettre en forme une classe partagée sur plusieurs éléments

Dans cet exemple, trois cartes ont chacune un nom de transition de vue ({{CSSxRef("view-transition-name")}}) unique (nécessaire pour associer les états anciens et nouveaux), mais elles partagent toutes la même `view-transition-class`. Cela vous permet d'écrire une seule règle qui applique des styles à toutes leurs transitions en même temps, plutôt que de répéter les styles pour chaque nom individuellement. Contrairement à `view-transition-name`, une `view-transition-class` n'a pas besoin d'être unique.

```html
<div class="card" id="card1">Carte 1</div>
<div class="card" id="card2">Carte 2</div>
<div class="card" id="card3">Carte 3</div>
```

```css
/* Chaque élément doit avoir un view-transition-name unique */
#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

#card3 {
  view-transition-name: card-3;
}

/* Mais elles peuvent toutes partager la même view-transition-class */
.card {
  view-transition-class: card;
}

/* Cette seule règle s'applique aux transitions des trois cartes */
::view-transition-group(.card) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}
```

### Utiliser plusieurs classes sur un seul élément

Une valeur `view-transition-class` peut être une liste d'identifiants séparés par des espaces, ce qui vous permet de composer plusieurs styles «&nbsp;atomiques&nbsp;» sur le même élément et de cibler chacun indépendamment de vos pseudo-éléments de transition de vue. Dans cet exemple, les deux cartes partagent les mêmes deux classes — `slide` contrôle l'animation, et `fast-transition` contrôle sa durée — tandis que chaque carte a toujours son propre nom de transition de vue ({{CSSxRef("view-transition-name")}}) unique.

```html
<div class="card" id="card1">Carte 1</div>
<div class="card" id="card2">Carte 2</div>
```

```css
.card {
  view-transition-class: slide fast-transition;
}

#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

/* La classe `slide` détermine quelle animation s'exécute... */
::view-transition-new(.slide) {
  animation-name: slide-in;
}

::view-transition-old(.slide) {
  animation-name: slide-out;
}

/* ...tandis que la classe `fast-transition` détermine sa durée. */
::view-transition-group(.fast-transition) {
  animation-duration: 0.5s;
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
