---
title: "NavigationPrecommitController : méthode addHandler()"
short-title: addHandler()
slug: Web/API/NavigationPrecommitController/addHandler
l10n:
  sourceCommit: d1755079dbc4d1fb68c4bda0cf999fdf618e234a
---

{{APIRef("Navigation API")}}

La méthode **`addHandler()`** de l'interface {{DOMxRef("NavigationPrecommitController")}} permet d'ajouter dynamiquement une fonction de rappel de gestionnaire dans le code de pré-validation, qui est ensuite exécutée après que la navigation a été validée.

Cela est utile lorsque le flux de navigation dépend d'informations qui ne sont pas connues avant que le code de pré-validation ne commence à s'exécuter.
Si le gestionnaire de pré-validation et le gestionnaire (post-validation) sont indépendants, le gestionnaire peut être défini dans l'argument [`options.handler`](/fr/docs/Web/API/NavigateEvent/intercept#handler) passé à {{DOMxRef("NavigateEvent.intercept()")}}.

## Syntaxe

```js-nolint
addHandler(handler);
```

### Paramètres

- `handler`
  - : Une fonction de rappel qui définit le comportement de gestion de la navigation post-validation&nbsp;; elle retourne une promesse.

    La fonction de rappel du gestionnaire est invoquée comme si elle est passée à la méthode `NavigateEvent.intercept()`, et s'exécute après que la propriété {{DOMxRef("Navigation.currentEntry", "currentEntry")}} a été mise à jour.

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - Un objet {{DOMxRef("NavigateEvent")}} d'origine n'a pas été intercepté ou a été annulé.
    - Un objet {{DOMxRef("Document")}} n'est pas entièrement actif.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si l'attribut {{DOMxRef("Event/isTrusted","isTrusted")}} de l'évènement est `false`.

## Exemples

Pour plus d'exemples, voir {{DOMxRef("NavigationPrecommitController")}}.

### Utilisation simple

Cet exemple montre une implémentation de `gestionPreValidation` qui récupère des données pour une page et utilise `addHandler()` pour ajouter différents gestionnaires en fonction du type de page (les implémentations de `recupererConfig`, `configurerLecteurVideo()` et `configurerAffichageArticle()` ne sont pas fournies).

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async gestionPreValidation(controleur) {
      const pageData = await recupererConfig();
      if (pageData.type === "video") {
        controleur.addHandler(() => configurerLecteurVideo());
      } else {
        controleur.addHandler(() => configurerAffichageArticle());
      }
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
