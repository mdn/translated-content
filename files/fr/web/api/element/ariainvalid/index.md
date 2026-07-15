---
title: "Element : propriété ariaInvalid"
short-title: ariaInvalid
slug: Web/API/Element/ariaInvalid
l10n:
  sourceCommit: 4578af853ec3e520f4f2038c028c265591cbaa70
---

{{APIRef("DOM")}}

La propriété **`ariaInvalid`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid). Pertinent pour les rôles [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role), [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role), [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) et [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), elle indique à l'API d'accessibilité si la valeur saisie ne correspond pas au format attendu par l'application.

Si l'attribut n'est pas présent, ou est défini sur une chaîne de caractères vide, la technologie d'assistance traite la valeur comme si elle était définie sur `false`. Si l'attribut est présent mais défini sur une valeur autre que `false`, `grammar`, `spelling` ou la chaîne de caractères vide (`""`), la technologie d'assistance traite la valeur comme `true`. La propriété reflète la valeur de l'attribut telle qu'elle est définie, et non telle qu'elle est traitée par la technologie d'assistance.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est invalide.
- `"false"` (par défaut)
  - : L'élément n'est pas dans un état invalide.
- `"grammar"`
  - : L'élément est dans un état invalide en raison d'une erreur grammaticale détectée.
- `"spelling"`
  - : L'élément est dans un état invalide en raison d'une erreur d'orthographe détectée.

## Exemples

Dans cet exemple, l'attribut [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) sur l'élément avec un ID de `citation` est omis, renvoyant `null` et traité comme `false`. En utilisant `ariaInvalid`, nous mettons à jour la valeur à `grammar` (car il y a deux erreurs).

```html
<div id="citation" role="textbox" contenteditable>
  vous êtes votre meilleure chose..
</div>
```

```html hidden
<hr />
<pre id="journal"></pre>
```

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const el = document.getElementById("citation");
journaliser(`Valeur initiale : ${el.ariaInvalid}`);
el.ariaInvalid = "grammar";
journaliser(`Valeur mise à jour : ${el.ariaInvalid}`);
```

{{EmbedLiveSample("Exemples", "", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.ariaRequired")}}
- L'attribut ARIA [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- L'attribut ARIA [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- La propriété {{DOMxRef("Element.ariaErrorMessageElements")}}
