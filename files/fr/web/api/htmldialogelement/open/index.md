---
title: "HTMLDialogElement : propriété open"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

La propriété **`open`** de l'interface {{DOMxRef("HTMLDialogElement")}} est une valeur booléenne reflétant l'attribut HTML {{HTMLElement("dialog", "<code>open</code>", "open")}}, indiquant si la boîte de dialogue {{HTMLElement("dialog")}} est disponible pour l'interaction.

## Valeur

Une valeur booléenne représentant l'état de l'attribut HTML {{HTMLElement("dialog", "<code>open</code>", "open")}}. Une valeur `true` signifie que la boîte de dialogue est affichée, tandis que `false` signifie qu'elle ne l'est pas.

> [!WARNING]
> Bien que la propriété `open` ne soit techniquement pas en lecture seule et puisse être modifiée directement, cela est fortement déconseillé par [la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby), car cela peut perturber le fonctionnement normal des boîtes de dialogue de façon inattendue. Par exemple, l'événement {{DOMxRef("HTMLDialogElement.close_event", "close")}} ne sera pas déclenché si `open` est défini à `false` par programmation, et les appels suivants à {{DOMxRef("HTMLDialogElement.close()", "close()")}} et {{DOMxRef("HTMLDialogElement.requestClose()", "requestClose()")}} n'auront aucun effet. Il est donc préférable d'utiliser les méthodes {{DOMxRef("HTMLDialogElement.show()", "show()")}}, {{DOMxRef("HTMLDialogElement.showModal()", "showModal()")}}, `close()` et `requestClose()` pour modifier la valeur de l'attribut `open`.

## Exemples

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre une boîte de dialogue {{HTMLElement("dialog")}} contenant un formulaire via la méthode `showModal()`. Vous pouvez ensuite cliquer sur le bouton _Annuler_ pour fermer la boîte de dialogue (via la méthode {{DOMxRef("HTMLDialogElement.close()")}}), ou soumettre le formulaire avec le bouton de validation.

```html
<!-- Boîte de dialogue simple -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Fermer</button>
  </form>
</dialog>

<p>
  <button id="openDialog">Ouvrir la boîte de dialogue</button>
</p>
<p id="dialogStatus"></p>
```

```js
const openDialog = document.getElementById("openDialog");
const dialog = document.getElementById("dialog");
const text = document.getElementById("dialogStatus");

function openCheck(dialog) {
  if (dialog.open) {
    text.innerText = "Boîte de dialogue ouverte";
  } else {
    text.innerText = "Boîte de dialogue fermée";
  }
}

// Le bouton met à jour et ouvre la boîte de dialogue modale
openDialog.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

dialog.addEventListener("close", () => {
  openCheck(dialog);
});
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
