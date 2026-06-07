---
title: "Intl.RelativeTimeFormat : méthode statique supportedLocalesOf()"
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode statique **`Intl.RelativeTimeFormat.supportedLocalesOf()`** retourne un tableau contenant l'ensemble des locales, parmi celles fournies en argument, qui sont prises en charge pour le formatage du temps relatif, sans avoir à utiliser la locale par défaut de l'environnement d'exécution.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.RelativeTimeFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales1 = ["ban", "id-u-co-pinyin", "de-ID"];
const options1 = { localeMatcher: "lookup" };

console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales1, options1));
// Résultat attendu : Array ["id-u-co-pinyin", "de-ID"]
// (Note : le résultat exact peut dépendre du navigateur)
```

## Syntaxe

```js-nolint
Intl.RelativeTimeFormat.supportedLocalesOf(locales)
Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
```

### Paramètres

- `locales`
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet pouvant avoir la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance entre locales à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir la page {{JSxRef("Intl", "Intl", "#identification_et_négociation_de_locale", 1)}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant un sous-ensemble des balises de langue fournies qui sont prises en charge pour le formatage du temps relatif sans avoir à utiliser la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser la méthode `supportedLocalesOf()`

En supposant un environnement d'exécution qui prend en charge l'indonésien et l'allemand mais pas le balinais pour le formatage du temps relatif, `supportedLocalesOf` retourne les balises de langue indonésienne et allemande inchangées, même si la collation `pinyin` n'est ni pertinente pour le formatage du temps relatif ni utilisée avec l'indonésien, et qu'un allemand spécialisé pour l'Indonésie est peu probable. Notez la spécification de l'algorithme `"lookup"` ici — une correspondance `"best fit"` peut décider que l'indonésien est un match adéquat pour le balinais puisque la plupart des locuteurs balinais comprennent également l'indonésien, et donc retourner également la balise de langue balinaise.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.RelativeTimeFormat")}}
