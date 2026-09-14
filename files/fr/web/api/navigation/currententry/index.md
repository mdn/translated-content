---
title: "Navigation : propriété currentEntry"
short-title: currentEntry
slug: Web/API/Navigation/currentEntry
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`currentEntry`** de l'interface {{DOMxRef("Navigation")}} retourne un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'emplacement vers lequel l'utilisateur·ice navigue actuellement.

## Valeur

Un objet {{DOMxRef("NavigationHistoryEntry")}}.

## Exemples

```js
function initBoutonAccueil() {
  // Récupère la clé de la première entrée chargée
  // afin que l'utilisateur·ice puisse toujours revenir à cette vue.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercepte les évènements de navigation, tels que les clics sur les
// liens, et les remplace par des navigations sur une seule page
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigue vers une vue différente,
      // mais le bouton « accueil » fonctionne toujours.
    },
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
