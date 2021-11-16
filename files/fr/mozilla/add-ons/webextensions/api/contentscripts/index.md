---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - WebExtensions
  - contentScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/contentScripts
---
{{AddonSidebar}}

Utilisez cette API pour enregistrer des scripts de contenu. L'enregistrement d'un script de contenu demande au navigateur d'insérer les scripts de contenu donnés dans des pages correspondant aux modèles d'URL donnés.

Cette API est très similaire à la clé [`"content_scripts"`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts) du manifest.json, à l'exception de `"content_scripts"` , l'ensemble des scripts de contenu et des motifs associés est fixé au moment de l'installation. Avec l'API `contentScripts`, une extension peut enregistrer et désenregistrer des scripts au moment de l'exécution.

Pour utiliser l'API, appelez {{WebExtAPIRef("contentScripts.register()")}} en passant dans un objet définissant les scripts à enregistrer, les modèles d'URL, et d'autres options. Ceci retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue avec un objet {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}.

L'objet `RegisteredContentScript` représente les scripts enregistrés dans l'appel `register()` . Il définit une méthode `unregister()` que vous pouvez utiliser pour annuler l'inscription des scripts de contenu. Les scripts de contenu sont également désenregistrés automatiquement lorsque la page qui les a créés est détruite. Par exemple, s'ils sont enregistrés à partir de la page d'arrière-plan, ils seront automatiquement désenregistrés lorsque la page d'arrière-plan est détruite et s'ils sont enregistrés depuis une barre latérale ou une fenêtre contextuelle, ils seront automatiquement désinscrits.

Il n'y a pas de permission de l'API `contentScripts`, mais une extension doit disposer des [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) appropriées pour tous les modèles qu'elle transmet à `register()`.

## Types

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : Un objet de ce type est renvoyé par la fonction  {{WebExtAPIRef("contentScripts.register()")}}. Il représente les scripts de contenu enregistrés par cet appel et peut être utilisé pour annuler l'enregistrement du script de contenu.

## Fonctions

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Enregistre les scripts de contenu donnés.

## Compatibilité du navigateur

{{Compat("webextensions.api.contentScripts", 10, 1)}}

{{WebExtExamples("h2")}}
