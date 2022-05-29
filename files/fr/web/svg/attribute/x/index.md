---
title: x
slug: Web/SVG/Attribute/x
translation_of: Web/SVG/Attribute/x
---
{{SVGRef}}

L'attribut **`x`** définit une coordonnée en abscisse dans le système de coordonnées de l'utilisatrice ou l'utilisateur.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- [`<altGlyph>`](/fr/docs/Web/SVG/Element/altGlyph)
- [`<cursor>`](/fr/docs/Web/SVG/Element/cursor)
- [`<feBlend>`](/fr/docs/Web/SVG/Element/feBlend)
- [`<feColorMatrix>`](/fr/docs/Web/SVG/Element/feColorMatrix)
- [`<feComponentTransfer>`](/fr/docs/Web/SVG/Element/feComponentTransfer)
- [`<feComposite>`](/fr/docs/Web/SVG/Element/feComposite)
- [`<feConvolveMatrix>`](/fr/docs/Web/SVG/Element/feConvolveMatrix)
- [`<feDiffuseLighting>`](/fr/docs/Web/SVG/Element/feDiffuseLighting)
- [`<feDisplacementMap>`](/fr/docs/Web/SVG/Element/feDisplacementMap)
- [`<feDropShadow>`](/fr/docs/Web/SVG/Element/feDropShadow)
- [`<feFlood>`](/fr/docs/Web/SVG/Element/feFlood)
- [`<feFuncA>`](/fr/docs/Web/SVG/Element/feFuncA)
- [`<feFuncB>`](/fr/docs/Web/SVG/Element/feFuncB)
- [`<feFuncG>`](/fr/docs/Web/SVG/Element/feFuncG)
- [`<feFuncR>`](/fr/docs/Web/SVG/Element/feFuncR)
- [`<feGaussianBlur>`](/fr/docs/Web/SVG/Element/feGaussianBlur)
- [`<feImage>`](/fr/docs/Web/SVG/Element/feImage)
- [`<feMerge>`](/fr/docs/Web/SVG/Element/feMerge)
- [`<feMergeNode>`](/fr/docs/Web/SVG/Element/feMergeNode)
- [`<feMorphology>`](/fr/docs/Web/SVG/Element/feMorphology)
- [`<feOffset>`](/fr/docs/Web/SVG/Element/feOffset)
- [`<fePointLight>`](/fr/docs/Web/SVG/Element/fePointLight)
- [`<feSpecularLighting>`](/fr/docs/Web/SVG/Element/feSpecularLighting)
- [`<feSpotLight>`](/fr/docs/Web/SVG/Element/feSpotLight)
- [`<feTile>`](/fr/docs/Web/SVG/Element/feTile)
- [`<feTurbulence>`](/fr/docs/Web/SVG/Element/feTurbulence)
- [`<filter>`](/fr/docs/Web/SVG/Element/filter)
- [`<foreignObject>`](/fr/docs/Web/SVG/Element/foreignObject)
- [`<glyphRef>`](/fr/docs/Web/SVG/Element/glyphRef)
- [`<image>`](/fr/docs/Web/SVG/Element/image)
- [`<mask>`](/fr/docs/Web/SVG/Element/mask)
- [`<pattern>`](/fr/docs/Web/SVG/Element/pattern)
- [`<rect>`](/fr/docs/Web/SVG/Element/rect)
- [`<svg>`](/fr/docs/Web/SVG/Element/svg)
- [`<symbol>`](/fr/docs/Web/SVG/Element/symbol)
- [`<text>`](/fr/docs/Web/SVG/Element/text)
- [`<tref>`](/fr/docs/Web/SVG/Element/tref)
- [`<tspan>`](/fr/docs/Web/SVG/Element/tspan)
- [`<use>`](/fr/docs/Web/SVG/Element/use)

## Exemple

