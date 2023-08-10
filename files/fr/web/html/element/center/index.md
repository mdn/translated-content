---
title: "<center> : l'élément de texte centré"
slug: Web/HTML/Element/center
---

{{HTMLSidebar}}

> **Attention :** Cette fonctionnalité est obsolète. Bien qu'encore supportée par des navigateurs, son utilisation est découragée pour tout nouveau projet. Évitez de l'utiliser.

L'élément **`<center>`** est un [élément de bloc](/fr/docs/Web/HTML/Block-level_elements) qui contient des paragraphes et d'autres éléments de type bloc ou en ligne. Le contenu entier de cet élément est centré horizontalement au sein de son conteneur parent (généralement l'élément [`<body>`](/fr/docs/Web/HTML/Element/body)).

Cet élément a été déprécié en HTML4 (et XHTML 1) au profit de la propriété [CSS](/fr/docs/Web/CSS) [`text-align`](/fr/docs/Web/CSS/text-align) qui peut être appliqué à l'élément [`<div>`](/fr/docs/Web/HTML/Element/div) ou à un élément [`<p>`](/fr/docs/Web/HTML/Element/p). Pour centrer des blocs, on utilisera d'autres propriétés ([`margin-left`](/fr/docs/Web/CSS/margin-left) et [`margin-right`](/fr/docs/Web/CSS/margin-right) (ou définissez [`margin`](/fr/docs/Web/CSS/margin) à `0 auto`).

## Interface DOM

Cet élément implémente l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement).

> **Note :** Jusqu'à Gecko 1.9.2 inclus, Firefox implémentait l'interface [`HTMLSpanElement`](/fr/docs/Web/API/HTMLSpanElement) pour cet élément.

## Exemple 1

```html
<center>
  Ce texte sera centré.
  <p>Ainsi que ce paragraphe.</p>
</center>
```

## Exemple 2 (alternative CSS)

```html
<div style="text-align:center">
  Ce texte sera centré.
  <p>Ainsi que ce paragraphe.</p>
</div>
```

## Exemple 3 (alternative CSS)

```html
<p style="text-align:center">
  Cette ligne sera centrée.<br />
  Ainsi que cette ligne.
</p>
```

## Notes

Appliquer [`text-align`](/fr/docs/Web/CSS/text-align)`: center` sur un élément [`<p>`](/fr/docs/Web/HTML/Element/p) ou [`<div>`](/fr/docs/Web/HTML/Element/div) centre _le contenu_ de ces éléments, tout en laissant leurs dimensions générales inchangées.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`text-align`](/fr/docs/Web/CSS/text-align)
- La propriété [`display`](/fr/docs/Web/CSS/display)
