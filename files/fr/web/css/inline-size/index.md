---
title: inline-size
slug: Web/CSS/inline-size
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/inline-size
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`inline-size`** définit la taille verticale ou horizontale d'un élément de bloc selon son mode d'écriture. Selon la valeur de {{cssxref("writing-mode")}}, cette propriété correspond à {{cssxref("width")}} quand le mode d'écriture n'est pas vertical ou à {{cssxref("height")}} sinon.

{{EmbedInteractiveExample("pages/css/inline-size.html")}}

Cette propriété est à rapprocher de {{cssxref("block-size")}} qui définit l'autre dimension de l'élément.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
inline-size: 300px;
inline-size: 25em;

/* Valeurs proportionnelles relatives */
/* Type <percentage>                  */
inline-size: 75%;

/* Valeurs avec un mot-clé */
inline-size: 25em border-box;
inline-size: 75% content-box;
inline-size: max-content;
inline-size: min-content;
inline-size: available;
inline-size: fit-content;
inline-size: auto;

/* Valeurs globales */
inline-size: inherit;
inline-size: initial;
inline-size: unset;
```

### Valeurs

La propriété `inline-size` peut prendre les mêmes valeurs que les propriétés {{cssxref("width")}} et {{cssxref("height")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

### HTML

```html
<p class="exemple">Texte d'exemple</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécification

| Spécification                                                                                                        | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#logical-dimension-properties", "inline-size")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.inline-size")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("width")}}
  - {{cssxref("height")}}

- {{cssxref("writing-mode")}}
