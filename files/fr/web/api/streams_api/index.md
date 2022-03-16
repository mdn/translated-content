---
title: Streams API
slug: Web/API/Streams_API
translation_of: Web/API/Streams_API
---
{{SeeCompatTable}}{{APIRef("Streams")}}

L'API Streams permet à JavaScript d'accèder par programmation aux flux de données reçus sur le réseau et de les traiter selon les souhaits du développeur.

## Concepts et utilisation

Le Streaming implique de segmenter une ressource que vous souhaitez recevoir sur le réseau et de la séparer en plus petits morceaux, puis de la traiter petit à petit. C'est une chose que font les navigateurs quand ils reçoivent des ressources pour les afficher sur les pages web — le buffer d'une vidéo est progressivement disponible à la lecture, tout comme parfois vous verrez des images s'afficher progressivement durant leur chargement.

Mais ceci n'a jamais été possible pour le javascript par le passé. Avant, si nous souhaitions traiter une ressource quel qu'en soit le type (qu'il s'agisse d'une vidéo, ou d'un fichier texte, etc.), il nous fallait télécharger le fichier en entier, attendre qu'il soit désérialisé en un format acceptable, pour alors traiter la totalité après l'avoir totalement reçu.

Avec la mise à disposition des Streams en JavaScript, tout ceci a changé — vous pouvez maintenant commencer à traiter des données brutes petit à petit avec du Javascript dès qu'elles sont disponibles coté client, sans avoir besoin de générer un _buffer_, _string_, ou _blob_.

![](concept.png)

Il y a aussi d'autres avantages — vous pouvez détecter quand un flux commence ou prend fin, chaîner les flux entre eux, traiter les erreurs et annuler les flux si nécessaire et vous adapter à la vitesse de lecture du flux.

L'usage basique des <i lang="en">Streams</i> s'articule autour de la mise à disposition des réponses sous forme de flux. Par exemple, le corps de réponse retourné par une [requête `fetch`](/fr/docs/Web/API/fetch) réussie peut être exposé en tant que [`ReadableStream`](/fr/docs/Web/API/ReadableStream) — vous pourrez ainsi le lire en utilisant un lecteur créé par [`ReadableStream.getReader()`](/fr/docs/Web/API/ReadableStream/getReader), l'annuler avec [`ReadableStream.cancel()`](/fr/docs/Web/API/ReadableStream/cancel), etc.

Un usage plus avancé consiste à créer son propre flux en utilisant le constructeur {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}, pour traiter par exemple les données à l'intérieur d'un [service worker](/docs/Web/API/Service_Worker_API).

Vous pouvez aussi écrire des données vers les flux en utilisant {{domxref("WritableStream")}}.

> **Note :** Vous trouverez plus de détails sur la théorie et la mise en pratique des flux dans nos articles — [Streams API concepts](/docs/Web/API/Streams_API/Concepts), [Using readable streams](/docs/Web/API/Streams_API/Using_readable_streams), et [Using writable streams](/docs/Web/API/Streams_API/Using_writable_streams).

## Stream interfaces

### Readable streams

- {{domxref("ReadableStream")}}
  - : Correspond à un flux de données lisible. Il peut être utlisé afin de gérer les réponses des flux de l'[API Fetch](/en-US/docs/Web/API/Fetch_API), ou des flux définis par le développeur (cad. un constructeur  {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} personnalisé).
- {{domxref("ReadableStreamDefaultReader")}}
  - : Correspond à un lecteur par défaut pouvant être utilisé afin de lire un flux de données fourni par le réseau (cad. une requête fetch).
- {{domxref("ReadableStreamDefaultController")}}
  - : Correspond à un controlleur permettant de gérer l'état d'un {{domxref("ReadableStream")}} et le système de queue interne. Les controleurs par défaut sont à destination des flux qui ne sont pas des flux d'octets.

### Writable streams

- {{domxref("WritableStream")}}
  - : Propose un standard d'abstraction afin d'écrire des flux de données vers une destination, ce qu'on appel un sink (un _aggregateur de flux_). Cet objet s'accompagne d'un built-in backpressure et d'un système de queue.
