---
title: color
slug: Web/SVG/Reference/Attribute/color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

L'attribut **`color`** sert à fournir une valeur indirecte potentielle, `currentColor`, pour les attributs {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} et {{SVGAttr("lighting-color")}}.

> [!NOTE]
> En tant qu'attribut de présentation, `color` possède une propriété CSS équivalente&nbsp;: {{cssxref("color")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Techniquement, `color` peut être appliqué à n'importe quel élément, mais il n'a aucun effet direct sur les éléments SVG.

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code><a href="/fr/docs/Web/CSS/Reference/Values/color_value">&#x3C;color></a></code>
        | <code>inherit</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>Dépend du user-agent</td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g color="green">
    <rect width="50" height="50" fill="currentColor" />
    <circle
      r="25"
      cx="70"
      cy="70"
      stroke="currentColor"
      fill="none"
      stroke-width="5" />
  </g>
</svg>
```

{{EmbedLiveSample("Exemple", "100%", "110")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("color")}}
