---
title: border-top-width
slug: Web/CSS/border-top-width
---

{{CSSRef}}

La propriété **`border-top-width`** définit l'épaisseur de la bordure pour le côté haut d'une boîte.

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>          */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Valeurs avec un mot-clé */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* Valeurs globales */
border-top-width: inherit;
border-top-width: initial;
border-top-width: unset;
```

### Valeurs

- `<line-width>`

  - : Une valeur de longueur ({{cssxref("&lt;length&gt;")}}) positive ou un mot-clé qui indique l'épaisseur de la bordure pour le haut de la boîte. Si la valeur est un mot-clé, ce doit être l'une des valeurs suivantes :

    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

    La spécification ne précise pas de façon exacte l'épaisseur correspondant à chacun de ces mots-clés (c'est donc à chaque implémentation de choisir). La spécification requiert toutefois que l'inégalité suivante soit respectée `thin ≤ medium ≤ thick` et que ces valeurs soient constantes pour un même document.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.element1 {
  border-top: thick solid red;
}
.element2 {
  border-top: medium solid orange;
}
.element3 {
  border-top: thin solid green;
}
```

### HTML

```html
<p class="element1">Une bordure épaisse rouge.</p>

<p class="element2">Une bordure moyenne orange.</p>

<p class="element3">Et une bordure fine verte.</p>
```

### Résultat

{{EmbedLiveSample("Exemples","200","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées à la largeur de la bordure :

  - {{cssxref("border-left-width")}},
  - {{cssxref("border-right-width")}},
  - {{cssxref("border-bottom-width")}},
  - {{cssxref("border-width")}}

- Les autres propriétés CSS liées à la bordure du côté haut :

  - {{cssxref("border")}},
  - {{cssxref("border-top")}},
  - {{cssxref("border-top-style")}},
  - {{cssxref("border-top-color")}}.
