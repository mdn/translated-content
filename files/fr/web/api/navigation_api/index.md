---
title: API Navigation
slug: Web/API/Navigation_API
l10n:
  sourceCommit: 9c27111e8c096a18881d96d15d6fd41558acf6e5
---

{{DefaultAPISidebar("Navigation API")}}

L'API **Navigation** fournit la possibilité d'initier, d'intercepter et de gérer les actions de navigation du navigateur. Elle peut également examiner les entrées de l'historique d'une application. Il s'agit d'un successeur des fonctionnalités précédentes de la plateforme web telles que {{DOMxRef("History API", "l'API History", "", "nocode")}} et {{DOMxRef("window.location")}}, qui résout leurs lacunes et est spécifiquement destiné aux besoins des {{Glossary("SPA", "applications à page unique (SPA)")}}.

## Concepts et utilisation

Dans les applications à page unique, le modèle de page a tendance à rester le même pendant l'utilisation, et le contenu est réécrit de manière dynamique au fur et à mesure que l'utilisateur·ice visite différentes pages ou fonctionnalités. En conséquence, une seule page distincte est chargée dans le navigateur, ce qui perturbe l'expérience utilisateur attendue de navigation avant et arrière entre différents emplacements dans l'historique de consultation. Ce problème peut être résolu dans une certaine mesure par {{DOMxRef("History API", "l'API History", "", "nocode")}}, mais elle n'est pas conçue pour les besoins des SPA. L'API Navigation vise à combler cette lacune.

L'API est accessible par la propriété {{DOMxRef("Window.navigation")}}, qui retourne une référence à un objet de {{DOMxRef("Navigation")}} global. Chaque objet `window` possède sa propre instance correspondante de `navigation`.

### Gérer les navigations

L'interface `navigation` possède plusieurs évènements associés, le plus notable étant l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}. Il est déclenché [lorsque tout type de navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#appendix-types-of-navigations) est initié, ce qui signifie que vous pouvez contrôler toutes les navigations de page à partir d'un endroit central, idéal pour la fonctionnalité de routage dans les cadriciels (<i lang="en">frameworks</i> en anglais) d'applications à page unique. (Ce n'est pas le cas avec {{DOMxRef("History API", "l'API History", "", "nocode")}}, où il est parfois difficile de détecter et de répondre à toutes les navigations.) Le gestionnaire de l'évènement `navigate` reçoit un objet {{DOMxRef("NavigateEvent")}}, qui contient des informations détaillées, y compris des détails sur la destination de la navigation, le type, si elle contient des données de formulaire `POST` ou une demande de téléchargement, et plus encore.

L'objet `NavigateEvent` fournit également deux méthodes&nbsp;:

- {{DOMxRef("NavigateEvent.intercept", "intercept()")}} vous permet de définir un comportement personnalisé pour les navigations, et peut prendre les arguments suivants&nbsp;:
  - Les fonctions de rappel de gestionnaire vous permettent de définir ce qui se passe à la fois _lorsque_ la navigation est validée et _juste avant_ que la navigation ne soit validée. Par exemple, vous pouvez charger un nouveau contenu pertinent dans l'interface utilisateur en fonction du chemin de l'URL vers laquelle la navigation est effectuée, ou rediriger le navigateur vers une page de connexion si l'URL pointe vers une page restreinte et que l'utilisateur·ice n'est pas connecté·e.
  - Des propriétés qui vous permettent d'activer ou de désactiver le comportement par défaut du navigateur en matière de sélection et de défilement après la navigation.
- {{DOMxRef("NavigateEvent.scroll", "scroll()")}} vous permet d'initier manuellement le comportement de défilement du navigateur (par exemple, vers un identifiant de fragment dans l'URL), si cela a du sens pour votre code, plutôt que d'attendre que le navigateur le gère automatiquement.

Une fois qu'une navigation est initiée et que votre gestionnaire `intercept()` est appelé, une instance d'objet {{DOMxRef("NavigationTransition")}} est créée (accessible avec {{DOMxRef("Navigation.transition")}}), qui peut être utilisée pour suivre le processus de la navigation en cours.

> [!NOTE]
> Dans ce contexte, le mot «&nbsp;transition&nbsp;» fait référence à la transition entre une entrée de l'historique et une autre. Elle n'est pas liée aux transitions CSS.

