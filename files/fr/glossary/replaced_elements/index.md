---
title: Éléments remplacés (Replaced elements)
slug: Glossary/Replaced_elements
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En développement web, les **éléments remplacés** sont des éléments HTML dont le contenu est remplacé par des ressources externes ou du contenu défini en dehors de la structure du document, et qui ne sont pas pris en compte dans le modèle de rendu CSS. Ce sont des objets externes dont la représentation est indépendante du modèle de formatage CSS.

Les éléments suivants peuvent être des éléments remplacés&nbsp;:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

Les éléments suivants sont considérés comme remplacés uniquement dans des cas spécifiques&nbsp;:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}} (uniquement pour les types d'entrée `image`)

Les éléments remplacés possèdent souvent des {{glossary("intrinsic size", "dimensions intrinsèques")}} et un {{glossary("aspect ratio", "rapport d'aspect intrinsèque")}}. Par exemple, le contenu d'un élément `<img>` est généralement remplacé par l'image définie par son attribut `src`. Cette image possède une largeur intrinsèque et une hauteur intrinsèque spécifiées en unités absolues, ce qui détermine le rapport d'aspect.

Les contrôles de formulaire sont généralement des _widgets_ non remplacés, sauf pour `<input type="image">`, qui est remplacé par une image. Les objets insérés à l'aide de la propriété CSS {{cssxref("content")}} sont des _éléments remplacés anonymes_. Ils sont «&nbsp;anonymes&nbsp;» car ils n'existent pas dans le balisage HTML.

## Voir aussi

- {{glossary("void element", "Éléments vides")}}
- {{glossary("Inline-level content", "Contenu de niveau en ligne")}}
- [Éléments remplacés dans la spécification CSS display <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#replaced-element)
- [Éléments remplacés dans la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
