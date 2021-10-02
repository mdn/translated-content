---
title: WorkerLocation
slug: Web/API/WorkerLocation
tags:
  - API
  - Web Workers
translation_of: Web/API/WorkerLocation
---
<div>{{APIRef("Web Workers API")}}</div>

<p>L'interface <strong><code>WorkerLocation</code></strong> définit l'emplacement complet du script exécuté par le {{domxref("Worker")}}. Un tel objet est initialisé pour chaque <em>worker </em>et est disponible via la propriété {{domxref("WorkerGlobalScope.location")}} récupérée par l'appel à <code>window.self.location</code>.</p>

<p>Cette interface est uniquement visible à l'intérieur d'un script JavaScript exécuté dans le contexte d'un <em>web worker</em>.</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface <code>WorkerLocation</code> n'hérite d'aucune propriété mais implémente les propriétés définies par l'interface {{domxref("URLUtilsReadOnly")}}.</em></p>

<dl>
 <dt>{{domxref("URLUtilsReadOnly.href")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant la totalité de URL du script exécuté dans le {{domxref("Worker")}}.</dd>
 <dt>{{domxref("URLUtilsReadOnly.protocol")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant le schéma du protocole de l'URL du script exécuté dans le {{domxref("Worker")}}, incluant les deux points de terminaison<code>':'</code>.</dd>
 <dt>{{domxref("URLUtilsReadOnly.host")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant l'hôte, constitué du nom d'hôte <em>hostname</em>, de deux points <code>':'</code>, et du numéro de <em>port</em> de l'URL du script exécuté dans le {{domxref("Worker")}}.</dd>
 <dt>{{domxref("URLUtilsReadOnly.hostname")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant le nom de domaine du script exécuté dans le {{domxref("Worker")}}.</dd>
 <dt>{{domxref("URLUtilsReadOnly.origin")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant l'origine de l'URL sous sa forme canonique.</dd>
 <dt>{{domxref("URLUtilsReadOnly.port")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant le numéro de port de l'URL du script exécuté dans le {{domxref("Worker")}}.</dd>
 <dt>{{domxref("URLUtilsReadOnly.pathname")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant une barre oblique initiale <code>'/'</code> suivie du chemin de l'URL du script exécuté dans le {{domxref("Worker")}}.</dd>
 <dt>{{domxref("URLUtilsReadOnly.search")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant un point d'interrogation intial <code>'?'</code> suivi des paramètres de l'URL du script exécuté dans le {{domxref("Worker")}}.</dd>
 <dt>{{domxref("URLUtilsReadOnly.hash")}} {{readOnlyInline}}</dt>
 <dd>{{domxref("DOMString")}} contenant un dièse initial <code>'#'</code> suivi de l'identifiant de l'ancre de l'URL du script exécuté dans le {{domxref("Word'hôteker")}}.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>L'interface <code>WorkerLocation</code> n'hérite d'aucune méthode mais implémente les méthodes définies par l'interface {{domxref("URLUtilsReadOnly")}}.</em></p>

<dl>
 <dt>{{domxref("URLUtilsReadOnly.toString()")}}</dt>
 <dd>Retourne une chaîne de caractères {{domxref("DOMString")}} contenant l'URL complète du script exécuté dans le {{domxref("Worker")}}. C'est un synonyme de la propriété {{domxref("URLUtilsReadOnly.href")}}.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#workerlocation', 'WorkerLocation')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.WorkerLocation")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Autres interfaces apparentées au <em>Worker</em>: {{domxref("Worker")}}, {{domxref("WorkerNavigator")}} et {{domxref("WorkerGlobalScope")}}.</li>
 <li><a href="/fr/docs/Utilisation_des_web_workers">Utilisation des web workers</a></li>
</ul>
