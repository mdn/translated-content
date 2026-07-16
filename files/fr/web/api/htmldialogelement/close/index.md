---
title: "HTMLDialogElement : méthode close()"
short-title: close()
slug: Web/API/HTMLDialogElement/close
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

La méthode **`close()`** de l'interface {{DOMxRef("HTMLDialogElement")}} ferme l'élément {{HTMLElement("dialog")}}.
Une chaîne de caractères optionnelle peut être passée en argument, ce qui met à jour la propriété `returnValue` de la boîte de dialogue.
L'évènement {{DOMxRef("HTMLDialogElement.close_event", "close")}} est déclenché après la fermeture de la boîte de dialogue.
Contrairement à l'appel de {{DOMxRef("HTMLDialogElement.requestClose()")}}, l'opération de fermeture ne peut pas être annulée.

## Syntaxe

```js-nolint
close()
close(returnValue)
```

### Paramètres

- `returnValue` {{Optional_Inline}}
  - : Une chaîne de caractères qui remplace la valeur existante de {{DOMxRef("HTMLDialogElement.returnValue")}}.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Fermer un dialogue

L'exemple suivant montre un bouton qui, lorsqu'il est cliqué, ouvre un élément {{HTMLElement("dialog")}} avec la méthode {{DOMxRef("HTMLDialogElement.showModal()", "showModal()")}}.
Depuis cette boîte de dialogue, vous pouvez cliquer sur le bouton _Fermer_ pour fermer la boîte de dialogue (avec la méthode `close()`).

Le bouton _Fermer_ ferme la boîte de dialogue sans {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}}, tandis que le bouton _Fermer avec valeur de retour_ ferme la boîte de dialogue avec un {{DOMxRef("HTMLDialogElement.returnValue", "returnValue")}}.

#### HTML

```html
<dialog id="dialogue">
  <button type="button" id="fermer">Fermer</button>
  <button type="button" id="fermer-avec-valeur">
    Fermer avec valeur de retour
  </button>
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

#### JavaScript

```js hidden
const elementJournal = document.getElementById("journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const dialogue = document.getElementById("dialogue");
const boutonOuvrir = document.getElementById("ouvrir");
const boutonFermer = document.getElementById("fermer");
const boutonFermerAvecValeur = document.getElementById("fermer-avec-valeur");

// Le bouton d'ouverture ouvre une boîte de dialogue modale
boutonOuvrir.addEventListener("click", () => {
  // Réinitialiser la valeur de retour
  dialogue.returnValue = "";
  // Afficher la boîte de dialogue
  dialogue.showModal();
});

// Le bouton Fermer ferme la boîte de dialogue
boutonFermer.addEventListener("click", () => {
  dialogue.close();
});

// Le bouton Fermer avec valeur de retour ferme la boîte de dialogue avec une valeur de retour
boutonFermerAvecValeur.addEventListener("click", () => {
  dialogue.close(`Fermé à ${new Date().toLocaleTimeString()}`);
});

// Le bouton de fermeture du formulaire ferme la boîte de dialogue
dialogue.addEventListener("close", () => {
  journaliser(
    `Boîte de dialogue fermée. Valeur de retour : "${dialogue.returnValue}"`,
  );
});
```

> [!NOTE]
> Vous savez que vous pouvez également fermer automatiquement une `<dialog>` en envoyant un élément {{HTMLElement("form")}} avec un attribut [`method="dialog"`](/fr/docs/Web/HTML/Reference/Elements/form#method).

### Résultat

{{EmbedLiveSample("Fermer un dialogue", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- L'évènement {{DOMxRef("HTMLDialogElement.close_event", "close")}}
- La méthode {{DOMxRef("HTMLDialogElement.requestClose()")}}
