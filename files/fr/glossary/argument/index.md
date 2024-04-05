---
title: Argument
slug: Glossary/Argument
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

Un **argument** est une [valeur](/fr/docs/Glossary/Value) ([primitive](/fr/docs/Glossary/Primitive) ou [objet](/fr/docs/Glossary/Object)) passée en tant qu'entrée à une [fonction](/fr/docs/Glossary/Function).

Par exemple:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // on donne deux arguments

// Cette fonction accepte deux valeurs
function example(parameter1, parameter2) {
  console.log(parameter1); // Affiche = "Web"
  console.log(parameter2); // Affiche = "Development"
}
```

L'ordre des arguments dans l'appel de la fonction doit être le même que l'ordre des paramètre dans la définition de la fonction.

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // on donne deux arguments

// Cette fonction accepte une seule valeur, le deuxième argument est donc ignoré
function example(parameter) {
  console.log(parameter); // Affiche = foo
}
```

## Voir aussi

- [Argument](<https://fr.wikipedia.org/wiki/Argument_(informatique)>) sur Wikipédia
- [Différence entre paramètre et argument](/fr/docs/Glossary/Parameter#paramètres_versus_arguments)
- L'objet {{jsxref("Fonctions/arguments","arguments")}} en {{Glossary("JavaScript")}}
