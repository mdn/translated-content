---
title: userScripts.onBeforeScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/onBeforeScript
---

{{AddonSidebar}}La propriété **`onBeforeScript`** de l'événement {{WebExtAPIRef("userScripts","browser.userScripts")}} est un gestionnaire d'évènement qui traite l'évènement `beforeScript`.

L'événement `beforeScript` se déclenche juste avant l'exécution d'un script utilisateur correspondant, permettant à APIScript d'exporter des méthodes API personnalisées vers le script utilisateur.

## Syntaxe

```js
browser.userScripts.onBeforeScript = functionRef;
browser.userScripts.onBeforeScript.addListener(functionRef);
browser.userScripts.onBeforeScript.removeListener(functionRef);
browser.userScripts.onBeforeScript.hasListener(functionRef);
```

### Value

`functionRef` est la function de gestionnaire à appeler lorsque l'événement `beforeScript` du script utilisateur se déclenche.

## Exemples

Voir [ce billet de blog](https://blog.mozilla.org/addons/2019/03/26/extensions-in-firefox-67/#userscripts) pour des exemples détaillés

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{WebExtAPIRef("contentScripts")}}
