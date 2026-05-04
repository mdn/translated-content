---
title: "Window : méthode requestAnimationFrame()"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 90c1d8efd51c2f82d26e6b79e442f9dbcfafd048
---

{{APIRef}}

La méthode **`requestAnimationFrame()`** de l'interface {{DOMxRef("Window")}} indique au navigateur qu'on souhaite exécuter une animation. Elle demande au navigateur d'appeler une fonction de rappel (<i lang="en">callback</i> en anglais) fournie par l'utilisateur·ice avant le prochain rafraîchissement.

La fréquence des appels à la fonction de rappel correspondra généralement à la fréquence de rafraîchissement de l'affichage. La fréquence de rafraîchissement la plus courante est de 60 Hz (60 cycles/images par seconde), bien que 75 Hz, 120 Hz et 144 Hz soient également largement utilisés. Les appels à `requestAnimationFrame()` sont mis en pause dans la plupart des navigateurs lorsqu'ils s'exécutent dans des onglets en arrière-plan ou des {{HTMLElement("iframe")}} masqués, afin d'améliorer les performances et la durée de vie de la batterie.

> [!NOTE]
> Votre fonction de rappel doit appeler `requestAnimationFrame()` à nouveau si vous souhaitez animer une autre image. `requestAnimationFrame()` ne fonctionne qu'une seule fois.

> [!WARNING]
> Assurez-vous de toujours utiliser le premier argument (ou une autre méthode pour obtenir le temps courant) afin de calculer la progression nécessaire de l'animation pour une <i lang="en">frame</i>. **Sinon, l'animation s'exécutera plus rapidement sur les écrans** avec une fréquence de rafraîchissement plus élevée. Voyez l'exemple ci-après pour une technique permettant de faire ce calcul.

## Syntaxe

```js-nolint
requestAnimationFrame(callback)
```

### Paramètres

- `callback`
  - : La fonction à appeler lorsqu'il est temps de mettre à jour l'animation pour le prochain affichage. Cette fonction de rappel reçoit un seul argument&nbsp;:
    - `timestamp`
      - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} indiquant le moment de fin du rendu de l'image précédente (basé sur le nombre de millisecondes depuis [l'origine temporelle](/fr/docs/Web/API/Performance/timeOrigin)). Le timestamp est un nombre décimal, en millisecondes, mais avec une précision minimale d'une milliseconde. Pour les objets `Window` (et non les `Workers`), il est égal à {{DOMxRef("AnimationTimeline/currentTime", "document.timeline.currentTime")}}. Ce timestamp est partagé entre toutes les fenêtres exécutées sur le même agent (toutes les fenêtres de même origine et, plus important encore, les cadres intégrés de même origine) — ce qui permet de synchroniser les animations entre plusieurs fonctions de rappels `requestAnimationFrame`. La valeur du timestamp est également similaire à l'appel de {{DOMxRef('performance.now()')}} au début de la fonction de rappel, mais elle n'est jamais identique.

        Lorsque plusieurs fonctions de rappels mis en file d'attente par `requestAnimationFrame()` commencent à s'exécuter dans une seule image, chacun reçoit le même timestamp même si du temps s'est écoulé pendant le calcul de la charge de travail de chaque fonction de rappel précédente.

### Valeur de retour

Une valeur entière `unsigned long`, de l'ID de la requête, qui identifie de manière unique l'entrée dans la liste des fonctions de rappel. Vous ne devez faire aucune hypothèse sur sa valeur. Vous pouvez passer cette valeur à {{DOMxRef("window.cancelAnimationFrame()")}} pour annuler la demande de rappel de rafraîchissement.

> [!WARNING]
> L'identifiant de la requête est typiquement implémenté comme un compteur incrémental par fenêtre. Par conséquent, même lorsqu'il commence à compter à partir de 1, il peut déborder et finir par atteindre 0.
> Bien que cela soit peu susceptible de poser des problèmes pour les applications de courte durée, vous devez éviter `0` comme valeur sentinelle pour les identifiants de requête invalides et préférer des valeurs inaccessibles telles que `null`.
> La spécification ne précise pas le comportement en cas de débordement, donc les navigateurs ont des comportements divergents. En cas de débordement, la valeur pourrait soit revenir à 0, soit devenir négative, soit échouer avec une erreur.
> Sauf si le débordement génère une exception, les identifiants de requête ne sont pas non plus vraiment uniques car il n'y a qu'un nombre fini d'entiers 32 bits pour un nombre potentiellement infini de rappels.
> Notez cependant qu'il faudrait environ 800 jours pour atteindre ce problème en affichant à 60 Hz avec un seul appel à `requestAnimationFrame()` par image.

