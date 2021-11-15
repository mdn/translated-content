---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
tags:
  - API
  - Add-ons
  - Proxy
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy
---
{{AddonSidebar}}

> **Attention :**
>
> Vous ne devez pas utiliser la fonction {{WebExtAPIRef("proxy.register()")}} ou la fonction {{WebExtAPIRef("proxy.unregister()")}} pour enregistrer et supprimer le fichier [Proxy Auto-Configuration (PAC)](/fr/Add-ons/WebExtensions/API/proxy/register#PAC_file_specification). Cette API était dépréciée dans Firefox 68 et sera supprimée de Firefox 71.

Utilisez l'API proxy pour les requêtes Web proxy. Vous pouvez utiliser l'écouteur d'événement {{WebExtAPIRef("proxy.onRequest")}}} pour intercepter les requêtes web, et retourner un objet qui décrit si et comment les proxyer.

L'avantage de l'approche `proxy.onRequest` est que le code qui implémente votre stratégie de proxy s'exécute dans le script d'arrière-plan de votre extension pour accéder aux API WebExtension disponibles pour votre extension (y compris, par exemple, l'accès au [`stockage`](/fr/Add-ons/WebExtensions/API/storage) et au réseau de votre extension APIs comme [`dns`](/fr/Add-ons/WebExtensions/API/dns)).

En dehors de cette API, les extensions peuvent également utiliser la propriété  [`browserSettings.proxyConfig`](/fr/Add-ons/WebExtensions/API/browserSettings/proxyConfig) pour configurer les paramètres proxy globaux.

Google Chrome fournit [une API d'extension également appelée "proxy"](https://developer.chrome.com/extensions/proxy) qui est fonctionnellement similaire à cette API, dans la mesure où les extensions peuvent l'utiliser pour implémenter une politique de proxy. Cependant, la conception de l'API Chrome est complètement différente de cette API. Étant donné que cette API est incompatible avec l'API de `proxy` Chrome, cette API est uniquement disponible via l'espace de noms du `navigateur`.

Pour utiliser cette API, vous devez disposer de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "proxy". De plus, lorsque vous voulez intercepter des requêtes, vous avez également besoin de la [permission de l'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour les URL des requêtes interceptées

## Types

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Décrit un proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Contient des informations sur une requête Web que le navigateur est sur le point de faire.

## Properties

- {{WebExtAPIRef("proxy.settings")}}
  - : Obtenir et définir les paramètres de proxy.

## Functions

- {{WebExtAPIRef("proxy.register()")}}
  - : Enregistre le script proxy donné.
- {{WebExtAPIRef("proxy.unregister()")}}
  - : Annule l'inscription du script proxy.

## Events

- {{WebExtAPIRef("proxy.onError")}}
  - : Lancé lorsque le système rencontre une erreur lors de l'exécution du script PAC ou de l'écouteur `onRequest`.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Déclenché lorsqu'une requête Web est sur le point d'être effectuée, ce qui donne à l'extension l'opportunité de l'utiliser comme proxy.

{{WebExtExamples("h2")}}

## Compatibilité du navigateur

{{Compat("webextensions.api.proxy")}}
