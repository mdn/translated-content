---
title: Portée (Scope)
slug: Glossary/Scope
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **portée** est le contexte d'exécution courant dans lequel les {{Glossary("value", "valeurs")}} et les expressions sont «&nbsp;visibles&nbsp;» ou peuvent être référencées. Si une {{Glossary("variable")}} ou une expression n'est pas dans la portée courante, elle ne sera pas disponible à l'utilisation. Les portées peuvent aussi être organisées en hiérarchie, de sorte que les portées enfants ont accès aux portées parentes, mais pas l'inverse.

JavaScript comprend les types de portée suivants&nbsp;:

- **Portée globale**&nbsp;: la portée par défaut pour tout code s'exécutant en mode script.
- **Portée de module**&nbsp;: la portée pour le code s'exécutant en mode module.
- **Portée de fonction**&nbsp;: la portée créée par une {{Glossary("function", "fonction")}}.

De plus, les identifiants déclarés avec certaines syntaxes, notamment [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let), [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), [`class`](/fr/docs/Web/JavaScript/Reference/Statements/class) ou (en mode strict) [`function`](/fr/docs/Web/JavaScript/Reference/Statements/function), peuvent appartenir à une portée supplémentaire&nbsp;:

- Portée de bloc&nbsp;: la portée créée par une paire d'accolades (un [bloc](/fr/docs/Web/JavaScript/Reference/Statements/block)).

Une {{Glossary("function", "fonction")}} crée une portée, de sorte que (par exemple) une variable définie exclusivement à l'intérieur de la fonction ne peut pas être accessible depuis l'extérieur de la fonction ni depuis d'autres fonctions. Par exemple, le code suivant est invalide&nbsp;:

```js example-bad
function fonctionExemple() {
  const x = "déclarée dans la fonction"; // x ne peut être utilisée que dans fonctionExemple
  console.log("Dans la fonction");
  console.log(x);
}

console.log(x); // Provoque une erreur
```

Cependant, le code suivant est valide car la variable est déclarée en dehors de la fonction, ce qui la rend globale&nbsp;:

```js example-good
const x = "déclarée en dehors de la fonction";

fonctionExemple();

function fonctionExemple() {
  console.log("Dans la fonction");
  console.log(x);
}

console.log("En dehors de la fonction");
console.log(x);
```

Les blocs limitent la portée des déclarations `let` et `const`, mais pas des déclarations `var`.

```js example-good
{
  var x = 1;
}
console.log(x); // 1
```

```js example-bad
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

## Voir aussi

- [Portée](<https://fr.wikipedia.org/wiki/Portée_(informatique)>) sur Wikipédia
- [Règles de portée de bloc](/fr/docs/Web/JavaScript/Reference/Statements/block#règles_de_portée_pour_let_const_ou_les_déclarations_de_fonction_en_mode_strict)
