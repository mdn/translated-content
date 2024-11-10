---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

{{jsSidebar("Statements")}}

La **déclaration class** crée une nouvelle classe avec le nom fourni en utilisant l'héritage à base de prototypes pour émuler le fonctionnement de classe.

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

Il est aussi possible de définir une classe avec une {{jsxref("Opérateurs/class", "expression class","",1)}}.

## Syntaxe

```js
class nom [extends autreNom] {
  // corps de la classe
}
```

## Description

Les déclarations qui composent le corps de la classe sont exécutées en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode). La propriété du constructeur est optionnelle.

Les déclarations utilisées dans les classes ne sont pas remontées (_hoisted_) (à la différence des [déclarations de fonctions](/fr/docs/Web/JavaScript/Reference/Instructions/function)).

## Exemples

### Déclarer une classe simple

Dans l'exemple qui suit, on définit une classe `Polygone` pour laquelle on crée un sous-classe `Carré`. On note ici que la méthode `super()` ne peut être utilisée qu'au sein d'un constructeur et doit être appelée avant l'utilisation du mot-clé `this`.

```js
class Polygone {
  constructor(hauteur, largeur) {
    this.nom = "Polygone";
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}

class Carré extends Polygone {
  constructor(longueur) {
    super(longueur, longueur);
    this.nom = "Carré";
  }
}
```

> [!WARNING]
> Déclarer une classe deux fois lèvera une exception `SyntaxError`. De même, on ne pourra pas réutiliser un nom qui a déjà été utilisé dans une expression de classe.
>
> ```js
> // Deux déclarations avec le même nom
> class Toto {}
> class Toto {} // Uncaught SyntaxError: Identifier 'Toto' has already been declared
>
> // Expression puis déclaration
> var Truc = class {};
> class Truc {} // Uncaught TypeError: Identifier 'Truc' has already been declared
> ```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les déclarations `function`](/fr/docs/Web/JavaScript/Reference/Instructions/function)
- [Les expressions `class`](/fr/docs/Web/JavaScript/Reference/Opérateurs/class)
- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
