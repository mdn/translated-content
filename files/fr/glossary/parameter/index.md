---
title: Paramètre
slug: Glossary/Parameter
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**Les paramètres** sont des variables nommées, déclarées dans une {{Glossary("function", "fonction")}}. Ils servent à référencer les {{Glossary("argument", "arguments")}} transmis à la fonction.

Par exemple&nbsp;:

```js
const argument1 = "Développement";
const argument2 = "Web";
exemple(argument1, argument2); // passage des deux arguments

// Cette fonction prend deux valeurs
function exemple(parametre1, parametre2) {
  console.log(parametre1); // Affiche = "Développement"
  console.log(parametre2); // Affiche = "Web"
}
```

Il existe deux types de paramètres&nbsp;:

- paramètres d'entrée
  - : le type le plus courant&nbsp;; ils transmettent des valeurs aux fonctions. Selon le langage de programmation, les paramètres d'entrée peuvent être transmis de plusieurs manières (par exemple, passage par valeur, par adresse, par référence).
- paramètres de sortie/de retour
  - : principalement utilisés pour retourner plusieurs valeurs depuis une fonction, mais ils sont déconseillés car ils prêtent à confusion

## Différence entre paramètres et arguments

Notez la différence entre _paramètres_ et _arguments_&nbsp;:

- Les paramètres de fonction sont les noms listés dans la définition de la fonction.
- Les {{Glossary("argument", "arguments")}} de fonction sont les valeurs réelles transmises à la fonction.
- Les paramètres sont initialisés avec les valeurs des arguments fournis.

## Voir aussi

- [Déclaration de fonction](/fr/docs/Web/JavaScript/Reference/Statements/function)
- [Expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Function", "Fonction")}}
  - {{Glossary("Argument")}}
- [Différence entre _paramètres_ et _arguments_](<https://fr.wikipedia.org/wiki/Param%C3%A8tre_(programmation_informatique)>)
