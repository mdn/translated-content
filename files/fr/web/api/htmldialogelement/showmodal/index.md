---
title: "HTMLDialogElement : méthode showModal()"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

La méthode **`showModal()`** de l'interface {{domxref("HTMLDialogElement")}} affiche la boîte de dialogue en mode bloquante, au-dessus de toute autre boîte de dialogue présente.

Une boîte de dialogue bloquante s'affiche dans la {{glossary("top layer")}}, accompagnée d'un pseudo-élément {{cssxref('::backdrop')}}.
Les éléments du même document que la boîte de dialogue, à l'exception de celle-ci et de ses descendants, deviennent _inertes_ (comme si l'attribut [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert) était défini).
Seul le document contenant est bloqué&nbsp;: si la boîte de dialogue est affichée dans une iframe, le reste de la page reste interactif.

## Syntaxe

```js-nolint
showModal()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la boîte de dialogue est déjà ouverte et non modale (c'est-à-dire si elle a déjà été ouverte avec {{DOMxRef("HTMLDialogElement.show()")}}).

## Exemples

### Utilisation simple

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre un élément {{HTMLElement("dialog")}} avec la méthode `showModal()`.

Lorsque la boîte de dialogue est ouverte, vous ne pouvez pas interagir avec le reste de la page, y compris cliquer sur le bouton _Cliquez-moi_ qui déclenche autrement une alerte.

Vous pouvez cliquer sur le bouton _Fermer la boîte de dialogue_ pour fermer la boîte de dialogue (avec la méthode {{DOMxRef("HTMLDialogElement.close()", "close()")}}).

#### HTML

```html
<dialog id="dialogue">
  <button type="button" id="fermer">Fermer la boîte de dialogue</button>
</dialog>

<p><button id="ouvrir">Ouvrir la boîte de dialogue</button></p>
<p><button id="alerte">Déclencher une alerte</button></p>
```

#### JavaScript

```js
const dialogue = document.getElementById("dialogue");
const ouvrirButton = document.getElementById("ouvrir");
const fermerButton = document.getElementById("fermer");
const alerteButton = document.getElementById("alerte");

// Le bouton ouvrir ouvre une boîte de dialogue bloquante
ouvrirButton.addEventListener("click", () => {
  dialogue.showModal();
});

// Le bouton alerte déclenche une alerte
alerteButton.addEventListener("click", () => {
  alert("vous m'avez cliqué !");
});

// Le bouton fermer ferme la boîte de dialogue
fermerButton.addEventListener("click", () => {
  dialogue.close();
});
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
- La méthode {{DOMxRef("HTMLDialogElement.show()")}}
