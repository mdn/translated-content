---
title: "Window : évènement pageswap"
short-title: pageswap
slug: Web/API/Window/pageswap_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

L'évènement **`pageswap`** de l'interface {{DOMxRef("Window")}} est émis lorsque vous naviguez entre des documents, lorsque le document précédent est sur le point de se décharger.

Cela est utile dans le cas des [transitions de vue](/fr/docs/Web/API/View_Transition_API) entre documents (<abbr title="Monopage Application" lang="en">MPA</abbr>) pour manipuler une transition active depuis la page sortante d'une navigation. Par exemple, vous pouvez souhaiter ignorer la transition ou personnaliser l'animation de la transition sortante via JavaScript.

Il fournit également un accès au type de navigation et aux entrées d'historique des documents actuels et de destination.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pageswap", (event) => { })

onpageswap = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PageSwapEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PageSwapEvent")}}

## Propriétés de l'évènement

- {{DOMxRef("PageSwapEvent.activation")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NavigationActivation")}} contenant le type de navigation et les entrées d'historique des documents actuels et de destination pour une navigation de même origine. Si la navigation comporte une URL cross-origin dans la chaîne de redirection, elle retourne `null`.
- {{DOMxRef("PageSwapEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("ViewTransition")}} représentant la transition de vue inter-documents entrante, si une transition est active lorsque l'évènement est déclenché. Sinon, elle retourne `null`.

## Exemples

```js
window.addEventListener("pageswap", async (e) => {
  // Ne s'exécute que si une transition de vue active existe
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Aller de la page de profil à la page d'accueil
    // ~> L'image et le titre principaux sont ceux à animer
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Définir les valeurs de view-transition-name sur les éléments à animer
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Supprimer les noms de transition de vue après la prise des instantanés
      // Évite les conflits de noms résultant de la persistance de l'état de la page dans le BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Aller à la page de profil
    // ~> Les éléments cliqués sont ceux à animer
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Définir les valeurs de view-transition-name sur les éléments à animer
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Supprimer les noms de transition de vue après la prise des instantanés
      // Évite les conflits de noms résultant de la persistance de l'état de la page dans le BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Voir [Liste des membres de l'équipe Chrome DevRel <sup>(angl.)</sup>](https://view-transitions.chrome.dev/profiles/mpa/) pour la démo en direct dont ce code est extrait.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API de transition de vue](/fr/docs/Web/API/View_Transition_API/Using)
- L'évènement {{DOMxRef("Window.pagereveal_event", "pagereveal")}}
