---
title: GlobalEventHandlers.onerror
slug: Web/API/GlobalEventHandlers/onerror
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
translation_of: Web/API/GlobalEventHandlers/onerror
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>Un <a href="/en-US/docs/Web/Guide/Events/Event_handlers">gestionnaire d'événement</a> pour l'événement <code><a href="/en-US/docs/Web/Events/error">error</a></code>. Des événements d'erreur sont déclenchés vers diverses cibles et pour différents types d'erreurs:</p>

<ul>
 <li>Lorsqu'une <strong>erreur de runtime JavaScript</strong> se produit (erreurs de syntaxe comprises), un évènement <code><a href="/en-US/docs/Web/Events/error">error</a></code> utilisant l'interface {{domxref("ErrorEvent")}} est envoyé à {{domxref("window")}}, et <code>window.onerror()</code> est appelé.</li>
 <li>Lorsque le <strong>chargement d'une ressource</strong> (telle que {{HTMLElement("img")}} ou {{HTMLElement("script")}}) <strong>échoue</strong>, un événement <code><a href="/en-US/docs/Web/Events/error">error</a></code> utilisant l'interface {{domxref("Event")}} est déclenché sur l'élément qui a initié le chargement, et le gestionnaire <code>onerror()</code> de l'élément est invoqué. Ces évènements d'erreur ne remontent pas à window, mais (au moins dans FireFox) ils peuvent être gérés par une unique capture {{domxref("window.addEventListener")}}.</li>
</ul>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Pour des raisons historiques, des arguments différents sont passés aux gestionnaires <code>window.onerror</code> et <code>element.onerror</code>.</p>

<h3 id="window.onerror">window.onerror</h3>

<pre class="brush: js">window.onerror = function(messageOrEvent, source, noligne, nocolonne, erreur) { ... }</pre>

<p>Paramètres de la fonction :</p>

<ul>
 <li><code>message </code>: message d'erreur (chaîne ou objet évènement). Disponible comme <code>event</code> (sic !) dans le gestionnaire de HTML <code>onerror=""</code> et aussi comme objet évènement lors de l'envoi d'un <a href="/en-US/docs/Web/API/Event">Event</a> à <code>window,</code> auquel cas les autres arguments ne seront pas fournis (au contraire de <a href="/en-US/docs/Web/API/ErrorEvent">ErrorEvent</a>, qui amène le passage de l'ensemble complet des arguments à <code>window.onerror</code>, tandis que seul l'objet d'évènement d'erreur est  passé aux gestionnaires de<code> window.addEventListener('error'))</code></li>
 <li>source : l'URL du script où l'erreur a été déclenchée (chaîne)</li>
 <li>noligne : le numéro de ligne où l'erreur a été déclenchée (nombre)</li>
 <li>nocolonne : le numéro de colonne où l'erreur a été déclenchée (nombre)</li>
 <li>erreur : un <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error Object</a> (objet) {{gecko_minversion_inline("31.0")}}</li>
</ul>

<h3 id="element.onerror_(et_window.addEventListener('error'))">element.onerror (et <code>window.addEventListener('error')</code>)</h3>

<pre><code>element.onerror = function(event) { ... }</code></pre>

<p><code>element.onerror</code> accepte une fonction avec un argument unique de type {{domxref("Event")}}.</p>

<h2 id="Notes">Notes</h2>

<p>Quand une erreur de syntaxe<strong>(?)</strong> se produit dans un script chargé à partir d'une <a href="/en-US/docs/Web/Security/Same-origin_policy">origine différente</a>, les détails de l'erreur de syntaxe ne sont pas rapportés, afin de prévenir la fuite d'information (voir {{bug("363897")}}). A la place, l'erreur est simplement reportée en tant que <code><strong>"Script error"</strong></code>. Ce comportement peut être surchargé par certains navigateurs en utilisant l'attribut <code>{{htmlattrxref("crossorigin","script")}}</code> de {{HTMLElement("script")}} et en faisant en sorte que le serveur envoie les entêtes de réponse <a href="/en-US/docs/Web/HTTP/Access_control_CORS">CORS</a> HTTP appropriés. Un contournement consiste à isoler "Script error" et à la gérer en sachant que les détails de l'erreur ne sont visibles que la console du navigateur et non accessibles en JavaScript.</p>

<pre><code>window.onerror = function (msg, url, noLigne, noColonne, erreur) {
    var chaine = msg.toLowerCase();
    var souschaine = "script error";
    if (chaine.indexOf(souschaine) &gt; -1){
        alert('Script Error : voir la Console du Navigateur pour les Détails');
    } else {
        var message = [
            'Message : ' + msg,
            'URL : ' + url,
            'Ligne : ' + noLigne,
            'Colonne : ' + noColonne,
            'Objet Error : ' + JSON.stringify(erreur)
        ].join(' - ');

        alert(message);
    }

    return false;
};</code></pre>

<p>Lors de l'utilisation du balisage html intégré (&lt;body onerror="alert('une erreur est survenue')&gt;...), la spécification HTML requiert que les arguments passés à <code>onerror</code> soient nommés <code>event</code>, <code>source</code>, <code>lineno</code>, <code>colno</code>, <code>error</code>. Dans les navigteurs qui n'ont pas implémenté cette obligation, ils peuvent toujours être obtenus via <code>arguments[0]</code> à <code>arguments[2]</code>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG','webappapis.html#handler-onerror','onerror')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.GlobalEventHandlers.onerror")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://blog.getsentry.com/2016/01/04/client-javascript-reporting-window-onerror.html">Capture and report JavaScript errors with window.onerror (blog.getsentry.com, 2016)</a></li>
 <li><a href="https://danlimerick.wordpress.com/2014/01/18/how-to-catch-javascript-errors-with-window-onerror-even-on-chrome-and-firefox/">How to catch JavaScript Errors with window.onerror (even on Chrome and Firefox) (danlimerick.wordpress.com, 2014)</a></li>
</ul>
