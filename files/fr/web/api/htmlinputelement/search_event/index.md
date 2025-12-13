---
title: "HTMLInputElement : évènement search"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

L'évènement **`search`** de l'interface {{DOMxRef("HTMLInputElement")}} est déclenché lorsqu'une recherche est lancée à l'aide d'un élément HTML {{HTMLElement("input")}} de `type="search"`.

Il existe plusieurs façons d'initier une recherche, par exemple en appuyant sur <kbd>Entrée</kbd> lorsque l'élément {{HTMLElement("input")}} a le focus, ou, si l'attribut [`incremental`](/fr/docs/Web/HTML/Reference/Elements/input#incremental) est présent, après un délai défini par l'agent utilisateur écoulé depuis la dernière frappe (les nouvelles frappes réinitialisant le délai, de sorte que le déclenchement de l'évènement {{Glossary("debounce", "empêche le rebond")}}).

Les implémentations des agents utilisateurs actuelles de `<input type="search">` disposent d'un contrôle supplémentaire pour effacer le champ. L'utilisation de ce contrôle déclenche également l'évènement `search`. Dans ce cas la propriété `value` de l'élément {{HTMLElement("input")}} sera la chaîne vide.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez un gestionnaire d'évènements à la propriété correspondante.

```js-nolint
addEventListener("search", (event) => { })

onsearch = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
// version addEventListener
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  console.log(`Terme recherché : ${input.value}`);
});
```

```js
// version onsearch
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
  console.log(`Terme recherché : ${input.value}`);
};
```

## Spécifications

Cet évènement ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
