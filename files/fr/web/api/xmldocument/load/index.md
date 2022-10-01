---
title: XMLDocument.load()
slug: Web/API/XMLDocument/load
page-type: web-api-instance-method
translation_of: Web/API/XMLDocument/load
browser-compat: api.XMLDocument.load
l10n:
  sourceCommit: 95b52aa7aeabbd2670f762da4fb7c0b0133f4d9f
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

`document.load()` est une méthode spécifiée dans une ancienne version de la spécification [du module de chargement et d'enregistrement du DOM de niveau 3](https://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS) du W3C. Elle peut être utilisée avec [`XMLDocument.async`](/fr/docs/Web/API/XMLDocument/async) pour indiquer si la requête est synchrone ou asynchrone (par défaut).

On utilisera [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) ou [`fetch()`](/fr/docs/Web/API/fetch) à la place.

## Syntaxe

```js
load()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

```js
const xmlDoc = document.implementation.createDocument("", "test", null);

function documentLoaded(e) {
  console.log(new XMLSerializer().serializeToString(e.target)); // Affiche le contenu de querydata.xml sous forme de chaîne
}

xmlDoc.addEventListener("load", documentLoaded, false);
xmlDoc.load('querydata.xml');
```

## Spécifications

- [Ancien brouillon de travail pour la spécification du DOM de niveau 3&nbsp;: module de chargement et d'enregistrement](https://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`XMLDocument.async`](/fr/docs/Web/API/XMLDocument/async)
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)
- [`fetch()`](/fr/docs/Web/API/fetch)
