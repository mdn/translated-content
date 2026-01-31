---
title: "HTMLElement : évènement command"
short-title: command
slug: Web/API/HTMLElement/command_event
l10n:
  sourceCommit: 4819e24c1df3522f49350f6146689a3ce37af4cf
---

{{APIRef("Invoker Commands API")}}

L'évènement **`command`** de l'interface {{DOMxRef("HTMLElement")}} est déclenché sur un élément contrôlé via un {{DOMxRef("HTMLButtonElement", "button")}} disposant de valeurs valides pour {{DOMxRef("HTMLButtonElement.commandForElement", "commandForElement")}} et {{DOMxRef("HTMLButtonElement.command", "command")}}, chaque fois que le bouton est actionné (par exemple lorsqu'il est cliqué).

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("command", (event) => { })

oncommand = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("CommandEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("CommandEvent")}}

## Exemples

### Exemple simple

```js
const fenetreContextuelle = document.getElementById("mafenetre");

// …

fenetreContextuelle.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("La fenêtre contextuelle est sur le point d'être affichée");
  }
});
```

### Transmission et annulation d'évènements

Il convient de noter que les évènements `command` se déclenchent sur l'élément invoqué. Si le bouton est cliqué, il déclenche d'abord un évènement `click` qui, s'il est annulé, empêche ensuite le déclenchement de l'évènement `command` et l'exécution du comportement par défaut.
Outre l'annulation de l'évènement `click` sur le bouton, il est aussi possible d'annuler l'évènement `command`.

Par exemple&nbsp;:

```js
button.addEventListener("click", (event) => {
  event.preventDefault(); // l'évènement `command` ne sera jamais déclenché
});
```

```js
element.addEventListener("command", (event) => {
  event.preventDefault(); // l'évènement `command` se déclenche mais le comportement par défaut est annulé
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Invoker Commands API", "L'API Invoker Commands", "", "nocode")}}
- La propriété {{DOMxRef("HTMLButtonElement.command")}}
- La propriété {{DOMxRef("HTMLButtonElement.commandForElement")}}
