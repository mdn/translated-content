---
title: Propriétés privées
slug: Web/JavaScript/Reference/Classes/Private_elements
original_slug: Web/JavaScript/Reference/Classes/Private_properties
l10n:
  sourceCommit: 2024a508694208f0316c484fb41e2c5823deae88
---

{{jsSidebar("Classes")}}

Les **propriétés privées** sont les équivalents des propriétés de classe normales, qui sont publiques, comme [les champs de classe](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields), les méthodes de classe, etc. Les propriétés privées sont créées en utilisant un croisillon `#` comme préfixe et ne peuvent pas être référencée légalement en dehors de la classe. L'encapsulation de cette isolation dans la classe est gérée par le moteur JavaScript.

Les propriétés privées n'étaient pas disponibles de façon native en JavaScript avant l'apparition de cette syntaxe. En utilisant l'héritage prototypal, ce comportement pouvait être émulé avec des objets [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members), ou [des fermetures (<i lang="en">closures</i>)](/fr/docs/Web/JavaScript/Guide/Closures#émuler_des_méthodes_privées_avec_des_fermetures), mais cela n'était pas aussi pratique que la syntaxe avec `#`.

## Syntaxe

```js-nolint
class ClasseAvecProprietesPrivees {
  #champPrive;
  #champPriveAvecInitialisateur = 42;

  #methodePrivee() {
    // …
  }

  static #champPriveStatique;
  static #champPriveStatiqueAvecInitialisateur = 42;

  static #methodePriveeStatique() {
    // …
  }
}
```

Des restrictions complémentaires s'appliquent&nbsp;:

- Tous les identifiants privés déclarés au sein d'une classe doivent être uniques. L'espace de noms est partagé entre les propriétés statiques et celles des instances. La seule exception à cette règle est la définition d'une paire d'accesseur/mutateur (<i lang="en">getter/setter</i>).
- Un identifiant privé ne peut pas être `#constructor`.

## Description

Pour chaque type de propriété d'une classe, on a des équivalents privés&nbsp;:

- Champs privés
- Méthodes privées
- Champs statiques privés
- Méthodes statiques privées
- Accesseurs privés
- Mutateurs privés
- Accesseurs privés statiques
- Mutateurs privés statiques

