---
title: DOMPointReadOnly
slug: Web/API/DOMPointReadOnly
---

{{APIRef("Geometry Interfaces")}}{{ SeeCompatTable() }}

L'interface **`DOMPointReadOnly`** spécifie les propriétés standard utilisées par {{domxref("DOMPoint")}} pour définir un point 2D ou 3D dans un système de coordonnées.

## Constructeur

- {{domxref("DOMPointReadOnly.DOMPointReadOnly","DOMPointReadOnly()")}}
  - : Défini pour créer un nouvel objet `DOMPointReadOnly`, mais notez que ce constructeur ne peut pas être appelé par un JavaScript tiers : ce faisant, il retourne un typeError "constructeur illégal" .

## Méthodes

- {{domxref("DOMPointReadOnly.fromPoint")}}
  - : Traduit la position / perspective d'un `DOMPoint` à une nouvelle position (ne semble pas encore être pris en charge).
- {{domxref("DOMPointReadOnly.matrixTransform")}}
  - : Applique une transformation matricielle à un objet `DOMPointReadOnly` (ne semble pas encore être pris en charge).
- {{domxref("DOMPointReadOnly.toJSON()")}}
  - : Renvoie une représentation JSON de l'objet `DOMPointReadOnly`.

## Propriétés

- {{domxref("DOMPointReadOnly.x")}} {{readonlyInline}}
  - : La coordonnée x du `DOMPoint`.
- {{domxref("DOMPointReadOnly.y")}} {{readonlyInline}}
  - : La coordonnée y du `DOMPoint`.
- {{domxref("DOMPointReadOnly.z")}} {{readonlyInline}}
  - : La coordonnée z du `DOMPoint`.
- {{domxref("DOMPointReadOnly.w")}} {{readonlyInline}}
  - : La valeur de perspective du `DOMPoint`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
