---
title: background-image
slug: Web/CSS/Reference/Properties/background-image
original_slug: Web/CSS/background-image
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-image`** permet de définir une ou plusieurs images comme arrière(s)-plan(s) pour un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: background-image")}}

```css interactive-example-choice
background-image: url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/lizard.png"),
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/star.png"),
  url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
  url("/shared-assets/images/examples/lizard.png");
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

Les images sont dessinées les unes au-dessus des autres. La première image indiquée est dessinée comme étant la plus proche de l'utilisateur.

Les bordures de l'élément sont dessinées par-dessus l'arrière-plan et la couleur {{cssxref("background-color")}} est dessinée sous l'arrière-plan. La position et les limites de chaque image sont gérées grâce aux propriétés {{cssxref("background-clip")}} et {{cssxref("background-origin")}}.

Si une image donnée ne peut pas être chargée (par exemple lorsqu'il est impossible de charger un fichier via l'URI indiqué), les navigateurs considèreront la valeur comme `none`.

> [!NOTE]
> Même si les images sont opaques et que les couleurs ne seront pas affichées de façon normale, les développeurs doivent toujours définir une couleur d'arrière-plan via {{cssxref("background-color")}} au cas où les images ne peuvent être chargées.

## Syntaxe

```css
/* Valeur simple */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

/* Plusieurs valeurs */
background-image:
  radial-gradient(circle, transparent 45%, black 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Valeurs globales */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'aucune image ne doit être utilisée comme arrière-plan.
- `<image>`
  - : Une valeur {{cssxref("&lt;image&gt;")}} qui indique l'image à afficher. On peut avoir plusieurs images en arrière-plan en séparant les valeurs par des virgules.

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisatrices et utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre les règles du WCAG 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de succès 1.1.1 — Comprendre les règles du WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Superposition d'images d'arrière-plan

On voit ici l'effet obtenu avec plusieurs images&nbsp;: l'étoile est légèrement transparente et se superpose par-dessus l'image du chat.

#### HTML

```html
<div>
  <p class="catsandstars">
    Un paragraphe avec des chats<br />
    et des étoiles.
  </p>
  <p>Pas ici.</p>
  <p class="catsandstars">
    Et voilà encore des chats.<br />
    Et des étoiles !
  </p>
  <p>Puis plus rien.</p>
</div>
```

#### CSS

```css
p {
  font-size: 1.5em;
  color: #fe7f88;
  background-color: transparent;
  background-image: none;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-color: transparent;
}
```

#### Résultat

{{EmbedLiveSample('superposition_dimages_darriere-plan')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("img")}}
- Les fonctions CSS associées aux images&nbsp;:
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("url_value", "&lt;url&gt;")}}
- [Utiliser des dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- [Implémenter des sprites en CSS](/fr/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
- Le module d'[images CSS](/fr/docs/Web/CSS/Guides/Images)

- Les propriétés CSS relatives aux arrière-plans&nbsp;:
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} shorthand
- [Apprendre&nbsp;: Bordures et arrière-plans](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Redimensionner les images d'arrière-plan](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- Le module [sur les arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
