---
title: "HTMLDialogElement : méthode show()"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

La méthode **`show()`** de l'interface {{DOMxRef("HTMLDialogElement")}} affiche la boîte de dialogue de manière non bloquante.

Une boîte de dialogue non bloquante est une boîte de dialogue où les utilisateur·ice·s peuvent interagir avec le contenu en dehors/derrière la boîte de dialogue ouverte.

## Syntaxe

```js-nolint
show()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la boîte de dialogue est déjà ouverte et bloquante (c'est-à-dire si elle a déjà été ouverte avec {{DOMxRef("HTMLDialogElement.showModal()")}}).

## Exemples

### Utilisation simple

L'exemple suivant montre un simple bouton qui, lorsqu'il est cliqué, ouvre un élément {{HTMLElement("dialog")}} avec la méthode `show()`.

Lorsque la boîte de dialogue est ouverte, vous pouvez toujours interagir avec le reste de la page, y compris cliquer sur le bouton _Cliquez-moi_ qui déclenche une alerte.

Vous pouvez cliquer sur le bouton _Fermer la boîte de dialogue_ pour fermer la boîte de dialogue (avec la méthode {{DOMxRef("HTMLDialogElement.close()", "close()")}}).

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

// Le bouton ouvrir ouvre une boîte de dialogue non bloquante
ouvrirButton.addEventListener("click", () => {
  dialogue.show();
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
- La méthode {{DOMxRef("HTMLDialogElement.showModal()")}}
