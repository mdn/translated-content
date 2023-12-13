---
title: "HTMLElement: méthode showPopover()"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 0df415130c
---

{{ APIRef("HTML DOM") }}

La méthode **`showPopover()`** de l'interface {{domxref("HTMLElement")}} affiche un élément {{domxref("Popover_API", "popover", "", "nocode")}} (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) valide) en l'ajoutant au {{glossary("top layer")}}.

Lorsque `showPopover()` est appelé sur un élément avec l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) qui est actuellement masqué, un évènement {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} sera déclenché, suivi de l'affichage du popover, puis de l'évènement {{domxref("HTMLElement/toggle_event", "toggle")}}. Si l'élément est déjà visible, une erreur est lancée.

## Syntaxe

```js-nolint
showPopover()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Lancée si le popover est déjà affiché.

## Exemples

L'exemple suivant définit un comportement pour afficher un popover en appuyant sur une touche particulière du clavier.

D'abord, un peu de HTML :

```html
<div id="mypopover">
  <h2>Aide !</h2>

  <p>
    Vous pouvez utiliser les commandes suivantes pour contrôler l'application
  </p>

  <ul>
    <li>Appuyez sur <ins>C</ins> pour commander du fromage</li>
    <li>Appuyez sur <ins>T</ins> pour commander du tofu</li>
    <li>Appuyez sur <ins>B</ins> pour commander du bacon</li>
    <hr />
    <li>
      Dites "Service" pour appeler le robot serveur et passer votre commande
    </li>
    <li>Dites "Éjection" pour activer le siège éjectable</li>
  </ul>
</div>
```

Et maintenant le JavaScript pour activer le comportement :

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Popover_API", "L'API Popover", "", "nocode")}}
