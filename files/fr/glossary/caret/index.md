---
title: Curseur "caret"
slug: Glossary/Caret
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un curseur **<i lang="en">caret</i>** (parfois appelé «&nbsp;curseur de texte&nbsp;») est un indicateur affiché sur l'écran pour indiquer où la saisie de texte sera insérée.

La plupart des interfaces utilisateur représentent le curseur à l'aide d'une fine ligne verticale ou d'une boîte de taille de caractère qui clignote, mais cela peut varier. Ce point dans le texte est appelé le **point d'insertion**. Le mot anglais «&nbsp;<i lang="en">caret</i>&nbsp;» différencie le point d'insertion du texte du curseur (_cursor_) de la souris.

Sur le web, un curseur «&nbsp;<i lang="en">caret</i>&nbsp;» est utilisé pour représenter le point d'insertion dans les éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}}, ainsi que tous les éléments dont l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) est défini, permettant ainsi au contenu de l'élément d'être édité par l'utilisateur·ice.

## Voir aussi

- [Curseur](https://fr.wikipedia.org/wiki/Curseur) sur Wikipédia

### CSS lié au curseur "_caret_"

Vous pouvez définir la couleur du curseur pour le contenu modifiable d'un élément donné en définissant la propriété CSS {{CSSxRef("caret-color")}} de l'élément et une valeur appropriée de type {{CSSxRef("&lt;color&gt;")}}.

### Éléments HTML susceptibles de présenter un signe d'insertion

Ces éléments fournissent des champs ou des zones de saisie de texte et utilisent donc le signe d'insertion.

- [`<input type="text">`](/fr/docs/Web/HTML/Reference/Elements/input/text)
- [`<input type="password">`](/fr/docs/Web/HTML/Reference/Elements/input/password)
- [`<input type="search">`](/fr/docs/Web/HTML/Reference/Elements/input/search)
- [`<input type="date">`](/fr/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/fr/docs/Web/HTML/Reference/Elements/input/time) et [`<input type="datetime-local">`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number), [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="email">`](/fr/docs/Web/HTML/Reference/Elements/input/email), [`<input type="tel">`](/fr/docs/Web/HTML/Reference/Elements/input/tel) et [`<input type="url">`](/fr/docs/Web/HTML/Reference/Elements/input/url)
- {{HTMLElement("textarea")}}
- Tout élément avec son attribut défini [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes#contenteditable)
