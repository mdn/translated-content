---
title: MouseEvent.offsetX
slug: Web/API/MouseEvent/offsetX
tags:
  - API
  - Experimental
  - MouseEvent
  - Property
  - Read-only
  - Reference
translation_of: Web/API/MouseEvent/offsetX
---
{{APIRef("DOM Events")}}{{SeeCompatTable}}

La propriété en lecture seule **`offsetX`** de l'interface {{domxref("MouseEvent")}} fournit le décalage sur l'axe X du pointeur de la souris entre cet évènement et la bordure de la marge intérieure du noeud cible.

## Syntaxe

    var xOffset = instanceOfMouseEvent.offsetX;

### Valeur renvoyée

Un nombre à virgule flottante double précision `double`. Les premières versions de la spécification la définissaient comme un nombre entier. Pour plus de détails, voir la section Compatibilité des navigateurs.

## Spécifications

| Spécification                                                                            | État                             | Commentaire         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('CSSOM View', '#dom-mouseevent-offsetx', 'MouseEvent')}} | {{Spec2('CSSOM View')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.MouseEvent.offsetX")}}

## Voir aussi

- {{domxref("MouseEvent")}}