Toutes ces fonctionnalités représentent des _propriétés privées_. Toutefois, [les constructeurs](/fr/docs/Web/JavaScript/Reference/Classes/constructor) ne peuvent pas être privés en JavaScript. Pour empêcher une classe d'être construite en dehors d'elle-même, il faudra [utiliser un marqueur privé](#simuler_des_constructeurs_privés).

Les propriétés privées sont déclarées avec des identifiants préfixés par `#` (en anglais, on parle de <i lang="en">hash names</i>). Le préfixe avec le croisillon fait partie inhérente du nom de la propriété (on peut y voir une analogie avec l'ancienne convention utilisant un tiret bas comme préfixe `_champPrive`, mais il ne s'agit pas d'une propriété dont le nom est une chaîne de caractère classique et on ne peut donc pas y accéder dynamiquement en utilisant [la notation avec les crochets](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors#notation_avec_crochets)).

Les cas suivants sont des erreurs de syntaxe&nbsp;:

- Faire référence aux noms privés en dehors de la classe.
- Faire référence à des propriétés privées qui n'ont pas été déclarées dans le corps de la classe
- Tenter de supprimer une propriété privée avec [`delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete).

```js-nolint example-bad
class ClasseAvecChampPrive {
  #champPrive;

  constructor() {;
    delete this.#champPrive; // Erreur de syntaxe
    this.#champNonDeclare = 42; // Erreur de syntaxe
  }
}

const instance = new ClasseAvecChampPrive();
instance.#champPrive; // Erreur de syntaxe
```

JavaScript est un langage dynamique et peut faire cette vérification à la compilation grâce à la syntaxe particulière des propriétés privées.

> [!NOTE]
> Le code exécuté dans la console Google Chrome permet d'accéder aux propriétés privées en dehors de la classe. Il s'agit d'une dérogation propre aux outils de développement.

Si vous tentez d'accéder à une propriété privée sur un objet qui ne dispose pas de la propriété, vous obtiendrez une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) et non `undefined`, comme c'est le cas pour les propriétés normales (publiques).

```js example-bad
class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Cannot read private member #x from an object whose class did not declare it
```

Cet exemple illustre également l'accès aux propriétés privées depuis les fonctions statiques et pour les instances de la classe définies par ailleurs.

L'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in) peut être utilisé pour vérifier si un objet tiers possède une propriété privée. L'opérateur renverra `true` si le champ privé existe, `false` sinon.

```js example-good
class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return "obj doit être une instance de C";
  }
}
console.log(C.getX(new C("toto"))); // "toto"
console.log(C.getX(new C(0.196))); // 0.196
console.log(C.getX(new C(new Date()))); // la date/heure courante
console.log(C.getX({})); // "obj doit être une instance de C"
```

Un corollaire à cette déclaration préalable et à cette absence de suppression est que si on trouve un objet possédant au moins une propriété privée de la classe courante (via un `try...catch` ou une vérification `in`), cet objet en possèdera toutes les autres propriétés privées. Un objet possédant une propriété privée d'une classe signifie généralement qu'il a été construit par cette classe (ça [n'est pas forcément le cas](#renvoyer_un_objet_différent)).

Les propriétés privées ne font par partie du modèle [d'héritage prototypal](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), car elles ne sont accessibles qu'au sein du corps de la classe courante et ne sont pas héritées par les sous-classes. Les propriétés privées qui ont le même nom, mais des classes différentes sont totalement différentes et n'ont aucune relation entre elles. Il faut voir les propriétés privées comme des métadonnées externes rattachées à chaque instance, gérées par la classe. Pour cette raison, [`Object.freeze()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) et [`Object.seal()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) n'ont pas d'effet sur les propriétés privées.

Pour plus d'informations sur la façon dont les champs privés sont initialisés, voir [la page sur les champs publics des classes](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Exemples

### Champs privés

Les champs privés regroupent les champs privés des instances et les champs privés statiques. Ils ne sont accessibles qu'au sein de la déclaration de la classe.

#### Champs privés des instances

À l'instar de leurs homologues publics, les champs privés des instances&nbsp;:

- Sont ajoutés avant que le constructeur s'exécute pour une classe de base, ou immédiatement après l'appel à [`super()`](/fr/docs/Web/JavaScript/Reference/Operators/super) pour une sous-classe
- Uniquement disponible pour les instances de la classe.

```js
class ClasseAvecChampPrive {
  #champPrive;

  constructor() {
    this.#champPrive = 42;
  }
}

class SousClasse extends ClasseAvecChampPrive {
  #champPriveSousClasse;

  constructor() {
    super();
    this.#champPriveSousClasse = 23;
  }
}

new SousClasse(); // Dans certains outils de développement, cela affichera SousClasse {#champPrive: 42, #champPriveSousClasse: 23}
```

> [!NOTE]
> La propriété `#champPrive`, provenant de la classe de base `ClasseAvecChampPrive` est privée et est donc uniquement accessible à l'intérieur de `ClasseAvecChampPrive` et est inaccessible depuis `SousClasse`.

#### Renvoyer un objet différent

Le constructeur d'une classe peut renvoyer un objet différent, qui sera alors utilisé comme nouveau `this` pour le constructeur de la classe dérivée. La classe dérivée pourra alors définir des champs privés sur l'objet qui a été renvoyé, permettant ainsi indirectement d'adjoindre des champs privés pour des objets qui ne sont pas des instances.

```js
class Stamper extends class {
  // Une classe de base dont le constructeur renvoie
  // l'objet qui lui est fourni.
  constructor(obj) {
    return obj;
  }
} {
  // Cette déclaration rajoutera le champ privé
  // sur l'objet renvoyé par le constructeur
  // de la classe de base
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` appelle `Base`, qui renvoie `obj`, et `obj` est
// désormais la valeur `this`. `Stamper` définit alors
// `#stamp` sur `obj`

console.log(obj); // Dans certains outils de développement, on verra {#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false

// On ne peut pas ajouter ainsi deux fois des propriétés privées
new Stamper(obj); // Error: Initializing an object twice is an error with private fields
```

> [!WARNING]
> Implémenter un tel fonctionnement sera source de confusion. Il est généralement recommandé de ne rien renvoyer à partir du constructeur, a fortiori, quelque chose qui n'a pas de lien avec `this`.

#### Champs statiques privés

À l'instar de leurs homologues publics, les champs statiques privés&nbsp;:

- Sont ajoutés au constructeur de la classe au moment de l'évaluation de la classe
- Uniquement disponibles sur la classe elle-même (et non sur les instances)

```js
class ClasseAvecChampStatiquePrive {
  static #champStatiquePrive = 42;

  static methodeStatiquePublique() {
    return ClasseAvecChampStatiquePrive.#champStatiquePrive;
  }
}

console.log(ClasseAvecChampStatiquePrive.methodeStatiquePublique()); // 42
```

Pour les champs statiques privés, seule la classe qui définit le champ statique privé peut accéder au champ. Cela peut donner des comportements inattendus lorsque [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) est utilisé. Dans l'exemple suivant, `this` fait référence à la classe `SousClasse` (et non à la classe `ClasseAvecChampStatiquePrive`), et quand on essaie d'appeler `SousClasse.methodeStatiquePublique()`, cela déclenche une erreur `TypeError`.

```js
class ClasseAvecChampStatiquePrive {
  static #champStatiquePrive = 42;

  static methodeStatiquePublique() {
    return this.#champStatiquePrive;
  }
}

class SousClasse extends ClasseAvecChampStatiquePrive {}

SousClasse.methodeStatiquePublique(); // TypeError: Cannot read private member #champStatiquePrive from an object whose class did not declare it
```

Le même comportement se produira si la méthode est appelée avec `super`, car [les méthodes appelées avec `super` ne reçoivent pas la classe parente comme valeur pour `this`](/fr/docs/Web/JavaScript/Reference/Operators/super#appeler_des_méthodes_avec_super).

```js
class ClasseAvecChampStatiquePrive {
  static #champStatiquePrive = 42;

  static methodeStatiquePublique() {
    // Même appelée avec super, `this` fera référence
    // à SousClasse
    return this.#champStatiquePrive;
  }
}

class SousClasse extends ClasseAvecChampStatiquePrive {
  static appelleSuperMethode() {
    return super.methodeStatiquePublique();
  }
}

SousClasse.appelleSuperMethode(); // TypeError: Cannot read private member #champStatiquePrive from an object whose class did not declare it
```

Une bonne pratique consiste à toujours accéder aux champs privés statiques avec le nom de la classe plutôt qu'avec `this`, afin que l'héritage ne casse pas la méthode.

### Méthodes privées

Les méthodes privées incluent les méthodes privées des instances et les méthodes statiques privées. Les méthodes privées sont uniquement accessibles à l'intérieur de la déclaration de la classe.

#### Méthodes privées des instances

À la différence de leurs homologues publiques, les méthodes privées des instances&nbsp;:

- Sont installées immédiatement avant que les champs des instances soient installés
- Sont uniquement disponibles pour les instances de la classe, et pas sur sa propriété `.prototype`

```js
class ClasseAvecMethodePrivee {
  #methodePrivee() {
    return 42;
  }

  methodePublique() {
    return this.#methodePrivee();
  }
}

