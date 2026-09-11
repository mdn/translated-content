---
title: "NavigateEvent : propriété hasUAVisualTransition"
short-title: hasUAVisualTransition
slug: Web/API/NavigateEvent/hasUAVisualTransition
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`hasUAVisualTransition`** de l'interface {{DOMxRef("NavigateEvent")}} retourne `true` si l'agent utilisateur a effectué une transition visuelle pour cette navigation avant de déclencher cet évènement, ou sinon `false`.

Les agents utilisateurs peuvent fournir une transition visuelle intégrée lors de l'exécution des navigations sur le site. Si l'auteur·ice du site ajoute également une transition visuelle, les transitions de l'agent utilisateur et de l'auteur·ice peuvent entrer en conflit et perturber un·e visiteur·euse. La propriété permet de détecter si une transition de l'agent utilisateur a été fournie afin de pouvoir ignorer les transitions de l'auteur·ice pour une meilleure expérience utilisateur·ice.

## Valeur

Une valeur booléenne.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  // Certaines navigations, par exemple les navigations inter-origines,
  // ne peuvent pas être interceptées. Laissez le navigateur les gérer normalement.
  if (!event.canIntercept) {
    return;
  }

  // N'intercepte pas les navigations par fragment ou les téléchargements.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    async handler() {
      // Récupère le nouveau contenu
      const newContent = await fetchNewContent(event.destination.url, {
        signal: event.signal,
      });

      // L'agent utilisateur ne prend pas en charge les transitions de
      // vue, ou l'agent utilisateur a déjà fourni une transition
      // visuelle par lui-même (par exemple, retour par balayage).
      // Dans les deux cas, mettez à jour le DOM directement
      if (!document.startViewTransition || event.hasUAVisualTransition) {
        doSinglePageAppNav(newContent);
        return;
      }

      // Met à jour le contenu en utilisant une transition de vue
      document.startViewTransition(() => {
        doSinglePageAppNav(newContent);
      });
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
- [Transitions de vue dans le même document pour les applications à page unique <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
