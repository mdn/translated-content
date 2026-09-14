---
title: Fonction de première classe
slug: Glossary/First-class_Function
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Un langage de programmation est dit avoir des **fonctions de première classe** lorsque les fonctions dans ce langage sont traitées comme n'importe quelle autre variable. Par exemple, dans un tel langage, une fonction peut être passée comme argument à d'autres fonctions, peut être retournée par une autre fonction et peut être assignée comme valeur à une variable.

## Exemples

### Affecter une fonction à une variable

```js
const toto = () => {
  console.log("salut");
};
toto(); // Invoque la fonction en utilisant la variable
// salut
```

Nous avons assigné une _fonction anonyme_ à une {{Glossary("Variable", "variable")}}, puis nous avons utilisé cette variable pour invoquer la fonction en ajoutant des parenthèses `()` à la fin.

> [!NOTE]
> Même si votre fonction était nommée, vous pouvez utiliser le nom de la variable pour l'invoquer. Donner un nom à la fonction sera utile lors du débogage de votre code. _Mais cela n'affectera pas la façon dont nous l'invoquons._

### Passer une fonction en argument

```js
function direBonjour() {
  return "Bonjour, ";
}
function salutation(textDeBonjour, nom) {
  console.log(textDeBonjour() + nom);
}
// Passez `direBonjour` comme argument à la fonction `salutation`
salutation(direBonjour, "JavaScript !");
// Bonjour, JavaScript !
```

Nous passons notre fonction `direBonjour()` comme argument à la fonction `salutation()`, ce qui montre comment nous traitons la fonction comme une valeur.

> [!NOTE]
> La fonction que nous passons comme argument à une autre fonction est appelée une _{{Glossary("callback function", "fonction de rappel")}}_. _`direBonjour()` est une fonction de rappel._

### Retourner une fonction

```js
function direBonjour() {
  return () => {
    console.log("Bonjour !");
  };
}
```

Dans cet exemple, nous retournons une fonction depuis une autre fonction — _Nous pouvons retourner une fonction car les fonctions en JavaScript sont traitées comme des valeurs._

> [!NOTE]
> Une fonction qui retourne une fonction ou prend d'autres fonctions en argument est appelée une _fonction d'ordre supérieur_.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Callback function", "Fonction de rappel")}}
  - {{Glossary("Function", "Fonction")}}
  - {{Glossary("Variable", "Variable")}}
- [Fonctions de première classe <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/First-class_function) sur Wikipédia