- {{domxref("WritableStreamDefaultWriter")}}
  - : Correspond à un flux inscriptible par défaut pouvant être utilisé afin d'écire des chunks (plus petit morceaux) de données vers un flux inscriptible.
- {{domxref("WritableStreamDefaultController")}}
  - : Correspond à un controlleur permettant de gérer l'état d'un {{domxref("WritableStream")}}. Lors de la construction d'un `WritableStream`, le sink sous-jacent se voit attribuer une instance de `WritableStreamDefaultController` afin de pouvoir le manipuler.

### Related stream APIs and operations

- {{domxref("ByteLengthQueuingStrategy")}}
  - : Fournit une stratégie intégrée de file d'attente basée sur la taille en octets, pouvant être utilisée lors de la construction de flux..
- {{domxref("CountQueuingStrategy")}}
  - : Fournit une stratégie intégrée de file d'attente basée sur le comptage des chunks, pouvant être utilisée lors de la construction de flux.

### Extensions vers d'autres APIs

- {{domxref("Request")}}
  - : Quand un nouvel objet `Request` est construit, vous pouvez lui passer un {{domxref("ReadableStream")}} dans la propriété `body` de son dictionnaire `RequestInit`. Cette `Request` peut alors être envoyée à un {{domxref("WindowOrWorkerGlobalScope.fetch()")}} pour initier l'appel vers le flux.
- {{domxref("Body")}}
  - : La réponse {{domxref("Body")}} retrouné par un [appel fetch](/fr-FR/docs/Web/API/WindowOrWorkerGlobalScope/fetch) réussi est exposée par défaut comme un {{domxref("ReadableStream")}}, et peut être ratachée à un reader, etc.

### Interfaces liées aux flux d'octets

> **Attention :** Ces méthodes ne sont pas implémentés pour le moment, des questions ont été soulevées afin de déterminer si les détails des specs sont dans état suffisamment stable pour être implémentés. Ceci pourrait changer avec le temps.

- {{domxref("ReadableStreamBYOBReader")}}
  - : Correspond à un lecteur BYOB ("bring your own buffer") pouvant être utilisé pour lire des flux de données fourni par le développeur (c.a.d. un constructeur {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} personalisé).
- {{domxref("ReadableByteStreamController")}}
  - : Correspond à un controlleur permettant de manipuler l'état et la file d'attente interne d'un {{domxref("ReadableStream")}}. Les controlleurs de flux d'octets sont à usage des flux d'octets.
- {{domxref("ReadableStreamBYOBRequest")}}
  - : Correspond à un _pull_ dans une requête {{domxref("ReadableByteStreamController")}}.

## Examples

We have created a directory of examples to go along with the Streams API documentation — see [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams). The examples are as follows:

- [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/): This example shows how to consume a ReadableStream and pass its data to another.
- [Grayscale a PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/): This example shows how a ReadableStream of a PNG can be turned into grayscale.
- [Simple random stream](http://mdn.github.io/dom-examples/streams/simple-random-stream/): This example shows how to use a custom stream to generate random strings, enqueue them as chunks, and then read them back out again.
- [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/): This example extends the Simple random stream example, showing how a stream can be teed and both resulting streams can be read independently.
- [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/): This example shows how to to write to a writable stream, then decode the stream and write the contents to the UI.
- [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/): This example shows how [`pipeThrough()`](/en-US/docs/Web/API/ReadableStream/pipeThrough) can be used to transform a ReadableStream into a stream of other data types by transforming a data of a PNG file into a stream of PNG chunks.

Examples from other developers:

- [Progress Indicators with Streams, Service Workers, & Fetch](https://fetch-progress.anthum.com/).

## Specifications

| Specification                    | Status                       | Comment             |
| -------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('Streams')}} | {{Spec2('Streams')}} | Initial definition. |

## Compatibilité des navigateurs

### ReadableStream

{{Compat("api.ReadableStream")}}

### WritableStream

{{Compat("api.WritableStream")}}

## See also

- [Streams API concepts](/en-US/docs/Web/API/Streams_API/Concepts)
- [Using readable streams](/en-US/docs/Web/API/Streams_API/Using_readable_streams)
- [Using writable streams](/en-US/docs/Web/API/Streams_API/Using_writable_streams)
