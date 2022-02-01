---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/namespace-uri
original_slug: Web/XPath/Fonctions/namespace-uri
---
{{ XsltRef() }}

La fonction `namespace-uri` retourne une chaîne représentant l'URI de l'espace de nommage du premier nœud d'un ensemble de nœuds donné.

### Syntaxe

    namespace-uri( [ensemble-de-nœuds] )

### Arguments

- `ensemble-de-nœuds` (optionnel)
  - : L'URI de l'espace de nommage du premier nœud de cet ensemble de nœuds sera retournée. Si cet argument est omis, le nœud de contexte courant sera utilisé.

### Retour

Une chaîne représentant l'URI de l'espace de nommage dans lequel se trouve le nœud donné.

### Notes

- S'il n'y a pas d'espace de nommage spécifié pour le noeud donné, la chaîne retournée sera une chaîne vide.

<!---->

- Pour les nœuds autres que les nœuds `element` et `attribute`, la chaîne retournée sera toujours une chaîne vide.

### Définition

[XPath 1.0, section 4.1](http://www.w3.org/TR/xpath#function-local-name).

### Support Gecko

Supportée.
