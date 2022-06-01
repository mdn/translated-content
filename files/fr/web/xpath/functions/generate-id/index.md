---
title: generate-id
slug: Web/XPath/Functions/generate-id
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/generate-id
original_slug: Web/XPath/Fonctions/generate-id
---
{{ XsltRef() }}

La fonction `generate-id` génère un identifiant `id` unique pour le premier nœud d'un ensemble de nœuds donné et retourne une chaîne contenant cet `id`.

### Syntaxe

```
generate-id( [ensemble-de-nœuds] )
```

### Arguments

- `ensemble-de-nœuds` (optionnel)
  - : Un `id` sera généré pour le premier nœud de cet ensemble de nœuds. S'il est omis, le nœud de contexte courant sera utilisé.

### Retour

Une chaîne contenant l'`id` généré.

### Notes

- Le même `id` doit être généré à chaque fois pour le même nœud dans le document courant pour la transformation courante.

<!---->

- L'`id` généré peut ne pas être le même pour les transformations subséquentes.

Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath principale.

### Définition

[XSLT 1.0, section 12.4](http://www.w3.org/TR/xslt#function-generate-id).

### Support Gecko

Supportée.
