---
title: border-image-source
slug: Web/CSS/border-image-source
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-source
---
{{CSSRef}}

La propriété **`border-image-source`** définit l'image (type {{cssxref("&lt;image&gt;")}}) qu'on souhaite utiliser pour mettre en forme la bordure. Si la valeur de cette propriété vaut `none`, ce sera la mise en forme définie par la propriété {{cssxref("border-style")}} qui sera utilisée.

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

## Syntaxe

```css
/* Valeur avec un mot-clé */
/* Ici, pas de border-image, */
/* on utilise border-style */
border-image-source: none;

/* Valeur de type <image> */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
```

La propriété {{cssxref("border-image-slice")}} peut être utilisée afin de diviser une image source en régions qui seront insérées dynamiquement pour constituer la bordure imagée finale.

### Valeurs

- `none`
  - : Cette valeur permet d'indiquer qu'aucune image ne doit être utilisée pour la bordure. Ce sera le style défini par la propriété {{cssxref("border-style")}} qui sera utilisé.
- `<image>`
  - : Une référence vers l'Image qu'on souhaite utiliser pour dessiner la bordure. Voir {{cssxref("&lt;image&gt;")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Voir la page de la propriété raccourcie {{cssxref("border-image")}} et les différents exemples.

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-image-source', 'border-image-source')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-image-source")}}

## Voir aussi

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url()", "url()")}}
