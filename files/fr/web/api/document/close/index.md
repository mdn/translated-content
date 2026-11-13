---
title: "Document : méthode close()"
short-title: close()
slug: Web/API/Document/close
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La méthode **`close()`** de l'interface {{DOMxRef("Document")}} termine l'écriture dans un document, ouvert avec {{DOMxRef("Document.open()")}}.

## Syntaxe

```js-nolint
close()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
// Ouvrir un document pour y écrire
document.open();

// Écrire le contenu du document
document.write("<p>Le seul et unique contenu.</p>");

// Fermer le document
document.close();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
