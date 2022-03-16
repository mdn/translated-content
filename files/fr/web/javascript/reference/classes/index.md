---
title: Classes
slug: Web/JavaScript/Reference/Classes
tags:
  - Classes
  - ECMAScript 2015
  - Intermédiaire
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Classes
---
{{JsSidebar("Classes")}}

Les classes JavaScript ont été introduites avec ECMAScript 2015. Elles sont un « sucre syntaxique » par rapport à l'héritage prototypal. En effet, cette syntaxe n'introduit pas un nouveau modèle d'héritage dans JavaScript ! Elle fournit uniquement une syntaxe plus simple pour créer des objets et manipuler l'héritage.

## Définir des classes

En réalité, les classes sont juste des [fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions) spéciales. Ainsi, les classes sont définies de la même façon que les fonctions : par déclaration, ou par expression.

### Les déclarations de classes

Pour utiliser une déclaration de classe simple, on utilisera le mot-clé `class`, suivi par le nom de la classe que l'on déclare (ici «&nbsp;Rectangle&nbsp;»).

```js
class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}
```

#### Remontée des déclarations (_hoisting_)

[Les déclarations de fonctions](/fr/docs/Web/JavaScript/Reference/Instructions/function) sont remontées dans le code. En revanche, ce n'est pas le cas pour les déclarations de classes. Ainsi, il est nécessaire de déclarer la classe avant de l'instancier. Dans le cas contraire, on obtient une {{jsxref("ReferenceError")}} :

```js example-bad
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Les expressions de classes

Il est possible d'utiliser des expressions de classes, nommées ou anonymes. Si on utilise un nom dans l'expression, ce nom ne sera accessible que depuis le corps de la classe via la propriété {{jsxref("Function.name", "name")}} (cette valeur ne sera pas directement accessible pour les instances).

```js
// anonyme
let Rectangle = class {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};

// nommée
let Rectangle = class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};
```

> **Note :** Les mêmes règles s'appliquent aux expressions de classes en ce qui concerne la remontée (_hoisting_) des classes (cf. le paragraphe précédent sur les remontées des déclarations de classe).

## Corps d'une classe et définition des méthodes

Le corps d'une classe est la partie contenue entre les accolades. C'est dans cette partie que l'on définit les propriétés d'une classe comme ses méthodes et son constructeur.

### Mode strict

Le corps des classes, pour les expressions et pour les déclarations de classes, est exécuté en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) (autrement dit, le constructeur, les méthodes statiques, le prototype, les accesseurs (_getters_) et mutateurs (_setters_) sont exécutés en mode strict).

### Constructeur

La méthode [`constructor`](/fr/docs/Web/JavaScript/Reference/Classes/constructor) est une méthode spéciale qui permet de créer et d'initialiser les objet créés avec une classe. Il ne peut y avoir qu'une seule méthode avec le nom "constructor" pour une classe donnée. Si la classe contient plusieurs occurences d'une méthode `constructor`, cela provoquera une exception {{jsxref("SyntaxError")}}.

Le constructeur ainsi déclaré peut utiliser le mot-clé `super` afin d'appeler le constructeur de la classe parente.

### Méthodes de prototype

Voir aussi les définitions de méthode.

```js
class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.largeur * this.hauteur;
  }
}

const carré = new Rectangle(10, 10);

console.log(carré.area);
```

### Méthodes statiques

Le mot-clé [`static`](/fr/docs/Web/JavaScript/Reference/Classes/static) permet de définir une méthode statique pour une classe. Les méthodes statiques sont appelées par rapport à la classe entière et non par rapport à une [instance](/fr/docs/Web/JavaScript/Introduction_à_JavaScript_orienté_objet#L'instance) donnée (ces méthodes ne peuvent pas être appelées « depuis » une instance). Ces méthodes sont généralement utilisées sous formes d'utilitaires au sein d'applications.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
```

### Gestion de `this` pour le prototype et les méthodes statiques

Lorsqu'une méthode statique ou une méthode liée au prototype est appelée sans valeur `this`, celle-ci vaudra `undefined` au sein de la fonction. Il n'y aura pas d'autodétermination de `this` (_autoboxing_ en anglais). On aura le même résultat si on invoque ces fonctions dans du code non-strict car les fonctions liées aux classes sont exécutées en mode strict.

