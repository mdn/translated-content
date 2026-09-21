---
title: fill-opacity
slug: Web/SVG/Reference/Attribute/fill-opacity
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`fill-opacity`** est un attribut de présentation qui définit l'opacité du serveur de peinture (_couleur_, _dégradé_, _motif_, etc.) appliqué à une forme.

> [!NOTE]
> En tant qu'attribut de présentation, `fill-opacity` possède une propriété CSS équivalente&nbsp;: {{cssxref("fill-opacity")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
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
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Opacité de remplissage par défaut : 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- Opacité de remplissage exprimée avec un nombre -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- Opacité de remplissage exprimée avec un pourcentage -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- Opacité de remplissage exprimée avec une propriété CSS -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
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

> [!NOTE]
> SVG2 introduit les valeurs en pourcentage pour `fill-opacity`, mais elles ne sont pas encore largement prises en charge (_voir la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous_). Il est par conséquent recommandé de définir l'opacité avec une valeur de l'intervalle `[0-1]`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("fill-opacity")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}
