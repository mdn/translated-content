---
title: substring-after
slug: Web/XPath/Functions/substring-after
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/substring-after
original_slug: Web/XPath/Fonctions/substring-after
---
{{ XsltRef() }}

La fonction `substring-after()` retourne la partie d'une chaîne donnée suivant une sous-chaîne donnée.

### Syntaxe

    substring-after( bottedefoin , aiguille )

### Arguments

- `bottedefoin`
  - : La chaîne à évaluer. Un extrait de cette chaîne sera retourné.

<!---->

- `aiguille`
  - : La sous-chaîne à rechercher. Tout le contenu se trouvant après la première occurrence de `aiguille` dans la chaîne `bottedefoin` sera retourné.

### Retour

Une chaîne.

### Exemples

| Exemple XPath                                                 | Sortie         |
| ------------------------------------------------------------- | -------------- |
| `<xsl:value-of select="substring-after('1999/04/01','/')" />` | `04/01`        |
| `substring-after('aa-bb','-')`                                | `bb`           |
| `substring-after('aa-bb','a')`                                | `a-bb`         |
| `substring-after('aa-bb','b')`                                | `b`            |
| `substring-after('aa-bb','q')`                                | (empty string) |

### Définition

[XPath 1.0, section 4.2](http://www.w3.org/TR/xpath#function-substring-after).

### Support Gecko

Supportée.
