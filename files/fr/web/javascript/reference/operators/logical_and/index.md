---
title: ET logique (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
---

{{jsSidebar("Operators")}}

L'opérateur ET logique (`&&`) (conjonction logique) renvoie vrai si et uniquement si ses deux opérandes sont `true` ou équivalents à `true`. Il est généralement utilisé avec des valeurs booléennes et, quand c'est le cas, il renvoie une valeur booléenne. Toutefois, l'opérateur `&&` renvoie en fait la valeur d'un de ses opérandes et, si cet opérateur est utilisé avec des valeurs non-booléennes, il renverra une valeur non-booléenne.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Syntaxe

```js
expr1 && expr2;
```

## Description

Si `expr1` peut être converti en `true`, le résultat sera `expr2` ; sinon, ce sera `expr1`.

Si une valeur peut être convertie en `true`, elle peut être qualifiée de [_truthy_](/fr/docs/Glossary/Truthy). Si une valeur peut être convertie en `false`, on la qualifiera alors de [_falsy_](/fr/docs/Glossary/Falsy).

Parmi les expressions qui peuvent être converties en `false`, on a :

- `null` ;
- `NaN` ;
- `0` ;
- la chaîne de caractères vide (`""` ou `''` ou ` `` `) ;
- `undefined`.

Bien que l'opérateur `&&` puisse être utilisé avec des opérandes qui ne soient pas des valeurs booléennes, il reste un opérateur booléen, car sa valeur de retour peut toujours être convertie en [une valeur primitive booléenne](/fr/docs/Web/JavaScript/Data_structures#boolean_type). Pour convertir explicitement la valeur de retour (ou tout expression de façon plus générale) dans sa valeur booléenne correspondante, on pourra utiliser un double [opérateur NON (`!`)](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT) ou le constructeur [`Boolean()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean).

### Évaluation en court-circuit

L'expression utilisant un ET logique est évaluée de gauche à droite. Le moteur cherche s'il est possible d'utiliser un court-circuit de la façon suivante :

`(une expression équivalente à faux) && expr` sera court-circuité pour fournir directement le résultat de l'expression équivalente à faux.

Cette notion de court-circuit indique que la partie `expr` ci-avant **n'est pas évaluée**, tout effet de bord lié à cette évaluation n'aura pas lieu (par exemple, si `expr` est un appel de fonction, la fonction n'est pas appelée). Ce fonctionnement a lieu, car la valeur du résultat peut d'office être déterminée par l'évaluation du premier opérande. Par exemple :

```js
function A() {
  console.log("A a été appelée");
  return false;
}

function B() {
  console.log("B a été appelée");
  return true;
}

console.log(A() && B());
// affichera "A a été appelée" dans la console via l'appel de la fonction
// puis affichera false (la valeur du résultat de l'expression avec l'opérateur)
// on voit que la fonction B n'est pas du tout appelée
```

### Précédence des opérateurs

Les expressions suivantes peuvent sembler équivalentes mais ne le sont pas. En effet, l'opérateur `&&` est exécuté avant l'opérateur `||` (voir [l'article sur la précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)).

```js-nolint
true || false && false; // renvoie true, car && est exécuté en premier
(true || false) && false; // renvoie false, car la précédence par défaut ne s'applique pas avec les parenthèses
```

## Exemples

### Utiliser le ET logique

Le code suivant illustre quelques usages de l'opérateur ET logique `&&`.

```js
a1 = true && true; // t && t renvoie true
a2 = true && false; // t && f renvoie false
a3 = false && true; // f && t renvoie false
a4 = false && 3 == 4; // f && f renvoie false
a5 = "Chat" && "Chien"; // t && t renvoie "Chien"
a6 = false && "Chat"; // f && t renvoie false
a7 = "Chat" && false; // t && f renvoie false
a8 = "" && false; // f && f renvoie ""
a9 = false && ""; // f && f renvoie false
```

### Règles de conversion booléennes

#### Convertir ET en OU

L'opération suivante, utilisant des **booléens** :

```js
bCondition1 && bCondition2;
```

sera toujours équivalente à :

```js
!(!bCondition1 || !bCondition2);
```

#### Convertir OU en ET

L'opération suivante, utilisant des **booléens** :

```js
bCondition1 || bCondition2;
```

sera toujours équivalente à :

```js
!(!bCondition1 && !bCondition2);
```

### Retrait des parenthèses imbriquées

Les expressions logiques sont évaluées de gauche à droite, il est donc possible de retirer les parenthèses d'une expression complexe en suivant quelques règles.

L'opération composite suivant, qui utilise des **booléens** :

```js
bCondition1 || (bCondition2 && bCondition3);
```

sera toujours égale à :

```js
bCondition1 || (bCondition2 && bCondition3);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [_Truthy_](/fr/docs/Glossary/Truthy)
- [_Falsy_](/fr/docs/Glossary/Falsy)
