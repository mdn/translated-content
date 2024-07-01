---
title: border-right-width
slug: Web/CSS/border-right-width
---

{{CSSRef}}

La propriété **`border-right-width`** définit l'épaisseur de la bordure pour le côté droit d'une boîte.

{{EmbedInteractiveExample("pages/css/border-right-width.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* Valeurs de longueurs */
/* Type <length> */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* Valeurs globales */
border-right-width: inherit;
border-right-width: initial;
border-right-width: unset;
```

### Valeurs

- `<br-width>`

  - : Une valeur de longueur ({{cssxref("&lt;length&gt;")}}) positive ou un mot-clé qui indique l'épaisseur de la bordure pour le côté droit de la boîte. Si la valeur est un mot-clé, ce doit être l'une des valeurs suivantes :

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
  border-right: thick solid red;
}
.element2 {
  border-right: medium solid orange;
}
.element3 {
  border-right: thin solid green;
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
  - {{cssxref("border-top-width")}},
  - {{cssxref("border-bottom-width")}},
  - {{cssxref("border-width")}}

- Les autres propriétés CSS liées à la bordure du côté droit :

  - {{cssxref("border")}},
  - {{cssxref("border-right")}},
  - {{cssxref("border-right-style")}},
  - {{cssxref("border-right-color")}}.
