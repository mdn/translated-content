---
title: Window.requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}

La méthode **`window.requestAnimationFrame()`** indique au navigateur qu'on souhaite exécuter une animation et demande que celui-ci exécute une fonction spécifique de mise à jour de l'animation, avant le prochain rafraîchissement à l'écran du navigateur. Cette méthode prend comme argument une fonction de rappel qui sera appelée avant le rafraîchissement du navigateur.

> **Note :** Si vous souhaitez animer une nouvelle <i lang="en">frame</i> durant le prochain affichage, la fonction de rappel doit de nouveau appeler la méthode `requestAnimationFrame()`. Autrement dit, `requestAnimationFrame()` ne fonctionne qu'une fois.

Cette méthode doit être appelée dès que le code est prêt à rafraîchir l'animation. La fonction de rappel contenant l'animation sera ainsi appelée par le navigateur avant le prochain rafraîchissement. La fonction de rappel est généralement appelée 60 fois par seconde. En réalité, cette fréquence correspondra le plus souvent au taux de rafraîchissement de l'écran dans la plupart des navigateurs, d'après les recommandations du W3C. Les appels à `requestAnimationFrame()` sont mis en pause dans la plupart des navigateurs lors d'une exécution dans des onglets en arrière-plan ou dans des [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) masquées afin d'améliorer les performances et la durée de vie des batteries.

La fonction de rappel reçoit un seul argument, une valeur [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp), qui indique le temps actuel (exprimé en nombre de millisecondes écoulées depuis [l'origine temporelle](/fr/docs/Web/API/DOMHighResTimeStamp#lorigine_temporelle)). Lorsque plusieurs fonctions de rappel sont mises en attente et que `requestAnimationFrame()` commence à se déclencher pour une image donnée, chaque fonction reçoit le même horodatage, même si du temps s'est écoulé pendant le calcul de la fonction de rappel précédente (dans l'exemple ci-après, on anime uniquement l'image lorsque l'horodatage change, c'est-à-dire à la première fonction de rappel). Cette valeur temporelle est un nombre décimal, exprimant une valeur en millisecondes, avec une précision minimale de 1ms (1000 µs).

> **Attention :** Assurez-vous de toujours utiliser le premier argument (ou une autre méthode pour obtenir le temps courant) afin de calculer la progression nécessaire de l'animation pour une <i lang="en">frame</i>. Sinon, l'animation s'exécutera plus rapidement sur les écrans avec une fréquence de rafraîchissement plus élevée. Voyez l'exemple ci-après pour une technique permettant de faire ce calcul.

## Syntaxe

```js
requestAnimationFrame(callback);
```

### Paramètres

- `callback`
  - : La fonction à appeler lorsqu'il est temps de mettre à jour l'animation pour le prochain affichage. La fonction de rappel reçoit un seul argument, une valeur [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) (semblable à celle renvoyée par [`performance.now()`](/fr/docs/Web/API/Performance/now)), qui indique le moment où `requestAnimationFrame()` commence à exécuter les fonctions de rappel.

### Valeur de retour

Une valeur entière de type `long` qui est un identifiant unique pour la requête correspondant dans la liste des fonctions de rappel. Il s'agit d'une valeur différente de zéro, mais on ne pourra pas faire d'autres hypothèses sur cette valeur. Celle-ci peut être passée en paramètre de la méthode [`window.cancelAnimationFrame()`](/fr/docs/Web/API/Window/cancelAnimationFrame) afin d'annuler l'appel à la fonction de rappel.

## Exemple

Dans cet exemple, un élément est animé pour 2 secondes (2000 millisecondes). L'élément se déplace à une vitesse de 0.1px/ms vers la droite. Sa position relative (en pixels CSS) peut donc être calculée en fonction du temps écoulé entre le début de l'animation (en millisecondes) et `0.1 * ecoule`. La position finale de l'élément est située 200px (`0.1 * 2000`) à droite de sa position initiale.

```js
const element = document.getElementById("un-élément-à-animer");
let debut, tempsPrecedent;
let fini = false;

function iteration(chrono) {
  if (debut === undefined) {
    debut = chrono;
  }
  const ecoule = chrono - debut;

  if (tempsPrecedent !== chrono) {
    // Math.min() est utilisée ici afin de s'assurer
    // que l'élément s'arrête exactement à 200px
    const compteur = Math.min(0.1 * ecoule, 200);
    element.style.transform = `translateX(${compteur}px)`;
    if (compteur === 200) fini = true;
  }

  if (ecoule < 2000) {
    // On arrête l'animation après 2 secondes
    tempsPrecedent = chrono;
    if (!fini) {
      window.requestAnimationFrame(iteration);
    }
  }
}

window.requestAnimationFrame(iteration);
```

## Notes

Internet Explorer et Edge, dans les versions antérieures à la version 17, ne déclenchent pas correctement `requestAnimationFrame` avant le prochain cycle d'affichage.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Window.cancelAnimationFrame()`](/fr/docs/Web/API/Window/cancelAnimationFrame)
- [Utiliser `requestAnimationFrame()` pour des animations intelligentes, un billet en anglais de Paul Irish](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)
- [Les animations en JavaScript&nbsp;: de `setInterval()` à `requestAnimationFrame()`](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/)
- [TestUFO&nbsp;: testez les déviations temporelles de votre navigateur sur `requestAnimationFrame()`](https://www.testufo.com/#test=animation-time-graph)
- [Une précision inférieure à la milliseconde pour l'API `requestAnimationFrame()`, un billet en anglais](https://developer.chrome.com/blog/requestanimationframe-api-now-with-sub-millisecond-precision/)
- [Une prothèse d'émulation (<i lang="en">polyfill</i>)](https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js)
