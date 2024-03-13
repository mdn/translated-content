---
title: exsl:object-type()
slug: Web/EXSLT/exsl/object-type
---

{{XSLTRef}}{{QuickLinksWithSubpages("/fr/docs/Web/EXSLT")}}

`exsl:object-type()` renvoie une chaîne de caractères indiquant le type de l'objet indiqué en paramètre.

> **Note :** La plupart des types d'objet [XSLT](/fr/docs/Web/XSLT) peuvent être convertis implicitement vers les autres. Toutefois, certaines conversions implicites sont sources d'erreur, par exemple traiter quelque chose qui n'est pas un `node-set` comme tel. Cette fonction permet de fournir une certaine flexibilité dans les valeurs de paramètres.

## Syntaxe

```plain
exsl:object-type(object)
```

### Paramètres

- `object`
  - : L'objet dont on souhaite connaître le type.

### Valeur de retour

Le type de l'objet, parmi&nbsp;:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## Spécifications

[EXSLT - EXSL:OBJECT-TYPE](http://exslt.org/exsl/functions/object-type/index.html)