```css hidden
html, body, svg { height: 100%; }
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20"  y="20" width="60" height="60" />
  <rect x="120" y="20" width="60" height="60" />
  <rect x="220" y="20" width="60" height="60" />
</svg>
```

{{EmbedLiveSample("", '100%', 200)}}

## `<altGlyph>`

> **Attention :** Avec SVG2, [`<altGlyph>`](/fr/docs/Web/SVG/Element/altGlyph) est déprécié et ne devrait pas être utilisé.

Pour [`<altGlyph>`](/fr/docs/Web/SVG/Element/altGlyph), `x` définit l'abscisse du glyphe alternatif.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Une liste de valeurs <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feBlend>`

Pour [`<feBlend>`](/fr/docs/Web/SVG/Element/feBlend), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feColorMatrix>`

Pour [`<feColorMatrix>`](/fr/docs/Web/SVG/Element/feColorMatrix), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feComponentTransfer>`

Pour [`<feComponentTransfer>`](/fr/docs/Web/SVG/Element/feComponentTransfer), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feComposite>`

Pour [`<feComposite>`](/fr/docs/Web/SVG/Element/feComposite), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feConvolveMatrix>`

Pour [`<feConvolveMatrix>`](/fr/docs/Web/SVG/Element/feConvolveMatrix), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feDiffuseLighting>`

Pour [`<feDiffuseLighting>`](/fr/docs/Web/SVG/Element/feDiffuseLighting), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feDisplacementMap>`

Pour [`<feDisplacementMap>`](/fr/docs/Web/SVG/Element/feDisplacementMap), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feDropShadow>`

Pour [`<feDropShadow>`](/fr/docs/Web/SVG/Element/feDropShadow), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feFlood>`

Pour [`<feFlood>`](/fr/docs/Web/SVG/Element/feFlood), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feFuncA>`

Pour [`<feFuncA>`](/fr/docs/Web/SVG/Element/feFuncA), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feFuncB>`

Pour [`<feFuncB>`](/fr/docs/Web/SVG/Element/feFuncB), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feFuncG>`

Pour [`<feFuncG>`](/fr/docs/Web/SVG/Element/feFuncG), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feFuncR>`

Pour [`<feFuncR>`](/fr/docs/Web/SVG/Element/feFuncR), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feGaussianBlur>`

Pour [`<feGaussianBlur>`](/fr/docs/Web/SVG/Element/feGaussianBlur), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feImage>`

Pour [`<feImage>`](/fr/docs/Web/SVG/Element/feImage), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feMerge>`

Pour [`<feMerge>`](/fr/docs/Web/SVG/Element/feMerge), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feMergeNode>`

Pour [`<feMergeNode>`](/fr/docs/Web/SVG/Element/feMergeNode), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feMorphology>`

Pour [`<feMorphology>`](/fr/docs/Web/SVG/Element/feMorphology), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feOffset>`

Pour [`<feOffset>`](/fr/docs/Web/SVG/Element/feOffset), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<fePointLight>`

Pour [`<fePointLight>`](/fr/docs/Web/SVG/Element/fePointLight), `x` définit l'emplacement horizontal de la source de lumière dans le système de coordonnées définit par l'attribut [`primitiveUnits`](/fr/docs/Web/SVG/Attribute/primitiveUnits) de l'élément [`<filter>`](/fr/docs/Web/SVG/Element/filter).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#number">&lt;number&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feSpecularLighting>`

Pour [`<feSpecularLighting>`](/fr/docs/Web/SVG/Element/feSpecularLighting), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feSpotLight>`

Pour [`<feSpotLight>`](/fr/docs/Web/SVG/Element/feSpotLight), `x` définit l'emplacement horizontal de la source de lumière dans le système de coordonnées définit par l'attribut [`primitiveUnits`](/fr/docs/Web/SVG/Attribute/primitiveUnits) de l'élément [`<filter>`](/fr/docs/Web/SVG/Element/filter).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#number">&lt;number&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feTile>`

