---
title: Définir une méthode
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
  - ECMAScript 2015
  - Fonctions
  - JavaScript
  - Object
  - Reference
  - Syntaxe
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
original_slug: Web/JavaScript/Reference/Fonctions/Définition_de_méthode
---
{{JsSidebar("Functions")}}

Avec ECMAScript 2015 (ES6), il est possible d'utiliser une notation plus courte pour définir des méthodes au sein des littéraux objets. On peut ainsi définir plus rapidement une fonction qui sera utilisée comme méthode.

{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}

## Syntaxe

    var obj = {
      property( parameters… ) {},
      *generator( parameters… ) {},
      async property( parameters… ) {},
      async* generator( parameters… ) {},

      // avec les noms calculés :
      [property]( parameters… ) {},
      *[generator]( parameters… ) {},
      async [property]( parameters… ) {},

      // avec la syntaxe pour les accesseurs
      // mutateurs :
      get property() {},
      set property(value) {}
    };

## Description

La notation raccourcie est semblable à la syntaxe introduite par ECMAScript 5 pour les [accesseurs](/fr/docs/Web/JavaScript/Reference/Fonctions/get) et [mutateurs](/fr/docs/Web/JavaScript/Reference/Fonctions/set).

Le code suivant :

```js
var obj = {
  toto: function() {
    /* du code */
  },
  truc: function() {
    /* du code */
  }
};
```

Peut désormais être raccourci en :

```js
var obj = {
  toto() {
    /* du code */
  },
  truc() {
    /* du code */
  }
};
```

### Notation raccourcie pour les générateurs

[Les générateurs](/fr/docs/Web/JavaScript/Reference/Instructions/function*) sont des méthodes et peuvent donc être définis en utilisant la notation raccourci. Lorsqu'on les utilise :

- L'astérisque de la notation raccourcie doit être située avant le nom de la propriété pour le générateur. Autrement dit, `* g(){}` fonctionnera mais `g*(){}` ne fonctionnera pas.
- Les définitions des méthodes qui ne sont pas des générateurs ne peuvent pas contenir le mot-clé `yield`. Cela signifie que [l'ancienne syntaxe pour les générateurs](/fr/docs/Web/JavaScript/Reference/Instructions/Fonction_génératrice_historique) ne fonctionnera pas et déclenchera une exception {{jsxref("SyntaxError")}}. Il faut toujours utiliser `yield` avec l'astérisque (`*`).

```js
// Notation utilisant une propriété nommée (avant-ES2015)
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// La même définition, en utilisant la notation raccourcie
var obj2 = {
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Méthodes asynchrones avec notation raccourcie

[Les méthodes asynchrones](/fr/docs/Web/JavaScript/Reference/Instructions/async_function) peuvent également être définies grâce à une syntaxe raccourcie.

```js
// On utilise une propriété nommée
var obj3 = {
  f: async function () {
    await une_promesse;
  }
};

// Ici, on obtient le même résultat
// avec la notation raccourcie
var obj3 = {
  async f() {
    await une_promesse;
  }
};
```

### Méthodes génératrices asynchrones

Les méthodes génératrices peuvent également être asynchrones (cf. [`async`](/fr/docs/Web/JavaScript/Reference/Instructions/async_function)) :

```js
var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

// Le code équivalent avec la
// notation raccourcie
var obj4 = {
  async* f() {
    yield 1;
    yield 2;
    yield 3;
  }
};
```

### Les définitions de méthodes ne sont pas constructibles

Les définitions de méthodes ne sont pas des constructeurs et si on tente de les instancier, cela provoquera une exception {{jsxref("TypeError")}}.

```js
var obj = {
  méthode() {},
};
new obj.méthode; // TypeError: obj.méthode is not a constructor

var obj = {
  * g() {}
};
new obj.g; // TypeError: obj.g is not a constructuer (changé avec ES2016)
```

## Exemples

### Cas de test

```js
var obj = {
  a : "toto",
  b(){ return this.a; }
};
console.log(obj.b()); // "toto"
```

### Noms de propriétés calculés

Cette notation raccourcie peut également être utilisée avec des noms de propriétés calculés.

```js
var bar = {
  toto0 : function (){return 0;},
  toto1(){return 1;},
  ["toto" + 2](){return 2;},
};

console.log(bar.toto0()); // 0
console.log(bar.toto1()); // 1
console.log(bar.toto2()); // 2
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires                                                                                                                                     |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES2015', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ES2015')}}     | Définition initiale.                                                                                                                             |
| {{SpecName('ES2016', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ES2016')}}     | Les méthodes génératrices ne doivent pas implémenter la trappe [[Construct]] et déclencher une exception lorsqu'elles sont utilisées avec `new`. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                                                                                                                                  |

## Compatibilité des navigateurs

{{Compat("javascript.functions.method_definitions")}}

## Voir aussi

- [`get`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_get)
- [`set`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_set)
- [Grammaire lexicale de JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale)
