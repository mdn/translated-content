---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
---

{{JSRef}}

La méthode statique **`Reflect.get()`** est une fonction qui permet d'obtenir une propriété d'un objet cible. Elle fonctionne comme (`cible[cléPropriété]`) mais sous la forme d'une fonction.

{{EmbedInteractiveExample("pages/js/reflect-get.html")}}

## Syntaxe

```js
Reflect.get(cible, cléPropriété[, récepteur])
```

### Paramètres

- `cible`
  - : L'objet cible dont on souhaite obtenir la propriété.
- `cléPropriété`
  - : Le nom de la propriété qu'on souhaite obtenir.
- `récepteur` {{optional_inline}}
  - : La valeur de `this` à passer à `cible` si l'accesseur est utilisé. Lorsqu'on l'utilise avec {{jsxref("Proxy")}}, ce peut être un objet qui hérite de la cible.

### Valeur de retour

La valeur de la propriété.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.get` permet d'obtenir une propriété d'un objet. Elle est équivalent à [un accesseur de propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres) mais sous la forme d'une fonction.

## Exemples

```js
// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "un"], 1); // "un"

// Proxy qui intercepte get
var x = { p: 1 };
var obj = new Proxy(x, {
  get(t, k, r) {
    return k + "truc";
  },
});
Reflect.get(obj, "toto"); // "tototruc"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- [Accesseurs de propriété](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres)
