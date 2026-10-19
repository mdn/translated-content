---
title: "NavigateEvent : méthode intercept()"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

La méthode **`intercept()`** de l'interface {{DOMxRef("NavigateEvent")}} intercepte cette navigation, la transformant en une navigation dans le même document vers l'URL de la {{DOMxRef("NavigationDestination.url", "destination")}}.

## Syntaxe

```js-nolint
intercept()
intercept(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options contenant les propriétés suivantes&nbsp;:
    - `handler` {{Optional_Inline}}
      - : Une fonction de rappel qui définit le comportement de gestion de la navigation&nbsp;; elle retourne une promesse. Cette fonction s'exécute après que la propriété {{DOMxRef("Navigation.currentEntry", "currentEntry")}} a été mise à jour.
    - `precommitHandler` {{Optional_Inline}}
      - : Une fonction de rappel qui définit tout comportement devant se produire juste avant que la navigation ne soit validée&nbsp;; elle accepte un objet {{DOMxRef("NavigationPrecommitController")}} en argument et retourne une promesse. Cette fonction s'exécute avant que la propriété {{DOMxRef("Navigation.currentEntry", "currentEntry")}} ait été mise à jour.
    - `focusReset` {{Optional_Inline}}
      - : Définit le comportement de mise au point de la navigation. Cela peut prendre l'une des valeurs suivantes&nbsp;:
        - `after-transition`
          - : Une fois que la promesse retournée par votre fonction de gestion est résolue, le navigateur met la sélection sur le premier élément avec l'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus), ou sur l'élément HTML {{HTMLElement("body")}} si aucun élément n'a `autofocus` défini. C'est la valeur par défaut.
        - `manual`
          - : Désactive le comportement par défaut.
    - `scroll` {{Optional_Inline}}
      - : Définit le comportement de défilement de la navigation. Cela peut prendre l'une des valeurs suivantes&nbsp;:
        - `after-transition`
          - : Permet au navigateur de gérer le défilement, par exemple en défilant jusqu'à l'identifiant de fragment pertinent si l'URL contient un fragment, ou en restaurant la position de défilement au même endroit que la dernière fois si la page est rechargée ou si une page de l'historique est revisitée. C'est la valeur par défaut.
        - `manual`
          - : Désactive le comportement par défaut.

### Valeur de retour

Aucune (`undefined`).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'objet {{DOMxRef("Document")}} actuel n'est pas encore actif, ou si la navigation a été annulée.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - L'évènement a été déclenché par un appel à {{DOMxRef("EventTarget.dispatchEvent", "dispatchEvent()")}}, plutôt que par l'agent utilisateur.
    - La navigation ne peut pas être interceptée ({{DOMxRef("NavigateEvent.canIntercept")}} est `false`).
    - Un rappel `precommitHandler()` est fourni sur un évènement non annulable ({{DOMxRef("Event.cancelable")}} est `false`).

## Description

La méthode `intercept()` est utilisée pour implémenter le comportement de navigation dans le même document (SPA) lorsqu'une navigation se produit&nbsp;; par exemple, lorsqu'un lien est cliqué, qu'un formulaire est envoyé ou qu'une navigation programmée est initiée (en utilisant {{DOMxRef("History.pushState()")}}, {{DOMxRef("Window.location")}}, etc.).

Cela se fait avec un couple de différentes fonctions de rappel, `handler()` et `precommitHandler()`.

### Gérer les navigations immédiates avec `handler()`

La fonction de rappel `handler()` est exécutée en réponse à une navigation confirmée. Elle s'exécute après que la propriété {{DOMxRef("Navigation.currentEntry", "currentEntry")}} a été mise à jour, ce qui signifie qu'une nouvelle URL est affichée dans l'interface utilisateur du navigateur et que l'historique est mis à jour avec une nouvelle entrée.

Un exemple typique ressemble à ceci, permettant à un contenu spécifique d'être rendu et chargé en réponse à une certaine navigation&nbsp;:

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Récupère le nouveau contenu et l'affiche lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
      },
    });
  }

  // Inclure plusieurs conditions pour différents types de pages ici, si nécessaire
});
```

`handler()` doit être utilisé pour implémenter le comportement de navigation lorsque la navigation est confirmée&nbsp;: l'utilisateur·ice doit voir quelque chose de nouveau.

### Gérer les actions avant validation avec `precommitHandler()`

Cependant, vous pouvez également souhaiter modifier ou annuler une navigation en cours, ou effectuer un travail pendant que la navigation est en cours et avant qu'elle ne soit validée. Ce genre de scénario peut être géré à l'aide du rappel `precommitHandler()`, qui s'exécute avant que la propriété {{DOMxRef("Navigation.currentEntry", "currentEntry")}} ne soit mise à jour et que l'interface utilisateur du navigateur n'affiche le nouvel emplacement.

