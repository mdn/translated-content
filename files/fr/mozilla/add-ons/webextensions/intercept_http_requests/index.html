---
title: Intercepter les requêtes HTTP
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
tags:
  - Extensions
  - Modules complémentaires
  - Tutoriel
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
original_slug: Mozilla/Add-ons/WebExtensions/Intercepter_requêtes_HTTP
---
<div>{{AddonSidebar}}</div>

<p>Utilisez l’API {{WebExtAPIRef("webRequest")}} pour intercepter les requêtes HTTP. Avec cette API, vous pouvez ajouter des écouteurs à différents stades d’exécution d’une requête HTTP. Avec les écouteurs, vous pouvez :</p>

<ul>
 <li>accéder aux en-têtes et aux corps, et des en-têtes de réponses ;</li>
 <li>annuler et rediriger les requêtes ;</li>
 <li>modifier les en-têtes de requête et de réponse.</li>
</ul>

<p>Cet article décrit trois utilisations possibles du module <code>webRequest</code> :</p>

<ul>
 <li>La journalisation des URL de requête à mesure de leur exécution.</li>
 <li>La redirection des requêtes.</li>
 <li>La modification des en-têtes de requête.</li>
</ul>

<h2 id="Journalisation_des_URL_de_requête">Journalisation des URL de requête</h2>

<p>Créez un nouveau répertoire et nommez-le "requests". Dans ce répertoire, créez le fichier "manifest.json", avec le contenu suivant :</p>

<pre class="brush: json">{
  "description": "Démonstration du module webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "&lt;all_urls&gt;"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}</pre>

<p>Ensuite, créez un fichier nommé "background.js", avec le contenu suivant :</p>

<pre class="brush: js">function logURL(requestDetails) {
  console.log("Chargement : " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["&lt;all_urls&gt;"]}
);

</pre>

<p>Ici, nous utilisons l’écouteur {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} pour appeler la fonction <code>logURL()</code> juste avant de démarrer la requête. La fonction <code>logURL()</code> récupère l’URL de la requête dans l’objet d’évènement et la journalise dans la console du navigateur. Le <a href="/fr/Add-ons/WebExtensions/Match_patterns">modèle</a> <code>{urls: ["&lt;all_urls&gt;"]} </code>permet d’intercepter les requêtes HTTP vers toutes les URL.</p>

<p>Pour tester ce module, <a href="/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">installez l'extension</a>, <a href="/fr/docs/Tools/Browser_Console">ouvrez la console du navigateur</a> et accédez à quelques pages web. Dans la console du navigateur, les URL de toutes les ressources ayant fait l’objet d’une requête de navigateur devraient s’afficher :</p>

<p>{{EmbedYouTube("X3rMgkRkB1Q")}}</p>

<h2 id="Redirection_des_requêtes">Redirection des requêtes</h2>

<p>Utilisons maintenant <code>webRequest</code> pour rediriger les requêtes HTTP. Commençons par modifier le fichier manifest.json comme suit :</p>

<pre class="brush: json">{

  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/",
    "https://mdn.mozillademos.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }

}</pre>

<p>Ici, il s’agit simplement d’ajouter la <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a></code> <code>"webRequestBlocking"</code>. Cette permission supplémentaire est requise lors de toute modification active d’une requête.</p>

<p>Modifions ensuite le fichier « background.js » comme suit :</p>

<pre class="brush: js">var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redirection : " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);</pre>

<p>Encore une fois, nous utilisons l’écouteur d’évènement {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} pour exécuter une fonction juste avant le démarrage de chaque requête. Cette fonction remplace l’URL cible par l’URL de redirection <code>redirectUrl</code> spécifiée dans la fonction.</p>

<p>Cette fois-ci, toutes les requêtes ne sont pas interceptées. L’option <code>{urls:[pattern], types:["image"]}</code> indique qu’il ne faut intercepter que les requêtes (1) vers des URL résidant sous "https://mdn.mozillademos.org/" (2) pour les ressources d’images. Consultez la documentation {{WebExtAPIRef("webRequest.RequestFilter")}} pour en savoir plus.</p>

<p>À noter également le passage de l’option <code>"blocking"</code>: passez cette option dès que vous souhaitez modifier la requête. La fonction d’écouteur bloque la requête réseau. Le navigateur attend alors que l’écouteur renvoie un résultat avant de continuer. Consultez la documentation {{WebExtAPIRef("webRequest.onBeforeRequest")}} pour en savoir plus sur l’option <code>"blocking"</code>.</p>

<p>Pour tester ce module, ouvrez une page MDN contenant beaucoup d’images (par exemple <a href="/fr/docs/Tools/Network_Monitor">https://developer.mozilla.org/fr/docs/Tools/Network_Monitor</a>), <a href="/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on">rechargez l'extension</a>, puis rechargez la page MDN :</p>

<p>{{EmbedYouTube("ix5RrXGr0wA")}}</p>

<h2 id="Modification_des_en-têtes_de_requête">Modification des en-têtes de requête</h2>

<p>Enfin, nous pouvons utiliser le module <code>webRequest</code> pour modifier les en-têtes de requête. Dans cet exemple, nous allons modifier l’en-tête "User-Agent" afin que le navigateur s’identifie lui-même comme Opera 12.16, mais uniquement en cas de consultation des pages sous http://useragentstring.com/".</p>

<p>Il n’est pas nécessaire de modifier le fichier "manifest.json" par rapport à l’exemple précédent.</p>

<p>Modifiez le code du fichier "background.js" comme suit :</p>

<pre class="brush: js">var targetPage = "http://useragentstring.com/*";

var ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach(function(header){
    if (header.name.toLowerCase() == "user-agent") {
      header.value = ua;
    }
  });
  return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
);</pre>

<p>Ici, nous utilisons l’écouteur d’évènement {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} pour exécuter une fonction juste avant l’envoi des en-têtes de requête.</p>

<p>La fonction d’écouteur n’est appelée qu’en cas de requête vers des URL correspondant au <a href="/fr /Add-ons/WebExtensions/Match_patterns">modèle</a> <code>targetPage</code>. Notez aussi le nouveau passage de l’option <code>"blocking"</code>. Nous avons également passé <code>"requestHeaders"</code>, qui indique que l’écouteur reçoit une liste contenant les en-têtes de requête à envoyer. Consultez la documentation {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} pour en savoir plus sur ces options.</p>

<p>La fonction d’écouteur recherche l’en-tête "User-Agent" dans la liste, remplace sa valeur par celle de la variable <code>ua</code> et renvoie la liste modifiée. Cette dernière est ensuite envoyée au serveur.</p>

<p>Pour tester ce module, accédez à <a href="http://useragentstring.com/">useragentstring.com</a> et vérifiez que le navigateur identifié est Firefox. Rechargez ensuite l'extension, rechargez <a href="http://useragentstring.com/">useragentstring.com</a> et vérifiez que Firefox a été remplacé par Opera :</p>

<p>{{EmbedYouTube("SrSNS1-FIx0")}}</p>

<h2 id="En_savoir_plus">En savoir plus</h2>

<p>Pour en apprendre davantage sur toutes les possibilités de l’API <code>webRequest</code>, consultez la <a href="/fr/Add-ons/WebExtensions/API/WebRequest">documentation de référence</a> correspondante.</p>
