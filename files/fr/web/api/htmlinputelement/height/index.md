---
title: "HTMLInputElement : propriété height"
short-title: height
slug: Web/API/HTMLInputElement/height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLInputElement")}} définit la hauteur d'un contrôle. Elle reflète l'attribut [`height`](/fr/docs/Web/HTML/Reference/Elements/input#height) de l'élément HTML {{HTMLElement("input")}}.

La propriété `height` n'est valide que pour le type [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image). Elle définit la dimension verticale du bouton image, en pixels. Si des propriétés de dimensionnement CSS s'appliquent au contrôle, la valeur correspond à la hauteur de la boîte de contenu du contrôle rendu, et non à la valeur de l'attribut `height`. Si aucune hauteur (`height`) n'est définie et que le CSS n'affecte pas la taille du contrôle, la valeur de `height` sera la hauteur intrinsèque de l'image. Si l'image ne se charge pas, la valeur sera la hauteur du texte `alt`. La valeur de `height` sera `0` si la hauteur n'est pas connue&nbsp;; si aucune hauteur (`height`) n'est définie, que le CSS n'affecte pas la hauteur, que l'image ne se charge pas, et que la valeur de {{DOMxRef("HTMLInputElement.alt", "alt")}} est une chaîne vide ou qu'aucun `src` n'est défini.

## Valeur

Un nombre.

## Exemples

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.height);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.width")}}
- La propriété {{DOMxRef("HTMLInputElement.src")}}
- La propriété {{DOMxRef("HTMLInputElement.alt")}}
- L'interface {{DOMxRef("HTMLButtonElement")}}
- L'élément HTML {{HTMLElement("button")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("img")}}
- La propriété CSS {{CSSxRef("inline-size")}}
- La propriété CSS {{CSSxRef("height")}}
- La propriété CSS {{CSSxRef("aspect-ratio")}}
- [Dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
