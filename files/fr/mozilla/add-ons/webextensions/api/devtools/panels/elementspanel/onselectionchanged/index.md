---
title: onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged
---

{{AddonSidebar()}}

Appelles lorsque l'utilisateur sélectionne un élément de page différent pour l'inspection avec les outils de développement du navigateur, par exemple en sélectionnant l'élément de menu contextuel "Inspect Element" dans Firefox.

## Syntaxe

```js
browser.devtools.panels.elements.onSelectionChanged.addListener(listener);
browser.devtools.panels.elements.onSelectionChanged.removeListener(listener);
browser.devtools.panels.elements.onSelectionChanged.hasListener(listener);
```

L'événement a trois fonctions :

- `addListener(listener)`
  - : Ajoute une écoute à cet événement.
- `removeListener(listener)`
  - : Arrête une écoute à l'événement. L'argument de l'auditeur est un auditeur supprimer.
- `hasListener(listener)`
  - : Vérifiez si l'auditeur est enregistré pour cet événement. Renvoie la valeur Vrai si elle l'écoute, sinon Faux.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction qui sera appelée lors de l'événement. La fonction ne passera pas d'arguments.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ecoutez la sélection des événements modifiés, et enregistrez le contenu du texte de l'élément nouvellement sélectionné :

```js
function handleSelectedElement() {
  browser.devtools.inspectedWindow.eval("$0.textContent").then((result) => {
    console.log(result[0]);
  });
}

browser.devtools.panels.elements.onSelectionChanged.addListener(
  handleSelectedElement,
);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools`](https://developer.chrome.com/extensions/devtools).
