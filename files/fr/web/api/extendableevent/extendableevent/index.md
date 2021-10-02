---
title: ExtendableEvent.ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
tags:
  - API
  - Experimental
  - ExtendableEvent
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/ExtendableEvent/ExtendableEvent
---
<p>{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}</p>

<p>Le contructeur <code><strong>ExtendableEvent()</strong></code> crée un nouvel objet {{domxref("ExtendableEvent")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var myExtendableEvent = new ExtendableEvent(type, init);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>type</em></dt>
 <dd>Le type de l'ExtendableEvent, par exemple {{Event("install")}}, {{Event("activate")}}.</dd>
 <dt><em>init</em> {{optional_inline}}</dt>
 <dd>Un objet d'options contenant n'importe quelle configuration personnalisée que vous voulez appeler à un objet d'évènement. Pour le moment, il n'existe pas d'option dans la spécification, mais il a été défini pour une compatibilité future pour les différents évènements dérivés.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#extendable-event', 'ExtendableEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_des_navigateurs">Compatibilités des navigateurs</h2>

<p>{{Compat("api.ExtendableEvent.ExtendableEvent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utilisation des Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Exemple simple de service workers</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Les  ServiceWorker sont-ils prêts?</a></li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/en-US/docs/Web/Guide/Performance/Using_web_workers">Utilisation performante des web workers</a></li>
</ul>
