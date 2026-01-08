---
title: "HTMLElement : méthode hidePopover()"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

La méthode **`hidePopover()`** de l'interface {{DOMxRef("HTMLElement")}} masque une {{DOMxRef("Popover_API", "fenêtre contextuelle", "", "nocode")}} (c'est-à-dire un élément possédant un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) en le retirant de la {{Glossary("top layer", "couche supérieure")}} et en lui appliquant le style `display: none`.

Lorsque `hidePopover()` est appelée sur un élément affiché avec l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), un évènement {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} est déclenché, suivi du masquage de la fenêtre contextuelle (<i lang="en">popover</i> en anglais), puis de l'évènement {{DOMxRef("HTMLElement/toggle_event", "toggle")}}. Si l'élément est déjà masqué, une erreur est levée.

## Syntaxe

```js-nolint
hidePopover()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Lancée si la fenêtre contextuelle est déjà masquée.

## Exemples

### Masquer une fenêtre contextuelle

L'exemple suivant définit un comportement pour masquer une fenêtre contextuelle en appuyant sur une touche particulière du clavier.

#### HTML

```html
<button popovertarget="mypopover">
  Basculer l'affichage de la fenêtre contextuelle
</button>
<div id="mypopover" popover="manual">
  Vous pouvez appuyer sur la touche <kbd>h</kbd> de votre clavier pour fermer la
  fenêtre contextuelle.
</div>
```

#### JavaScript

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.hidePopover();
  }
});
```

#### Résultat

{{EmbedLiveSample("Masquer une fenêtre contextuelle", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
