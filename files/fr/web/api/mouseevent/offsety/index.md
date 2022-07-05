---
title: MouseEvent.offsetY
slug: Web/API/MouseEvent/offsetY
tags:
  - API
  - Experimental
  - MouseEvent
  - Property
  - Read-only
  - Reference
translation_of: Web/API/MouseEvent/offsetY
---
{{APIRef("DOM Events")}}{{SeeCompatTable}}

La propriété en lecture seule **`offsetY`** de l'interface {{domxref("MouseEvent")}}  fournit le décalage sur l'axe Y du pointeur de la souris entre cet évènement et la bordure de la marge intérieure du noeud cible.

## Syntaxe

    var yOffset = instanceOfMouseEvent.offsetY;

### Valeur retournée

Un nombre à virgule flottante double précision `double`. Les premières versions de la spécification la définissaient comme un nombre entier. Pour plus de détails, voir la section Commpatibilité des navigateurs.

## Spécifications

| Spécification                                                                            | État                             | Commentaires        |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('CSSOM View', '#dom-mouseevent-offsety', 'MouseEvent')}} | {{Spec2('CSSOM View')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.MouseEvent.offsetY")}}

## Voir aussi

- {{domxref("MouseEvent")}}
