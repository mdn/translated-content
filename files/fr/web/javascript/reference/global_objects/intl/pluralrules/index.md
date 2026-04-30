---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.PluralRules`** permet de mettre en forme des chaînes de caractères en fonction des règles de nombre (pluriel) d'une locale donnée.

## Description

Les langues utilisent différents schémas pour exprimer à la fois les nombres pluriels d'éléments (nombres cardinaux) et pour exprimer l'ordre des éléments (nombres ordinaux).
L'anglais a deux formes pour exprimer les nombres cardinaux&nbsp;: une pour le «&nbsp;singulier&nbsp;» (1 heure, 1 chien, 1 poisson) et l'autre pour zéro ou tout autre nombre «&nbsp;d'éléments&nbsp;» (0 heures, 2 lemmings, 100000,5 poissons), tandis que le chinois n'a qu'une seule forme, et l'arabe en a six&nbsp;!
De même, l'anglais a quatre formes pour exprimer les nombres ordinaux&nbsp;: «&nbsp;th&nbsp;», «&nbsp;st&nbsp;», «&nbsp;nd&nbsp;», «&nbsp;rd&nbsp;», donnant la séquence&nbsp;: 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th, et ainsi de suite, tandis que le chinois et l'arabe n'ont qu'une seule forme pour les nombres ordinaux.

Étant donné une langue particulière et un ensemble d'options de formatage, les méthodes [`Intl.PluralRules.prototype.select()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select) et [`Intl.PluralRules.prototype.selectRange()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) retournent une _balise_ qui représente la forme plurielle d'un nombre unique ou d'une plage de nombres, cardinal ou ordinal.
Le code peut utiliser les balises retournées pour représenter les nombres de manière appropriée pour la langue donnée.
L'ensemble complet des balises pouvant être retournées est&nbsp;: `zero`, `one`, `two`, `few`, `many` et `other` (la forme plurielle «&nbsp;générale&nbsp;», également utilisée si la langue n'a qu'une seule forme).

Comme l'anglais n'a que deux formes pour les nombres cardinaux, la méthode `select()` ne retourne que deux balises&nbsp;: `"one"` pour le cas singulier, et `"other"` pour tous les autres nombres cardinaux.
Cela permet de construire des phrases qui ont du sens en anglais pour chaque cas, par exemple&nbsp;: «&nbsp;<i lang="en">1 dog is happy; do you want to play with it?</i>&nbsp;» et «&nbsp;<i lang="en">10 dogs are happy; do you want to play with them?</i>&nbsp;».

Créer des phrases appropriées pour chaque forme dépend de la langue, et même en anglais, cela peut ne pas être aussi simple que d'ajouter «&nbsp;s&nbsp;» à un nom pour former le pluriel.
En utilisant l'exemple ci-dessus, nous voyons que la forme peut affecter :

- **Noms** : 1 chien, 2 chiens (mais pas «&nbsp;poisson&nbsp;» ou «&nbsp;mouton&nbsp;», qui ont la même forme au singulier et au pluriel).
- **Verbes** : 1 chien _est_ heureux, 2 chiens _sont_ heureux.
- **Pronoms** (et autres référents)&nbsp;: Voulez-vous jouer avec _lui_ / _eux_&nbsp;?

D'autres langues ont plus de formes, et choisir des phrases appropriées peut être encore plus complexe.

`select()` peut retourner l'une des quatre balises pour les nombres ordinaux en anglais, représentant chacune des formes autorisées&nbsp;: `one` pour les nombres «&nbsp;st&nbsp;» (1, 21, 31, ...), `two` pour les nombres «&nbsp;nd&nbsp;» (2, 22, 32, ...), `few` pour les nombres «&nbsp;rd&nbsp;» (3, 33, 43, ...), et `other` pour les nombres «&nbsp;th&nbsp;» (0, 4-20, etc.).
Encore une fois, les balises retournées permettent de formater correctement les chaînes de caractères décrivant un nombre ordinal.

Pour plus d'informations sur les règles et leur utilisation, voir [les règles de pluriel <sup>(angl.)</sup>](https://cldr.unicode.org/index/cldr-spec/plural-rules).
Pour une liste des règles et de leur application pour différentes langues, voir les [règles de pluriel LDML <sup>(angl.)</sup>](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Constructeur

- {{JSxRef("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : Crée un nouvel objet `Intl.PluralRules`.

## Méthodes statiques

- {{JSxRef("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Retourne un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.PluralRules.prototype` et partagées par toutes les instances de `Intl.PluralRules`.

- {{JSxRef("Object/constructor", "Intl.PluralRules.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Intl.PluralRules`, la valeur initiale est le constructeur {{JSxRef("Intl/PluralRules/PluralRules", "Intl.PluralRules")}}.
- `Intl.PluralRules.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.PluralRules"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.
- {{JSxRef("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : Retourne une chaîne de caractères indiquant la règle de nombre qui s'applique pour le formatage en fonction de la locale.
- {{JSxRef("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : Cette méthode prend deux valeurs en arguments et renvoie une chaîne de caractères indiquant la règle de nombre à utiliser pour le formatage en fonction de la locale.

## Exemples

### Utiliser les `locales`

Cet exemple montre certaines des variations dans les règles de pluriel localisées pour les nombres cardinaux.

Pour obtenir le format pour la langue utilisée dans l'interface utilisateur de votre application, assurez-vous de définir cette langue (et éventuellement certaines langues de secours) en utilisant l'argument [`locales` du constructeur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#locales)&nbsp;:

```js
// Anglais (États-Unis)
const enCardinalRules = new Intl.PluralRules("en-US");
console.log(enCardinalRules.select(0)); // "other"
console.log(enCardinalRules.select(1)); // "one"
console.log(enCardinalRules.select(2)); // "other"
console.log(enCardinalRules.select(3)); // "other"

// Arabe
const arCardinalRules = new Intl.PluralRules("ar-EG");
console.log(arCardinalRules.select(0)); // "zero"
console.log(arCardinalRules.select(1)); // "one"
console.log(arCardinalRules.select(2)); // "two"
console.log(arCardinalRules.select(6)); // "few"
console.log(arCardinalRules.select(18)); // "many"
```

### Utiliser les `options`

La forme plurielle du nombre défini peut également dépendre des [options du constructeur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options), telles que la manière dont le nombre est arrondi et s'il s'agit d'un nombre cardinal ou ordinal.

Cet exemple montre comment vous pouvez définir le type de règles sur `"ordinal"`, et comment cela affecte la forme pour certains nombres en anglais américain.

```js
// Anglais (États-Unis) - ordinal
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
console.log(enOrdinalRules.select(0)); // "other" (0th)
console.log(enOrdinalRules.select(1)); // "one"   (1st)
console.log(enOrdinalRules.select(2)); // "two"   (2nd)
console.log(enOrdinalRules.select(3)); // "few"   (3rd)
console.log(enOrdinalRules.select(4)); // "other" (4th)
console.log(enOrdinalRules.select(21)); // "one"  (21st)
```

### Formater du texte en utilisant la balise retournée

Le code ci-dessous étend l'exemple précédent, montrant comment vous pouvez utiliser la balise retournée pour un nombre ordinal afin de formater du texte en anglais.

```js
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = enOrdinalRules.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Intl.ListFormat` dans FormatJS <sup>(angl.)</sup>](https://formatjs.io/docs/polyfills/intl-numberformat)
- L'objet {{JSxRef("Intl")}}
