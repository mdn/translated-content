---
title: "NavigateEvent : propriété destination"
short-title: destination
slug: Web/API/NavigateEvent/destination
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`destination`** de l'interface {{DOMxRef("NavigateEvent")}} retourne un objet {{DOMxRef("NavigationDestination")}} représentant la destination vers laquelle la navigation est effectuée.

## Valeur

Un objet {{DOMxRef("NavigationDestination")}}.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  // Quitte prématurément si cette navigation ne doit pas être interceptée,
  // par exemple si la navigation est inter-origines ou une requête de téléchargement
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // L'URL a déjà changé, donc affichez un espace réservé pendant
        // la récupération du nouveau contenu, comme un indicateur de
        // chargement ou une page de chargement
        rendreEspaceReserveArticle();

        // Récupère le nouveau contenu et l'affiche lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
      },
    });
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
