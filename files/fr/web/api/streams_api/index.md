---
title: Streams API
slug: Web/API/Streams_API
translation_of: Web/API/Streams_API
---
<div>{{SeeCompatTable}}{{APIRef("Streams")}}</div>

<p>L'API Streams permet à JavaScript d'accèder par programmation aux flux de données reçus sur le réseau et de les traiter selon les souhaits du développeur.</p>

<h2 id="Concepts_et_utilisation">Concepts et utilisation</h2>

<p>Le Streaming implique de segmenter une ressource que vous souhaitez recevoir sur le réseau et de la séparer en plus petits morceaux, puis de la traiter petit à petit. C'est une chose que font les navigateurs quand ils reçoivent des ressources pour les afficher sur les pages web — le buffer d'une vidéo est progressivement disponible à la lecture, tout comme parfois vous verrez des images s'afficher progressivement durant leur chargement.</p>

<p>Mais ceci n'a jamais été possible pour le javascript par le passé. Avant, si nous souhaitions traiter une ressource quel qu'en soit le type (qu'il s'agisse d'une vidéo, ou d'un fichier texte, etc.), il nous fallait télécharger le fichier en entier, attendre qu'il soit désérialisé en un format acceptable, pour alors traiter la totalité après l'avoir totalement reçu.</p>

<p>Avec la mise à disposition des Streams en JavaScript, tout ceci a changé — vous pouvez maintenant commencer à traiter des données brutes petit à petit avec du Javascript dès qu'elles sont disponibles coté client, sans avoir besoin de générer un <em>buffer</em>, <em>string</em>, ou <em>blob</em>.</p>

<p><img alt="" src="concept.png"></p>

<p>Il y a aussi d'autres avantages — vous pouvez détecter quand un flux commence ou prend fin, chaîner les flux entre eux, traiter les erreurs et annuler les flux si nécessaire et vous adapter à la vitesse de lecture du flux.</p>

<p>L'usage basique des Streams s'articule autour de la mise à disposition des réponses sous forme de flux. Par exemple, la réponse {{domxref("Body")}} retourné par une requête <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch </a>réussie peut être exposée en tant que {{domxref("ReadableStream")}}, vous pourrez ainsi le lire en utilisant un lecteur créé par {{domxref("ReadableStream.getReader()")}}, l'annuler avec {{domxref("ReadableStream.cancel()")}}, etc.</p>

<p>Un usage plus avancé consiste à créer son propre flux en utilisant le constructeur {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}, pour traiter par exemple les données à l'intérieur d'un <a href="/docs/Web/API/Service_Worker_API">service worker</a>.</p>

<p>Vous pouvez aussi écrire des données vers les flux en utilisant {{domxref("WritableStream")}}.</p>

<div class="note">
<p><strong>Note :</strong> Vous trouverez plus de détails sur la théorie et la mise en pratique des flux dans nos articles — <a href="/docs/Web/API/Streams_API/Concepts">Streams API concepts</a>, <a href="/docs/Web/API/Streams_API/Using_readable_streams">Using readable streams</a>, et <a href="/docs/Web/API/Streams_API/Using_writable_streams">Using writable streams</a>.</p>
</div>

<h2 id="Stream_interfaces">Stream interfaces</h2>

<h3 id="Readable_streams">Readable streams</h3>

<dl>
 <dt>{{domxref("ReadableStream")}}</dt>
 <dd>Correspond à un flux de données lisible. Il peut être utlisé afin de gérer les réponses des flux de l'<a href="/en-US/docs/Web/API/Fetch_API">API Fetch</a>, ou des flux définis par le développeur (cad. un constructeur  {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} personnalisé).</dd>
 <dt>{{domxref("ReadableStreamDefaultReader")}}</dt>
 <dd>Correspond à un lecteur par défaut pouvant être utilisé afin de lire un flux de données fourni par le réseau (cad. une requête fetch).</dd>
 <dt>{{domxref("ReadableStreamDefaultController")}}</dt>
 <dd>Correspond à un controlleur permettant de gérer l'état d'un {{domxref("ReadableStream")}} et le système de queue interne. Les controleurs par défaut sont à destination des flux qui ne sont pas des flux d'octets.</dd>
</dl>

<h3 id="Writable_streams">Writable streams</h3>

<dl>
 <dt>{{domxref("WritableStream")}}</dt>
 <dd>Propose un standard d'abstraction afin d'écrire des flux de données vers une destination, ce qu'on appel un sink (un <em>aggregateur de flux</em>). Cet objet s'accompagne  d'un built-in backpressure et d'un système de queue.</dd>
 <dt>{{domxref("WritableStreamDefaultWriter")}}</dt>
 <dd>Correspond à un flux inscriptible par défaut pouvant être utilisé afin d'écire des chunks (plus petit morceaux) de données vers un flux inscriptible.</dd>
 <dt>{{domxref("WritableStreamDefaultController")}}</dt>
 <dd>Correspond à un controlleur permettant de gérer l'état d'un {{domxref("WritableStream")}}. Lors de la construction d'un <code>WritableStream</code>, le sink sous-jacent se voit attribuer une instance de <code>WritableStreamDefaultController</code> afin de pouvoir le manipuler.</dd>