> [!NOTE]
> Vous pouvez également appeler {{DOMxRef("Event.preventDefault", "preventDefault()")}} pour arrêter complètement la navigation pour la plupart des [types de navigation](/fr/docs/Web/API/NavigateEvent/navigationType#valeur)&nbsp;; l'annulation des navigations de traversée n'est pas encore implémentée.

Lorsque les promesses retournées par les fonctions de gestionnaire `intercept()` se complètent, l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} de l'objet `Navigation` se déclenche, vous permettant d'exécuter du code de nettoyage après la réussite d'une navigation. Si elles rompent, ce qui signifie que la navigation a échoué, {{DOMxRef("Navigation/navigateerror_event", "navigateerror")}} se déclenche à la place, vous permettant de gérer gracieusement le cas d'échec. Il existe également une propriété `finished` sur la valeur de retour des méthodes de navigation (telles que {{DOMxRef("Navigation.navigate()")}}), qui se complète ou rompt en même temps que les évènements susmentionnés sont déclenchés, offrant un autre moyen de gérer les cas de réussite et d'échec.

> [!NOTE]
> Avant que l'API Navigation ne soit disponible, pour faire quelque chose de similaire, vous deviez écouter tous les évènements de clic sur les liens, exécuter `e.preventDefault()`, effectuer l'appel approprié à {{DOMxRef("History.pushState()")}}, puis configurer la vue de la page en fonction de la nouvelle URL. Et cela ne gérerait pas toutes les navigations — seulement les clics sur les liens initiés par l'utilisateur·ice.

### Mettre à jour et parcourir programmatiquement l'historique de navigation

À mesure que l'utilisateur·ice parcourt votre application, chaque nouvel emplacement vers lequel la navigation est effectuée entraîne la création d'une entrée de l'historique de navigation. Chaque entrée de l'historique est représentée par une instance d'objet {{DOMxRef("NavigationHistoryEntry")}} distincte. Ces objets contiennent plusieurs propriétés telles que la clé, l'URL et les informations d'état de l'entrée. Vous pouvez obtenir l'entrée sur laquelle l'utilisateur·ice se trouve actuellement avec {{DOMxRef("Navigation.currentEntry")}}, ainsi qu'un tableau de toutes les entrées existantes de l'historique avec {{DOMxRef("Navigation.entries()")}}. Chaque objet `NavigationHistoryEntry` possède un évènement {{DOMxRef("NavigationHistoryEntry/dispose_event", "dispose")}}, qui se déclenche lorsque l'entrée ne fait plus partie de l'historique du navigateur. Par exemple, si l'utilisateur·ice recule trois fois, puis avance vers un autre emplacement, ces trois entrées de l'historique sont libérées.

> [!NOTE]
> L'API Navigation expose uniquement les entrées de l'historique créées dans le contexte de navigation actuel et qui ont la même origine que la page actuelle (par exemple, pas les navigations dans des {{HTMLElement("iframe")}} intégrés ou les navigations inter-origine), ce qui fournit une liste exacte de toutes les entrées précédentes de l'historique uniquement pour votre application. Cela rend le parcours de l'historique beaucoup moins fragile qu'avec l'ancienne {{DOMxRef("History API", "API History", "", "nocode")}}.

L'objet `Navigation` contient toutes les méthodes dont vous avez besoin pour mettre à jour et parcourir l'historique de navigation&nbsp;:

- {{DOMxRef("Navigation.navigate", "navigate()")}}
  - : Navigue vers une nouvelle URL et crée une nouvelle entrée dans l'historique de navigation.
- {{DOMxRef("Navigation.reload", "reload()")}}
  - : Recharge l'entrée actuelle de l'historique de navigation.
- {{DOMxRef("Navigation.back", "back()")}}
  - : Navigue vers l'entrée précédente de l'historique de navigation, si cela est possible.
- {{DOMxRef("Navigation.forward", "forward()")}}
  - : Navigue vers l'entrée suivante de l'historique de navigation, si cela est possible.
- {{DOMxRef("Navigation.traverseTo", "traverseTo()")}}
  - : Navigue vers une entrée précise de l'historique de navigation identifiée par sa valeur de clé, obtenue avec la propriété {{DOMxRef("NavigationHistoryEntry.key")}} de l'entrée concernée.

Chacune des méthodes ci-dessus retourne un objet contenant deux promesses — `{ committed, finished }`. Cela permet à la fonction appelante d'attendre avant d'effectuer une action supplémentaire jusqu'à ce que&nbsp;:

