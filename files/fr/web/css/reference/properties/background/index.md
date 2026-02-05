---
title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 17fe7cfd4967960c9ee8ec2c423aaf27c66575ba
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`background`** définit l'ensemble des propriétés de style d'arrière-plan en une seule déclaration, comme la couleur, l'image, l'origine, la taille et le mode de répétition.

{{InteractiveExample("Démonstration CSS&nbsp;: background")}}

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
  #eeeeee 35% url("/shared-assets/images/examples/lizard.png");
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

## Propriétés constitutives

Cette propriété est une propriété raccourcie qui regroupe les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("background-attachment")}}
- {{CSSxRef("background-clip")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("background-image")}}
- {{CSSxRef("background-origin")}}
- {{CSSxRef("background-position")}}
- {{CSSxRef("background-repeat")}}
- {{CSSxRef("background-size")}}

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
background: revert-layer;
background: unset;
```

### Valeurs

- `<attachment>`
  - : Voir {{CSSxRef("background-attachment")}}. Par défaut&nbsp;: `scroll`.
- `<visual-box>`
  - : Voir {{CSSxRef("background-clip")}} et {{CSSxRef("background-origin")}}. Par défaut&nbsp;: `border-box` et `padding-box` respectivement.
- `<'background-color'>`
  - : Voir {{CSSxRef("background-color")}}. Par défaut&nbsp;: `transparent`.
- `<bg-image>`
  - : Voir {{CSSxRef("background-image")}}. Par défaut&nbsp;: `none`.
- `<bg-position>`
  - : Voir {{CSSxRef("background-position")}}. Par défaut&nbsp;: `0% 0%`.
- `<repeat-style>`
  - : Voir {{CSSxRef("background-repeat")}}. Par défaut&nbsp;: `repeat`.
- `<bg-size>`
  - : Voir {{CSSxRef("background-size")}}. Par défaut&nbsp;: `auto`.

## Description

La propriété raccourcie `background` permet de déclarer toutes les propriétés d'arrière-plan CSS en une seule déclaration. L'arrière-plan se situe sous le contenu d'un élément. Lorsque plusieurs valeurs d'arrière-plan séparées par des virgules sont présentes, chacune constitue une couche peinte au‑dessus de la précédente.

La propriété `background` est composée d'une ou plusieurs couches d'arrière-plan, séparées par des virgules. Chaque couche peut inclure zéro, un ou deux composants `<visual-box>` et zéro ou un des composants `<attachment>`, `<bg-image>`, `<bg-position>`, `<bg-size>` et `<repeat-style>`. Si deux composants `<bg-position>`, `<bg-size>` ou `<repeat-style>` sont définis, la première valeur correspond à la dimension horizontale et la seconde à la dimension verticale. Si une seule valeur est définie, elle s'applique aux deux dimensions.

Le composant `<'background-color'>` ne peut être inclus que dans la dernière couche d'arrière-plan définie.

Les propriétés de composant non définies dans la déclaration raccourcie `background` prennent leurs valeurs par défaut.

### Ordre des propriétés de composant

Comme certaines propriétés constitutives partagent des types de valeurs, l'ordre de ces propriétés dans la propriété raccourcie est important.

La valeur `<bg-size>` ne peut être incluse qu'immédiatement après `<bg-position>`, séparée par le caractère `/`. Par exemple&nbsp;: `10px 10px / 80% 80%` signifie que l'image d'arrière-plan mesure `80%` de la hauteur et de la largeur de l'élément, et sera positionnée à `10px` du haut et à `10px` de la gauche du coin supérieur gauche de l'élément. Dans `<bg-position>`, si les deux valeurs sont des longueurs, ou si l'une est une longueur et l'autre `center`, la première valeur correspond à la position horizontale et la seconde à la position verticale.

Chaque couche d'arrière-plan peut inclure zéro, une ou deux valeurs [`<visual-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#visual-box). Si une seule valeur est incluse, elle définit à la fois {{CSSxRef("background-origin")}} et {{CSSxRef("background-clip")}}. Si deux valeurs sont présentes, la première occurrence définit `background-origin` et la seconde définit `background-clip`. Si aucune valeur `<visual-box>` n'est présente, `background-origin` prend la valeur par défaut `border-box` et `background-clip` prend la valeur par défaut `padding-box`.

Bien qu'il n'y ait pas d'exigence d'ordre pour les autres propriétés d'arrière-plan, l'ordre suivant est recommandé pour la cohérence et la lisibilité&nbsp;; rappelez‑vous qu'aucune des valeurs n'est obligatoire&nbsp;:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

La déclaration `background` suivante définit explicitement toutes les valeurs par défaut dans cet ordre&nbsp;:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Les trois lignes CSS suivantes sont équivalentes à l'exemple ci‑dessus, même si l'ordre diffère&nbsp;:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Ordre de peinture des images

Si plusieurs arrière-plans séparés par des virgules sont inclus, ils créent plusieurs couches d'arrière-plan empilées les unes sur les autres. Le premier arrière-plan de la liste crée la couche supérieure. Si la couche supérieure ne contient aucune zone transparente, c'est la seule couche qui sera visible.

La dernière couche est la couche inférieure. La couleur d'arrière-plan est toujours incluse dans cette couche.

### Application de l'arrière-plan du corps du document

Si la valeur calculée de `background-image` de l'élément HTML {{HTMLElement("html")}} `:root` est `none` et que son `background-color` est `transparent`, le navigateur transfère les styles `background` définis sur l'élément HTML {{HTMLElement("body")}} vers la racide (`:root`) et considère que le corps (`<body>`) est comme si `background: initial` avait été appliqué. Autrement dit, l'élément `<html>` reçoit tous les styles `background` définis sur le `<body>`, et les propriétés d'arrière-plan du `<body>` sont réglées sur leurs valeurs initiales.

En raison de ce comportement, les auteur·ice·s des spécifications recommandent de définir les styles d'arrière-plan de votre document dans le bloc de styles `body` plutôt que dans celui de `html`. Cependant, il est important de noter que l'utilisation du confinement désactive ce comportement. Lorsque la propriété {{CSSxRef("contain")}} est définie sur une valeur autre que `none` pour l'élément `<html>` ou `<body>`, la propriété `background` et ses composantes de forme longue ne se propagent pas de l'élément `<body>` vers le `<html>` racine.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisateur·ice·s. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [MDN Comprendre le WCAG, explications de la règle 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre le critère de réussite 1.1.1 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Exemples

### Définir des arrière-plans avec des mots-clés de couleur et des images

#### HTML

```html
<p class="banniere">
  Dessine-moi une étoile<br />
  Qui brille<br />
  Dans le ciel.
</p>
<p class="attention">Voici un paragraphe&nbsp;!</p>
<p></p>
```

#### CSS

```css
.attention {
  background: pink;
}

.banniere {
  background: url("star-solid.gif") #9999ff repeat-y fixed;
}
```

#### Résultat

{{EmbedLiveSample("Définir des arrière-plans avec des mots-clés de couleur et des images")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("box-decoration-break")}}
- [Utiliser les dégradés](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