Par exemple, si l'utilisateur·ice navigue vers une page restreinte et n'est pas connecté·e, vous pouvez vouloir rediriger le navigateur vers une page de connexion. Cela peut être géré comme suit&nbsp;:

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async precommitHandler(controller) {
        controller.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });
      },
    });
  }
});
```

Ce motif est plus simple que l'alternative consistant à annuler la navigation originale et à en démarrer une nouvelle vers l'emplacement de redirection, car il évite d'exposer l'état intermédiaire. Par exemple, un seul évènement {{DOMxRef("Navigation.navigatesuccess_event", "navigatesuccess")}} ou {{DOMxRef("Navigation.navigateerror_event", "navigateerror")}} se déclenche, et si la navigation a été déclenchée par un appel à {{DOMxRef("Navigation.navigate()")}}, la promesse ne se complète qu'une fois la destination de redirection atteinte.

La fonction de rappel `precommitHandler()` prend un objet {{DOMxRef("NavigationPrecommitController")}} comme argument, qui contient une méthode {{DOMxRef("NavigationPrecommitController.redirect", "redirect()")}}. La méthode `redirect()` prend deux paramètres — une chaîne de caractères représentant l'URL vers laquelle rediriger, et un objet d'options facultatif qui peut définir l'état et le comportement de l'historique.

`precommitHandler()` gère généralement toutes les modifications du comportement de navigation qui sont nécessaires avant que l'URL de destination ne soit réellement affichée dans le navigateur, en l'annulant ou en la redirigeant ailleurs si nécessaire.

> [!NOTE]
> Comme `precommitHandler()` peut être utilisé pour annuler les navigations, il ne fonctionne comme prévu que lorsque la propriété {{DOMxRef("Event.cancelable")}} de l'évènement est `true`. Appeler `intercept()` avec un `precommitHandler()` sur un évènement qui n'est pas annulable entraîne le déclenchement d'une `SecurityError`.

### Planifier les actions d'après validation dans `precommitHandler()`

Comme nous l'avons vu ci-dessus, vous pouvez définir un rappel `handler()` dans l'objet passé à la méthode `intercept()` afin d'exécuter des actions après qu'une navigation a été validée.
Cette approche fonctionne bien si les actions requises après la validation ne dépendent d'aucune action exécutée dans la phase de pré-validation.
Si c'est le cas, vous pouvez utiliser {{DOMxRef("NavigationPrecommitController.addHandler()")}} dans `precommitHandler()` pour ajouter dynamiquement un gestionnaire qui s'exécute après la validation de la navigation.

Par exemple, considérez ce code qui étend l'exemple précédent pour rediriger un·e utilisateur·ice déconnecté vers une page de connexion.
Le code utilise `addHandler()` pour ajouter un rappel de gestionnaire d'après validation qui affiche un message expliquant la raison de la redirection.
Notez que le gestionnaire ne s'exécute que dans le cas spécifique d'une redirection vers la page de connexion.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async precommitHandler(controller) {
        controller.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });

        // Utilise addHandler pour déclencher la logique une fois que la page /signin/ est validée
        controller.addHandler(() => {
          showMessage("Please sign in to view that content.");
        });
      },
    });
  }
});
```

### Répondre au succès ou à l'échec de la navigation

Lorsque les promesses retournées par les fonctions de gestionnaire `intercept()` complètent, l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} de l'objet `Navigation` se déclenche, vous permettant d'exécuter du code de nettoyage après la réussite d'une navigation. Si ces promesses rompent, ce qui signifie que la navigation a échoué, l'évènement {{DOMxRef("Navigation/navigateerror_event", "navigateerror")}} se déclenche à la place, vous permettant de gérer gracieusement le cas d'échec.

Il existe également une propriété `finished` sur la valeur de retour des méthodes de navigation (telles que {{DOMxRef("Navigation.navigate()")}}), qui complète ou rompt en même temps que les évènements susmentionnés sont déclenchés, offrant une autre voie pour gérer les cas de succès et d'échec.

### Interaction entre `precommitHandler()` et `handler()`

Les deux fonctions de rappel `precommitHandler()` et `handler()` peuvent être incluses dans le même appel `intercept()`. Dans ce cas, l'ordre des opérations est le suivant&nbsp;:

1. Tout d'abord, le gestionnaire `precommitHandler()` s'exécute.
   - Lorsque la promesse `precommitHandler()` complète, la navigation est validée.
   - Si la promesse `precommitHandler()` rompt, l'évènement `navigateerror` se déclenche, les promesses `committed` et `finished` rompent, et la navigation est annulée.

2. Lorsque la navigation est validée, une nouvelle {{DOMxRef("NavigationHistoryEntry")}} est créée pour la navigation, et sa promesse `committed` se complète.

