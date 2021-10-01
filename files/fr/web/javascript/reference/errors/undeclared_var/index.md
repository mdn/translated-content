---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
tags:
  - Erreurs
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Undeclared_var
original_slug: Web/JavaScript/Reference/Erreurs/Undeclared_var
---
{{jsSidebar("Errors")}}

## Message

    ReferenceError: assignment to undeclared variable "x" (Firefox)
    ReferenceError: "x" is not defined (Chrome)
    ReferenceError: Variable undefined in strict mode (Edge)

## Type d'erreur

Une erreur {{jsxref("ReferenceError")}}, uniquement [en mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

## Quel est le problème ?

Une valeur a été affectée à une variable non-déclarée. Autrement dit, il y a eu une affectation qui n'utilise pas le mot-clé [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var). Il existe certaines différences entre les variables déclarées et les variables non déclarées ce qui peut entraîner des résultats étranges. C'est pour cette raison que le moteur affiche une erreur en mode strict.

Trois choses à noter lorsqu'on évoque les variables déclarées/non déclarées :

- Les variables déclarées sont contraintes dans le contexte d'exécution dans lequel elles sont déclarées. Les variables non déclarées sont toujours globales.
- Les variables déclarées sont créées avant que le code soit exécuté. Les variables non déclarées n'existent pas tant que le code qui leur est affecté est exécuté.
- Les variables déclarées sont des propriétés non-configurables de leur contexte d'exécution (la fonction ou l'espace global). Les variables non-déclarées sont configurables (elles peuvent être supprimées).

Pour plus de détails et d'exemple, se référer à la page sur [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var).

Les erreurs à propos des affectations sur les variables non déclarées se produisent uniquement [en mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode). En mode non-strict, elles sont ignorées silencieusement.

## Exemples

### Exemples invalides

Ici, la variable `truc` n'est pas déclarée :

```js example-bad
function toto() {
  "use strict";
  truc = true;
}
toto(); // ReferenceError: assignment to undeclared variable truc
```

### Exemples valides

Afin de déclarer `truc`, on peut ajouter le mot-clé [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var) devant.

```js example-good
function toto() {
  "use strict";
  var truc = true;
}
toto();
```

## Voir aussi

- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)
