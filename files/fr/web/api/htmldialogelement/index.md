---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLDialogElement`** fournit des méthodes pour manipuler les éléments {{HTMLElement("dialog")}}. Elle hérite des propriétés et méthodes de l'interface parente {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLDialogElement.closedBy")}}
  - : Chaîne de caractères définissant ou retournant la valeur de l'attribut HTML [`closedby`](/fr/docs/Web/HTML/Reference/Elements/dialog#closedby), qui indique les types d'actions utilisateur permettant de fermer la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.open")}}
  - : Booléen reflétant l'attribut HTML [`open`](/fr/docs/Web/HTML/Reference/Elements/dialog#open), indiquant si la boîte de dialogue est disponible pour l'interaction.
- {{DOMxRef("HTMLDialogElement.returnValue")}}
  - : Chaîne de caractères définissant ou retournant la valeur de retour de la boîte de dialogue.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLDialogElement.close()")}}
  - : Ferme la boîte de dialogue. Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}} de la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.requestClose()")}}
  - : Demande la fermeture de la boîte de dialogue. Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}} de la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.show()")}}
  - : Affiche la boîte de dialogue de manière non modale, c'est-à-dire en permettant toujours l'interaction avec le contenu extérieur à la boîte de dialogue.
- {{DOMxRef("HTMLDialogElement.showModal()")}}
  - : Affiche la boîte de dialogue en modal, au-dessus de toute autre boîte de dialogue éventuellement présente. Tout ce qui se trouve en dehors de la boîte de dialogue est {{DOMxRef("HTMLElement.inert", "inert")}} et les interactions extérieures sont bloquées.

## Évènements

_Hérite également des évènements de son interface parente, {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements à l'aide de {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un écouteur à la propriété `oneventname` de cette interface.

- {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}}
  - : Déclenché lorsque la boîte de dialogue reçoit une demande de fermeture, que ce soit avec la touche <kbd>Échap</kbd> ou avec la méthode {{DOMxRef("HTMLDialogElement.requestClose()", "requestClose()")}}. Si l'évènement est annulé (avec {{DOMxRef("Event.preventDefault()")}}), la boîte de dialogue reste ouverte. Sinon, la boîte de dialogue se ferme et l'évènement {{DOMxRef("HTMLDialogElement/close_event", "close")}} est déclenché.
- {{DOMxRef("HTMLDialogElement/close_event", "close")}}
  - : Déclenché lorsque la boîte de dialogue est fermée.

## Exemples

### Ouvrir / fermer une boîte de dialogue modale

L'exemple suivant montre un bouton qui, lorsqu'il est cliqué, utilise la fonction {{DOMxRef("HTMLDialogElement.showModal", "showModal()")}} pour ouvrir une boîte de dialogue modale {{HTMLElement("dialog")}} contenant un formulaire.

Lorsque la boîte de dialogue est ouverte, tout ce qui n'est pas son contenu devient inerte.
Vous pouvez cliquer sur le bouton _Fermer_ pour fermer la boîte de dialogue (avec la fonction {{DOMxRef("HTMLDialogElement.close", "close()")}}), ou soumettre le formulaire avec le bouton _Confirmer_.

L'exemple montre&nbsp;:

1. Fermer un formulaire avec la fonction {{DOMxRef("HTMLDialogElement.close", "close()")}}
2. Fermer un formulaire lors de la soumission et définir la valeur de retour de la boîte de dialogue {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}}
3. Fermer un formulaire avec la touche <kbd>Échap</kbd>
4. L'évènements de «&nbsp;changement d'état&nbsp;» pouvant être déclenchés sur la boîte de dialogue&nbsp;: {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}} et {{DOMxRef("HTMLDialogElement/close_event", "close")}}, ainsi que les évènements hérités {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} et {{DOMxRef("HTMLElement/toggle_event", "toggle")}}.

#### HTML

```html
<dialog id="dialog">
  <button id="close" type="button">Fermer</button>
  <form method="dialog" id="form">
    <p>
      <label for="fav-animal">Animal favori&nbsp;:</label>
      <select id="fav-animal" name="favAnimal" required>
        <option></option>
        <option>Crevette d'eau salée</option>
        <option>Panda roux</option>
        <option>Singe-araignée</option>
      </select>
    </p>
    <div>
      <button id="submit" type="submit">Confirmer</button>
    </div>
  </form>
</dialog>

<button id="open">Ouvrir la boîte de dialogue</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

##### Ouvrir la boîte de dialogue

Le code commence par récupérer les objets pour l'élément {{HTMLElement("dialog")}}, les éléments {{HTMLElement("button")}} et l'élément {{HTMLElement("select")}}.
Il ajoute ensuite un écouteur d'évènements pour appeler la fonction {{DOMxRef("HTMLDialogElement.showModal()")}} lorsque le bouton _Ouvrir la boîte de dialogue_ est cliqué.

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");

