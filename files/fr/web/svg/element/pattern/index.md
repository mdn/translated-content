---
title: <pattern>
slug: Web/SVG/Element/pattern
---

{{SVGRef}}

L'élément **`<pattern>`** définit un objet graphique qui peut être redessiné à des intervalles de coordonnées x et y répétés ("en mosaïque") pour couvrir une surface.

Le **`<pattern>`** est référéne par les attributs {{SVGAttr("fill")}} et {{SVGAttr("stroke")}} sur les autres éléments graphiques, pour appliquer un remplissage ou une bordure sur ces éléments avec le motif référencé.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>

  <circle cx="50" cy="50" r="50" fill="url(#star)" />
  <circle
    cx="180"
    cy="50"
    r="40"
    fill="none"
    stroke-width="20"
    stroke="url(#star)" />
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Attributs

- {{SVGAttr("height")}}
  - : Cet attribut détermine la hauteur du motif de mosaïque.
    _Type de valeur_ : [**\<longueur>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<pourcentage>**](/fr/docs/Web/SVG/Content_type#Percentage); _Valeur par défaut_ : `0`; _Animable_ : **oui**
- {{SVGAttr("href")}}
  - : Cet attribut référence un patron de motif qui fournit les valeurs par défaut des attributs de l'élément `<pattern>`.
    _Type de valeur_: [**\<URL>**](/fr/docs/Web/SVG/Content_type#URL); _Valeur par défaut_ : _none_; _Animable_: **yes**
- {{SVGAttr("patternContentUnits")}}

  - : Cet attribut définit le système de coordonnées pour le contenu de {{SVGElement("pattern")}}. _Type de valeur_ : `userSpaceOnUse`|`objectBoundingBox`; _Valeur par défaut_ : `userSpaceOnUse`; _Animable_: **yes**

    > **Note :** Cet attribut n'a pas d'effet si l'attribut `viewBox` est définit sur l'élément `<pattern>`.

- {{SVGAttr("patternTransform")}}
  - : Cet attribut contient la définition d'une transformation optionnelle supplémentaire du système de coordonnées du motif vers celui de la cible. _Type de valeur_ : **[\<transform-list>](/fr/docs/Web/SVG/Content_type#Transform-list)**; _Valeur par défaut_ : _none_; _Animatable_: **yes**
- {{SVGAttr("patternUnits")}}
  - : Cet attribut définit le système de coordonnées pour les attributs `x`, `y`, `width` , et `height`._Type de valeur_ : `userSpaceOnUse`|`objectBoundingBox`; _Valeur par défaut_ : `objectBoundingBox`; _Animable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : Cet attribut définit comme le fragment SVG doit être déformé s'il est embarqué dans un conteneur avec un ratio d'aspect différent.
    _Type de valeur_ : (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Valeur par défaut_ : `xMidYMid meet`; _Animable_: **yes**
- {{SVGAttr("viewBox")}}
  - : Cet attribut définit les limites de la fenêtre de rendu du SVG pour le fragment du motif._Type de valeur_ : **[\<list-of-numbers>](/fr/docs/Web/SVG/Content_type#List-of-Ts)** ; _Valeur par défaut_ : none; _Animable_: **yes**
- {{SVGAttr("width")}}
  - : Cet attribut détermine la largeur du motif de mosaïque.
    _Type de valeur_ : [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_ : `0`; _Animable_: **yes**
- {{SVGAttr("x")}}
  - : Cet attribut détermine le déplacement en coordonnée x du motif de mosaïque._Type de valeur_ : [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_ : `0`; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

  - : Cet attribut référence un patron de motif qui fournit des valeurs par défaut pour les attributs du `<pattern>`.
    _Type de valeur_ : [**\<URL>**](/fr/docs/Web/SVG/Content_type#URL); _Valeur par défaut_ : _none_; _Animable_: **yes**

    > **Note :** Pour les navigateurs implémentant `href`, si à la fois `href` et `xlink:href` sont définis, `xlink:href` sera ignoré et seulement `href` sera utilisé.

- {{SVGAttr("y")}}
  - : Cet attribut détermine le déplacement en coordonnée y du motif de mosaïque. _Type de valeur_ : [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_ : `0`; _Animable_: **yes**

### Attributs globaux

- [Attributs principaux](/fr/docs/Web/SVG/Attribute/Core)
  - : Plus notamment : {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Attributs de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Plus notamment : {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Plus notamment : {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Attributs XLink
  - : Plus notamment : {{SVGAttr("xlink:title")}}

## Notes d'utilisation

{{svginfo}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
