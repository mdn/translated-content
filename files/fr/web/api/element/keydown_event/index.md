---
title: "Element : évènement keydown"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`keydown`** est déclenché lorsque l'on appuie sur une touche.

Contrairement à l'évènement obsolète {{DOMxRef("Element/keypress_event", "keypress")}}, l'évènement `keydown` est déclenché pour toutes les touches, qu'elles produisent ou non une valeur de caractère.

Les évènements `keydown` et {{DOMxRef("Element/keyup_event", "keyup")}} fournissent un code indiquant quelle touche est enfoncée, tandis que `keypress` indique quel caractère a été saisi. Par exemple, un «&nbsp;a&nbsp;» minuscule est signalé comme 65 par `keydown` et `keyup`, mais comme 97 par `keypress`. Un «&nbsp;A&nbsp;» majuscule est signalé comme 65 par tous les évènements.

La cible d'un évènement clavier est l'élément actuellement sélectionné qui traite l'activité du clavier. Cela inclut&nbsp;: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, tout élément qui est [`contentEditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable), et tout autre élément avec lequel on peut interagir au clavier, comme {{HTMLElement("a")}}, {{HTMLElement("button")}}, et {{HTMLElement("summary")}}. Si aucun élément approprié n'est sélectionné, la cible de l'évènement est le {{HTMLElement("body")}} ou la racine. L'évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling). Il peut atteindre {{DOMxRef("Document")}} et {{DOMxRef("Window")}}.

La cible d'un évènement peut changer entre différents évènements clavier. Par exemple, la cible du `keydown` lors de l'appui sur la touche <kbd>Tab</kbd> est différente de celle du `keyup`, car la sélection a changée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("keydown", (event) => { })

onkeydown = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("KeyboardEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Exemple

### Exemple avec `keydown` sur un `addEventListener`

Cet exemple affiche la valeur de {{DOMxRef("KeyboardEvent.code")}} à chaque fois qu'on appuie sur une touche à l'intérieur de l'élément HTML {{HTMLElement("input")}}.

```html
<input placeholder="Cliquez ici, puis appuyez sur une touche." size="40" />
<p id="journal"></p>
```

```js
const entree = document.querySelector("input");
const journal = document.getElementById("journal");

entree.addEventListener("keydown", journaliserCle);

function journaliserCle(e) {
  journal.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("Exemple avec `keydown` sur un `addEventListener`")}}

### Évènements `keydown` avec IME

Depuis Firefox 65, les évènements `keydown` et {{DOMxRef("Element/keyup_event", "keyup")}} sont désormais déclenchés pendant la composition de la {{Glossary("Input method editor", "méthode de saisie")}}, afin d'améliorer la compatibilité entre navigateurs pour les utilisateur·ice·s de CJKT ([bogue Firefox 354358 <sup>(angl.)</sup>](https://bugzil.la/354358)). Pour ignorer tous les évènements `keydown` qui font partie de la composition, faites quelque chose comme ceci (229 est une valeur spéciale définie pour un `keyCode` relatif à un évènement qui a été traité par un IME)&nbsp;:

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // faire quelque chose
});
```

> [!NOTE]
> `compositionstart` peut se déclencher _après_ `keydown` lors de la saisie du premier caractère qui ouvre l'IME, et `compositionend` peut se déclencher _avant_ `keydown` lors de la saisie du dernier caractère qui ferme l'IME. Dans ces cas, `isComposing` est faux même lorsque l'évènement fait partie de la composition. Cependant, {{DOMxRef("KeyboardEvent.keyCode")}} vaut toujours `229` dans ces situations, il est donc conseillé de vérifier également `keyCode`, bien que cette propriété soit obsolète.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element/input_event", "input")}}
- L'évènement {{DOMxRef("Element/keypress_event", "keypress")}}
- L'évènement {{DOMxRef("Element/keyup_event", "keyup")}}
