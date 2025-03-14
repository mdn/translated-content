---
title: Intl.Collator.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
---

{{JSRef}}

La méthode **`Intl.Collator.supportedLocalesOf()`** renvoie, parmi les locales fournies, un tableau contenant les locales supportées et qui ne nécessitent pas d'utiliser la locale par défaut de l'environnement.

{{InteractiveExample("JavaScript Demo: Intl.Collator.supportedLocalesOf")}}

```js interactive-example
const locales1 = ["ban", "id-u-co-pinyin", "de-ID"];
const options1 = { localeMatcher: "lookup" };

console.log(Intl.Collator.supportedLocalesOf(locales1, options1));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntaxe

```js
Intl.Collator.supportedLocalesOf(locales [, options])
```

### Paramètres

- `locales`
  - : Une chaîne de caractères qui est une balise de langue BCP 47 ou bien un tableau de telles chaînes. Pour plus d'informations concernant la forme générale de l'argument `locales`, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#L'identification_et_le_choix_de_la_locale")}}.
- `options`{{optional_inline}}

  - : Paramètre facultatif. Un objet qui peut posséder les propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme utilisé pour la correspondance entre chaînes de caractères. Les valeurs possibles sont `"lookup"` et `"best fit"`. La valeur par défaut est `"best fit"`. Pour plus d'informations, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#Choix_de_la_locale")}}.

### Valeur de retour

Un tableau de chaînes de caractères qui représente un sous-ensemble des balises de langues qui sont prises en charge pour la collation sans qu'il faille utiliser la locale par défaut de l'environnement d'exécution.

## Description

Cette méthode renvoie un tableau qui est un sous-ensemble des balises de locales fournies avec l'argument `locales`. Les balises renvoyées sont celles supportées par l'environnement navigateur en termes de collation (comparaison) et qui ne nécessitent pas d'utiliser la locale par défaut.

## Exemples

Si on dispose d'un environnement (un navigateur par exemple) qui supporte la comparaison de chaînes dans les locales indonésienne, allemande mais pas balinaise, `supportedLocalesOf` renvoie les balises pour l'indonésien et l'allemand quand bien même la collation avec pinyin n'est pas utilisée avec l'indonésien et qu'il n'existe pas une version spécifique de l'allemand pour l'Indonésie. On illustre ici l'algorithme `"lookup"`. SI on utilisait `"best fit"` pour trouver les locales correspondantes, on aurait pu avoir une balise supplémentaire pour le balinais en plus car la plupart des balinais comprennent l'indonésien.

```js
var locales = ["ban", "id-u-co-pinyin", "de-ID"];
var options = { localeMatcher: "lookup" };
console.log(Intl.Collator.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Collator", "Intl.Collator")}}
