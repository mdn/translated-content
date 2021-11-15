---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - onClosed
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsqu'une notification est fermée, soit par le système, soit par l'utilisateur.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> st l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si <code>listener</code> st enregistré pour cet événement. Renvoie <code>true</code> s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>notificationId</code></dt>
  <dd><code>string</code>. ID de la notification fermée.</dd>
  <dt><code>byUser</code></dt>
  <dd><code>boolean</code>. <code>true</code> si la notification a été fermée par l'utilisateur, ou <code>false</code>si elle a été fermée par le système. Cet argument n'est pas supporté dans Firefox.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.notifications.onClosed")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple simple, nous ajoutons un écouteur à l'événement  {{WebExtAPIRef("notifications.onClosed")}} pour écouter les notifications système fermées. Lorsque cela se produit, nous enregistrons un message approprié à la console.</p>

<pre class="brush: js">browser.notifications.onClosed.addListener(function(notificationId) {
  console.log('Notification ' + notificationId + ' has closed.');
});</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/notifications"><code>chrome.notifications</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
