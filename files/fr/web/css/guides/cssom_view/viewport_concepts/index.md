---
title: Concepts de zone d'affichage
slug: Web/CSS/Guides/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: a7da8b5f8846bb412400c41e27525760df35f54e
---

Cet article explique le concept de {{Glossary("viewport", "zone d'affichage")}} (<i lang="en">viewport</i> en anglais) — ce que c'est et son impact en termes de CSS, SVG et appareils mobiles. Cet article définit la zone d'affichage initiale et la zone d'affichage réelle, et différencie entre la {{Glossary("visual viewport", "zone d'affichage visuelle")}} (<i lang="en">visual viewport</i> en anglais) et la {{Glossary("layout viewport", "zone d'affichage de la mise en page")}} (<i lang="en">layout viewport</i> en anglais).

## Qu'est-ce qu'une zone d'affichage ?

Une **zone d'affichage** (<i lang="en">viewport</i> en anglais) est une fonctionnalité de l'agent utilisateur utilisée pour établir le bloc contenant initial pour les médias continus.

Le terme générique _zone d'affichage_ fait généralement référence à la zone en graphique actuellement visualisée. En termes de navigateur web, cela correspond généralement à la fenêtre du navigateur, à l'exclusion de l'interface utilisateur, de la barre de menu, etc. C'est la partie du document que vous visualisez.

Au fur et à mesure que le document se charge, la zone d'affichage passe par deux étapes&nbsp;:

- **Zone d'affichage initiale**
  - : La _zone d'affichage initiale_ fait référence à la fenêtre ou à la zone de visualisation de l'agent utilisateur avant que les styles de l'agent utilisateur, les balises HTML {{HTMLElement("meta")}} ou les styles CSS n'aient modifié sa taille. La taille de la zone d'affichage initiale est basée sur la taille de la fenêtre ou de la zone de visualisation, et non sur le contenu. La taille de la zone d'affichage initiale d'un agent utilisateur en plein écran varie selon l'orientation et les appareils, mais est toujours la même pour le même appareil dans la même orientation.

