---
title: notifications.onButtonClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - onButtonClicked
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsque l'utilisateur clique sur l'un des boutons de la notification.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.notifications.onButtonClicked.addListener(listener)
browser.notifications.onButtonClicked.removeListener(listener)
browser.notifications.onButtonClicked.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument de <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si <code>listener</code> est enregistré pour cet événement. Renvoie <code>true</code> s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>notificationId</code></dt>
  <dd><code>string</code>. ID de la notification sur laquelle le bouton a été cliqué.</dd>
  <dt><code>buttonIndex</code></dt>
  <dd><code>integer</code>. L'index <a href="https://en.wikipedia.org/wiki/Zero-based_numbering">zero-based</a> du bouton sur lequel vous avez cliqué.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.notifications.onButtonClicked")}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/notifications"><code>chrome.notifications</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
