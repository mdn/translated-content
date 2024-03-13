---
title: touch-action
slug: Web/CSS/touch-action
---

{{CSSRef}}

La propriété **`touch-action`** définit si une région donnée peut être manipulée par l'utilisateur grâce à des interactions tactiles (en déplaçant ou en zoomant) et comment cette interaction fonctionnera.

```css
/* Avec un mot-clé */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* Valeurs globales */
touch-action: inherit;
touch-action: initial;
touch-action: unset;
```

Par défaut, le déplacement et le zoom sont exclusivement gérés par le navigateur, ce qui déclenche un évènement [`pointercancel`](/fr/docs/Web/API/Element/pointercancel_event) à destination de l'application. En désactivant la prise en charge de ces gestes, l'application peut alors fournir ses propres gestionnaires d'évènements pour [`pointermove`](/fr/docs/Web/API/Element/pointermove_event), [`pointerup`](/fr/docs/Web/API/Element/pointerup_event).

On utilise parfois cette propriété pour désactiver les interactions tactiles sur un élément pour un jeu ou une carte qui fournissent leur propre gestion tactile.

Lorsqu'une interaction tactile a lieu, le navigateur inspecte les valeurs de `touch-action` pour l'élément et ses ancêtres jusqu'à atteindre l'élément qui implémente le geste (c'est-à-dire celui qui peut défiler/zoomer). En pratique, `touch-action` est généralement uniquement appliquée aux éléments de plus haut niveau ayant besoin d'un comportement spécifique. Il n'est pas nécessaire de redéfinir `touch-action` sur les descendants.

> **Note :** Lorsqu'un geste est déjà initié, tout changement sur `touch-action` n'aura aucun impact sur le geste en cours.

## Syntaxe

La propriété `touch-action` peut être définie grâce à :

- l'un des mots-clés parmi [`auto`](#auto), [`none`](#none), [`manipulation`](#manipulation) _ou_
- un mot-clé parmi [`pan-x`](#pan-x), [`pan-left`](#pan-keywords), [`pan-right`](#pan-keywords), et/ou un mot-clé parmi [`pan-y`](#pan-y), [`pan-up`](#pan-keywords), [`pan-down`](#pan-keywords) et éventuellement le mot-clé [`pinch-zoom`](#).

### Valeurs

- `auto`
  - : L'agent utilisateur détermine les interactions tactiles possibles (zoomer, déplacer le viewport) lorsque l'élément est touché.
- `manipulation`
  - : Les gestes de déplacement et de zoom sont autorisés mais les gestes non-standards (ex. double touche pour zoomer) sont désactivés. Cette valeur est un alias pour `pan-x pan-y pinch-zoom`.
- `none`
  - : Cette valeur désactive tous les comportements par défaut et permet au contenu de gérer les interaction tactiles (les touches qui commencent sur l'élément ne doivent pas déclencher de comportements tactiles par défaut).
- `pan-x`
  - : L'agent utilisateur peut considérer que les touchers qui débutent sur l'élément ont pour but de faire défiler horizontalement le plus proche ancêtre de l'élément qui possède du contenu en défilement horizontal. Cette valeur peut être combinée avec `pan-y`, `pan-up`, `pan-down` et/ou `pinch-zoom`.
- `pan-y`
  - : L'agent utilisateur peut considérer que les touchers qui débutent sur l'élément ont pour but de faire défiler verticalement le plus proche ancêtre de l'élément qui possède du contenu en défilement vertical. Cette valeur peut être combinée avec `pan-x`, `pan-left`, `pan-right` et/ou `pinch-zoom`.
- `pan-left`, `pan-right` {{experimental_inline}}
  - : L'agent utilisateur peut considérer que les touchers qui commencent sur l'élément n'ont pour but que de faire défiler horizontalement le contenu du plus proche ancêtre de l'élément qui possède du contenu qui peut défiler (_scrollable_) horizontalement.
- `pan-up`, `pan-down` {{experimental_inline}}
  - : L'agent utilisateur peut considérer que les touchers qui commencent sur l'élément n'ont pour but que de faire défiler verticalement le contenu du plus proche ancêtre de l'élément qui possède du contenu qui peut défiler (_scrollable_) verticalement.
- `pinch-zoom`
  - : L'agent utilisateur peut considérer que les touches qui commencent sur l'élément n'ont pour but que de zoomer sur l'ancêtre le plus proche qui contient du contenu sur lequel on peut zoomer.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<ul>
  Ma list
  <li>UnLongTexteQuiDevraitTenirSurUneLigneHeureusementQuOnAOverflowScroll</li>
  <li>
    UnAutreLongTexteQuiDevraitTenirSurUneLigneHeureusementQuOnAOverflowScroll
  </li>
</ul>
```

### CSS

```css
ul {
  width: 200px;
  height: 50px;
  overflow-x: scroll;
}

ul > li {
  touch-action: pan-x pinch-zoom;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

> **Note :** La propriété `touch-action` est également utilisée afin de supprimer le délai donné à l'évènement `click` pour prendre en charge le zoom via la double-touche.

## Accessibilité

Une déclaration `touch action: none;` empêchera le navigateur de zoomer. Cela peut empêcher les personnes à faible vision de lire et de comprendre le contenu de la page.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- _[Understanding Success Criterion 1.4.4 - Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)_

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les événements de pointage](/fr/docs/Web/API/Pointer_events)
- Un billet du blog WebKit : [une gestion plus responsive du toucher sur iOS (en anglais)](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- [Rendre le défilement tactile rapide, par défaut sur le Google Developers Blog](https://developers.google.com/web/updates/2017/01/scrolling-intervention)
- [Le module de spécification CSS Scroll Snap](/fr/docs/Web/CSS/CSS_Scroll_Snap)
