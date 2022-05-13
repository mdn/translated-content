---
title: DOMRect
slug: Web/API/DOMRect
tags:
  - API
  - DOM
  - Géométrie
  - Objets
  - Rectangle
translation_of: Web/API/DOMRect
---
{{APIRef("Geometry Interfaces")}}{{ SeeCompatTable() }}

Un **`DOMRect`** représente un rectangle.

Le type de boîte représenté par le `DOMRect` est spécifié par la méthode ou la propriété qui l'a retourné. Par exemple, {{domxref("VREyeParameters.renderRect")}} de l'API WebVR spécifie la fenêtre d'un élément [canvas](/fr/docs/Web/API/HTMLCanvasElement) dans laquelle le visuel pour un oeil doit être rendu.

Il hérite de son parent {{domxref("DOMRectReadOnly")}}.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("DOMRect.DOMRect","DOMRect()")}}
  - : Crée un nouvel objet `DOMRect`.

## Propriétés

_`DOMRect` hérite des propriétés de son parent {{domxref("DOMRectReadOnly")}}. À une différence près, elles ne sont plus en lecture seule._

- {{domxref("DOMRectReadOnly.x")}}
  - : La coordonnée x de l'origine du `DOMRect`.
- {{domxref("DOMRectReadOnly.y")}}
  - : La coordonnée y de l'origine du `DOMRect`.
- {{domxref("DOMRectReadOnly.width")}}
  - : La largeur du `DOMRect`.
- {{domxref("DOMRectReadOnly.height")}}
  - : La hauteur du `DOMRect`.
- {{domxref("DOMRectReadOnly.top")}}
  - : Renvoie la valeur de la coordonnée supérieure de `DOMRect` (a la même valeur que `y`, ou `y + height` _(y + hauteur)_ si `height` est négative).
- {{domxref("DOMRectReadOnly.right")}}
  - : Renvoie la valeur de la coordonnée droite du `DOMRect` (a la même valeur que  `x + width` _(x + largeur)_, ou `x` si `width` est négative).
- {{domxref("DOMRectReadOnly.bottom")}}
  - : Renvoie la valeur de la coordonnée du bas du `DOMRect` (a la même valeur que  `y + height` _(y + hauteur)_, ou `y` si `height` est négative).
- {{domxref("DOMRectReadOnly.left")}}
  - : Renvoie la valeur de la coordonnée de gauche du `DOMRect` (a la même valeur que `x`, ou `x + width` _(x + largeur)_ si `width` est négative).

## Méthodes

_`DOMRect` hérite des méthodes de son parent {{domxref("DOMRectReadOnly")}}._

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : Crée un nouvel objet `DOMRect` avec l'emplacement et les dimensions données.

## Spécifications

| Spécification                                                                | Statut                                       | Commentaire          |
| ---------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Geometry Interfaces', '#DOMRect', 'DOMRect')}} | {{Spec2('Geometry Interfaces')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DOMRect")}}

## Voir aussi

- {{domxref("DOMPoint")}}
