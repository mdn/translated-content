---
title: "Intl.PluralRules : méthode statique supportedLocalesOf()"
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode statique **`Intl.PluralRules.supportedLocalesOf()`** retourne un tableau contenant les locales fournies qui sont prises en charge pour les règles de pluriel, sans avoir à revenir à la locale par défaut de l'environnement d'exécution.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.PluralRules.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["en-US", "ban", "ar-OM", "de-DE"];
const options = { localeMatcher: "lookup" };

console.log(Intl.PluralRules.supportedLocalesOf(locales, options));
// Résultat attendu : Array ["en-US", "ar-OM", "de-DE"]
```

## Syntaxe

```js-nolint
Intl.PluralRules.supportedLocalesOf(locales)
Intl.PluralRules.supportedLocalesOf(locales, options)
```

### Paramètres

- `locales`
  - : Une chaîne de caractères représentant une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description des paramètres sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet pouvant contenir la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{JSxRef("Intl", "Intl", "#identification_et_négociation_de_locale", 1)}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant un sous-ensemble des balises de langue fournies qui sont prises en charge pour les règles de pluriel, sans avoir à revenir à la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser la méthode `supportedLocalesOf()`

En supposant un environnement d'exécution prenant en charge l'indonésien et l'allemand mais pas le balinais pour les règles de pluriel, `supportedLocalesOf` retourne les balises de langue indonésienne et allemande inchangées, même si la collation `pinyin` n'est ni pertinente pour les règles de pluriel ni utilisée avec l'indonésien, et qu'une variante allemande pour l'Indonésie est peu susceptible d'être prise en charge. Notez la spécification de l'algorithme `"lookup"` ici — une correspondance `"best fit"` peut décider que l'indonésien est une correspondance adéquate pour le balinais, puisque la plupart des locuteurs balinais comprennent également l'indonésien, et retourner donc également la balise de langue balinaise.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.PluralRules.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.PluralRules")}}
