---
title: Window.outerWidth
slug: Web/API/Window/outerWidth
tags:
  - API
  - CSSOM View
  - NeedsContent
  - Property
  - Reference
translation_of: Web/API/Window/outerWidth
---
{{APIRef}}

`Window.outerWidth` récupère la largeur de l'extérieur de la fenêtre du navigateur. Elle représente la largeur de toute la fenêtre du navigateur, y compris la barre latérale (si elle est agrandie), la fenêtre chrome et le redimensionnement de la fenêtre.

Cette propriété est en lecture seule ; elle n'a pas de valeur par défaut.

## Syntaxe

    largeurExterieureFenetre = window.outerWidth;

Lors du retour, `largeurExterieureFenetre` vaut la largeur de l'extérieur de la fenêtre.

## Notes

Pour changer la taille d'une fenêtre, voir {{domxref("window.resizeBy()")}} et {{domxref("window.resizeTo ()")}}.

Pour récupérer la largeur interne d'une fenêtre, c'est-à-dire la largeur de la page affichée, voir {{domxref ("window.innerWidth")}}.

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{ SpecName('CSSOM View', '#dom-window-outerwidth', 'Window.outerWidth') }} | {{ Spec2('CSSOM View') }} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Window.outerWidth")}}

## Voir aussi

- {{domxref("window.outerHeight")}}, {{domxref("window.innerHeight")}}, {{domxref("window.innerWidth")}}
- {{domxref("window.resizeBy()")}}, {{domxref("window.resizeTo()")}}