const instance = new ClasseAvecMethodePrivee();
console.log(instance.methodePublique()); // 42
```

Les méthodes privées des instances peuvent être des générateurs, des méthodes asynchrones, des fonctions de génération asynchrone. Il est aussi possible de créer des accesseurs et mutateurs privés en suivant les mêmes règles de syntaxe que leurs homologues publiques ([accesseur](/fr/docs/Web/JavaScript/Reference/Functions/get) et [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/set)).

```js
class ClasseAvecAccesseurPrive {
  #message;

  get #messageDecore() {
    return `🎬${this.#message}🛑`;
  }
  set #messageDecore(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#messageDecore = "Coucou le monde";
    console.log(this.#messageDecore);
  }
}

new ClasseAvecAccesseurPrive(); // 🎬Coucou le monde🛑
```

À la différence des méthodes publiques, les méthodes privées ne sont pas accessibles sur la propriété `.prototype` de leur classe.

```js
class C {
  #methode() {}

  static getMethode(x) {
    return x.#methode;
  }
}

console.log(C.getMethode(new C())); // [Function: #methode]
console.log(C.getMethode(C.prototype)); // TypeError: Receiver must be an instance of class C
```

#### Méthodes privées statiques

Comme leurs homologues publiques, les méthodes privées statiques&nbsp;:

- Sont ajoutées au constructeur de la classe au moment de l'évaluation de la classe
- Sont uniquement disponibles sur la classe elle-même (et non sur les instances).

```js
class ClasseAvecMethodePriveeStatique {
  static #methodePriveeStatique() {
    return 42;
  }

  static methodeStatiquePublique() {
    return ClasseAvecMethodePriveeStatique.#methodePriveeStatique();
  }
}

