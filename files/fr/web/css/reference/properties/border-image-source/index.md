---
title: border-image-source
slug: Web/CSS/Reference/Properties/border-image-source
original_slug: Web/CSS/border-image-source
---

{{CSSRef}}

La propriété **`border-image-source`** définit l'image (type {{cssxref("&lt;image&gt;")}}) qu'on souhaite utiliser pour mettre en forme la bordure. Si la valeur de cette propriété vaut `none`, ce sera la mise en forme définie par la propriété {{cssxref("border-style")}} qui sera utilisée.

{{InteractiveExample("CSS Demo: border-image-source")}}

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
  <div id="example-element">This is a box with a border around it.</div>
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
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
/* Ici, pas de border-image, */
/* on utilise border-style */
border-image-source: none;

/* Valeur de type <image> */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
```

La propriété {{cssxref("border-image-slice")}} peut être utilisée afin de diviser une image source en régions qui seront insérées dynamiquement pour constituer la bordure imagée finale.

### Valeurs

- `none`
  - : Cette valeur permet d'indiquer qu'aucune image ne doit être utilisée pour la bordure. Ce sera le style défini par la propriété {{cssxref("border-style")}} qui sera utilisé.
- `<image>`
  - : Une référence vers l'Image qu'on souhaite utiliser pour dessiner la bordure. Voir {{cssxref("&lt;image&gt;")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Voir la page de la propriété raccourcie {{cssxref("border-image")}} et les différents exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url()", "url()")}}
