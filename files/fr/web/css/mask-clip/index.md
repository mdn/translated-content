---
title: mask-clip
slug: Web/CSS/mask-clip
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-clip
---
{{CSSRef}}

La propriété **`mask-clip`** définit la zone qui est modifiée par un masque. Le contenu « peint » sera restreint à cette zone.

{{cssinfo}}

## Syntaxe

```css
/* Valeurs de type <geometry-box> */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: margin-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Valeurs avec un mot-clé */
mask-clip: no-clip;

/* Valeurs multiples */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Mots-clés non-standards */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* Valeurs globales */
mask-clip: inherit;
mask-clip: initial;
mask-clip: unset;
```

## Syntaxe

Un ou plusieurs mots-clés parmi ceux listés ci-après, chacun séparé par une virgule.

### Valeurs

- `content-box`
  - : La partie qui est « peinte » est rognée sur la boîte de contenu.
- `padding-box`
  - : La partie qui est « peinte » est rognée sur la boîte de _padding_.
- `border-box`
  - : La partie qui est « peinte » est rognée sur la boîte de bordure.
- `margin-box`
  - : La partie qui est « peinte » est rognée sur la boîte de marge.
- `fill-box`
  - : La partie qui est « peinte » est rognée sur la boîte contenant l'objet.
- `stroke-box`
  - : La partie qui est « peinte » est rognée sur la boîte contenant le contour.
- `view-box`
  - : C'est le _viewport_ du plus proche SVG qui est utilisé comme boîte de référence. Si l'attribut [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est défini pour l'élément qui crée le _viewport_, la boîte de référence est positionnée à l'origine du système de coordonnées défini par l'attribut `viewBox` et les dimensions de la boîtes sont basées sur la hauteur et la largeur de l'attribut `viewBox`.
- `no-clip`
  - : La partie qui est « peinte » n'est pas rognée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 20px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-clip: border;
  mask-clip: border-box;
}
```

### HTML

```html
<div id="masked"></div>
```

### Résultat

{{EmbedLiveSample("Exemples", "220px", "250px")}}

## Spécifications

| Spécification                                                                | État                         | Commentaires        |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("CSS Masks", "#the-mask-clip", "mask-clip")}} | {{Spec2("CSS Masks")}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-clip")}}
