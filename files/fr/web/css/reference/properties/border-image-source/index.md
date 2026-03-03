---
title: border-image-source
slug: Web/CSS/Reference/Properties/border-image-source
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-image-source`** définit l'image source utilisée pour créer [l'image de bordure](/fr/docs/Web/CSS/Reference/Properties/border-image) d'un élément.

La propriété {{CSSxRef("border-image-slice")}} permet de diviser l'image source en régions, qui sont ensuite appliquées dynamiquement à la bordure imagée finale.

{{InteractiveExample("Démonstration CSS&nbsp;: border-image-source")}}

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-diamonds.png");
```

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-stars.png");
```

```css interactive-example-choice
border-image-source: repeating-linear-gradient(
  45deg,
  transparent,
  #4d9f0c 20px
);
```

```css interactive-example-choice
border-image-source: none;
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

## Syntaxe

```css
/* Valeur avec un mot-clé */
border-image-source: none;

/* Valeur de type <image> */
border-image-source: url("image.jpg");
border-image-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: revert-layer;
border-image-source: unset;
```

### Valeurs

- `none`
  - : Aucune image de bordure n'est utilisée. L'apparence définie par {{CSSxRef("border-style")}} est affichée à la place.
- {{CSSxRef("image")}}
  - : Référence de l'image à utiliser pour la bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```css
.box {
  border-image-source: url("image.png");
}
```

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
- [Images de bordure dans CSS&nbsp;: un domaine clé pour l'Interop 2023](/fr/blog/border-images-interop-2023/) sur le blog MDN (2023)
