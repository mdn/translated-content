---
title: proxy.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/proxy/unregister
---

{{AddonSidebar()}}{{deprecated_header}}

Cette méthode était obsolète dans Firefox 68 et sera supprimée de Firefox 71. Dans Firefox 68 ou une version ultérieure, l'appel de cette méthode enregistre un message d'erreur sur la console:

![](proxy_unregister_warning.png)

Annule l'inscription d'un [fichier Proxy Auto-Configuration (PAC)](/fr/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_%28PAC%29_file). Cela a été enregistré par un appel précédent à {{WebExtAPIRef("proxy.register()")}}.

C'est une fonction asynchrome qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var unregistering = browser.proxy.unregister();
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque le fichier PAC a été désinscrit.

## Exemples

```js
browser.proxy.unregister();
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
