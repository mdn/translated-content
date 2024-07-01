---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
---

{{JSRef}}

La méthode **`Intl.DisplayNames.prototype.of()`** prend comme argument un code et renvoie une chaîne de caractères selon les options et la locale fournies lors de l'instanciation de l'objet `Intl.DisplayNames`.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntaxe

```js
of(code);
```

### Paramètres

- `code`

  - : La valeur du `code` à fournir dépend du `type`&nbsp;:

    - Si le type est `"region"`, le code sera [un code de région ISO-3166 sur deux lettres](https://www.iso.org/iso-3166-country-codes.html), ou [un code de région géographique sur trois chiffres UN M49](https://unstats.un.org/unsd/methodology/m49/).
    - Si le type est `"script"`, le code sera [un code de script ISO-15924 sur quatre lettres](https://unicode.org/iso15924/iso15924-codes.html).
    - Si le type est `"language"`, le code sera de la forme d'une sous-séquence _languageCode_ \["-"_scriptCode_] \["-" _regionCode_ ] ("-" _variant_ ) de la grammaire unicode\_language\_id pour [la grammaire des identifiants de locales et de langues Unicode UTS 35](https://unicode.org/reports/tr35/#Unicode_language_identifier). _languageCode_ est soit un code de langue ISO 639-1 sur deux lettres ou un code de langue ISO 639-2 sur trois lettres.
    - Si le type est `"currency"`, le code sera [un code à 3 lettres ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).

### Valeur de retour

Une chaîne de caractères formatée spécifique à une locale.

## Exemples

### Utilisation de la méthode of()

```js
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
regionNames.of("419"); // "Latin America"

let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
languageNames.of("fr"); // "French"

let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
currencyNames.of("EUR"); // "Euro"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DisplayNames`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
