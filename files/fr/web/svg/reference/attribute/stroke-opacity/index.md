---
title: stroke-opacity
slug: Web/SVG/Reference/Attribute/stroke-opacity
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`stroke-opacity`** est un attribut de présentation qui définit l'opacité du serveur de peinture (_couleur_, _dégradé_, _motif_, etc.) appliqué au contour d'une forme.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-opacity` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-opacity")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
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
<svg viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Opacité de contour par défaut : 1 -->
  <circle cx="5" cy="5" r="4" stroke="green" />

  <!-- Opacité de contour exprimée avec un nombre -->
  <circle cx="15" cy="5" r="4" stroke="green" stroke-opacity="0.7" />

  <!-- Opacité de contour exprimée avec un pourcentage -->
  <circle cx="25" cy="5" r="4" stroke="green" stroke-opacity="50%" />

  <!-- Opacité de contour exprimée avec une propriété CSS -->
  <circle cx="35" cy="5" r="4" stroke="green" style="stroke-opacity: .3;" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 150)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#pourcentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

Il est important de savoir que le contour recouvre partiellement le remplissage d'une forme. Ainsi, un contour dont l'opacité est différente de `1` laissera partiellement apparaître le remplissage situé en dessous. Pour éviter cet effet, il est possible d'appliquer une opacité globale avec l'attribut {{SVGAttr('opacity')}}, ou de placer le contour derrière le remplissage avec l'attribut {{SVGAttr('paint-order')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke-opacity")}}
