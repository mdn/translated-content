---
title: "Document : propriété documentURI"
short-title: documentURI
slug: Web/API/Document/documentURI
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La propriété **`documentURI`** de l'interface {{DOMxRef("Document")}} retourne l'emplacement du document sous forme de chaîne de caractères.

## Valeur

Une chaîne de caractères.

## Exemples

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### HTML

```html
<p id="urlText">
  URL&nbsp;:<br />
  <span id="url">L'URL va ici</span>
</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.URL")}} qui retourne la même valeur.
