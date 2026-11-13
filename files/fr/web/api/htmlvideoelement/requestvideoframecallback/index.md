---
title: "HTMLVideoElement : méthode requestVideoFrameCallback()"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

La méthode **`requestVideoFrameCallback()`** de l'interface {{DOMxRef("HTMLVideoElement")}} enregistre une fonction de rappel qui s'exécute lorsqu'une nouvelle trame vidéo est envoyée au compositeur. Cela permet aux développeur·euse·s d'effectuer des opérations efficaces sur chaque trame vidéo.

## Syntaxe

```js-nolint
requestVideoFrameCallback(callback)
```

### Paramètres

- `callback`
  - : La fonction de rappel qui s'exécute lorsqu'une nouvelle trame vidéo est envoyée au compositeur. Elle contient deux paramètres&nbsp;:
    - `now`
      - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le moment où la fonction de rappel a été appelée.
    - `metadata`
      - : Un objet contenant les propriétés suivantes&nbsp;:
        - `expectedDisplayTime`
          - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le moment où le navigateur attend que la trame soit visible.
        - `height`
          - : Un nombre, en pixels média, représentant la hauteur de la trame vidéo (les pixels décodés visibles, sans ajustement du rapport d'affichage).
        - `mediaTime`
          - : Un nombre, en secondes, représentant l'horodatage de présentation du média pour la trame affichée. Cela correspond à l'horodatage de la trame sur la chronologie de {{DOMxRef("HTMLMediaElement.currentTime")}}.
        - `presentationTime`
          - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le moment où le navigateur a soumis la trame pour composition.
        - `presentedFrames`
          - : Un nombre représentant le nombre de trames soumises à la composition jusqu'à présent avec la fonction de rappel courante.
            Cela peut être utilisé pour détecter si des trames ont été manquées entre les instances de la fonction de rappel.
        - `processingDuration`
          - : Un nombre, en secondes, représentant la durée entre la soumission du paquet encodé avec le même horodatage de présentation que cette trame au décodeur (c'est-à-dire le `mediaTime`) et le moment où la trame décodée est prête à être présentée.
        - `width`
          - : Un nombre, en pixels média, représentant la largeur de la trame vidéo (les pixels décodés visibles, sans ajustement du rapport d'affichage).

        Des propriétés de métadonnées supplémentaires peuvent être disponibles dans les fonctions de rappel `requestVideoFrameCallback()` utilisées dans des applications {{DOMxRef("WebRTC_API", "WebRTC", "", "nocode")}}&nbsp;:
        - `captureTime`
          - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le moment où la trame a été capturée. Cela s'applique aux trames vidéo provenant d'une source locale ou distante. Pour une source distante, le moment de capture est estimé à l'aide de la synchronisation des horloges et des rapports d'expéditeur RTCP pour convertir les horodatages RTP en moment de capture.
        - `receiveTime`
          - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant le moment où la trame encodée a été reçue par la plateforme. Cela s'applique aux trames vidéo provenant d'une source distante. Plus précisément, cela correspond au moment où le dernier paquet appartenant à cette trame a été reçu sur le réseau.
        - `rtpTimestamp`
          - : Un nombre représentant l'horodatage RTP associé à cette trame vidéo.

> [!NOTE]
> `width` et `height` peuvent différer de {{DOMxRef("HTMLVideoElement.videoWidth")}} et {{DOMxRef("HTMLVideoElement.videoHeight")}} dans certains cas (par exemple, une vidéo anamorphique peut avoir des pixels rectangulaires).

### Valeur de retour

Un nombre représentant un identifiant unique de fonction de rappel.

Celui-ci peut être transmis à {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}} pour annuler l'enregistrement de la fonction de rappel.

## Description

Les cas d'utilisation typiques de `requestVideoFrameCallback()` incluent le traitement vidéo et le dessin sur un canevas, l'analyse vidéo et la synchronisation avec des sources audio externes. Le traitement image par image était auparavant effectué de manière moins efficace ou précise en exécutant des opérations sur l'affichage vidéo courant à chaque déclenchement de l'évènement {{DOMxRef("HTMLMediaElement.timeupdate_event", "timeupdate")}}. Cette technique ne permettait pas d'accéder aux véritables trames vidéo.

`requestVideoFrameCallback()` s'utilise de la même manière que {{DOMxRef("Window.requestAnimationFrame()")}}. Vous l'utilisez pour exécuter une fonction de rappel qui réalise une opération lorsque la prochaine trame vidéo est envoyée au compositeur. La fonction de rappel se termine en appelant à nouveau `requestVideoFrameCallback()` pour exécuter la fonction lors de la composition de la prochaine trame vidéo, et ainsi de suite. Cependant, `requestVideoFrameCallback()` est adapté aux opérations vidéo de plusieurs façons&nbsp;:

- `requestVideoFrameCallback()` offre un accès fiable à chaque trame vidéo individuelle.
- `requestAnimationFrame()` tente de s'aligner sur la fréquence de rafraîchissement de l'affichage, généralement 60Hz. `requestVideoFrameCallback()`, en revanche, tente de s'aligner sur la fréquence des trames vidéo. Plus précisément, la fonction de rappel s'exécutera à la fréquence la plus basse entre celle des trames vidéo et celle du rafraîchissement du navigateur. Par exemple, une vidéo à 25fps jouée dans un navigateur à 60Hz déclenchera les rappels à 25Hz. Une vidéo à 120fps dans le même navigateur à 60Hz déclenchera les rappels à 60Hz.
- `requestVideoFrameCallback()` met à disposition des métadonnées vidéo utiles dans la fonction de rappel.

Il faut garder à l'esprit que `requestVideoFrameCallback()` n'offre aucune garantie stricte que le résultat de votre fonction de rappel restera synchronisé avec la fréquence des trames vidéo. Il peut être déclenché avec un retard de synchronisation verticale par rapport à la présentation de la nouvelle trame vidéo. (La synchronisation verticale est une technologie graphique qui synchronise la fréquence des trames vidéo avec la fréquence de rafraîchissement d'un moniteur.)

L'API s'exécute sur le fil principal, tandis que la composition vidéo se produit probablement sur un fil de composition séparé. Il faut tenir compte du temps nécessaire à l'exécution de ces opérations, ainsi que du temps requis pour que la vidéo elle-même et le résultat de votre opération `requestVideoFrameCallback()` s'affichent à l'écran.

Vous pouvez comparer le paramètre `now` de la fonction de rappel et la propriété de métadonnées `expectedDisplayTime` pour déterminer si votre fonction de rappel est décalée par rapport à la synchronisation verticale. Si `expectedDisplayTime` est à environ cinq à dix microsecondes de `now`, la trame est déjà rendue. Si `expectedDisplayTime` est environ seize millisecondes dans le futur (en supposant que votre navigateur/écran se rafraîchit à 60Hz), alors la fonction de rappel est décalée par rapport à la synchronisation verticale.

## Exemples

### Dessiner les trames vidéo sur un canevas

Cet exemple montre comment utiliser `requestVideoFrameCallback()` pour dessiner les trames d'une vidéo sur un élément HTML {{HTMLElement("canvas")}} exactement au même rythme que la vidéo. Il affiche également les métadonnées des trames à l'écran pour le débogage.

```js
const button = document.querySelector("button");
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const fpsInfo = document.querySelector("#fps-info");
const metadataInfo = document.querySelector("#metadata-info");

button.addEventListener("click", () =>
  video.paused ? video.play() : video.pause(),
);

video.addEventListener("play", () => {
  if (!("requestVideoFrameCallback" in HTMLVideoElement.prototype)) {
    console.error(
      "Votre navigateur ne prend pas en charge l'API `Video.requestVideoFrameCallback()`.",
    );
  }
});

let width = canvas.width;
let height = canvas.height;

let paintCount = 0;
let startTime = 0.0;

const updateCanvas = (now, metadata) => {
  if (startTime === 0.0) {
    startTime = now;
  }

  ctx.drawImage(video, 0, 0, width, height);

  const elapsed = (now - startTime) / 1000.0;
  const fps = (++paintCount / elapsed).toFixed(3);
  fpsInfo.innerText = !isFinite(fps) ? 0 : fps;
  metadataInfo.innerText = JSON.stringify(metadata, null, 2);

  video.requestVideoFrameCallback(updateCanvas);
};

video.src = "https://mdn.github.io/shared-assets/videos/flower.mp4";
video.requestVideoFrameCallback(updateCanvas);
```

```css
video,
canvas {
  max-width: 49%;
}
```

```html
<p>
  Démarrez la lecture de la vidéo avec <button type="button">⏯</button>. Mettez
  la vidéo en pause pour lire les métadonnées. Le dessin des trames vidéo sur le
  canevas est synchronisé avec la fréquence réelle des trames vidéo.
</p>
<video controls playsinline></video>
<canvas width="960" height="540"></canvas>
<p><span id="fps-info">0</span> ips</p>
<pre id="metadata-info"></pre>
```

{{EmbedLiveSample("Dessiner les trames vidéo sur un canevas", , 540)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("video")}}
- La méthode {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
- [Effectuer des opérations efficaces sur chaque trame vidéo avec `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc?hl=fr) sur developer.chrome.com (2023)
