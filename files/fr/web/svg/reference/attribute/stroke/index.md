---
title: stroke
slug: Web/SVG/Reference/Attribute/stroke
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

L'attribut **`stroke`** est un attribut de présentation qui définit la couleur (_ou tout autre serveur de peinture SVG, comme un dégradé ou un motif_) utilisée pour dessiner le contour d'une forme.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

## Exemples

### Contour uni et contour en dégradé

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Contour d'une couleur unie -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- Contour d'un cercle avec un dégradé -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Contour uni et contour en dégradé", '100%', 200)}}

### Exemple avec `context-stroke`

Dans cet exemple, on définit trois formes à l'aide d'éléments {{SVGElement('path')}}, chacune avec une couleur de contour (`stroke`) et de remplissage ([`fill`](/fr/docs/Web/SVG/Reference/Attribute/fill)) différente. On définit également un élément {{SVGElement('circle')}} qui sert de marqueur, via l'élément {{SVGElement('marker')}}. Chaque forme applique ce marqueur grâce à la propriété CSS `marker`.

L'élément {{SVGElement('circle')}} porte les attributs `stroke="context-stroke"` et `fill="context-fill"`. Comme il est utilisé comme marqueur dans le contexte de ces formes, ces attributs lui font hériter des valeurs de `fill` et de `stroke` définies sur chacun des éléments {{SVGElement('path')}}.

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url("#circle");
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Exemple avec `context-stroke`", '100%', 220)}}

> [!NOTE]
> Les éléments peuvent également utiliser `context-stroke` et `context-fill` pour hériter des valeurs de `stroke` et de `fill` lorsqu'ils sont référencés par des éléments {{SVGElement('use')}}.

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture"
            >&#x3C;paint></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke")}}
