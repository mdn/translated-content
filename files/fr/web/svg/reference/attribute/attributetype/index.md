---
title: attributeType
slug: Web/SVG/Reference/Attribute/attributeType
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

L'attribut **`attributeType`** définit l'espace de noms dans lequel l'attribut cible et ses valeurs associées sont définis.

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
      <td><code>CSS</code> | <code>XML</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

- `CSS`
  - : Cette valeur indique que la valeur de {{SVGAttr("attributeName")}} est le nom d'une propriété CSS définie comme pouvant être animée.
- `XML`
  - : Cette valeur indique que la valeur de {{SVGAttr("attributeName")}} est le nom d'un attribut XML défini comme pouvant être animé dans l'espace de noms XML par défaut pour l'élément cible.
- `auto`
  - : Cette valeur indique que l'implémentation doit faire correspondre le {{SVGAttr("attributeName")}} à un attribut de l'élément cible. Les agents utilisateurs recherchent d'abord dans la liste des propriétés CSS un nom de propriété correspondant, et si aucun n'est trouvé, ils recherchent dans l'espace de noms XML par défaut pour l'élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
