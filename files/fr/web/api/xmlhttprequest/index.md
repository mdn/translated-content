---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
tags:
  - AJAX
  - API
  - HTTP
  - Interface
  - Reference
  - Web
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest
---
<div>{{DefaultAPISidebar("XMLHttpRequest")}}</div>

<p>Les objets <code>XMLHttpRequest</code> (XHR) permettent d'interagir avec des serveurs. On peut récupérer des données à partir d'une URL sans avoir à rafraîchir complètement la page. Cela permet à une page web d'être mise à jour sans perturber les actions de l'utilisateur.</p> 

<p><code>XMLHttpRequest</code> est beaucoup utilisé par l'approche {{Glossary("AJAX")}}.</p>

<p>{{InheritanceDiagram(650, 150)}}</p>

<p>Malgré son nom, <code>XMLHttpRequest</code> peut être utilisé afin de récupérer tout type de données et pas uniquement du XML.</p>

<p>Si vos opérations de communication nécessitent l'échange d'évènements ou de messages avec un serveur, pensez à utiliser <a href="/fr/docs/Web/API/Server-sent_events">les évènements serveur</a> via l'interface {{domxref("EventSource")}}. Pour une communication bidirectionnelle complète, les <a href="/fr/docs/Web/API/WebSockets_API">WebSockets</a> peuvent être une meilleure alternative.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}</dt>
 <dd>Le constructeur initialise un objet <code>XMLHttpRequest</code>. Il doit être appelé avant toute autre méthode.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cette interface hérite également des propriétés de {{domxref("XMLHttpRequestEventTarget")}} et de {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("XMLHttpRequest.onreadystatechange")}}</dt>
 <dd>Un gestionnaire d'évènement ({{event("Event_handlers", "event handler")}}) invoqué à chaque fois que l'attribut <code>readyState</code> change.</dd>
 <dt>{{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}</dt>
 <dd>L'état de la requête sous la forme d'un <code>unsigned short</code>.</dd>
 <dt>{{domxref("XMLHttpRequest.response")}} {{readonlyinline}}</dt>
 <dd>Un objet {{jsxref("ArrayBuffer")}}, {{domxref("Blob")}}, {{domxref("Document")}}, un objet JavaScript ou une chaîne de caractères ({{domxref("DOMString")}}) selon la valeur de {{domxref("XMLHttpRequest.responseType")}}. Cet objet contient le corps de la réponse.</dd>
 <dt>{{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}</dt>
 <dd>Une chaîne de caractères {{domxref("DOMString")}} qui contient la réponse à la requête sous forme de texte ou la valeur <code>null</code> si la requête a échoué ou n'a pas encore été envoyée.</dd>
 <dt>{{domxref("XMLHttpRequest.responseType")}}</dt>
 <dd>Une valeur parmi une liste qui définit le type de réponse.</dd>
 <dt>{{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}</dt>
 <dd>L'URL sérialisée de la réponse ou la chaîne vide si l'URL est nulle.</dd>
 <dt>{{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}</dt>
 <dd>Un objet {{domxref("Document")}} qui contient la réponse de la requête ou <code>null</code> si la requête a échoué, qu'elle n'a pas encore été envoyée ou qu'elle ne peut pas être analysée comme XML ou HTML. Cette propriété n'est pas disponible dans les <em>workers</em>.</dd>
 <dt>{{domxref("XMLHttpRequest.status")}} {{readonlyinline}}</dt>
 <dd>Une valeur numérique <code>unsigned short</code> qui décrit le statut de la réponse à la requête.</dd>
 <dt>{{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}</dt>
 <dd>Une chaîne {{domxref("DOMString")}} qui contient la chaîne de caractères / réponse renvoyée par le serveur HTTP. À la différence de {{domxref("XMLHttpRequest.status")}}, tout le texte du statut est inclus ("<code>200 OK</code>" plutôt que "<code>200</code>" par exemple).</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Selon la spécification HTTP/2 (<a href="https://http2.github.io/http2-spec/#rfc.section.8.1.2.4">voir 8.1.2.4</a> <a href="https://http2.github.io/http2-spec/#HttpResponse">Response Pseudo-Header Fields</a>), HTTP/2 ne définit pas de méthode pour porter la version ou la raison/phrase incluse dans la ligne de statut HTTP/1.1.</p>
</div>

<dl>
 <dt>{{domxref("XMLHttpRequest.timeout")}}</dt>
 <dd>Un entier <code>unsigned long</code> qui représente le nombre de millisecondes qu'une requête peut prendre avant d'être terminée automatiquement.</dd>
 <dt>{{domxref("XMLHttpRequestEventTarget.ontimeout")}}</dt>
 <dd>Un gestionnaire d'évènement ({{event("Event_handlers", "event handler")}}) appelé lorsque la requête a expiré. {{gecko_minversion_inline("12.0")}}</dd>
 <dt>{{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}</dt>
 <dd>Un objet {{domxref("XMLHttpRequestUpload")}} qui représente le processus d'<em>upload</em>.</dd>
 <dt>{{domxref("XMLHttpRequest.withCredentials")}}</dt>
 <dd>Un booléen ({{domxref("Boolean")}}) qui indique si des requêtes <code>Access-Control</code> d'origines différentes peuvent être effectuées avec des informations d'authentification telles que des cookies ou des en-têtes d'autorisation.</dd>
</dl>

<h3 id="Propriétés_non-standard">Propriétés non-standard</h3>

<dl>
 <dt>{{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}</dt>
 <dd>Un objet {{Interface("nsIChannel")}}. Le canal à utiliser par l'objet lorsqu'il effectue la requête.</dd>
 <dt>{{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}</dt>
 <dd>Un booléen. S'il est vrai, la requête sera envoyée sans cookie ou en-tête d'autorisation.</dd>
 <dt>{{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}</dt>
 <dd>Un booléen. S'il est vrai, la politique d'origine unique ne sera pas vérifiée pour la requête.</dd>
 <dt>{{domxref("XMLHttpRequest.mozBackgroundRequest")}}</dt>
 <dd>Un booléen qui indique si l'objet représente une requête de service en arrière-plan.</dd>
 <dt>{{domxref("XMLHttpRequest.mozResponseArrayBuffer")}}{{gecko_minversion_inline("2.0")}} {{obsolete_inline("6")}} {{ReadOnlyInline}}</dt>
 <dd>Un objet {{jsxref("ArrayBuffer")}} qui est la réponse à la requête sous la forme d'un tableau typé JavaScript.</dd>
 <dt>{{domxref("XMLHttpRequest.multipart")}}{{obsolete_inline("22")}}</dt>
 <dd><strong>Cette fonctionnalité spécifique à Gecko a été retirée avec Firefox/Gecko 22.</strong> Veuillez utiliser <a href="/fr/docs/Web/API/Server-sent_events">les évènements serveurs</a> ou <a href="/fr/docs/Web/API/WebSockets_API">les web sockets</a> ou encore la propriété <code>responseText</code> des évènements de progression.</dd>
</dl>

<h3 id="Gestionnaires_dévènement">Gestionnaires d'évènement</h3>

<p>Le gestionnaire <code>onreadystatechange</code>, comme propriété des instances <code>XMLHttpRequest</code>, est pris en charge par l'ensemble des navigateurs.</p>

<p>D'autres gestionnaires d'évènements ont également été implémentés dans différents navigateurs (<code>onload</code>, <code>onerror</code>, <code>onprogress</code>, etc.). Voir le guide <a href="/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest">Manipuler XMLHttpRequest</a>.</p>

<p>La plupart des navigateurs récents gère également les évènements via la méthode {{domxref("EventTarget.addEventListener", "addEventListener()")}} (en plus des méthodes  <code>on*</code>).</p>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("XMLHttpRequest.abort()")}}</dt>
 <dd>Interrompt la requête si elle a déjà été envoyée.</dd>
 <dt>{{domxref("XMLHttpRequest.getAllResponseHeaders()")}}</dt>
 <dd>Renvoie, via une chaîne de caractères, l'ensemble des en-têtes de la réponse, séparés par {{Glossary("CRLF")}} ou la valeur <code>null</code> si aucune réponse n'a été reçue.</dd>
 <dt>{{domxref("XMLHttpRequest.getResponseHeader()")}}</dt>
 <dd>Renvoie la chaîne de caractères contenant le texte de l'en-tête voulue ou <code>null</code> si aucune des réponse n'a été reçue ou si l'en-tête n'existe pas dans la réponse.</dd>
 <dt>{{domxref("XMLHttpRequest.open()")}}</dt>
 <dd>Initialise une requête. Cette méthode doit être utilisée par du code JavaScript.</dd>
 <dt>{{domxref("XMLHttpRequest.overrideMimeType()")}}</dt>
 <dd>Surcharge le type MIME renvoyé par le serveur.</dd>
 <dt>{{domxref("XMLHttpRequest.send()")}}</dt>
 <dd>Envoie la requête. Si la requête est asynchrone (le comportement par défaut), la méthode renvoie un résultat dès que la requête est envoyée.</dd>
 <dt>{{domxref("XMLHttpRequest.setRequestHeader()")}}</dt>
 <dd>Définit la valeur d'un en-tête de requête HTTP. Cette méthode doit être appelée après <code>open()</code> mais avant<code>send()</code>.</dd>
</dl>

<h3 id="Méthodes_non-standard">Méthodes non-standard</h3>

<dl>
 <dt>{{domxref("XMLHttpRequest.init()")}}</dt>
 <dd>Initialise l'objet depuis pour une utilisation depuis du code C++.</dd>
</dl>

<div class="warning">
  <p><strong>Attention :</strong> Cette méthode ne doit pas être appelée depuis du code JavaScript.</p>
</div>

<dl>
 <dt>{{domxref("XMLHttpRequest.openRequest()")}}</dt>
 <dd>Initialise une requête depuis du code natif. Voir la méthode <a href="/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequest#open()"><code>open()</code></a> ci-avant pour initialiser une requête de façon standard en JavaSCript.</dd>
 <dt>{{domxref("XMLHttpRequest.sendAsBinary()")}}{{deprecated_inline()}}</dt>
 <dd>Une variante de <code>send()</code> afin d'envoyer des données binaires.</dd>
</dl>

<h2 id="Évènements">Évènements</h2>

<dl>
 <dt>{{domxref("XMLHttpRequest/abort_event", "abort")}}</dt>
 <dd>Se déclenche lorsqu'une requête a été interrompue (par exemple via {{domxref("XMLHttpRequest.abort()")}}). Le gestionnaire<br>
 {{domxref("XMLHttpRequestEventTarget/onabort", "onabort")}} est également disponible.</dd>
 <dt>{{domxref("XMLHttpRequest/error_event", "error")}}</dt>
 <dd>Se déclenche lorsqu'une requête a rencontré une erreur.<br>
 Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onerror", "onerror")}} est également disponible.</dd>
 <dt>{{domxref("XMLHttpRequest/load_event", "load")}}</dt>
 <dd>Se déclenche lorsqu'une transaction {{domxref("XMLHttpRequest")}} se termine correctement. Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onload", "onload")}} est également disponible.</dd>
 <dt>{{domxref("XMLHttpRequest/loadend_event", "loadend")}}</dt>
 <dd>Se déclenche lorsqu'une requête est terminée (avec une erreur ou non). Quand elle a réussi, l'évènement a lieu après {{domxref("XMLHttpRequest/load_event", "load")}}). Quand elle a échoué, l'évènement survient après {{domxref("XMLHttpRequest/error_event", "error")}}).<br>
 Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onloadend", "onloadend")}} est également disponible.</dd>
 <dt>{{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}</dt>
 <dd>Se déclenche lorsqu'une requête commence à charger des données.<br>
 Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onloadstart", "onloadstart")}} est également disponible.</dd>
 <dt>{{domxref("XMLHttpRequest/progress_event", "progress")}}</dt>
 <dd>Se déclenche périodiquement lorsqu'une requête reçoit des données supplémentaires. Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}} est également disponible.</dd>
 <dt>{{domxref("XMLHttpRequest/timeout_event", "timeout")}}</dt>
 <dd>Se déclenche lorsque la progression est terminée du fait de l'expiration de la durée limite. Le gestionnaire {{domxref("XMLHttpRequestEventTarget/ontimeout", "ontimeout")}} est également disponible.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>Standard évolutif, version la plus récente.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("api.XMLHttpRequest")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("XMLSerializer")}} : sérialiser un arbre DOM en XML</li>
 <li>Les tutoriels MDN sur <code>XMLHttpRequest</code>:
  <ul>
   <li><a href="/fr/docs/Web/Guide/AJAX/Premiers_pas">Introduction à AJAX</a></li>
   <li><a href="/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest">Utiliser XMLHttpRequest</a></li>
   <li><a href="/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">Manipuler le HTML avec XMLHttpRequest</a></li>
   <li><a href="/fr/docs/Web/API/Fetch_API">L'API Fetch</a></li>
  </ul>
 </li>
 <li><a href="https://www.html5rocks.com/en/tutorials/file/xhr2/">HTML5 Rocks — Nouvelles astuces avec XMLHttpRequest2 (en anglais)</a></li>
</ul>
