---
title: 'Warning: unreachable code after return statement'
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Stmt_after_return
original_slug: Web/JavaScript/Reference/Erreurs/Stmt_after_return
---
{{jsSidebar("Errors")}}

## Message

    Warning: unreachable code after return statement (Firefox)

## Type d'erreur

Avertissement

## Quel est le problème ?

Ce problème peut avoir deux origines :

- Une expression a été utilisée après l'instruction {{jsxref("Instructions/return", "return")}}
- Une instruction `return` a été utilisée sans point virgule mais une expression suivait cette instruction.

Lorsqu'une expression existe après une instruction `return` valide, un avertissement est produit pour alerter qu'une portion du code ne peut pas être atteinte et ne sera donc jamais lue et exécutée.

Pourquoi est-il préférable d'ajouter des points-virgules après les instructions `return` ? Si on utilise une instruction `return` sans point-virgule, cela peut créer une ambiguïté : est-ce que le développeur souhaite que le code qui suit sur la ligne d'après soit exécuté ou non ? L'avertissement relève cette ambiguïté afin de mieux la percevoir pour la lever.

Les avertissements ne seront pas affichés pour les `return` sans point-virgule si ces instructions suivent :

- {{jsxref("Instructions/throw", "throw")}}
- {{jsxref("Instructions/break", "break")}}
- {{jsxref("Instructions/var", "var")}}
- {{jsxref("Instructions/function", "function")}}

## Exemples

### Exemples invalides

```js example-bad
function f() {
  var x = 3;
  x += 4;
  return x;   // return permet de finir la fonction sur le champ
  x -= 3;     // Cette ligne ne sera jamais lue donc exécutée
}

function f() {
  return     // Cette instruction est traitée `return;`
    3 + 4;   // La fonction termine et cette ligne n'est jamais traitée
}
```

### Exemples valides

```js example-good
function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  // OK : return est après
             // toutes les autres instructions
}

function f() {
  return 3 + 4  // OK : un return sans point-virgule
                // avec une expression sur la même ligne
}
```

## Voir aussi

- {{jsxref("Instructions/return", "L'ajout automatique de point-virgule", "#Ajout_automatique_de_point-virgule", 1)}}
