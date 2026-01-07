---
title: background
slug: Web/CSS/Reference/Properties/background
original_slug: Web/CSS/background
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`background`** est une [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) qui permet de définir les différentes valeurs des propriétés liées à la gestion des arrière-plans d'un élément (couleur, image, origine, taille, répétition, etc.).

{{InteractiveExample("CSS Demo: background")}}

```css interactive-example-choice
background: green;
```

```css interactive-example-choice
background: content-box radial-gradient(crimson, skyblue);
```

```css interactive-example-choice
background: no-repeat url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background: left 5% / 15% 60% repeat-x
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background:
  center / contain no-repeat
    url("/shared-assets/images/examples/firefox-logo.svg"),
  #eee 35% url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## Propriétés détaillées correspondantes

Cette propriété permet de définir une ou plusieurs valeurs pour&nbsp;:

- [`background-attachment`](/fr/docs/Web/CSS/Reference/Properties/background-attachment)
- [`background-clip`](/fr/docs/Web/CSS/Reference/Properties/background-clip)
- [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color)
- [`background-image`](/fr/docs/Web/CSS/Reference/Properties/background-image)
- [`background-origin`](/fr/docs/Web/CSS/Reference/Properties/background-origin)
- [`background-position`](/fr/docs/Web/CSS/Reference/Properties/background-position)
- [`background-repeat`](/fr/docs/Web/CSS/Reference/Properties/background-repeat)
- [`background-size`](/fr/docs/Web/CSS/Reference/Properties/background-size)

Lorsqu'on utilise la propriété raccourcie `background`, les valeurs fournies sont appliquées et pour les valeurs absentes, la propriété réinitialisera les propriétés détaillées avec leurs valeurs initiales.

> [!NOTE]
> La propriété [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color) ne peut être définie que sur le dernier arrière-plan, car il n'y a qu'une seule couleur d'arrière-plan pour un élément.

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
- Une valeur `<box>` présente zéro, une voire deux fois. Si elle n'est présente qu'une fois, cette valeur sera utilisée pour définir [`background-origin`](/fr/docs/Web/CSS/Reference/Properties/background-origin) et [`background-clip`](/fr/docs/Web/CSS/Reference/Properties/background-clip). Si elle est présente à deux reprises, la première occurrence sera utilisée pour définir [`background-origin`](/fr/docs/Web/CSS/Reference/Properties/background-origin) et la seconde définira [`background-clip`](/fr/docs/Web/CSS/Reference/Properties/background-clip).
- Une valeur `<background-color>` qui peut uniquement être incluse pour la dernière couche qui est définie.

### Valeurs

- `<attachment>`
  - : Voir [`background-attachment`](/fr/docs/Web/CSS/Reference/Properties/background-attachment)
- `<box>`
  - : Voir [`background-clip`](/fr/docs/Web/CSS/Reference/Properties/background-clip) et [`background-origin`](/fr/docs/Web/CSS/Reference/Properties/background-origin)
- `<background-color>`
  - : Voir [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color)
- `<bg-image>`
  - : Voir [`background-image`](/fr/docs/Web/CSS/Reference/Properties/background-image)
- `<position>`
  - : Voir [`background-position`](/fr/docs/Web/CSS/Reference/Properties/background-position)
- `<repeat-style>`
  - : Voir [`background-repeat`](/fr/docs/Web/CSS/Reference/Properties/background-repeat)
- `<bg-size>`
  - : Voir [`background-size`](/fr/docs/Web/CSS/Reference/Properties/background-size).

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisatrices et utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre la règle 1.1 du WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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
  background: url("star-solid.gif") #99f repeat-y fixed;
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`box-decoration-break`](/fr/docs/Web/CSS/Reference/Properties/box-decoration-break)
- [Les dégradés](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- [Gérer plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
