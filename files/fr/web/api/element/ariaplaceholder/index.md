---
title: "Element : propriété ariaPlaceholder"
short-title: ariaPlaceholder
slug: Web/API/Element/ariaPlaceholder
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaPlaceholder`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut `aria-placeholder`, qui définit un court indice destiné à aider l'utilisateur·ice lors de la saisie de données lorsque le contrôle n'a pas de valeur.

> [!NOTE]
> Ici, il est possible d'utiliser un élément HTML {{HTMLElement("input")}} avec `type="text"` ou un {{HTMLElement("textarea")}}, car ils ont une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-placeholder` de l'élément avec un ID de `boiteSaisieTexte` a été défini sur une chaîne de caractères. En utilisant `ariaPlaceholder`, nous mettons à jour la chaîne de caractères avec une autre valeur.

```html
<div id="etiquetteBoiteTexte">Entrez votre code postal à cinq chiffres</div>
<div
  role="textbox"
  id="boiteSaisieTexte"
  contenteditable="true"
  aria-placeholder="Code postal à cinq chiffres"
  aria-labelledby="etiquetteBoiteTexte"></div>
```

```js
let el = document.getElementById("boiteSaisieTexte");
console.log(el.ariaPlaceholder); // "Code postal à cinq chiffres"
el.ariaPlaceholder = "12345";
console.log(el.ariaPlaceholder); // "12345"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
