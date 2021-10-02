---
title: Notification.icon
slug: Web/API/notification/icon
tags:
  - API
  - API Notifications
  - Icône
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/icon
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p>La propriété en lecture seule <strong><code>icon</code></strong> de l'interface {{domxref ("Notification")}} contient l'URL d'une icône à afficher dans le cadre de la notification, comme définis à l'aide de l'option <code>icon</code> lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification"," Notification()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>Notification</var>.icon
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une {{domxref("USVString")}}.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-notification-icon','icon')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Notification.icon")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API">Utilisation de l'API Notifications</a></li>
</ul>
