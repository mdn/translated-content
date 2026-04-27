---
title: "HTMLInputElement : propriété width"
short-title: width
slug: Web/API/HTMLInputElement/width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLInputElement")}} définit la largeur d'un contrôle. Elle reflète l'attribut [`width`](/fr/docs/Web/HTML/Reference/Elements/input#width) de l'élément HTML {{HTMLElement("input")}}.

La propriété `width` est valide uniquement pour le type [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image). Elle définit la taille horizontale préférée du bouton image, en pixels. La valeur de la propriété correspond à la largeur du [contenu de la boîte](/fr/docs/Web/CSS/Reference/Values/box-edge#content-box) du bouton rendu. Les propriétés du modèle de boîte CSS impactant la taille du contrôle ont la priorité.

Si aucune `width` n'est définie et qu'aucune propriété CSS de largeur n'impacte le contrôle, la `width` sera la largeur intrinsèque de l'image. Si l'image n'a pas été chargée, la valeur sera la largeur intrinsèque maximale du texte `alt`. La `width` sera `0` si la largeur n'est pas connue ; si aucune `width` n'est définie, aucune dimension CSS ne s'applique, aucune image n'est chargée, et soit la valeur de la {{DOMxRef("HTMLInputElement.alt", "alt")}} est une chaîne vide, soit aucun `src` n'est défini.

## Valeur

Un nombre.

## Exemples

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.width);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.height")}}
- La propriété {{DOMxRef("HTMLInputElement.src")}}
- La propriété {{DOMxRef("HTMLInputElement.alt")}}
- L'interface {{DOMxRef("HTMLButtonElement")}}
- L'élément HTML {{HTMLElement("button")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("img")}}
- La propriété CSS {{CSSxRef("inline-size")}}
- La propriété CSS {{CSSxRef("width")}}
- La propriété CSS {{CSSxRef("aspect-ratio")}}
- Le module [de dimensionnement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
