---
title: Constructeur Intl.DisplayNames()
short-title: Intl.DisplayNames()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.DisplayNames()`** crée des objets {{JSxRef("Intl.DisplayNames")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Intl.DisplayNames()")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Résultat attendu : "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Résultat attendu : "美國"
```

## Syntaxe

```js-nolint
new Intl.DisplayNames(locales, options)
```

> [!NOTE]
> `Intl.DisplayNames()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lève une erreur {{JSxRef("TypeError")}}.

### Paramètres

- `locales`
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de ces identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale définis n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options`
  - : Un objet contenant les propriétés suivantes, dans l'ordre où elles sont récupérées&nbsp;:
    - `localeMatcher` {{Optional_Inline}}
      - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `style` {{Optional_Inline}}
      - : Le style de mise en forme à utiliser. Les valeurs possibles sont `"narrow"`, `"short"` et `"long"`&nbsp;; la valeur par défaut est `"long"`.
    - `type`
      - : Le type de noms à retourner depuis [`of()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of). Les valeurs possibles sont `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` et `"dateTimeField"`.
    - `fallback` {{Optional_Inline}}
      - : Ce qui doit être retourné par `of()` si l'entrée est structurellement valide mais qu'aucun nom correspondant n'est trouvé. Les valeurs possibles sont&nbsp;:
        - `"code"` (par défaut)
          - : Retourne le code d'entrée lui-même.
        - `"none"`
          - : Retourne `undefined`.
    - `languageDisplay` {{Optional_Inline}}
      - : La façon dont les noms de langues doivent être affichés. Utilisable uniquement avec `type: "language"`. Les valeurs possibles sont&nbsp;:
        - `"dialect"` (par défaut)
          - : Affiche les dialectes régionaux particuliers avec leur propre nom. Par exemple, `"nl-BE"` sera affiché comme `"Flemish"`.
        - `"standard"`
          - : Affiche toutes les langues avec le format standard. Par exemple, `"nl-BE"` sera affiché comme `"Dutch (Belgium)"`.

## Exemples

### Utilisation simple

Dans son utilisation simple, sans spécifier de langue, une chaine dans la langue locale par défaut et avec les options par défaut sera retournée.

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Utiliser le type `dateTimeField`

Exemple utilisant `dateTimeField` comme option de type, retournera les chaînes de noms de date et d'heure localisées.

```js
const dn = new Intl.DisplayNames("pt", { type: "dateTimeField" });
console.log(dn.of("era")); // 'era'
console.log(dn.of("year")); // 'ano'
console.log(dn.of("month")); // 'mês'
console.log(dn.of("quarter")); // 'trimestre'
console.log(dn.of("weekOfYear")); // 'semana'
console.log(dn.of("weekday")); // 'dia da semana'
console.log(dn.of("dayPeriod")); // 'AM/PM'
console.log(dn.of("day")); // 'dia'
console.log(dn.of("hour")); // 'hora'
console.log(dn.of("minute")); // 'minuto'
console.log(dn.of("second")); // 'segundo'
```

### Utiliser le type `calendar`

Exemple utilisant `calendar` comme option de type, retournera les chaînes de noms de calendriers localisées.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Utiliser le type `language` avec `languageDisplay`

Exemple utilisant `language` comme type avec les options `languageDisplay`.

```js
// Utilisation de l'option `dialect`
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// Utilisation de l'option `standard`
const dnStd = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});
console.log(dnStd.of("en-GB")); // 'English (United Kingdom)'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DisplayNames")}}
- La méthode {{JSxRef("Intl.supportedValuesOf()")}}
- L'objet {{JSxRef("Intl")}}
