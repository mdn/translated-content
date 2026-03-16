---
title: "Document : propriété xmlEncoding"
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`xmlEncoding`** de l'interface {{DOMxRef("Document")}} retourne le codage déterminé par la déclaration XML. Devrait être `null` si non précisé ou inconnu.

> [!WARNING]
> N'utilisez pas cet attribut&nbsp;; il a été supprimé de la spécification DOM Niveau 4 et n'est plus pris en charge dans Firefox 10.0.

Considérez la déclaration XML suivante&nbsp;:

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

Alors, le résultat est «&nbsp;UTF-16&nbsp;».

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
