---
title: transition
slug: Web/CSS/transition
---

{{CSSRef}}

La propriété **`transition`** est [une propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) pour les propriétés {{cssxref("transition-property")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-timing-function")}} et {{cssxref("transition-delay")}}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Elle permet de définir la transition entre deux états d'un élément. Les différents états peuvent être définis à l'aide [de pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) telles que {{cssxref(":hover")}} ou {{cssxref(":active")}} ou être définis dynamiquement avec JavaScript.

## Syntaxe

```css
/* S'applique à une propriété */
/* on a le nom et la durée */
transition: margin-right 4s;

/* nom de la propriété | durée | retard */
transition: margin-right 4s 1s;

/* nom | durée | fonction */
transition: margin-right 4s ease-in-out;

/* nom | durée | fonction | retard */
transition: margin-right 4s ease-in-out 1s;

/* S'applique à deux propriétés */
transition:
  margin-right 4s,
  color 1s;

/* S'applique à toutes les propriétés modifiées */
transition: all 0.5s ease-out;

/* Valeurs globales */
transition: inherit;
transition: initial;
transition: unset;
```

La propriété `transition` se définit comme une ou plusieurs propriétés de transitions, séparées par des virgules.

Chacune des propriétés de transition décrit la transition qui devrait être appliquée à une propriété donnée (ou pour les valeurs spéciales `all` et `none`). Une propriété de transition inclut :

- zéro ou une valeur qui représente la propriété à laquelle la transition s'applique. Ça peut être :

  - le mot-clé `none`
  - le mot-clé `all`
  - Un identifiant ({{cssxref("&lt;custom-ident&gt;")}}) qui nomme une propriété CSS.

- zéro ou une valeur {{cssxref("&lt;single-transition-timing-function&gt;")}} qui représente la fonction de temporisation utilisée pour la transition
- zéro, une ou deux valeurs {{cssxref("&lt;time&gt;")}}. La première valeur qui peut être interprétée comme un temps sera affectée à la propriété {{cssxref("transition-duration")}} et la seconde valeur qui peut être affectée comme un temps sera affectée à la propriété {{cssxref("transition-delay")}}.

Si la liste des valeurs est trop courte pour les différentes propriétés, les valeurs seront répétées. Si la liste est trop longue, elle sera tronquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Plusieurs exemples de transitions CSS sont présentés [sur l'article sur les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
