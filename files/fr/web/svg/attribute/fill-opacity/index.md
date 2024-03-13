---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
---

{{SVGRef}}

L'attribut **`fill-opacity`** définit l'opacité du remplissage (_couleur, dégradé, motif_, etc) appliqué à une forme.

> **Note :** `fill-opacity` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué sur tous les éléments, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Opacité par défaut: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- Définit l'opacité avec un nombre -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- Définit l'opaité avec un pourcentage -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- Définit l'opacité avec une propriété CSS -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 150)}}

## Notes d'utilisation

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

> **Note :** SVG2 introduit les valeurs en pourcentage pour `fill-opacity`. Cependant, ce n'est pas souvent pris en charge pour le moment (_Voir la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous_). Il est par conséquent recommandé d'utiliser les valeurs de l'intervalle `[0-1]`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
