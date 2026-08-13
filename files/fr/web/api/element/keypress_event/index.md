---
title: "Element : évènement keypress"
short-title: keypress
slug: Web/API/Element/keypress_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

L'évènement **`keypress`** est déclenché lorsqu'une touche correspondant à une [lettre, un chiffre, une ponctuation ou un symbole <sup>(angl.)</sup>](https://w3c.github.io/uievents/#unicode-character-categories) est enfoncée, ou lorsque la touche <kbd>Entrée</kbd> est enfoncée — y compris lorsque la touche <kbd>Entrée</kbd> est enfoncée en combinaison avec la touche <kbd>Maj</kbd> ou <kbd>Ctrl</kbd>. En revanche, lorsqu'une touche de modification telle que <kbd>Alt</kbd>, <kbd>Maj</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Échap</kbd> ou <kbd>Option</kbd> est enfoncée seule, l'évènement `keypress` n'est _pas_ déclenché.

> [!WARNING]
> Depuis que cet évènement est obsolète, vous devez utiliser {{DOMxRef("Element/beforeinput_event", "beforeinput")}} ou {{DOMxRef("Element/keydown_event", "keydown")}} à la place.

L'évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling). Il peut atteindre {{DOMxRef("Document")}} et {{DOMxRef("Window")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("keypress", (event) => { })

onkeypress = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("KeyboardEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Exemples

### Exemple avec `keypress` sur un `addEventListener`

Cet exemple affiche la valeur de {{DOMxRef("KeyboardEvent.code")}} à chaque fois qu'on appuie sur une touche après avoir cliqué dans l'élément HTML {{HTMLElement("input")}}.

Pour voir quelles touches déclenchent un évènement `keypress` et quelles touches ne le font pas, essayez d'appuyer sur les suivantes&nbsp;:

- les touches lettres, les touches chiffres et les touches de ponctuation
- les touches symboles telles que les touches <kbd>$</kbd>, <kbd>+</kbd>, <kbd>=</kbd>, <kbd>%</kbd> et <kbd>+</kbd>
- les touches de modification telles que les touches <kbd>Alt</kbd>, <kbd>Maj</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, <kbd>Échap</kbd>, <kbd>Option</kbd> ou <kbd>⌘</kbd>
- la touche <kbd>Entrée</kbd>
- la touche <kbd>Entrée</kbd> en combinaison avec les touches <kbd>Maj</kbd> ou <kbd>Ctrl</kbd>
- la touche <kbd>Entrée</kbd> en combinaison avec des touches de modification autres que les touches <kbd>Maj</kbd> ou <kbd>Ctrl</kbd>

```html
<div>
  <label for="exemple"
    >Sélectionnez le champ et tapez quelque chose&nbsp;:</label
  >
  <input type="text" name="text" id="exemple" />
</div>
<p id="journal"></p>
```

```js
const journal = document.getElementById("journal");
const entree = document.querySelector("input");

entree.addEventListener("keypress", journaliserCle);

function journaliserCle(e) {
  journal.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("Exemple avec `keypress` sur un `addEventListener`")}}

### Équivalent avec `onkeypress`

```js
entree.onkeypress = journaliserCle;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Document")}}, dont l'évènement cible également.
- Évènements associés&nbsp;:
  - {{DOMxRef("Element/input_event", "input")}}
  - {{DOMxRef("Element/keydown_event", "keydown")}}
  - {{DOMxRef("Element/keyup_event", "keyup")}}