// Le bouton Mettre à jour ouvre la boîte de dialogue modale
openButton.addEventListener("click", () => {
  log(`dialog: showModal()`);
  dialog.showModal();
});
```

##### Fermer la boîte de dialogue lorsque le bouton _Fermer_ est cliqué

Ensuite, nous ajoutons un écouteur pour l'évènement {{DOMxRef("Element/click_event", "click")}} du bouton _Fermer_. Le gestionnaire définit la {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}} et appelle la fonction {{DOMxRef("HTMLDialogElement.close", "close()")}} pour fermer la boîte de dialogue.

```js
// Le bouton ferme la boîte de dialogue
const closeButton = document.getElementById("close");
closeButton.addEventListener("click", () => {
  dialog.returnValue = ""; // Réinitialise la valeur
  log(`dialog: close()`);
  dialog.close();
  // De manière alternative, nous pourrions utiliser dialog.requestClose(""); avec une valeur de retour vide.
});
```

##### Obtenir la `returnValue` de `close`

Appeler {{DOMxRef("HTMLDialogElement.close", "close()")}} (ou soumettre avec succès un formulaire avec `method="dialog"`) déclenche l'évènement {{DOMxRef("HTMLDialogElement/close_event", "close")}}, que nous implémentons ci-dessous en journalisant la valeur de retour de la boîte de dialogue.

```js
dialog.addEventListener("close", (event) => {
  log(`close_event : (dialog.returnValue : "${dialog.returnValue}")`);
});
```

##### Évènement `cancel`

L'évènement {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}} est déclenché lorsque des «&nbsp;moyens spécifiques à la plateforme&nbsp;» sont utilisés pour fermer la boîte de dialogue, comme la touche <kbd>Échap</kbd>.
Il est aussi déclenché lorsque la méthode {{DOMxRef("HTMLDialogElement.requestClose", "requestClose()")}} est appelée.
C'est un évènement «&nbsp;annulable&nbsp;», ce qui signifie qu'on peut l'utiliser pour empêcher la fermeture de la boîte de dialogue.
Ici, on traite simplement l'annulation comme une opération de fermeture, et on réinitialise la propriété {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}} à `""` pour effacer toute valeur éventuellement définie.

```js
dialog.addEventListener("cancel", (event) => {
  log(`cancel_event : (dialog.returnValue : "${dialog.returnValue}")`);
  dialog.returnValue = ""; // Réinitialise la valeur
});
```

##### Évènement `toggle`

L'évènement {{DOMxRef("HTMLElement/toggle_event", "toggle")}} (hérité de {{DOMxRef("HTMLElement")}}) est déclenché juste après l'ouverture ou la fermeture d'une boîte de dialogue (mais avant l'évènement {{DOMxRef("HTMLDialogElement/close_event", "close")}}).

Ici, on ajoute un écouteur pour journaliser l'ouverture et la fermeture de la boîte de dialogue.

> [!NOTE]
> Les évènements {{DOMxRef("HTMLElement/toggle_event", "toggle")}} et {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} peuvent ne pas être déclenchés sur les éléments dialog dans tous les navigateurs.
> Sur ces versions, vous pouvez vérifier la propriété {{DOMxRef("HTMLDialogElement.open", "open")}} après avoir tenté d'ouvrir/fermer la boîte de dialogue.

```js
dialog.addEventListener("toggle", (event) => {
  log(`toggle_event : nouvel état : ${event.newState}`);
});
```

##### Évènement `beforetoggle`

L'évènement {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}} (hérité de {{DOMxRef("HTMLElement")}}) est un évènement annulable déclenché juste avant l'ouverture ou la fermeture d'une boîte de dialogue.
Si besoin, il peut être utilisé pour empêcher l'affichage d'une boîte de dialogue, ou pour effectuer des actions sur d'autres éléments affectés par l'état ouvert/fermé de la boîte de dialogue, comme l'ajout de classes pour déclencher des animations.

Dans ce cas, on journalise simplement l'ancien et le nouvel état.

```js
dialog.addEventListener("beforetoggle", (event) => {
  log(
    `évènement beforetoggle  : ancien état : ${event.oldState}, nouvel état : ${event.newState}`,
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

Essayez l'exemple ci-dessous.
Notez que les boutons _Confirmer_ et _Fermer_ déclenchent tous deux l'évènement {{DOMxRef("HTMLDialogElement/close_event", "close")}}, et que le résultat doit refléter l'option sélectionnée dans la boîte de dialogue.

{{EmbedLiveSample("Ouvrir / fermer une boîte de dialogue modale", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
