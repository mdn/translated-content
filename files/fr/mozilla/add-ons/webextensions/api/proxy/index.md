---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
---

{{AddonSidebar}}

Utilisez l'API proxy pour les requêtes Web proxy. Vous pouvez utiliser l'écouteur d'événement {{WebExtAPIRef("proxy.onRequest")}} pour intercepter les requêtes web, et retourner un objet qui décrit si et comment les proxyer.

L'avantage de l'approche `proxy.onRequest` est que le code qui implémente votre stratégie de proxy s'exécute dans le script d'arrière-plan de votre extension pour accéder aux API WebExtension disponibles pour votre extension (y compris, par exemple, l'accès au [`stockage`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage) et au réseau de votre extension APIs comme [`dns`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

En dehors de cette API, les extensions peuvent également utiliser la propriété [`browserSettings.proxyConfig`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) pour configurer les paramètres proxy globaux.

Google Chrome fournit [une API d'extension également appelée "proxy"](https://developer.chrome.com/docs/extensions/reference/api/proxy) qui est fonctionnellement similaire à cette API, dans la mesure où les extensions peuvent l'utiliser pour implémenter une politique de proxy. Cependant, la conception de l'API Chrome est complètement différente de cette API. Étant donné que cette API est incompatible avec l'API de `proxy` Chrome, cette API est uniquement disponible via l'espace de noms du `navigateur`.

Pour utiliser cette API, vous devez disposer de la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "proxy". De plus, lorsque vous voulez intercepter des requêtes, vous avez également besoin de la [permission de l'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) pour les URL des requêtes interceptées

## Types

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Décrit un proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Contient des informations sur une requête Web que le navigateur est sur le point de faire.

## Propriétés

- {{WebExtAPIRef("proxy.settings")}}
  - : Obtenir et définir les paramètres de proxy.

## Évènements

- {{WebExtAPIRef("proxy.onError")}}
  - : Lancé lorsque le système rencontre une erreur lors de l'exécution du script PAC ou de l'écouteur `onRequest`.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Déclenché lorsqu'une requête Web est sur le point d'être effectuée, ce qui donne à l'extension l'opportunité de l'utiliser comme proxy.

{{WebExtExamples("h2")}}

## Compatibilité des navigateurs

{{Compat}}
