---
title: "HTMLElement : méthode showPopover()"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Popover API")}}

La méthode **`showPopover()`** de l'interface {{DOMxRef("HTMLElement")}} affiche une {{DOMxRef("Popover_API", "fenêtre contextuelle", "", "nocode")}} (c'est-à-dire un élément possédant un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) en l'ajoutant à la {{Glossary("top layer", "couche supérieure")}}.

Lorsque `showPopover()` est appelée sur un élément avec l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) qui est actuellement masqué, un évènement {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} est déclenché, suivi de l'affichage de la fenêtre contextuelle (<i lang="en">popover</i> en anglais), puis de l'évènement {{DOMxRef("HTMLElement/toggle_event", "toggle")}}. Si l'élément est déjà affiché, une erreur est levée.

```js-nolint
showPopover()
showPopover(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet qui peut contenir les propriétés suivantes&nbsp;:
    - `source` {{Optional_Inline}}
      - : Une référence {{DOMxRef("HTMLElement")}}&nbsp;; définit par programmation l'élément déclencheur de la fenêtre contextuelle (<i lang="en">popover</i> en anglais) associée à l'action d'affichage, c'est-à-dire son élément de contrôle. Établir une relation entre une fenêtre contextuelle et son déclencheur via l'option `source` a deux effets utiles&nbsp;:
        - Le navigateur place la fenêtre contextuelle dans une position logique dans l'ordre de navigation au clavier lors de l'affichage. Cela rend la fenêtre contextuelle plus accessible aux utilisateur·ice·s du clavier (voir aussi [Fonctionnalités d'accessibilité des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#accessibilité_des_fenêtres_contextuelles)).
        - Le navigateur crée une ancre implicite entre les deux, ce qui facilite le positionnement des fenêtres contextuelles par rapport à leurs contrôles via le [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Voir [Positionnement d'ancre pour les fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour plus de détails.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Lancée si la fenêtre contextuelle est déjà affichée.

## Exemples

L'exemple suivant permet d'afficher une fenêtre contextuelle en appuyant sur une touche particulière du clavier.

Tout d'abord, le code HTML&nbsp;:

```html
<div id="mypopover" popover>
  <h2>Aide&nbsp;!</h2>

  <p>
    Vous pouvez utiliser les commandes suivantes pour contrôler
    l'application&nbsp;:
  </p>

  <ul>
    <li>Appuyez sur <ins>C</ins> pour commander du fromage</li>
    <li>Appuyez sur <ins>T</ins> pour commander du tofu</li>
    <li>Appuyez sur <ins>B</ins> pour commander du bacon</li>
  </ul>
  <hr />
  <ul>
    <li>
      Dites «&nbsp;Service&nbsp;» pour appeler le serveur robot et prendre votre
      commande
    </li>
    <li>Dites «&nbsp;Échap&nbsp;» pour activer le siège éjectable</li>
  </ul>
</div>
```

Ensuite, le JavaScript pour relier la fonctionnalité&nbsp;:

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

- [L'API Popover](/fr/docs/Web/API/Popover_API)
