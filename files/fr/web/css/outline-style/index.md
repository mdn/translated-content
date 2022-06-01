---
title: outline-style
slug: Web/CSS/outline-style
translation_of: Web/CSS/outline-style
---
{{CSSRef}}

La propriété **`outline-style`** permet de définir la mise en forme utilisée pour dessiner la bordure d'un élément. Cette bordure est dessinée autour de [la boîte de bordure](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) et peut être utilisée afin de faire ressortir l'élément.

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

Cette propriété est synthétisée grâce à la propriété {{cssxref("outline")}} qui regroupe outline-style, {{cssxref("outline-width")}} et {{cssxref("outline-color")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* Valeurs globales */
outline-style: inherit;
outline-style: initial;
outline-style: unset;
```

### Valeurs

- `auto`
  - : L'agent utilisateur peut afficher une bordure avec une mise en forme par défaut.
- `none`
  - : Aucune bordure n'est dessinée (équivalent à {{cssxref("outline-width")}} avec la valeur `0`).
- `dotted`
  - : Le bordure est dessinée avec une série de points.
- `dashed`
  - : La bordure est dessinée avec des tirets.
- `solid`
  - : La bordure est dessinée avec une ligne continue.
- `double`
  - : La bordure est dessinée avec deux lignes continues. La valeur de la propriété {{cssxref("outline-width")}} désigne la somme de la largeur des deux lignes et de l'espace entre elles.
- `groove`
  - : La bordure est dessinée comme si elle était gravée dans le document.
- `ridge`
  - : La forme obtenue est opposée à `groove` : la bordure semble dépasser du document.
- `inset`
  - : La bordure semble être intégrée dans le document..
- `outset`
  - : La forme obtenue est opposée à `inset` : la bordure semble ressortir du document.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple

#### CSS

```css
.exemple-groove {
  outline-style: groove;
  outline-color: red;
  outline-width: 2px;
}

.exemple-outset {
  outline-style: outset;
  outline-color: green;
  outline-width: 1px;
}
```

#### HTML

```html
<p class="exemple-groove">Ça c'est le groove</p>
<p class="exemple-outset">Et ça c'est outset</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_simple","100%","100%")}}

### Utilisation de la valeur auto

La valeur `auto` indique une bordure sur mesure selon l'interface du système d'exploitation ou de l'agent utilisateur.

#### CSS

```css
.auto {
  outline-style: auto; /* same result as "outline: auto" */
}

/* To make the Demo clearer */
* { outline-width: 10px; padding: 15px; }
```

#### HTML

```html
<div>
  <p class="auto">Outline Demo</p>
</div>
```

#### Résulat

{{EmbedLiveSample('Utilisation_de_la_valeur_auto')}}

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                    |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------- |
| {{SpecName('CSS3 Basic UI', '#outline-style', 'outline-style')}}             | {{Spec2('CSS3 Basic UI')}} | La valeur `auto` a été ajoutée. |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline-style', 'outline-style')}} | {{Spec2('CSS2.1')}}             | Définition initiale.            |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.outline-style")}}