Pour [`<feTile>`](/fr/docs/Web/SVG/Element/feTile), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<feTurbulence>`

Pour [`<feTurbulence>`](/fr/docs/Web/SVG/Element/feTurbulence), `x` définit l'abscisse minimale de la zone de rendu de la primitive.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<filter>`

Pour [`<filter>`](/fr/docs/Web/SVG/Element/filter), `x` définit l'abscisse du coin supérieur gauche de la zone de rendu du filtre.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>-10%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<foreignObject>`

Pour [`<foreignObject>`](/fr/docs/Web/SVG/Element/foreignObject), `x` définit l'abscisse du coin supérieur gauche de sa zone d'affichage (<i lang="en">viewport</i>).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> **Note :** À partir de SVG2, `x` est une propriété *géométrique*, ce qui signifie qu'il peut être utilisé comme propriété CSS pour `<foreignObject>`.

## `<glyphRef>`

> **Attention :** À partir de SVG2, [`<glyphRef>`](/fr/docs/Web/SVG/Element/glyphRef) est déprécié et ne devrait pas être utilisé.

Pour [`<glyphRef>`](/fr/docs/Web/SVG/Element/glyphRef), `x` définit l'abscisse du glyphe.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#number">&lt;number&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>
        <code>0</code> pour le premier <code>&lt;glyphRef&gt;</code>, et l'abscisse de fin du <code>&lt;glyphRef&gt;</code> précédent pour ceux qui suivent.
      </td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<image>`

Pour [`<image>`](/fr/docs/Web/SVG/Element/image), `x` définit l'abscisse du coin supérieur gauche de l'image.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> **Note :** À partir de SVG2, `x` est une propriété *géométrique*, ce qui signifie qu'il peut être utilisé comme propriété CSS pour les images.

## `<mask>`

Pour [`<mask>`](/fr/docs/Web/SVG/Element/mask), `x` définit l'abscisse du coin supérieur gauche de sa zone d'effet. L'effet exact de cet attribut est influencé par la valeur de l'attribut [`maskUnits`](/fr/docs/Web/SVG/Attribute/maskUnits).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>-10%</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<pattern>`

Pour [`<pattern>`](/fr/docs/Web/SVG/Element/pattern), `x` définit l'abscisse du coin supérieur gauche de la tuile du motif. L'effet exact de cet attribut est influencé par les attributs [`patternUnits`](/fr/docs/Web/SVG/Attribute/patternUnits) et [`patternTransform`](/fr/docs/Web/SVG/Attribute/patternTransform).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<rect>`

Pour [`<rect>`](/fr/docs/Web/SVG/Element/rect), `x` définit l'abscisse du coin supérieur gauche de la forme.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> **Note :** À partir de SVG2, `x` est une propriété *géométrique*, ce qui signifie qu'il peut être utilisé comme propriété CSS pour les rectangles.

## `<svg>`

Pour [`<svg>`](/fr/docs/Web/SVG/Element/svg), `x` définit l'abscisse du coin supérieur gauche de la zone d'affichage (<i lang="en">viewport</i>).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> **Note :** À partir de SVG2, `x` est une propriété *géométrique*, ce qui signifie qu'il peut être utilisé comme propriété CSS pour `<svg>`.

## `<text>`

Pour [`<text>`](/fr/docs/Web/SVG/Element/text), si l'élément contient une seule valeur, `x` définit l'abscisse où *la position du contenu texte* doit être placée. *La position du contenu texte* est généralement un point sur la ligne de base de la première ligne de texte. La valeur exacte de *la position du contenu texte* est influencée par des propriétés comme [`text-anchor`](/fr/docs/Web/SVG/Attribute/text-anchor) ou [`direction`](/fr/docs/Web/CSS/direction).

S'il a plusieurs valeurs, `x` définit l'abscisse individuelle de chaque glyphe du texte. S'il y a moins de valeurs que de glyphes, les glyphes restants sont placés dans la continuité du dernier glyphe positionné. S'il y a plus de valeurs que de glyphes, les valeurs supplémentaires sont ignorées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>Liste de valeurs (<strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

```css hidden
html, body, svg { height: 100%; }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Une ligne horizontale pour matérialiser la ligne de base -->
  <line x1="0" y1="40%" x2="100%" y2="40%" />
  <line x1="0" y1="90%" x2="100%" y2="90%" />

  <!-- Une ligne verticale pour matérialiser la position en x -->
  <line x1="25%" y1="0" x2="25%" y2="100%" />
  <line x1="50%" y1="0" x2="50%" y2="100%" />
  <line x1="75%" y1="0" x2="75%" y2="100%" />

  <!-- x avec une seule valeur -->
  <text y="40%" x="50%">SVG</text>

  <!-- x avec plusieurs valeurs -->
  <text y="90%" x="25%, 50%, 75%">SVG</text>
