---
title: Propriété CSS `frame-sizing`
short-title: frame-sizing
slug: Web/CSS/Reference/Properties/frame-sizing
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`frame-sizing`** peut être utilisée pour définir la taille horizontale ou verticale d'un élément HTML {{HTMLElement("iframe")}} afin qu'elle soit égale à la taille de mise en page de son document intégré dans la même dimension, mais uniquement si le document intégré a choisi de partager ses informations de taille.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
frame-sizing: auto;
frame-sizing: content-width;
frame-sizing: content-height;
frame-sizing: content-inline-size;
frame-sizing: content-block-size;

/* Valeurs globales */
frame-sizing: inherit;
frame-sizing: initial;
frame-sizing: revert;
frame-sizing: revert-layer;
frame-sizing: unset;
```

### Valeurs

La valeur de la propriété `frame-sizing` est l'un des mots-clés suivants&nbsp;:

- `auto`
  - : La valeur initiale. La taille de l'élément `<iframe>` n'est pas affectée par la taille de mise en page de son document intégré.
- `content-width`
  - : La largeur ({{CSSxRef("width")}}) de l'élément `<iframe>` est définie sur la largeur de mise en page de son document intégré.
- `content-height`
  - : La hauteur ({{CSSxRef("height")}}) de l'élément `<iframe>` est définie sur la hauteur de mise en page de son document intégré.
- `content-inline-size`
  - : La taille en ligne ({{CSSxRef("inline-size")}}) de l'élément `<iframe>` est définie sur la taille de mise en page de son document intégré dans la direction en ligne.
- `content-block-size`
  - : La taille de bloc ({{CSSxRef("block-size")}}) de l'élément `<iframe>` est définie sur la taille de mise en page de son document intégré dans la direction de bloc.

## Description

Pour des raisons de sécurité et de confidentialité, les éléments HTML {{HTMLElement("iframe")}} n'exposent pas par défaut au document parent des informations sur la taille du contenu du document qu'ils intègrent.

Pour permettre le redimensionnement réactif des éléments HTML {{HTMLElement("iframe")}} en fonction de leur contenu, la balise [`<meta name="responsive-embedded-sizing">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) peut être incluse dans un document intégré pour lui permettre de partager ses informations de taille avec le document parent. La propriété `frame-sizing` peut alors être définie sur l'élément `<iframe>` pour qu'il adopte la même taille horizontale ou verticale que la taille réelle du contenu du document intégré (appelée **taille intrinsèque de mise en page interne** dans la spécification, mais abrégée en «&nbsp;taille de mise en page&nbsp;» dans notre documentation). Le contenu du document s'adapte alors parfaitement à l'élément `<iframe>` qui l'intègre, évitant ainsi les barres de défilement inutiles.

La propriété `frame-sizing` peut prendre les valeurs `content-width` ou `content-height` pour que la `width` ou la `height` de l'élément `<iframe>` adopte respectivement la largeur ou la hauteur de mise en page du document intégré.

Il existe également des équivalents logiques — la propriété `frame-sizing` peut prendre les valeurs `content-inline-size` ou `content-block-size` pour que la `inline-size` ou la `block-size` de l'élément `<iframe>` adopte respectivement la taille en ligne ou la taille de bloc du document intégré. La direction de bloc ou en ligne est déterminée par le {{CSSxRef("writing-mode")}} de l'élément `<iframe>`, et non par celle du contenu du document intégré.

Pour redimensionner dynamiquement l'élément `<iframe>` lorsque le document intégré modifie sa taille de mise en page, vous pouvez appeler la méthode {{DOMxRef("Window.requestResize()")}} depuis le document intégré pour lui faire signaler une taille mise à jour.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre l'utilisation de la propriété `frame-sizing`.

Nous avons deux documents, le document principal `index.html` et le document intégré `frame.html`.

#### Le document principal `index.html`

Le HTML du document `index.html` contient un en-tête et un `<iframe>`, dans lequel est intégré le document `frame.html`&nbsp;:

```html
<h1>Cadre intégré réactif — exemple simple</h1>

<iframe src="frame.html"></iframe>
```

Dans le CSS de `index.html`, nous donnons à l'élément `<iframe>` une valeur `frame-sizing` de `content-block-size`. Comme l'élément `<iframe>` a un mode d'écriture (`writing-mode`) horizontal, sa hauteur (`height`) est définie sur la hauteur de mise en page du document intégré.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Le document intégré `frame.html`

Le document `frame.html` contient un en-tête et quelques paragraphes. Plus important encore, il inclut la balise `<meta name="responsive-embedded-sizing" />`, qui lui permet de partager la taille de mise en page de son contenu avec le document parent.

```html
<head>
  ...

  <meta name="responsive-embedded-sizing" />

  ...
</head>
<body>
  <h1>Ceci est mon cadre</h1>
  <p>Ceci est le contenu de mon cadre.</p>
  <p>Ceci est un peu plus de contenu.</p>
</body>
```

#### Résultat

Ouvrez notre [démonstration de redimensionnement réactif d'un `<iframe>` simple <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) dans un onglet séparé pour la voir en action ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic)).

Même si aucune hauteur (`height`) explicite n'a été définie sur l'élément `<iframe>`, sa hauteur est ajustée pour contenir exactement le document intégré, sans barres de défilement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [de taille de boîte CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
- L'élément HTML [`<meta name="responsive-embedded-sizing">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
- La méthode API {{DOMxRef("Window.requestResize()")}}
