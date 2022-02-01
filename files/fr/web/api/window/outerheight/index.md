---
title: Window.outerHeight
slug: Web/API/Window/outerHeight
translation_of: Web/API/Window/outerHeight
---
{{APIRef}}

`Window.outerHeight` retourne la hauteur de la fenêtre (du navigateur) en pixels. La hauteur retournée prends en compte la fenêtre du navigateur entier, y compris la barre latérale, window chrome and window resizing borders/handles.

Cette propriété n'a pas de valeur par défaut.

Syntaxe

    outWindowHeight = window.outerHeight;

La valeur retournée correspond à la hauteur extérieure de la fenêtre.

## Notes

Pour changer la taille de la fenêtre, utilisez {{domxref("window.resizeBy()")}} et {{domxref("window.resizeTo()")}}.

Pour obtenir la hauteur intérieure de la fenêtre (la hauteur de la page actuelle), utilisez {{domxref("window.innerHeight")}}.

### Exemple illustré

La figure suivante montre la différence entre `outerHeight` et `innerHeight`.

![innerHeight vs outerHeight illustration](FirefoxInnerVsOuterHeight2.png)

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{ SpecName('CSSOM View', '#dom-window-outerheight', 'Window.outerHeight') }} | {{ Spec2('CSSOM View') }} |             |

## Compatibilité des navigateurs

{{Compat("api.Window.outerHeight")}}

## Voir aussi

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
