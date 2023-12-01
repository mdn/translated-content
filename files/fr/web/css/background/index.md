---
title: background
slug: Web/CSS/background
---

{{CSSRef("CSS Background")}}

La propriété [CSS](/fr/docs/Web/CSS) **`background`** est une [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de définir les différentes valeurs des propriétés liées à la gestion des arrière-plans d'un élément (couleur, image, origine, taille, répétition, etc.).

{{EmbedInteractiveExample("pages/css/background.html")}}

## Propriétés détaillées correspondantes

Cette propriété permet de définir une ou plusieurs valeurs pour&nbsp;:

- [`background-attachment`](/fr/docs/Web/CSS/background-attachment)
- [`background-clip`](/fr/docs/Web/CSS/background-clip)
- [`background-color`](/fr/docs/Web/CSS/background-color)
- [`background-image`](/fr/docs/Web/CSS/background-image)
- [`background-origin`](/fr/docs/Web/CSS/background-origin)
- [`background-position`](/fr/docs/Web/CSS/background-position)
- [`background-repeat`](/fr/docs/Web/CSS/background-repeat)
- [`background-size`](/fr/docs/Web/CSS/background-size)

Lorsqu'on utilise la propriété raccourcie `background`, les valeurs fournies sont appliquées et pour les valeurs absentes, la propriété réinitialisera les propriétés détaillées avec leurs valeurs initiales.

> **Note :** La propriété [`background-color`](/fr/docs/Web/CSS/background-color) ne peut être définie que sur le dernier arrière-plan, car il n'y a qu'une seule couleur d'arrière-plan pour un élément.

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

/* Valeurs globales */
background: inherit;
background: initial;
background: revert;
background: unset;
```

La propriété `background` permet de définir une ou plusieurs couches d'arrière-plan, séparées par des virgules. Chacune des couches peut être définie avec&nbsp;:

- Zéro ou une occurrence d'une valeur&nbsp;:

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<repeat-style>`

- Une valeur `<bg-size>` qui peut uniquement être utilisée directement après une valeur `<position>` suivie d'une barre oblique (par exemple `center/80%`)
- Une valeur `<box>` présente zéro, une voire deux fois. Si elle n'est présente qu'une fois, cette valeur sera utilisée pour définir [`background-origin`](/fr/docs/Web/CSS/background-origin) et [`background-clip`](/fr/docs/Web/CSS/background-clip). Si elle est présente à deux reprises, la première occurrence sera utilisée pour définir [`background-origin`](/fr/docs/Web/CSS/background-origin) et la seconde définira [`background-clip`](/fr/docs/Web/CSS/background-clip).
- Une valeur `<background-color>` qui peut uniquement être incluse pour la dernière couche qui est définie.

### Valeurs

- `<attachment>`
  - : Voir [`background-attachment`](/fr/docs/Web/CSS/background-attachment)
- `<box>`
  - : Voir [`background-clip`](/fr/docs/Web/CSS/background-clip) et [`background-origin`](/fr/docs/Web/CSS/background-origin)
- `<background-color>`
  - : Voir [`background-color`](/fr/docs/Web/CSS/background-color)
- `<bg-image>`
  - : Voir [`background-image`](/fr/docs/Web/CSS/background-image)
- `<position>`
  - : Voir [`background-position`](/fr/docs/Web/CSS/background-position)
- `<repeat-style>`
  - : Voir [`background-repeat`](/fr/docs/Web/CSS/background-repeat)
- `<bg-size>`
  - : Voir [`background-size`](/fr/docs/Web/CSS/background-size).

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisatrices et utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre la règle 1.1 du WCAG](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères pour 1.1.1, comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="banniere">
  Dessine-moi une étoile<br />
  Qui brille<br />
  Dans le ciel.
</p>
<p class="attention">Voici un paragraphe !</p>
```

### CSS

```css
.attention {
  background: pink;
}

.banniere {
  background: url("starsolid.gif") #99f repeat-y fixed;
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`box-decoration-break`](/fr/docs/Web/CSS/box-decoration-break)
- [Les dégradés](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [Gérer plusieurs arrière-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
