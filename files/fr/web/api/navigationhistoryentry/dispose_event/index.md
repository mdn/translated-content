---
title: "NavigationHistoryEntry : évènement dispose"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Navigation API")}}

L'évènement **`dispose`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} est déclenché lorsque l'entrée ne fait plus partie de la liste des entrées de l'historique.

La suppression se produit lorsque&nbsp;:

- Les entrées de l'historique futur sont supprimées. Voir l'exemple à [Notifications sur la suppression d'une entrée <sup>(angl.)</sup>](https://github.com/wicg/navigation-api#notifications-on-entry-disposal) pour plus d'informations.
- L'utilisateur·ice efface son historique de navigation à l'aide des paramètres ou des contrôles d'interface utilisateur fournis.
- La limite de l'historique est dépassée. Cela n'est défini nulle part, mais les navigateurs ont tendance à avoir une limite d'historique de 50 pages.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("dispose", (event) => { })

ondispose = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", disposeHandler);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
