---
title: "<noembed> : l'élément de repli au contenu embarqué"
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<noembed>`** est une manière obsolète et non standard de fournir un contenu alternatif ou «&nbsp;de repli&nbsp;» pour les navigateurs qui ne prennent pas en charge l'élément {{HTMLElement("embed")}} ou le type de [contenu embarqué](/fr/docs/Web/HTML/Guides/Content_categories#embedded_content) que l'auteur·ice souhaite utiliser. Cet élément a été déprécié dans HTML 4.01 et versions ultérieures au profit du placement du contenu de repli entre les balises ouvrante et fermante d'un élément {{HTMLElement("object")}}.

> [!NOTE]
> Bien que cet élément fonctionne encore dans de nombreux navigateurs, il est obsolète et ne doit pas être utilisé. Utilisez plutôt {{HTMLElement("object")}}, avec le contenu de repli entre les balises ouvrante et fermante de l'élément.

## Exemples

Le message à l'intérieur de la balise `<noembed>` n'apparaîtra que si votre navigateur ne prend pas en charge la balise `<embed>`.

### Afficher un contenu alternatif

```html
<embed
  type="vide/webm"
  src="/media/examples/flower.mp4"
  width="200"
  height="200" />
<noembed>
  <h1>Contenu alternatif</h1>
</noembed>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
