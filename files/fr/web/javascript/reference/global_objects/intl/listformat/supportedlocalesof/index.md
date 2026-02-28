---
title: "Intl.ListFormat : méthode statique supportedLocalesOf()"
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode statique **`supportedLocalesOf()`** des instances de {{JSxRef("Intl.ListFormat")}} retourne un tableau contenant celles des locales fournies qui sont prises en charge pour le formatage des listes sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Syntaxe

```js-nolint
Intl.ListFormat.supportedLocalesOf(locales)
Intl.ListFormat.supportedLocalesOf(locales, options)
```

### Paramètres

- `locales`
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise BCP 47 language tag")}}, ou un tableau de telles chaînes. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet qui peut avoir la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de la locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir la page {{JSxRef("Intl", "Intl", "#identification_et_négociation_de_locale", 1)}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant un sous-ensemble des balises de langue fournies qui sont prises en charge pour le formatage des listes sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser la méthode `supportedLocalesOf()`

En supposant un environnement d'exécution qui prend en charge le formatage des listes pour l'indonésien et l'allemand mais pas pour le balinais, `supportedLocalesOf` retourne les balises de langue pour l'indonésien et l'allemand sans modification, même si la collation `pinyin` n'est ni pertinente pour le formatage des listes ni utilisée avec l'indonésien, et qu'une version spécialisée de l'allemand pour l'Indonésie est peu probable. Notez la spécification de l'algorithme `"lookup"` ici — un appariement `"best fit"` pourrait considérer que l'indonésien est une correspondance adéquate pour le balinais puisque la plupart des locuteurs balinais comprennent aussi l'indonésien, et donc retourner également la balise de langue balinaise.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.ListFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.ListFormat")}}
