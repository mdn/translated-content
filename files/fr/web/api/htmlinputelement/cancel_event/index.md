---
title: "HTMLInputElement : évènement cancel"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

L'évènement **`cancel`** de l'interface {{DOMxRef("HTMLInputElement")}} est déclenché sur un élément HTML {{HTMLElement("input")}} lorsque l'utilisateur·ice annule la boîte de dialogue du sélecteur de fichiers via la touche <kbd>Échap</kbd> ou le bouton d'annulation, ou lorsqu'il·elle re‑sélectionne les mêmes fichiers qui avaient été précédemment sélectionnés pour un champ de `type="file"`.

Cet évènement n'est pas annulable, mais il peut se propager.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez un gestionnaire d'évènements à la propriété correspondante.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Annuler la sélection de fichiers sur un élément `input`

#### HTML

```html
<label for="file">Sélectionnez un fichier. Ou pas.</label>
<input type="file" id="file" name="file" />

<div id="result"></div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
const elem = document.getElementById("file");

const result = document.getElementById("result");

elem.addEventListener("cancel", () => {
  result.textContent = "Annulé.";
});

elem.addEventListener("change", () => {
  if (elem.files.length === 1) {
    result.textContent = "Fichier sélectionné.";
  }
});
```

#### Résultat

{{EmbedLiveSample('Annuler la sélection de fichiers sur un élément input', '100%', 100)}}

Ouvrez le sélecteur de fichiers, puis fermez la boîte de dialogue de sélection avec la touche <kbd>Échap</kbd> ou le bouton d'annulation. Chacune de ces actions déclenchera l'évènement `cancel`. Essayez également de sélectionner un fichier local sur votre machine&nbsp;; rouvrez ensuite la fenêtre de sélection de fichiers et re‑sélectionnez le même fichier — cela déclenchera aussi l'évènement `cancel`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
