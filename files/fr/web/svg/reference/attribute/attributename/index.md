---
title: attributeName
slug: Web/SVG/Reference/Attribute/attributeName
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`attributeName`** indique le nom de la propriété CSS ou de l'attribut de l'élément cible qui va être modifié pendant une animation.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Exemples", 400, 250)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - : Cette valeur indique le nom de la propriété CSS ou de l'attribut de l'élément cible qui va être animé.

## Spécifications

{{Specifications}}

## Voir aussi

- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
