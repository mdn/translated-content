---
title: ':first-of-type'
slug: Web/CSS/:first-of-type
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:first-of-type
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:first-of-type`** permet de cibler le premier élément d'un type donné parmi ceux d'un même élément parent (et de même niveau).

```css
/* Cible le premier élément <p> d'un type donné */
/* parmi ses éléments voisins */
p:first-of-type {
  color: red;
}
```

> **Note :** Dans la version initiale de la spécification (CSS3), l'élément ciblé devait avoir un parent, ce prérequis a désormais été abandonné (cf. spécification des sélecteurs pour CSS4).

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
div :first-of-type {
  background-color: lime;
}
```

### HTML

```html
<div>
  <span>Voici le premier span !</span>
  <span>Un autre span, pas le premier.</span>
  <span>Quid de cet <em>élément imbriqué </em>?</span>
  <b>Un autre type d'élément.</b>
  <span>Ce type là est déjà apparu.</span>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples','100%', '120')}}

> **Note :** On peut voir ici que c'est le sélecteur universel qui est pris en compte quand aucun sélecteur simple n'est écrit directement avec la pseudo-classe.

> **Note :** Les modifications de styles s'appliquent également aux éléments imbriqués, vous pouvez essayer de modifier l'exemple précédent pour cibler le `<div>`.

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                                                       |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('CSS4 Selectors', '#first-of-type-pseudo', ':first-of-type')}} | {{Spec2('CSS4 Selectors')}} | Les éléments ciblés ne doivent pas nécessairement avoir de parent. |
| {{SpecName('CSS3 Selectors', '#first-of-type-pseudo', ':first-of-type')}} | {{Spec2('CSS3 Selectors')}} | Définition initiale.                                               |

## Compatibilité des navigateurs

{{Compat("css.selectors.first-of-type")}}

## Voir aussi

- {{cssxref(":nth-of-type")}},
- {{cssxref(":last-of-type")}}
- {{cssxref(":first-child")}}
