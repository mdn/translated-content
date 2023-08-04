---
title: fill
slug: Web/SVG/Attribute/fill
---

{{SVGRef}}

L'attribut **`fill`** a deux significations différentes: 1. pour les formes et le texte, il définit le remplissage (_couleur, dégradé, motif, etc_); 2. pour les animations, il définit l'état final.

Cet attribut peut être appliqué à tous les éléments, en revanche il n'aura d'effet que sur les formes suivantes: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

Pour les animations, il s'applique à cinq éléments: {{SVGElement('animate')}}, {{SVGElement('animateColor')}}, {{SVGElement('animateMotion')}}, {{SVGElement('animateTransform')}}, et {{SVGElement('set')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Remplir avec une simple couleur -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Remplir avec un dégradé -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>
  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!-- Définit l'état final d'un cercle animé -->
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

{{EmbedLiveSample('Exemple', '100%', 200)}}

## altGlyph

> **Attention :** {{SVGElement('altGlyph')}} est déprécié en SVG2 et ne devrait pas être utilisé.

Pour {{SVGElement('altGlyph')}}, `fill` est un attribut de présentation qui définit la couleur du glyphe.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## animate

Pour {{SVGElement('animate')}}, `fill` définit l'état final de l'animation.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em>Conserver la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver la première image de l'animation</em
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

## animateColor

> **Attention :** {{SVGElement('animateColor')}} est déprécié en SVG2 et ne devrait pas être utilisé. Utiliser {{SVGElement('animate')}} à la place.

Pour {{SVGElement('animateColor')}}, `fill` définit l'état final de l'animation.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em>Conserver la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver la première image de l'animation</em
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

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em>Conserver la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver la première image de l'animation</em
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

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em>Conserver la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver la première image de l'animation</em
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

Pour {{SVGElement('circle')}}, `fill` est un attribut de présentation qui définit la couleur de remplissage du cercle.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## ellipse

Pour {{SVGElement('ellipse')}}, `fill` est un attribut de présentation qui définit la couleur de remplissage du cercle.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## path

Pour {{SVGElement('path')}}, `fill` est un attribut de présentation qui définit la couleur de remplissage de la forme. (_Intérieur définit par l'attribut {{SVGAttr('fill-rule')}}_)

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## polygon

Pour {{SVGElement('polygon')}}, `fill` est un attribut de présentation qui définit la couleur de remplissage de la forme. (_Intérieur définit par l'attribut {{SVGAttr('fill-rule')}}_)

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## polyline

For {{SVGElement('polyline')}}, `fill` est un attribut de présentation qui définit la couleur de remplissage de la forme. (_Intérieur définit par l'attribut {{SVGAttr('fill-rule')}}_)

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## rect

Pour {{SVGElement('rect')}}, `fill` est un attribut de présentation qui définit la couleur de remplissage du rectangle.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## set

Pour {{SVGElement('set')}}, `fill` définit l'état final de l'animation.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>freeze</code> (<em>Conserver la dernière image de l'animation</em
        >) | <code>remove</code> (<em
          >Conserver la première image de l'animation</em
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

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## textPath

Pour {{SVGElement('textPath')}}, `fill` est un attribut de présentation qui définit la couleur du texte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## tref

> **Attention :** {{SVGElement('tref')}} est déprécié en SVG2 et ne devrait pas être utilisé.

Pour {{SVGElement('tref')}}, `fill` est un attribut de présentation qui définit la couleur du texte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## tspan

Pour {{SVGElement('tspan')}}, `fill` est un attribut de présentation qui définit la couleur du texte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note :** `fill` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :** Pour plus d'informations sur les valeurs de `context-fill` (et `context-stroke`) dans des documents HTML, voir la documentation pour la propriété non-standard {{cssxref("-moz-context-properties")}}.
