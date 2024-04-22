---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
---

{{APIRef("Geometry Interfaces")}}{{ SeeCompatTable() }}

L'interface **`DOMRectReadOnly`** spécifie les propriétés standard utilisées par {{domxref("DOMRect")}} pour définir un rectangle.

## Constructeur

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : Défini pour créer un nouvel objet `DOMRectReadOnly`, mais notez que ce constructeur ne peut pas être appelé par JavaScript tiers: cela renvoie une erreur de type "Constructeur illégal".

## Propriétés

<!---->

- {{domxref("DOMRectReadOnly.x")}} {{readonlyInline}}
  - : La coordonnée x de l'origine du `DOMRect`.
- {{domxref("DOMRectReadOnly.y")}} {{readonlyInline}}
  - : La coordonnée y de l'origine du `DOMRect`.
- {{domxref("DOMRectReadOnly.width")}} {{readonlyInline}}
  - : La largeur du `DOMRect`.
- {{domxref("DOMRectReadOnly.height")}} {{readonlyInline}}
  - : La hauteur du `DOMRect`.
- {{domxref("DOMRectReadOnly.top")}} {{readonlyInline}}
  - : Renvoie la valeur de coordonnée supérieur du `DOMRect` (généralement la même que `y`).
- {{domxref("DOMRectReadOnly.right")}} {{readonlyInline}}
  - : Renvoie la valeur de coordonnée droite du `DOMRect` (généralement identique à `x + largeur`).
- {{domxref("DOMRectReadOnly.bottom")}} {{readonlyInline}}
  - : Renvoie la valeur de coordonnée inférieur du `DOMRect` (généralement la même que `y + hauteur`).
- {{domxref("DOMRectReadOnly.left")}} {{readonlyInline}}
  - : Renvoie la valeur de coordonnée gauche du `DOMRect` (généralement la même que `x`).

## Méthodes

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : Crée un nouvel objet `DOMRect` avec un emplacement et des dimensions donnés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("DOMPoint")}}
