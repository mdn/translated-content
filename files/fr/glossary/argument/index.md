---
title: Argument
slug: Glossary/Argument
l10n:
  sourceCommit: d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{GlossarySidebar}}

Un **argument** est une [valeur](/fr/docs/Glossary/Value) ([primitive](/fr/docs/Glossary/Primitive) ou [objet](/fr/docs/Glossary/Object)) passée en tant qu'entrée à une [fonction](/fr/docs/Glossary/Function).

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

- [Argument](<https://fr.wikipedia.org/wiki/Argument_(informatique)>) sur Wikipédia
- [Différence entre paramètre et argument](/fr/docs/Glossary/Parameter#paramètres_versus_arguments)
- L'objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) en [JavaScript](/fr/docs/Glossary/JavaScript)
