---
title: "Intl.Collator : méthode compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`compare()`** des instances de {{JSxRef("Intl.Collator")}} compare deux chaînes de caractères selon l'ordre de tri de cet objet de comparaison.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Collator.prototype.compare()")}}

```js interactive-example
const enCollator = new Intl.Collator("en");
const deCollator = new Intl.Collator("de");
const svCollator = new Intl.Collator("sv");

console.log(enCollator.compare("z", "a") > 0);
// Résultat attendu : true

console.log(deCollator.compare("z", "ä") > 0);
// Résultat attendu : true

console.log(svCollator.compare("z", "ä") > 0);
// Résultat attendu : false
```

## Syntaxe

```js-nolint
compare(string1, string2)
```

### Paramètres

- `string1`, `string2`
  - : Les chaînes de caractères à comparer entre elles.

### Valeur de retour

Un nombre indiquant comment `string1` et `string2` se comparent entre elles selon l'ordre de tri de cet objet de comparaison&nbsp;:

- Une valeur négative si `string1` précède `string2`&nbsp;;
- Une valeur positive si `string1` suit `string2`&nbsp;;
- 0 si elles sont considérées comme égales.

## Exemples

### Utiliser la méthode `compare()` pour trier un tableau

Dans cet exemple, on utilise la fonction de l'accesseur `compare` pour trier des tableaux. On observe que la fonction est liée à l'objet `Collator`, on peut donc directement la passer à la méthode {{JSxRef("Array.prototype.sort()")}}.

```js
const a = ["Offenbach", "Österreich", "Odenwald"];
const collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", ")); // "Odenwald, Österreich, Offenbach"
```

### Utiliser la méthode `compare()` pour chercher dans un tableau

Utiliser la fonction `compare` pour trouver les chaînes de caractères correspondantes dans des tableaux&nbsp;:

```js
const a = ["Congrès", "congres", "Assemblée", "poisson"];
const collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
const s = "congres";
const matches = a.filter((v) => collator.compare(v, s) === 0);
console.log(matches.join(", ")); // "Congrès, congres"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Collator")}}
- La méthode {{JSxRef("String.prototype.localeCompare()")}}
