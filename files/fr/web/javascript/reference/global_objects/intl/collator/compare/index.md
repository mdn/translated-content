---
title: Intl.Collator.prototype.compare
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
---

{{JSRef}}

La méthode **`Intl.Collator.prototype.compare()`** compare deux chaînes de caractères en tenant compte des options spécifiées pour la locale et l'ordre de tri dans l'objet {{jsxref("Collator")}}.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-compare.html")}}

## Syntaxe

```js
collator.compare(chaine1, chaine2);
```

### Paramètres

- `chaine1`, `chaine2`
  - : Les chaînes de caractères à comparer.

## Description

L'accesseur `compare` renvoie un nombre qui indique le résultat de la comparaison entre `chaine1` et `chaine2` selon l'ordre de tri de l'objet {{jsxref("Collator")}} : la valeur obtenue sera négative si `chaine1` précède `chaine2`, positive si `chaine1` succède à `chaine2`, nulle si les deux chaînes sont considérées égales.

## Exemples

### Utiliser `compare()` pour trier un tableau

Dans cet exemple, on utilise la fonction de l'accesseur `compare` pour trier des tableaux. On observe que la fonction est liée à l'objet `Collator`, on peut donc directement la passer à la méthode {{jsxref("Array.prototype.sort()")}}.

```js
var a = ["Offenbach", "Österreich", "Odenwald"];
var collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", "));
// → "Odenwald, Österreich, Offenbach"
```

### Utiliser `compare()` pour chercher dans un tableau

Ici, on utilise la fonction de l'accesseur `compare` pour trouver les chaînes égales à une chaîne donnée parmi un tableau :

```js
var a = ["Congrès", "congres", "Assemblée", "poisson"];
var collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
var s = "congres";
var matches = a.filter(function (v) {
  return collator.compare(v, s) === 0;
});
console.log(matches.join(", "));
// → "Congrès, congres"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Collator", "Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
