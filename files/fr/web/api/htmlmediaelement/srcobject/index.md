---
title: "HTMLMediaElement : propriété srcObject"
short-title: srcObject
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("HTML DOM")}}

La propriété **`srcObject`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit ou retourne l'objet qui sert de source pour le média associé à l'élément {{DOMxRef("HTMLMediaElement")}}, ou `null` si aucun objet n'est assigné.

L'objet peut être un objet {{DOMxRef("MediaStream")}}, un objet {{DOMxRef("MediaSource")}}, un
objet {{DOMxRef("Blob")}} ou un objet {{DOMxRef("File")}} (qui hérite de `Blob`).

> [!NOTE]
> À partir de mars 2020, seul Safari prend en charge pleinement `srcObject`, c'est-à-dire en utilisant des objets `MediaSource`, `MediaStream`, `Blob` et `File` comme valeurs. Les autres navigateurs prennent en charge les objets `MediaStream`&nbsp;; jusqu'à ce qu'ils rattrapent leur retard, envisagez de revenir à la création d'une URL avec {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}} et de l'assigner à {{DOMxRef("HTMLMediaElement.src")}} (voir l'exemple ci-dessous). De plus, à partir de la version 108, Chromium prend en charge l'attachement d'un objet `MediaSource` dédié à un worker en assignant l'instance {{DOMxRef("MediaSourceHandle")}} de cet objet (transférée depuis le worker) à `srcObject`.

## Valeur

Un objet {{DOMxRef('MediaStream')}}, {{DOMxRef('MediaSource')}}, {{DOMxRef('Blob')}} ou {{DOMxRef('File')}} (bien que la table de compatibilité indique ce qui est réellement pris en charge), ou `null` si aucun objet n'est assigné.

## Notes d'utilisation

Les anciennes versions de la spécification Media Source nécessitaient l'utilisation de {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}} pour créer une URL d'objet, puis de définir {{DOMxRef("HTMLMediaElement.src", "src")}} sur cette URL. Maintenant, vous pouvez simplement définir `srcObject` sur le {{DOMxRef("MediaStream")}} directement.

## Exemples

### Exemple simple

Dans cet exemple, un {{DOMxRef("MediaStream")}} provenant d'une caméra est assigné à un élément {{HTMLElement("video")}} nouvellement créé.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

Dans cet exemple, un nouveau {{DOMxRef('MediaSource')}} est assigné à un élément {{HTMLElement("video")}} nouvellement créé.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### Prise en charge de la propriété `src` en tant que solution de repli

Les exemples ci-dessous prennent en charge les anciennes versions des navigateurs qui nécessitent de créer une URL d'objet et de l'assigner à `src` si `srcObject` n'est pas pris en charge.

Tout d'abord, un {{DOMxRef("MediaStream")}} provenant d'une caméra est assigné à un élément HTML {{HTMLElement("video")}} nouvellement créé, avec une solution de repli pour les anciens navigateurs.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
if ("srcObject" in video) {
  video.srcObject = mediaStream;
} else {
  // Évitez d'utiliser ceci dans les nouveaux navigateurs, car cela va disparaître.
  video.src = URL.createObjectURL(mediaStream);
}
```

Ensuite, un nouvel objet {{DOMxRef("MediaSource")}} est assigné à un élément HTML {{HTMLElement("video")}} nouvellement créé, avec une solution de repli pour les anciens navigateurs et les navigateurs qui ne prennent pas encore en charge l'assignation directe de {{DOMxRef("MediaSource")}}.

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
// Les anciens navigateurs peuvent ne pas avoir srcObject
if ("srcObject" in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name !== "TypeError") {
      throw err;
    }
    // Même s'ils le font, ils peuvent ne prendre en charge que MediaStream
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

### Construire un `MediaSource` dans un worker et le passer au fil d'exécution principal pour lecture

La propriété {{DOMxRef("MediaSource.handle")}} peut être accédée à l'intérieur d'un worker dédié et l'objet {{DOMxRef("MediaSourceHandle")}} résultant est ensuite transféré au fil d'exécution qui a créé le worker (dans ce cas, le fil principal) avec un appel {{DOMxRef("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}}&nbsp;:

```js
// À l'intérieur d'un worker dédié
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Transférer le descripteur au contexte qui a créé le worker
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Attendre que sourceopen soit déclenché sur MediaSource avant de créer des SourceBuffers
  // et de les remplir avec des médias récupérés — MediaSource n'acceptera pas
  // la création de SourceBuffers tant qu'il n'est pas attaché à
  // HTMLMediaElement et que son readyState vaut "open"
});
```

Dans le fil principal, nous recevons le descripteur dans un gestionnaire d'évènements {{DOMxRef("Worker.message_event", "message")}}, l'attachons à un {{HTMLElement("video")}} en l'assignant à sa propriété `HTMLMediaElement.srcObject`, puis {{DOMxRef("HTMLMediaElement.play()", "play")}} la vidéo&nbsp;:

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE]
> Les objets {{DOMxRef("MediaSourceHandle")}} ne peuvent pas être transférés avec succès dans ou par un worker partagé ou un service worker.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
