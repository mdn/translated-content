---
title: "Element : évènement keyup"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`keyup`** est déclenché lorsque l'on relâche une touche.

Les évènements {{DOMxRef("Element/keydown_event", "keydown")}} et `keyup` fournissent un code indiquant quelle touche est enfoncée, tandis que `keypress` indique quel caractère a été saisi. Par exemple, un «&nbsp;a&nbsp;» minuscule est signalé comme 65 par `keydown` et `keyup`, mais comme 97 par `keypress`. Un «&nbsp;A&nbsp;» majuscule est signalé comme 65 par tous les évènements.

La cible d'un évènement clavier est l'élément actuellement sélectionné qui traite l'activité du clavier. Cela inclut&nbsp;: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, tout élément qui est [`contentEditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable), et tout autre élément avec lequel on peut interagir au clavier, comme {{HTMLElement("a")}}, {{HTMLElement("button")}}, et {{HTMLElement("summary")}}. Si aucun élément approprié n'est sélectionné, la cible de l'évènement est le {{HTMLElement("body")}} ou la racine. L'évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling). Il peut atteindre le {{DOMxRef("Document")}} et la {{DOMxRef("Window")}}.

La cible d'un évènement peut changer entre différents évènements clavier. Par exemple, la cible du `keydown` lors de l'appui sur la touche <kbd>Tab</kbd> est différente de celle du `keyup`, car la sélection a changée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("keyup", (event) => { })

onkeyup = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("KeyboardEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

## Exemples

### Exemple `addEventListener` avec `keyup`

Cet exemple affiche la valeur de {{DOMxRef("KeyboardEvent.code")}} à chaque fois qu'on relâche une touche à l'intérieur de l'élément HTML {{HTMLElement("input")}}.

```html
<input
  placeholder="Cliquez ici, puis appuyez et relâchez une touche."
  size="40" />
<p id="journal"></p>
```

```js
const entree = document.querySelector("input");
const journal = document.getElementById("journal");

entree.addEventListener("keyup", journaliserCle);

function journaliserCle(e) {
  journal.textContent += ` ${e.code}`;
}
```

### Évènements `keyup` avec IME

Depuis Firefox 65, les évènements {{DOMxRef("Element/keydown_event", "keydown")}} et `keyup` sont désormais déclenchés pendant la composition de la {{Glossary("Input method editor", "méthode de saisie")}}, afin d'améliorer la compatibilité inter-navigateurs pour les utilisateur·ice·s CJKT ([bogue Firefox 354358 <sup>(angl.)</sup>](https://bugzil.la/354358)). Pour ignorer tous les évènements `keyup` qui font partie d'une composition, faites quelque chose comme ceci&nbsp;:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // faire quelque chose
});
```

> [!NOTE]
> Contrairement à `keydown`, les évènements `keyup` ne disposent pas de valeurs `keyCode` spécifiques pour les évènements IME. Toutefois, comme pour `keydown`, `compositionstart` peut se déclencher _après_ `keyup` lors de la saisie du premier caractère qui ouvre l'IME, et `compositionend` peut se déclencher _avant_ `keyup` lors de la saisie du dernier caractère qui ferme l'IME. Dans ces cas, `isComposing` est faux même lorsque l'évènement fait partie de la composition.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element/input_event", "input")}}
- L'évènement {{DOMxRef("Element/keydown_event", "keydown")}}
- L'évènement {{DOMxRef("Element/keypress_event", "keypress")}}
