---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
tags:
  - API
  - Add-ons
  - Extensions
  - NeedsTranslation
  - Reference
  - StreamFilter
  - TopicStub
  - Type
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
---
<div>{{AddonSidebar()}}</div>

<p>Un <code>StreamFilter</code> est un objet que vous pouvez utiliser pour surveiller et modifier les réponses HTTP.</p>

<p>Pour créer un <code>StreamFilter</code>, appelez {{WebExtAPIRef("webRequest.filterResponseData()")}}, en lui passant l'ID de la requête web que vous voulez filtrer.</p>

<p>Vous pouvez imaginer le filtre de flux entre la pile réseau et le moteur de rendu du navigateur. Le filtre passe les données de réponse HTTP au fur et à mesure qu'il est reçu du réseau, et peut examiner et modifier les données avant de les transmettre au moteur de rendu, où elles seront analysées et rendues.</p>

<p>Le filtre génère quatre événements différents :</p>

<ul>
 <li>{{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} lorsque le filtre est sur le point de commencer à recevoir les données de réponse.</li>
 <li>{{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} lorsque des données de réponse ont été reçues par le filtre et sont disponibles pour être examinées ou modifiées.</li>
 <li>{{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} lorsque le filtre a fini de recevoir les données de réponse.</li>
 <li>{{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} si une erreur s'est produite lors de l'initialisation et de l'utilisation du filtre.</li>
</ul>

<p>Vous pouvez écouter chaque événement en assignant une fonction d'écoute à son attribut :</p>

<pre class="brush: js">filter.onstart = event =&gt; {
  console.log("started");
}</pre>

<p>Notez que la demande est bloquée pendant l'exécution de n'importe quel auditeur d'événement.</p>

<p>Le filtre fournit une fonction {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}. A tout moment à partir de l'événement <code>onstart</code>, vous pouvez utiliser cette fonction pour écrire des données dans le flux de sortie.</p>

<p>Si vous assignez des auditeurs à l'un des événements du filtre, alors toutes les données de réponse transmises au moteur de rendu seront fournies par les appels que vous faites pour <code>write()</code>: donc si vous ajoutez un auditeur mais n'appelez pas <code>write()</code>, alors la page rendue sera vide.</p>

<p>Une fois que vous avez terminé d'interagir avec la réponse, vous appelez l'un ou l'autre des éléments suivants :</p>

<ul>
 <li>{{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} : Cela déconnecte le filtre de la requête, de sorte que le reste de la réponse est traité normalement.</li>
 <li>{{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Cela met fin à la demande, de sorte qu'aucune donnée de réponse supplémentaire ne sera traitée.</li>
</ul>

<p>Le filtre fournit également des fonctions à {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} et {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}} la requête.</p>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.close()")}}</dt>
 <dd>Ferme la demande.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}</dt>
 <dd>Déconnecte le filtre de la requête.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.resume()")}}</dt>
 <dd>Reprend le traitement de la demande.</dd>
</dl>

<dl>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}</dt>
 <dd>Suspend le traitement de la demande.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.write()")}}</dt>
 <dd>Écrit quelques données dans le flux de sortie.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.ondata")}}</dt>
 <dd>Gestionnaire d'événements qui est appelé lorsque les données entrantes sont disponibles.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.onerror")}}</dt>
 <dd>Gestionnaire d'événements qui est appelé lorsqu'une erreur s'est produite.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.onstart")}}</dt>
 <dd>Gestionnaire d'événements qui est appelé lorsque le flux est sur le point de commencer à recevoir des données.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.onstop")}}</dt>
 <dd>Gestionnaire d'événements qui est appelé lorsque le flux n'a plus de données à livrer et qu'il s'est fermé.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.error")}}</dt>
 <dd>Quand {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} est appelé, cela décrira l'erreur.</dd>
 <dt>{{WebExtAPIRef("webRequest.StreamFilter.status")}}</dt>
 <dd>Décrit l'état actuel du flux.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webRequest.StreamFilter", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Ce code écoute pour <code>onstart</code>, <code>ondata</code> et <code>onstop</code>. Il enregistre simplement ces événements et les données de réponse elles-mêmes :</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event =&gt; {
    console.log("started");
  }

  filter.ondata = event =&gt; {
    console.log(event.data);
    filter.write(event.data);
  }

  filter.onstop = event =&gt; {
    console.log("finished");
    filter.disconnect();
  }

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
