---
title: "NavigateEvent : méthode scroll()"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

La méthode **`scroll()`** de l'interface {{DOMxRef("NavigateEvent")}} peut être appelée pour déclencher manuellement le comportement de défilement piloté par le navigateur qui se produit en réponse à la navigation, si vous souhaitez qu'il se produise avant que le traitement de la navigation ne soit terminé.

## Syntaxe

```js-nolint
scroll()
```

### Paramètres

Aucun.

### Valeur de retour

Aucun (`undefined`).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'objet {{DOMxRef("Document")}} actuel n'est pas encore actif, ou si la navigation a été annulée.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si l'évènement a été déclenché par un appel à {{DOMxRef("EventTarget.dispatchEvent", "dispatchEvent()")}}, plutôt que par l'agent utilisateur.

## Exemples

### Gérer le défilement avec `scroll()`

Dans cet exemple d'interception d'une navigation, la fonction `handler()` commence par récupérer et rendre le contenu d'un article, puis récupère et rend ensuite un contenu secondaire. Il est logique de faire défiler la page jusqu'au contenu principal de l'article dès qu'il est disponible afin que l'utilisateur·ice puisse interagir avec lui, plutôt que d'attendre que le contenu secondaire soit également rendu. Pour ce faire, nous avons ajouté un appel à `scroll()` entre les deux.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(navigateEvent)) {
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
