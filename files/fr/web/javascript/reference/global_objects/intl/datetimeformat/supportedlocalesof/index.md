---
title: Intl.DateTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/supportedLocalesOf
---
{{JSRef}}

À partir d'une locale ou d'un tableau de locales **`Intl.DateTimeFormat.supportedLocalesOf()`** renvoie un tableau qui contient les locales supportées pour le formatage des dates et des heures qui ne nécessitent pas d'avoir recours à la locale par défaut de l'environnement.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-supportedlocalesof.html")}}

## Syntaxe

    Intl.DateTimeFormat.supportedLocalesOf(locales[, options])

### Paramètres

- `locales`
  - : Un chaîne de caractères au format d'une balise de langue BCP 47 ou bien un tableau de telles chaînes. Pour plus d'informations sur le format de l'argument `locales`, voir la page {{jsxref("Intl", "Intl", "#L'identification_et_le_choix_de_la_locale")}}.
- `options`

  - : Paramètre optionnel, un objet pouvant avoir la propriété suivante :

    - `localeMatcher`
      - : L'algorithme de correspondance entre locales à utiliser. Les valeurs possibles sont "lookup" et "best fit". Pour plus d'informations sur ce sujet, voir la page {{jsxref("Intl", "Intl", "#Choix_de_la_locale")}}.

### Valeur de retour

Un tableau de chaînes de caractères qui représente un sous-ensemble des balises de langue qui sont prises en charge pour la mise en forme de l'heure et de la date sans qu'il soit nécessaire d'utiliser la locale par défaut de l'environnement d'exécution.

## Description

Renvoie un tableau qui est un sous-ensemble de `locales`. Les balises de langues renvoyées sont celles supportées par l'environnement pour le formatage des heures et des dates. Ces balises sont déterminées en fonction de l'algorithme de correspondances de locale et des locales utilisées. Le tableau résultant fournit les locales qui permettent de ne pas avoir à utiliser la locale par défaut.

## Exemple

### Utiliser `supportedLocalesOf`

Si on dispose d'un environnement qui supporte les locales indonésienne et allemande mais pas balinaise pour le formatage des dates et des heures,  `supportedLocalesOf` renverra les balises BCP 47 pour l'indonésien et l'allemand (bien que la collation pinyin ne soit pas pertinente pour les dates ni pour l'indonésien et qu'il soit peu probable qu'une variante indonésienne existe pour l'allemand). Pour l'exemple, on l'utilise l'algorithme `"lookup"`. Si on utilisait `"best fit"`, on pourrait considérer que l'indonésien est adéquat pour la locale balinaise (sachant que la plupart des balinais comprend l'indonésien) et donc également renvoyer la balise balinaise.

```js
var locales = ["ban", "id-u-co-pinyin", "de-ID"];
var options = {localeMatcher: "lookup"};
console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

| Spécification                                                                                                                                                | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-12.2.2', 'Intl.DateTimeFormat.supportedLocalesOf')}}                                             | {{Spec2('ES Int 1.0')}} | Définition initiale. |
| {{SpecName('ES Int 2.0', '#sec-12.2.2', 'Intl.DateTimeFormat.supportedLocalesOf')}}                                             | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.supportedLocalesOf', 'Intl.DateTimeFormat.supportedLocalesOf')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.DateTimeFormat.supportedLocalesOf")}}

## Voir aussi

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
