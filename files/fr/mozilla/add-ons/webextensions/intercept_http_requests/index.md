---
title: Intercepter les requêtes HTTP
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---

{{AddonSidebar}}

Afin d'intercepter les requêtes HTTP, on pourra utiliser l'API [`webRequest`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest). Cette API permet d'ajouter des gestionnaires d'évènements pour traiter les différentes étapes d'une requête HTTP.

Avec ces gestionnaires d'évènements, on peut&nbsp;:

- Accéder aux en-têtes et aux corps des requêtes et des réponses
- Annuler et rediriger les requêtes
- Modifier les en-têtes de requête et de réponse

Dans cet article, nous verrons trois utilisations du module `webRequest`&nbsp;:

- Journaliser les URL des requêtes lorsqu'elles sont émises
- Rediriger les requêtes
- Modifier les en-têtes de requête

## Journaliser les URL des requêtes

Pour voir comment utiliser `webRequest` afin de journaliser les requêtes, créez un nouveau répertoire intitulé `requests`. Dans ce répertoire, créez un fichier nommé `manifest.json` et éditez-le afin qu'il contienne ce qui suit&nbsp;:

```json
{
  "description": "Demo pour webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Ensuite, créez `background.js` et ajoutez-y ceci&nbsp;:

```js
function logURL(requestDetails) {
  console.log("Chargement de : " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

On utilise ici [`onBeforeRequest`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) pour appeler la fonction `logURL()` juste avant que la requête soit émise. La fonction `logURL()` récupère l'URL de la requête à partir de l'objet représentant l'évènement et l'affiche dans la console du navigateur.
Le [motif de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]}` indique qu'on souhaite intercepter les requêtes HTTP pour toutes les URL.

Pour tester cette extension&nbsp;:

- [Installez l'extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- Ouvrez [la console du navigateur](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/) (vous pouvez utiliser le raccourci clavier <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>J</kbd>)
- Activez l'option _Afficher les messages de contenu_ dans le menu&nbsp;:

  ![Menu de la console du navigateur avec l'option Afficher les messages de contenu](browser_console_show_content_messages.png)

- Ouvrez différentes pages web

Dans la console, vous pourrez voir les URL des ressources pour lesquelles le navigateur émet des requêtes.
Dans la capture d'écran qui suit, on voit les URL des requêtes qui ont lieu lors du chargement d'une page Wikipédia&nbsp;:

![Menu de la console du navigateur : URL affichées depuis une extension](browser_console_url_from_extension.png)

## Rediriger les requêtes

Nous allons ici utiliser `webRequest` pour rediriger des requêtes HTTP. Pour commencer, remplacer le contenu du fichier `manifest.json` avec ceci&nbsp;:

```json
{
  "description": "Demo pour webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Voici les modifications apportées&nbsp;:

- La permission `webRequestBlocking` [`permission`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) est ajoutée. Elle est nécessaire lorsqu'une extension souhaite modifier une requête.
- On remplace la permission `<all_urls>` avec [une permission d'hôte individuelle](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#les_permissions_dhôte). C'est une bonne pratique pour minimiser les permissions nécessaires.

Ensuite, remplacez le contenu de `background.js` avec&nbsp;:

```js
let pattern = "https://developer.mozilla.org/*";
let targetUrl =
  "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log("Redirection : " + requestDetails.url);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Là encore, on utilise le gestionnaire d'évènement [`onBeforeRequest`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) pour exécuter une fonction juste avant que la requête soit émise. Cette fonction remplace `redirectUrl` avec l'URL cible indiquée dans la fonction. Ici, il s'agit d'une image de grenouille tirée [de notre deuxième tutoriel sur les extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

Cette fois, toutes les requêtes ne sont pas interceptées. L'option `{urls:[pattern], types:["image"]}` indique qu'on intercepte uniquement les requêtes pour&nbsp;:

- Les URL sous `https://developer.mozilla.org/`
- _Et_ qui sont des images.

Voir [`webRequest.RequestFilter`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) pour plus d'informations.

On notera également le passage de l'option `"blocking"`. Celle-ci doit être passée à chaque fois qu'on modifie une requête. Avec cette option, le gestionnaire d'évènement bloque la requête réseau et le navigateur attend que le gestionnaire ait fini son exécution avant de continuer. Voir la documentation sur [`onBeforeRequest`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) pour plus de détails sur `"blocking"`.

Pour tester cette extension, ouvrez une page de MDN qui contient des images (par exemple, [celle qui liste les éléments d'interface utilisateur d'une extension](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface)), [rechargez l'extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), puis rechargez la page MDN. Vous devriez voir quelque chose comme&nbsp;:

![Les images sur la page ont été remplacées par une image de grenouille](beastify_by_redirect.png)

## Modifier les en-têtes de requêtes

Dans ce dernier exemple, nous allons utiliser `webRequest` afin de modifier les en-têtes de requêtes.
Dans cet exemple, on change l'en-tête [`User-Agent`](/fr/docs/Web/HTTP/Headers/User-Agent) afin que le navigateur s'identifie comme Opera 12, uniquement lorsqu'on visite les pages situées sous `http://useragentstring.com/`.

Modifiez le fichier `manifest.json` afin d'inclure `http://useragentstring.com/` comme ceci&nbsp;:

```json
{
  "description": "Demo pour webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "http://useragentstring.com/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Remplacez le code de `background.js` avec ce qui suit&nbsp;:

```js
let targetPage = "http://useragentstring.com/*";

let ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach(function (header) {
    if (header.name.toLowerCase() == "user-agent") {
      header.value = ua;
    }
  });
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

On utilise le gestionnaire d'évènement [`onBeforeSendHeaders`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders) pour exécuter une fonction juste avant que les en-têtes de requêtes soient envoyés.

Ce gestionnaire est uniquement appelé pour les requêtes dont les URL correspondent au [motif](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `targetPage`. On notera que `"blocking"` est toujours présent comme option. On voit également l'option `"requestHeaders"`, qui indique que le gestionnaire d'évènement fournira un tableau d'en-têtes de requête à envoyer. Voir [`webRequest.onBeforeSendHeaders`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders) pour plus d'informations sur ces options.

La fonction exécutée recherche l'en-tête `User-Agent` dans le tableau des en-têtes de requêtes fournis et remplace sa valeur avec celle de la variable `ua` puis renvoie le tableau ainsi modifié. Ce sont les en-têtes de ce tableau modifié qui sont envoyés au serveur.

Pour tester cette extension, ouvrez la page [http://useragentstring.com](http://useragentstring.com/) et vérifiez que votre navigateur est identifié comme Firefox. Ensuite, rechargez l'extension puis la page [useragentstring.com](http://useragentstring.com/), et vous pourrez voir que votre navigateur est désormais identifié comme Opera.

![useragentstring.com affichant les détails de la chaîne d'agent utilisateur modifiée](modified_request_header.png)

## Voir aussi

Pour en savoir plus sur tout ce qu'il est possible de réaliser avec l'API `webRequest`, vous pouvez consulter [la documentation de référence sur `webRequest`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
