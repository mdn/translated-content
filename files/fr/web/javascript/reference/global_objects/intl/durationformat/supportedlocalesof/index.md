---
title: "Intl.DurationFormat : méthode statique supportedLocalesOf()"
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode statique **`supportedLocalesOf()`** des instances de {{JSxRef("Intl.DurationFormat")}} retourne un tableau contenant celles des locales fournies qui sont prises en charge pour le formatage de durée sans avoir à revenir à la locale par défaut de l'environnement d'exécution.

## Syntaxe

```js-nolint
Intl.DurationFormat.supportedLocalesOf(locales)
Intl.DurationFormat.supportedLocalesOf(locales, options)
```

### Paramètres

- `locales`
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise BCP 47 language tag")}}, ou un tableau de telles chaînes. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet qui peut avoir la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir la page {{JSxRef("Intl", "Intl", "#identification_et_négociation_de_locale", 1)}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant un sous-ensemble des balises de locale fournies qui sont prises en charge pour le formatage de durée sans avoir à revenir à la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser la méthode `supportedLocalesOf()`

En supposant un environnement d'exécution qui prend en charge l'indonésien et l'allemand mais pas le balinais pour le formatage de durée, `supportedLocalesOf` retourne les balises de langue indonésienne et allemande inchangées, même si la collation `pinyin` n'est ni pertinente pour le formatage de durée ni utilisée avec l'indonésien, et qu'un allemand spécialisé pour l'Indonésie est peu susceptible d'être pris en charge. Notez la spécification de l'algorithme `"lookup"` ici — un comparateur `"best fit"` pourrait décider que l'indonésien est une correspondance adéquate pour le balinais puisque la plupart des locuteurs balinais comprennent aussi l'indonésien, et donc retourner également la balise de langue balinaise.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DurationFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DurationFormat")}}
