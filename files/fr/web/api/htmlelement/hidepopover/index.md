---
title: "HTMLElement : méthode hidePopover()"
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: a3afc20137b6ada89203f18bc7d4d4c236cacb92
---

{{APIRef("HTML DOM")}}

La méthode **`hidePopover()`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) masque un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) valide) en le supprimant de [la couche supérieure](/fr/docs/Glossary/Top_layer) et en le stylisant avec `display: none`.

Lorsque `hidePopover()` est appelée sur un élément affiché avec l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover)&nbsp;:

1. Un évènement [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) est déclenché.
2. Le <i lang="en">popover</i> est masqué.
3. L'évènement [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event) est déclenché.

Si l'élément est déjà masqué, une erreur est lancée.

## Syntaxe

```js-nolint
hidePopover()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Exceptions

- `InvalidStateError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Lancée si le popover est déjà masqué.

## Exemples

L'exemple suivant définit un comportement pour masquer un <i lang="en">popover</i> en appuyant sur une touche particulière du clavier.

### HTML

```html
<button popovertarget="mypopover">Basculer l'affichage du popover</button>
<div id="mypopover" popover="manual">
  Vous pouvez appuyer sur la touche <kbd>h</kbd> de votre clavier pour fermer le
  popover.
</div>
```

### JavaScript

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.hidePopover();
  }
});
```

### Résultat

{{EmbedLiveSample("","100%",100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