</dl>

<h3 id="Related_stream_APIs_and_operations">Related stream APIs and operations</h3>

<dl>
 <dt>{{domxref("ByteLengthQueuingStrategy")}}</dt>
 <dd>Fournit une stratégie intégrée de file d'attente basée sur la taille en octets, pouvant être utilisée lors de la construction de flux..</dd>
 <dt>{{domxref("CountQueuingStrategy")}}</dt>
 <dd>Fournit une stratégie intégrée de file d'attente basée sur le comptage des chunks, pouvant être utilisée lors de la construction de flux.</dd>
</dl>

<h3 id="Extensions_vers_dautres_APIs">Extensions vers d'autres APIs</h3>

<dl>
 <dt>{{domxref("Request")}}</dt>
 <dd>Quand un nouvel objet <code>Request</code> est construit, vous pouvez lui passer un {{domxref("ReadableStream")}} dans la propriété <code>body</code> de son dictionnaire <code>RequestInit</code>. Cette <code>Request</code> peut alors être envoyée à un {{domxref("WindowOrWorkerGlobalScope.fetch()")}} pour initier l'appel vers le flux.</dd>
 <dt>{{domxref("Body")}}</dt>
 <dd>La réponse {{domxref("Body")}} retrouné par un <a href="/fr-FR/docs/Web/API/WindowOrWorkerGlobalScope/fetch">appel fetch</a> réussi est exposée par défaut comme un {{domxref("ReadableStream")}}, et peut être ratachée à un reader, etc.</dd>
</dl>

<h3 id="Interfaces_liées_aux_flux_doctets">Interfaces liées aux flux d'octets</h3>

<div class="warning">
<p><strong>Attention :</strong> Ces méthodes ne sont pas implémentés pour le moment, des questions ont été soulevées afin de déterminer si les détails des specs sont dans état suffisamment stable pour être implémentés. Ceci pourrait changer avec le temps.</p>
</div>

<dl>
 <dt>{{domxref("ReadableStreamBYOBReader")}}</dt>
 <dd>Correspond à un lecteur BYOB ("bring your own buffer") pouvant être utilisé pour lire des flux de données fourni par le développeur (c.a.d. un constructeur {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} personalisé).</dd>
 <dt>{{domxref("ReadableByteStreamController")}}</dt>
 <dd>Correspond à un controlleur permettant de manipuler l'état et la file d'attente interne d'un {{domxref("ReadableStream")}}. Les controlleurs de flux d'octets sont à usage des flux d'octets.</dd>
 <dt>{{domxref("ReadableStreamBYOBRequest")}}</dt>
 <dd>Correspond à un <em>pull</em> dans une requête {{domxref("ReadableByteStreamController")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>We have created a directory of examples to go along with the Streams API documentation — see <a href="https://github.com/mdn/dom-examples/tree/master/streams">mdn/dom-examples/streams</a>. The examples are as follows:</p>

<ul>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-pump/">Simple stream pump</a>: This example shows how to consume a ReadableStream and pass its data to another.</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/grayscale-png/">Grayscale a PNG</a>: This example shows how a ReadableStream of a PNG can be turned into grayscale.</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-random-stream/">Simple random stream</a>: This example shows how to use a custom stream to generate random strings, enqueue them as chunks, and then read them back out again.</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-tee-example/">Simple tee example</a>: This example extends the Simple random stream example, showing how a stream can be teed and both resulting streams can be read independently.</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/simple-writer/">Simple writer</a>: This example shows how to to write to a writable stream, then decode the stream and write the contents to the UI.</li>
 <li><a href="http://mdn.github.io/dom-examples/streams/png-transform-stream/">Unpack chunks of a PNG</a>: This example shows how <a href="/en-US/docs/Web/API/ReadableStream/pipeThrough"><code>pipeThrough()</code></a> can be used to transform a ReadableStream into a stream of other data types by transforming a data of a PNG file into a stream of PNG chunks.</li>
</ul>

<p>Examples from other developers:</p>

<ul>
 <li><a href="https://fetch-progress.anthum.com/">Progress Indicators with Streams, Service Workers, &amp; Fetch</a>.</li>
</ul>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Streams')}}</td>
   <td>{{Spec2('Streams')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<h3 id="ReadableStream">ReadableStream</h3>

<p>{{Compat("api.ReadableStream")}}</p>

<h3 id="WritableStream">WritableStream</h3>

<p>{{Compat("api.WritableStream")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Streams_API/Concepts">Streams API concepts</a></li>
 <li><a href="/en-US/docs/Web/API/Streams_API/Using_readable_streams">Using readable streams</a></li>
 <li><a href="/en-US/docs/Web/API/Streams_API/Using_writable_streams">Using writable streams</a></li>
</ul>
