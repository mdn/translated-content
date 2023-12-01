---
title: Intl.DisplayNames.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
---

{{JSRef}}

La méthode **`Intl.DisplayNames.supportedLocalesOf()`** renvoie un tableau dont les éléments sont les locales fournies qui sont prises en charge pour les noms d'affichage sans avoir à utiliser la locale par défaut de recours de l'environnement d'exécution.

## Syntaxe

```js
Intl.DisplayNames.supportedLocalesOf(locales);
Intl.DisplayNames.supportedLocalesOf(locales, options);
```

### Paramètres

- `locales`
  - : Une chaîne de caractères représentant une balise de langue BCP 47 ou un tableau de telles balises. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale).
- `options` {{optional_inline}}

  - : Un objet qui peut avoir la propriété suivante&nbsp;:

    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).

### Valeur de retour

Un tableau de chaînes de caractères qui est un sous-ensemble des balises de langue passées en argument et qui sont prises en charge pour les noms d'affichage sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Exemples

### Utiliser supportedLocalesOf()

Soit un environnement d'exécution qui prend en charge l'indonésien et l'allemand pour les noms d'affichage mais pas le balinais, `supportedLocalesOf` renverra les balises indonésiennes et germaniques inchangées bien que la collation `pinyin` n'est ni pertinente pour les noms d'affichage ou même utilisée pour l'indonésien et qu'un dialecte germanique pour l'indonésien sera peu probablement pris en charge. On notera que c'est l'algorithme "`lookup`" qui est utilisé ici ("`best fit`" pourrait décider que l'indonésien est une correspondance acceptable pour du balinais vu que les locuteurs balinais comprennent l'indonésien et inclure la balise de langue balinaise également).

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DisplayNames.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DisplayNames`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
