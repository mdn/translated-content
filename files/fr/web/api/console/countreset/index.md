---
title: Console.countReset()
slug: Web/API/console/countReset
---

{{APIRef("Console API")}}

Remet le compteur à zero. Cette fonction prend un argument optionnel `label`

{{AvailableInWorkers}}

## Syntaxe

```
console.countReset([label]);
```

### Parameters

- `label`
  - : Si specifié, `countReset()` remet à zero le compteur associé à ce label. S'il n'est pas specifié, `countReset()` remet à zéro le compteur par defaut.

### Return value

Si le paramètre label à été spécifié :

```
counter-name: 0
```

Si aucun label n'as été specifié

```
default: 0
```

### Warnings

Si `label` est specifié mais n'existe pas `countReset()` renvoie cet avertissement :

```
Counter "counter-name" doesn’t exist.
```

Si `label` n'est pas specifé et que `count()` n'as pas encore été appellé `countReset()` renvoie cette avertissement :

```
Counter "default" doesn’t exist.
```

## Examples

Par exemple avec un code comme celui ci :

```js
var user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();
```

Le retour de la console ressemblera à ceci :

```
"default: 1"
"default: 2"
"default: 3"
"default: 1"
"default: 0"
```

Pour information l'appel à `console.counterReset()` remet à zero la valeur du compteur par défaut.

S'il on passe la variable `user` comme argument pour `label` et que l'on effectue un premier appel de la fonction `count()`, avec la chaine "bob" puis un second appel avec la chaine "alice" :

```js
var user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");
```

On obtiendra ce retour dans la console

```
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

Remettre à zero le compteur "bob" change uniquement la valeur de celui-ci. La valeur du compteur "alice" reste inchangée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
