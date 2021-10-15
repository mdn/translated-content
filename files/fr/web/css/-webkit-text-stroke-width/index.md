---
title: '-webkit-text-stroke-width'
slug: Web/CSS/-webkit-text-stroke-width
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-text-stroke-width
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-text-stroke-width`** permet de définir l'épaisseur du trait qui entoure les lettres du texte.

{{cssinfo}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* Valeurs de longueur */
/* Type <length>       */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* Valeurs globales */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: unset;
```

### Valeurs

- `<line-width>`
  - : La largeur du trait utilisé pour entourer les lettres du texte.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

### HTML

```html
<p id="thin">Trait fin</p>
<p id="medium">Trait moyen</p>
<p id="thick">Trait épais</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "450px", "230px")}}

## Spécifications

| Spécification                                                                                                                                                                                                                                                      | État                                        | Commentaires                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------------------------------- |
| {{SpecName('Compat', '#the-webkit-text-stroke-width', '-webkit-text-stroke-width')}}                                                                                                                                                   | {{Spec2('Compat')}}                    | Définition initiale dans un standard. |
| [Référence CSS Safari -webkit-text-stroke-width dans ce document.](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266--webkit-text-stroke-width) | Documentation non-officielle, non-standard. | Documentation initiale.               |

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-text-stroke-width")}}

## Voir aussi

- [Le billet de _Surfin' Safari_ qui annonce cette fonctionnalité (en anglais)](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [L'article de CSS-Tricks à propos de cette fonctionnalité (en anglais)](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
