---
title: "NavigationHistoryEntry : propriété id"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`id`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} retourne un `id` de l'entrée de l'historique, ou une chaîne de caractères vide si le document actuel n'est pas entièrement actif. Il s'agit d'une valeur unique générée par l'agent utilisateur qui représente toujours une entrée d'historique spécifique, utile pour la corréler avec une ressource externe telle qu'un cache de stockage.

Cela diffère de la {{DOMxRef("NavigationHistoryEntry.key", "key")}} d'une entrée de l'historique. La `key` est une valeur unique générée par l'agent utilisateur qui représente l'emplacement de l'entrée dans la liste des entrées plutôt que l'entrée elle-même. Elle est utilisée pour naviguer vers cet emplacement particulier avec {{DOMxRef("Navigation.traverseTo()")}}. La `key` est réutilisée par d'autres entrées qui remplacent l'entrée dans la liste (c'est-à-dire si le {{DOMxRef("NavigateEvent.navigationType")}} est `replace`).

## Valeur

Une chaîne de caractères représentant un `id` d'un objet {{DOMxRef("NavigationHistoryEntry")}}.

## Exemples

```js
const current = navigation.currentEntry;
console.log(current.id);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