console.log(ClasseAvecMethodePriveeStatique.methodeStatiquePublique()); // 42
```

Les méthodes privées statiques peuvent être des générateurs, des fonctions asynchrones, ou des générateurs asynchrones.

La même restriction évoquée pour les champs statiques privés s'applique et peut mener à des comportements inattendus lorsqu'on utilise `this`. Dans l'exemple suivant, quand on essaie d'appeler `SousClasse.methodeStatiquePublique()`, `this` fait référence à la classe `SousClasse` (et non à la classe `ClasseAvecMethodePriveeStatique`), ce qui entraîne une exception `TypeError`.

```js
class ClasseAvecMethodePriveeStatique {
  static #methodePriveeStatique() {
    return 42;
  }

  static methodeStatiquePublique() {
    return this.#methodePriveeStatique();
  }
}

class SousClasse extends ClasseAvecMethodePriveeStatique {}

console.log(SousClasse.methodeStatiquePublique()); // TypeError: Cannot read private member #methodePriveeStatique from an object whose class did not declare it
```

### Simuler des constructeurs privés

Dans d'autres langages, il est possible d'indiquer un constructeur comme privé, ce qui empêche d'instancier la classe en dehors d'elle-même. Seules des méthodes statiques de construction peuvent être utilisées pour créer des instances, voire il n'est pas possible de créer des instances. JavaScript ne dispose pas d'une syntaxe native pour ce faire, mais on peut y parvenir en utilisant un marqueur statique privé.

```js
class ConstructeurPrive {
  static #estUneConstructionInterne = false;

  constructor() {
    if (!ConstructeurPrive.#estUneConstructionInterne) {
      throw new TypeError("ConstructeurPrive n'est pas constructible");
    }
    ConstructeurPrive.#estUneConstructionInterne = false;
    // La suite de la logique d'initialisation…
  }

  static create() {
    ConstructeurPrive.#estUneConstructionInterne = true;
    const instance = new ConstructeurPrive();
    return instance;
  }
}

new ConstructeurPrive(); // TypeError: ConstructeurPrive n'est pas constructible
ConstructeurPrive.create(); // ConstructeurPrive {}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide Utiliser les classes](/fr/docs/Web/JavaScript/Guide/Using_classes)
- [Classes](/fr/docs/Web/JavaScript/Reference/Classes)
- [Les champs de classe publics](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [`class`](/fr/docs/Web/JavaScript/Reference/Statements/class)
- [La FAQ sur la syntaxe des champs privés (en anglais)](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) dans la proposition TC39 relative aux champs de classe
- [La sémantique des différents éléments de classe JavaScript (en anglais)](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html), par Shu-yu Guo (2018)
- [Champs de classe publics et privés (en anglais)](https://v8.dev/features/class-fields) sur v8.dev (2018)