```js
class Animal {
  crie() {
    return this;
  }
  static mange() {
    return this;
  }
}

let obj = new Animal();
obj.crie(); // Animal {}
let crie = obj.crie;
crie(); // undefined

Animal.mange(); // class Animal
let mange = Animal.mange;
mange(); // undefined
```

Si on écrit le code avec des fonctions traditionnelles plutôt qu'avec des classes et qu'on utilise le mode non-strict, l'autodétermination de `this` sera faite en fonction du contexte dans lequel la fonction a été appelée. Si la valeur initiale est `undefined`, `this` correspondra à l'objet global.

L'autodétermination de `this` n'a pas lieu en mode strict, la valeur `this` est passée telle quelle.

```js
function Animal() { }

Animal.prototype.crie = function() {
  return this;
}

Animal.mange = function() {
  return this;
}

let obj = new Animal();
let crie = obj.crie;
crie(); // l'objet global

let mange = Animal.mange;
mange(); // l'objet global
```

### Propriétés des instances

Les propriétés des instances doivent être définies dans les méthodes de la classe :

```js
class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}
```

Les propriétés statiques ou les données relatives au prototype doivent être définies en dehors de la déclaration comportant le corps de la classe :

```js
Rectangle.largeurStatique = 20;
Rectangle.prototype.largeurProto = 25;
```

### Déclarations de champs

{{SeeCompatTable}}

