---
title: "Element : propriété ariaMultiLine"
short-title: ariaMultiLine
slug: Web/API/Element/ariaMultiLine
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaMultiLine`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-multiline`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline), qui indique si une zone de texte accepte plusieurs lignes de saisie ou seulement une seule ligne.

> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML {{HTMLElement("input")}} avec `type="text"` ou un {{HTMLElement("textarea")}}, car ces éléments ont des sémantiques intégrées et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : Il s'agit d'une zone de texte multi-lignes.
- `"false"`
  - : Il s'agit d'une zone de texte à une seule ligne.

## Exemples

Dans cet exemple, l'attribut `aria-multiline` sur l'élément avec un ID de `boiteSaisieTexte` est défini sur `"true"`, indiquant que cette zone permet plusieurs lignes de saisie. En utilisant `ariaMultiLine`, nous mettons à jour la valeur à `"false"`.

```html
<div id="boiteSaisieTexteLabel">Entrez les étiquettes pour l'article</div>
<div
  role="textbox"
  id="boiteSaisieTexte"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="boiteSaisieTexteLabel"
  aria-required="true"></div>
```

```js
let el = document.getElementById("boiteSaisieTexte");
console.log(el.ariaMultiLine); // "true"
el.ariaMultiLine = "false";
console.log(el.ariaMultiLine); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
