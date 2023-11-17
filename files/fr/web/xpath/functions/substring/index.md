---
title: substring
slug: Web/XPath/Functions/substring
---

{{ XsltRef() }}

La fonction `substring` retourne une partie d'une chaîne donnée.

### Syntaxe

```
substring( chaîne , début [, longueur] )
```

### Arguments

- `chaîne`
  - : La chaîne à évaluer.

<!---->

- `début`
  - : La position dans la `chaîne` où commence la sous-chaîne.

<!---->

- `longueur` (optionnel)
  - : La longueur de la sous-chaîne à extraire. S'il est omis, la chaîne retournée contiendra tous les caractères depuis la position `début` jusqu'à la fin de la `chaîne`.

### Retour

Une chaîne.

### Notes

Comme pour les autres fonctions XPath, les positions ne sont pas comptées à partir de zéro. Le premier caractère de la chaîne est à la position 1.

### Définition

[XPath 1.0, section 4.2](http://www.w3.org/TR/xpath#function-substring).

### Support Gecko

Supportée.
