---
title: "HTMLInputElement : propriété indeterminate"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`indeterminate`** de l'interface {{DOMxRef("HTMLInputElement")}} retourne une valeur booléenne qui indique si la case à cocher est dans l'état _indéterminé_. Par exemple, une case à cocher «&nbsp;tout sélectionner/tout désélectionner&nbsp;» peut être dans l'état indéterminé lorsque certains, mais pas tous, de ses sous-contrôles sont cochés. L'état `indeterminate` ne peut être défini que avec JavaScript et ne concerne que les contrôles [`checkbox`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox).

Il n'est pas lié à la propriété {{DOMxRef("HTMLInputElement.checked")}}, et une case à cocher indéterminée peut être cochée ou non cochée. Être indéterminée n'affecte que l'apparence de la case à cocher (voir l'exemple ci-dessous), pas sa présence lors de la soumission (qui est contrôlée par l'état coché).

## Valeur

Un booléen.

## Exemples

```html
<input type="checkbox" id="indeterminate-checkbox" />
<label for="indeterminate-checkbox">Case à cocher indéterminée</label>
```

```js
const checkbox = document.getElementById("indeterminate-checkbox");
checkbox.indeterminate = true;
```

{{EmbedLiveSample("Exemples", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLInputElement")}}
- La propriété {{DOMxRef("HTMLInputElement.checked")}}
- L'élément HTML {{HTMLElement("input")}}
- [Cases à cocher indéterminées](/fr/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)
- La propriété CSS {{CSSxRef(":indeterminate")}}