- `committed` se complète, ce qui signifie que l'URL visible a changé et qu'une nouvelle entrée {{DOMxRef("NavigationHistoryEntry")}} a été créée.
- `finished` se complète, ce qui signifie que toutes les promesses retournées par votre gestionnaire `intercept()` se complètent. Cela équivaut à ce que la promesse {{DOMxRef("NavigationTransition.finished")}} se complète, lorsque l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche, comme indiqué précédemment.
- l'une des promesses ci-dessus rompt, ce qui signifie que la navigation échoue pour une raison quelconque.

### L'état

L'API Navigation vous permet de stocker un état dans chaque entrée de l'historique. Il s'agit d'informations définies par le développeur·euse, qui peuvent être quelconques. Par exemple, vous pouvez vouloir stocker une propriété `visitCount` qui enregistre le nombre de visites d'une vue, ou un objet contenant plusieurs propriétés liées à l'état de l'interface utilisateur, afin que l'état puisse être restauré lorsqu'un utilisateur·ice revient à cette vue.

Pour obtenir l'état d'une entrée {{DOMxRef("NavigationHistoryEntry")}}, vous appelez sa méthode {{DOMxRef("NavigationHistoryEntry.getState", "getState()")}}. Il vaut initialement `undefined`, mais lorsque des informations d'état sont définies sur l'entrée, il retourne les informations d'état définies précédemment.

La définition de l'état est un peu plus nuancée. Vous ne pouvez pas récupérer la valeur de l'état puis la mettre à jour directement, car la copie stockée sur l'entrée ne change pas. Vous la mettez plutôt à jour lors de l'exécution de {{DOMxRef("Navigation.navigate", "navigate()")}} ou de {{DOMxRef("Navigation.reload", "reload()")}}. Chacune de ces méthodes accepte éventuellement un paramètre objet d'options, qui contient une propriété `state` avec le nouvel état à définir sur l'entrée de l'historique. Lorsque ces navigations sont validées, la modification de l'état est automatiquement appliquée.

Dans certains cas cependant, une modification d'état est indépendante d'une navigation ou d'un rechargement, par exemple lorsqu'une page contient un élément {{HTMLElement("details")}} dépliable/repliable. Dans ce cas, vous pouvez vouloir stocker l'état déplié/replié dans votre entrée d'historique, afin de pouvoir le restaurer lorsque l'utilisateur·ice revient sur la page ou redémarre son navigateur. Les cas de ce type sont gérés avec {{DOMxRef("Navigation.updateCurrentEntry()")}}. L'évènement {{DOMxRef("Navigation/currententrychange_event", "currententrychange")}} se déclenche lorsque la modification de l'entrée actuelle est terminée.

### Limitations

L'API Navigation présente quelques limitations apparentes&nbsp;:

