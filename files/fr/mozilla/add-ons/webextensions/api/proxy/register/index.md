---
title: proxy.register()
slug: Mozilla/Add-ons/WebExtensions/API/proxy/register
tags:
  - API
  - Add-ons
  - Function
  - Méthode
  - Proxy
  - Reference
  - WebExtensions
  - register
  - registerProxyScript
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy/register
---
{{AddonSidebar()}} {{deprecated_header}}

Cette méthode était obsolète dans Firefox 68 et sera supprimée de Firefox 71. Dans Firefox 68 ou une version ultérieure, l'appel de cette méthode enregistre un message d'erreur sur la console :

![](proxy_register_warning.png)

Enregistre un [fichier PAC (Proxy Auto-Configuration)](/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_%28PAC%29_file). Le fichier est exécuté immédiatement, et sa fonction `FindProxyForURL()` sera appelée pour toutes les demandes HTTP, HTTPS ou FTP.

Si les fichiers PAC sont enregistrés par plusieurs extensions, les demandes seront initialement transmises à celle qui a été enregistrée en premier.

- Si la fonction `FindProxyForURL()` dans le premier PAC renvoie "DIRECT" pour une demande, alors la demande sera transmise inchangée à la fonction  `FindProxyForURL()` dans le prochain PAC.
- Si la fonction `FindProxyForURL()` dans le premier PAC transfère la requête en renvoyant "PROXY" ou une autre valeur proxy, l'URL du proxy sera transmise à la fonction `FindProxyForURL()` dans le prochain PAC.

Chaque extension ne peut enregistrer qu'un seul fichier PAC : si vous appelez  `register()` deux fois, le second fichier PACremplacera le premier.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Communiquez avec les fichiers PAC

Vous pouvez échanger des messages entre le fichier PAC et la page d'arrière-plan de votre extension (ou toute autre page privilégiée, comme les pages contextuelles) en utilisant [`runtime.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) et [`runtime.onMessage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage).

Pour envoyer un message au fichier PAC, vous devez définir l'option `toProxyScript` :

```js
// background.js

// Log any messages from the proxy.
browser.runtime.onMessage.addListener((message, sender) => {
  if (sender.url === browser.extension.getURL(proxyScriptURL)) {
    console.log(message);
  }
});

let messageToProxy = {
  enabled: true,
  foo: "A string",
  bar: 1234
};

browser.runtime.sendMessage(messageToProxy, {toProxyScript: true});
```

```js
// pac.js

browser.runtime.onMessage.addListener((message) => {
  if (message.enabled) {
    browser.runtime.sendMessage("I'm enabled!");
  }
});
```

## Spécification de fichier PAC

La syntaxe de base du fichier PAC est décrite dans la [documentation PAC](</fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file>), mais l'implémentation utilisée par l'API proxy diffère de la conception PAC standard de différentes manières, décrites dans cette section.

### Valeur retournée FindProxyForURL()

La norme `FindProxyForURL()` [renvoie une chaîne](/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_%28PAC%29_file#Return_value_format). Dans Firefox 55 et 56, le fichier PAC utilisé avec l'API proxy renvoie également une chaîne. Dans Firefox 55 _seulement_, vous devez passer un argument à la valeur de retour "DIRECT", même s'il n'a pas besoin d'argument.

À partir de Firefox 57, `FindProxyForURL()` peut toujours renvoyer une chaîne, mais peut également (et de préférence) renvoyer un tableau d'objets  {{WebExtAPIRef("proxy.ProxyInfo")}}.

Si le tableau contient plus d'un objet, alors tous les objets `ProxyInfo` après le premier représentent les basculements : si le proxy à la position N dans le tableau n'est pas accessible quand son `ProxyInfo.failoverTimeout` expire, alors le navigateur essaiera le proxy à la position N + 1.

Par exemple :

```js
const proxySpecification = [
  {
    type: "socks",
    host: "foo.com",
    port: 1080,
    proxyDNS: true,
    failoverTimeout: 5
  },
  {
    type: "socks",
    host: "bar.com",
    port: 1060,
  }
];
```

Le premier proxy dans le tableau sera essayé en premier. S'il ne répond pas dans `failoverTimeout` secondes, le prochain sera essayé, jusqu'à ce que la fin du tableau est atteint.

### Environnement du fichier PAC

Les fonctions globales d'assistance généralement disponibles pour les fichiers PAC  ([`isPlainHostName()`](</fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#isPlainHostName()_2>), [`dnsDomainIs()`](</fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#dnsDomainIs()>), etc) ne sont pas disponibles.

Le code qui s'exécute dans le fichier PAC n'a pas accès à :

- outes les fonctions DOM (par exemple, [window](/fr/docs/Web/API/Window) ou l'une de ses propriétés)
- les API WebExtension sauf [`runtime.sendMessage()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) et [`runtime.onMessage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- l' [API console](/fr/docs/Web/API/Console) - pour consigner les messages d'un PAC, envoyez un message au script d'arrière-plan :

```js
//  pac.js

// send the log message to the background script
browser.runtime.sendMessage(`Proxy-blocker: blocked ${url}`);
```

```js
// background-script.js

function handleMessage(message, sender) {
  // only handle messages from the proxy script
  if (sender.url != browser.extension.getURL(proxyScriptURL)) {
    return;
  }
  console.log(message);
}

browser.runtime.onMessage.addListener(handleMessage);
```

## Syntaxe

```js
var registering = browser.proxy.register(
  url   // string
)
```

### Paramètres

- `url`
  - : `String`. URL pointant vers le fichier PAC à charger. Les fichiers PAC doivent être groupés avec l'extension, et l'`url` doit être relative au fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json) de l'extension.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument lorsque le fichier PAC a été enregistré ou rejetée en cas d'erreur.

## Exemples

```js
const proxyScriptURL = "proxy/proxy-script.js";

browser.proxy.register(proxyScriptURL);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.proxy.register")}}

> **Note :**
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
