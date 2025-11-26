---
title: Éléments en ligne
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

En CSS, le contenu qui participe à la mise en page en ligne est appelé **contenu de niveau en ligne**. La plupart des séquences de texte, des éléments remplacés et du contenu généré sont, par défaut, de niveau en ligne.

Dans la mise en page en ligne, un flux mixte de texte, d'{{ Glossary("replaced elements", "éléments remplacés") }} et d'autres boîtes en ligne est disposé en les fragmentant dans une pile de boîtes de ligne. À l'intérieur de chaque boîte de ligne, les boîtes de niveau en ligne sont alignées entre elles verticalement ou horizontalement, selon le mode d'écriture. En général, elles sont alignées sur les lignes de base de leur texte. Cela peut être modifié avec le CSS.

![mise en page en ligne](inline_layout.png)

> [!NOTE]
> Les éléments HTML (<i lang="en">HyperText Markup Language</i> en anglais) étaient historiquement classés comme éléments «&nbsp;de bloc&nbsp;» ou «&nbsp;en ligne&nbsp;». Ce caractère de présentation est désormais défini par le CSS.

## Exemples

```html
<p>
  Ce <span class="highlight">span</span> est un
  <span class="highlight">élément de niveau en ligne</span>&nbsp;; son
  arrière-plan a été coloré pour montrer le début et la fin de l'influence de
  l'élément. Les éléments input, comme <input type="radio" /> et
  <input type="checkbox" />, sont aussi du contenu de niveau en ligne.
</p>
```

Dans cet exemple, l'élément HTML {{HTMLElement("p")}} contient du texte. Dans ce texte se trouvent un élément {{HTMLElement("span")}} et deux éléments {{HTMLElement("input")}}, qui sont des éléments de niveau en ligne. Si le `<span>` s'étend sur deux lignes, deux boîtes de ligne sont générées. Comme ces éléments sont en ligne, le paragraphe s'affiche correctement comme un seul flux de texte sans rupture&nbsp;:

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333333;
}

.highlight {
  background-color: #eeee33;
}
```

{{EmbedLiveSample("Exemples")}}

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Block-level content", "Contenu de niveau bloc")}}
- [Contexte de formatage en ligne](/fr/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- La propriété CSS {{CSSxRef("display")}}
