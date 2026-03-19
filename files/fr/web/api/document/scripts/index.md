---
title: "Document : propriété scripts"
short-title: scripts
slug: Web/API/Document/scripts
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La propriété **`scripts`** de l'interface {{DOMxRef("Document")}} retourne une liste des éléments {{HTMLElement("script")}} dans le document. L'objet retourné est un {{DOMxRef("HTMLCollection")}}.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}}. Vous pouvez l'utiliser comme un tableau pour accéder à tous les éléments de la liste.

## Exemples

Cet exemple détecte la présence d'éléments {{HTMLElement("script")}} dans le document.

```js
let scripts = document.scripts;

if (scripts.length) {
  alert("Cette page contient des scripts !");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
