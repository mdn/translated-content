---
title: document.documentURIObject
slug: Web/API/Document/documentURIObject
tags:
  - API
  - DOM
  - Propriétés
  - Reference
translation_of: Web/API/Document/documentURIObject
---
{{ ApiRef("DOM") }}

La propriété en lecture seule **`Document.documentURIObject`** renvoie un objet `nsIURI` représentant l'URI du [document](/fr/docs/Web/API/document).

Cette propriété fonctionne uniquement pour les scripts privilégiés (UniversalXPConnect), comme le code des extensions. Pour le contenu Web, elle n'a aucune signification particulière et peut être utilisée comme n'importe quelle propriété personnalisée.

Dans le cas d'un code privilégié, il convient de faire attention à ne pas essayer d'obtenir ou modifier cette propriété sur un objet de contenu non enveloppé (par exemple sur l'objet `wrappedJSObject` d'un [`XPCNativeWrapper`](/fr/docs/Mozilla/Tech/Xray_vision)). Consultez les commentaires du {{ Bug(324464) }} pour plus de détails.

## Syntaxe

```js
var uri = doc.documentURIObject;
```

## Exemple

    // Vérifie que le schéma d'URI pour l'onglet courant dans Firefox est «&nbsp;http&nbsp;»,
    // en supposant que ce code s'exécute dans le contexte de browser.xul

    var uriObj = content.document.documentURIObject;
    var uriPort = uriObj.port;

    if (uriObj.schemeIs('http')) {
      ...
    }

## Spécifications

Ne fait partie d'aucune spécification.
