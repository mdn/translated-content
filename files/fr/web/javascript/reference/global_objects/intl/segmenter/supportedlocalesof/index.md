---
title: Intl.Segmenter.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
---

{{JSRef}}

La méthode **`Intl.Segmenter.supportedLocalesOf()`** renvoie un tableau contenant les locales, parmi celles fournies en argument, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

{{EmbedInteractiveExample("pages/js/intl-segmenter-supportedlocalesof.html")}}

## Syntaxe

```js
supportedLocalesOf(locales);
supportedLocalesOf(locales, options);
```

### Paramètres

- `locales`
  - : Une chaîne qui est une balise de langue BCP 47 ou un tableau de telles chaînes. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
- `options` {{optional_inline}}
  - : Un objet avec la propriété suivante&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont&nbsp;:
        - `"best fit"` (la valeur par défaut)
          - : L'environnement d'exécution peut éventuellement choisir une locale plus adaptée que celle fournie par l'algorithme utilisé par `"lookup"`.
        - `"lookup"`
          - : Utilise [l'algorithme de recherche BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) pour choisir la locale à partir de `locales`. Pour chaque locale contenue dans `locales`, l'environnement d'exécution renvoie la première locale prise en charge (en retirant éventuellement des sous-étiquettes de l'étiquette de locale fournie afin d'en sélectionner une prise en charge&nbsp;; autrement dit, si on fournit `"de-CH"` pour `locales`, cet algorithme pourra fournir `"de"` en résultat si `"de"` est prise en charge mais que `"de-CH"` ne l'est pas).

### Valeur de retour

Un tableau de chaînes de caractères représentant le sous-ensemble de locales prises en charge, sans avoir à recourir à la locale par défaut de l'environnement d'exécution, pour la segmentation par rapport aux balises de langue fournies en argument.

## Exemples

### Utiliser `supportedLocalesOf()`

Soit un environnement d'exécution qui prend en charge l'indonésien et l'allemand mais pas le balinais pour la segmentation, `supportedLocalesOf` renvoie les balises de langue indonésienne et allemande inchangées, même si la collation `pinyin` n'est pas pertinente pour la segmentation indonésienne et qu'un dialecte allemand pour l'Indonésie a peu de chances d'être pris en charge. On notera que l'exemple utilise l'algorithme "`lookup`" et que "`best fit`" aurait pu décider que l'indonésien est une correspondance valable pour le balinais, car la plupart des personnes qui parlent balinais comprennent aussi l'indonésien. En utilisant l'algorithme `"best fit"`, on aurait donc pu avoir la balise balinaise dans les résultats.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
