---
title: API de Vibration
slug: Web/API/Vibration_API
---

## Description des vibrations

La vibration est décrite comme une série de marche-arrêt des impulsions, qui peuvent être de durées différentes. La série peut être soit un entier décrivant le nombre de millisecondes à vibrer ou un tableau d'entiers décrivant une série de pauses et de vibrations. La vibration est contrôlée par une seule méthode: {{domxref("Navigator.vibrate()")}}.

### Une seule vibration

Vous pouvez effectuer une seule vibration du matériel en spécifiant soit une valeur de type "entier", soit un tableau d'entiers.

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

Ces deux exemples illustrent tout deux la vibration de l'appareil pendant 200 millisecondes.

### Série de vibrations

Un tableau de valeurs décrit des périodes de temps durant lesquelles le dispositif effectue des vibrations alternées (marche-arrêt répété). Chaque valeur dans le tableau est convertie en entier puis est interprétée alternativement comme le nombre de millisecondes pour lequel le dispositif devrait vibrer et le nombre de millisecondes dont il ne le devrait pas. Par exemple:

```js
window.navigator.vibrate([200, 100, 200]);
```

Cela fera vibrer l'appareil pendant 200ms, puis fait une pause de 100ms avant de le faire vibrer à nouveau pendant 200ms.

Vous pouvez spécifier autant de paires vibration/pause que vous voulez. Vous pouvez également fournir soit un nombre pair ou impair. Il est à noter que vous ne devez pas fournir de pause avant que la dernière vibration ait lieu.

### Annuler les vibrations existantes

Faire appel à {{domxref("Navigator.vibrate()")}} avec une valeur 0, un tableau vide, ou encore un tableau composé uniquement de 0 annulera toutes series de vibrations actives.

### Vibrations continues

Quelques codes de base comme `setInterval` et `clearInterval` vont vous permettre de créer une vibration persistante:

```js
var vibrateInterval;

// Démarre une vibration avec une durée
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// Arrête la vibration
function stopVibrate() {
  // Vide l'intervalle et annule les vibrations persistantes
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// Démarre la vibration persistante avec un intervalle et une durée donnée
function startPeristentVibrate(duration, interval) {
  vibrateInterval = setInterval(function () {
    startVibrate(duration);
  }, interval);
}
```

Bien sûr, l'extrait de code ci-dessus ne prends pas en compte la méthode du tableau de vibration ; les vibrations persistantes devront se faire en calculant la somme des éléments du tableau et créer un intervalle basé sur ce nombre (avec, probablement, un délai supplémentaire).

### Pourquoi utiliser l'API de vibration?

Cette APi est dédiée pour les appareils mobiles. Il peut être indispensable pour les alertes au sein des applications mobiles et est particulièrement utile lorsqu'il est associé à des jeux ou des applications multimédia lourdes. Imaginez lorsque vous êtes en train de regarder une vidéo sur votre appareil mobile et pendant une scène d'explosion, votre téléphone vibre un peu. Ou jouer à Bomberman et sentir une petite vibration lorsqu'un bloc explose.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Navigator.vibrate()")}}
