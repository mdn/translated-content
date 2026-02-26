---
title: "HTMLDialogElement : propriété returnValue"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 892f5d7d285d5ed9d79012b5e19c459392a7669e
---

{{APIRef("HTML DOM")}}

La propriété **`returnValue`** de l'interface {{DOMxRef("HTMLDialogElement")}} est une chaîne de caractères (`string`) représentant la valeur de retour pour un élément {{HTMLElement("dialog")}} lorsqu'il est fermé.
Vous pouvez définir cette valeur directement (`dialog.returnValue = "résultat"`) ou en fournissant la valeur comme argument de type `string` à {{DOMxRef("HTMLDialogElement.close()", "close()")}} ou {{DOMxRef("HTMLDialogElement.requestClose()", "requestClose()")}}.

## Valeur

Une chaîne de caractères représentant la valeur de retour (`returnValue`) de la boîte de dialogue.
La valeur par défaut est une chaîne vide (`""`).

## Exemples

### Vérifier la valeur de retour

L'exemple suivant affiche un bouton pour ouvrir une boîte de dialogue. Celle-ci demande à l'utilisateur·ice s'il·elle accepte les conditions d'utilisation.

La boîte de dialogue contient des boutons «&nbsp;Accepter&nbsp;» ou «&nbsp;Refuser&nbsp;»&nbsp;: lorsque l'utilisateur·ice clique sur l'un des boutons, le gestionnaire d'événement ferme la boîte de dialogue en passant le choix à la fonction {{DOMxRef("HTMLDialogElement.close()", "close()")}}. Ce choix est alors assigné à la propriété `returnValue` de la boîte de dialogue.

Dans le gestionnaire d'événement {{DOMxRef("HTMLDialogElement.close_event", "close")}} de la boîte de dialogue, l'exemple met à jour le texte d'état de la page principale pour afficher la valeur de `returnValue`.

Si l'utilisateur·ice ferme la boîte de dialogue sans cliquer sur un bouton (par exemple, en appuyant sur la touche <kbd>Échap</kbd>), alors la valeur de retour n'est pas définie.

#### HTML

```html
<dialog id="termsDialog">
  <p>Acceptez-vous les conditions d'utilisation&nbsp;?</p>
  <button id="declineButton" value="refusé">Refuser</button>
  <button id="acceptButton" value="accepté">Accepter</button>
</dialog>
<p>
  <button id="openDialogButton">Lire les CGU</button>
</p>
<p id="statusText"></p>
```

#### JavaScript

```js
const dialog = document.getElementById("termsDialog");
const statusText = document.getElementById("statusText");

const openDialogButton = document.getElementById("openDialogButton");
const declineButton = document.getElementById("declineButton");
const acceptButton = document.getElementById("acceptButton");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

declineButton.addEventListener("click", closeDialog);
acceptButton.addEventListener("click", closeDialog);

function closeDialog(event) {
  const button = event.target;
  dialog.close(button.value);
}

dialog.addEventListener("close", () => {
  statusText.innerText = dialog.returnValue
    ? `Valeur de retour : ${dialog.returnValue}`
    : "Aucune valeur de retour";
});
```

#### Résultat

Essayez de cliquer sur «&nbsp;Lire les CGU&nbsp;», puis choisissez les boutons «&nbsp;Accepter&nbsp;» ou «&nbsp;Refuser&nbsp;» dans la boîte de dialogue, ou fermez la boîte de dialogue en appuyant sur la touche <kbd>Échap</kbd>, et observez les différents états affichés.

{{EmbedLiveSample('Vérifier la valeur de retour', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
