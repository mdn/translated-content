---
title: Découpages et masquages
slug: Web/SVG/Tutorial/Clipping_and_masking
tags:
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Clipping_and_masking
original_slug: Web/SVG/Tutoriel/Découpages_et_masquages
---
{{ PreviousNext("SVG/Tutoriel/Transformations_de_base", "Web/SVG/Tutoriel/Contenu_embarque_SVG") }}

Effacer une partie de ce que l'on a créé précédemment peut paraître maladroit, voire totalement contradictoire. Mais cela peut se révéler très utile, par exemple quand vous essayez de dessiner un demi-cercle.

Le **découpage** (_clipping_) correspond au fait d'enlever des morceaux d'élément. Dans ce cas là, les effets de transparence ne sont pas permis, il s'agit d'une approche du tout-ou-rien.

D'un autre côté, le **masquage** (_masking_) permet plus de souplesse en prenant en compte la transparence et les niveaux de gris.

### Découper

Pour créer un demi-cercle, on définit d'abord un élément `circle`:

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```

On dessine ici un cercle d'un rayon de 100 pixels, dont le centre est placé au point (100,100). L'attribut `clip-path` fait référence à l'élément `clipPath` définit plus haut, qui est généralement placé dans la section `defs`.

L'élément `clipPath` contient un simple rectangle qui, seul, remplirait en noir la moitié supérieur du canvas. Le rectangle ne sera pas dessiné, parce qu'il est définit dans un élément `clipPath`, il a pour effet de déterminer quels pixels seront affichés ou non dans le dessin final. Le rectangle ne couvrant que la partie supérieure du cercle, la partie inférieure du cercle ne sera pas affichée:

{{ EmbedLiveSample('Découper','240','240','/files/3224/clipdemo.png') }}

Nous avons maintenant un demi-cercle, sans avoir à passer par un arc dans un élément `path`. Pour le découpage, chaque forme à l'intérieur de `clipPath` est inspecté et évalué avec ses propriétés et ses transformations. Chaque zone transparente dans `clipPath` aura pour effet de masquer le contenu. La couleur, l'opacité et autres n'ont pas d'effet tant qu'ils ne rendent pas les formes complètement transparentes.

### Masquage

Le masquage, contrairement au découpage permet de travailler avec des gradients. Si vous voulez qu'un élément disparaisse progressivement, vous y parviendrez en utiilisant des masques.

```html
<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```

Vous pouvez voir qu'on a définit un rectangle vert en-dessous d'un rectangle rouge. Ce dernier a un attribut `mask` qui pointe vers le masque situé dans les définitions. Le contenu du masque est un simple élément `rect`, qui est rempli d'un gradient transparent-vers-blanc. Les pixels du rectangle rouge héritent de la valeur alpha (la transparence) du contenu du masque, si bien que le rectangle rouge est progressivement masqué et laisse voir le rectangle vert en-dessous:

{{ EmbedLiveSample('Masquage','240','240','/files/3234/maskdemo.png') }}

### Transparence avec `opacity`

Pour définir la transparence d'un élément entier, on peut utiliser l'attribut `opacity`:

```xml
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```

Le rectangle ci-dessus sera dessiné semi-transparent.

On peut également utiliser deux attributs distincts pour le remplissage et le contour: `fill-opacity` et `stroke-opacity`, pour contrôler l'opacité des propriétés `fill` et `stroke` respecitvement. Notez que le contour est dessiné au-dessus du remplissage. Ainsi, si vous rendez le contour semi-transparent et non le remplissage, celui-ci sera visible à travers le contour:

```html
<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="0" y="0" width="200" height="200" fill="blue" />
  <circle cx="100" cy="100" r="50" stroke="yellow" stroke-width="40" stroke-opacity=".5" fill="red" />
</svg>
```

{{ EmbedLiveSample('Transparence_avec_opacity','240','240','/files/3231/opacitydemo.png') }}

Vous pouvez voir dans cet exemple un cercle rouge sur un fond bleu. Le contour jaune a une opacité de 50%, si bien qu'on se retrouve avec une partie du remplissage en orange.

## Utilisation de techniques CSS bien connues

Un des outils les plus puissants parmis l'arsenal du développeur web est `display: none`. Il n'est donc pas étonnant qu'il ait été décidé que cette propriété CSS serait également intégrée à SVG, de même que `visibility` et `clip` définis en CSS 2. Pour ré-afficher un élément précédemment caché avec `display: none` il est important de savoir que la valeur initiale des éléments SVG est `inline`.

{{ PreviousNext("SVG/Tutoriel/Transformations_de_base", "Web/SVG/Tutoriel/Contenu_embarque_SVG") }}
