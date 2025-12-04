---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLDialogElement`** fournit des méthodes pour manipuler les éléments {{HTMLElement("dialog")}}. Elle hérite des propriétés et méthodes de l'interface parente {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLDialogElement.closedBy")}}
  - : Chaîne de caractères définissant ou retournant la valeur de l'attribut [`closedby`](/fr/docs/Web/HTML/Reference/Elements/dialog#closedby) de l'élément `<dialog>`, qui indique les types d'actions utilisateur permettant de fermer la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.open")}}
  - : Booléen reflétant l'attribut HTML [`open`](/fr/docs/Web/HTML/Reference/Elements/dialog#open), indiquant si la boîte de dialogue est disponible pour l'interaction.
- {{DOMxRef("HTMLDialogElement.returnValue")}}
  - : Chaîne de caractères définissant ou retournant la valeur de retour de la boîte de dialogue.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLDialogElement.close()")}}
  - : Ferme la boîte de dialogue. Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété `returnValue` de la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.requestClose()")}}
  - : Demande la fermeture de la boîte de dialogue. Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété `returnValue` de la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.show()")}}
  - : Affiche la boîte de dialogue de manière non modale, c'est-à-dire en permettant toujours l'interaction avec le contenu extérieur à la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.showModal()")}}
  - : Affiche la boîte de dialogue en modal, au-dessus de toute autre boîte de dialogue éventuellement présente. Tout ce qui se trouve en dehors de la boîte de dialogue devient [inerte](/fr/docs/Web/API/HTMLElement/inert) et les interactions extérieures sont bloquées.

## Événements

_Hérite également des événements de son interface parente, {{DOMxRef("HTMLElement")}}._

Écoutez ces événements à l'aide de {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un écouteur à la propriété `oneventname` de cette interface.

- {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}}
  - : Déclenché lorsque la boîte de dialogue reçoit une demande de fermeture, que ce soit avec la touche <kbd>Échap</kbd>&nbsp;ou via la méthode `HTMLDialogElement.requestClose()`.
- {{DOMxRef("HTMLDialogElement/close_event", "close")}}
  - : Déclenché lorsque la boîte de dialogue est fermée, que ce soit avec la touche <kbd>Échap</kbd>, la méthode `HTMLDialogElement.close()`, ou en soumettant un formulaire à l'intérieur de la boîte de dialogue avec [`method="dialog"`](/fr/docs/Web/HTML/Reference/Elements/form#method).

## Exemples

### Ouvrir une boîte de dialogue modale

L'exemple suivant montre un bouton qui, lorsqu'il est cliqué, utilise la fonction {{DOMxRef("HTMLDialogElement.showModal()")}} pour ouvrir une boîte de dialogue modale {{HTMLElement("dialog")}} contenant un formulaire.

Lorsque la boîte de dialogue est ouverte, tout ce qui n'est pas son contenu devient inerte.
Vous pouvez cliquer sur le bouton _Annuler_ pour fermer la boîte de dialogue (via la fonction {{DOMxRef("HTMLDialogElement.close()")}}), ou soumettre le formulaire avec le bouton _Confirmer_.

Cet exemple montre comment utiliser tous les événements de «&nbsp;changement d'état&nbsp;» pouvant être déclenchés sur la boîte de dialogue&nbsp;: {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}}, {{DOMxRef("HTMLDialogElement/close_event", "close")}}, ainsi que les événements hérités {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} et {{DOMxRef("HTMLElement/toggle_event", "toggle")}}.

#### HTML

```html
<!-- boîte de dialogue contextuelle, contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Animal favori&nbsp;:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Crevette d'eau salée</option>
        <option>Panda roux</option>
        <option>Singe-araignée</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Annuler</button>
      <button id="submit" type="submit">Confirmer</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Mettre à jour les informations</button>
</div>
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

##### Affichage de la boîte de dialogue

Le code commence par récupérer les objets pour les éléments {{HTMLElement("button")}}, l'élément {{HTMLElement("dialog")}} et l'élément {{HTMLElement("select")}}.
Il ajoute ensuite un écouteur d'événements pour appeler la fonction {{DOMxRef("HTMLDialogElement.showModal()")}} lorsque le bouton _Mettre à jour_ est cliqué.

