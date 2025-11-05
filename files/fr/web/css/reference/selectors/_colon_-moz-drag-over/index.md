---
title: :-moz-drag-over
slug: Web/CSS/Reference/Selectors/:-moz-drag-over
original_slug: Web/CSS/:-moz-drag-over
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-drag-over`** permet de mettre en forme un élément lorsqu'un événement `drag-over` est appelé dessus.

## Syntaxe

```css
:-moz-drag-over {
  /* ... */
}
```

## Exemples

### HTML

```html
<div id="drop-target">
  <p>Cible de dépôt</p>
</div>

<div draggable="true">
  <p>Déplaçable</p>
</div>
```

### JavaScript

La plupart des éléments ne sont pas des emplacements valides pour déposer des données. Pour autoriser un dépôt, vous devez donc empêcher le comportement par défaut en annulant les événements [`dragenter`](/fr/docs/Web/API/HTMLElement/dragenter_event) ou [`dragover`](/fr/docs/Web/API/HTMLElement/dragover_event) (ou les deux).
Dans cet exemple, nous devons uniquement annuler l'événement `dragenter`, qui est le premier événement déclenché lorsque le navigateur évalue si un élément peut être une cible de dépôt.
Pour plus d'informations, consultez l'article [Opérations de glissement](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#spécifier_les_cibles_de_dépôt).

```js
const target = document.getElementById("drop-target");
/* événement dragenter déclenché sur la cible de dépôt */
target.addEventListener(
  "dragenter",
  (event) => {
    // empêcher le comportement par défaut pour autoriser le dépôt
    event.preventDefault();
  },
  false,
);
```

### CSS

```css
body {
  font-family: Arial;
}
div {
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 2px dotted black;
  background-color: aquamarine;
  margin: 1rem;
}
p {
  padding: 1rem;
}
```

Le CSS suivant change la couleur de la zone de dépôt en rouge lorsque l'élément déplaçable recouvre la zone de dépôt.

```css
#drop-target {
  background-color: cornflowerblue;
}
#drop-target:-moz-drag-over {
  background-color: red;
}
```

### Résultat

{{EmbedLiveSample("Exemples","200","200")}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Voir aussi

- [Extensions CSS de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- L'API [Glisser-déposer HTML](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
