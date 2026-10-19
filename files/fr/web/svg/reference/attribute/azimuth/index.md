---
title: azimuth
slug: Web/SVG/Reference/Attribute/azimuth
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

L'attribut **`azimuth`** définit l'angle de direction de la source lumineuse sur le plan XY (dans le sens des aiguilles d'une montre), en degrés par rapport à l'axe vertical.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("feDistantLight")}}

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="distantLight1">
    <feDiffuseLighting>
      <feDistantLight azimuth="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight azimuth="240" />
    </feDiffuseLighting>
  </filter>

  <circle cx="100" cy="100" r="80" filter="url(#distantLight1)" />
  <circle cx="340" cy="100" r="80" filter="url(#distantLight2)" />
</svg>
```

{{EmbedLiveSample("Exemples", 420, 200)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
