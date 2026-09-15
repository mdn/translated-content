---
title: "NavigationHistoryEntry : propriété key"
short-title: key
slug: Web/API/NavigationHistoryEntry/key
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`key`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} retourne la clé (`key`) de l'entrée de l'historique, ou une chaîne de caractères vide si le document actuel n'est pas entièrement actif. Il s'agit d'une valeur unique générée par l'agent utilisateur qui représente l'emplacement de l'entrée dans la liste des entrées. Elle est utilisée pour naviguer vers cet emplacement particulier avec {{DOMxRef("Navigation.traverseTo()")}}. La clé (`key`) est réutilisée par d'autres entrées qui remplacent l'entrée dans la liste (c'est-à-dire si le {{DOMxRef("NavigateEvent.navigationType")}} est `replace`).

Cela diffère d'un {{DOMxRef("NavigationHistoryEntry.id", "id")}} d'une entrée de l'historique. Un `id` est une valeur unique générée par l'agent utilisateur qui représente toujours une entrée d'historique spécifique, plutôt que son emplacement dans la liste des entrées. C'est utile pour la corréler avec une ressource externe telle qu'un cache de stockage.

## Valeur

Une chaîne de caractères représentant la clé (`key`) de l'objet {{DOMxRef("NavigationHistoryEntry")}}.

## Exemples

### Utilisation simple

```js
const actuelle = navigation.currentEntry;
console.log(actuelle.key);
```

### Configurer un bouton d'accueil

```js
function initBoutonAccueil() {
  // Obtient la clé de la première entrée chargée
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
