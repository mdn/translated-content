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
{{AddonSidebar}}

Utilisez l’API {{WebExtAPIRef("webRequest")}} pour intercepter les requêtes HTTP. Avec cette API, vous pouvez ajouter des écouteurs à différents stades d’exécution d’une requête HTTP. Avec les écouteurs, vous pouvez :

- accéder aux en-têtes et aux corps, et des en-têtes de réponses ;
- annuler et rediriger les requêtes ;
- modifier les en-têtes de requête et de réponse.

Cet article décrit trois utilisations possibles du module `webRequest` :

- La journalisation des URL de requête à mesure de leur exécution.
- La redirection des requêtes.
- La modification des en-têtes de requête.

## Journalisation des URL de requête

Créez un nouveau répertoire et nommez-le "requests". Dans ce répertoire, créez le fichier "manifest.json", avec le contenu suivant :

```json
{
  "description": "Démonstration du module webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "<all_urls>"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Ensuite, créez un fichier nommé "background.js", avec le contenu suivant :

```js
function logURL(requestDetails) {
  console.log("Chargement : " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
```

Ici, nous utilisons l’écouteur {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} pour appeler la fonction `logURL()` juste avant de démarrer la requête. La fonction `logURL()` récupère l’URL de la requête dans l’objet d’évènement et la journalise dans la console du navigateur. Le [modèle](/fr/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]} `permet d’intercepter les requêtes HTTP vers toutes les URL.

Pour tester ce module, [installez l'extension](/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), [ouvrez la console du navigateur](/fr/docs/Tools/Browser_Console) et accédez à quelques pages web. Dans la console du navigateur, les URL de toutes les ressources ayant fait l’objet d’une requête de navigateur devraient s’afficher :

{{EmbedYouTube("X3rMgkRkB1Q")}}

## Redirection des requêtes

Utilisons maintenant `webRequest` pour rediriger les requêtes HTTP. Commençons par modifier le fichier manifest.json comme suit :

```json
{

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

}
```

Ici, il s’agit simplement d’ajouter la [`permission`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"webRequestBlocking"`. Cette permission supplémentaire est requise lors de toute modification active d’une requête.

Modifions ensuite le fichier « background.js » comme suit :

```js
var pattern = "https://mdn.mozillademos.org/*";

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
);
```

Encore une fois, nous utilisons l’écouteur d’évènement {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} pour exécuter une fonction juste avant le démarrage de chaque requête. Cette fonction remplace l’URL cible par l’URL de redirection `redirectUrl` spécifiée dans la fonction.

Cette fois-ci, toutes les requêtes ne sont pas interceptées. L’option `{urls:[pattern], types:["image"]}` indique qu’il ne faut intercepter que les requêtes (1) vers des URL résidant sous "https\://mdn.mozillademos.org/" (2) pour les ressources d’images. Consultez la documentation {{WebExtAPIRef("webRequest.RequestFilter")}} pour en savoir plus.

À noter également le passage de l’option `"blocking"`: passez cette option dès que vous souhaitez modifier la requête. La fonction d’écouteur bloque la requête réseau. Le navigateur attend alors que l’écouteur renvoie un résultat avant de continuer. Consultez la documentation {{WebExtAPIRef("webRequest.onBeforeRequest")}} pour en savoir plus sur l’option `"blocking"`.

Pour tester ce module, ouvrez une page MDN contenant beaucoup d’images (par exemple [https://developer.mozilla.org/fr/docs/Tools/Network_Monitor](/fr/docs/Tools/Network_Monitor)), [rechargez l'extension](/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on), puis rechargez la page MDN :

{{EmbedYouTube("ix5RrXGr0wA")}}

## Modification des en-têtes de requête

Enfin, nous pouvons utiliser le module `webRequest` pour modifier les en-têtes de requête. Dans cet exemple, nous allons modifier l’en-tête "User-Agent" afin que le navigateur s’identifie lui-même comme Opera 12.16, mais uniquement en cas de consultation des pages sous http\://useragentstring.com/".

Il n’est pas nécessaire de modifier le fichier "manifest.json" par rapport à l’exemple précédent.

Modifiez le code du fichier "background.js" comme suit :

```js
var targetPage = "http://useragentstring.com/*";

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
);
```

Ici, nous utilisons l’écouteur d’évènement {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} pour exécuter une fonction juste avant l’envoi des en-têtes de requête.

La fonction d’écouteur n’est appelée qu’en cas de requête vers des URL correspondant au [modèle](</fr /Add-ons/WebExtensions/Match_patterns>) `targetPage`. Notez aussi le nouveau passage de l’option `"blocking"`. Nous avons également passé `"requestHeaders"`, qui indique que l’écouteur reçoit une liste contenant les en-têtes de requête à envoyer. Consultez la documentation {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} pour en savoir plus sur ces options.

La fonction d’écouteur recherche l’en-tête "User-Agent" dans la liste, remplace sa valeur par celle de la variable `ua` et renvoie la liste modifiée. Cette dernière est ensuite envoyée au serveur.

Pour tester ce module, accédez à [useragentstring.com](http://useragentstring.com/) et vérifiez que le navigateur identifié est Firefox. Rechargez ensuite l'extension, rechargez [useragentstring.com](http://useragentstring.com/) et vérifiez que Firefox a été remplacé par Opera :

{{EmbedYouTube("SrSNS1-FIx0")}}

## En savoir plus

Pour en apprendre davantage sur toutes les possibilités de l’API `webRequest`, consultez la [documentation de référence](/fr/Add-ons/WebExtensions/API/WebRequest) correspondante.
