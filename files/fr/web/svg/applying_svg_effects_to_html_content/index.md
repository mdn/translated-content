---
title: Application d'effets SVG à du contenu HTML
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
translation_of: Web/SVG/Applying_SVG_effects_to_HTML_content
original_slug: Web/SVG/Application_d_effets_SVG_a_du_contenu_HTML
---
Les navigateurs modernes supportent le format [SVG](/fr-FR/docs/SVG) utilisant du [CSS](/fr-FR/docs/Web/CSS "Cascading Style Sheets") pour appliquer des effets graphiques au contenu HTML.

Vous pouvez éditer un SVG avec du CSS, soit directement dans le document, soit dans une feuille de style externe. Il y a 3 propriétés que vous pouvez utiliser : [`mask`](/fr-FR/docs/Web/CSS/mask), [`clip-path`](/fr-FR/docs/Web/CSS/clip-path) et [`filter`](/fr-FR/docs/Web/CSS/filter).

> **Note :** Dans des fichiers externes, les références à un SVG doivent être à la [même origine](/fr-FR/docs/Web/Security/Same-origin_policy) que le document de référence.

## Utilisation de SVG intégré

Pour appliquer un effet CSS à un SVG, vous devez dans un premier temps créer la feuille CSS qui fait référence au SVG à éditer.

```html
<style>p { mask: url(#my-mask); }</style>
```

Dans l'exemple ci-dessus, tous les paragraphes utilisent un [SVG `<mask>`](/fr/docs/Web/SVG/Element/mask) avec l'[ID](/fr-FR/docs/Web/HTML/Global_attributes/id) de `my-mask`.

### Appliquer un masque

Par exemple, vous pouvez appliquer un dégradé à du contenu HTML à l'intérieur de votre document en utilisant SVG et du code CSS similaire à celui-ci :

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0"/>
      <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white"/>
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)"/>
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

Notez que dans ce code CSS, le masque est spécifié à l'aide d'une URL à l'ID `#mask-1`, qui est l'ID du masque SVG spécifié précédemment. Tout le reste concerne le dégradé.

L'application d'effet SVG à du (X)HTML est réalisé en affectant la classe cible définie ci-dessus à un élément, comme ceci :

```html
<p class="target" style="background:lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
</p>
```

L'exemple ci-dessus serait rendu avec le masque appliqué.

{{EmbedLiveSample('Appliquer_un_masque', 650, 200)}}

### Exemple : Rogner

Cet exemple montre comment utiliser un SVG pour rogner du contenu HTML. Remarquez que même les zones cliquables (les liens) sont rognées.

```html
<p class="target" style="background:lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
</p>

<button onclick="toggleRadius()">Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle"/>
    <rect x="0.5" y="0.2" width="0.5" height="0.8"/>
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

Ce code crée une zone cliquable en forme de cercle et de rectangle associé à l'ID `#clipping-path-1` qui est référencé dans le CSS. `clip-path` peut être associé à n'importe quel élément avec la classe `target`.

Vous pouvez faire des changements en temps réel et vous rendre compte qu'ils affectent immédiatement le rendu HTML. Par exemple, vous pouvez redimensionner le cercle à l'aide du `clip-path` établi ci-dessus :

```js
function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.40 - circle.r.baseVal.value;
}
```

{{EmbedLiveSample('Exemple_Rogner', 650, 200)}}

### Exemple : Filtres

Cet exemple montre comment utiliser des filtres avec un SVG. À l'aide du CSS, nous appliquons plusieurs filtres à trois éléments à la fois dans leur état normal, que quand ils sont survolés par la souris ([hover](/fr-FR/docs/Web/CSS/:hover)).

```html
<p class="target" style="background: lime;">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    <b class="target">elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</b>
    Ut enim ad minim veniam.
</p>
```

N'importe quel filtre SVG peut être appliqué de cette façon. Par exemple, pour appliquer un effet de flou, vous pouvez utiliser :

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3"/>
  </filter>
</svg>
```

Vous pouvez aussi appliquer une matrice de transformation des couleurs :

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix values="0.3333 0.3333 0.3333 0 0
                           0.3333 0.3333 0.3333 0 0
                           0.3333 0.3333 0.3333 0 0
                           0      0      0      1 0"/>
  </filter>
</svg>
```

Et encore d'autres filtres :

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix filterRes="100 100" style="color-interpolation-filters:sRGB"
      order="3" kernelMatrix="0 -1 0 -1 4 -1 0 -1 0" preserveAlpha="true"/>
  </filter>
  <filter id="f4">
    <feSpecularLighting surfaceScale="5" specularConstant="1"
                        specularExponent="10" lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000"/>
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix values="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 1 0 0 0" style="color-interpolation-filters:sRGB"/>
  </filter>
</svg>
```

Les cinq filtres sont appliqués en utilisant le CSS suivant :

```css
p.target { filter:url(#f3); }
p.target:hover { filter:url(#f5); }
b.target { filter:url(#f1); }
b.target:hover { filter:url(#f4); }
pre.target { filter:url(#f2); }
pre.target:hover { filter:url(#f3); }
```

{{EmbedLiveSample('Exemple_Filtres', 650, 200)}}

### Exemple : Texte flouté

Pour flouter le texte, Webkit a un filtre CSS (préfixé) appelé blur (voir aussi [CSS filter](/fr-FR/docs/Web/CSS/filter#blur%28%29_2)). Vous pouvez obtenir le même effet en utilisant des filtres SVG.

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
    </filter>
  </defs>
</svg>
```

Vous pouvez appliquer le filtre SVG et le filtre CSS à la même classe :

```css
.blur { filter: url(#wherearemyglasses); }
```

{{ EmbedLiveSample('Exemple_Texte_flouté', 300, 100) }}

Le floutage est un calcul assez lourd alors utilisez le avec précaution et faites particulièrement attention aux éléments scrollables ou animés.

## Utilisation de références externes

Vous pouvez utiliser des fichiers externes pour rogner ou pour appliquer des masques et des filtres SVG, tant que cette source vient de la même origine que le document HTML auquel il est appliqué.

Par exemple, si votre CSS est un fichier nommé `default.css`, il pourrait contenir le code ci-dessous :

```css
.target { clip-path: url(resources.svg#c1); }
```

Le SVG est alors importé depuis un fichier nommé `resources.svg`, utilisant `clip-path` avec l'ID `c1`.

## Voir aussi

- [SVG](/fr-FR/docs/SVG "SVG")
- [SVG Effects for HTML Content](http://robert.ocallahan.org/2008/06/applying-svg-effects-to-html-content_04.html) (blog post)
- [\[archive.org\] Web Tech Blog » Blog Archive » SVG External Document References](http://web.archive.org/web/20120512132948/https://developer.mozilla.org/web-tech/2008/10/10/svg-external-document-references/ "Web Tech Blog » Blog Archive » SVG External Document References")
