---
title: Intl.ListFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
tags:
  - Intl
  - JavaScript
  - ListFormat
  - Méthode
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat/supportedLocalesOf
---
{{JSRef}}

The **`Intl.ListFormat.supportedLocalesOf()`** renvoie, parmi les locales fournies, un tableau contenant les locales supportées pour le formatage des listes et qui ne nécessitent pas d'utiliser la locale par défaut de l'environnement.

## Syntaxe

```js
Intl.ListFormat.supportedLocalesOf(locales[, options])
```

### Paramètres

- `locales`
  - : Une chaîne de caractères qui est une balise de langue BCP 47 ou bien un tableau de telles chaînes. Pour plus d'informations concernant la forme générale de l'argument `locales`, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#L'identification_et_le_choix_de_la_locale")}}.
- `options`{{optional_inline}}

  - : Paramètre facultatif. Un objet qui peut posséder les propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme utilisé pour la correspondance entre chaînes de caractères. Les valeurs possibles sont `"lookup"` et `"best fit"`. La valeur par défaut est `"best fit"`. Pour plus d'informations, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#Choix_de_la_locale")}}.

### Valeur de retour

Un tableau de chaînes de caractères qui représente un sous-ensemble des balises de langues qui sont prises en charge pour le formatage des listes sans qu'il faille utiliser la locale par défaut de l'environnement d'exécution.

## Description

Cette méthode renvoie un tableau qui est un sous-ensemble des balises de locales fournies avec l'argument `locales`. Les balises renvoyées sont celles supportées par l'environnement navigateur en termes de formatage des listes et qui ne nécessitent pas d'utiliser la locale par défaut.

## Exemples

### Utiliser `supportedLocalesOf`

Si on dispose d'un environnement (un navigateur par exemple) qui supporte le formatage des listes dans les locales indonésienne, allemande mais pas balinaise,  `supportedLocalesOf` renvoie les balises pour l'indonésien et l'allemand quand bien même le formatage des listes pinyin n'est pas utilisée avec l'indonésien et qu'il n'existe pas une version spécifique de l'allemand pour l'Indonésie. On illustre ici l'algorithme `"lookup"`. SI on utilisait `"best fit"` pour trouver les locales correspondantes, on aurait pu avoir une balise supplémentaire pour le balinais en plus car la plupart des balinais comprennent l'indonésien.

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.ListFormat.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

| Spécification                                                                                                                                     | État                    | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.ListFormat.supportedLocalesOf`](https://tc39.github.io/proposal-intl-list-format/#sec-Intl.ListFormat.supportedLocalesOf) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.ListFormat.supportedLocalesOf")}}

## Voir aussi

- {{jsxref("ListFormat", "Intl.ListFormat")}}
