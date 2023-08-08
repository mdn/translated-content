---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
---

{{JSSidebar("Operators")}}

La syntaxe **`new.target`** est disponible dans toutes les fonctions et permet entre autres de tester si une fonction ou un constructeur a été appelé avec `new`. Dans les constructeurs, il fait référence au constructeur invoqué par [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new). Dans les appels de fonction « normaux », `new.target` vaut {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## Syntaxe

```js
new.target;
```

## Description

La syntaxe `new.target` se compose du mot-clé `new`, suivi d'un point puis d'un nom de propriété (ici `target`). Généralement et par ailleurs, `new.` est utilisé comme contexte pour accéder à une propriété. Ici, `new.` ne fait pas réellement référence à un objet. Dans les appels de constructeurs, `new.target` fait référence au constructeur qui a été appelé par `new`. Cette syntaxe permet donc de récupérer cette valeur.

`new.target` est une méta-propriété, disponible pour toutes les fonctions. Dans [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées), `new.target` fait référence au `new.target` de la fonction englobante.

## Exemples

### Utilisation de `new.target` dans les appels de fonction

Utilisé dans les appels de fonctions « classiques » (autrement dit pour les fonctions qui ne sont pas des constructeurs), `new.target` vaut {{jsxref("undefined")}}. Cela permet de détecter si une fonction a été appelée comme constructeur avec [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new) :

```js
function Toto() {
  if (!new.target) throw "Toto() doit être appelé avec new";
  console.log("Toto instancié avec new");
}

new Toto(); // affiche "Toto instancié avec new" dans la console
Toto(); // lève l'exception avec "Toto doit être appelé avec new"
```

### Utilisation de `new.target` dans les constructeurs

Utilisés dans les appels de constructeurs de classe, `new.target` fait référence au constructeur utilisé directement avec `new`. C'est également le cas quand le constructeur est présent dans une classe parente et est délégué depuis le constructeur fils :

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // affiche "A"
var b = new B(); // affiche "B"

class C {
  constructor() {
    console.log(new.target);
  }
}

class D extends C {
  constructor() {
    super();
  }
}

var c = new C(); // function C()
var d = new D(); // function D()
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions)
- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
- [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new)
- [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this)
- [Cet article sur les classes traduit en français](https://tech.mozfr.org/post/2015/08/12/ES6-en-details-%3A-les-sous-classes-et-l-heritage)
