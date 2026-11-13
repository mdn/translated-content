---
title: "NavigationDestination : méthode getState()"
short-title: getState()
slug: Web/API/NavigationDestination/getState
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`getState()`** de l'interface {{DOMxRef("NavigationDestination")}} retourne une copie de l'état fourni par le·la développeur·euse associé à la destination {{DOMxRef("NavigationHistoryEntry")}}, ou à l'opération de navigation (par exemple, {{DOMxRef("Navigation.navigate()", "navigate()")}}) selon le cas.

## Syntaxe

```js-nolint
getState()
```

### Paramètres

Aucun.

### Valeur de retour

Une valeur représentant l'état. Cela peut être de n'importe quel type.

Si aucun état n'est défini, elle retourne `undefined`.

### Exceptions

Aucune.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.getState());
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
- Les méthodes qui permettent de mettre à jour l'état — {{DOMxRef("Navigation.navigate()")}}, {{DOMxRef("Navigation.reload()")}} et {{DOMxRef("Navigation.updateCurrentEntry()")}}
