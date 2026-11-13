---
title: "Document : propriété characterSet"
short-title: characterSet
slug: Web/API/Document/characterSet
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`characterSet`** de l'interface {{DOMxRef("Document")}} retourne {{Glossary("Character_encoding", "l'encodage des caractères")}} du document tel qu'il est actuellement rendu.

> [!NOTE]
> Un «&nbsp;jeu de caractères&nbsp;» et un «&nbsp;encodage de caractères&nbsp;» sont liés, mais différents. Malgré le nom de cette propriété, elle retourne _l'encodage_.

## Valeur

Une chaîne de caractères.

## Exemples

```js
console.log(document.characterSet);
// l'encodage des caractères du document, tel que "ISO-8859-1" ou "UTF-8"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
