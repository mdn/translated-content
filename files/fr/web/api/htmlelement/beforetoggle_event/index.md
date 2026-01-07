---
title: "HTMLElement : évènement beforetoggle"
short-title: beforetoggle
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

L'évènement **`beforetoggle`** de l'interface {{DOMxRef("HTMLElement")}} se déclenche sur un élément {{DOMxRef("Popover_API", "de fenêtre contextuelle", "", "nocode")}} (<i lang="en">popover</i> en anglais) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) juste avant qu'il ne soit affiché ou masqué.

- Si la fenêtre contextuelle passe de masqué à affiché, la propriété [`event.oldState`](/fr/docs/Web/API/ToggleEvent/oldState) sera définie sur `closed` et la propriété [`event.newState`](/fr/docs/Web/API/ToggleEvent/newState) sera définie sur `open`.
- Si la fenêtre contextuelle passe d'affiché à masqué, alors `event.oldState` sera définie sur `open` et `event.newState` sera définie sur `closed`.

Cet évènement est [annulable](/fr/docs/Web/API/Event/cancelable) lorsqu'un élément est basculé en ouverture («&nbsp;affiché&nbsp;») mais pas lorsqu'il est en cours de fermeture.

Parmi ses usages, cet évènement peut servir à&nbsp;:

- empêcher l'affichage d'un élément.
- ajouter ou supprimer des classes ou des propriétés de l'élément ou d'éléments associés, par exemple pour contrôler le comportement d'animation d'une boîte de dialogue lors de son ouverture et de sa fermeture.
- réinitialiser l'état de l'élément avant son ouverture ou après son masquage, par exemple pour remettre à zéro un formulaire de dialogue et sa valeur de retour, ou pour masquer des fenêtres contextuelles manuelles imbriquées lors de la réouverture d'une fenêtre contextuelle.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforetoggle", (event) => { })

onbeforetoggle = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ToggleEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Exemples

Les exemples ci‑dessous montrent comment l'évènement `beforetoggle` peut être utilisé pour un {{DOMxRef("Popover_API", "de fenêtre contextuelle", "", "nocode")}} (<i lang="en">popover</i> en anglais) ou un élément HTML {{HTMLElement("dialog")}}.
Les mêmes exemples fonctionnent de façon similaire pour les autres types d'éléments.

### Exemple simple

Cet exemple montre comment écouter l'évènement `beforetoggle` et consigner le résultat.

#### HTML

Le HTML se compose d'une fenêtre contextuelle et d'un bouton permettant de l'afficher ou de le masquer.

```html
<button popovertarget="mafenetre">Basculer la fenêtre contextuelle</button>
<div id="mafenetre" popover>Contenu de la fenêtre contextuelle</div>
```

```html hidden
<pre id="journaux"></pre>
```

```css hidden
#journaux {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const elementJournaux = document.querySelector("#journaux");
function log(text) {
  elementJournaux.innerText = `${elementJournaux.innerText}${text}\n`;
  elementJournaux.scrollTop = elementJournaux.scrollHeight;
}
```

#### JavaScript

Le code ajoute un écouteur pour l'évènement `beforetoggle` et consigne l'état.

```js
const fenetreContextuelle = document.getElementById("mafenetre");

fenetreContextuelle.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    log("La fenêtre contextuelle est sur le point d'être affichée");
  } else {
    log("La fenêtre contextuelle est sur le point d'être masquée");
  }
});
```

#### Resultat

{{EmbedLiveSample("Exemple simple", '100%', 250)}}

### Une note sur l'agrégation des évènements `beforetoggle`

Si plusieurs évènements `beforetoggle` sont déclenchés avant que la boucle d'évènements ait la possibilité de s'exécuter, un seul évènement sera déclenché.
On parle d'«&nbsp;agrégation d'évènements&nbsp;».

Par exemple&nbsp;:

```js
fenetreContextuelle.addEventListener("beforetoggle", () => {
  // …
});

fenetreContextuelle.showPopover();
fenetreContextuelle.hidePopover();
// `beforetoggle` ne se déclenche qu'une seule fois
```

### Autres exemples

- [Ouverture d'une boîte de dialogue modale](/fr/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) — exemple dans `HTMLDialogElement`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- L'évènement associé&nbsp;: [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event)
