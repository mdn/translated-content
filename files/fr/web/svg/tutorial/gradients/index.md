---
title: Gradients SVG
slug: Web/SVG/Tutorial/Gradients
---

{{ PreviousNext("Web/SVG/Tutoriel/Fills_and_Strokes", "Web/SVG/Tutoriel/Motifs") }}

Probablement plus excitant qu'un simple remplissage et contour, est le fait de pouvoir créer et appliquer des dégradés comme remplissage ou contour.

Il y a deux types de dégradés: linéaire et radial. Les dégradés sont définis dans la section `defs` et non sur les formes elles-mêmes — cela favorise leur réusabilité. Vous **devez** donner au dégradé un attribut `id`; autrement, il ne pourra pas être utilisé par les autres éléments à l'intérieur du fichier SVG.

## Dégradé Linéaire

Les dégradés linéaires (_linear gradient_ en anglais) changent de couleur le long d'une ligne droite. Pour en insérer un, on crée un élément {{SVGElement('linearGradient')}} dans la section des définitions du fichier SVG.

### Exemple

Un exemple de dégradé linéaire appliqué à un élément `<rect>`:

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <style type="text/css">
      <![CDATA[
              #rect1 { fill: url(#Gradient2); }
              .stop1 { stop-color: red; }
              .stop2 { stop-color: black; stop-opacity: 0; }
              .stop3 { stop-color: blue; }
            ]]>
    </style>
  </defs>

  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient1)" />
  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" id="rect1" />
</svg>
```

{{ EmbedLiveSample('Exemple','120','240') }}

### Définir le dégradé

À l'intérieur du dégradé, il y a divers noeuds {{SVGElement('stop')}}. Ces noeuds disent au dégradé quelles couleurs doivent être affichées à quelles positions, en spécifiant les attributs `offset` pour la position et `stop-color` pour la couleur. On peut également le définir avec CSS. Les deux méthodes ont été utilisées dans l'exemple pour le démontrer.

Dans cet exemple, on dit au dégradé de commencer en rouge, de passer au noir transparent au centre et de terminer par la couleur bleue. Vous pouvez ajouter autant de couleurs que vous le souhaitez, pour créer un dégradé aussi beau ou aussi laid que vous le souhaitez, mais les positions (`offset`) doivent toujours être incrementées de 0% (ou 0) à 100% (ou 1). Si des valeurs sont dupliquées, la couleur définie la plus en bas de la définition sera utilisée.

Aussi, comme pour le remplissage et le contour, vous pouvez spécifier un attribut `stop-opacity` pour définir l'opacité de la couleur à cette position (encore une fois, à partir de FF3 vous pouvez utiliser les valeurs rgba pour le même effet).

```html
<stop offset="100%" stop-color="yellow" stop-opacity="0.5" />
```

### Utiliser le dégradé

Pour utiliser le dégradé, vous devez le référencer avec l'attribut `fill` ou `stroke` d'un objet. On référence un élément SVG de la même manière que l'on référence des éléments en CSS, via `url()`. Dans notre cas, l'url est juste une référence vers le dégradé avec l'ID "Gradient". Pour le référencer, on définit `fill="url(#Gradient)"`, et voilà! Notre objet est maintenant multi-coloré. Vous pouvez faire de même avec `stroke`.

### Orientation du dégradé

L'élément `<linearGradient>` peut également prendre différents attributs pour spécifier la taille et l'apparence du dégradé. L'orientation du dégradé est contrôlé par deux points, désignés par les attributs `x1`, `x2`, `y1`, et `y2`. Ces attributs définissent la ligne le long de laquelle le dégradé est tracé. Par défaut, le dégradé est horizontal, mais il peut être orienté autrement grâce à ces attributs. "Gradient2" dans l'exemple précédent crée un dégradé vertical.

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"></linearGradient>
```

### xlink:href

Vous pouvez également utiliser l'attribut `xlink:href` sur les dégradés. Quand il est utilisé, les attributs et stops d'un dégradé peuvent être réutilisé sur un autre. Ainsi, dans l'exemple précédent, on aurait pu ne pas redéfinir tous les stops dans Gradient2, comme ceci:

```html
<linearGradient id="Gradient1">
  <stop id="stop1" offset="0%" />
  <stop id="stop2" offset="50%" />
  <stop id="stop3" offset="100%" />
</linearGradient>
<linearGradient
  id="Gradient2"
  x1="0"
  x2="0"
  y1="0"
  y2="1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xlink:href="#Gradient1" />
```

Ici, le namespace xlink est inclut directement sur le noeud, bien qu'il soit généralement définit en haut du document, comme dans l'[exemple avec les images](/fr/docs/Web/SVG/Tutoriel/Contenu_embarque_SVG)

## Dégradé Radial

Les dégradés radiaux (_radial gradient_ en anglais) sont similaires aux dégradés linéaires à la différence près qu'ils irradient autour d'un point. Pour en créer un, on crée un élément {{SVGElement('radialGradient')}} dans la section de définitions du document SVG.

