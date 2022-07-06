---
title: background-image
slug: Web/CSS/background-image
browser-compat: css.properties.background-image
translation_of: Web/CSS/background-image
---
{{CSSRef}}

La propriété **`background-image`** permet de définir une ou plusieurs images comme arrière(s)-plan(s) pour un élément.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Les images sont dessinées les unes au-dessus des autres. La première image indiquée est dessinée comme étant la plus proche de l'utilisateur.

Les bordures de l'élément sont dessinées par-dessus l'arrière-plan et la couleur [`background-color`](/fr/docs/Web/CSS/background-color) est dessinée sous l'arrière-plan. La position et les limites de chaque image sont gérées grâce aux propriétés [`background-clip`](/fr/docs/Web/CSS/background-clip) et [`background-origin`](/fr/docs/Web/CSS/background-origin).

Si une image donnée ne peut pas être chargée (par exemple lorsqu'il est impossible de charger un fichier via l'URI indiqué), les navigateurs considèreront la valeur comme `none`.

> **Note :** Même si les images sont opaques et que les couleurs ne seront pas affichées de façon normale, les développeurs doivent toujours définir une couleur d'arrière-plan via [`background-color`](/fr/docs/Web/CSS/background-color) au cas où les images ne peuvent être chargées.

## Syntaxe

```css
/* Valeur simple */
background-image: url('https://example.com/bck.png');

/* Plusieurs valeurs */
background-image: url('https://example.com/top.png'), url('https://example.com/bottom.png');

background-image:
  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
  url('catfront.png');

/* Valeur avec un mot-clé */
background-image: none;

/* Valeurs globales */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'aucune image ne doit être utilisée comme arrière-plan.
- `<image>`
  - : Une valeur [`<image>`](/fr/docs/Web/CSS/image) qui indique l'image à afficher. On peut avoir plusieurs images en arrière-plan en séparant les valeurs par des virgules.

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisatrices et utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre les règles du WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de succès 1.1.1 — Comprendre les règles du WCAG 2.0 (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

On voit ici l'effet obtenu avec plusieurs images&nbsp;: l'étoile est légèrement transparente et se superpose par-dessus l'image du chat.

### HTML

```html
<div>
  <p class="catsandstars">
    Un paragraphe avec des chats<br/>
    et des étoiles.
  </p>
  <p>Pas ici.</p>
  <p class="catsandstars">
    Et voilà encore des chats.<br/>
    Et des étoiles !
  </p>
  <p>Puis plus rien.</p>
</div>
```

### CSS

```css
p {
  font-size: 1.5em;
  color: #FE7F88;
  background-color: transparent;
  background-image: none;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image:  url("startransparent.gif"),
                     url("catfront.png");
  background-color: transparent;
}
```

### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Implémenter des sprites en CSS](/fr/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- L'élément HTML [`<img>`](/fr/docs/Web/HTML/Element/Img),
- Les types de données CSS relatifs aux images&nbsp;:
  - [`<image>`](/fr/docs/Web/CSS/image)
  - [`<gradient>`](/fr/docs/Web/CSS/gradient)
- Les fonctions CSS relatives aux images&nbsp;:
  - [`cross-fade()`](/fr/docs/Web/CSS/cross-fade())
  - [`element()`](/fr/docs/Web/CSS/element())
  - [`image()`](/fr/docs/Web/CSS/image/image())
  - [`image-set()`](/fr/docs/Web/CSS/image/image-set())
  - [`linear-gradient`](/fr/docs/Web/CSS/gradient/linear-gradient())
  - [`radial-gradient`](/fr/docs/Web/CSS/gradient/radial-gradient())
  - [`conic-gradient`](/fr/docs/Web/CSS/gradient/conic-gradient())
  - [`repeating-linear-gradient`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient())
  - [`repeating-radial-gradient`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient())
  - [`repeating-conic-gradient`](/fr/docs/Web/CSS/gradient/repeating-conic-gradient()),
  - [`paint()`](/fr/docs/Web/CSS/image/paint())
  - [`url()`](/fr/docs/Web/CSS/url())
