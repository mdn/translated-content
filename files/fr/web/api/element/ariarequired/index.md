---
title: "Element : propriété ariaRequired"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaRequired`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut `aria-required`, qui indique que l'utilisateur·ice doit fournir une saisie sur l'élément avant qu'un formulaire puisse être envoyé.

> [!NOTE]
> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML {{HTMLElement("input")}} avec `type="text"` ou un {{HTMLElement("textarea")}}, car ils ont une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'utilisateur·ice doit fournir une saisie sur l'élément avant qu'un formulaire puisse être envoyé.
- `"false"`
  - : L'utilisateur·ice n'a pas besoin de fournir une saisie pour envoyer le formulaire.

## Exemples

Dans cet exemple, l'attribut `aria-required` sur l'élément avec un ID de `boiteSaisieTexte` est défini sur `"true"`, indiquant que cette saisie doit être complétée. En utilisant `ariaRequired`, nous mettons à jour la valeur à `"false"`.

```html
<div id="etiquetteBoiteTexteMultiligne">
  Entrez les étiquettes pour l'article
</div>
<div
  role="textbox"
  id="boiteSaisieTexte"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="etiquetteBoiteTexteMultiligne"
  aria-required="true"></div>
```

```js
let el = document.getElementById("boiteSaisieTexte");
console.log(el.ariaRequired); // "true"
el.ariaRequired = "false";
console.log(el.ariaRequired); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
