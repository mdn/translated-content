---
title: GlobalEventHandlers.onkeydown
slug: Web/API/GlobalEventHandlers/onkeydown
translation_of: Web/API/GlobalEventHandlers/onkeydown
browser-compat: api.GlobalEventHandlers.onkeydown
---
{{ApiRef("HTML DOM")}}

La propriété **`onkeydown`**, rattachée au mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers), est [un gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui permet de traiter les évènements [`keydown`](/fr/docs/Web/API/Document/keydown_event).

L'évènement `keydown` est déclenché lorsque l'utilisatrice ou l'utilisateur appuie sur une touche du clavier.

## Syntaxe

```js
cible.onkeydown = refFunction;
```

### Value

`refFunction` est un nom de fonction ou une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction reçoit un objet [`KeyboardEvent`](/fr/docs/Web/API/KeyboardEvent) comme unique argument.

## Exemple

Cet exemple affiche la valeur de [`KeyboardEvent.code`](/fr/docs/Web/API/KeyboardEvent/code) à chaque fois qu'on appuie sur une touche à l'intérieur de l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input).

### HTML

```html
<input>
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.onkeydown = logKey;

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

Depuis Firefox 65, les évènements [`keyup`](/fr/docs/Web/API/Document/keyup_event) et [`keydown`](/fr/docs/Web/API/Document/keydown_event) sont désormais déclenchés pendant la composition IME afin d'améliorer la compatibilité entre les navigateurs pour les locuteurs de langues asiatiques (CJKT) (voir [le bug 354358](https://bugzilla.mozilla.org/show_bug.cgi?id=354358)). Pour ignorer les évènements `keydown` qui font partie d'une composition, on pourra écrire quelque chose d'analogue au fragment qui suit (229 est une valeur spéciale de `keyCode` relative à un évènement qui a été traité par un IME)&nbsp;:

```js
eventTarget.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // faire quelque chose
});
```

## Voir aussi

- L'évènement [`keydown`](/fr/docs/Web/API/Document/keydown_event)
- Les gestionnaires d'évènements associés
  - [`GlobalEventHandlers.onkeypress`](/fr/docs/Web/API/GlobalEventHandlers/onkeypress)
  - [`GlobalEventHandlers.onkeyup`](/fr/docs/Web/API/GlobalEventHandlers/onkeyup)