3. Ensuite, la promesse `handler()` s'exécute.
   - Lorsque la promesse `handler()` se complète et que l'évènement `navigatesuccess` se déclenche, la promesse `finished` de la navigation se complète également, pour indiquer que la navigation est terminée.
   - Si la promesse `handler()` rompt, l'évènement `navigateerror` se déclenche, la promesse `finished` rompt, et la navigation est annulée.

Notez que le processus ci-dessus est respecté même à travers plusieurs appels à `intercept()` sur le même `NavigateEvent`, et pour les rappels `handler()` ajoutés dans le `precommitHandler()`.
Tous les rappels `precommitHandler()` sont appelés en premier, et lorsque tous se résolvent, la navigation est validée, et tous les rappels `handler()` sont appelés.

### Contrôler le comportement de sélection

Par défaut, après qu'une navigation gérée à l'aide de `intercept()` a eu lieu, la sélection du document est réinitialisée sur le premier élément du DOM avec un attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) défini, ou sinon sur l'élément {{HTMLElement("body")}}, si aucun attribut `autofocus` n'est défini. Si vous souhaitez remplacer ce comportement, pour implémenter manuellement une position de la sélection plus accessible lors de la navigation (par exemple, le nouveau titre de niveau supérieur), vous pouvez le faire en définissant l'option `focusReset` sur `manual`.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      focusReset: manual,
      async handler() {
        // Récupère le nouveau contenu et l'affiche lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
        // Gère la sélection de la page avec une fonction personnalisée
        setPageFocus();
      },
    });
  }
});
```

### Contrôler le comportement de défilement

Après qu'une navigation `intercept()` a été effectuée, le comportement de défilement suivant se produit&nbsp;:

- Pour les navigations `push` et `replace` (voir {{DOMxRef("Navigation.navigate()")}}), le navigateur tente de faire défiler jusqu'au fragment donné par `event.destination.url`. S'il n'y a pas de fragment disponible, il réinitialise la position de défilement en haut de la page.
- Pour les navigations {{DOMxRef("Navigation.traverseTo", "traverse")}} et {{DOMxRef("Navigation.reload", "reload")}}, le comportement est similaire à celui des navigations `push` et `replace`, mais le navigateur retarde sa logique de restauration du défilement jusqu'à ce que la promesse `intercept()` soit complétée. Aucune restauration du défilement n'est effectuée si la promesse est rompue. Si l'utilisateur·ice a fait défiler pendant la transition, aucune restauration du défilement n'est effectuée.

Si vous souhaitez désactiver ce comportement, vous pouvez le faire en définissant l'option `scroll` sur `manual`.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      scroll: manual,
      async handler() {
        // Récupère le nouveau contenu et l'affiche lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
        // Gère le comportement de défilement avec une fonction personnalisée
        setScroll();
      },
    });
  }
});
```

Si vous voulez déclencher manuellement le comportement de défilement par défaut décrit précédemment (peut-être que vous voulez réinitialiser la position de défilement en haut de la page avant que la navigation complète ne soit terminée), vous pouvez le faire en appelant {{DOMxRef("NavigateEvent.scroll()")}}.

## Exemples

### Gérer une navigation en utilisant `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Quitte prématurément si cette navigation ne doit pas être interceptée,
  // par exemple si la navigation est inter-origines, ou une requête de téléchargement
  if (shouldNotIntercept(event)) return;

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // L'URL a déjà changé, donc affiche un espace réservé pendant
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

### Utiliser `focusReset` et `scroll`

L'envoi de formulaire peut être détecté en interrogeant la propriété {{DOMxRef("NavigateEvent.formData")}}. L'exemple suivant transforme tout envoi de formulaire en un envoi qui reste sur la page actuelle. Dans ce cas, vous ne mettez pas à jour le DOM, vous pouvez donc annuler tout comportement de réinitialisation et de défilement par défaut en utilisant `focusReset` et `scroll`.

```js
navigation.addEventListener("navigate", (event) => {
  if (event.formData && event.canIntercept) {
    // L'utilisateur·ice a envoyé un formulaire POST vers une URL du même
    // domaine (Si canIntercept est false, l'évènement est juste
    // informatif : vous ne pouvez pas intercepter cette requête, bien
    // que vous puissiez probablement toujours appeler .preventDefault()
    // pour l'arrêter complètement).

    event.intercept({
      // Comme nous ne mettons pas à jour le DOM dans cette navigation,
      // n'autorisez pas la réinitialisation de la sélection ou du défilement :
      focusReset: "manual",
      scroll: "manual",
      async handler() {
        await fetch(event.destination.url, {
          method: "POST",
          body: event.formData,
        });
        // Vous pouvez ensuite naviguer à nouveau avec {history: 'replace'}
        // pour changer l'URL ici, ce qui peut indiquer « done »
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
