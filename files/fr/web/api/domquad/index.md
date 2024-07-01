---
title: DOMQuad
slug: Web/API/DOMQuad
---

{{SeeCompatTable}}{{APIRef("Geometry Interfaces")}}

Un `DOMQuad` est une collection de 4 `DOMPoint` définissant les coins d'un quadrilatère arbitraire. Renvoyer des `DOMQuad` permet à `getBoxQuads()` de retourner des informations précises, même lorsque des transformations 2D ou 3D arbitraires sont présentes. Il possède un attribut `bounds` pratique qui retourne un `DOMRectReadOnly` pour les cas où vous voulez juste un rectangle de délimitation aligné sur l'axe.

## Constructeur

- {{domxref("DOMQuad.DOMQuad()")}}
  - : Crée un nouvel objet `DOMQuad`.

## Propriétés

- p1,p2,p3,p4 {{readonlyinline}}
  - : Des objets [`DOMPoint`](/fr/docs/Web/API/DOMPoint) pour chacun des 4 coins de l'objet `DOMQuad`.

## Méthode

- {{domxref("DOMQuad.fromRect()")}}
  - : Renvoie un nouvel objet `DOMQuad` basé sur l'ensemble de coordonnées fournit.
- {{domxref("DOMQuad.fromQuad()")}}
  - : Renvoie un nouvel objet `DOMQuad` basé sur l'ensemble de coordonnées fournit.
- {{domxref("DOMQuad.getBounds()")}}
  - : Renvoie un objet {{domxref("DOMRect")}} avec les coordonnées et les dimensions de l'objet `DOMQuad`.
- {{domxref("DOMQuad.toJSON()")}}
  - : Renvoie une représentation JSON de l'objet `DOMQuad`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
