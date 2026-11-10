---
title: RegExp[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

La propriété accesseur statique **`RegExp[Symbol.species]`** retourne le constructeur utilisé pour construire des expressions rationnelles copiées dans certaines méthodes de `RegExp`.

> [!WARNING]
> L'existence de `[Symbol.species]` permet l'exécution de code arbitraire et peut créer des vulnérabilités de sécurité. Elle rend également certaines optimisations beaucoup plus difficiles. Les concepteur·ice·s de moteurs étudient [la possibilité de supprimer cette fonctionnalité <sup>(angl.)</sup>](https://github.com/tc39/proposal-rm-builtin-subclassing). Évitez de vous y fier si possible.

## Syntaxe

```js-nolint
RegExp[Symbol.species]
```

### Valeur de retour

La valeur du constructeur (`this`) sur lequel `get [Symbol.species]` a été appelé. La valeur de retour est utilisée pour construire des instances copiées de `RegExp`.

## Description

L'accesseur **`[Symbol.species]`** retourne le constructeur par défaut pour les objets `RegExp`. Les constructeurs des sous-classes peuvent le surcharger pour modifier l'affectation du constructeur. L'implémentation par défaut est essentiellement la suivante&nbsp;:

```js
// Implémentation sous-jacente hypothétique à titre d'illustration
class RegExp {
  static get [Symbol.species]() {
    return this;
  }
}
```

En raison de cette implémentation polymorphe, `[Symbol.species]` des sous-classes dérivées retourne également le constructeur lui-même par défaut.

```js
class SubRegExp extends RegExp {}
SubRegExp[Symbol.species] === SubRegExp; // true
```

Certaines méthodes de `RegExp` créent une copie de l'instance `RegExp` actuelle avant d'exécuter {{JSxRef("RegExp/exec", "exec()")}}, afin que les effets secondaires tels que les modifications de {{JSxRef("RegExp/lastIndex", "lastIndex")}} ne soient pas conservés. La propriété `[Symbol.species]` est utilisée pour déterminer le constructeur de la nouvelle instance. Les méthodes qui copient l'instance `RegExp` actuelle sont&nbsp;:

- [`[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)

## Exemples

### Déterminer l'espèce des objets ordinaires

La propriété `[Symbol.species]` retourne la fonction constructeur par défaut, qui est le constructeur `RegExp` pour les objets `RegExp`&nbsp;:

```js
RegExp[Symbol.species]; // function RegExp()
```

### Déterminer l'espèce des objets dérivés

Dans une instance d'une sous-classe personnalisée de `RegExp`, comme `MaRegExp`, l'espèce `MaRegExp` est le constructeur `MaRegExp`. Cependant, vous pouvez vouloir remplacer cela afin de retourner des objets `RegExp` parents dans les méthodes de votre classe dérivée&nbsp;:

```js
class MaRegExp extends RegExp {
  // Remplacez l'espèce MaRegExp par le constructeur RegExp de la classe parente
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

Ou vous pouvez utiliser ceci pour observer le processus de copie&nbsp;:

```js
class MaRegExp extends RegExp {
  constructor(...args) {
    console.log(
      "Crée une nouvelle instance de MaRegExp avec les arguments :",
      args,
    );
    super(...args);
  }
  static get [Symbol.species]() {
    console.log("Copie de MaRegExp");
    return this;
  }
  exec(value) {
    console.log("Exécution avec lastIndex :", this.lastIndex);
    return super.exec(value);
  }
}

Array.from("aabbccdd".matchAll(new MaRegExp("[ac]", "g")));
// Crée une nouvelle instance de MaRegExp avec les arguments : [ '[ac]', 'g' ]
// Copie de MaRegExp
// Crée une nouvelle instance de MaRegExp avec les arguments : [ MaRegExp /[ac]/g, 'g' ]
// Exécution avec lastIndex : 0
// Exécution avec lastIndex : 1
// Exécution avec lastIndex : 2
// Exécution avec lastIndex : 5
// Exécution avec lastIndex : 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("RegExp")}}
- La propriété statique {{JSxRef("Symbol.species")}}
