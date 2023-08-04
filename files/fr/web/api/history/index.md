---
title: History
slug: Web/API/History
---

{{APIRef}}

L'interface **`History`** permet de manipuler l'historique de navigation du navigateur, soit la liste des pages visitées au sein de l'onglet ou fenêtre ou cadre dans lequelle la page actuelle est ouverte.

## Propriétés

_L'interface `History` n'hérite d'aucune propriété._

- {{domxref("History.length")}} {{readOnlyInline}}
  - : Retourne un `Integer` représentant le nombre d'élements dans l'historique de la session, y incluant la page actullement ouverte. Par exemple, pour une page chargée dans un nouvel onglet cette propriété retourne `1`.
- {{domxref("History.current")}} {{readOnlyInline}} {{ non-standard_inline() }} {{deprecated_inline}}
  - : Retourne un {{domxref("DOMString")}} de l'URL active dans l'historique de navigation. Cette propriété n'a jamais été rendu disponible au contenu web ni supporté par aucun autre navigateur. Utilisez plutôt {{domxref("Location.href")}}.
- {{domxref("History.next")}} {{readOnlyInline}} {{ non-standard_inline() }} {{deprecated_inline}}
  - : Retourne un {{domxref("DOMString")}} de l'URL suivante dans l'historique de navigation. Cette propriété n'a jamais été rendu disponible au contenu web ni supporté par aucun autre navigateur.
- {{domxref("History.previous")}} {{readOnlyInline}} {{ non-standard_inline() }} {{deprecated_inline}}
  - : Retourne un {{domxref("DOMString")}} de l'URL précédente dans l'historique de navigation.
- {{domxref("History.state")}} {{readOnlyInline}}
  - : Retourne une value `any` représentant l'état le plus haut de l'historique de navigation. C'est une manière de vérifier cet état sans avoir à attendre un évenement [`popstate`](/fr/docs/Web/API/Window/popstate_event).

## Méthodes

_L'interface `History`_ _n'hérite d'aucune méthode._

- {{domxref("History.back()")}}

  - : Recule vers la page précédente dans l'historique de navigation, soit la même action que lorsque l'utilsateur clique le bouton Précédent du navigateur. Equivalent de `history.go(-1)`.

    > **Note :** Appeler cette méthode pour reculer plus loin que la première page de l'historique de navigation n'a aucun effet et ne déclenche pas d'exception.

- {{domxref("History.forward()")}}

  - : Avance vers la page suivante dans l'historique de navigation, soit la même action que lorsque l'utilsateur clique le bouton Suivant du navigateur. Equivalent de `history.go(1)`.

    > **Note :** Appeler cette méthode pour avancer plus loin que la page la plus récente de l'historique de navigation n'a aucun effet et ne déclenche pas d'exception.

- {{domxref("History.go()")}}
  - : Charge une page dans l'historique de navigation, identifiée par sa position relative à la page courante, par exemple `-1` pour la page précédente ou `1` pour la page suivante. Lorsque `integerDelta` sort du cadre de l'historique (aka. -1 alors qu'il n'y a pas de page précédente), cette méthode n'aura aucun effet et ne déclenchera pas d'exception. Appeler `go()` sans paramètres ou un paramètre autre qu'un `Integer` n'a aucun effet (sauf par Internet Explorer, [qui supporte les URLs en String comme paramètre](<http://msdn.microsoft.com/en-us/library/ms536443(VS.85).aspx>)).
- {{domxref("History.pushState()")}}

  - : Insère les paramètres fournis dans la pile de l'historique de navigation avec un titre donné et, si fourni, l'URL. Les données sont traitées comme opaque par le DOM; il est nécessaire de spécifier chaque objet JavaScript devant être sérialisé. Notez que Firefox ignore actuellement le paramètre titre; pour plus d'informations, voir [Manipuler l'historique du navigateur](/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur).

- {{domxref("History.replaceState()")}}

  - : Modifie la page la plus récente dans la pile de l'historique de navigation pour avoir les données, titre, et si spécifiée, URL. Les données sont traitées comme opaque par le DOM; il est nécessaire de spécifier chaque objet JavaScript devant être sérialisé. Notez que Firefox ignore actuellement le paramètre titre; pour plus d'informations, voir [Manipuler l'historique du navigateur](/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("Window.history")}} retourne l'historique de navigation de la session en cours.
