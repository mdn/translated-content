---
title: "Document : propriété URL"
short-title: URL
slug: Web/API/Document/URL
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`URL`** de l'interface {{DOMxRef("Document")}} retourne l'emplacement du document sous forme de chaîne de caractères.

## Valeur

Une chaîne de caractères contenant l'URL du document.

## Exemples

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
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

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.documentURI")}} qui retourne la même valeur.
