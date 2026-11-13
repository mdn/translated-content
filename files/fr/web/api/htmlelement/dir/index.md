---
title: "HTMLElement : propriété dir"
short-title: dir
slug: Web/API/HTMLElement/dir
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`dir`** de l'interface {{DOMxRef("HTMLElement")}} indique la direction d'écriture du texte du contenu de l'élément courant. Elle reflète l'attribut [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) de l'élément.

Notez que si l'attribut `dir` n'est pas défini, l'élément peut tout de même hériter de la direction de son parent. Cependant, cette direction héritée n'est pas reflétée par la valeur de cette propriété.

La direction d'écriture du texte d'un élément correspond au sens dans lequel le texte s'affiche (pour la prise en charge de différents systèmes linguistiques). L'arabe et l'hébreu sont des exemples de langues utilisant la direction RTL.

## Valeur

Cette propriété peut avoir une de ces valeurs&nbsp;:

- `"ltr"`
  - : Pour l'écriture de gauche à droite (<i lang="en">left-to-right</i> en anglais)
- `"rtl"`
  - : Pour l'écriture de droite à gauche (<i lang="en">right-to-left</i> en anglais)
- `"auto"`
  - : Pour indiquer la direction de l'élément, telle que déterminée par le moteur selon le contenu de l'élément.
- `""`
  - : Valeur par défaut&nbsp;; la direction est héritée de l'élément parent.

## Exemples

```js
const parg = document.getElementById("para1");
parg.dir = "rtl";
// on modifie la direction du texte d'un paragraphe
// portant l'identifiant "para1"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.dir")}}
- L'attribut HTML universel [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
- La propriété CSS {{CSSxRef("direction")}}
- La pseudo-classe CSS {{CSSxRef(":dir")}}
