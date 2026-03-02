---
title: "Intl.Collator : méthode statique supportedLocalesOf()"
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode statique **`supportedLocalesOf()`** des instances de {{JSxRef("Intl.Collator")}} retourne un tableau contenant celles des locales fournies qui sont prises en charge pour la collation sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Collator.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales1 = ["ban", "id-u-co-pinyin", "de-ID"];
const options1 = { localeMatcher: "lookup" };

console.log(Intl.Collator.supportedLocalesOf(locales1, options1));
// Résultat attendu : Array ["id-u-co-pinyin", "de-ID"]
// (Remarque : le résultat exact peut dépendre du navigateur)
```

## Syntaxe

```js-nolint
Intl.Collator.supportedLocalesOf(locales)
Intl.Collator.supportedLocalesOf(locales, options)
```

### Paramètres

- `locales`
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}}, ou un tableau de telles chaînes. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale d'`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet qui peut avoir la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir la page {{JSxRef("Intl", "Intl", "#identification_et_négociation_de_locale", 1)}}.

### Valeur de retour

Un tableau de chaînes de caractères qui représente un sous-ensemble des balises de langues qui sont prises en charge pour la collation sans qu'il faille utiliser la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser la méthode `supportedLocalesOf()`

En supposant un environnement d'exécution qui prend en charge la collation pour l'indonésien et l'allemand mais pas pour le balinais, `supportedLocalesOf` retourne les balises de langue pour l'indonésien et l'allemand sans modification, même si la collation `pinyin` n'est pas utilisée avec l'indonésien et qu'une version spécialisée de l'allemand pour l'Indonésie est peu probable. Notez la spécification de l'algorithme `"lookup"` ici — un appariement `"best fit"` pourrait décider que l'indonésien est une correspondance adéquate pour le balinais puisque la plupart des locuteurs balinais comprennent aussi l'indonésien, et donc retourner également la balise de langue balinaise.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Collator.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Collator")}}
