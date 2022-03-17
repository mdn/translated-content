---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
tags:
  - API
  - CSSOM View
  - Méthode
  - Référence(2)
translation_of: Web/API/Window/scrollBy
---
{{ APIRef() }}

Fait défiler le document dans la fenêtre du nombre de pixels passé en paramètre.

## Syntaxe

    window.scrollBy(X, Y);

### Paramètres

- `X` est le nombre en pixels pour le défilement horizontal.
- `Y` est le nombre en pixels pour le défilement vertical.

Des coordonnées positives feront défiler à droite et vers le bas de la page. Des coordonnées négatives feront défiler à gauche et vers le haut de la page.

## Exemples

    // fait défiler d'une page
    window.scrollBy(0, window.innerHeight);

## Notes

[window.scrollBy](/fr/docs/DOM/Window.scrollBy) fait défiler en fonction d'un nombre précis, alors que [window.scroll](/fr/docs/DOM/Window.scroll) fait défiler vers une position absolue dans le document. Voir aussi [window.scrollByLines](/fr/docs/DOM/Window.scrollByLines), [window.scrollByPages](/fr/docs/DOM/Window.scrollByPages)

## Spécification

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{ SpecName('CSSOM View', '#dom-window-scrollby', 'window.scrollBy()') }} | {{ Spec2('CSSOM View') }} | Définition initiale. |
