---
title: tabs.saveAsPDF()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF
---

{{AddonSidebar()}}

Enregistre la page en cours en tant que fichier PDF. Cela ouvrira une boîte de dialogue, fournie par le système d'exploitation sous-jacent, demandant à l'utilisateur où il veut enregistrer le fichier PDF.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var saving = browser.tabs.saveAsPDF(
  pageSettings, // object
);
```

### Paramètres

- `pageSettings`
  - : `object`. Paramètres de la page enregistrée, en tant qu'objet {{WebExtAPIRef("tabs.PageSettings")}}. Cet objet doit être donné, mais toutes ses propriétés sont facultatives. Toutes les propriétés non spécifiées ici recevront les valeurs par défaut répertoriées dans la documentation {{WebExtAPIRef("tabs.PageSettings", "PageSettings")}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec une chaîne d'état lorsque la boîte de dialogue sera fermée. La chaîne peut être l'une des :

- "saved"
- "replaced"
- "canceled"
- "not_saved"
- "not_replaced"

## Exemples

Dans cet exemple, un script d'arrière-plan écoute un clic sur une [action du navigateur](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension), puis tente d'enregistrer l'onglet actif en tant que fichier PDF, puis enregistre le résultat:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.saveAsPDF({}).then((status) => {
    console.log(status);
  });
});
```

## Compatibilité des navigateurs

{{Compat}}