1. La spécification actuelle ne déclenche pas d'évènement {{DOMxRef("Navigation.navigate_event", "navigate")}} lors du premier chargement d'une page. Cela peut convenir aux sites qui utilisent le rendu côté serveur (<abbr lang="en" title="Server-Side Rendering">SSR</abbr>), car votre serveur peut retourner l'état initial correct, ce qui constitue le moyen le plus rapide de fournir du contenu à vos utilisateur·ice·s. Cependant, les sites qui utilisent du code côté client pour créer leurs pages peuvent avoir besoin d'une fonction supplémentaire pour initialiser la page.
2. L'API Navigation fonctionne uniquement dans une seule trame, c'est-à-dire la page de niveau supérieur ou un cadre intégré ({{HTMLElement("iframe")}}) précis. Cela entraîne certaines conséquences intéressantes qui sont [documentées plus en détail dans la spécification <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#warning-backforward-are-not-always-opposites), mais qui réduisent en pratique la confusion des développeur·euse·s. L'ancienne {{DOMxRef("History API", "API History", "", "nocode")}} comporte plusieurs cas limites déroutants, comme la prise en charge des trames, que l'API Navigation gère dès le départ.
3. Vous ne pouvez actuellement pas utiliser l'API Navigation pour modifier ou réorganiser programmatiquement la liste de l'historique. Il peut être utile de disposer d'un état temporaire, par exemple en naviguant vers une fenêtre temporaire qui demande des informations à l'utilisateur·ice, puis en revenant à l'URL précédente. Dans ce cas, vous voulez supprimer l'entrée de navigation temporaire afin que l'utilisateur·ice ne puisse pas perturber le flux de l'application en utilisant le bouton d'avance et en l'ouvrant à nouveau.

## Interfaces

- {{DOMxRef("NavigateEvent")}}
  - : Objet évènement de l'évènement {{DOMxRef("Navigation/navigate_event", "navigate")}}, qui se déclenche [lorsqu'un type quelconque de navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#appendix-types-of-navigations) est initié. Il donne accès aux informations de cette navigation, notamment à {{DOMxRef("NavigateEvent.intercept", "intercept()")}}, qui vous permet de contrôler ce qui se passe lorsque la navigation est initiée.
- {{DOMxRef("Navigation")}}
  - : Permet de contrôler toutes les actions de navigation de la fenêtre `window` actuelle depuis un emplacement central, notamment d'initier des navigations programmatiquement, d'examiner les entrées de l'historique de navigation et de gérer les navigations au moment où elles se produisent.
- {{DOMxRef("NavigationActivation")}}
  - : Représente une navigation inter-document récente. Elle contient le type de navigation ainsi que les entrées d'historique du document actuel et du document de destination.
- {{DOMxRef("NavigationCurrentEntryChangeEvent")}}
  - : L'objet évènement de l'évènement {{DOMxRef("Navigation/currententrychange_event", "currententrychange")}}, qui se déclenche lorsque {{DOMxRef("Navigation.currentEntry")}} a changé. Il donne accès au type de navigation et à l'entrée précédente de l'historique depuis laquelle la navigation a été effectuée.
- {{DOMxRef("NavigationDestination")}}
  - : Représente la destination vers laquelle la navigation actuelle est effectuée.
- {{DOMxRef("NavigationHistoryEntry")}}
  - : Représente une entrée unique de l'historique de navigation.
- {{DOMxRef("NavigationPrecommitController")}}
  - : Définit le comportement de redirection d'un gestionnaire de pré-validation de navigation, lorsqu'il est transmis à la fonction de rappel [`precommitHandler`](/fr/docs/Web/API/NavigateEvent/intercept#precommithandler) lors d'un appel de méthode {{DOMxRef("NavigateEvent.intercept()")}}.
- {{DOMxRef("NavigationTransition")}}
  - : Représente une navigation en cours.

## Extensions aux autres interfaces

- {{DOMxRef("Window.navigation")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("Navigation")}} associé à la fenêtre `window` actuelle. Il s'agit du point d'entrée de l'API Navigation.

## Exemples

> [!NOTE]
> Consultez la [démonstration en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démo <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api)).

### Gérer une navigation en utilisant `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Nous ne pouvons pas intercepter certaines navigations, par exemple
  // les navigations inter-origines.
  // Retourne prématurément et laisse le navigateur les gérer normalement.
  if (!event.canIntercept) {
    return;
  }

  // Nous devons éviter d'intercepter les navigations par fragment ou les téléchargements.
  if (event.hashChange || event.downloadRequest !== null) {
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

        // Récupérez le nouveau contenu et affichez-le lorsqu'il est prêt
        const contenuArticle = await obtenirContenuArticle(url.pathname);
        rendrePageArticle(contenuArticle);
      },
    });
  }
});
```

### Gérer le défilement avec `scroll()`

Dans cet exemple d'interception d'une navigation, la fonction `handler()` commence par récupérer et rendre le contenu d'un article, puis récupère et rend ensuite un contenu secondaire. Il est logique de faire défiler la page jusqu'au contenu principal de l'article dès qu'il est disponible afin que l'utilisateur·ice puisse interagir avec lui, plutôt que d'attendre que le contenu secondaire soit également rendu. Pour ce faire, nous avons ajouté un appel à {{DOMxRef("NavigateEvent.scroll", "scroll()")}} entre les deux.

```js
navigation.addEventListener("navigate", (event) => {
  // Retourne prématurément si nous ne pouvons pas/devons pas intercepter
  if (
    !event.canIntercept ||
    event.hashChange ||
    event.downloadRequest !== null
  ) {
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

### Naviguer vers une entrée spécifique de l'historique

```js
// Au démarrage de JS, obtient la clé de la première page chargée
// afin que l'utilisateur·ice puisse toujours y revenir.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigue ailleurs, mais le bouton fonctionne toujours.
await navigation.navigate("/another_url").finished;
```

### Mettre à jour l'état

```js
navigation.navigate(url, { state: newState });
```

Ou

```js
navigation.reload({ state: newState });
```

Ou si l'état est indépendant d'une navigation ou d'un rechargement&nbsp;:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
