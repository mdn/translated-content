---
title: "Window : évènement pagereveal"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

L'évènement **`pagereveal`** est émis lorsqu'un document est rendu pour la première fois, soit lors du chargement d'un nouveau document depuis le réseau, soit lors de l'activation d'un document (soit depuis le [cache avant/arrière](/fr/docs/Glossary/bfcache) (bfcache), soit depuis le [prérendu](/fr/docs/Glossary/Prerender)).

Cela est utile dans le cas des [transitions de vue](/fr/docs/Web/API/View_Transition_API) entre documents (MPA) pour manipuler une transition active depuis la page entrante d'une navigation. Par exemple, vous pourriez vouloir ignorer la transition ou personnaliser l'animation de la transition entrante via JavaScript.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pagereveal", (event) => { })

onpagereveal = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PageRevealEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PageRevealEvent")}}

## Propriétés de l'évènement

- {{DOMxRef("PageRevealEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("ViewTransition")}} représentant la transition de vue entre documents entrante, si une transition est active lorsque l'évènement est déclenché. Sinon, il retourne `null`.

## Exemples

```js
window.addEventListener("pagereveal", async (e) => {
  // Si l'entrée d'historique "from" n'existe pas, retourner
  if (!navigation.activation.from) return;

  // Ne s'exécute que si une transition de vue active existe
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Passage de la page de profil à la page d'accueil
    // ~> Définir les noms VT sur l'élément de liste pertinent
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Définir les valeurs de view-transition-name sur les éléments à animer
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Supprimer les noms après que les instantanés ont été pris
      // afin d'être prêt pour la prochaine navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Passage à la page de profil
    // ~> Définir les noms VT sur le titre principal et l'image
    if (isProfilePage(currentUrl)) {
      // Définir les valeurs de view-transition-name sur les éléments à animer
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Supprimer les noms après que les instantanés ont été pris
      // afin d'être prêt pour la prochaine navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Voir la [liste des membres de l'équipe Chrome DevRel <sup>(angl.)</sup>](https://view-transitions.chrome.dev/profiles/mpa/) pour la démo en direct dont ce code est extrait.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API de transition de vue](/fr/docs/Web/API/View_Transition_API/Using)
- L'évènement {{DOMxRef("Window.pageswap_event", "pageswap")}}
