---
title: stroke-opacity
slug: Web/SVG/Attribute/stroke-opacity
---

{{SVGRef}}

L'attribut **`stroke-opacity`** définit l'opacité du contour (_couleur_, _dégradé_, _motif_, etc) appliqué à une forme SVG.

> **Note :** `stroke-opacity` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué à tous les éléments, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

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
  <!-- Opacité par défaut: 1 -->
  <circle cx="5" cy="5" r="4" stroke="green" />

  <!-- Définit l'opacité avec un nombre entre 0 et 1-->
  <circle cx="15" cy="5" r="4" stroke="green" stroke-opacity="0.7" />

  <!-- Définit l'opacité avec un pourcentage -->
  <circle cx="25" cy="5" r="4" stroke="green" stroke-opacity="50%" />

  <!-- Définit l'opacité comme propriété CSS -->
  <circle cx="35" cy="5" r="4" stroke="green" style="stroke-opacity: .3;" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 150)}}

## Notes d'usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint"
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

> **Note :** SVG2 introduit les valeurs en pourcentage pour `stroke-opacity`, Cependant, ce n'est pas souvent pris en charge. pour le moment (_voir la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous_), il est par conséquent recommendé d'utiliser les valeurs de l'intervalle `[0-1]`.

Il est important de savoir que le contour recouvre partiellement le remplissage d'une forme. Ainsi, un contour avec une opacité différente de 1 affichera partiellement le remplissage du dessous. Pour éviter cet effet, il est possible d'appliquer une opacité globale avec l'attribut {{SVGAttr('opacity')}} ou placer le contour derrière le remplissage avec {{SVGAttr('paint-order')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
