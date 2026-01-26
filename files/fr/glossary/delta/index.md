---
title: Delta
slug: Glossary/Delta
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le terme **delta** fait référence à la différence entre deux valeurs ou états.

Le nom provient de la lettre grecque Δ (delta), qui équivaut à la lettre _D_ dans l'alphabet romain. _Delta_ se réfère simplement à l'utilisation de la lettre Δ comme raccourci pour la _différence_.

Le terme _delta_ est couramment utilisé pour communiquer les changements de vitesse, de position ou d'accélération d'un objet physique ou virtuel. Il est également utilisé pour décrire les changements de volume ou de fréquence des ondes sonores.

Par exemple, pour décrire la distance parcourue par un objet à l'écran de gauche à droite, on peut utiliser le terme _delta x_ ou _Δx_.

De même, étant donné la nouvelle valeur de _X_ et son ancienne valeur, vous pouvez calculer le delta comme ceci&nbsp;:

```js
let deltaX = newX - oldX;
```

Plus généralement, vous recevez le delta et l'utilisez pour mettre à jour une condition précédente enregistrée&nbsp;:

```js
let newX = oldX + deltaX;
```

Par exemple, les événements de la molette de la souris ({{DOMxRef("WheelEvent")}} offrent la quantité de déplacement de la roue depuis le dernier événement dans son {{DOMxRef("WheelEvent.deltaX", "deltaX")}}, {{DOMxRef("WheelEvent.deltaY", "deltaY")}}, et {{DOMxRef("WheelEvent.deltaZ", "deltaZ")}}, par exemple.
