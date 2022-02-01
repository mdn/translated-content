---
title: RegExp.prototype[@@matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@matchAll
---
{{JSRef}}

La méthode **`[@@matchAll]`** renvoie l'ensemble des correspondances d'une expression rationnelle sur une chaîne de caractères.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html")}}

## Syntaxe

    regexp[Symbol.matchAll](str)

### Paramètres

- `str`
  - : Une chaîne de caractères ({{jsxref("String")}}) dont on souhaite trouver les correspondances.

### Valeur de retour

Un [itérateur](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs).

## Description

Cette méthode est appelée, en interne, par le moteur JavaScript, pendant l'exécution {{jsxref("String.prototype.matchAll()")}}. Les deux lignes qui suivent renverront donc le même résultat.

```js
'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
```

Cette méthode existe afin de personnaliser le comportement des correspondances pour les sous-classes de `RegExp`.

## Exemples

### Appel direct

Cette méthode peut être utilisée de façon semblable à {{jsxref("String.prototype.matchAll()")}} mais l'objet `this` et l'ordre des arguments seront différents.

```js
var re = /[0-9]+/g;
var str = '2016-01-02';
var resultat = re[Symbol.matchAll](str);

console.log(Array.from(resultat, x => x[0]));
// ["2016", "01", "02"]
```

### Utiliser `@@matchAll` dans une sous-classe

Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger la méthode `[@@matchAll]()` afin de modifier le comportement par défaut (par exemple pour renvoyer un tableau ({{jsxref("Array")}}) plutôt qu'un [itérateur](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)).

```js
class MaRegExp extends RegExp {
  [Symbol.matchAll](str) {
    var resultat = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!resultat) {
      return null;
    } else {
      return Array.from(resultat);
    }
  }
}

var re = new MaRegExp('([0-9]+)-([0-9]+)-([0-9]+)', 'g');
var str = '2016-01-02|2019-03-07';
var resultat = str.matchAll(re);
console.log(resultat[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(resultat[1]); // [ "2019-03-07", "2019", "03", "07" ]
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('ESDraft', '#sec-regexp-prototype-matchall', 'RegExp.prototype[@@matchAll]')}} | {{Spec2('ESDraft')}} |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.@@matchAll")}}

## Voir aussi

- {{JSxRef("String.prototype.matchAll()")}}
- {{JSxRef("Symbol.matchAll")}}
