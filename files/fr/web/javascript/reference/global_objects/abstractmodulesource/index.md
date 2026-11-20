---
title: AbstractModuleSource
slug: Web/JavaScript/Reference/Global_Objects/AbstractModuleSource
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Un objet **`AbstractModuleSource`** représente le code source compilé d'un module obtenu avec [`import source`](/fr/docs/Web/JavaScript/Reference/Statements/import/source) ou [`import.source()`](/fr/docs/Web/JavaScript/Reference/Operators/import/source). Il n'existe pas de constructeur `AbstractModuleSource` directement visible.

## Description

Le constructeur `AbstractModuleSource` (souvent appelé `%AbstractModuleSource%` pour indiquer son caractère «&nbsp;intrinsèque&nbsp;», puisqu'il ne correspond à aucun global exposé à un programme JavaScript) sert de superclasse à toutes les sous-classes de sources de modules, fournissant une interface commune de méthodes utilitaires. Ce constructeur n'est pas directement exposé&nbsp;: il n'existe pas de propriété globale `AbstractModuleSource`. Il n'est accessible qu'avec `Object.getPrototypeOf(moduleSourceObject.constructor)` et des mécanismes similaires.

### Les objets AbstractModuleSource

- [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module)

Les objets source de module JavaScript sont ajoutés par la proposition [de phase d'importation de module ECMAScript <sup>(angl.)</sup>](https://github.com/tc39/proposal-esm-phase-imports).

## Constructeur

Cet object ne peut pas être instancié directement — tenter de le construire avec `new` déclenche une {{JSxRef("TypeError")}}.

```js
import source modSource from "./module.wasm";

new (Object.getPrototypeOf(modSource.constructor))();
// TypeError: Abstract class AbstractModuleSource not directly constructable
```

À la place, obtenez un objet source de module en utilisant `import source`, `import.source()`, ou l'API d'un type de module concret, tel que `WebAssembly.Module()`. Ces mécanismes n'appellent pas le constructeur abstrait.

## Propriétés d'instance

Ces propriétés sont définies sur `AbstractModuleSource.prototype` et partagées par toutes les instances des sous-classes de `AbstractModuleSource`.

- {{JSxRef("Object/constructor", "AbstractModuleSource.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. `AbstractModuleSource.prototype.constructor` est la fonction constructeur cachée `AbstractModuleSource`, mais chaque sous-classe de source de module définit également sa propre propriété `constructor`.
- `AbstractModuleSource.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`AbstractModuleSource.prototype[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est un accesseur qui retourne une chaîne de caractères basée sur l'identité du constructeur, telle que `"WebAssembly.Module"` ou `"ModuleSource"`. Elle retourne `undefined` si la valeur de `this` n'est pas une instance de l'une des sous-classes de source de module. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module)
- L'opérateur {{JSxRef("Operators/import/source", "import.source()")}}
- L'instruction {{JSxRef("Statements/import/source", "import source")}}
