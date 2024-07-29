---
title: "ToggleEvent : le constructeur ToggleEvent()"
slug: Web/API/ToggleEvent/ToggleEvent
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("Popover API")}}

Le constructeur **`ToggleEvent()`** crée un nouvel objet [`ToggleEvent`](/fr/docs/Web/API/ToggleEvent).

## Syntaxe

```js-nolint
new ToggleEvent(type, init)
```

### Paramètres

- `type`
  - : Une chaîne de caractères représentant le type d'évènement. Dans le cas de `ToggleEvent`, il s'agit toujours de `"toggleevent"`.
- `init`
  - : Un objet contenant les propriétés suivantes&nbsp;:
    - `newState`
      - : Une chaîne de caractères représentant l'état vers lequel l'élément est en train de transitionner. Les valeurs possibles sont `"open"` et `"closed"`.
    - `oldState`
      - : Une chaîne de caractères représentant l'état depuis lequel l'élément est en train de transitionner. Les valeurs possibles sont `"open"` et `"closed"`.

## Exemples

Ce constructeur ne devrait généralement pas être utilisé manuellement dans un script. Un nouvel objet `ToggleEvent` est construit automatiquement lorsqu'un gestionnaire est invoqué à la suite du déclenchement d'un évènement pertinent.

Par exemple&nbsp;:

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Le popover est en train d'être affiché");
  } else {
    console.log("Le popover est en train d'être masqué");
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
