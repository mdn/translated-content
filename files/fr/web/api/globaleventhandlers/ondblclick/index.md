---
title: GlobalEventHandlers.ondblclick
slug: Web/API/GlobalEventHandlers/ondblclick
translation_of: Web/API/GlobalEventHandlers/ondblclick
browser-compat: api.GlobalEventHandlers.ondblclick
---
{{ApiRef("HTML DOM")}}

La propriété **`ondblclick`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`dblclick`](/fr/docs/Web/API/Element/dblclick_event).

L'évènement `dblclick` est déclenché lorsque la personne double-clique sur un élément. Il est déclenché après deux évènements [`click`](/fr/docs/Web/API/Element/click_event).

## Syntaxe

```js
cible.ondblclick = refFonction;
```

### Valeur

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`MouseEvent`](/fr/docs/Web/API/MouseEvent) comme unique argument. À l'intérieur de cette fonction, le mot-clé [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) correspondra à l'élément sur lequel l'évènement a été déclenché.

Seul un gestionnaire `ondblclick` peut être affecté par objet à un instant donné. Si besoin de plus de flexibilité, on pourra utiliser la méthode [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener).

## Exemple

Cet exemple affiche dans un journal la position des doubles-clics.

### HTML

```html
<p>Double-cliquez n'importe où dans cet exemple.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.getElementById('log');

document.ondblclick = logDoubleClick;

function logDoubleClick(e) {
  log.textContent = `Position : (${e.clientX}, ${e.clientY})`;
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
- Les gestionnaires d'évènements associés
  - [`GlobalEventHandlers.onauxclick`](/fr/docs/Web/API/GlobalEventHandlers/onauxclick)
  - [`GlobalEventHandlers.onclick`](/fr/docs/Web/API/GlobalEventHandlers/onclick)
