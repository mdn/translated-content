---
title: Éléments en incise
slug: Glossary/Inline-level_content
l10n:
  sourceCommit: c1821e3db21bba9f31b8d3396632fe23d2adfd4e
---

En CSS, le contenu qui participe à la mise en page en incise est appelé **contenu de niveau en incise**. La plupart des séquences de texte, des éléments remplacés et du contenu généré sont, par défaut, de niveau en incise.

Dans la mise en page en incise, un flux mixte de texte, {{Glossary("replaced elements", "d'éléments remplacés")}} et d'autres boîtes en incise est disposé en les fragmentant dans une pile de boîtes de ligne. À l'intérieur de chaque boîte de ligne, les boîtes de niveau en incise sont alignées entre elles verticalement ou horizontalement, selon le mode d'écriture. En général, elles sont alignées sur les lignes de base de leur texte. Cela peut être modifié avec le CSS.

> [!NOTE]
> Les éléments HTML (<i lang="en">HyperText Markup Language</i> en anglais) sont historiquement classés comme éléments «&nbsp;de bloc&nbsp;» ou «&nbsp;en incise&nbsp;». Ce caractère de présentation est désormais défini par le CSS.

![mise en page en incise](inline_layout.png)

Le diagramme illustre comment le contenu de niveau en incise est disposé à l'intérieur d'un conteneur de bloc. La _boîte en incise racine_ est une boîte anonyme générée par le conteneur de bloc pour contenir tout son contenu de niveau en incise, y compris le texte et les boîtes en incise descendantes. Pour en savoir plus sur les concepts présentés dans ce diagramme, tels que les _boîtes de ligne_, la _fragmentation des boîtes en incise_ et les _éléments flottants_, consultez le guide CSS [Contexte de formatage en incise](/fr/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context).

## Exemples

```html
<p>
  Ce <span class="highlight">span</span> est un
  <span class="highlight">élément de niveau en incise</span>&nbsp;; son
  arrière-plan a été coloré pour montrer le début et la fin de l'influence de
  l'élément. Les éléments input, comme <input type="radio" /> et
  <input type="checkbox" />, sont aussi du contenu de niveau en incise.
</p>
```

Dans cet exemple, l'élément HTML {{HTMLElement("p")}} contient du texte. Dans ce texte se trouvent un élément {{HTMLElement("span")}} et deux éléments {{HTMLElement("input")}}, qui sont des éléments de niveau en incise. Si le `<span>` s'étend sur deux lignes, deux boîtes de ligne sont générées. Comme ces éléments sont en incise, le paragraphe s'affiche correctement comme un seul flux de texte sans rupture&nbsp;:

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
- [Contexte de formatage en incise](/fr/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- La propriété CSS {{CSSxRef("display")}}
