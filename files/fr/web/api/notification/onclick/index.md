---
title: Notification.onclick
slug: Web/API/notification/onclick
tags:
  - API
  - DOM
  - Notifications
  - Propriété
  - Reference
  - onclick
translation_of: Web/API/Notification/onclick
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p>La propriété <strong><code>onclick</code></strong>, rattachée à l'interface {{domxref("Notification")}}, définit un gestionnaire d'évènement à déclencher lorsque la notification recçoit un évènement {{event("click")}} (qui se produit lorsqu'un utilisateur clique sur la notification).</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>Notification</em>.onclick = function(event) { ... };
</pre>

<p>Le comportement par défaut consiste à déplacer le focus sur la zone d'affichage (<em>viewport</em>) du <a href="https://html.spec.whatwg.org/multipage/browsers.html#browsing-context">contexte de navigation</a> de la notification. Pour éviter ce comportement, on pourra appeler la méthode <code><a href="/fr/docs/Web/API/Event/preventDefault">preventDefault()</a></code> sur l'objet représentant l'évènement.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on utilise le gestionnaire d'évènement <code>onclick</code> pour ouvrir une page dans un nouvel onglet (avec le paramètre <code>'_blank'</code>) lorsqu'on clique sur la notification :</p>

<pre class="brush: js">notification.onclick = function(event) {
  event.preventDefault(); // empêcher le navigateur de passer le focus sur l'onglet de la navigation
  window.open('http://www.mozilla.org', '_blank');
}</pre>

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
   <td>{{SpecName('Web Notifications','#dom-notification-onclick','onclick')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Standard évolutif</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Notification.onclick")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Notification")}}</li>
 <li><a href="/fr/docs/Web/API/notification/Using_Web_Notifications">Utiliser l'API Notifications</a></li>
</ul>