- **Zone d'affichage réelle**
  - : La _zone d'affichage réelle_ est la zone d'affichage que vous obtenez après le traitement de la [balise `<meta>` de la zone d'affichage](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport). Le contenu conçu pour de grandes zones d'affichage peut présenter divers bogues lorsqu'il est affiché dans des zones d'affichage plus petites, notamment des retours à la ligne inattendus, du contenu tronqué et des {{Glossary("scroll container", "conteneurs de défilement")}} mal dimensionnés. La balise meta de la zone d'affichage fournit des indications sur la taille initiale de la zone d'affichage. La zone d'affichage réelle est la taille définie par son attribut [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content). Si cette balise est omise, certains navigateurs mobiles rendent le contenu en utilisant une largeur de bloc contenant initial fixe, généralement `980px`. Ils définissent la largeur de la zone d'affichage réelle à cette valeur, puis réduisent le contenu pour l'adapter, ce qui rend la taille des pixels CSS plus petite que celle des pixels réels.

Les documents, comme cet article, peuvent être très longs. Votre zone d'affichage est tout ce qui est actuellement visible&nbsp;; notamment, la section «&nbsp;qu'est-ce qu'une zone d'affichage&nbsp;», et peut-être une partie du menu de navigation. La taille de la zone d'affichage dépend de la taille de l'écran, du mode plein écran du navigateur et du niveau de zoom du navigateur. Le contenu en dehors de la zone d'affichage, comme la section _Voir aussi_ de ce document, est probablement invisible à l'écran jusqu'à ce qu'il soit fait défiler pour être visible.

- Sur les écrans plus grands où les applications ne sont pas nécessairement en plein écran, la zone d'affichage correspond à la taille de la fenêtre du navigateur.
- Sur la plupart des appareils mobiles et lorsque le navigateur est en mode plein écran, la zone d'affichage correspond à l'écran entier.
- En mode plein écran, la zone d'affichage correspond à l'écran de l'appareil, la fenêtre correspond à la fenêtre du navigateur, qui peut être aussi grande que la zone d'affichage ou plus petite, et le document correspond au site web, qui peut être beaucoup plus grand ou plus large que la zone d'affichage.

Pour les [médias paginés](/fr/docs/Web/CSS/Guides/Paged_media), le bloc contenant initial est basé sur la zone de la page. La zone de la page peut être définie avec les règles {{CSSxRef("@page")}}.

Pour résumer, la zone d'affichage est essentiellement la partie du document qui est actuellement visible.

### Les dimensions de la zone d'affichage sont modifiables

La largeur de la zone d'affichage n'est pas toujours la largeur de la fenêtre. Si vous accédez à la largeur et à la hauteur de la fenêtre et à celles du document avec Chrome ou Firefox, vous pouvez obtenir un résultat comme celui-ci&nbsp;:

```js
document.documentElement.clientWidth; /* 1200 */
window.innerWidth; /* 1200 */
window.outerWidth; /* 1200 */
```

```js
document.documentElement.clientHeight; /* 800 */
window.innerHeight; /* 800 */
window.outerHeight; /* 900 */
```

Il existe plusieurs propriétés du DOM qui permettent d'obtenir la taille de la zone d'affichage et certaines dimensions associées&nbsp;:

- L'élément {{DOMxRef("Element.clientWidth")}} du document correspond à la largeur interne d'un document en [pixels CSS](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport#densité_décran), y compris le remplissage (mais sans les bordures, les marges ni les barres de défilement verticales, le cas échéant). **Il s'agit de la largeur de la zone d'affichage**.
- La largeur interne ({{DOMxRef("Window.innerWidth")}}) correspondent à la largeur, en pixels CSS, de la zone d'affichage de la fenêtre du navigateur, y compris, si elle est affichée, la barre de défilement verticale.
- La largeur extérieure ({{DOMxRef("Window.outerWidth")}}) correspond à la largeur totale de la fenêtre du navigateur, y compris l'ensemble du {{Glossary("chrome")}} de la fenêtre.

Dans une expérience avec ces propriétés, on a constaté que `innerWidth` et `outerWidth` étaient identiques, mais que `outerHeight` était 100 pixels plus grand que `innerHeight`. Cela s'explique par le fait que `outerHeight` inclut le chrome du navigateur&nbsp;: les mesures ont été prises sur un navigateur avec une barre d'adresse et une barre de favoris totalisant 100 pixels de hauteur, mais sans chrome à gauche ou à droite de la fenêtre.

La zone à l'intérieur de `innerHeight` et `innerWidth` est généralement considérée comme le **{{Glossary("layout viewport", "zone d'affichage de la mise en page")}}**. Le chrome du navigateur n'est pas considéré comme faisant partie de la zone d'affichage.

Lorsque le zoom est activé, à la fois Firefox et Chrome rapportent la nouvelle taille en {{Glossary("CSS pixel", "pixel CSS")}} pour `innerWidth` et `clientWidth`. Les valeurs retournées pour `outerWidth` et `outerHeight` dépendent du navigateur&nbsp;: Firefox rapporte la nouvelle valeur en pixels CSS, mais Chrome retourne la longueur dans la taille de pixel par défaut. Lors du zoom, vous pouvez obtenir&nbsp;:

```js
document.documentElement.clientWidth; /* 800 */
window.innerWidth; /* 800 */
window.outerWidth; /* 800 dans Firefox, 1200 dans Chrome */
```

```js
document.documentElement.clientHeight; /* 533 */
window.innerHeight; /* 533 */
window.outerHeight; /* 596 dans Firefox, 900 dans Chrome */
```

La zone d'affichage mesure à l'origine 1200 × 800 pixels. Après le zoom, la zone d'affichage mesure 800 × 533 pixels. C'est la _zone d'affichage de la mise en page_. Avec la feuille de style suivante, les hauts et pieds de page sont placés en haut et en bas de _la zone d'affichage de la mise en page_.

```css
body > header {
  position: fixed;
  top: 0;
}
body > footer {
  position: fixed;
  bottom: 0;
}
```

Nous avons obtenu les dimensions 800 x 533 en effectuant un zoom à l'aide du clavier. L'en-tête et le pied de page sont restés alignés respectivement en haut et en bas de la fenêtre. Mais qu'en est-il si nous effectuons un zoom par pincement sur une tablette&nbsp;? Et si un clavier dynamique s'ouvre sur un téléphone&nbsp;?

### Mise en page et zones d'affichage

La page Web comporte deux zones d'affichage&nbsp;: la **zone d'affichage de la mise en page** et la **zone d'affichage visuelle**. La zone d'affichage visuelle correspond à la partie de la page Web actuellement visible dans le navigateur et elle peut varier. Lorsque l'utilisateur·ice effectue un zoom par pincement sur la page, ouvre un clavier dynamique ou qu'une barre d'adresse auparavant masquée devient visible, la zone d'affichage visuelle rétrécit, mais la zone d'affichage de la mise en page reste inchangée.

Les en-têtes ou pieds de page [fixes](/fr/docs/Web/CSS/Reference/Properties/position#positionnement_fixe), comme indiqué ci-dessus, restent ancrés en haut et en bas de la _zone d'affichage de mise en page_ et restent donc visibles lorsque l'on effectue un zoom à l'aide du clavier. Si vous effectuez un zoom par pincement, la zone d'affichage de mise en page peut ne pas être entièrement visible. Si vous effectuez un zoom à partir du centre de la zone d'affichage de la mise en page, le contenu s'étend dans les quatre directions. Si vous disposez d'un en-tête ou d'un pied de page fixe, ceux-ci restent collés en haut ou en bas de la zone d'affichage de la mise en page, mais ils risquent de ne pas être visibles en haut et en bas de l'écran de l'appareil — qui correspond à la zone d'affichage visuelle. La zone d'affichage visuelle correspond à la partie actuellement visible de la zone d'affichage de la mise en page. Si vous faites défiler vers le bas, vous modifiez le contenu de la fenêtre d'affichage visuelle et faites apparaître le bas de la fenêtre d'affichage de mise en page, affichant ainsi le pied de page fixe, qui reste alors ancré en bas.

La zone d'affichage visuelle est la portion visible d'un écran, à l'exclusion des claviers à l'écran, des zones situées en dehors d'une zone de zoom par pincement ou d'autres fonctionnalités qui ne s'adaptent pas aux dimensions d'une page. La zone d'affichage visuelle a la même taille que la zone d'affichage de mise en page ou est plus petite.

Pour une page contenant des cadres intégrés (<i lang="en">iframes</i> en anglais), des objets ou des SVG externes, les pages contenant et chaque fichier inclus ont leur propre objet window unique. Seule la fenêtre de niveau supérieur possède une zone d'affichage visuelle qui peut être distincte de la zone d'affichage de mise en page. Pour les documents inclus, la zone d'affichage visuelle et la zone d'affichage de mise en page sont identiques.

### CSS

La zone d'affichage de la mise en page et la zone d'affichage visuelle mentionnées ci-dessus ne sont pas les seules zones d'affichage que vous rencontrerez. Toute sous-zone d'affichage entièrement ou partiellement affichée dans la zone d'affichage de la mise en page est considérée comme une zone d'affichage visuelle.

On pense généralement que les requêtes média [`width`](/fr/docs/Web/CSS/Reference/At-rules/@media/width) et [`height`](/fr/docs/Web/CSS/Reference/At-rules/@media/height) sont relatives à la largeur et à la hauteur de la fenêtre du navigateur. Elles sont en réalité relatives à la zone d'affichage, qui est la fenêtre dans le document principal mais est la taille intrinsèque de l'élément parent dans un contexte de navigation imbriqué comme les objets, les cadres intégrés et les SVG. En CSS, nous avons également des [unités de longueur basées sur la taille de la zone d'affichage](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_la_vue). Une unité `vh` correspond à 1% de la hauteur de la zone d'affichage de la mise en page. De même, l'unité `vw` correspond à 1% de la largeur de la zone d'affichage de la mise en page.

#### `<iframe>`

À l'intérieur d'un cadre intégré ({{HTMLElement("iframe")}}), la zone d'affichage visuelle correspond à la taille de la largeur et de la hauteur internes du cadre intégré, plutôt qu'à celles du document parent. Vous pouvez définir n'importe quelle hauteur et largeur pour un cadre intégré, mais le document entier peut ne pas être visible.

Si vous utilisez des [unités de longueur basées sur la taille de la zone d'affichage](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_la_vue) dans votre CSS à l'intérieur du document du cadre intégré, `1vh` correspond à 1% de la hauteur du cadre intégré et `1vw` correspond à 1% de la largeur du document.

```css
iframe {
  width: 50vw;
}
```

Si le cadre intégré est défini à 50vw, il occupe 50% de la largeur du document parent de `1200px` dans notre exemple ci-dessus, soit `600px`, avec `1vw` correspondant à `6px`. Lors d'un zoom avant, le cadre intégré rétrécit à `400px` et `1vw` devient `4px`.

Une requête média basée sur la largeur dans le document du cadre intégré est relative à la zone d'affichage du cadre intégré.

```css
@media screen and (width <= 500px) {
  p {
    color: red;
  }
}
```

Si le CSS ci-dessus est inclus dans le cadre intégré, les paragraphes deviennent rouges lorsque l'utilisateur·ice a zoomé·e, mais ce style ne s'applique pas dans l'état non zoomé.

#### SVG

Dans un document [SVG](/fr/docs/Web/SVG), la zone d'affichage correspond à la partie de l'image SVG qui est visible à l'écran. Vous pouvez définir n'importe quelle hauteur et largeur sur un {{SVGElement("svg")}}, mais l'image entière peut ne pas être visible. La zone visible est appelée la zone d'affichage. La taille de la zone d'affichage peut être définie à l'aide des attributs `width` et `height` de l'élément `<svg>`.

```html
<svg height="300" width="400"></svg>
```

Dans cet exemple, la zone d'affichage possède un {{Glossary("aspect ratio", "rapport d'aspect")}} de 3:4 et mesure, par défaut, 400 par 300 unités, une unité étant généralement un pixel CSS.

SVG possède également un [système de coordonnées interne](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems) défini avec l'attribut {{SVGAttr("viewBox")}}, qui n'est pas lié à cette discussion sur la zone d'affichage.

Si vous incluez un fichier SVG dans votre HTML, la zone d'affichage du SVG est le bloc contenant initial, ou la largeur et la hauteur du conteneur SVG. L'utilisation de la requête {{CSSxRef("@media")}} dans le CSS de votre SVG est relative à ce conteneur, et non au navigateur.

```css
@media screen and (400px <= width <= 500px) {
  /* Le CSS vient ici */
}
```

Généralement, lorsque vous écrivez la requête média ci-dessus, les styles sont appliqués si la zone d'affichage, généralement la fenêtre du navigateur, est comprise entre 400px et 500px, inclus. La requête média de largeur dans le SVG est basée sur l'élément dans lequel le SVG est contenu — le {{HTMLElement("img")}} si la source est un fichier SVG, le SVG lui-même si le SVG est inclus directement dans le HTML, ou le parent si l'élément parent a une largeur assignée — et non sur la largeur de la zone d'affichage. Avec la requête média ci-dessus dans notre fichier SVG, le CSS est appliqué si le conteneur SVG est compris entre 400px et 500px.

### JavaScript

L'interface [`VisualViewport`](/fr/docs/Web/API/VisualViewport#exemples) fournit un mécanisme pour interroger et modifier les propriétés de la zone d'affichage visuelle.

L'interface [`Viewport`](/fr/docs/Web/API/Viewport) fournit un mécanisme pour interroger et modifier les propriétés de la zone d'affichage visuelle.

## Zones d'affichage sur mobiles

Les appareils mobiles existent dans toutes les formes et tailles, avec des écrans ayant des ratios de {{Glossary("device pixel", "pixel de l'appareil")}} différents. La zone d'affichage d'un navigateur mobile est la zone de la fenêtre dans laquelle le contenu web peut être vu, ce qui n'est pas nécessairement la même taille que la page rendue. Les navigateurs mobiles affichent les pages dans une fenêtre ou une zone d'affichage virtuelle, généralement à 980px, ce qui est généralement plus large que l'écran, puis réduisent le résultat rendu afin qu'il puisse être entièrement vu en une seule fois. Les utilisateur·ice·s peuvent ensuite faire défiler et zoomer pour voir différentes zones de la page. Par exemple, si un écran mobile a une largeur de 320px, un site web peut être rendu avec une zone d'affichage virtuelle de 980px, puis il est réduit pour s'adapter à l'espace de 320px, ce qui, selon la conception, est illisible pour beaucoup, voire pour tous. Pour indiquer à un navigateur mobile d'utiliser la largeur de la zone d'affichage au lieu de la largeur par défaut de 980px comme largeur de l'écran, les développeur·euse·s peuvent inclure une balise `meta` de zone d'affichage, comme suit&nbsp;:

```html
<meta name="viewport" content="width=device-width" />
```

La propriété `width` contrôle la taille de la zone d'affichage. Il est préférable de la définir sur `device-width`, qui correspond à la largeur de l'écran en pixels CSS à une échelle de 100%. Il existe d'autres propriétés, notamment `maximum-scale`, `minimum-scale` et `user-scalable`, qui contrôlent si les utilisateur·ice·s peuvent zoomer sur la page, mais les valeurs par défaut sont les meilleures pour l'accessibilité et l'expérience utilisateur, donc elles peuvent être omises.

## Voir aussi

- [L'API de vue CSSOM](/fr/docs/Web/API/CSSOM_view_API)
- L'élément HTML {{HTMLElement("meta")}}, plus spécifiquement [`<meta name="viewport">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- Le module [de zone d'affichage CSS](/fr/docs/Web/CSS/Guides/Viewport)
- Le module [de vue CSSOM](/fr/docs/Web/CSS/Guides/CSSOM_view)
