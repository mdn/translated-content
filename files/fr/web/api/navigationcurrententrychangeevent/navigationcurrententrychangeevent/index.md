---
title: "NavigationCurrentEntryChangeEvent : constructeur NavigationCurrentEntryChangeEvent()"
short-title: NavigationCurrentEntryChangeEvent()
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Le constructeur **`NavigationCurrentEntryChangeEvent()`** crée un nouvel objet {{DOMxRef("NavigationCurrentEntryChangeEvent")}}.

## Syntaxe

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### Paramètres

- `type`
  - : Une chaîne de caractères représentant le type d'évènement.
- `init`
  - : Un objet qui, _en plus des propriétés définies dans {{DOMxRef("Event/Event", "Event()")}}_, possède les propriétés suivantes&nbsp;:
    - `from`
      - : Un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'emplacement vers lequel la navigation a été effectuée.
    - `navigationType` {{Optional_Inline}}
      - : Le type de la navigation qui a entraîné le changement. Les valeurs possibles sont `push`, `reload`, `replace` et `traverse`. Par défaut, `null`.

### Valeur de retour

Un nouvel objet {{DOMxRef("NavigationCurrentEntryChangeEvent")}}.

## Exemples

Un·e développeur·euse n'utilise pas ce constructeur manuellement. Un nouvel objet `NavigationCurrentEntryChangeEvent` est construit lorsqu'un gestionnaire est invoqué à la suite du déclenchement de l'évènement {{DOMxRef("Navigation.currententrychange_event", "currententrychange")}}.

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
