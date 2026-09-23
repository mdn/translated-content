---
title: baseFrequency
slug: Web/SVG/Reference/Attribute/baseFrequency
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

L'attribut **`baseFrequency`** représente le paramètre de fréquence de base pour la fonction de bruit du primitive de filtre {{SVGElement("feTurbulence")}}.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("feTurbulence")}}

## Exemples

### Exemple 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#noise1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Exemple 1", 220, 220)}}

### Exemple 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Exemple 2", 220, 250)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <a href="/fr/docs/Web/SVG/Guides/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
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

- `<number-optional-number>`
  - : Si deux nombres sont fournis, le premier représente la fréquence de base dans la direction horizontale et le second la fréquence de base dans la direction verticale. Si un seul nombre est fourni, cette valeur est utilisée pour les deux directions, horizontale (`x`) et verticale (`y`).

    Les valeurs négatives sont interdites.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
