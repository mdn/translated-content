---
title: Navigation
slug: Web/API/Navigation
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

L'interface **`Navigation`** de {{DOMxRef("Navigation API", "l'API Navigation", "", "nocode")}} permet de contrôler toutes les actions de navigation pour la fenêtre (`window`) actuelle en un seul endroit central, y compris l'initiation de navigations de manière programmatique, l'examen des entrées de l'historique de navigation et la gestion des navigations au fur et à mesure qu'elles se produisent.

Elle est accessible par la propriété {{DOMxRef("Window.navigation")}}.

L'API Navigation n'expose que les entrées de l'historique créées dans le contexte de navigation actuel et ayant la même origine que la page actuelle (par exemple, pas les navigations à l'intérieur des {{HTMLElement("iframe")}} intégrés, ni les navigations inter-origines), fournissant une liste précise de toutes les entrées de l'historique précédentes uniquement pour votre application. Cela rend la traversée de l'historique beaucoup moins fragile que avec l'ancienne {{DOMxRef("History API", "API History", "", "nocode")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Navigation.activation", "activation")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NavigationActivation")}} contenant des informations sur la navigation inter-document la plus récente, qui a «&nbsp;activé&nbsp;» ce Document.
- {{DOMxRef("Navigation.canGoBack", "canGoBack")}} {{ReadOnlyInline}}
  - : Retourne `true` s'il est possible de naviguer en arrière dans l'historique de navigation (c'est-à-dire que la {{DOMxRef("Navigation.currentEntry", "currentEntry")}} n'est pas la première dans la liste des entrées de l'historique), et `false` dans le cas contraire.
- {{DOMxRef("Navigation.canGoForward", "canGoForward")}} {{ReadOnlyInline}}
  - : Retourne `true` s'il est possible de naviguer en avant dans l'historique de navigation (c'est-à-dire que la {{DOMxRef("Navigation.currentEntry", "currentEntry")}} n'est pas la dernière dans la liste des entrées de l'historique), et `false` dans le cas contraire.
- {{DOMxRef("Navigation.currentEntry", "currentEntry")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'emplacement vers lequel l'utilisateur·ice est actuellement navigué.
- {{DOMxRef("Navigation.transition", "transition")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NavigationTransition")}} représentant l'état d'une navigation en cours, qui peut être utilisé pour la suivre. Retourne `null` si aucune navigation n'est en cours.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Navigation.back", "back()")}}
  - : Navigue en arrière d'une entrée de l'historique de navigation.
- {{DOMxRef("Navigation.entries", "entries()")}}
  - : Retourne un tableau d'objets {{DOMxRef("NavigationHistoryEntry")}} représentant toutes les entrées de l'historique existantes.
- {{DOMxRef("Navigation.forward", "forward()")}}
  - : Navigue en avant d'une entrée de l'historique de navigation.
- {{DOMxRef("Navigation.navigate", "navigate()")}}
  - : Navigue vers une URL spécifique, en mettant à jour tout état fourni dans la liste des entrées de l'historique.
- {{DOMxRef("Navigation.reload", "reload()")}}
  - : Recharge l'URL actuelle, en mettant à jour tout état fourni dans la liste des entrées de l'historique.
- {{DOMxRef("Navigation.traverseTo", "traverseTo()")}}
  - : Navigue vers une {{DOMxRef("NavigationHistoryEntry")}} spécifique identifiée par {{DOMxRef("NavigationHistoryEntry.key", "key")}}.
- {{DOMxRef("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}
  - : Met à jour l'état de la {{DOMxRef("Navigation.currentEntry","currentEntry")}}&nbsp;; utilisé dans les cas où le changement d'état est indépendant d'une navigation ou d'un rechargement.

## Évènements

_Hérite des évènements de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Navigation/currententrychange_event", "currententrychange")}}
  - : Déclenché lorsque la propriété {{DOMxRef("Navigation.currentEntry")}} change.
- {{DOMxRef("Navigation/navigate_event", "navigate")}}
  - : Déclenché lorsque [tout type de navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#appendix-types-of-navigations) est initié, vous permettant d'intercepter si nécessaire.
- {{DOMxRef("Navigation/navigateerror_event", "navigateerror")}}
  - : Déclenché lorsque une navigation échoue.
- {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}}
  - : Déclenché lorsque une navigation réussie est terminée.

## Exemples

### Déplacer vers l'avant et vers l'arrière dans l'historique

```js
async function gestionEnArriere() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Gère tout nettoyage nécessaire après que
    // la navigation soit terminée
  } else {
    displayBanner("Vous êtes sur la première page");
  }
}

async function gestionEnAvant() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Gère tout nettoyage nécessaire après que
    // la navigation soit terminée
  } else {
    displayBanner("Vous êtes sur la dernière page");
  }
}
```

### Accéder à une entrée spécifique de l'historique

```js
// Au démarrage de JavaScript, récupérer l'identifiant de la première
// page chargée afin que l'utilisateur·ice puisse toujours y revenir.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Quittez la page, mais le bouton reste toujours fonctionnel.
await navigation.navigate("/another_url").finished;
```

### Naviguer et mettre à jour l'état

```js
navigation.navigate(url, { state: newState });
```

Ou

```js
navigation.reload({ state: newState });
```

Ou si l'état ne dépend pas d'une navigation ou d'un rechargement&nbsp;:

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
- [Démonstration en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démonstration <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api))
