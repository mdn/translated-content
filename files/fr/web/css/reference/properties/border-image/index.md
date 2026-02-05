---
title: border-image
slug: Web/CSS/Reference/Properties/border-image
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-image`** dessine une image autour d'un élément donné. Elle remplace la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) classique de l'élément.

> [!NOTE]
> Il est conseillé d'indiquer un {{CSSxRef("border-style")}} distinct au cas où l'image de bordure ne se chargerait pas. Bien que la spécification ne l'exige pas strictement, certains navigateurs n'affichent pas l'image de bordure si {{CSSxRef("border-style")}} vaut `none` ou si {{CSSxRef("border-width")}} vaut `0`.

{{InteractiveExample("Démonstration CSS&nbsp;: border-image")}}

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30 /
  19px round;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
  fill / 30px / 30px space;
```

```css interactive-example-choice
border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
```

```css interactive-example-choice
border-image: repeating-linear-gradient(30deg, #4d9f0c, #9198e5, #4d9f0c 20px)
  60;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Ceci est une boîte entourée d'une bordure.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-image-outset")}}
- {{CSSxRef("border-image-repeat")}}
- {{CSSxRef("border-image-slice")}}
- {{CSSxRef("border-image-source")}}
- {{CSSxRef("border-image-width")}}

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

/* Valeurs globales */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

La propriété `border-image` peut être définie avec une à cinq valeurs parmi celles définies ci-après.

> [!NOTE]
> Si la [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) de {{CSSxRef("border-image-source")}} vaut `none` ou si l'image ne peut pas être affichée, c'est le {{CSSxRef("border-style")}} correspondant qui sera affiché.

### Valeurs

- `<'border-image-source'>`
  - : L'image source. Voir {{CSSxRef("border-image-source")}}.
- `<'border-image-slice'>`
  - : La façon dont l'image est découpée en zones (jusqu'à 4). Voir {{CSSxRef("border-image-slice")}}.
- `<'border-image-width'>`
  - : La largeur de la bordure avec l'image. Voir {{CSSxRef("border-image-width")}}.
- `<'border-image-outset'>`
  - : La distance entre la bordure et le bord de l'élément. Voir {{CSSxRef("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : La façon dont l'image source est adaptée afin de correspondre aux dimensions de la bordure. Voir {{CSSxRef("border-image-repeat")}}.

## Accessibilité

Les technologies d'assistance ne peuvent pas analyser les images de bordure. Si l'image contient des informations essentielles au sens de la page, mieux vaut décrire ces informations dans le contenu sémantique du document.

- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre les critères pour 1.1.1 | Comprendre WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser une image

Dans cet exemple, nous allons appliquer un motif en losange aux bordures d'un élément. L'image source pour la bordure est un fichier `.png` de 81 pixels sur 81, avec trois losanges disposés verticalement et horizontalement&nbsp;:

![Huit losanges : quatre losanges rouges, un dans chaque coin, et quatre losanges orange, un sur chaque côté. Le milieu est vide.](border.png)

#### HTML

```html
<p id="bitmap">
  Cet élément est entouré d'une image de bordure au format bitmap&nbsp;!
</p>
```

#### CSS

Pour correspondre à la taille d'un seul diamant, nous utiliserons une valeur de 81 divisée par 3, soit `27`, pour découper l'image en zones d'angle et de bord. Pour centrer l'image de bordure sur le bord de l'arrière-plan de l'élément, nous rendrons les valeurs de décalage égales à la moitié des valeurs de largeur. Enfin, une valeur de répétition `round` permettra d'ajuster les tranches de bordure de manière uniforme, c'est-à-dire sans découpe ni espace.

```css
#bitmap {
  width: 200px;
  background-color: #ffffaa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une image", "100%", 200)}}

### Utiliser un dégradé

#### HTML

```html
<div id="gradient">
  Cet élément est entouré d'une image de bordure basée sur un dégradé&nbsp;!
</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #ff3333, #33bbff, #ff3333 30px)
    60;
  padding: 20px;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser un dégradé")}}

### Utiliser des bordures arrondies

La propriété {{CSSxRef("border-radius")}} n'a aucun effet sur l'image de bordure. Cela est dû au fait que {{CSSxRef("border-image-outset")}} peut placer l'image en dehors de la zone de bordure, il n'est donc pas logique que l'image de bordure soit rognée par la zone de bordure. Pour créer des bordures arrondies lors de l'utilisation d'une image de bordure, vous devez créer l'image elle-même avec des coins arrondis, ou, dans le cas d'un dégradé, le dessiner en tant qu'arrière-plan à la place. Ci-dessous, nous montrons une approche pour ce faire, qui consiste à utiliser deux {{CSSxRef("background-image")}}&nbsp;: l'une qui étend la zone de bordure et une autre pour la zone de remplissage.

#### HTML

```html
<div id="rounded">
  Cet élément est entouré d'une image de bordure avec des coins arrondis&nbsp;!
</div>
```

#### CSS

```css
#rounded {
  width: 200px;
  /* Utiliser transparent pour que l'image d'arrière-plan soit visible */
  border: 10px solid transparent;
  padding: 20px;
  border-radius: 20px;
  background-image:
    linear-gradient(white, white), linear-gradient(to right, cyan, lime);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

#### Résultat

{{EmbedLiveSample('utiliser_des_bordures_arrondies')}}

> [!NOTE]
> Il y a une nouvelle valeur `{{CSSxRef("background-clip")}}: border-area` [proposée <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/9456) pour traiter ce cas d'utilisation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("border")}}
- La propriété {{CSSxRef("outline")}}
- La propriété {{CSSxRef("box-shadow")}}
- La propriété {{CSSxRef("background-image")}}
- Le type de donnée {{CSSxRef("url_value", "&lt;url&gt;")}}
- Fonctions pour les dégradés&nbsp;: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Images de bordure dans CSS&nbsp;: un domaine clé pour l'Interop 2023](/fr/blog/border-images-interop-2023/) sur le blog MDN (2023)
