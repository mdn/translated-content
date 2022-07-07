---
title: in
slug: Web/SVG/Attribute/in
tags:
  - SVG
  - SVG Attribute
  - SVG Filter
translation_of: Web/SVG/Attribute/in
---
« [SVG Attribute reference home](/fr/SVG/Attribute "en/SVG/Attribute")

L'attribut `in` identifie l'entrée pour la primitive de filtre donnée.

Cet attribut peut prendre pour valeur un des six mots-clés définis ci-dessous ou la valeur d'un attribut {{SVGAttr("result")}} d'une primitive précédente dans le même élément {{SVGElement("filter")}}. Si aucune valeur n'est définit et qu'il s'agit de la première primitive du filtre, alors la valeur par défaut est `SourceGraphic`. Si aucune valeur n'est définit et qu'il ne s'agit pas de la première primitive, alors la valeur par défaut est le résultat de la primitive précédente.

Si la même valeur de {{SVGAttr("result")}} apparaît à de multiples endroits dans un élément {{SVGElement("filter")}} donné, c'est la primitive de filtre avec cette valeur de {{SVGAttr("result")}} précédant la primitive en cours qui est la plus proche qui est utilisée.

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Catégories</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        &#x3C;filter-primitive-reference>
      </td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Document normatif</th>
      <td>
        <a
          href="http://www.w3.org/TR/SVG11/filters.html#FilterPrimitiveInAttribute"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

- SourceGraphic
  - : Ce mot-clé désigne l'élément graphique sur lequel s'applique le {{SVGElement("filter")}}.
- SourceAlpha
  - : `SourceAlpha` fonctionne de la même manière que `SourceGraphic` à la différence près que seul le canal alpha (la transparence) est utilisé.
- BackgroundImage
  - : Ce mot-clé désigne une capture de l'image du document SVG sous la région du filtre au moment où l'élément {{SVGElement("filter")}} a été invoqué.
- BackgroundAlpha
  - : Même principe que `BackgroundImage` à la différence près que seul le canal alpha est utilisé.
- FillPaint
  - : Ce mot-clé désigné la valeur de la propriété {{SVGAttr("fill")}} sur l'élément cible du filtre. Dans la plupart des cas, `FillPaint` est uniformément opaque, mais ce n'est pas le cas si la forme est remplit par un dégradé ou un motif qui contient des zones transparentes ou semi-transparentes.
- StrokePaint
  - : Ce mot-clé désigne la valeur de la propriété {{SVGAttr("stroke")}} sur l'élément cible du filtre. Dans la plupart des cas, `StrokePaint` est uniformément opaque, mais ce n'est pas le cas si la forme est remplit par un dégradé ou un motif qui contient des zones transparentes ou semi-transparentes.

## Contournement pour BackgroundImage

À la place de `in="BackgroundImage"`, on peut importer une image à fusionner à l'intérieur du filtre avec l'élément `<feImage>`.

```html
<div style="width: 420px; height: 220px;">
<svg style="width:200px; height:200px; display: inline;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="backgroundMultiply">
      <!-- Ça ne marchera pas. -->
      <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply"/>
    </filter>
  </defs>
  <image xlink:href="mdn_logo_only_color.png" x="10%" y="10%" width="80%" height="80%"/>
  <circle cx="50%" cy="40%" r="40%" fill="#c00" style="filter:url(#backgroundMultiply);" />
</svg>

<svg style="width:200px; height:200px; display: inline;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="imageMultiply">
      <!-- Solution de contournement. -->
      <feImage xlink:href="mdn_logo_only_color.png" x="10%" y="10%" width="80%" height="80%"/>
      <feBlend in2="SourceGraphic" mode="multiply"/>
    </filter>
  </defs>
  <circle cx="50%" cy="40%" r="40%" fill="#c00" style="filter:url(#imageMultiply);"/>
</svg>
</div>
```

{{ EmbedLiveSample('Contournement_pour_BackgroundImage') }}

## Éléments

Les éléments suivants peuvent utiliser l'attribut  `in`:

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
