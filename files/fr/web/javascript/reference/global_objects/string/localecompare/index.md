---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
tags:
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/localeCompare
original_slug: Web/JavaScript/Reference/Objets_globaux/String/localeCompare
---
{{JSRef}}

La méthode **`localeCompare()`** renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne passée en paramètre, selon l'ordre lexicographique.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

Les arguments `locales` et `options` permettent de définir la locale et des options pour adapter le comportement de la fonction. Les anciennes implémentations ignoreront les arguments `locales` et `options`. L'ordre de tri utilisé sera entièrement dépendant de l'implémentation.

## Syntaxe

    str.localeCompare(chaineÀComparer [, locales [, options]])

### Paramètres

Voir le [tableau de compatibilité des navigateurs](#compat "#Browser_compatibility") pour savoir quels navigateurs prennent en charge les arguments `locales` et `options`. L'[exemple pour vérifier le support des arguments `locales` et `options`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare#Vérifier_le_support_des_arguments_locales_et_options) fournit un fragment de code pour détecter la prise en charge de ces fonctionnalités.

- `chaineÀComparer`
  - : La chaîne avec laquelle on souhaite comparer la chaîne de caractères courante.

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Collator','Param.C3.A8tres')}}

### Valeur de retour

Un nombre négatif si la chaîne de appelante est ordonnée avant la chaîne passée en argument, un nombre positif si elle se situe après, 0 si les deux chaînes sont équivalentes.

## Description

Cette méthode renvoie un nombre entier qui indique si la chaîne de caractères courante se situe avant ou après la chaîne passée en argument selon l'ordre lexicographique tenant compte de la locale. Cette méthode renvoie

- un nombre négatif si la chaîne de caractères courant se situe avant la chaîne `chaineÀComparer`
- un nombre positif si elle se situe après
- 0 si les deux chaînes se situent au même niveau

Attention à ne pas tester que les valeurs -1 et 1. Les valeurs entières utilisées peuvent varier en fonction des navigateurs et de leurs versions. En effet, la spécification indique uniquement le signe de la valeur à fournir. Par exemple, certains navigateurs pourront renvoyer -2 ou 2 (voire d'autres valeurs).

## Exemples

### Utiliser la méthode `localeCompare()`

L'exemple qui suit illustre les différents cas de figures lors de la comparaison des chaînes de caractères :

```js
console.log('a'.localeCompare('c')); // -2, ou -1, ou toute autre valeur négative
console.log('c'.localeCompare('a')); // 2, ou 1, ou toute autre valeur positive
console.log('a'.localeCompare('a')); // 0
```

Les résultats illustrés ici peuvent varier entre les différents navigateurs et selon les versions des navigateurs. En effet, les valeurs renvoyées sont spécifiques selon les implémentations. La spécification définit uniquement le signe de la valeur à renvoyer.

### Trier un tableau

`localeCompare()` permet de trier un tableau sans tenir compte de la casse :

```js
var items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Vérifier le support des arguments `locales` et `options`

Les argument `locales` et `options` ne sont pas supportés par tous les navigateurs. Pour vérifier qu'une implémentation supporte ces paramètres, il est possible d'utiliser un cas d'erreur quand on utilise une balise de langue incorrecte (ce qui provoque une exception {{jsxref("RangeError")}}) :

```js
function localeCompareSupportsLocales() {
    try {
        "a".localeCompare​("b", "i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
```

### Utiliser le paramètre `locales`

Les résultats fournis par la méthode `localeCompare()` peuvent varier selon les langues utilisées. Pour spécifier la langue à utiliser pour votre application, utiliser l'argument `locales` pour définir la locale à utiliser (et éventuellement des langues de recours) :

```js
console.log('ä'.localeCompare('z', 'de')); // une valeur négative : en allemand ä est avant z
console.log('ä'.localeCompare('z', 'sv')); // une valeur positive : en suédois, ä arrive après z
```

### Utiliser le paramètre `options`

Les résultats construits par la méthode `localeCompare()` peuvent être adaptés grâce au paramètre `options` :

```js
// en allemand, ä et a ont la même lettre de base
console.log('ä'.localeCompare('a', 'de', {sensitivity: "base"})); // 0

// en suédois, ä et a n'ont pas la même lettre de base
console.log('ä'.localeCompare('a', 'sv', {sensitivity: "base"})); // une valeur positive
```

### Tri numérique

```js
// Par défaut, selon l'ordre lexicographique, "2" est supérieur à "10"
console.log("2".localeCompare("10")); // 1

// En utilisant un ordre numérique :
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

// En utilisant une balise de locale:
console.log("2".localeCompare("10","en-u-kn-true")); // -1
```

## Performances

Pour comparer un grand nombre de chaînes de caractères, par exemple pour trier de grands tableaux, il est préférable de créer un objet {{jsxref("Objets_globaux/Collator", "Intl.Collator")}} et utiliser la fonction fournie par la propriété {{jsxref("Collator.prototype.compare", "compare")}}.

## Spécifications

| Spécification                                                                                                                            | État                             | Commentaires                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                 | {{Spec2('ES3')}}             | Définition initiale. Implémentée avec JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.5.4.9', 'String.prototype.localeCompare')}}                                         | {{Spec2('ES5.1')}}         |                                                      |
| {{SpecName('ES6', '#sec-string.prototype.localecompare', 'String.prototype.localeCompare')}}             | {{Spec2('ES6')}}             |                                                      |
| {{SpecName('ESDraft', '#sec-string.prototype.localecompare', 'String.prototype.localeCompare')}}         | {{Spec2('ESDraft')}}     |                                                      |
| {{SpecName('ES Int 1.0', '#sec-13.1.1', 'String.prototype.localeCompare')}}                                     | {{Spec2('ES Int 1.0')}} | Définition des paramètres `locale` et `option`       |
| {{SpecName('ES Int 2.0', '#sec-13.1.1', 'String.prototype.localeCompare')}}                                     | {{Spec2('ES Int 2.0')}} |                                                      |
| {{SpecName('ES Int Draft', '#sec-String.prototype.localeCompare', 'String.prototype.localeCompare')}} | {{Spec2('ES Int Draft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.localeCompare")}}

## Voir aussi

- {{jsxref("Objets_globaux/Collator", "Intl.Collator")}}
