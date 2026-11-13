---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

L'interface **`NavigationPrecommitController`** de {{DOMxRef("Navigation API", "l'API Navigation", "", "nocode")}} est passée en tant qu'argument à une fonction de rappel de [gestionnaire de pré-validation](/fr/docs/Web/API/NavigateEvent/intercept#precommithandler) de navigation.

La fonction de rappel est utilisée pour gérer toutes les modifications de la navigation qui sont nécessaires avant qu'elle ne soit validée (et que l'URL de destination ne soit effectivement affichée dans le navigateur), comme l'annulation ou la redirection vers un autre endroit si nécessaire.
Cette interface fournit des méthodes pour rediriger vers une nouvelle URL et mettre à jour l'historique et l'état, ainsi que pour configurer dynamiquement le comportement de navigation après validation.

{{InheritanceDiagram}}

## Méthodes d'instance

- {{DOMxRef("NavigationPrecommitController/addHandler", "addHandler()")}}
  - : Ajoute une fonction de rappel de gestionnaire qui est exécutée après la validation de la navigation, comme si elle est ajoutée à {{DOMxRef("NavigateEvent.intercept()")}} en utilisant l'argument [`options.handler`](/fr/docs/Web/API/NavigateEvent/intercept#handler).
- {{DOMxRef("NavigationPrecommitController.redirect", "redirect()")}}
  - : Redirige le navigateur vers une URL définie et précise le comportement de l'historique ainsi que toute information d'état souhaitée.

## Description

Lors de la spécification du comportement de navigation dans le même document avec la méthode {{DOMxRef("NavigateEvent.intercept()")}}, il est possible de définir des actions de pré-validation de la navigation avec la fonction de rappel [`precommitHandler`](/fr/docs/Web/API/NavigateEvent/intercept#precommithandler). Les actions de pré-validation sont utilisées pour modifier ou annuler une navigation en cours, ou pour effectuer un travail pendant que la navigation est en cours et avant qu'elle ne soit validée (voir [Exemple de navigation de pré-validation de base](#exemple_simple_de_pré-validation_de_la_navigation)).

Pour définir le comportement de redirection, vous utilisez l'objet `NavigationPrecommitController` qui est passé à votre fonction de rappel `precommitHandler`.
À l'intérieur du corps de la fonction, vous pouvez appeler la méthode `NavigationPrecommitController.redirect()`, qui prend comme argument un objet contenant l'URL de redirection, ainsi que tout comportement d'historique et information d'état requis.

Après qu'une navigation est validée, une fonction de rappel de gestionnaire post-validation peut être exécutée afin d'effectuer des opérations telles que la récupération et le rendu de contenu.
Si le code de navigation post-validation dépend des données recueillies à l'exécution dans votre `precommitHandler`, vous pouvez appeler la {{DOMxRef("NavigationPrecommitController/addHandler", "addHandler()")}} dans votre gestionnaire de pré-validation pour ajouter dynamiquement cette fonction de rappel de gestionnaire post-validation.
Notez que si le code post-validation est indépendant du code de pré-validation, vous pouvez plutôt passer la fonction de rappel [`handler`](/fr/docs/Web/API/NavigateEvent/intercept#handler) à la méthode {{DOMxRef("NavigateEvent.intercept()")}}.

Voir la [description de `intercept()`](/fr/docs/Web/API/NavigateEvent/intercept#description) pour un contexte supplémentaire.

## Exemples

### Exemple simple de pré-validation de la navigation

L'extrait suivant montre comment vous redirigez le navigateur vers une page de connexion si l'utilisateur·ice navigue vers une page restreinte et n'est pas connecté.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async gestionPreValidation(controleur) {
        controleur.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });
      },
    });
  }
});
```

Ce schéma est plus simple que l'alternative consistant à annuler la navigation originale et à en démarrer une nouvelle vers l'emplacement de redirection, car il évite d'exposer l'état intermédiaire. Par exemple, un seul évènement {{DOMxRef("Navigation.navigatesuccess_event", "navigatesuccess")}} ou {{DOMxRef("Navigation.navigateerror_event", "navigateerror")}} se déclenche, et si la navigation a été déclenchée par un appel à {{DOMxRef("Navigation.navigate()")}}, la promesse ne se complète qu'une fois que la destination de redirection est atteinte.

### Ajouter un gestionnaire conditionnel au comportement de pré-validation

Il s'agit d'une petite modification de l'exemple précédent qui affiche également un message à l'utilisateur·ice indiquant la raison pour laquelle il·elle s'est retrouvé·e sur la page de connexion après la redirection.
Cela utilise `addHandler()` dans le gestionnaire de pré-validation pour ajouter le gestionnaire post-validation qui affiche le message.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async gestionPreValidation(controleur) {
        controleur.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });

        // Utilise addHandler pour déclencher la logique une fois que la
        // page /signin/ est validée
        controleur.addHandler(() => {
          showMessage("Veuillez vous connecter pour voir ce contenu.");
        });
      },
    });
  }
});
```

L'un des avantages de cette approche est que le gestionnaire ne s'exécute que si la redirection est validée.
Le gestionnaire est exécuté pour tous les évènements s'il est ajouté en passant [`options.handler`](/fr/docs/Web/API/NavigateEvent/intercept) à `intercept()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