</svg>
```

```css
text {
  font: 40px sans-serif;
}

line {
  fill: none;
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 2px;
}
```

{{EmbedLiveSample('', '100%', 100)}}

## `<tref>`

> **Attention :** Avec SVG2, [`<tref>`](/fr/docs/Web/SVG/Element/tref) est déprécié et ne devrait plus être utilisé.

Pour [`<tref>`](/fr/docs/Web/SVG/Element/tref), si l'élément contient une seule valeur, `x` définit l'abscisse où *la position du contenu texte* doit être placée. *La position du contenu texte* est généralement un point sur la ligne de base de la première ligne de texte. La valeur exacte de *la position du contenu texte* est influencée par des propriétés comme [`text-anchor`](/fr/docs/Web/SVG/Attribute/text-anchor) ou [`direction`](/fr/docs/Web/CSS/direction).

S'il a plusieurs valeurs, `x` définit l'abscisse individuelle de chaque glyphe du texte. S'il y a moins de valeurs que de glyphes, les glyphes restants sont placés dans la continuité du dernier glyphe positionné. S'il y a plus de valeurs que de glyphes, les valeurs supplémentaires sont ignorées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>Liste de valeurs (<strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## `<tspan>`

Pour [`<tspan>`](/fr/docs/Web/SVG/Element/tspan), si l'élément contient une seule valeur, `x` définit l'abscisse où *la position du contenu texte* doit être placée. *La position du contenu texte* est généralement un point sur la ligne de base de la première ligne de texte. La valeur exacte de *la position du contenu texte* est influencée par des propriétés comme [`text-anchor`](/fr/docs/Web/SVG/Attribute/text-anchor) ou [`direction`](/fr/docs/Web/CSS/direction).

S'il a plusieurs valeurs, `x` définit l'abscisse individuelle de chaque glyphe du texte. S'il y a moins de valeurs que de glyphes, les glyphes restants sont placés dans la continuité du dernier glyphe positionné. S'il y a plus de valeurs que de glyphes, les valeurs supplémentaires sont ignorées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>Liste de valeurs (<strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>)
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

```css hidden
html, body, svg { height: 100%; }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Une ligne horizontale pour matérialiser la ligne de base -->
  <line x1="0" y1="40%" x2="100%" y2="40%" />
  <line x1="0" y1="90%" x2="100%" y2="90%" />

  <!-- Une ligne verticale pour matérialiser la position en x -->
  <line x1="25%" y1="0" x2="25%" y2="100%" />
  <line x1="50%" y1="0" x2="50%" y2="100%" />
  <line x1="75%" y1="0" x2="75%" y2="100%" />

  <text>
    <!-- x avec une seule valeur -->
    <tspan y="40%" x="50%">SVG</tspan>

    <!-- x avec plusieurs valeurs -->
    <tspan y="90%" x="25%, 50%, 75%">SVG</tspan>
  </text>
</svg>
```

```css
text {
  font: 40px sans-serif;
}

