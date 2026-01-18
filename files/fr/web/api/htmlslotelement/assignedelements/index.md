---
title: "HTMLSlotElement : méthode assignedElements()"
short-title: assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Shadow DOM API")}}

La méthode **`assignedElements()`** de l'interface {{DOMxRef("HTMLSlotElement")}} retourne une séquence des éléments assignés à cet emplacement (et aucun autre nœud).

Si l'option `flatten` est définie à `true`, elle retourne une séquence des éléments assignés à cet emplacement, ainsi que des éléments assignés à tout autre emplacement qui serait un descendant de celui-ci. Si aucun élément assigné n'est trouvé, elle retourne le contenu de secours de l'emplacement.

## Syntaxe

```js-nolint
assignedElements()
assignedElements(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet qui définit les options pour les nœuds à retourner. Les options disponibles sont&nbsp;:
    - `flatten`
      - : Un booléen indiquant s'il faut retourner les éléments assignés à tout emplacement enfant `<slot>` disponible (`true`) ou non (`false`). La valeur par défaut est `false`.

### Valeur de retour

Un tableau d'éléments.

## Exemples

```js
let slots = this.shadowRoot.querySelector("slot");
let elements = slots.assignedElements({ flatten: true });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
