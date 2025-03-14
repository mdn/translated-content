---
title: Intl.NumberFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
---

{{JSRef}}

La méthode **`Intl.NumberFormat.supportedLocalesOf()`** renvoie un tableau de locales supportées parmi les locales fournies en argument afin d'éviter d'utiliser celle par défaut de l'environnement.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.supportedLocalesOf")}}

```js interactive-example
const locales1 = ["ban", "id-u-co-pinyin", "de-ID"];
const options1 = { localeMatcher: "lookup" };

console.log(Intl.NumberFormat.supportedLocalesOf(locales1, options1));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntaxe

```js
Intl.NumberFormat.supportedLocalesOf(locales[, options])
```

### Paramètres

- `locales`
  - : Une chaîne de caractères qui est une balise BCP 47 ou un tableau composé de telles chaînes. Pour plus d'informations sur la forme générale de l'argument `locales`, voir la page {{jsxref("Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}.
- `options`

  - : Un objet qui peut avoir la propriété suivante :

    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "lookup" et "best fit". La valeur par défaut est "best fit". Pour plus d'informations,, voir la page {{jsxref("Intl","Intl","#Choix_de_la_locale")}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant un sous-ensemble des balises de langues qui sont prises en charge pour la mise en forme des nombres sans qu'il soit nécessaire d'utiliser la locale par défaut de l'environnement d'exécution.

## Description

Cette méthode renvoie un tableau de locales supportées parmi les locales fournies en argument afin d'éviter d'utiliser celle par défaut de l'environnement. Les locales renvoyées sont celles considérées comme équivalentes aux locales fournies avec l'algorithme indiqué.

## Exemples

### Utiliser `supportedLocalesOf()`

Si on dispose d'un environnement qui supporte les locales indonésienne et allemande mais pas balinaise pour le formatage des dates et des heures, `supportedLocalesOf` renverra les balises BCP 47 pour l'indonésien et l'allemand (bien que la collation pinyin ne soit pas pertinente pour les nombres ni pour l'indonésien et qu'il soit peu probable qu'une variante indonésienne existe pour l'allemand). Pour l'exemple, on l'utilise l'algorithme `"lookup"`. Si on utilisait `"best fit"`, on pourrait considérer que l'indonésien est adéquat pour la locale balinaise (sachant que la plupart des balinais comprend l'indonésien) et donc également renvoyer la balise balinaise.

```js
var locales = ["ban", "id-u-co-pinyin", "de-ID"];
var options = { localeMatcher: "lookup" };
console.log(Intl.NumberFormat.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
