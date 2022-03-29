---
title: Concepts relatifs au viewport
slug: Web/CSS/Viewport_concepts
tags:
  - CSS
  - Guide
  - viewport
translation_of: Web/CSS/Viewport_concepts
original_slug: Web/CSS/Concepts_viewport
---
{{CSSRef}}

Dans cet article, nous définirons le concept de _viewport_ ou de zone d'affichage, les différences entre la zone d'affichage visuelle et la zone d'affichage pour la disposition. Nous verrons également ce que signifie la zone d'affichage pour CSS, SVG et pour les appareils mobiles.

## Qu'est-ce qu'une zone d'affichage (_viewport_) ?

Une zone d'affichage (aussi appelée _viewport_ en anglais) représente la zone actuellement visible sur l'appareil. Pour un navigateur web, la zone d'affichage correspond généralement à la fenêtre du navigateur sans les éléments d'interface du navigateur (barre de menu, etc.). Bref, sur le Web, la zone d'affichage correspond la plupart du temps à la région à l'intérieur de la fenêtre dans laquelle vous consultez un site ou une application.

Les documents (à l'instar de cet article) peuvent être très longs. La zone d'affichage correspond à ce qui est actuellement visible. Dans notre cas particulier, vous devriez pouvoir voir le titre Qu'est-ce qu'une zone d'affichage peut-être le menu de navigation. La taille de la zone d'affichage dépend de la taille de l'écran, de l'activation du mode plein écran, du niveau de zoom, etc. Le contenu situé à l'extérieur de la zone d'affichage (la section Voir aussi de ce document par exemple) n'est pas visible tant que l'utilisateur n'a pas fait défilé le contenu jusqu'à ce point.

- Pour les écrans les plus grands où les applications ne sont pas nécessairement en plein écran, la zone d'affichage mesure la taille de la fenêtre du navigateur
- Sur la plupart des appareils mobiles ou lorsque le navigateur est en plein écran, la zone d'affichage correspond à l'ensemble de l'écran

En mode plein écran, la zone d'affichage sera l'écran de l'appareil, la fenêtre du navigateur pourra être plus grande ou plus petite que la zone d'affichage et le document sera le site web consulté et qui peut être plus grand ou plus large que la zone d'affichage.

Pour résumer, la zone d'affichage est la zone du document actuellement visible à l'écran.

### Les dimensions de la zone d'affichage sont modifiables

La largeur de la zone d'affichage n'est pas toujours la largeur de la fenêtre. Si vous accédez à la largeur et à la hauteur de la fenêtre et à celles du document avec Chrome ou Firefox, vous pourrez obtenir un résultat comme celui-ci :

```js
document.documentElement.clientWidth /* 1200 */
window.innerWidth /* 1200 */
window.outerWidth /* 1200 */
```

```js
document.documentElement.clientHeight /* 800 */
window.innerHeight /* 800 */
window.outerHeight /* 900 */
```

Il existe plusieurs propriétés du DOM qui permettent d'obtenir la taille de la zone d'affichage et certaines dimensions associées :

- La propriété du document {{DOMxRef("Element.clientWidth")}} est la largeur interne du document, exprimée en [pixels CSS](/fr/docs/Mozilla/Mobile/Balise_meta_viewport#Un_pixel_n'est_pas_un_pixel), et inclut le remplissage (_padding_) mais pas les marges, les bordures et les barres de défilement. **C'est la largeur de la zone d'affichage**.
- La propriété {{DOMxRef("Window.innerWidth")}} correspond à la largeur, exprimée en pixels CSS, de la zone d'affichage dans la fenêtre du navigateur qui contient les éventuelles barres de défilement verticales.
- La propriété {{DOMxRef("Window.outerWidth")}} correspond à la largeur extérieure de la fenêtre du navigateur et qui contient l'ensemble du _chrome_ (les éléments d'interface utilisateur du navigateur qui ne sont pas ceux de la page web consultée).

Dans l'exemple précédent, on peut voir que `innerWidth` et `outerWidth` ont la même valeur mais que `outerHeight` mesure 100 pixels de plus que `innerHeight`. En effet, `outerHeight` tient compte du chrome du navigateur et les mesures ont été effectuées avec un navigateur dont la barre d'adresse, les onglets et la barre de favoris mesuraient ensemble 100 pixels de haut. En revanche, il n'y avait pas de _chrome_ à gauche ou à droite de la fenêtre.

La zone contenu entre `innerHeight` et `innerWidth` correspond à **la zone d'affichage pour la disposition (_layout viewport_)**. Le chrome du navigateur ne fait pas partie de la zone d'affichage.

Lorsqu'on zoome, FIrefox et Chrome renvoient une nouvelle taille, en pixels CSS, pour `innerWidth` et `clientWidth`. Les valeurs renvoyées pour `outerWidth` et `outerHeight` dépendent du navigateur : Firefox rapporte la nouvelle valeur en pixels CSS et Chrome renvoie la longueur exprimée avec la taille par défaut d'un pixel. Lorsqu'on a zoomé, on pourra obtenir :

```js
document.documentElement.clientWidth /* 800 */
window.innerWidth /* 800 */
window.outerWidth /* 800 dans Firefox, 1200 dans Chrome */
```

```js
document.documentElement.clientHeight /* 533 */
window.innerHeight /* 533 */
window.outerHeight /* 596 dans Firefox, 900 dans Chrome */
```

La zone d'affichage mesurait initialement 1200 x 800 pixels. Après le zoom, la zone d'affichage mesure 800 x 533 pixels. C'est la zone d'affichage pour la disposition. Avec la feuille de style suivante, les hauts et pieds de page seront placés en haut et en bas de _la zone d'affichage pour la disposition_.

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

On a mesuré 800 x 533 après avoir zoomé à l'aide du clavier. Le haut et le bas de page ont suivi le haut et le bas de la fenêtre. Mais que ce serait-il passé si on avait zoomé au doigt sur une tablette ? Que se serait-il passé si un clavier tactile logiciel s'était ouvert sur le bas du téléphone ?

Dans le contexte du Web, on parle de deux zones d'affichage : **la zone d'affichage pour la disposition (_layout viewport_)** et **la zone d'affichage visuelle (_visual viewport_)**. La zone d'affichage visuelle est la partie de la page web qui est actuellement visible dans le navigateur et qui peut changer. Lorsqu'un utilisateur zoome en pinçant, provoque l'ouverture d'un clavier tactile ou lorsqu'une barre d'adresse s'affiche, la zone d'affichage visuelle se réduit mais la zone d'affichage pour la disposition reste inchangée.

Les hauts et bas de pages vus dans l'exemple précédent se caleront en haut et en bas de la zone d'affichage pour la disposition. Aussi, ils resteront visibles lorsqu'on zoome au clavier mais pourrait être masqués (partiellement ou complètement) par un clavier visuel : autrement dit, ils pourraient ne pas faire partie de la zone d'affichage visuelle.

La zone d'affichage visuelle correspond à la partie de l'écran qui est visible sans contenir les claviers visuels, les zones en dehors de la région zoomée ou toute autre partie qui ne suit pas les dimensions d'une page. Ainsi, la zone d'affichage visuelle pourra avoir la même taille ou être plus petite que la zone d'affichage pour la disposition.

Pour une page contenant des _iframes_, des objets ou des SVG externes, chaque page imbriquée et chaque fichier inclus possède son propre objet pour la fenêtre. Seule la fenêtre de plus haut niveau possède une zone d'affichage visuelle qui peut être différente de la zone d'affichage pour la disposition. Pour les éléments imbriqués, la zone d'affichage visuelle et la zone d'affichage pour la disposition sont identiques.

### CSS

La zone d'affichage pour la disposition et la zone d'affichage visuelle mentionnées jusqu'à présent ne sont pas les seules zones d'affichages à considérer. Toute zone d'affichage imbriquée, pleinement ou partiellement affichée dans la zone d'affichage pour la disposition sera considérée comme une zone d'affichage visuelle.

On pense généralement que les hauteurs et largeurs utilisées pour les requêtes média correspondent à la hauteur et à la largeur de la fenêtre du navigateur mais elles correspondent en réalité à la taille de la zone d'affichage (la fenêtre pour le document principal ou les dimensions intrinsèques des objets imbriqués). En CSS, on peut également utiliser des unités proportionnelles aux dimensions de la zone d'affichage. Un `vh` correspond à 1% de la hauteur de la zone d'affichage pour la disposition et `vw` mesurera, de façon analogue, 1% de la largeur de la zone d'affichage pour la disposition.

#### `<iframe>`

À l'intérieur d'une _iframe_, la zone d'affichage visuelle est mesurée comme la largeur et la hauteur internes de l'_iframe_ et non comme celles du document parent. Il est possible de définir n'importe quelle hauteur et largeur pour une _iframe_ mais le document pourra ne pas être visible dans son intégralité.

Si on utilise les unités de longueur relatives à la zone d'affichage pour la mise en forme du document situé dans l'_iframe_, `1vh` correspondra à 1% de la hauteur de l'_iframe_ et `1vw` correspondra à 1% de la largeur du document imbriqué.

```css
iframe {
  width: 50vw;
}
```

Si l'_iframe_ est dimensionnée à `50vw`, elle mesurera 50% de large des `1200px` du document parent (soit `600px`). À l'intérieur de cette _iframe_, `1vw` correspondra donc à `6px`. Lorsqu'on zoomera, l'_iframe_ se réduira à `400px` de large et `1vw` correspondra alors à `4px`.

Lorsqu'on utilise une requête média à l'intérieur du document de l'_iframe_, les dimensions utilisées sont relatives à la zone d'affichage de l'_iframe_.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Si le fragment de code CSS était inclus dans l'_iframe_, les paragraphes seraient rouges avec un zoom utilisateur et normaux sinon.

#### SVG

Pour un document SVG, la zone d'affichage correspond à la partie de l'image SVG qui est visible à l'écran. On peut définir n'importe quelle hauteur et largeur sur un SVG mais l'image pourra ne pas être entièrement visible. La taille de la zone d'affichage pourra être définie à l'aide des attributs `width` et `height` de l'élément {{SVGElement("svg")}}.

```html
<svg height="300" width="400"></svg>
```

Dans cet exemple, la zone d'affichage possède un ratio de 3::4 et mesure 400 x 300 unités (où les unités par défaut sont généralement des pixels CSS).

SVG possède un système de coordonnées interne qui est défini grâce à l'attribut [`viewbox`](/fr/docs/Web/SVG/Attribute/viewBox) mais qui n'est pas directement lié à la problématique des zones d'affichage.

Si on inclut un fichier SVG dans un document HTML, la zone d'affichage pour le SVG sera le bloc englobant initial ou la largeur et la hauteur du conteneur SVG. Si on utilise une requête média {{CSSxRef("@media")}} dans le code CSS du SVG, celle-ci sera relative à la taille du conteneur et pas à celle de la zone d'affichage du document.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* styles CSS ici */
}
```

Lorsqu'on utilise la requête média précédente, les styles sont généralement appliqués lorsque la fenêtre du navigateur mesure entre 400px et 500px de large. Lorsqu'on utilise cette même requête à l'intérieur d'un document SVG, ce sera la largeur du conteneur (l'élément {{htmlelement("img")}} par exemple ou l'élément parent) qui sera considérée. Autrement dit, si on utilise la requête média précédente sur un document SVG, les styles seront appliqués si le conteneur du SVG mesure entre 400 et 500 pixels.

### JavaScript

L'API [Visual Viewport](/fr/docs/Web/API/Visual_Viewport_API) fournit des outils pour récupérer et modifier les propriétés de la zone d'affichage visuelle.

## Zones d'affichage sur mobiles

Il existe une grande variété de tailles et de proportions pour les appareils mobiles. La zone d'affichage d'un navigateur mobile est la zone de la fenêtre sur laquelle le contenu web peut être consulté et cette zone n'a pas nécessairement la même taille que la page affichée. Les navigateurs mobiles affichent les pages sur une zone d'affichage virtuelle (mesurant généralement 960px) plus large que l'écran puis réduisent le résultat afin que l'utilisateur puisse voir l'ensemle du document. L'utilisateur peut alors se déplacer ou zoomer au doigt pour accéder aux différentes zones de la page. Ainsi, si un appareil mobile a un écran large de 320px, un site web pourra être affiché selon une zone d'affichage virtuelle sur 960px puis réduit afin de pouvoir s'inscrire dans l'espace large de 320px. Le résultat ainsi obtenu risque peu d'être lisible. Pour indiquer à un navigateur mobile d'utiliser la largeur de la zone d'affichage réelle plutôt que la largeur virtuelle de 960px, on pourra placer la balise `<meta>` suivante :

```html
<meta name="viewport" content="width=device-width">
```

La propriété `width` contrôle la taille de la zone d'affichage et on l'utilisera généralement avec `device-width` qui correspond à la largeur de l'écran, exprimée en pixels CSS, avec un zoom de 100%. Il est possible d'utiliser d'autres propriétés comme `maximum-scale`, `minimum-scale` et `user-scalable` afin de contrôler si l'utilisateur peut zoomer/dézoomer sur la page mais les valeurs par défaut restent les meilleures en termes d'accessibilité et d'ergonomie et ne seront pas plus abordées ici par souci de concision.

## Voir aussi

- [La règle @ `@viewport`](/fr/docs/Web/CSS/@viewport)
- [L'API Visual Viewport](/fr/docs/Web/API/Visual_Viewport_API)
- L'élément {{HTMLElement("meta")}} et notamment `<meta name="viewport">`
- [L'utilisation de la balise méta `viewport` afin de contrôler la disposition sur les navigateurs mobiles](/fr/docs/Mozilla/Mobile/Balise_meta_viewport)
