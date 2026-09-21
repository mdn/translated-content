---
title: stroke-width
slug: Web/SVG/Reference/Attribute/stroke-width
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`stroke-width`** est un attribut de présentation qui définit l'épaisseur du contour appliqué à une forme. Il s'applique à toutes les formes SVG et à tous les éléments de contenu textuel mais, comme il s'agit d'une propriété héritée, il peut être appliqué à des éléments comme {{SVGElement("g")}} et produire malgré tout l'effet voulu sur le contour des éléments descendants.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-width` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-width")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

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

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Épaisseur de contour par défaut : 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- Épaisseur de contour exprimée avec un nombre -->
  <circle cx="15" cy="5" r="3" stroke="green" stroke-width="3" />

  <!-- Épaisseur de contour exprimée avec un pourcentage -->
  <circle cx="25" cy="5" r="3" stroke="green" stroke-width="2%" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 150)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#longueur"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#pourcentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Une valeur en pourcentage est toujours calculée comme un pourcentage de la longueur de la diagonale normalisée du {{SVGAttr('viewBox')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke-width")}}
