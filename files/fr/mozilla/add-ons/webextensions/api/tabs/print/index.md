---
title: tabs.print()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/print
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Reference
  - WebExtensions
  - impression
  - print
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/print
---
{{AddonSidebar()}}

Appelez cette fonction pour imprimer le contenu de l'onglet actif. Si cette fonction est appelée, l'utilisateur recevra la boîte de dialogue d'impression de la plate-forme sous-jacente et aura la possibilité de modifier les paramètres d'impression, puis d'imprimer l'onglet actuellement actif.

## Syntaxe

```js
browser.tabs.print()
```

### Paramètres

None.

### Valeur retournée

None.

## Exemples

Dans cet exemple, un script d'arrière-plan écoute un clic sur une [action navigateur](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions_2), puis tente d'imprimer l'onglet actuellement actif :

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.print();
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.print")}}
