---
title: Error.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Error/toSource
tags:
  - Error
  - JavaScript
  - Méthode
  - Non-standard
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Error/toSource
---
{{JSRef}} {{non-standard_header}}

La méthode **`toSource()`** renvoie le code source qui peut générer la même erreur.

## Syntaxe

    e.toSource()

### Valeur de retour

Une chaîne de caractères qui contient le code source de l'erreur.

## Description

Appeler la méthode `toSource()` d'une instance {{jsxref("Error")}} ([Erreurs natives](/fr/docs/JavaScript/Reference/Objets_globaux/Error#Error_types) incluses) renverra le code source de l'erreur. Cette chaine de caractères peut être évaluée afin de créer un objet similaire. La chaine de caractères contenant le code source suit la structure du constructeur `Error`. Par exemple :

```js
(new name(message ,fileName, lineNumber))
```

où ces attributs correspondent aux propriétés respectives de l'instance `Error`.

> **Note :** Les propriétés utilisées par la méthode `toSource()` dans la création de cette chaine de caractères sont mutables et peuvent ne pas refléter correctement la fonction utilisée pour créer une instance d'erreur ou le nom du fichier ou la ligne à laquelle s'est produite l'erreur originale.

## Spécifications

Ne fait partie d'aucun standard. Implémentée dans JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error.toSource")}}

## Voir aussi

- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.name")}}
- {{jsxref("Object.prototype.toSource()")}} {{non-standard_inline}}