> **Attention :** Les déclarations de champs publics et privés sont une [fonctionnalité expérimentale actuellement proposée pour être intégrée dans le standard ECMAScript](https://github.com/tc39/proposal-class-fields). Elle n'est pas implémentée par la majorité des navigateurs mais on peut émuler cette fonctionnalité en utilisant un système de compilation tel que [Babel](https://babeljs.io/).

#### Déclarations de champs publics

En utilisant la syntaxe pour la déclaration des champs, on peut réécrire l'exemple précédent de la façon suivante :

```js
class Rectangle {
  hauteur = 0;
  largeur;
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}
```

En déclarant les champs en préalable, il est plus facile de comprendre la classe dans son ensemble. De plus, on s'assure que les champs soient toujours présents.

Comme on peut le voir dans cet exemple, les champs peuvent éventuellement être déclarés avec une valeur par défaut.

#### Déclarations de champs privés

En utilisant des champs privés, on peut revoir la définition de la façon suivante :

```js
class Rectangle {
  #hauteur = 0;
  #largeur;
  constructor(hauteur, largeur){
    this.#hauteur = hauteur;
    this.#largeur = largeur;
  }
}
```

Si on utilise les champs privés hors de la classe, cela génèrera une erreur. Ces champs ne peuvent être lus ou modifiés que depuis le corps de la classe. En évitant d'exposer des éléments à l'extérieur, on s'assure que les portions de code qui consomment cette classe n'utilise pas ses détails internes et on peut alors maintenir la classe dans son ensemble et modifier les détails internes si besoin.

> **Note :** Les champs privés doivent nécessairement être déclarés en premier dans les déclarations de champ.

Il n'est pas possible de créer des champs privés _a posteriori_ au moment où on leur affecterait une valeur. Autrement dit, il est possible de déclarer une variable normale au moment voulu lorsqu'on lui affecte une valeur tandis que pour les champs privés, ces derniers doivent être déclarés (éventuellement initialisés) en amont, au début du corps de la classe.

## Créer une sous-classe avec `extends`

Le mot-clé [`extends`](/fr/docs/Web/JavaScript/Reference/Classes/extends), utilisé dans les déclarations ou les expressions de classes, permet de créer une classe qui hérite d'une autre classe (on parle aussi de « sous-classe » ou de « classe-fille »).

```js
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  parle() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Chien extends Animal {
  constructor(nom) {
    super(nom); // appelle le constructeur parent avec le paramètre
  }
  parle() {
    console.log(`${this.nom} aboie.`);
  }
}
```

Si on déclare un constructeur dans une classe fille, on doit utiliser `super()` avant `this`.

On peut également étendre des classes plus _traditionnelles_ basées sur des constructeurs fonctionnels :

```js
function Animal (nom) {
  this.nom = nom;
}
Animal.prototype.crie = function () {
  console.log(`${this.nom} fait du bruit.`);
}

class Chien extends Animal {
  crie() {
    super.crie();
    console.log(`${this.nom} aboie.`);
  }
}

let c = new Chien('Ida');
c.crie();
// Ida fait du bruit.
// Ida aboie.
```

En revanche, les classes ne permettent pas d'étendre des objets classiques non-constructibles. Si on souhaite créer un lien d'héritage en un objet et une classe, on utilisera {{jsxref("Object.setPrototypeOf()")}} :

```js
const Animal = {
  crie() {
    console.log(`${this.nom} fait du bruit.`);
  }
};

class Chien {
  constructor(nom) {
    this.nom = nom;
  }
  crie() {
    super.crie();
    console.log(`${this.nom} aboie.`);
  }
}
Object.setPrototypeOf(Chien.prototype, Animal);

let d = new Chien('Ida');
d.crie();
// Ida fait du bruit
// Ida aboie.
```

## Le symbole `species`

Lorsqu'on souhaite renvoyer des objets {{jsxref("Array")}} avec une sous-classe `MonArray`, on peut utiliser symbole `species` pour surcharger le constructeur par défaut.

Par exemple, si, lorsqu'on utilise des méthodes comme {{jsxref("Array.map","map()")}} qui renvoient le constructeur par défaut et qu'on veut qu'elles renvoient `Array` plutôt que `MonArray`, on utilisera {{jsxref("Symbol.species")}} :

```js
class MonArray extends Array {
  // On surcharge species
  // avec le constructeur Array du parent
  static get [Symbol.species]() { return Array; }
}
let a = new MonArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MonArray); // false
console.log(mapped instanceof Array);    // true
```

## Utiliser super pour la classe parente

Le mot-clé [`super`](/fr/docs/Web/JavaScript/Reference/Opérateurs/super) est utilisé pour appeler les fonctions rattachées à un objet parent.

```js
class Chat {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Lion extends Chat {
  parler() {
    super.parler();
    console.log(`${this.nom} rugit.`);
  }
}
```

## Les _mix-ins_

Les sous-classes abstraites ou _mix-ins_ sont des modèles (_templates_) pour des classes. Une classe ECMAScript ne peut avoir qu'une seule classe parente et il n'est donc pas possible, par exemple, d'hériter de plusieurs classes dont une classe abstraite. La fonctionnalité dont on souhaite disposer doit être fournie par la classe parente.

Une fonction peut prendre une classe parente en entrée et renvoyer une classe fille qui étend cette classe parente. Cela peut permettre d'émuler les _mix-ins_ avec ECMAScript.

```js
let calculetteMixin = Base => class extends Base {
  calc() { }
};

let aleatoireMixin = Base => class extends Base {
  randomiseur() { }
};
```

Une classe utilisant ces _mix-ins_ peut alors être écrite de cette façon :

```js
class Toto { }
class Truc extends calculetteMixin(aleatoireMixin(Toto)) { }
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ES2016', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2016')}}     |                      |
| {{SpecName('ES2017', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2017')}}     |                      |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.classes")}}

## Utilisation via l'éditeur multiligne dans Firefox

Une classe ne peut pas être redéfinie. Si vous testez votre code via l'éditeur multiligne JavaScript de Firefox (Outils > Développement web > Editeur multiligne JavaScript) et que vous exécutez à plusieurs reprises votre code avec la définition d'une classe, vous obtiendrez une exception SyntaxError : _redeclaration of let \<class-name>_.

Pour relancer une définition, il faut utiliser le menu Exécuter > Recharger et exécuter. À ce sujet, voir le bug {{bug("1428672")}}.

## Voir aussi

- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions)
- {{jsxref("Instructions/class", "Les déclarations de classes","",1)}}
- {{jsxref("Opérateurs/class", "Les expressions de classes","",1)}}
- {{jsxref("Opérateurs/super", "super")}}
- [Billet sur les classes (traduction en français)](https://tech.mozfr.org/post/2015/07/29/ES6-en-details-%3A-les-classes)
- [Champs publics et privés pour les classes (proposition de niveau 3)](https://github.com/tc39/proposal-class-fields)
