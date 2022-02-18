---
title: find.highlightResults()
slug: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - find
  - highlightResults
translation_of: Mozilla/Add-ons/WebExtensions/API/find/highlightResults
---
{{AddonSidebar()}}

Souligne les résultats d'un précédent appel à {{WebExtAPIRef("find.find()")}}.

Lorsqu'une extension appelle `find()`, les correspondances ne sont pas automatiquement mises en surbrillance, mais elles sont stockées par le navigateur. Appelez `highlightResults()` pour les mettre en surbrillance.

Notez que les résultats stockés sont globaux pour toutes les extensions, par exemple, si l'extension appelle `find("apple")`, alors si l'extensions B appelle `find("banana")`, alors si l'extensions A appelle  `highlightResults()`, le résultat pour "banana" sera mis en évidence.

## Syntaxe

```js
browser.find.highlightResults()
```

### Paramètres

Aucun.

### Valeur retournée

Aucune.

## Compatibilité du navigateur

{{Compat("webextensions.api.find.highlightResults", 10)}}

## Exemples

Recherchez "banana" dans l'onglet actif, notez le nombre de correspondances et mettez-les en surbrillance :

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```
