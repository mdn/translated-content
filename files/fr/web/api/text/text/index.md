---
title: "Text : constructeur Text()"
short-title: Text()
slug: Web/API/Text/Text
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Le constructeur **`Text()`** retourne un nouvel objet {{DOMxRef("Text")}} avec, en option, la chaîne de caractères donnée en paramètre comme contenu textuel.

## Syntaxe

```js-nolint
new Text()
new Text(string)
```

### Paramètres

- `string` {{Optional_Inline}}
  - : Une chaîne de caractères représentant le contenu textuel du nœud de texte.

### Valeur de retour

Un nouvel objet {{DOMxRef("Text")}} avec le contenu du paramètre `string`, ou la chaîne vide si aucun paramètre n'est fourni.

## Exemple

```js
let text = new Text("Marco ?");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API DOM](/fr/docs/Web/API/Document_Object_Model)
