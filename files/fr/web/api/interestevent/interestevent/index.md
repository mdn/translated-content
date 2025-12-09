---
title: "InterestEvent : constructeur InterestEvent()"
short-title: InterestEvent()
slug: Web/API/InterestEvent/InterestEvent
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("Popover API")}}

Le constructeur **`InterestEvent()`** crée un nouvel objet {{DOMxRef("InterestEvent")}}.

## Syntaxe

```js-nolint
new InterestEvent(type, init)
```

### Paramètres

- `type`
  - : Une chaîne indiquant le type d'événement. Pour `InterestEvent`, il s'agit toujours de `interest` ou `loseinterest`.
- `init` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `source` {{Optional_Inline}}
      - : Un objet {{DOMxRef("Element")}} représentant l'élément invocateur d'intérêt sur lequel l'intérêt a été montré ou perdu.

## Exemples

Normalement, vous n'utiliserez pas ce constructeur manuellement. Un nouvel objet `InterestEvent` est construit lorsqu'un gestionnaire est invoqué suite au déclenchement d'un événement pertinent.

Voir le guide [Utilisation des invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) et la page de référence de l'événement {{DOMxRef("HTMLElement.interest_event", "interest")}} pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utilisation des invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