### Exemple

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```

{{ EmbedLiveSample('Exemple_2','120','240') }}

### Définir le dégradé

Les stops utilisés ici sont les mêmes que précédemment, la différence étant que désormais l'objet sera rouge en son centre, et que la couleur changera progressivement vers le bleu en approchant des contours. Comme pour les dégradés linéaires, le noeud `<radialGradient>` peut prendre différents attributs pour décrire sa position et son orientation. Cependant, la définition est un peu plus complexe. Le dégradé linéaire est défini par deux points, qui déterminent où sont situé le centre et les bords:

- Le premier point définit le cercle où le dégradé se termine. Il requiert un point central, spécifié par les attributs `cx` et `cy`, et un rayon, `r`. Définir ces trois attributs vous permettra de déplacer le dégradé et de changer sa taille, comme illusté dans le deuxième `rect` de notre exemple.
- Le second point est appelé le point focal et il est définit par les attributs `fx` et `fy`. Tandis que le premier point décrit où sont les bords du dégradé, le point focal décrit où est son centre. C'est plus facile à voir avec un exemple (voir la section qui suit).

### Centre et point focal

```html
<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ EmbedLiveSample('Centre_et_point_focal','120','120') }}

Si le point focal est déplacé en dehors du cercle décrit précédemment, il est impossible que le dégradé s'affiche correctement, le point focal sera donc supposé être à l'intérieur du bord du cercle. Si le point focal n'est pas du tout indiqué, il sera supposé être au même endroit que le point central.

## Attributs additionnels

Les dégradés linéaires et radiaux peuvent également prendre quelques autres attributs pour décrire les transformations qu'ils peuvent subir.

### spreadMethod

Cet attribut contrôle ce qu'il arrive quand le dégradé arrive à sa fin, mais que l'objet n'est pas encore rempli. Trois valeurs sont possibles: "pad", "reflect", ou "repeat".

- "`pad`" est la valeur par défaut. Quand un dégradé arrive à sa fin, la dernière couleur est utilisée pour remplir le reste de l'objet.
- "`reflect`" a pour effet de poursuivre le dégradé, mais en sens inverse: de la dernière couleur (offset 100%) à la première (offset 0%), puis de nouveau de la première à la dernière, etc.
- "`repeat`" poursuit également le dégradé, mais au lieu de revenir en arrière, il revient au début et est exécuté de nouveau.

```html
<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <!-- pad -->
      <radialGradient id="GradientPad"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="pad">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>

      <!-- repeat -->
      <radialGradient id="Gradient
            cx="0.5" cy=
            spreadMethod
        <stop offset="0%
      <stop offset="10
      </radialGradient

      <!-- reflect -->
      <radialGradient id="GradientR
           cx="0.5" cy="0.5" r="0.4" fx="0.
                    spreadMethod="reflect">
                                                    <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#GradientPad)"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientRepeat)"/>
  <rect x="120" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientReflect)"/>

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">Pad</text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">Repeat</text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">Reflect</text>

</svg>
```

{{ EmbedLiveSample('spreadMethod','220','220') }}

### gradientUnits

Les deux types de dégradés ont également un attribut `gradientUnits`, qui indique l'unité utilisée pour décrire la taille et l'orientation du dégradé. Deux valeurs sont posibles: `userSpaceOnUse` ou `objectBoundingBox`.

- `objectBoundingBox` est la valeur par défaut, c'est ce qu'on a vu jusqu'à présent. Le dégradé est automatiquement redimensionné à la taille de l'objet sur lequel il est appliqué, vous n'avez donc qu'à spécifier les coordonnées de zéro à un (ou de 0% à 100%), et les coordonnées sont automatiquement redimensionnée à la taille de l'objet.
- `userSpaceOnUse` indique que les valeurs sont absolues. Vous devez donc savoir où se situe l'objet, et placer le dégradé à la même position. Le dégradé radial précédent devrait être ré-écrit comme suit:

  ```html
  <radialGradient
    id="Gradient"
    cx="60"
    cy="60"
    r="50"
    fx="35"
    fy="35"
    gradientUnits="userSpaceOnUse"></radialGradient>
  ```

Il y a quelques subtilités concernant l'utilisation de `gradientUnits="objectBoundingBox"` quand les limites de l'objet ne sont pas carrées, mais elles sont assez complexes et nous attendrons quelqu'un de plus au courant pour les expliquer.

### gradientTransform

Vous pouvez également appliquer une transformation au gradient en utilisant l'attribut `gradientTransform`, mais puisque nous n'avons pas encore introduit les [transformations](/fr/docs/Web/SVG/Tutoriel/Transformations_de_base), nous le laisserons de côté pour l'instant.

{{ PreviousNext("Web/SVG/Tutoriel/Fills_and_Strokes", "Web/SVG/Tutoriel/Motifs") }}
