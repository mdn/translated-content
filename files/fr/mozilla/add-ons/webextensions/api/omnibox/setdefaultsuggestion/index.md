---
title: omnibox.setDefaultSuggestion()
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/setDefaultSuggestion
---

{{AddonSidebar()}}

Définissez la suggestion par défaut à afficher dans la liste déroulante de la barre d'adresse lorsque l'utilisateur commence à interagir avec votre extension.

Une fois que l'utilisateur a entré votre mot clé et a commencé à interagir avec votre extension, la suggestion par défaut apparaît toujours en premier dans la liste déroulante. Contrairement aux suggestions que vous fournissez dans {{WebExtAPIRef("omnibox.onInputChanged")}}, cet élément ne peut pas être sélectionné. Utilisez-le pour fournir à l'utilisateur des conseils sur ce qu'il doit taper et sur ce qu'il peut s'attendre à voir quand il le fait.

## Syntaxe

```js
browser.omnibox.setDefaultSuggestion(
  suggestion, // object
);
```

### Paramètres

- `suggestion`
  - : `object`. Un objet contenant une `description` de propriété de chaîne unique, qui sera affichée en tant que premier élément dans la liste déroulante lorsque l'utilisateur commence à interagir avec votre extension.

### Valeur retournée

None.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property",
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
