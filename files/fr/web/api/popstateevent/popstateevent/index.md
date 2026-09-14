---
title: "PopStateEvent : constructeur PopStateEvent()"
short-title: PopStateEvent()
slug: Web/API/PopStateEvent/PopStateEvent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("History API")}}

Le constructeur **`PopStateEvent()`** crée un nouvel objet {{DOMxRef("PopStateEvent")}}.

> [!NOTE]
> En général, un·e développeur·euse web n'a pas besoin d'appeler ce constructeur, car le navigateur crée ces objets lui-même lors du déclenchement des évènements {{DOMxRef("Window/popstate_event", "popstate")}}.

## Syntaxe

```js-nolint
new PopStateEvent(type, options)
```

### Paramètres

- `type`
  - : Une chaîne de caractères avec le nom de l'évènement.
    Il est sensible à la casse et les navigateurs le définissent sur `popstate`.
- `options` {{Optional_Inline}}
  - : Un objet qui, _en plus des propriétés définies dans {{DOMxRef("Event/Event", "Event()")}}_, possède la propriété suivante&nbsp;:
    - `state` {{Optional_Inline}}
      - : Un objet représentant l'état. En pratique, il s'agit d'une valeur fournie par l'appel à {{DOMxRef("history.pushState()")}} ou {{DOMxRef("history.replaceState()")}}. Si elle n'est pas définie, elle prend par défaut la valeur `null`.

### Valeur de retour

Un nouvel objet {{DOMxRef("PopStateEvent")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("history.pushState()")}}
- La méthode {{DOMxRef("history.replaceState()")}}
- L'évènement {{DOMxRef("Window/popstate_event", "popstate")}}
