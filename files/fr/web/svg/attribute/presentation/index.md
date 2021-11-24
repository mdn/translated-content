---
title: Attributs SVG de présentation
slug: Web/SVG/Attribute/Presentation
translation_of: Web/SVG/Attribute/Presentation
---
{{draft}}

Les _attributs SVG de présentation_ sont des propriétés CSS pouvant être utilisées comme attributs sur les éléments SVG

- alignment-baseline
- baseline-shift
- clip
- clip-path
- clip-rule
- color
- color-interpolation
- color-interpolation-filters
- color-profile
- color-rendering
- cursor
- direction
- display
- dominant-baseline
- enable-background
- fill
- fill-opacity
- fill-rule
- filter
- flood-color
- flood-opacity
- font-family
- font-size
- font-size-adjust
- font-stretch
- font-style
- font-variant
- font-weight
- glyph-orientation-horizontal
- glyph-orientation-vertical
- image-rendering
- kerning
- letter-spacing
- lighting-color
- marker-end
- marker-mid
- marker-start
- mask
- opacity
- overflow
- pointer-events
- shape-rendering
- solid-color
- solid-opacity
- stop-color
- stop-opacity
- stroke
- stroke-dasharray
- stroke-dashoffset
- stroke-linecap
- stroke-linejoin
- stroke-miterlimit
- stroke-opacity
- stroke-width
- text-anchor
- text-decoration
- text-rendering
- transform
- unicode-bidi
- vector-effect
- visibility
- word-spacing
- writing-mode

## Attributs

- {{SVGAttr('alignment-baseline')}}
  - : Spécifie comment un objet est aligné sur la ligne de pied de la police par rapport à son parent.
    _Valeur_: **`auto`**|`baseline`|`before-edge`|`text-before-edge`|`middle`|`central`|`after-edge`|`text-after-edge`|`ideographic`|`alphabetic`|`hanging`|`mathematical`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('baseline-shift')}}
  - : Permet de positionner la ligne de pied de l'élément par rapport à celle de son parent.
    _Valeur_: **`auto`**|`baseline`|`super`|`sub`|[\<percentage>](/docs/Web/SVG/Content_type#Percentage)|[\<length>](/docs/Web/SVG/Content_type#Length)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('clip')}} {{deprecated_inline('css')}}
  - : Définit quelle partie d'un élément est visible.
    _Valeur_: **`auto`**|{{cssxref("shape")}}|`inherit`; _Animation_: **Oui**
- {{SVGAttr('clip-path')}}
  - : Associe un chemin de détourage {{SVGElement('clipPath')}} à l'élément.
    _Valeur_: **`none`**|[\<FuncIRI>](/docs/Web/SVG/Content_type#FuncIRI)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('clip-rule')}}
  - : Indique la règle de remplissage à appliquer sur un élément {{SVGElement('clipPath')}}.
    _Valeur_: **`nonezero`**|`evenodd`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('color')}}
  - : Définit la valeur potentielle (valeur de `currentColor`) pour les attributs de présentation `fill`, `stroke`, `stop-color`, `flood-color` et `lighting-color`.
    _Valeur_: [\<color>](/docs/Web/SVG/Content_type#Color)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('color-interpolation')}}
  - : Spécifie l'espace colométrique pour les interpolations de dégradés, les animations couleur et composition alpha.
    _Valeur_: `auto`|**`sRGB`**|`linearRGB`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('color-interpolation-filters')}}
  - : Spécifie l'espace colométrique pour les opérations effectuées via des effets de filtre.
    _Valeur_: `auto`|`sRGB`|**`linearRGB`**|`inherit`; _Animation_: **Oui**
- {{SVGAttr('color-profile')}} {{deprecated_inline('svg2')}}
  - : Définit le profil de couleur qu'une image bitmap incluse via l'élément {{SVGElement('image')}} doit utiliser.
    _Valeur_: `auto`|`sRGB`|`linearRGB`|[\<name>](/docs/Web/SVG/Content_type#Name)|[\<IRI>](/docs/Web/SVG/Content_type#IRI)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('color-rendering')}}
  - : Indique au navigateur comment optimiser ses opérations d'interpolation et de composition des couleurs.
    _Valeur_: **`auto`**|`optimizeSpeed`|`optimizeQuality`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('cursor')}}
  - : Spécifie le curseur affiché lorsque la souris passe au-desuss de l'élément.
    _Valeur_: [\<FuncIRI>](/docs/Web/SVG/Content_type#FuncIRI)|[\<keywords>](/docs/Web/CSS/cursor#Values)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('direction')}}
  - : Spécifie la direction d'écriture du texte.
    _Valeur_: **`ltr`**|`rtl`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('display')}}
  - : Permet de contrôler le rendu d'éléments graphiques ou conteneurs.
    _Valeur_: see css {{cssxref('display')}}; _Animation_: **Oui**
