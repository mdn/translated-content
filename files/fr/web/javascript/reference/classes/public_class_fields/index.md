---
title: Champs de classe publics
slug: Web/JavaScript/Reference/Classes/Public_class_fields
tags:
  - Classes
  - Fonctionnalité du langage
  - JavaScript
translation_of: Web/JavaScript/Reference/Classes/Public_class_fields
original_slug: Web/JavaScript/Reference/Classes/Class_fields
---
{{JsSidebar("Classes")}}{{SeeCompatTable}}

> **Note :** Cette page décrit des fonctionnalités expérimentales.
>
> Les déclarations de champs, tant publics que privés, sont [une fonctionnalité expérimentale (étape 3)](https://github.com/tc39/proposal-class-fields) proposée au [TC39](https://tc39.github.io/beta/), le comité des standards JavaScript.
>
> La prise en charge dans les navigateurs est limitée, mais cette fonctionnalité peut être utilisée à travers une étape de contruction avec des systèmes tels que [Babel](https://babeljs.io/). Voir [l'information de compatibilité](/fr/docs/Web/JavaScript/Reference/Classes/Class_fields$edit#Browser_compatibility) ci-dessous.

Les champs publics, tant statiques que d'instance, sont des propriétés qui peuvent être écrites, et qui sont énumérables et configurables. En tant que telles, à la différence de leurs contreparties privées, elles participent à l'héritage du prototype.

## Syntaxe

    class ClasseAvecChampDInstance {
      champDInstance = 'champ d\'instance'
    }

    class ClasseAvecChampStatique {
      static champStatique = 'champ statique'
    }

    class ClasseAvecMethodeDInstancePublique {
      methodePublique() {
        return 'hello world'
      }
    }

## Exemples

### Champs statiques publics

Les champs statiques publics sont utiles lorsque vous voulez qu'un champ n'existe qu'une seule fois par classe, pas dans chaque instance que vous créez. Cela est utile pour des caches, une configuration fixe, ou tout autres données dont vous n'avez pas besoin qu'elles soient répliquées à travers les instances.

Les champs statiques publics sont déclarés en utilisant le mot-clé `static`. Ils sont ajoutés au constructeur de la classe au moment de l'évaluation de la classe en utilisant {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. On y accède à nouveau à partir du constructeur de la classe.

```js
class ClasseAvecChampStatique {
  static champStatique = 'champ statique'
}

console.log(ClasseAvecChampStatique.champStatique)
// affichage attendu : "champ statique"​
```

Les champs sans initialiseur sont initialisés à `undefined`.

```js
class ClasseAvecChampStatique {
  static champStatique
}

console.assert(ClasseAvecChampStatique.hasOwnProperty('champStatique'))
console.log(ClasseAvecChampStatique.champStatique)
// affichage attendu : "undefined"
```

Les champs statiques publics ne sont pas réinitialisés dans les sous-classes, mais on peut y accéder via la chaîne de prototypes.

```js
class ClasseAvecChampStatique {
  static champStatiqueDeBase = 'champ de base'
}

class SousClasseAvecChampStatique extends ClasseAvecChampStatique {
  static sousChampStatique = 'champ de la sous-classe'
}

console.log(SousClasseAvecChampStatique.sousChampStatique)
// affichage attendu : "champ de la sous-classe"

console.log(SousClasseAvecChampStatique.champStatiqueDeBase)
// affichage attendu : "champ de base"
```

Lors de l'initialisation des champs, `this` fait référence au constructeur de la classe. Vous pouvez aussi le référencer par son nom, et utiliser `super` pour obtenir le constructeur de la superclasse (s'il en existe un) :

```js
class ClasseAvecChampStatique {
  static champStatiqueDeBase = 'champ statique de base'
  static autreChampStatiqueDeBase = this.champStatiqueDeBase

  static methodeStatiqueDeBase() { return 'affichage de la méthode statique de base' }
}

class SousClasseAvecChampStatique extends ClasseAvecChampStatique {
  static sousChampStatique = super.methodeStatiqueDeBase()
}

console.log(ClasseAvecChampStatique.autreChampStatiqueDeBase)
// affichage attendu : "champ statique de base"

console.log(SousClasseAvecChampStatique.sousChampStatique)
// affichage attendu : "affichage de la méthode statique de base"
```

### Champs d'instance publics

Les champs d'instance publics existent dans chaque instance créée d'une classe. En déclarant un champ public, vous pouvez vous assurer que le champ est toujours présent, et que la définition de la classe est davantage auto-documentée.

Les champs d'instance publics sont ajoutés grâce à {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}, soit au moment de la construction dans la classe de base (avant que le corps du constructeur ne soit exécuté), soit juste après le retour de `super()` dans une sous-classe.

```js
class ClasseAvecChampDInstance {
  champDInstance = 'champ d\'instance'
}

const instance = new ClasseAvecChampDInstance()
console.log(instance.champDInstance)
// affichage attendu : "champ d'instance"
```

Les champs sans initialiseur sont initialisés à `undefined`.

```js
class ClasseAvecChampDInstance {
  champdDInstance
}

const instance = new ClasseAvecChampDInstance()
console.assert(instance.hasOwnProperty('champDInstance'))
console.log(instance.champDInstance);
// affichage attendu : "undefined"
```

À l'instar des propriétés, les noms de champ peuvent être calculés :

```js
const PREFIXE = 'prefixe';

class ClasseAvecNomDeChampCalcule {
    [`${PREFIXE}Champ`] = 'champ préfixé'
}

const instance = new ClasseAvecNomDeChampCalcule()
console.log(instance.prefixeChamp)
// affichage attendu : "champ préfixé"
```

Lors de l'initialisation des champs, `this` fait référence à l'instance en cours de construction. Tout comme dans les méthodes d'instance publiques, si vous êtes dans une sous-classe, vous pouvez accéder au prototype de la superclasse en utilisant `super`.

```js
class ClasseAvecChampDInstance {
  champDInstanceDeBase = 'champ de base'
  autreChampDInstanceDeBase = this.champDInstanceDeBase
  methodeDInstanceDeBase() { return 'affichage de la méthode de base' }
}

class SousClasseAvecChampDInstance extends ClasseAvecChampDInstance {
  sousChampDInstance = super.methodeDInstanceDeBase()
}

const base = new ClasseAvecChampDInstance()
const sous = new SousClasseAvecChampDInstance()

console.log(base.autreChampDInstanceDeBase)
// affichage attendu : "champ de base"

console.log(sous.sousChampDInstance)
// affichage attendu : "affichage de la méthode de base"
```

### Méthodes publiques

#### Méthodes statiques publiques

Le mot-clé **`static`** définit une méthode statique pour une classe. Les méthodes statiques ne sont pas appelées dans les instances de la classe. A la place, elles le sont dans la classe elle-même. Ce sont souvent des méthodes utilitaires, comme des fonctions pour créer ou cloner des objets.

```js
class ClasseAvecMethodeStatique {
  static methodeStatique() {
    return 'la méthode statique a été appelée.';
  }
}

console.log(ClasseAvecMethodeStatique.methodeStatique());
// affichage attendu : "la méthode statique a été appelée."
```

Les méthodes statiques sont ajoutées au constructeur de la classe grâce à {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} au moment de l'évaluation de la classe. Ces méthodes peuvent être écrites, ne sont pas énumérables et sont configurables.

#### Méthodes d'instance publiques

Comme leur nom l'implique, les méthodes d'instance publiques sont des fonctions disponibles dans les instances de la classe.

```js
class ClasseAvecMethodeDInstancePublique {
  methodePublique() {
    return 'hello world'
  }
}

const instance = new ClasseAvecMethodeDInstancePublique()
console.log(instance.methodePublique())
// affichage attendu : "hello worl​d"
```

Les méthodes d'instance publiques sont ajoutées au prototype au moment de l'évaluation de la classe en utilisant {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. Elles peuvent être écrites, ne sont pas énumérables et sont configurables.

Vous pouvez utiliser des fonctions génératrices, asynchrones et génératrices asynchrones.

```js
class ClasseAvecMethodesFantaisie {
  *methodeGeneratrice() { }
  async methodeAsynchrone() { }
  async *methodeGeneratriceAsynchrone() { }
}
```

A l'intérieur des méthodes d'instance, `this` fait référence à l'instance elle-même. Dans les sous-classes, `super` vous donne accès au prototype de la superclasse, ce qui vous permet d'appeler les méthodes de la superclasse.

```js
class ClasseDeBase {
  msg = 'hello world'
  methodePubliqueDeBase() {
    return this.msg
  }
}

class SousClasse extends ClasseDeBase {
  sousMethodePublique() {
    return super.methodePubliqueDeBase()
  }
}

const instance = new SousClasse()
console.log(instance.sousMethodePublique())
// affichage attendu : "hello worl​d"
```

Les accesseurs et les mutateurs sont des méthodes spéciales qui sont liées à une propriété de classe, et sont appelées lorsqu'on accède à cette propriété ou qu'on la définit. Utilisez la syntaxe [get](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Functions/get) et [set](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Functions/set) pour déclarer un accesseur ou un mutateur publique d'une instance.

```js
class ClasseAvecGetSet {
  #msg = 'hello world'
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
  }
}

const instance = new ClasseAvecGetSet();
console.log(instance.msg);
// affichage attendu : "hello worl​d"

instance.msg = 'gâteau';
console.log(instance.msg);
// affichage attendu : "hello gâteau"
```

## Spécifications

| Spécification                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Public and private instance fields', '#prod-FieldDefinition', 'FieldDefinition')}} |

## Compatibilité des navigateurs

{{Compat("javascript.classes.public_class_fields")}}

## Voir aussi

- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
