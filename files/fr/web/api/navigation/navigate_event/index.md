---
title: "Navigation : évènement navigate"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

L'évènement **`navigate`** de l'interface {{DOMxRef("Navigation")}} est déclenché [lorsqu'un type de navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#appendix-types-of-navigations) est initié, vous permettant de l'intercepter si nécessaire.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("navigate", (event) => { })

onnavigate = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("NavigateEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("NavigateEvent")}}

## Exemples

### Gérer une navigation en utilisant `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Quitte prématurément si cette navigation ne doit pas être interceptée,
  // par exemple si la navigation est inter-origine, ou une requête de téléchargement
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

> [!NOTE]
> Avant que l'API Navigation ne soit disponible, pour faire quelque chose de similaire, vous deviez écouter tous les clics sur les liens, exécuter `event.preventDefault()`, effectuer l'appel approprié à {{DOMxRef("History.pushState()")}}, puis configurer la vue de la page en fonction de la nouvelle URL. Et cela ne gérerait pas toutes les navigations — seulement les clics sur les liens initiés par l'utilisateur·ice.

### Gérer le défilement en utilisant `scroll()`

Dans cet exemple d'interception d'une navigation, la fonction `handler()` commence par récupérer et afficher le contenu d'un article, puis récupère et affiche un contenu secondaire par la suite. Il est logique de faire défiler la page jusqu'au contenu principal de l'article dès qu'il est disponible afin que l'utilisateur·ice puisse interagir avec lui, plutôt que d'attendre que le contenu secondaire soit également rendu. Pour ce faire, nous avons ajouté un appel à {{DOMxRef("NavigateEvent.scroll", "scroll()")}} entre les deux.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(event)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);

        event.scroll();

        const contenuSecondaire = await obtenirContenuSecondaire(url.pathname);
        ajouterContenuSecondaire(contenuSecondaire);
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
