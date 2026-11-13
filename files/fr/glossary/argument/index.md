---
title: Argument
slug: Glossary/Argument
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les **arguments** sont des {{Glossary("value", "valeurs")}} ({{Glossary("primitive")}} ou {{Glossary("object", "objet")}}) passées en tant qu'entrée à une {{Glossary("function", "fonction")}}. Ne confondez pas les arguments avec les {{Glossary("parameter", "paramètres")}}, qui sont les noms utilisés dans la définition de la fonction pour se référer aux arguments.

Par exemple&nbsp;:

```js
const argument1 = "Développement";
const argument2 = "Web";
exemple(argument1, argument2); // on donne deux arguments

// Cette fonction accepte deux valeurs
function exemple(parametre1, parametre2) {
  console.log(parametre1); // Affiche "Développement"
  console.log(parametre2); // Affiche "Web"
}
```

L'ordre des arguments dans l'appel de la fonction doit être le même que l'ordre des paramètres dans la définition de la fonction.

```js
const argument1 = "toto";
const argument2 = [1, 2, 3];
exemple(argument1, argument2); // on donne deux arguments

// Cette fonction accepte une seule valeur, le deuxième argument est donc ignoré
function exemple(parametre) {
  console.log(parametre); // Affiche = toto
}
```

## Voir aussi

- [Différence entre paramètre et argument](/fr/docs/Glossary/Parameter#paramètres_versus_arguments)
- L'objet JavaScript {{JSxRef("Functions/arguments", "arguments")}}
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Function", "Fonction")}}
  - {{Glossary("Parameter", "Paramètre")}}
  - {{Glossary("JavaScript")}}
