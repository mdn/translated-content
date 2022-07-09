---
title: substring-before
slug: Web/XPath/Functions/substring-before
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/substring-before
original_slug: Web/XPath/Fonctions/substring-before
---
{{ XsltRef() }}

La fonction `substring-before()` retourne retourne la partie d'une chaîne donnée précédant une sous-chaîne donnée.

### Syntaxe

```
substring-before( bottedefoin , aiguille )
```

### Arguments

- `bottedefoin`
  - : La chaîne à évaluer. Un extrait de cette chaîne sera retourné.

<!---->

- `aiguille`
  - : La sous-chaîne à rechercher. Tout le contenu se trouvant avant la première occurrence de `aiguille` dans la chaîne `bottedefoin` sera retourné.

### Retour

Une chaîne.

### Exemples

| XPath Example                                                  | Output           |
| -------------------------------------------------------------- | ---------------- |
| `<xsl:value-of select="substring-before('1999/04/01','/')" />` | `1999`           |
| `substring-before('aa-bb','-')`                                | `aa`             |
| `substring-before('aa-bb','a')`                                | `(empty string)` |
| `substring-before('aa-bb','b')`                                | `aa-`            |
| `substring-before('aa-bb','q')`                                | (empty string)   |

### Définition

[XPath 1.0, section 4.2](http://www.w3.org/TR/xpath#function-substring-before).

### Support Gecko

Supportée.
