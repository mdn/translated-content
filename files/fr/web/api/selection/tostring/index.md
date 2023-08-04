---
title: toString
slug: Web/API/Selection/toString
---

{{ ApiRef() }}

### Résumé

Renvoie une chaîne de caractères représentant l'actuel objet `selection`, i.e. le texte sélectionné.

### Syntaxe

```js
string = sel.toString();
```

- `string` est la représentation sous la forme d'une chaîne de caractères de la sélection.

### Paramètres

Aucun.

### Description

Cette méthode renvoie le texte sélectionné.

En [JavaScript](/fr/JavaScript), cette méthode est appelée automatiquement pour des objets `selection` aux fonctions nécessitant un paramètre `string`&nbsp;:

```js
alert(window.getSelection()); // Appel automatique
alert(window.getSelection().toString()); // Appel explicite
```

### Voir aussi

- [Object.toString](/fr/Référence_de_JavaScript_1.5_Core/Objets_globaux/Object/toString)
