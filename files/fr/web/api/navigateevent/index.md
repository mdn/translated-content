---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

L'interface **`NavigateEvent`** de {{DOMxRef("Navigation API", "l'API Navigation", "", "nocode")}} est l'objet évènement pour l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}, qui se déclenche [lorsqu'un type quelconque de navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#appendix-types-of-navigations) est initié (cela inclut l'utilisation des fonctionnalités de la {{DOMxRef("History API", "History API", "", "nocode")}} comme {{DOMxRef("History.go()")}}). `NavigateEvent` fournit un accès aux informations sur cette navigation et permet aux développeur·euse·s d'intercepter et de contrôler la gestion de la navigation.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("NavigateEvent.NavigateEvent", "NavigateEvent()")}}
  - : Crée une nouvelle instance de l'objet `NavigateEvent`.

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("NavigateEvent.canIntercept", "canIntercept")}} {{ReadOnlyInline}}
  - : Retourne `true` si la navigation peut être interceptée, ou sinon `false` (par exemple, vous ne pouvez pas intercepter une navigation inter-origine).
- {{DOMxRef("NavigateEvent.destination", "destination")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NavigationDestination")}} représentant la destination vers laquelle la navigation est effectuée.
- {{DOMxRef("NavigateEvent.downloadRequest", "downloadRequest")}} {{ReadOnlyInline}}
  - : Retourne le nom du fichier demandé pour téléchargement, dans le cas d'une navigation de téléchargement (par exemple, un élément HTML {{HTMLElement("a")}} ou {{HTMLElement("area")}} avec un attribut `download`), ou sinon `null`.
- {{DOMxRef("NavigateEvent.formData", "formData")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("FormData")}} représentant les données envoyées dans le cas d'un envoi de formulaire `POST`, ou sinon `null`.
- {{DOMxRef("NavigateEvent.hashChange", "hashChange")}} {{ReadOnlyInline}}
  - : Retourne `true` si la navigation est une navigation vers un fragment (c'est-à-dire vers un identifiant de fragment dans le même document), ou sinon `false`.
- {{DOMxRef("NavigateEvent.hasUAVisualTransition", "hasUAVisualTransition")}} {{ReadOnlyInline}}
  - : Retourne `true` si l'agent utilisateur a effectué une transition visuelle pour cette navigation avant de déclencher cet évènement, ou sinon `false`.
- {{DOMxRef("NavigateEvent.info", "info")}} {{ReadOnlyInline}}
  - : Retourne la valeur des données `info` transmises par l'opération de navigation initiatrice (par exemple, {{DOMxRef("Navigation.back()")}}, ou {{DOMxRef("Navigation.navigate()")}}), ou `undefined` si aucune donnée `info` n'a été transmise.
- {{DOMxRef("NavigateEvent.navigationType", "navigationType")}} {{ReadOnlyInline}}
  - : Retourne le type de la navigation — `push`, `reload`, `replace` ou `traverse`.
- {{DOMxRef("NavigateEvent.signal", "signal")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("AbortSignal")}}, qui est annulé si la navigation est annulée (par exemple, si l'utilisateur·ice appuie sur le bouton «&nbsp;Arrêter&nbsp;» du navigateur, ou si une autre navigation commence et annule ainsi celle en cours).
- {{DOMxRef("NavigateEvent.sourceElement", "sourceElement")}} {{ReadOnlyInline}}
  - : Lorsque la navigation a été initiée par un élément (par exemple en cliquant sur un lien), retourne un objet {{DOMxRef("Element")}} représentant l'élément initiateur.
- {{DOMxRef("NavigateEvent.userInitiated", "userInitiated")}} {{ReadOnlyInline}}
  - : Retourne `true` si la navigation a été initiée par l'utilisateur·ice (par exemple, en cliquant sur un lien, en envoyant un formulaire ou en appuyant sur les boutons «&nbsp;Précédent&nbsp;»/«&nbsp;Suivant&nbsp;» du navigateur), ou sinon `false`.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("NavigateEvent.intercept", "intercept()")}}
  - : Intercepte cette navigation, la transformant en une navigation dans le même document vers l'URL {{DOMxRef("NavigationDestination.url", "destination")}}. Elle peut accepter des fonctions gestionnaires qui définissent le comportement de gestion de la navigation, ainsi que les options `focusReset` et `scroll` pour activer ou désactiver le comportement par défaut de mise au point et de défilement du navigateur selon les besoins.
- {{DOMxRef("NavigateEvent.scroll", "scroll()")}}
  - : Peut être appelée pour déclencher manuellement le comportement de défilement piloté par le navigateur qui se produit en réponse à la navigation, si vous souhaitez qu'il se produise avant que la gestion de la navigation ne soit terminée.

## Exemples

### Gérer une navigation en utilisant `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Quitte prématurément si cette navigation ne doit pas être interceptée,
  // par exemple, si la navigation est inter-origine, ou une requête de téléchargement
  if (shouldNotIntercept(event)) return;

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // L'URL a déjà changé, donc afficher un espace réservé pendant
        // la récupération du nouveau contenu, comme un indicateur de
        // chargement ou une page de chargement
        rendreEspaceReserveArticle();

        // Récupère le nouveau contenu et l'afficher lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
      },
    });
  }
});
```

> [!NOTE]
> Avant que l'API Navigation ne soit disponible, pour faire quelque chose de similaire, il fallait écouter tous les évènements de clic sur les liens, exécuter `e.preventDefault()`, effectuer l'appel approprié à {{DOMxRef("History.pushState()")}}, puis configurer la vue de la page en fonction de la nouvelle URL. Et cela ne gérerait pas toutes les navigations — seulement les clics sur les liens initiés par l'utilisateur·ice.

### Gérer le défilement avec `scroll()`

Dans cet exemple d'interception d'une navigation, la fonction `handler()` commence par récupérer et afficher le contenu d'un article, puis récupère et affiche un contenu secondaire par la suite. Il est logique de faire défiler la page jusqu'au contenu principal de l'article dès qu'il est disponible afin que l'utilisateur·ice puisse interagir avec lui, plutôt que d'attendre que le contenu secondaire soit également rendu. Pour ce faire, nous avons ajouté un appel à {{DOMxRef("NavigateEvent.scroll", "scroll()")}} entre les deux.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(event)) return;
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
- [Démonstration en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démonstration <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api))
