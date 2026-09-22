---
title: "HTMLDialogElement : propriété returnValue"
short-title: returnValue
slug: Web/API/HTMLDialogElement/returnValue
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

La propriété **`returnValue`** de l'interface {{DOMxRef("HTMLDialogElement")}} est une chaîne de caractères (`string`) représentant la valeur de retour pour un élément {{HTMLElement("dialog")}} lorsqu'il est fermé.
Vous pouvez définir cette valeur directement (`dialog.returnValue = "résultat"`) ou en fournissant la valeur comme argument de type `string` à {{DOMxRef("HTMLDialogElement.close()", "close()")}} ou {{DOMxRef("HTMLDialogElement.requestClose()", "requestClose()")}}.

## Valeur

Une chaîne de caractères représentant la valeur de retour (`returnValue`) de la boîte de dialogue.
La valeur par défaut est une chaîne de caractères vide (`""`).

## Exemples

### Vérifier la valeur de retour

L'exemple suivant affiche un bouton pour ouvrir une boîte de dialogue. Celle-ci demande à l'utilisateur·ice s'il·elle accepte les conditions d'utilisation.

La boîte de dialogue contient des boutons «&nbsp;Accepter&nbsp;» ou «&nbsp;Refuser&nbsp;»&nbsp;: lorsque l'utilisateur·ice clique sur l'un des boutons, le gestionnaire d'évènement ferme la boîte de dialogue en passant le choix à la fonction {{DOMxRef("HTMLDialogElement.close()", "close()")}}. Ce choix est alors assigné à la propriété `returnValue` de la boîte de dialogue.

Dans le gestionnaire d'évènement {{DOMxRef("HTMLDialogElement.close_event", "close")}} de la boîte de dialogue, l'exemple met à jour le texte d'état de la page principale pour afficher la valeur de `returnValue`.

Si l'utilisateur·ice ferme la boîte de dialogue sans cliquer sur un bouton (par exemple, en appuyant sur la touche <kbd>Échap</kbd>), alors la valeur de retour n'est pas définie.

#### HTML

```html
<dialog id="dialogue">
  <p>Acceptez-vous les conditions d'utilisation&nbsp;?</p>
  <button id="refuse" value="declined">Refuser</button>
  <button id="accepte" value="accepted">Accepter</button>
</dialog>
<button id="ouvrir">Ouvrir la boîte de dialogue</button>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const elementJournal = document.getElementById("journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

#### JavaScript

```js
const dialogue = document.getElementById("dialogue");
const boutonOuvrir = document.getElementById("ouvrir");
const boutonRefuser = document.getElementById("refuse");
const boutonAccepter = document.getElementById("accepte");

boutonOuvrir.addEventListener("click", () => {
  // Réinitialiser la valeur de retour à chaque ouverture
  dialogue.returnValue = "";
  mettreAJourValeurDeRetour();
  // Afficher la boîte de dialogue
  dialogue.showModal();
});

function fermerDialogue(event) {
  const button = event.target;
  dialogue.close(button.value);
}

function mettreAJourValeurDeRetour() {
  journaliser(`Valeur de retour : "${dialogue.returnValue}"`);
}

boutonRefuser.addEventListener("click", fermerDialogue);
boutonAccepter.addEventListener("click", fermerDialogue);

dialogue.addEventListener("close", mettreAJourValeurDeRetour);
```

#### Résultat

Cliquez sur «&nbsp;Ouvrir la boîte de dialogue&nbsp;», puis choisissez les boutons «&nbsp;Accepter&nbsp;» ou «&nbsp;Refuser&nbsp;» dans la boîte de dialogue, ou fermez la boîte de dialogue en appuyant sur la touche <kbd>Échap</kbd>.
Observez les différents états affichés.

{{EmbedLiveSample("Vérifier la valeur de retour", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
