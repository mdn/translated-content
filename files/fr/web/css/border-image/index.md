---
title: border-image
slug: Web/CSS/border-image
translation_of: Web/CSS/border-image
---
{{CSSRef}}

La propriété **`border-image`** dessine une image sur la bordure d'un élément. C'est [une propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de définir {{cssxref("border-image-source")}}, {{cssxref("border-image-width")}}, {{cssxref("border-image-repeat")}}, {{cssxref("border-image-slice")}}, {{cssxref("border-image-outset")}}.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

Cela permet d'obtenir des effets de dessin complexes sans avoir à complexifier l'utilisation des boîtes CSS. La propriété `border-image` sera utilisée plutôt que le style défini via la propriété {{cssxref("border-style")}}. Selon la spécification, `border-style` **doit** être présente si `border-image` est utilisée.

> **Note :** Si [la valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) de {{cssxref("border-image-source")}} vaut `none` (via `border-image-source` ou via la propriété raccourcie `border-image`), ce sera le style indiqué par {{cssxref("border-style")}} qui sera utilisé.

## Syntaxe

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;
```

La propriété `border-image` peut être définie avec une à cinq valeurs parmi celles définies ci-après.

> **Note :** Si la [valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) de {{cssxref("border-image-source")}} vaut `none` ou si l'image ne peut pas être affichée, c'est le {{cssxref("border-style")}} correspondant qui sera affiché.

### Valeurs

- `border-image-source`
  - : L'image source. Voir {{cssxref("border-image-source")}}.
- `border-image-slice`
  - : La façon dont l'image est découpée en zones (jusqu'à 4). Voir {{cssxref("border-image-slice")}}.
- `border-image-width`
  - : La largeur de la bordure avec l'image. Voir {{cssxref("border-image-width")}}.
- `border-image-outset`
  - : La distance entre la bordure et le bord de l'élément. Voir {{cssxref("border-image-outset")}}.
- `border-image-repeat`
  - : La façon dont l'image source est adaptée afin de correspondre aux dimensions de la bordure. Voir {{cssxref("border-image-repeat")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser une image matricielle étirée

On découpe l'image et on la répète pour remplir la zone entre les bordures.

#### CSS

```css
#bitmap {
  border: 30px solid transparent;
  padding: 20px;
  border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30;
}
```

#### HTML

```html
<div id="bitmap">
  L'image est étirée pour remplir l'espace.
</div>
```

#### Résultat

{{EmbedLiveSample('Utiliser_une_image_matricielle_étirée')}}

### Utiliser un dégradé

#### CSS

```css
#gradient {
  border: 30px solid;
  border-image: linear-gradient(red, yellow) 10;
  padding: 20px;
}
```

#### HTML

```html
<div id="gradient">
  L'image formée par le gradient est étirée pour remplir la zone.
</div>
```

#### Résultat

{{EmbedLiveSample('Utiliser_un_dégradé')}}

## Accessibilité

Les technologies d'assistance ne peuvent pas analyser les images de bordure. Si l'image contient des informations essentielles au sens de la page, mieux vaut décrire ces informations dans le contenu sémantique du document.

- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [_Understanding Success Criterion 1.1.1 - Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Spécifications

| Spécification                                                                                | État                                     | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-image', 'border-image')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-image")}}

## Voir aussi

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url()", "url()")}}
- Fonctions pour les dégradés

  - {{CSSxRef("conic-gradient")}}
  - {{CSSxRef("linear-gradient")}}
  - {{CSSxRef("repeating-linear-gradient")}}
  - {{CSSxRef("radial-gradient")}}
  - {{CSSxRef("repeating-radial-gradient")}}
