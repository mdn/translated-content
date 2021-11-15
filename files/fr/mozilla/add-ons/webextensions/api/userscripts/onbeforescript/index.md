---
title: userScripts.onBeforeScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/onBeforeScript
tags:
  - Add-ons
  - Addons
  - Customisation
  - Extensions
  - Firefox
  - Mozilla
  - Reference
  - User Scripts API
  - WebExtensions
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/onBeforeScript
---
{{AddonSidebar}}La propriété **`onBeforeScript`** de l'événement {{WebExtAPIRef("userScripts","browser.userScripts")}} est un {{event("Event_handlers", "event handler")}} qui traite {{event("beforeScript")}}.

L'événement `beforeScript` se déclenche juste avant l'exécution d'un script utilisateur correspondant, permettant à APIScript d'exporter des méthodes API personnalisées vers le script utilisateur.

## Syntaxe

    browser.userScripts.onBeforeScript = functionRef
    browser.userScripts.onBeforeScript.addListener(functionRef)
    browser.userScripts.onBeforeScript.removeListener(functionRef)
    browser.userScripts.onBeforeScript.hasListener(functionRef)

### Value

`functionRef` est la function de gestionnaire à appeler lorsque l'événement `beforeScript`  du script utilisateur se déclenche.

## Exemples

Voir [ce billet de blog](https://blog.mozilla.org/addons/2019/03/26/extensions-in-firefox-67/#userscripts) pour des exemples détaillés

## Compatibilité du navigateur

{{Compat("webextensions.api.userScripts.onBeforeScript")}}

## Voir aussi

- {{WebExtAPIRef("contentScripts")}}
