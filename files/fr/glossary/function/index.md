---
title: Fonction
slug: Glossary/Function
l10n:
  sourceCommit: 7fd56d044d3469659bbe5c04b004e87b13dee352
---

{{GlossarySidebar}}

Une **fonction** est une portion de code qui peut être appelée par d'autres codes ou par elle-même ou par une [variable](/fr/docs/Glossary/Variable) qui se réfère à la fonction. Lorsqu'une fonction est appelée, des [arguments](/fr/docs/Glossary/Argument) lui sont généralement donnés en entrée. La fonction peut également retourner une valeur de sortie. En [JavaScript](/fr/docs/Glossary/JavaScript), une fonction est aussi un [objet](/fr/docs/Glossary/Object).

Un nom de fonction est un [identifiant](/fr/docs/Glossary/Identifier) déclaré dans le cadre d'une déclaration de fonction ou d'une expression de fonction. Le fait que le nom de fonction soit déclaré ou exprimé impacte [la portée](/fr/docs/Glossary/Scope) du nom de fonction.

### Différents types de fonctions

Une **fonction anonyme** est une fonction sans nom de fonction. Seules les expressions de fonction peuvent être anonymes. Les déclarations de fonctions doivent avoir un nom&nbsp;:

```js
// Fonction anonyme créée comme expression de fonction
(function () {});

// Fonction anonyme créée comme fonction fléchée
() => {};
```

Les termes qui suivent ne sont pas utilisés dans la spécification du langage ECMAScript, il s'agit d'un jargon souvent utilisé pour faire référence aux différents types de fonction.

Une **fonction nommée** est une fonction avec un nom de fonction&nbsp;:

```js
// Déclaration de fonction
function toto() {}

// Expression de fonction nommée
(function truc() {});

// Fonction fléchée nommée
const machin = () => {};
```

Une **fonction imbriquée (ou fonction interne)** est une fonction à l'intérieur d'une autre fonction (`carre` dans l'exemple suivant). Une **fonction englobante** est une fonction qui contient une fonction (`ajouteCarres` dans l'exemple suivant)&nbsp;:

```js
function ajouteCarres(a, b) {
  function carre(x) {
    return x * x;
  }
  return carre(a) + carre(b);
}

// Fonction fléchée
const ajouteCarres2 = (a, b) => {
  const carre = (x) => x * x;
  return carre(a) + carre(b);
};
```

Une **fonction récursive** est une fonction qui fait appel à elle-même. Voir [la page du glossaire sur la récursion](/fr/docs/Glossary/Recursion).

```js
function boucle(x) {
  if (x >= 10) return;
  boucle(x + 1);
}

// Fonction fléchée
const boucle2 = (x) => {
  if (x >= 10) return;
  boucle2(x + 1);
};
```

Une **expression de fonction invoquée immédiatement** ([IIFE](/fr/docs/Glossary/IIFE) pour <i lang="en">Immediately Invoked Function Expressions</i> en anglais) est une fonction appelée directement après le chargement de la fonction dans le compilateur du navigateur. Pour identifier une IIFE, on cherchera les parenthèses gauche et droite supplémentaires à la fin de la déclaration de la fonction.

Les expressions de fonction, nommées ou anonymes, peuvent être appelées immédiatement.

```js
(function toto() {
  console.log("Coucou Toto");
})();

(function toutou() {
  console.log("Coucou Toutou");
})();

(() => console.log("Bonjour le monde"))();
```

Les fonctions créées avec des déclarations ne peuvent pas être appelées immédiatement ainsi. Les IIFE doivent être des _expressions_ de fonction.

```js example-bad
function toto() {
  console.log("Coucou toto");
}();
```

Voir [la page du glossaire sur les IIFE](/fr/docs/Glossary/IIFE) pour en savoir plus.

## Voir aussi

- [Les fonctions JavaScript](/fr/docs/Web/JavaScript/Guide/Functions)
- [Les fonctions fléchées JavaScript](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
