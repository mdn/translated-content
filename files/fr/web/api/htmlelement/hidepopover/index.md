---
title: "HTMLElement: méthode hidePopover()"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.hidePopover
---

{{ APIRef("HTML DOM") }}

La méthode **`hidePopover()`** de l'interface {{domxref("HTMLElement")}} masque un élément {{domxref("Popover_API", "popover", "", "nocode")}} (c'est-à-dire un élément qui a un attribut {{htmlattrdef("popover")}} valide) en le supprimant du {{glossary("top layer")}} et en le stylisant avec `display: none`.

Lorsque `hidePopover()` est appelé sur un élément affiché avec l'attribut {{htmlattrdef("popover")}}, un évènement {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} sera déclenché, suivi du masquage du popover, puis de l'évènement {{domxref("HTMLElement/toggle_event", "toggle")}}. Si l'élément est déjà masqué, une erreur est lancée.

## Syntaxe

```js-nolint
hidePopover()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Lancée si le popover est déjà masqué.

## Exemples

L'exemple suivant définit un comportement pour masquer un popover en appuyant sur une touche particulière du clavier.

D'abord, un peu de HTML :

```html
<div id="mypopover">
  <h2>Aide !</h2>

  <p>Vous pouvez utiliser les commandes suivantes pour contrôler l'application</p>

  <ul>
    <li>Appuyez sur <ins>C</ins> pour commander du fromage</li>
    <li>Appuyez sur <ins>T</ins> pour commander du tofu</li>
    <li>Appuyez sur <ins>B</ins> pour commander du bacon</li>
    <hr />
    <li>Dites "Service" pour appeler le robot serveur et passer votre commande</li>
    <li>Dites "Éjection" pour activer le siège éjectable</li>
  </ul>
</div>
```

Et maintenant le JavaScript pour activer le comportement :

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.hidePopover();
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
