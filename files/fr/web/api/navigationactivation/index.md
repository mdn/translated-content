---
title: NavigationActivation
slug: Web/API/NavigationActivation
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

L'interface **`NavigationActivation`** de [l'API Navigation](/fr/docs/Web/API/Navigation_API) représente une navigation inter-documents récente. Elle contient le type de navigation ainsi que les entrées d'historique des documents sortants et entrants.

Cet objet est accessible par les propriétés {{DOMxRef("PageSwapEvent.activation")}} et {{DOMxRef("Navigation.activation")}}. Notez que, dans chaque cas, le `NavigationActivation` représente une navigation différente&nbsp;:

- `Navigation.activation` représente des informations sur la navigation vers la page actuelle.
- `PageSwapEvent.activation` représente des informations sur la navigation vers la page suivante.

## Propriétés d'instance

- {{DOMxRef("NavigationActivation.entry", "entry")}} {{ReadOnlyInline}}
  - : Contient un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'entrée d'historique pour le document entrant («&nbsp;to&nbsp;») dans la navigation. Cela équivaut à la propriété {{DOMxRef("Navigation.currentEntry")}} au moment où le document entrant a été activé.
- {{DOMxRef("NavigationActivation.from", "from")}} {{ReadOnlyInline}}
  - : Contient un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'entrée d'historique pour le document sortant («&nbsp;from&nbsp;») dans la navigation.
- {{DOMxRef("NavigationActivation.navigationType", "navigationType")}} {{ReadOnlyInline}}
  - : Contient une chaîne de caractères indiquant le type de navigation.

## Exemples

```js
window.addEventListener("pagereveal", async (e) => {
  // Si l'entrée d'historique « from » n'existe pas, retourner
  if (!navigation.activation.from) return;

  // Ne s'exécute que si une transition de vue active existe
  if (e.viewTransition) {
    const depuisUrl = new URL(navigation.activation.from.url);
    const urlActuelle = new URL(navigation.activation.entry.url);

    // Passage de la page de profil à la page d'accueil
    // ~> Définir les noms VT sur l'élément de liste pertinent
    if (estPageProfil(depuisUrl) && estPageAccueil(urlActuelle)) {
      const profil = extraireNomProfilDepuisUrl(depuisUrl);

      // Définit les valeurs view-transition-name sur les éléments à animer
      document.querySelector(`#${profil} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profil} img`).style.viewTransitionName =
        "avatar";

      // Supprime les noms après que les instantanés ont été pris
      // afin d'être prêt pour la navigation suivante
      await e.viewTransition.ready;
      document.querySelector(`#${profil} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profil} img`).style.viewTransitionName =
        "none";
    }

    // Passage à la page de profil
    // ~> Définit les noms VT sur le titre principal et l'image
    if (estPageProfil(urlActuelle)) {
      // Définit les valeurs view-transition-name sur les éléments à animer
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Supprime les noms après que les instantanés ont été pris
      // afin d'être prêt pour la navigation suivante
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
> Voir la [Liste des membres de l'équipe Chrome DevRel <sup>(angl.)</sup>](https://view-transitions.chrome.dev/profiles/mpa/) pour la démonstration en direct dont ce code est tiré.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Navigation](/fr/docs/Web/API/Navigation_API)
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
