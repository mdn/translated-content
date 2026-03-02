---
title: "<center> : l'élément de texte centré"
slug: Web/HTML/Reference/Elements/center
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<center>`** est un [élément de type bloc](/fr/docs/Glossary/Block-level_content) qui affiche son contenu de type bloc ou en ligne centré horizontalement dans son élément conteneur. Le conteneur est généralement, mais pas obligatoirement, {{HTMLElement("body")}}.

Cette balise a été dépréciée dans HTML 4 (et XHTML 1) au profit de la propriété [CSS](/fr/docs/Web/CSS) {{CSSxRef("text-align")}}, qui peut être appliquée à l'élément {{HTMLElement("div")}} ou à un {{HTMLElement("p")}} individuel. Pour centrer des blocs, utilisez d'autres propriétés CSS comme {{CSSxRef("margin-left")}} et {{CSSxRef("margin-right")}} et définissez-les sur `auto` (ou définissez {{CSSxRef("margin")}} à `0 auto`).

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("HTMLElement")}}.

## Exemple 1

```html
<center>
  Ce texte sera centré.
  <p>Ainsi que ce paragraphe.</p>
</center>
```

### Result

{{EmbedLiveSample("Exemple 1")}}

## Exemple 2 (alternative CSS)

```html
<div class="center">
  Ce texte sera centré.
  <p>Ainsi que ce paragraphe.</p>
</div>
```

```css
.center {
  text-align: center;
}
```

### Result

{{EmbedLiveSample("Exemple 2 (alternative CSS)")}}

## Exemple 3 (alternative CSS)

```html
<p class="center">
  Cette ligne sera centrée.<br />
  Ainsi que cette ligne.
</p>
```

```css
.center {
  text-align: center;
}
```

### Result

{{EmbedLiveSample("Exemple 3 (alternative CSS)")}}

> [!NOTE]
> Appliquer {{CSSxRef("text-align", "text-align: center")}} à un élément {{HTMLElement("div")}} ou {{HTMLElement("p")}} centre _le contenu_ de ces éléments tout en laissant leurs dimensions générales inchangées.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("text-align")}}
- La propriété CSS {{CSSxRef("display")}}
