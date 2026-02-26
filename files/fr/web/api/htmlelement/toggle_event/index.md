---
title: "HTMLElement : évènement toggle"
short-title: toggle
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 405fc9a921068347e95211312a8c19e917c457d2
---

{{APIRef("HTML DOM")}}

L'évènement **`toggle`** de l'interface {{DOMxRef("HTMLElement")}} se déclenche sur un élément {{DOMxRef("Popover_API", "de fenêtre contextuelle", "", "nocode")}} (<i lang="en">popover</i> en anglais), un élément HTML {{HTMLElement("dialog")}} ou un élément HTML {{HTMLElement("details")}} juste après qu'il a été affiché ou masqué.

- Si la fenêtre contextuelle passe de masqué à affiché, la propriété [`event.oldState`](/fr/docs/Web/API/ToggleEvent/oldState) sera définie sur `closed` et la propriété [`event.newState`](/fr/docs/Web/API/ToggleEvent/newState) sera définie sur `open`.
- Si la fenêtre contextuelle passe d'affiché à masqué, alors `event.oldState` sera définie sur `open` et `event.newState` sera définie sur `closed`.

Cet évènement n'est pas [annulable](/fr/docs/Web/API/Event/cancelable).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("toggle", (event) => { })

ontoggle = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ToggleEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Exemples

L'exemple de code ci-dessous montre comment l'évènement `toggle` peut être utilisé pour un élément {{DOMxRef("Popover_API", "de fenêtre contextuelle", "", "nocode")}} (<i lang="en">popover</i> en anglais).
Le même code peut être utilisé de la même manière pour un élément HTML {{HTMLElement("dialog")}} ou {{HTMLElement("details")}}.

### Exemple simple

Cet exemple montre comment écouter l'évènement `toggle` et afficher le résultat dans la console.

#### HTML

Le code HTML se compose d'une fenêtre contextuelle et d'un bouton permettant de l'afficher ou de la masquer.

```html
<button popovertarget="mafenetre">
  Afficher ou masquer la fenêtre contextuelle
</button>
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

Le code ajoute un écouteur d'évènement pour l'évènement `toggle` et enregistre l'état.

```js
const fenetreContextuelle = document.getElementById("mafenetre");

fenetreContextuelle.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    log("La fenêtre contextuelle a été affichée");
  } else {
    log("La fenêtre contextuelle a été masquée");
  }
});
```

#### Resultat

{{EmbedLiveSample("Exemple simple", '100%', 250)}}

### Remarque sur l'agrégation des évènements `toggle`

Si plusieurs évènements `toggle` sont déclenchés avant que la boucle d'évènements ait eu la possibilité de s'exécuter, un seul évènement sera déclenché.
On parle alors d'«&nbsp;agrégation d'évènements&nbsp;».

Par exemple&nbsp;:

```js
fenetreContextuelle.addEventListener("toggle", () => {
  // …
});

fenetreContextuelle.showPopover();
fenetreContextuelle.hidePopover();
// `toggle` est déclenché une seule fois
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- L'évènement associé&nbsp;: {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