line {
  fill: none;
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 2px;
}
```

{{EmbedLiveSample('', '100%', 100)}}

## `<use>`

Pour [`<use>`](/fr/docs/Web/SVG/Element/use), `x` définit l'abscisse du coin supérieur gauche de l'élément référencé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Content_type#length">&lt;length&gt;</a></strong>|<strong><a href="/fr/docs/Web/SVG/Content_type#percentage">&lt;percentage&gt;</a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> **Note :** À partir de SVG2, `x` est une propriété *géométrique*, ce qui signifie qu'il peut être utilisé comme propriété CSS pour les éléments utilisés.

## Spécifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-x">Filter Effects Module Level 1 — La définition de 'x' dans cette spécification</a></td>
      <td>Brouillon de travail</td>
      <td>Définition de <code>&lt;filter&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://drafts.fxtf.org/filter-effects/#element-attrdef-fespotlight-x">Filter Effects Module Level 1 — La définition de 'x' dans cette spécification</a></td>
      <td>Brouillon de travail</td>
      <td>Définition de <code>&lt;feSpotLight&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://drafts.fxtf.org/filter-effects/#element-attrdef-fepointlight-x">Filter Effects Module Level 1 — La définition de 'x' dans cette spécification</a></td>
      <td>Brouillon de travail</td>
      <td>Définition de <code>&lt;fePointLight&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://drafts.fxtf.org/filter-effects/#element-attrdef-filter-primitive-x">Filter Effects Module Level 1 — La définition de 'x' dans cette spécification</a></td>
      <td>Brouillon de travail</td>
      <td>Définition des primitives de filtre</td>
    </tr>
    <tr>
      <td><a href="https://drafts.fxtf.org/css-masking-1/#element-attrdef-mask-x">CSS Masking Module Level&nbsp;1 — La définition de 'x' dans cette spécification</a></td>
      <td>Candidat au statut de recommandation</td>
      <td>Définition de <code>&lt;mask&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://svgwg.org/svg2-draft/geometry.html#X">Scalable Vector Graphics (SVG) 2 — La définition de 'x' dans cette spécification</a></td>
      <td>Candidat au statut de recommandation</td>
      <td>Définition comme propriété géométrique</td>
    </tr>
    <tr>
      <td><a href="https://svgwg.org/svg2-draft/pservers.html#PatternElementXAttribute">Scalable Vector Graphics (SVG) 2 — La définition de 'x' dans cette spécification</a></td>
      <td>Candidat au statut de recommandation</td>
      <td>Définition de <code>&lt;pattern&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://svgwg.org/svg2-draft/text.html#TextElementXAttribute">Scalable Vector Graphics (SVG) 2 — La définition de 'x' dans cette spécification</a></td>
      <td>Candidat au statut de recommandation</td>
      <td>Définition de <code>&lt;text&gt;</code> and <code>&lt;tspan&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/interact.html#CursorElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;cursor&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;foreignObject&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/pservers.html#PatternElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;pattern&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/struct.html#ImageElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;image&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/struct.html#SVGElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;svg&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/struct.html#UseElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;use&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/filters.html#fePointLightXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;fePointLight&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/filters.html#feSpotLightXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;feSpotLight&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/filters.html#FilterElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;filter&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/filters.html#FilterPrimitiveXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale des primitives de filtre</td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/masking.html#MaskElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;mask&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/text.html#AltGlyphElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;altGlyph&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/text.html#GlyphRefElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;glyphRef&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/text.html#TextElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;text&gt;</code></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/text.html#TSpanElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;tref&gt;</code> et <code>&lt;tspan&gt;</code>
      </td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/SVG11/shapes.html#RectElementXAttribute">Scalable Vector Graphics (SVG) 1.1 (Second Edition) — La définition de 'x' dans cette spécification</a></td>
      <td>Recommandation</td>
      <td>Définition initiale de <code>&lt;rect&gt;</code></td>
    </tr>
  </tbody>
</table>
