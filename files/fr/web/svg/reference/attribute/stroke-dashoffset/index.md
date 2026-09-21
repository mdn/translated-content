---
title: stroke-dashoffset
slug: Web/SVG/Reference/Attribute/stroke-dashoffset
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`stroke-dashoffset`** est un attribut de présentation qui définit un décalage dans le rendu du motif de traits (`stroke-dasharray`) associé.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-dashoffset` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-dashoffset")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

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
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Aucun motif de traits -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Aucun décalage -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  Le début du calcul du motif de traits
  est tiré de 3 unités utilisateur
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  Le début du calcul du motif de traits
  est poussé de 3 unités utilisateur
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  Le début du calcul du motif de traits
  est tiré d'une unité utilisateur, ce qui
  aboutit au même rendu que l'exemple précédent
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  Les lignes rouges suivantes mettent en évidence
  le décalage du motif de traits de chaque ligne
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 200)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#pourcentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#longueur"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

Le décalage est généralement exprimé en unités utilisateur, résolues par rapport à {{SVGAttr('pathLength')}}. En revanche, si un [`<percentage>`](/fr/docs/Web/SVG/Guides/Content_type#pourcentage) est utilisé, la valeur est résolue en pourcentage de la zone d'affichage (_viewport_) courante.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke-dashoffset")}}
