---
title: fill
slug: Web/SVG/Reference/Attribute/fill
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

L'attribut **`fill`** a deux significations différentes. Pour les formes et le texte, c'est un attribut de présentation qui définit la couleur (_ou tout autre serveur de peinture SVG, comme un dégradé ou un motif_) utilisée pour peindre l'élément&nbsp;; pour les animations, il définit l'état final de l'animation.

> [!NOTE]
> Lorsqu'il est utilisé comme attribut de présentation, `fill` possède une propriété CSS équivalente&nbsp;: {{cssxref("fill")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

L'attribut de présentation SVG `fill` et la propriété CSS {{cssxref("fill")}} peuvent être utilisés avec les éléments SVG suivants&nbsp;:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

L'attribut SVG `fill` peut être utilisé pour définir l'état final d'une animation avec les éléments SVG suivants&nbsp;:

- {{SVGElement('animate')}}
- {{SVGElement('animateMotion')}}
- {{SVGElement('animateTransform')}}
- {{SVGElement('set')}}.

## Exemples

### Remplissage uni, remplissage en dégradé et animation

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Remplissage d'une couleur unie -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Remplissage d'un cercle avec un dégradé -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  Conservation de l'état final d'un cercle animé,
  c'est-à-dire un cercle d'un rayon de 40.
  -->
  <circle cx="250" cy="50" r="20">
    <animate
      attributeType="XML"
      attributeName="r"
      from="0"
      to="40"
      dur="5s"
      fill="freeze" />
  </circle>
</svg>
```

{{EmbedLiveSample("Remplissage uni, remplissage en dégradé et animation", '100%', 200)}}

### Exemple avec `context-fill`

Dans cet exemple, on définit trois formes à l'aide d'éléments {{SVGElement('path')}}, chacune avec une couleur de contour ([`stroke`](/fr/docs/Web/SVG/Reference/Attribute/stroke)) et de remplissage (`fill`) différente. On définit également un élément {{SVGElement('circle')}} qui sert de marqueur, via l'élément {{SVGElement('marker')}}. Chaque forme applique ce marqueur grâce à la propriété CSS `marker`.

L'élément {{SVGElement('circle')}} porte les attributs `stroke="context-stroke"` et `fill="context-fill"`. Comme il est utilisé comme marqueur dans le contexte de ces formes, ces attributs lui font hériter des valeurs de `fill` et de `stroke` définies sur chacun des éléments {{SVGElement('path')}}.

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url("#circle");
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Exemple avec `context-fill`", '100%', 220)}}

> [!NOTE]
> Les éléments peuvent également utiliser `context-stroke` et `context-fill` pour hériter des valeurs de `stroke` et de `fill` lorsqu'ils sont référencés par des éléments {{SVGElement('use')}}.

## animate

Pour {{SVGElement('animate')}}, `fill` définit l'état final de l'animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em
          >Conserver l'état de la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver l'état de la première image de l'animation</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## animateMotion

Pour {{SVGElement('animateMotion')}}, `fill` définit l'état final de l'animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em
          >Conserver l'état de la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver l'état de la première image de l'animation</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## animateTransform

Pour {{SVGElement('animateTransform')}}, `fill` définit l'état final de l'animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em
          >Conserver l'état de la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver l'état de la première image de l'animation</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## circle

Pour {{SVGElement('circle')}}, `fill` est un attribut de présentation qui définit la couleur du cercle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## ellipse

Pour {{SVGElement('ellipse')}}, `fill` est un attribut de présentation qui définit la couleur de l'ellipse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## path

Pour {{SVGElement('path')}}, `fill` est un attribut de présentation qui définit la couleur de l'intérieur de la forme. (_L'intérieur est défini par l'attribut {{SVGAttr('fill-rule')}} ou la propriété {{cssxref("fill-rule")}}._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## polygon

Pour {{SVGElement('polygon')}}, `fill` est un attribut de présentation qui définit la couleur de l'intérieur de la forme. (_L'intérieur est défini par l'attribut {{SVGAttr('fill-rule')}} ou la propriété {{cssxref("fill-rule")}}._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## polyline

Pour {{SVGElement('polyline')}}, `fill` est un attribut de présentation qui définit la couleur de l'intérieur de la forme. (_L'intérieur est défini par l'attribut {{SVGAttr('fill-rule')}} ou la propriété {{cssxref("fill-rule")}}._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## rect

Pour {{SVGElement('rect')}}, `fill` est un attribut de présentation qui définit la couleur du rectangle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## set

Pour {{SVGElement('set')}}, `fill` définit l'état final de l'animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em
          >Conserver l'état de la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver l'état de la première image de l'animation</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## text

Pour {{SVGElement('text')}}, `fill` est un attribut de présentation qui définit la couleur du texte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## textPath

Pour {{SVGElement('textPath')}}, `fill` est un attribut de présentation qui définit la couleur du texte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## tspan

Pour {{SVGElement('tspan')}}, `fill` est un attribut de présentation qui définit la couleur du texte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#painture">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("fill")}}
