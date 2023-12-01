---
title: Document.characterSet
slug: Web/API/Document/characterSet
---

{{ApiRef("DOM")}}

**`Document.characterSet`** propriété en lecture seule, renvoie l'encodage du document en cours. Un encodage décrit l'ensemble des caractères possibles et la façon de décoder les octets en ces caractères.

> **Note :** La propriété `document.charset` et `document.inputEncoding` sont les alias de `document.characterSet`. Ne plus les utiliser.

Les utilisateurs peuvent surcharger l'encodage indiqué pour le document (transmis par l'en-tête {{HTTPHeader("Content-Type")}} ou via le {{HTMLElement("meta")}} : `<meta charset="utf-8">`) grâce au menu <kbd>Affichage → Encodage du texte</kbd>. Cela peut notamment permettre de corriger le comportement d'un document dont l'encodage indiqué est incorrect.

## Syntaxe

```js
var string = document.characterSet;
```

## Exemples

```html
<button onclick="console.log(document.characterSet);">
  Affiche le jeu de caractère
</button>
<!-- logs document's character set, such as "ISO-8859-1" or "UTF-8" -->
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
