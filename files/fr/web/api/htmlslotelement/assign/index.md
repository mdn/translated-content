---
title: "HTMLSlotElement : méthode assign()"
short-title: assign()
slug: Web/API/HTMLSlotElement/assign
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("Shadow DOM API")}}

La méthode **`assign()`** de l'interface {{DOMxRef("HTMLSlotElement")}} définit les _nœuds assignés manuellement_ de l'emplacement sur un ensemble ordonné d'éléments assignables. L'ensemble des nœuds assignés manuellement est initialement vide jusqu'à ce que des nœuds soient assignés à l'aide de `assign()`.

> [!NOTE]
> Vous ne pouvez pas mélanger les assignations d'emplacement manuelles (impératives) et nommées (déclaratives, automatiques). Ainsi, pour que cette méthode fonctionne, l'arbre d'ombre doit avoir été [créé](/fr/docs/Web/API/Element/attachShadow) avec l'option `slotAssignment: "manual"`.

## Syntaxe

```js-nolint
assign(node1)
assign(node1, node2)
assign(node1, node2, /* …, */ nodeN)
```

### Paramètres

- `node1`, …, `nodeN`
  - : Un ensemble de nœuds {{DOMxRef("Element")}} ou {{DOMxRef("Text")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée lors de l'appel de cette méthode sur un emplacement assigné automatiquement.

## Exemples

Dans l'exemple ci-dessous, la méthode `assign()` est utilisée pour afficher l'onglet correct dans une application à onglets. La fonction est appelée et reçoit le panneau à afficher, qui est ensuite assigné à l'emplacement.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    slot.assign();
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.attachShadow()")}}
