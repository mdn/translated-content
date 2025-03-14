---
title: Document.xmlEncoding
slug: Web/API/Document/xmlEncoding
---

{{APIRef("DOM")}}{{deprecated_header}}

Renvoie le codage déterminé par la déclaration XML. Devrait être `null` si non précisé ou inconnu.

> [!WARNING]
> N'utilisez pas cet attribut ; il a été supprimé de la spécification DOM Niveau 4 et n'est plus pris en charge dans Gecko 10.0.

Si la déclaration XML indique :

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

... le résultat doit être "UTF-16".

Cependant, Firefox 3.0 inclut des informations sur l'"endianness" (par exemple, UTF-16BE pour le codage "big endian") et, tandis que cette information supplémentaire est supprimée à partir de Firefox 3.1b3, Firefox 3.1b3 consulte toujours l'encodage du fichier plutôt que la déclaration XML, comme la spécification le prévoit ("Un attribut spécifiant, _dans le cadre de la déclaration XML_, l'encodage de ce document.").

## Spécifications

{{Specifications}}
