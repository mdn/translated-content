---
title: "Intl.Segmenter : méthode statique supportedLocalesOf()"
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode statique **`Intl.Segmenter.supportedLocalesOf()`** retourne un tableau contenant les locales, parmi celles fournies en argument, qui sont prises en charge pour la segmentation sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Segmenter.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup", granularity: "string" };

console.log(Intl.Segmenter.supportedLocalesOf(locales, options));
// Résultat attendu : Array ["id-u-co-pinyin", "de-ID"]
// (Remarque : le résultat exact peut dépendre du navigateur)
```

## Syntaxe

```js-nolint
Intl.Segmenter.supportedLocalesOf(locales)
Intl.Segmenter.supportedLocalesOf(locales, options)
```

### Paramètres

- `locales`
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}, ou un tableau de telles chaînes de caractères. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir la page {{JSxRef("Intl", "Intl", "#identification_et_négociation_de_locale", 1)}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant un sous-ensemble des balises de langue fournies en argument qui sont prises en charge pour la segmentation sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser la méthode `supportedLocalesOf()`

Soit un environnement d'exécution qui prend en charge l'indonésien et l'allemand mais pas le balinais pour la segmentation, `supportedLocalesOf` retourne les balises de langue indonésienne et allemande inchangées, même si la collation `pinyin` n'est pas pertinente pour la segmentation indonésienne et qu'un dialecte allemand pour l'Indonésie a peu de chances d'être pris en charge. On notera que l'exemple utilise l'algorithme `"lookup"` et que `"best fit"` aurait pu décider que l'indonésien est une correspondance valable pour le balinais, car la plupart des personnes qui parlent balinais comprennent aussi l'indonésien. En utilisant l'algorithme `"best fit"`, on aurait donc pu avoir la balise balinaise dans les résultats.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Segmenter")}}
