---
title: TypeScript
slug: Glossary/TypeScript
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

TypeScript est un langage de programmation qui ajoute la {{Glossary("static_typing", "vérification de type statique")}} à JavaScript.

TypeScript est un sur-ensemble de JavaScript, ce qui signifie que tout ce qui est disponible en JavaScript est aussi disponible en TypeScript, et que tout programme JavaScript est syntaxiquement valide en TypeScript. De plus, le comportement d'exécution de TypeScript et de JavaScript est identique.

Cependant, TypeScript ajoute une vérification des types au moment de la compilation, en appliquant des règles sur l'utilisation et la combinaison des différents types. Ceci permet de détecter un grand nombre d'erreurs de programmation qui, en JavaScript, ne sont repérées qu'à l'exécution.

Certaines règles de typage sont inférées de JavaScript. Par exemple, dans le code ci-dessous, TypeScript infère que `maVariable` est une chaîne, et n'autorise pas sa réaffectation à un autre type&nbsp;:

```js
let maVariable = "Bonjour, le monde !";
maVariable = 1;
// Erreur :
// Type 'number' is not assignable to type 'string'.
```

TypeScript permet également au programmeur d'annoter son code, par exemple pour indiquer les types des paramètres d'une fonction ou les propriétés d'un objet&nbsp;:

```ts
function ajouter(gauche: number, droite: number): number {
  return gauche + droite;
}

ajouter("bonjour", "le monde");
// Erreur :
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

Après compilation, les annotations de type sont supprimées, ce qui fait que la sortie compilée n'est plus que du JavaScript pouvant être exécuté dans n'importe quel environnement JavaScript.

## Voir aussi

- [Le site de TypeScript <sup>(angl.)</sup>](https://www.typescriptlang.org/)