## Exemples

Dans cet exemple, un élément est animé pour 2 secondes (2000 millisecondes). L'élément se déplace à une vitesse de 0.1px/ms vers la droite. Sa position relative (en pixels CSS) peut donc être calculée en fonction du temps écoulé entre le début de l'animation (en millisecondes) et `0.1 * ecoule`. La position finale de l'élément est située 200px (`0.1 * 2000`) à droite de sa position initiale.

```js
const element = document.getElementById("un-element-a-animer");
let debut;

function iteration(chrono) {
  if (debut === undefined) {
    debut = chrono;
  }
  const ecoule = chrono - debut;

  // Math.min() est utilisée ici afin de s'assurer que l'élément s'arrête
  // exactement à 200px
  const compteur = Math.min(0.1 * ecoule, 200);
  element.style.transform = `translateX(${compteur}px)`;
  if (compteur < 200) {
    requestAnimationFrame(iteration);
  }
}

requestAnimationFrame(iteration);
```

Les trois exemples suivants illustrent différentes approches pour définir le point zéro dans le temps, la référence pour calculer la progression de votre animation à chaque image. Si vous souhaitez synchroniser avec une horloge externe, telle que {{DOMxRef("BaseAudioContext.currentTime")}}, la précision la plus élevée disponible est la durée d'une seule image, 16,67 ms à 60 Hz. L'argument timestamp de la fonction de rappel représente la fin de l'image précédente, donc le plus tôt que vos nouvelles valeurs calculées seront rendues est dans l'image suivante.

Cet exemple attend que la première fonction de rappel s'exécute pour définir `zero`. Si votre animation saute à une nouvelle valeur lorsqu'elle commence, vous devez structurer votre code de cette manière. Si vous n'avez pas besoin de synchroniser avec quelque chose d'externe, comme l'audio, cette approche est recommandée car certains navigateurs ont un délai de plusieurs images entre l'appel initial à `requestAnimationFrame()` et le premier appel à la fonction de rappel.

```js
let zero;
requestAnimationFrame(premiereImage);
function premiereImage(chrono) {
  zero = chrono;
  animer(chrono);
}
function animer(chrono) {
  const value = (chrono - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animer(t));
  } else element.style.opacity = 1;
}
```

Cet exemple utilise {{DOMxRef("AnimationTimeline/currentTime", "document.timeline.currentTime")}} pour définir une valeur zéro avant le premier appel à `requestAnimationFrame()`. `document.timeline.currentTime` s'aligne avec l'argument `timestamp`, donc la valeur zéro est équivalente au timestamp de la 0e image.

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animer);
function animer(chrono) {
  const value = (chrono - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animer(t));
  } else element.style.opacity = 1;
}
```

Cet exemple utilise {{DOMxRef("performance.now()")}} au lieu de la valeur de timestamp de la fonction de rappel. Vous pourriez utiliser cela pour obtenir une précision de synchronisation légèrement supérieure, bien que le degré supplémentaire de précision soit variable et pas très significatif.

> [!NOTE]
> Cet exemple ne permet pas de synchroniser de manière fiable les rappels d'animation.

```js
const zero = performance.now();
requestAnimationFrame(animer);
function animer() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame(animer);
  } else element.style.opacity = 1;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.cancelAnimationFrame()")}}
- La méthode {{DOMxRef("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- [Animer avec JavaScript&nbsp;: de setInterval à requestAnimationFrame <sup>(angl.)</sup>](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Billet de blog
- [TestUFO&nbsp;: Testez votre navigateur pour les déviations temporelles de requestAnimationFrame() <sup>(angl.)</sup>](https://testufo.com/#test=animation-time-graph)
- [Basculer Firefox vers uint32_t pour l'ID de requête requestAnimationFrame <sup>(angl.)</sup>](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
