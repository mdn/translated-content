---
title: NavigationDestination
slug: Web/API/NavigationDestination
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

L'interface **`NavigationDestination`** de {{DOMxRef("Navigation API", "l'API Navigation", "", "nocode")}} représente la destination vers laquelle la navigation est en cours dans la navigation actuelle.

Elle est accessible avec la propriété {{DOMxRef("NavigateEvent.destination")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

- {{DOMxRef("NavigationDestination.id", "id")}} {{ReadOnlyInline}}
  - : Retourne la valeur {{DOMxRef("NavigationHistoryEntry.id", "id")}} de la destination {{DOMxRef("NavigationHistoryEntry")}} si le {{DOMxRef("NavigateEvent.navigationType")}} est `traverse`, sinon une chaîne de caractères vide.
- {{DOMxRef("NavigationDestination.index", "index")}} {{ReadOnlyInline}}
  - : Retourne la valeur {{DOMxRef("NavigationHistoryEntry.index", "index")}} de la destination {{DOMxRef("NavigationHistoryEntry")}} si le {{DOMxRef("NavigateEvent.navigationType")}} est `traverse`, sinon `-1`.
- {{DOMxRef("NavigationDestination.key", "key")}} {{ReadOnlyInline}}
  - : Retourne la valeur {{DOMxRef("NavigationHistoryEntry.key", "key")}} de la destination {{DOMxRef("NavigationHistoryEntry")}} si le {{DOMxRef("NavigateEvent.navigationType")}} est `traverse`, sinon une chaîne de caractères vide.
- {{DOMxRef("NavigationDestination.sameDocument", "sameDocument")}} {{ReadOnlyInline}}
  - : Retourne `true` si la navigation se fait vers le même `document` que la valeur actuelle de {{DOMxRef("Document")}}, sinon `false`.
- {{DOMxRef("NavigationDestination.url", "url")}} {{ReadOnlyInline}}
  - : Retourne l'URL vers laquelle la navigation est en cours.

## Méthodes d'instance

- {{DOMxRef("NavigationDestination.getState", "getState()")}}
  - : Retourne une copie de l'état disponible associé à la destination {{DOMxRef("NavigationHistoryEntry")}}, ou à l'opération de navigation (par exemple, {{DOMxRef("Navigation.navigate()", "navigate()")}}) selon le cas.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  // Quitte prématurément si cette navigation ne doit pas être
  // interceptée, par exemple, si la navigation est inter-origine, ou une
  // requête de téléchargement
  if (nePasIntercepter(event)) {
    return;
  }

  // Retourne un objet URL() construit à partir de la
  // valeur NavigationDestination.url
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // L'URL a déjà changé, donc affiche un espace réservé pendant
        // la récupération du nouveau contenu, comme un spinner ou une
        // page de chargement
        rendreEspaceReserveArticle();

        // Récupère le nouveau contenu et l'affiche lorsqu'il est prêt
        const contenuArticle = await getArticleContent(url.pathname);
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
- [Démonstration en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démonstration <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api))
