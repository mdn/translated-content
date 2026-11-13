---
title: Champs de classe publics
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Les **champs publics** sont des propriétés qui peuvent être écrites, énumérées et configurées, définies sur chaque instance de classe ou constructeur de classe.

## Syntaxe

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

Il existe quelques restrictions supplémentaires de syntaxe&nbsp;:

- Le nom d'une propriété statique (champ ou méthode) ne peut pas être `prototype`.
- Le nom d'un champ de classe (statique ou d'instance) ne peut pas être `constructor`.

## Description

Cette page présente en détail les champs d'instance publics.

- Pour les champs statiques publics, voir [`static`](/fr/docs/Web/JavaScript/Reference/Classes/static).
- Pour les champs privés, voir [éléments privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements).
- Pour les méthodes publiques, voir [définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Pour les accesseurs publics, voir les [accesseurs](/fr/docs/Web/JavaScript/Reference/Functions/get) et [mutateurs](/fr/docs/Web/JavaScript/Reference/Functions/set).

Les champs d'instance publics existent sur chaque instance créée d'une classe. En déclarant un champ public, vous pouvez vous assurer que le champ est toujours présent, et la définition de la classe est plus auto-documentée.

Les champs d'instance publics sont ajoutés à l'instance soit au moment de la construction dans la classe de base (avant l'exécution du corps du constructeur), soit juste après le retour de `super()` dans une sous-classe. Les champs sans initialisation sont initialisés à `undefined`. Comme les propriétés, les noms de champs peuvent être calculés.

```js
const PREFIX = "prefixe";

class ClasseAvecChamps {
  champ;
  champInitialise = "champ d'instance";
  [`${PREFIX}DuChamp`] = "champ préfixé";
}

const instance = new ClasseAvecChamps();
console.log(Object.hasOwn(instance, "champ")); // true
console.log(instance.champ); // undefined
console.log(instance.champInitialise); // "champ d'instance"
console.log(instance.prefixeDuChamp); // "champ préfixé"
```

Les noms de champs calculés ne sont évalués qu'une seule fois, au [moment de la définition de la classe](/fr/docs/Web/JavaScript/Reference/Classes#ordre_dévaluation). Cela signifie que chaque classe a toujours un ensemble fixe de noms de champs, et que deux instances ne peuvent pas avoir des noms de champs différents avec des noms calculés. La valeur de `this` dans l'expression calculée est le `this` entourant la définition de la classe, et se référer au nom de la classe est une {{JSxRef("ReferenceError")}}, car la classe n'est pas encore initialisée. {{JSxRef("Operators/await", "await")}} et {{JSxRef("Operators/yield", "yield")}} fonctionnent comme prévu dans cette expression.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Les deux instances ont le même nom de champ
```

Dans l'initialisation du champ, [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) fait référence à l'instance de la classe en cours de construction, et [`super`](/fr/docs/Web/JavaScript/Reference/Operators/super) fait référence à la propriété `prototype` de la classe de base, qui contient les méthodes d'instance de la classe de base, mais pas ses champs d'instance.

```js
class Base {
  champBase = "champ de base";
  autreChampDeBase = this.champBase;
  methodeBase() {
    return "retour de la méthode de base";
  }
}

class Derivee extends Base {
  sousChamp = super.methodeBase();
}

const base = new Base();
const sous = new Derivee();

console.log(base.autreChampDeBase); // "champ de base"

console.log(sous.sousChamp); // "retour de la méthode de base"
```

L'expression d'initialisation du champ est évaluée à chaque fois qu'une nouvelle instance est créée. (Comme la valeur de `this` est différente pour chaque instance, l'expression d'initialisation peut accéder aux propriétés spécifiques à l'instance.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

L'expression est évaluée de manière synchrone. Vous ne pouvez pas utiliser {{JSxRef("Operators/await", "await")}} ou {{JSxRef("Operators/yield", "yield")}} dans l'expression d'initialisation. (Pensez à l'expression d'initialisation comme étant implicitement enveloppée dans une fonction.)

Comme les champs d'instance d'une classe sont ajoutés avant l'exécution du constructeur respectif, vous pouvez accéder aux valeurs des champs dans le constructeur. Cependant, comme les champs d'instance d'une classe dérivée sont définis après le retour de `super()`, le constructeur de la classe de base n'a pas accès aux champs de la classe dérivée.

```js
class Base {
  constructor() {
    console.log("Constructeur de base :", this.champ);
  }
}

class Derivee extends Base {
  champ = 1;
  constructor() {
    super();
    console.log("Constructeur dérivé :", this.champ);
    this.champ = 2;
  }
}

const instance = new Derivee();
// Constructeur de base : undefined
// Constructeur dérivé : 1
console.log(instance.champ); // 2
```

Les champs sont ajoutés un par un. Les initialisations de champs peuvent faire référence aux valeurs des champs situés au-dessus, mais pas en dessous. Toutes les méthodes d'instance et statiques sont ajoutées au préalable et peuvent être accessibles, bien que les appeler puisse ne pas se comporter comme prévu si elles font référence à des champs situés en dessous.

```js
class C {
  a = 1;
  b = this.c;
  c = this.a + 1;
  d = this.c + 1;
}

const instance = new C();
console.log(instance.d); // 3
console.log(instance.b); // undefined
```

> [!NOTE]
> C'est encore plus important avec les [champs privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements), car accéder à un champ privé non initialisé déclenche une {{JSxRef("TypeError")}}, même si le champ privé est déclaré en dessous. (Si le champ privé n'est pas déclaré, cela provoque une {{JSxRef("SyntaxError")}} précoce.)

Comme les champs de classe sont ajoutés en utilisant la sémantique [`[[DefineOwnProperty]]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) (qui est essentiellement {{JSxRef("Object.defineProperty()")}}), les déclarations de champs dans les classes dérivées n'invoquent pas les accesseurs dans la classe de base. Ce comportement diffère de l'utilisation de `this.champ = …` dans le constructeur.

```js
class Base {
  set champ(val) {
    console.log(val);
  }
}

class DeriveeAvecChamp extends Base {
  champ = 1;
}

const instance = new DeriveeAvecChamp(); // Pas de journalisation

class DeriveeAvecConstructeur extends Base {
  constructor() {
    super();
    this.champ = 1;
  }
}

const instance2 = new DeriveeAvecConstructeur(); // Journalise 1
```

> [!NOTE]
> Avant que la spécification des champs de classe ne soit finalisée avec la sémantique `[[DefineOwnProperty]]`, la plupart des transpileurs, y compris [Babel <sup>(angl.)</sup>](https://babeljs.io/) et [tsc <sup>(angl.)</sup>](https://www.typescriptlang.org/), transformaient les champs de classe en la forme `DeriveeAvecConstructeur`, ce qui a causé des bogues subtils après la standardisation des champs de classe.

## Exemples

### Utiliser des champs de classe

Les champs de classe ne peuvent pas dépendre des arguments du constructeur, donc les initialisations de champs évaluent généralement la même valeur pour chaque instance (à moins que la même expression puisse évaluer à des valeurs différentes à chaque fois, comme {{JSxRef("Math.random()")}} ou les initialisations d'objets).

```js example-bad
class Personne {
  nom = argNom; // argNom est hors de la portée du constructeur
  constructor(argNom) {}
}
```

```js example-good
class Personne {
  // Toutes les instances de Personne ont le même nom
  nom = "Dragomir";
}
```

Cependant, même déclarer un champ de classe vide est bénéfique, car cela indique l'existence du champ, ce qui permet aux vérificateurs de type ainsi qu'aux lecteur·ice·s humain·e·s d'analyser statiquement la structure de la classe.

```js
class Personne {
  nom;
  age;
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
}
```

Le code ci-dessus semble répétitif, mais considérez le cas où `this` est muté dynamiquement&nbsp;: la déclaration explicite du champ permet de savoir quels champs sont définitivement présents sur l'instance.

```js
class Personne {
  nom;
  age;
  constructor(proprietes) {
    Object.assign(this, proprietes);
  }
}
```

Comme les initialisations sont évaluées après l'exécution de la classe de base, vous pouvez accéder aux propriétés créées par le constructeur de la classe de base.

```js
class Personne {
  nom;
  age;
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
}

class Professeur extends Personne {
  nom = `Professeur ${this.nom}`;
}

console.log(new Professeur("Radev", 54).nom); // "Professeur Radev"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide pour [Utiliser les classes](/fr/docs/Web/JavaScript/Guide/Using_classes)
- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
- [Les éléments privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements)
- L'instruction {{JSxRef("Statements/class", "class")}}
- [La sémantique de tous les éléments de classe JavaScript <sup>(angl.)</sup>](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) par Shu-yu Guo (2018)
- [Les champs publics et privés des classes <sup>(angl.)</sup>](https://v8.dev/features/class-fields) sur v8.dev (2018)
