---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/PluralRules
browser-compat: javascript.builtins.Intl.PluralRules
---
{{JSRef}}

L'objet **`Intl.PluralRules`** permet de mettre en forme des chaînes de caractères en fonction des règles de nombre (pluriel) d'une locale donnée.

## Constructeur

- [`Intl.PluralRules()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)
  - : Crée un nouvel objet `Intl.PluralRules`.

## Méthodes statiques

- [`Intl.PluralRules.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/supportedLocalesOf)
  - : Renvoie un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Méthodes des instances

- [`Intl.PluralRules.prototype.resolvedOptions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)
  - : Renvoie un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet.
- [`Intl.PluralRules.prototype.select()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select)
  - : Renvoie une chaîne de caractères indiquant la règle de nombre qui s'applique pour le formatage en fonction de la locale.
- [`Intl.PluralRules.prototype.selectRange()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange)
  - : Cette méthode prend deux valeurs en arguments et renvoie une chaîne de caractères indiquant la règle de nombre à utiliser pour le formatage en fonction de la locale.

## Exemples

### Utiliser `locales`

Dans cet exemple, on voit l'impact de la locale sur les règles de nombre. Afin de respecter la langue de l'utilisatrice et de l'utilisateur dans votre application, assurez-vous d'indiquer cette langue (et éventuellement une langue de secours) grâce à l'argument `locales`&nbsp;:

```js
// L'arabe possède plusieurs règles
// de nombre

new Intl.PluralRules('ar-EG').select(0);
// → 'zero'
new Intl.PluralRules('ar-EG').select(1);
// → 'one'
new Intl.PluralRules('ar-EG').select(2);
// → 'two'
new Intl.PluralRules('ar-EG').select(6);
// → 'few'
new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Une prothèse d'émulation pour `Intl.ListFormat` avec la bibliothèque FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat)
