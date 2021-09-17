---
title: border-right-width
slug: Web/CSS/border-right-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-right-width
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

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.element1{
	border-right: thick solid red;
}
.element2{
	border-right: medium solid orange;
}
.element3{
	border-right: thin solid green;
}
```

### HTML

```html
<p class="element1">
  Une bordure épaisse rouge.
</p>

<p class="element2">
  Une bordure moyenne orange.
</p>

<p class="element3">
  Et une bordure fine verte.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","200","300")}}

## Spécifications

| Spécification                                                                                                | État                                     | Commentaires                       |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-width', 'border-right-width')}}         | {{Spec2('CSS3 Backgrounds')}} | Pas de modification significative. |
| {{SpecName('CSS2.1', 'box.html#border-width-properties', 'border-right-width')}} | {{Spec2('CSS2.1')}}                 | Pas de modification significative. |
| {{SpecName('CSS1', '#border-right-width', 'border-right-width')}}                     | {{Spec2('CSS1')}}                 | Définition initiale.               |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-right-width")}}

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
