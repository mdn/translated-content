---
title: Delta
slug: Glossary/Delta
tags:
  - Delta
  - Glossaire
  - Valeur
  - difference
translation_of: Glossary/Delta
original_slug: Glossaire/Delta
---
Le terme **delta** fait référence à la différence entre deux valeurs ou états. Le nom provient de la lettre grecque Δ (delta), qui équivaut à la lettre _D_ dans l'alphabet romain. _Delta_ se réfère simplement à l'utilisation de la lettre Δ comme raccourci pour la _différence_.

Le terme _delta_ est couramment utilisé pour communiquer les changements de vitesse, de position ou d'accélération d'un objet physique ou virtuel. Il est également utilisé pour décrire les changements de volume ou de fréquence des ondes sonores.

Par exemple, pour décrire la distance parcourue par un objet à l'écran de gauche à droite, on peut utiliser le terme _delta x_ ou _Δx_.

De même, étant donné la nouvelle valeur de _X_ et son ancienne valeur, vous pouvez calculer le delta comme ceci:

```js
let deltaX = newX - oldX;
```

Plus généralement, vous recevez le delta et l'utilisez pour mettre à jour une condition précédente enregistrée:

```js
let newX = oldX + deltaX;
```

## Apprendre plus

### Référence technique

- Les événements de la molette de la souris ({{domxref("WheelEvent")}} offrent la quantité de déplacement de la roue depuis le dernier événement dans son {{domxref("WheelEvent.deltaX", "deltaX")}}, {{domxref("WheelEvent.deltaY", "deltaY")}}, et {{domxref("WheelEvent.deltaZ", "deltaZ")}}, par exemple.
