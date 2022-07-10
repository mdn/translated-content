---
title: GlobalEventHandlers.onchange
slug: conflicting/Web/API/HTMLElement/change_event
translation_of: Web/API/GlobalEventHandlers/onchange
original_slug: Web/API/GlobalEventHandlers/onchange
browser-compat: api.GlobalEventHandlers.onchange
---
{{ApiRef("HTML DOM")}}

La propriété **`onchange`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`change`](/fr/docs/Web/API/HTMLElement/change_event).

Les évènements `change` sont déclenchés lorsque la personne valide un changement de valeur dans un contrôle d'un formulaire. Cela peut se produire, par exemple, lors d'un clic à l'extérieur du contrôle ou en utilisant la touche <kbd>Tab</kbd> pour passer à un contrôle différent.

> **Note :** À la différence de [`oninput`](/fr/docs/Web/API/GlobalEventHandlers/oninput), le gestionnaire d'évènements `onchange` n'est pas nécessairement appelé pour chaque modification de la valeur (`value`) d'un élément.

## Syntaxe

```js
cible.onchange = refFonction;
```

`refFonction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`Event`](/fr/docs/Web/API/Event) comme unique argument.

## Exemple

Dans cet exemple, on affiche dans un journal le nombre de caractères d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) après chaque modification, une fois que le focus a été retiré du contrôle.

### HTML

```html
<input type="text" placeholder="Saisissez quelque chose ici, puis cliquez en dehors du champ." size="50">
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `La valeur du champ mesure
      ${e.target.value.length} caractère(s).`;
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`change`](/fr/docs/Web/API/HTMLElement/change_event)
