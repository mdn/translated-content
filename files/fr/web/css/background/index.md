---
title: background
slug: Web/CSS/background
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background
---
{{CSSRef}}

La propriété CSS **`background`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de définir les différentes valeurs des propriétés liées à la gestion des arrière-plans d'un élément (couleur, image, origine, taille, répétition, etc.).

{{EmbedInteractiveExample("pages/css/background.html")}}

Elle permet de définir une ou plusieurs valeurs pour : {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}, et {{cssxref("background-attachment")}}.

Lorsqu'on utilise la propriété raccourcie `background`, les valeurs fournies sont appliquées et pour les valeurs absentes, la propriété réinitialisera les propriétés détaillées avec leurs valeurs initiales.

> **Note :** La propriété {{cssxref("background-color")}} ne peut être définie que sur le dernier arrière-plan car il n'y a qu'une seule couleur d'arrière-plan pour un élément.

## Syntaxe

```css
/* On utilise une couleur <background-color> */
background: green;

/* Ici, une <bg-image> avec <repeat-style> */
background: url("test.jpg") repeat-y;

/* Là <box> et <background-color> */
background: border-box red;

/* Ici on utilise une seule image, centrée */
/* et remise à l'échelle */
background: no-repeat center/80% url("../img/image.png");
```

La propriété `background` permet de définir une ou plusieurs couches d'arrière-plan, séparées par des virgules. Chacune des couches peut être définie avec :

- Zéro ou une occurence d'une valeur :

  - [`<attachment>`](#<attachment>)
  - [`<bg-image>`](#<bg-image>)
  - [`<position>`](#<position>)
  - [`<bg-size>`](#<bg-size>)
  - [`<repeat-style>`](#<repeat-style>)

- Une valeur [`<bg-size>`](#<bg-size>) qui peut uniquement être utilisée directement après une valeur [`<position>`](#<position>) suivie d'une barre oblique (par exemple "`center/80%`")
- Une valeur [`<box>`](#<box>) présente zéro, une voire deux fois. Si elle n'est présente qu'une fois, cette valeur sera utilisée pour définir {{cssxref("background-origin")}} et {{cssxref("background-clip")}}. Si elle est présente à deux reprises, la première occurrence sera utilisée pour définir {{cssxref("background-origin")}} et la seconde définira {{cssxref("background-clip")}}.
- Une valeur [`<background-color>`](#<background-color>) qui peut uniquement être incluse pour la dernière couche qui est définie.

### Valeurs

- `<attachment>`
  - : Voir {{cssxref("background-attachment")}}
- `<box>`
  - : Voir {{cssxref("background-clip")}} et {{cssxref("background-origin")}}
- `<background-color>`
  - : Voir {{cssxref("background-color")}}
- `<bg-image>`
  - : Voir {{Cssxref("background-image")}}
- `<position>`
  - : Voir {{cssxref("background-position")}}
- `<repeat-style>`
  - : Voir {{cssxref("background-repeat")}}
- `<bg-size>`
  - : Voir {{cssxref("background-size")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="banniere">
  Dessine-moi une étoile<br/>
  Qui brille<br/>
  Dans le ciel.
</p>
<p class="attention">Voici un paragraphe !<p>
```

### CSS

```css
.attention {
  background: pink;
}

.banniere {
  background: url("https://mdn.mozillademos.org/files/11983/starsolid.gif") #99f repeat-y fixed;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre la règle 1.1 du WCAG](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Comprendre les critères pour 1.1.1, comprendre WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Spécifications

| Spécification                                                                                | État                                     | Commentaires                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background', 'background')}}     | {{Spec2('CSS3 Backgrounds')}} | La propriété raccourcie a été étendue pour gérer plusieurs arrière-plans et également gérer les propriétés {{cssxref("background-size")}}, {{cssxref("background-origin")}} et {{cssxref("background-clip")}}. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background', 'background')}} | {{Spec2('CSS2.1')}}                 | Pas de modification significative.                                                                                                                                                                                                             |
| {{SpecName('CSS1', '#background', 'background')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                                                                                                                                           |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background")}}

## Voir aussi

- {{cssxref("box-decoration-break")}}
- [Les gradients](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [Gérer plusieurs arrière-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
