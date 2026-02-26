---
title: background-image
slug: Web/CSS/Reference/Properties/background-image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
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
  linear-gradient(rgb(0 0 255 / 0.5), rgb(255 255 0 / 0.5)),
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

Chaque image d'arrière-plan est définie soit par le mot-clé `none`, soit par une valeur {{CSSxRef("image")}}.

Pour définir plusieurs images d'arrière-plan, indiquez plusieurs valeurs, séparées par une virgule.

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'aucune image ne doit être utilisée comme arrière-plan.
- {{CSSxRef("&lt;image&gt;")}}
  - : Une valeur qui indique l'image à afficher. On peut avoir plusieurs images en arrière-plan en séparant les valeurs par des virgules.

## Description

Les images d'arrière-plan sont dessinées sur des couches de contexte d'empilement les unes au-dessus des autres. La première couche indiquée est dessinée comme si elle était la plus proche de l'utilisateur·ice.

Les [bordures](/fr/docs/Web/CSS/Reference/Properties/border) de l'élément sont ensuite dessinées au-dessus, et la {{CSSxRef("background-color")}} est dessinée en dessous. La façon dont les images sont dessinées par rapport à la boîte et à ses bordures est définie par les propriétés CSS {{CSSxRef("background-clip")}} et {{CSSxRef("background-origin")}}.

Si une image indiquée ne peut pas être affichée (par exemple, si le fichier désigné par l'URI ne peut pas être chargé), les navigateurs la traitent comme une valeur `none`.

> [!NOTE]
> Même si les images sont opaques et que la couleur ne s'affichera pas dans des circonstances normales, il faut toujours définir une {{CSSxRef("background-color")}}. Si les images ne peuvent pas être chargées — par exemple, si le réseau est indisponible — la couleur d'arrière-plan sera utilisée comme solution de repli.

## Accessibilité

Les navigateurs ne fournissent aucune information particulière sur les images d'arrière-plan aux technologies d'assistance. Cela concerne principalement les lecteurs d'écran, car un lecteur d'écran n'annoncera pas leur présence et ne transmettra donc rien à l'utilisateur·ice. Si l'image contient des informations essentielles à la compréhension générale de la page, il vaut mieux décrire ces informations de façon sémantique dans le document.

- [Comprendre les règles du WCAG 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre le critère de succès 1.1.1 | Comprendre les règles du WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Il est également important de vérifier que le contraste entre l'image d'arrière-plan et le texte au premier plan est suffisamment élevé pour que les personnes en situation de basse vision puissent lire le contenu de la page.

Le ratio de contraste des couleurs est déterminé en comparant la luminance des valeurs de couleur du texte et de l'arrière-plan. Pour respecter les [Règles pour l'accessibilité des contenus Web (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/), un ratio de 4.5:1 est requis pour le texte courant et 3:1 pour les textes plus grands comme les titres. Un texte est considéré comme grand s'il mesure au moins 24px ou s'il est en gras et mesure au moins 18.66px.

- [Vérificateur de contraste WebAIM <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Comprendre la règle WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Superposition d'images d'arrière-plan

Notez que l'image de l'étoile est partiellement transparente et superposée à l'image du chat.

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
  font-weight: bold;
  font-size: 1.5em;
  color: white;
  text-shadow: 0.07em 0.07em 0.05em black;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.cats-and-stars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-color: transparent;
}
```

#### Résultat

{{EmbedLiveSample("Superposition d'images d'arrière-plan")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("img")}}
- Les fonctions CSS associées aux images&nbsp;:
  - {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}
  - {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
  - {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{CSSxRef("url_value", "&lt;url&gt;")}}
- [Utiliser des dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- [Implémenter des sprites en CSS](/fr/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
- Le module d'[images CSS](/fr/docs/Web/CSS/Guides/Images)

- Les propriétés CSS relatives aux arrière-plans&nbsp;:
  - {{CSSxRef("background-attachment")}}
  - {{CSSxRef("background-clip")}}
  - {{CSSxRef("background-color")}}
  - {{CSSxRef("background-origin")}}
  - {{CSSxRef("background-position")}}
  - {{CSSxRef("background-repeat")}}
  - {{CSSxRef("background-size")}}
  - {{CSSxRef("background")}} (raccourcie)
- [Apprendre&nbsp;: Bordures et arrière-plans](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Redimensionner les images d'arrière-plan](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- Le module [sur les arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
