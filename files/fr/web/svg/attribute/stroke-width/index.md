---
title: stroke-width
slug: Web/SVG/Attribute/stroke-width
---

{{SVGRef}}

L'attribut **`stroke-width`** définit l'épaisseur du contour à appliquer à une forme SVG.

> **Note :** `stroke-width` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

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
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Épaisseur par défaut: 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- Définit l'épaisseur avec un nombre -->
  <circle cx="15" cy="5" r="3" stroke="green" stroke-width="3" />

  <!-- Définit l'épaisseur avec un pourcentage -->
  <circle cx="25" cy="5" r="3" stroke="green" stroke-width="2%" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 150)}}

## Notes d'usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        > |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Percentage"
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

> **Note :** SVG2 introduit les valeurs en pourcentage pour `stroke-width`, Cependant, ce n'est pas souvent pris en charge pour le moment (_voir la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous_). Il est par conséquent recommandé d'utiliser les valeurs de l'intervalle `[0-1]`.

Une valeur en pourcentage est toujours calculée en tant que pourcentage de la longueur diagonale {{SVGAttr('viewBox')}} normalisée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
