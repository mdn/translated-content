---
title: toString
slug: Web/API/Selection/toString
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/Selection/toString
---
{{ ApiRef() }}

### Résumé

Renvoie une chaîne de caractères représentant l'actuel objet `selection`, i.e. le texte sélectionné.

### Syntaxe

    string =sel.toString()

- `string` est la représentation sous la forme d'une chaîne de caractères de la sélection.

### Paramètres

Aucun.

### Description

Cette méthode renvoie le texte sélectionné.

En [JavaScript](fr/JavaScript), cette méthode est appelée automatiquement pour des objets `selection` aux fonctions nécessitant un paramètre `string` :

    alert(window.getSelection()) // Appel automatique
    alert(window.getSelection().toString())  // Appel explicite

### Voir aussi

- [Object.toString](fr/R%c3%a9f%c3%a9rence_de_JavaScript_1.5_Core/Objets_globaux/Object/toString)
