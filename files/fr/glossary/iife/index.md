---
title: IIFE
slug: Glossary/IIFE
tags:
  - Glossaire
  - JavaScript
  - Programmation
translation_of: Glossary/IIFE
original_slug: Glossaire/IIFE
---
**IIFE** (Immediately Invoked Function Expression) _(Expression de fonction invoquée immédiatement)_ est une {{glossary("Function","fonction")}} {{glossary("JavaScript")}} qui est exécutée dès qu'elle est définie.

C'est un modèle de conception qui est également connu sous le nom de {{glossary("Self-Executing Anonymous Function","Fonction anonyme auto-exécutable")}} et contient deux parties principales. La première est la fonction anonyme avec portée lexicale incluse dans le {{jsxref("Operators/Grouping", "groupement opérateur")}}`()`. Cela empêche l'accès aux variables dans l'expression idiomatique IIFE ainsi que la pollution de la portée globale.

La deuxième partie crée la fonction immédiatement exécutable `()`, à travers laquelle le moteur JavaScript interprétera directement la fonction.

## Exemples

La fonction devient une expression de fonction qui est immédiatement exécutée. La variable dans l'expression ne peut pas être atteinte de l'extérieur.

```js
(function () {
    var aName = "Barry";
})();
// Le nom de la variable n'est pas accessible depuis le périmètre externe
aName // lancement "Exception ReferenceError: aName n'est pas défini"
```

Affecter l'IIFE à une variable ne la stocke pas mais reçoit son résultat.

```js
var result = (function () {
    var name = "Barry";
    return name;
})();
// Crée immédiatement la sortie:
result; // "Barry"
```

## Pour approfondir

### Apprendre sur ce sujet

- [Exemple rapide](/fr/docs/Web/JavaScript/Une_r%C3%A9introduction_%C3%A0_JavaScript#Les_fonctions) (à la fin de la section "Les fonctions", juste avant "Les objets personnalisés")

### Culture générale

- [Immediately-invoked function expression (IIFE)](https://fr.wikipedia.org/wiki/JavaScript#Expressions_de_fonctions_imm%C3%A9diatement_invoqu%C3%A9es) sur Wikipédia