```js
const updateButton = document.getElementById("updateDetails");
const confirmButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
const selectElement = document.getElementById("favAnimal");

// Le bouton Mettre à jour ouvre la boîte de dialogue modale
updateButton.addEventListener("click", () => {
  dialog.showModal();
});
```

##### Boutons Annuler et Confirmer

On ajoute ensuite des écouteurs aux événements `click` des boutons _Confirmer_ et _Annuler_.
Les gestionnaires appellent {{DOMxRef("HTMLDialogElement.close()")}} avec la valeur sélectionnée (si présente) ou sans valeur, ce qui définit la valeur de retour de la boîte de dialogue ({{DOMxRef("HTMLDialogElement.returnValue")}}) à la valeur sélectionnée ou à `null`.

```js
// Le bouton Confirmer ferme la boîte de dialogue si une valeur est sélectionnée.
confirmButton.addEventListener("click", () => {
  if (selectElement.value) {
    // Définit dialog.returnValue à la valeur sélectionnée
    dialog.close(selectElement.value);
  }
});

// Le bouton Annuler ferme la boîte de dialogue
cancelButton.addEventListener("click", () => {
  dialog.close(); // Définit dialog.returnValue à null
});
```

Appeler `close()` déclenche également l'événement {{DOMxRef("HTMLDialogElement/close_event", "close")}}, que nous implémentons ci-dessous en journalisant la valeur de retour de la boîte de dialogue.
Si le bouton _Confirmer_ a été cliqué, cela doit être la valeur sélectionnée dans la boîte de dialogue, sinon ce sera `null`.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event : (dialog.returnValue : "${dialog.returnValue}")`);
});
```

##### Événement cancel

L'événement {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}} est déclenché lorsque des «&nbsp;moyens spécifiques à la plateforme&nbsp;» sont utilisés pour fermer la boîte de dialogue, comme la touche <kbd>Échap</kbd>.
Il est aussi déclenché lorsque la méthode `HTMLDialogElement.requestClose()` est appelée.
C'est un événement «&nbsp;annulable&nbsp;», ce qui signifie qu'on peut l'utiliser pour empêcher la fermeture de la boîte de dialogue.
Ici, on traite simplement l'annulation comme une opération de fermeture, et on réinitialise la propriété {{DOMxRef("HTMLDialogElement.returnValue")}} à `""` pour effacer toute valeur éventuellement définie.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event : (dialog.returnValue : "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Réinitialise la valeur
});
```

##### Événement toggle

L'[événement `toggle`](/fr/docs/Web/API/HTMLElement/toggle_event) (hérité de `HTMLElement`) est déclenché juste après l'ouverture ou la fermeture d'une boîte de dialogue (mais avant l'événement `closed`).

Ici, on ajoute un écouteur pour journaliser l'ouverture et la fermeture de la boîte de dialogue.

> [!NOTE]
> Les événements `toggle` et `beforetoggle` peuvent ne pas être déclenchés sur les éléments dialog dans tous les navigateurs.
> Sur ces versions, vous pouvez vérifier la propriété {{DOMxRef("HTMLDialogElement.open")}} après avoir tenté d'ouvrir/fermer la boîte de dialogue.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event : Dialog ${event.newState}`);
});
```

##### Événement beforetoggle

L'[événement `beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) (hérité de `HTMLElement`) est un événement annulable déclenché juste avant l'ouverture ou la fermeture d'une boîte de dialogue.
Si besoin, il peut être utilisé pour empêcher l'affichage d'une boîte de dialogue, ou pour effectuer des actions sur d'autres éléments affectés par l'état ouvert/fermé de la boîte de dialogue, comme l'ajout de classes pour déclencher des animations.

Dans ce cas, on journalise simplement l'ancien et le nouvel état.

```js
dialog.addEventListener("beforetoggle", (event) => {
  log(
    `beforetoggle event : oldState : ${event.oldState}, newState : ${event.newState}`,
  );

  // Appelez event.preventDefault() pour empêcher l'ouverture de la boîte de dialogue
  /*
    if (shouldCancel()) {
        event.preventDefault();
    }
  */
});
```

#### Résultat

Notez que les boutons _Confirmer_ et _Annuler_ déclenchent tous deux l'événement `close`, et que le résultat doit refléter l'option sélectionnée dans la boîte de dialogue.

{{EmbedLiveSample("Ouvrir une boîte de dialogue modale", '100%', 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
