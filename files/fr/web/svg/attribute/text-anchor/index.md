---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
---

{{SVGRef}}

L'attribut **`text-anchor`** est utilisé pour aligner (alignement de début, de milieu ou de fin) une chaîne de texte préformaté ou un texte auto-enveloppé dont la zone d'enveloppement est déterminée à partir de la propriété [`inline-size`](/fr/docs/Web/SVG/Attribute/inline-size) par rapport à un point donné. Elle ne s'applique pas aux autres types de texte auto-enveloppé. Pour ces cas, vous devez utiliser [`text-align`](/fr/docs/Web/CSS/text-align). Pour le texte à plusieurs lignes, l'alignement a lieu pour chaque ligne.

L'attribut `text-anchor` est appliqué à chaque bloc de texte individuel dans un élément [`<text>`](/fr/docs/Web/SVG/Element/text) donné. Chaque fragment de texte a une position de texte actuelle initiale, qui représente le point du système de coordonnées de l'utilisateur résultant (selon le contexte) de l'application des attributs [`x`](/fr/docs/Web/SVG/Attribute/x) et [`y`](/fr/docs/Web/SVG/Attribute/y) sur l'élément `<text>`, toute valeur d'attribut `x` ou `y` sur un élément [`<tspan>`](/fr/docs/Web/SVG/Element/tspan), [`<tref>`](/fr/docs/Web/SVG/Element/tref) ou [`<altGlyph>`](/fr/docs/Web/SVG/Element/altGlyph) assigné explicitement au premier caractère rendu dans un fragment de texte, ou la détermination de la position initiale du texte actuel pour un élément [`<textPath>`](/fr/docs/Web/SVG/Element/textPath).

> **Note :** En tant qu'attribut de présentation, `text-anchor` peut être utilisé comme une propriété CSS.

Cet attribut peut être utilisé pour les éléments SVG suivants :

- [`<altGlyph>`](/fr/docs/Web/SVG/Element/altGlyph)
- [`<text>`](/fr/docs/Web/SVG/Element/text)
- [`<textPath>`](/fr/docs/Web/SVG/Element/textPath)
- [`<tref>`](/fr/docs/Web/SVG/Element/tref)
- [`<tspan>`](/fr/docs/Web/SVG/Element/tspan)

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Matérialisation des ancrages -->
  <path
    d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110"
    stroke="grey" />

  <!-- Ancres en action -->
  <text text-anchor="start" x="60" y="40">A</text>
  <text text-anchor="middle" x="60" y="75">A</text>
  <text text-anchor="end" x="60" y="110">A</text>

  <!-- Matérialisation des ancrages -->
  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
      ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Exemple", "120", "120")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>start</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>start</code> | <code>middle</code> | <code>end</code></td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `start`
  - : Les caractères rendus sont alignés de telle sorte que le début de la chaîne de texte se trouve à la position initiale du texte courant. Pour un élément dont la valeur de propriété [`direction`](/fr/docs/Web/CSS/direction) est `ltr` (typique de la plupart des langues européennes), le côté gauche du texte est rendu à la position initiale du texte. Pour un élément dont la valeur de la propriété direction est `rtl` (typique de l'arabe et de l'hébreu), le côté droit du texte est rendu à la position initiale du texte. Pour un élément dont la direction du texte primaire est verticale (souvent typique des textes asiatiques), le côté supérieur du texte est rendu à la position initiale du texte.
- `middle`
  - : Les caractères rendus sont alignés de telle sorte que le milieu de la chaîne de texte se trouve à la position actuelle du texte. (Pour le texte sur un chemin, la chaîne de texte est d'abord disposée en ligne droite. Le point médian entre le début et la fin de la chaîne de texte est déterminé. Ensuite, la chaîne de texte est mappée sur le chemin avec ce point médian placé à la position actuelle du texte).
- `end`
  - : Les caractères rendus sont décalés de telle sorte que la fin du texte rendu résultant (position finale du texte actuel avant l'application de la propriété `text-anchor`) se trouve à la position initiale du texte actuel. Pour un élément avec une valeur de propriété `direction` égale à `ltr` (typique pour la plupart des langues européennes), le côté droit du texte est rendu à la position initiale du texte. Pour un élément avec une valeur de propriété `direction` égale à `rtl` (typique pour l'arabe et l'hébreu), le côté gauche du texte est rendu à la position initiale du texte. Pour un élément dont la direction primaire du texte est verticale (souvent typique des textes asiatiques), le bas du texte est rendu à la position initiale du texte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
