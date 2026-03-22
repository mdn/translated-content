---
title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`outline`** définit la plupart des propriétés de contour dans une seule déclaration.

{{InteractiveExample("Démonstration CSS&nbsp;: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgb(170 50 220 / 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un contour autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-style")}}
- {{CSSxRef("outline-color")}}

## Syntaxe

```css
/* style */
outline: solid;

/* couleur | style */
outline: dashed #ff6666;

/* style | épaisseur */
outline: inset thick;

/* couleur | style | épaisseur */
outline: 3px solid green;

/* Valeurs globales */
outline: inherit;
outline: initial;
outline: revert;
outline: revert-layer;
outline: unset;
```

La propriété `outline` peut être définie avec une, deux ou trois valeurs parmi celles listées ci-après. L'ordre de ces valeurs n'a pas d'importance. Comme pour toutes les propriétés raccourcies, toutes les sous-valeurs omises seront définies avec [leur valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale).

> [!NOTE]
> Le contour sera invisible pour de nombreux éléments si son style n'est pas défini. En effet, le style par défaut est `none`. Une exception notable est les éléments `input`, qui reçoivent un style par défaut par les navigateurs.

### Valeurs

- `<'outline-width'>`
  - : Définit l'épaisseur du contour. Par défaut, elle est `medium` si elle est absente. Voir {{CSSxRef("outline-width")}}.
- `<'outline-style'>`
  - : Définit le style du contour. Par défaut, il est `none` si absent. Voir {{CSSxRef("outline-style")}}.
- `<'outline-color'>`
  - : Définit la couleur du contour. Par défaut, elle est `invert` pour les navigateurs qui le supportent, `currentColor` pour les autres. Voir {{CSSxRef("outline-color")}}.

## Description

Le contour est une ligne à l'extérieur de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) de l'élément. Contrairement aux autres zones de la boîte, les contours n'occupent pas d'espace, ils n'affectent donc pas la mise en page du document.

Il existe plusieurs propriétés qui affectent l'apparence d'un contour. Il est possible de changer le style, la couleur et l'épaisseur en utilisant la propriété `outline`, la distance par rapport à la bordure en utilisant la propriété {{CSSxRef("outline-offset")}}, et les angles des coins en utilisant la propriété {{CSSxRef("border-radius")}}.

Un contour n'est pas obligé d'être rectangulaire&nbsp;: Lorsqu'on traite du texte multiligne, certains navigateurs dessineront un contour pour chaque boîte de ligne séparément, tandis que d'autres envelopperont tout le texte avec un seul contour.

## Accessibilité

Attribuer à `outline` une valeur de `0` ou `none` supprimera le style de sélection par défaut du navigateur. Si un élément peut être interactif, il doit avoir un indicateur de sélection visible. Fournissez un style de sélection évident si le style de sélection par défaut est supprimé.

- [Comment concevoir des indicateurs de sélection utiles et utilisables <sup>(angl.)</sup>](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1&nbsp;: [Comprendre le critère de succès 2.4.7&nbsp;: Sélection visible <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `outline` pour définir un style de sélection

#### HTML

```html
<a href="#">Ceci est un lien avec un style de sélection spécial.</a>
```

#### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #ee7733;
  outline-offset: 4px;
  background: #ffffaa;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `outline` pour définir un style de sélection", "100%", 85)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("outline-width")}}
- La propriété {{CSSxRef("outline-style")}}
- La propriété {{CSSxRef("outline-color")}}
- La propriété {{CSSxRef("border")}}