- {{SVGAttr('dominant-baseline')}}
  - : Définit la ligne de pied utilisée pour aligner le texte.
    _Valeur_: `auto`|`text-bottom`|`alphabetic`|`ideographic`|`middle`|`central`| `mathematical`|`hanging`|`text-top`; _Animation_: **Oui**
- {{SVGAttr('enable-background')}} {{deprecated_inline('svg2')}}
  - : Indique au navigateur comment gérer l'image d'arrière plan.
    _Valeur_: **`accumulate`**|`new`|`inherit`; _Animation_: **Non**
- {{SVGAttr('fill')}}
  - : Définit la couleur de remplissage d'un élément graphique.
    _Valeur_: [\<paint>](/docs/Web/SVG/Content_type#Paint); _Animation_: **Oui**
- {{SVGAttr('fill-opacity')}}
  - : Définit l'opacité du remplissage de l'élément.
    _Valeur_: [\<number>](/docs/Web/SVG/Content_type#Number)|[\<percentage>](/docs/Web/SVG/Content_type#Percentage); _Animation_: **Oui**
- {{SVGAttr('fill-rule')}}
  - : Indique comment déterminer quelles parties du chemin se trouvent à l'intérieur de la forme.
    _Valeur_: **`nonzero`**|`evenodd`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('filter')}}
  - : Applique un filtre, définit par un élément {{SVGElement('filter')}}, à l'élément.
    _Valeur_: [\<FuncIRI>](/docs/Web/SVG/Content_type#FuncIRI)|**`none`**|`inherit`; _Animation_: **Oui**
- {{SVGAttr('flood-color')}}
  - : Indique quelle couleur utiliser pour remplir la région du filtre, définit par les éléments {{SVGElement('feFlood')}} ou {{SVGElement('feDropShadow')}}.
    _Valeur_: [\<color>](/docs/Web/SVG/Content_type#Color); _Animation_: **Oui**
- {{SVGAttr('flood-opacity')}}
  - : Indique l'opacité à utiliser pour remplir la région du filtre, définit par les éléments {{SVGElement('feFlood')}} ou {{SVGElement('feDropShadow')}}.
    _Valeur_: [\<number>](/docs/Web/SVG/Content_type#Number)|[\<percentage>](/docs/Web/SVG/Content_type#Percentage); _Animation_: **Oui**
- {{SVGAttr('font-family')}}
  - : Indique la police utiliser pour restituer le texte de l'élément.
    _Valeur_: see css {{cssxref('font-family')}}; _Animation_: **Oui**
- {{SVGAttr('font-size')}}
  - : Spécifie la taille de la police.
    _Valeur_: see css {{cssxref('font-size')}}; _Animation_: **Oui**
- {{SVGAttr('font-size-adjust')}}
  - : Spécifie que la taille de la police doit être choisit en se basant sur la taille des lettres minuscules et non des majuscules.
    _Valeur_: [\<number>](/docs/Web/SVG/Content_type#Number)|**`none`**|`inherit`; _Animation_: **Oui**
- {{SVGAttr('font-stretch')}}
  - : Sélectionne la version normale, condensée ou espacée d'une police.
    _Valeur_: see css {{cssxref('font-stretch')}}; _Animation_: **Oui**
- {{SVGAttr('font-style')}}
  - : Spécifie si la police doit être stylisée en normal, italique ou oblique.
    _Valeur_: **`normal`**|`italic`|`oblique`; _Animation_: **Oui**
- {{SVGAttr('font-variant')}}
  - : Spécifie si une police doit utiliser certaines variations, telles que les petites majuscules ou les ligatures.
    _Valeur_: see css {{cssxref('font-variant')}}; _Animation_: **Oui**
- {{SVGAttr('font-weight')}}
  - : Spécifie l'épaisseur (ou graisse) de la police.
    _Valeur_: **`normal`**|`bold`|`lighter`|`bolder`|`100`|`200`|`300`|`400`|`500`|`600`|`700`|`800`|`900`; _Animation_: **Oui**
- {{SVGAttr('glyph-orientation-horizontal')}} {{deprecated_inline('svg2')}}
  - : Contrôle l'orientation des glyphes lorsque la direction en ligne est horizontale.
    _Valeur_: [\<angle>](/docs/Web/SVG/Content_type#Angle)|`inherit`; _Animation_: **Non**
- {{SVGAttr('glyph-orientation-vertical')}} {{deprecated_inline('svg2')}}
  - : Contrôle l'orientation des glyphes lorsque la direction en ligne est verticale.
    _Valeur_: **`auto`**|[\<angle>](/docs/Web/SVG/Content_type#Angle)|`inherit`; _Animation_: **Non**
- {{SVGAttr('image-rendering')}}
  - : Indique au navigateur le compromis à effectuer entre vitesse et qualité du rendu des images.
    _Valeur_: **`auto`**|`optimizeQuality`|`optimizeSpeed`; _Animation_: **Oui**
- {{SVGAttr('kerning')}} {{deprecated_inline('svg2')}}
  - : Indique au navigateur s'il doit ajuster l'espacement entre les glyphes.
    _Valeur_: **`auto`**|[\<length>](/docs/Web/SVG/Content_type#Length)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('letter-spacing')}}
  - : Contrôle l'espacement entre les caratères du texte.
    _Valeur_: **`normal`**|[\<length>](/docs/Web/SVG/Content_type#Length)|`inherit`; _Animation_: **Oui**
- {{SVGAttr('lighting-color')}}
  - : Définit la couleur de la source de lumière pour les filtres {{SVGElement('feDiffuseLighting')}} et {{SVGElement('feSpecularLighting')}}.
    _Valeur_: [\<color>](/docs/Web/SVG/Content_type#Color); _Animation_: **Oui**
- {{SVGAttr('marker-end')}}
  - : Définit la pointe de la flèche ou polymarker dessiné à la fin de l'élément {{SVGElement('path')}} ou ou de la forme.
    _Valeur_: [\<FuncIRI>](/docs/Web/SVG/Content_type#FuncIRI)|**`none`**|`inherit`; _Animation_: **Oui**
- {{SVGAttr('marker-mid')}}
  - : Définit la pointe de la flèche ou polymarker dessiné entre chaque segment de l'élément {{SVGElement('path')}} ou de la forme.
    _Valeur_: [\<FuncIRI>](/docs/Web/SVG/Content_type#FuncIRI)|**`none`**|`inherit`; _Animation_: **Oui**
- {{SVGAttr('marker-start')}}
  - : Définit la pointe de la flèche ou polymarker dessiné au début de l'élément {{SVGElement('path')}} ou ou de la forme.
    _Valeur_: [\<FuncIRI>](/docs/Web/SVG/Content_type#FuncIRI)|**`none`**|`inherit`; _Animation_: **Oui**
- {{SVGAttr('mask')}}
  - : Modifie la visibilité d'un élément en masquant ou détourant l'image à des endroits spécifiques.
    _Valeur_: see css {{cssxref('mask')}}; _Animation_: **Oui**
- {{SVGAttr('opacity')}}
  - : Spécifie l'opacité d'un objet ou d'un groupe d'objets.
    _Valeur_: [\<opacity-value>](/docs/Web/SVG/Content_type#Opacity_value); _Animation_: **Oui**
- {{SVGAttr('overflow')}}
  - : Spécifie si le contenu d'un élément bloc est tronqué lorsqu'il déborde de la zone de l'élément.
    _Valeur_: **`visible`**|`hidden|scroll`|`auto`|`inherit`; _Animation_: **Oui**
- {{SVGAttr('pointer-events')}}
  - : Définit si et quand un élément peut être la cible d'un événement de la souris.
    _Valeur_: `bounding-box`|**`visiblePainted`**|`visibleFil`|`visibleStroke`|`visible` |`painted`|`fill`|`stroke`|`all`|`none`; _Animation_: **Oui**
- {{SVGAttr('shape-rendering')}}
  - : Indique au navigateur le compromis à effectuer entre vitesse et qualité du rendu des éléments {{SVGElement('path')}} et des formes.
    _Valeur_: **`auto`**|`optimizeSpeed`|`crispEdges`|`geometricPrecision` |`inherit`; _Animation_: **Oui**
- {{SVGAttr('solid-color')}}
  - : -
    _Valeur_:; _Animation_: **-**
- {{SVGAttr('solid-opacity')}}
  - : -
    _Valeur_:; _Animation_: **-**
- {{SVGAttr('stop-color')}}
  - : Indique la couleur à utiliser sur un {{SVGElement('stop')}} d'un dégradé.
    _Valeur_: `currentColor`|[\<color>](/fr/SVG/Content_type#Color "en/SVG/Content_type#Color")|[\<icccolor>](/fr/SVG/Content_type#ICCColor "en/SVG/Content_type#ICCColor")|`inherit`; _Animation_: **Oui**
- {{SVGAttr('stop-opacity')}}
  - : Indique l'opacité du {{SVGElement('stop')}}.
    _Valeur_: [\<opacity-value>](/fr/SVG/Content_type#Opacity_value "en/SVG/Content_type#Opacity_value")|`inherit`; _Animation_: **Oui**
- {{SVGAttr('stroke')}}
  - : Définit la couleur à utiliser pour le contour de l'élément.
    _Valeur_: [\<paint>](/docs/Web/SVG/Content_type#Paint); _Animation_: **Oui**
- {{SVGAttr('stroke-dasharray')}}
  - : Définit le motif des pointillés utilisé pour dessiner le contour de la forme.
    _Valeur_: `none`|`<dasharray>`; _Animation_: **Oui**
- {{SVGAttr('stroke-dashoffset')}}
  - : Décale la position de départ des pointillés.
    _Valeur_: [\<percentage>](/fr/SVG/Content_type#Percentage "en/SVG/Content_type#Percentage")|[\<length>](/fr/SVG/Content_type#Length "en/SVG/Content_type#Length"); _Animation_: **Oui**
- **{{SVGAttr('stroke-linecap')}}**
  - : Définit la forme de la fin des lignes.
    _Valeur_: **`butt`**|`round`|`square`; _Animation_: **Oui**
- **{{SVGAttr('stroke-linejoin')}}**
  - : Définit la manière de dessiner la liaison entre deux segments de ligne.
    _Valeur_: `arcs`|`bevel`|**`miter`**|`miter-clip`|`round`; _Animation_: **Oui**
- **{{SVGAttr('stroke-miterlimit')}}**
  - : Définit la limite du rapport entre la longueur du coin et la valeur de {{SVGAttr('stroke-width')}} utilisée pour dessiner la liaison entre deux segments de ligne.
    _Valeur_: [\<number>](/fr/SVG/Content_type#Number "en/SVG/Content_type#Number"); _Animation_: **Oui**
- **{{SVGAttr('stroke-opacity')}}**
  - : Définit l'opacité du contour d'une forme.
    _Valeur_: [\<opacity-value>](/fr/SVG/Content_type#Opacity_value "en/SVG/Content_type#Opacity_value")|[\<percentage>](/docs/Web/SVG/Content_type#Paint); _Animation_: **Oui**
- **{{SVGAttr('stroke-width')}}**
  - : Définit l'épaisseur du contour appliqué à une forme.
    _Valeur_: [\<length>](/docs/Web/SVG/Content_type#Length)|[\<percentage>](/docs/Web/SVG/Content_type#Percentage); _Animation_: **Oui**
- **{{SVGAttr('text-anchor')}}**
  - : Définit l'alignement vertical d'une chaîne de texte.
    _Valeur_: `start`|`middle`|`end`|**`inherit`**; _Animation_: **Oui**
- **{{SVGAttr('text-decoration')}}**
  - : Définit l'apparence des lignes décoratives sur le texte.
    _Valeur_: `none`|`underline`|`overline`|`line-through`|`blink`|**`inherit`**; _Animation_: **Oui**
- **{{SVGAttr('text-rendering')}}**
  - : Indique au navigateur le compromis à effectuer entre vitesse et qualité du rendu du texte.
    _Valeur_: **`auto`**|`optimizeSpeed`|`optimizeLegibility`|`geometricPrecision`|`inherit`; _Animation_: **Oui**
- **{{SVGAttr('transform')}}**
  - : Définit une liste de transformations à appliquer à un élément et à ses enfants.
    _Valeur_: [\<transform-list>](/docs/Web/SVG/Content_type#Transform-list); _Animation_: **Oui**
- **{{SVGAttr('unicode-bidi')}}**
  - : -
    _Valeur_:; _Animation_: **-**
- **{{SVGAttr('vector-effect')}}**
  - : Spécifie l'effet vectoriel à utiliser lors du dessin d'un objet.
    _Valeur_: `default`|`non-scaling-stroke`|`inherit`|`<uri>`; _Animation_: **Oui**
- **{{SVGAttr('visibility')}}**
  - : Définit la visibilité d'éléments graphiques.
    _Valeur_: **`visible`**|`hidden`|`collapse`|`inherit`; _Animation_: **Oui**
- **{{SVGAttr('word-spacing')}}**
  - : Définit la longueur des espaces entre les mots d'un texte.
    _Valeur_: [\<length>](/fr/SVG/Content_type#Length "https://developer.mozilla.org/en/SVG/Content_type#Length")|**`inherit`**; _Animation_: **Oui**
- **{{SVGAttr('writing-mode')}}**
  - : Spécifie si la direction d'un élément  {{SVGElement('text')}} doit être de gauche-à-droite, droite-à-gauche, ou de haut-en-bas.
    _Valeur_: **`lr-tb`**|`rl-tb`|`tb-rl`|`lr`|`rl`|`tb`|`inherit`; _Animation_: **Oui**

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation")}}
