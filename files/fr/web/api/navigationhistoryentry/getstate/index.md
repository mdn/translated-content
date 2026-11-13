---
title: "NavigationHistoryEntry : méthode getState()"
short-title: getState()
slug: Web/API/NavigationHistoryEntry/getState
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La méthode **`getState()`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} retourne un clone de l'état fourni par le·la développeur·euse associé à cette entrée de l'historique.

## Syntaxe

```js-nolint
getState()
```

### Paramètres

Aucun.

### Valeur de retour

Une valeur représentant l'état. Il peut s'agir de n'importe quel type de données [structuré et clonable](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Si aucun état n'est défini ou si le document actuel n'est pas entièrement actif, elle retourne `undefined`.

### Exceptions

Aucune.

## Exemples

```js
async function handleReload() {
  // Met à jour l'état existant avec reload()
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  });

  // Affiche l'état actuel dans la console
  const current = navigation.currentEntry;
  console.log(current.getState());
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
- Les méthodes qui permettent de mettre à jour l'état — {{DOMxRef("Navigation.navigate()")}}, {{DOMxRef("Navigation.reload()")}} et {{DOMxRef("Navigation.updateCurrentEntry()")}}
