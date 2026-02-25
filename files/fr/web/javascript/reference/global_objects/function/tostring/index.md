---
title: "Function : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des instances de {{JSxRef("Function")}} retourne une chaîne de caractères représentant le code source de la fonction.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Function.prototype.toString()")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// Résultat attendu : "function sum(a, b) {
//                      return a + b;
//                    }"

console.log(Math.abs.toString());
// Résultat attendu : "function abs() { [native code] }"
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères qui représente le code source de la fonction.

## Description

L'objet {{JSxRef("Function")}} remplace la méthode `toString()` héritée de {{JSxRef("Object")}}&nbsp;; il n'hérite pas de {{JSxRef("Object.prototype.toString")}}. Pour les objets `Function` définis par l'utilisateur, la méthode `toString` retourne une chaîne contenant le segment de texte source utilisé pour définir la fonction.

JavaScript appelle automatiquement la méthode `toString` lorsqu'une `Function` doit être représentée comme une valeur textuelle, par exemple lorsqu'une fonction est concaténée avec une chaîne.

La méthode `toString()` lèvera une exception {{JSxRef("TypeError")}} ("Function.prototype.toString called on incompatible object"), si l'objet `this` n'est pas un objet `Function`.

```js example-bad
Function.prototype.toString.call("toto"); // throws TypeError
```

Si la méthode `toString()` est appelée sur des objets fonction intégrés, une fonction créée par {{JSxRef("Function.prototype.bind()")}}, ou d'autres fonctions non JavaScript, alors `toString()` retourne une _chaîne de fonction native_ qui ressemble à

```plain
function someName() { [native code] }
```

Pour les méthodes et fonctions des objets intrinsèques, `someName` est le nom initial de la fonction&nbsp;; sinon, son contenu peut être défini par l'implémentation, mais sera toujours dans la syntaxe du nom de propriété, comme `[1 + 1]`, `someName` ou `1`.

> [!NOTE]
> Cela signifie que l'utilisation de [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) sur des chaînes de fonctions natives est une erreur de syntaxe garantie.

Si la méthode `toString()` est appelée sur une fonction créée par le constructeur `Function`, `toString()` retourne le code source d'une déclaration de fonction synthétisée nommée `"anonymous"` en utilisant les paramètres et le corps de fonction fournis. Par exemple, `Function("a", "b", "return a + b").toString()` retournera&nbsp;:

```plain
function anonymous(a,b
) {
return a + b
}
```

Depuis ES2018, la spécification exige que la valeur de retour de `toString()` soit exactement le même code source que celui utilisé lors de la déclaration, y compris les espaces et/ou les commentaires — ou, si l'hôte n'a pas le code source disponible pour une raison quelconque, il doit retourner une chaîne de fonction native. La prise en charge de ce comportement révisé peut être trouvée dans le [tableau de compatibilité](#compatibilité_des_navigateurs).

## Exemples

### Comparer le code source réel et les résultats de toString

```js
function test(fn) {
  console.log(fn.toString());
}

function f() {}
class A {
  a() {}
}
function* g() {}

test(f); // "function f() {}"
test(A); // "class A { a() {} }"
test(g); // "function* g() {}"
test((a) => a); // "(a) => a"
test({ a() {} }.a); // "a() {}"
test({ *a() {} }.a); // "*a() {}"
test({ [0]() {} }[0]); // "[0]() {}"
test(Object.getOwnPropertyDescriptor({ get a() {} }, "a").get); // "get a() {}"
test(Object.getOwnPropertyDescriptor({ set a(x) {} }, "a").set); // "set a(x) {}"
test(Function.prototype.toString); // "function toString() { [native code] }"
test(function f() {}.bind(0)); // "function () { [native code] }"
test(Function("a", "b")); // function anonymous(a\n) {\nb\n}
```

Notez qu'après la révision de `Function.prototype.toString()`, lorsque `toString()` est appelé, les implémentations ne sont jamais autorisées à synthétiser le code source d'une fonction qui n'est pas une chaîne de fonction native. La méthode retourne toujours le code source exact utilisé pour créer la fonction — y compris les exemples [d'accesseur](/fr/docs/Web/JavaScript/Reference/Functions/get) et de [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/set) ci-dessus. Le constructeur [`Function`](/fr/docs/Web/JavaScript/Reference/Functions) lui-même a la capacité de synthétiser le code source de la fonction (et est donc une forme implicite de la méthode [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Obtenir le texte source d'une fonction

Il est possible d'obtenir le texte source d'une fonction en la forçant à être une chaîne de caractères — par exemple, en l'enveloppant dans un littéral de modèle&nbsp;:

```js
function toto() {
  return "truc";
}
console.log(`${toto}`);
// function toto() {
//   return "truc";
// }
```

Cette source est _exacte_, y compris les commentaires intercalés (qui ne seront pas stockés par la représentation interne du moteur autrement).

```js
function toto /* un commentaire */() {
  return "truc";
}
console.log(toto.toString());
// function toto /* un commentaire */() {
//   return "truc";
// }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.toString()")}}
