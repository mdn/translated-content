---
title: "HTMLElement : évènement beforetoggle"
short-title: beforetoggle
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 887acda9b43338ce492d4c0ad1a2145e383187b9
---

{{APIRef("HTML DOM")}}

L'évènement **`beforetoggle`** de l'interface {{DOMxRef("HTMLElement")}} se déclenche sur un élément {{DOMxRef("Popover_API", "de fenêtre contextuelle", "", "nocode")}} (<i lang="en">popover</i> en anglais) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) juste avant qu'il ne soit affiché ou masqué.

- Si la fenêtre contextuelle passe de masqué à affiché, la propriété [`event.oldState`](/fr/docs/Web/API/ToggleEvent/oldState) est définie sur `closed` et la propriété [`event.newState`](/fr/docs/Web/API/ToggleEvent/newState) est définie sur `open`.
- Si la fenêtre contextuelle passe d'affiché à masqué, alors `event.oldState` est définie sur `open` et `event.newState` est définie sur `closed`.

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

Les exemples ci‑dessous montrent comment l'évènement `beforetoggle` peut être utilisé pour un élément {{DOMxRef("Popover_API", "de fenêtre contextuelle", "", "nocode")}} (<i lang="en">popover</i> en anglais).
Les mêmes exemples fonctionnent de façon similaire pour un élément HTML {{HTMLElement("dialog")}}.

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

{{EmbedLiveSample("Exemple simple", "100%", 250)}}

### Empêcher l'ouverture d'une fenêtre contextuelle

L'évènement `beforetoggle` est annulable s'il est déclenché lors de l'ouverture d'un élément.

Ci-dessous, nous montrons comment une fenêtre contextuelle peut d'abord vérifier si elle est autorisée à s'ouvrir, et si ce n'est pas le cas, appeler {{DOMxRef("Event.preventDefault()")}} pour annuler l'évènement.
Dans cet exemple, nous utilisons une case à cocher pour définir si la fenêtre contextuelle peut s'ouvrir ou non&nbsp;: dans un exemple plus «&nbsp;complet&nbsp;», cela pourrait dépendre de l'état de l'application ou des données dans la fenêtre contextuelle prêtes à être affichées.

#### HTML

Le HTML se compose d'une fenêtre contextuelle, d'un bouton permettant de l'afficher ou de la masquer, et d'une case à cocher pour définir si la fenêtre contextuelle peut être ouverte.

```html
<button popovertarget="mypopover">Basculer la fenêtre contextuelle</button>
<label for="allow-popover">
  Autoriser l'ouverture <input type="checkbox" id="allow-popover" checked />
</label>
<div id="mypopover" popover>Contenu de la fenêtre contextuelle</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Tout d'abord, nous configurons le code pour simuler un état où nous voulons autoriser l'ouverture de la fenêtre contextuelle.
Cela est représenté par la variable `allowOpen`, qui est basculée lorsque la case à cocher associée est modifiée.

```js
const allowCheckbox = document.getElementById("allow-popover");

let allowOpen = true;

allowCheckbox.addEventListener("change", (event) => {
  allowOpen = allowCheckbox.checked;
});
```

Le code ajoute un écouteur pour l'évènement `beforetoggle`.
Si `allowOpen` est faux, alors `preventDefault()` est appelé, ce qui empêche la fenêtre contextuelle de s'ouvrir.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    if (allowOpen) {
      log("La fenêtre contextuelle est sur le point d'être affichée");
    } else {
      log("Ouverture de la fenêtre contextuelle empêchée");
      event.preventDefault();
    }
  } else {
    log("La fenêtre contextuelle est sur le point d'être masquée");
  }
});
```

#### Résultat

{{EmbedLiveSample("Empêcher l'ouverture d'une fenêtre contextuelle", "100%", 250)}}

### Autres exemples

- L'exemple [Ouvrir une boîte de dialogue modale](/fr/docs/Web/API/HTMLDialogElement#ouvrir_fermer_une_boîte_de_dialogue_modale) dans `HTMLDialogElement`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- L'évènement associé&nbsp;: {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
