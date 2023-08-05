---
title: tabs.printPreview()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/printPreview
---

{{AddonSidebar()}}Ouvre l'aperçu avant impression pour l'onglet actif.C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).Une extension peut détecter lorsque l'aperçu d'impression a été fermé en écoutant l'événement [afterprint](/fr/docs/Web/Events/afterprint) :

```js
window.addEventListener("afterprint", resumeFunction, false);
```

## Syntaxe

```js
var openingPreview = browser.tabs.printPreview();
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument lorsque la page d'aperçu est ouverte.

## Exemples

Dans cet exemple, un script d'arrière-plan écoute un clic sur une [action de navigateur](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions_2), puis ouvre l'aperçu avant impression pour l'onglet actuellement actif :

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.printPreview().then(() => {
    console.log("Entered print preview");
  });
});
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}
