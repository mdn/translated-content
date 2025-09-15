---
title: "HTMLElement : méthode showPopover()"
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("HTML DOM")}}

La méthode **`showPopover()`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) affiche un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) en l'ajoutant à [la couche supérieure](/fr/docs/Glossary/Top_layer).

Lorsque `showPopover()` est appelée sur un élément avec l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) qui est actuellement masqué&nbsp;:

1. Un évènement [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) est déclenché.
2. Le <i lang="en">popover</i> est affiché.
3. L'évènement [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event) est déclenché.

Si l'élément est déjà visible, une erreur est lancée.

## Syntaxe

```js-nolint
showPopover()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Exceptions

- `InvalidStateError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Lancée si le <i lang="en">popover</i> est déjà affiché.

## Exemples

L'exemple suivant définit un comportement pour afficher un popover en appuyant sur une touche particulière du clavier.

### HTML

```html
<button popovertarget="mypopover">Basculer l'affichage du popover</button>
<p>
  Vous pouvez appuyer sur la touche <kbd>h</kbd> de votre clavier pour afficher
  le popover.
</p>
<div id="mypopover" popover="manual">Coucou</div>
```

### JavaScript

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
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
