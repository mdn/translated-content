---
title: Notification.tag
slug: Web/API/notification/tag
tags:
  - API
  - API Notifications
  - Balise
  - Notification
  - Notifications
  - Propriété
  - Reference
  - tag
translation_of: Web/API/Notification/tag
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p>La propriété en lecture seule <code><strong>tag</strong></code> de l'interface {{domxref ("Notification")}} correspond à une balise d'identification pour la notification, comme définis à l'aide de l'option <code>tag</code> lors de la création de la notification à l'aide du constructeur {{domxref ("Notification.Notification", "Notification()" )}}.</p>

<p>L'idée des balises de notification est que plusieurs notifications peuvent partager la même balise, les reliant entre elles. Une notification peut ensuite être programmatiquement remplacée par une autre pour éviter que l'écran des utilisateurs ne soit rempli d'un grand nombre de notifications similaires.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>Notification</var>.tag
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une {{domxref("DOMString")}}.</p>

<h2 id="Spécifications">Spécifications</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-notification-tag','tag')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Notification.tag")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API">Utilisation de l'API Notifications</a></li>
</ul>
