---
title: static
slug: Web/JavaScript/Reference/Classes/static
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Classes/static
---
{{jsSidebar("Classes")}}

Le mot-clé **`static`** permet de définir une méthode statique d'une classe. Les méthodes statiques ne sont pas disponibles sur les instances d'une classe mais sont appelées sur la classe elle-même. Les méthodes statiques sont généralement des fonctions utilitaires (qui peuvent permettre de créer ou de cloner des objets par exemple).

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

## Syntaxe

    static nomMéthode() { ... }

## Description

Les méthodes statiques sont utilisées lorsque la méthode ne s'applique qu'à la classe elle-même et pas à ses instances. Les méthodes statiques sont généralement utilisées pour créer des fonctions utilitaires.

## Exemples

### Exemple classique

Dans l'exemple qui suit, on illustre :

- comment une classe implémente une méthode statique
- comment une classe avec une propriété statique peut être déclinée avec une sous-classe
- comment une méthode statique peut ou ne peut pas être appelé

```js
class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class SuperTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());       // 3
console.log(Triple.triple(6));      // 18
console.log(SuperTriple.triple(4)); // 144
var tp = new Triple();
console.log(SuperTriple.triple(4)); // 144 (pas d'impact de l'affectation du parent)
console.log(tp.triple()); // tp.triple n'est pas une fonction
```

### Utilisation depuis une autre méthode statique

Afin d'appeler une autre méthode statique dans une méthode statique, on pourra utiliser {{jsxref("Opérateurs/L_opérateur_this","this")}}.

```js
class StaticMethodCall {
  static staticMethod() {
    return 'Méthode statique appelée';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' depuis une autre statique';
  }
}
StaticMethodCall.staticMethod();
// 'Méthode statique appelée'
StaticMethodCall.anotherStaticMethod();
// 'Méthode statique appelée depuis une autre statique'
```

### Depuis les constructeurs de classes et les autres méthodes

Les méthodes statiques ne sont pas directement accessibles via le mot-clé [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this). Il faut les appeler avec le nom de la classe qui préfixe le nom de la méthode statique `NomDeClasse.MéthodeStatique()` (comme pour les autres appels en dehors de la classe) ou avec la propriété `constructor`  : `this.constructor.MéthodeStatique()`.

```js
class StaticMethodCall{
  constructor(){
    console.log(StaticMethodCall.staticMethod());
    // 'appel de la méthode statique'

    console.log(this.constructor.staticMethod());
    // 'appel de la méthode statique'
  }

  static staticMethod(){
    return 'appel de la méthode statique.';
  }
}
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.classes.static")}}

## Voir aussi

- [Expression `class`](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/class)
- [Déclaration `class`](/fr/docs/Web/JavaScript/Reference/Instructions/class)
- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
