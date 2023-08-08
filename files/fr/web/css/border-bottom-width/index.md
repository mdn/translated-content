---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
---

{{CSSRef}}

La propriété **`border-bottom-width`** définit l'épaisseur de la bordure pour le côté bas d'un élément.

{{EmbedInteractiveExample("pages/css/border-bottom-width.html")}}

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>          */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* Valeurs avec un mot-clé */
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* Valeurs globales */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: unset;
```

### Valeurs

- `<line-width>`

  - : Une valeur de longueur ({{cssxref("&lt;length&gt;")}}) positive ou un mot-clé qui indique l'épaisseur de la bordure pour le bas de la boîte. Si la valeur est un mot-clé, ce doit être l'une des valeurs suivantes :

    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

    La spécification ne précise pas de façon exacte l'épaisseur correspondant à chacun de ces mots-clés (c'est donc à chaque implémentation de choisir). La spécification requiert toutefois que l'inégalité suivante soit respectée `thin ≤ medium ≤ thick` et que ces valeurs soient constantes pour un même document`.`

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.element1 {
  border-bottom: thick solid red;
}
.element2 {
  border-bottom: medium solid orange;
}
.element3 {
  border-bottom: thin solid green;
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
  - {{cssxref("border-top-width")}},
  - {{cssxref("border-width")}}

- Les autres propriétés CSS liées à la bordure du côté haut :

  - {{cssxref("border")}},
  - {{cssxref("border-bottom")}},
  - {{cssxref("border-bottom-style")}},
  - {{cssxref("border-bottom-color")}}.
