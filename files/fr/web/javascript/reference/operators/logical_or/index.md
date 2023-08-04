---
title: OU logique (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
---

{{jsSidebar("Operators")}}

L'opérateur OU logique (`||`) (disjonction logique) renvoie vrai si et seulement si au moins un de ses opérandes est vrai. Cet opérateur est généralement utilisé avec des valeurs booléennes et, lorsque c'est le cas, il renvoie une valeur booléenne. Toutefois, `||` peut aussi être utilisé avec des valeurs non-booléennes et, dans ce cas, renverra une valeur non-booléenne.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## Syntaxe

```js
expr1 || expr2;
```

## Description

Si `expr1` peut être converti en `true`, c'est `expr1` qui sera renvoyé, sinon ce sera `expr2`.

Si une valeur peut être convertie en `true`, elle peut être qualifiée de [_truthy_](/fr/docs/Glossary/Truthy). Si une valeur peut être convertie en `false`, on la qualifiera alors de [_falsy_](/fr/docs/Glossary/Falsy).

Parmi les expressions qui peuvent être converties en `false`, on a :

- `null` ;
- `NaN` ;
- `0` ;
- la chaîne de caractères vide (`""` ou `''` ou ` `` `) ;
- `undefined`.

Bien que l'opérateur `||` puisse être utilisé avec des opérandes qui ne soient pas des valeurs booléennes, il reste un opérateur booléen, car sa valeur de retour peut toujours être convertie en [une valeur primitive booléenne](/fr/docs/Web/JavaScript/Data_structures#boolean_type). Pour convertir explicitement la valeur de retour (ou tout expression de façon plus générale) dans sa valeur booléenne correspondante, on pourra utiliser un double [opérateur NON (`!`)](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT) ou le constructeur [`Boolean()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean).

### Évaluation en court-circuit

L'expression utilisant un OU logique est évaluée de gauche à droite. Le moteur cherche s'il est possible d'utiliser un court-circuit de la façon suivante :

`(une expression équivalente à vrai) || expr` sera court-circuité pour fournir directement le résultat de l'expression équivalente à vrai.

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

console.log(B() || A());
// affichera "B a été appelée" dans la console via l'appel de la fonction
// puis affichera true (la valeur du résultat de l'expression avec l'opérateur)
// on voit que la fonction A n'est pas du tout appelée
```

### Précédence des opérateurs

Les expressions suivantes peuvent sembler équivalentes mais ne le sont pas. En effet, l'opérateur `&&` est exécuté avant l'opérateur `||` (voir [l'article sur la précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)).

```js-nolint
true || false && false; // renvoie true, car && est exécuté en premier
(true || false) && false; // renvoie false, car la précédence par défaut ne s'applique pas avec les parenthèses
```

## Exemples

### Utiliser le OU logique

Le code suivant illustre quelques usages de l'opérateur OU logique `||`.

```js
o1 = true || true; // t || t renvoie true
o2 = false || true; // f || t renvoie true
o3 = true || false; // t || f renvoie true
o4 = false || 3 == 4; // f || f renvoie false
o5 = "Chat" || "Chien"; // t || t renvoie "Chat"
o6 = false || "Chat"; // f || t renvoie "Chat"
o7 = "Chat" || false; // t || f renvoie "Chat"
o8 = "" || false; // f || f renvoie false
o9 = false || ""; // f || f renvoie ""
o10 = false || varObject; // f || object renvoie varObject
```

> **Note :** Si vous utilisez cet opérateur afin de fournir une valeur par défaut à une variable. Soyez conscient⋅e qu'une valeur équivalente à `false` ne pourra pas être utilisée ainsi. Si vous souhaitez uniquement écarter [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), privilégiez l'utilisation de [l'opérateur de coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).

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

L'opération composite suivante, utilisant des **booléens** :

```js
bCondition1 && (bCondition2 || bCondition3);
```

sera toujours équivalente à :

```js
!(!bCondition1 || (!bCondition2 && !bCondition3));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur de coalescence des nuls (`??`)](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [_Truthy_](/fr/docs/Glossary/Truthy)
- [_Falsy_](/fr/docs/Glossary/Falsy)
