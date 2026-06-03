---
title: Constructeur Intl.DurationFormat()
short-title: Intl.DurationFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.DurationFormat()`** crée des objets {{JSxRef("Intl.DurationFormat")}}.

## Syntaxe

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> [!NOTE]
> `Intl.DurationFormat()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lève une {{JSxRef("TypeError")}}.

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de tels identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale spécifiés n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).

    La clé d'extension Unicode suivante est autorisée&nbsp;:
    - `nu`
      - : Voir [`numberingSystem`](#numberingsystem).

    Cette clé peut également être définie avec `options` (comme listé ci-dessous). Lorsque les deux sont définis, la propriété `options` a la priorité.

- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes, dans l'ordre où elles sont récupérées (toutes sont optionnelles)&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `numberingSystem`
      - : Le système de numération à utiliser pour la mise en forme des nombres, comme `"arab"`, `"hans"`, `"mathsans"`, and so on. Pour une liste des types de systèmes de numération pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge)&nbsp;; la valeur par défaut dépend de la locale. Cette option peut également être définie via la clé d'extension Unicode `nu`&nbsp;; si les deux sont fournis, cette propriété `options` a la priorité.
    - `style`
      - : Le style de la durée mise en forme. Cette valeur est utilisée comme valeur par défaut pour toutes les autres options d'unité, et correspond également à l'option `style` de {{JSxRef("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} lors de la concaténation de la liste des unités de durée. Les valeurs possibles sont&nbsp;:
        - `"long"`
          - : Par exemple, 1 heure et 50 minutes
        - `"short"` (par défaut)
          - : Par exemple, 1 h, 50 min
        - `"narrow"`
          - : Par exemple, 1h 50m
        - `"digital"`
          - : Par exemple, 1:50:00
    - `years`
      - : Le style des années mises en forme. Les valeurs possibles sont `"long"`, `"short"` et `"narrow"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"short"`.
    - `yearsDisplay`
      - : Indique s'il faut toujours afficher les années, ou seulement si elles sont non nulles. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `years` n'est pas défini, sinon vaut `"always"`.
    - `months`
      - : Le style des mois mis en forme. Les valeurs possibles sont `"long"`, `"short"` et `"narrow"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"short"`.
    - `monthsDisplay`
      - : Indique s'il faut toujours afficher les mois, ou seulement si ils sont non nuls. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `months` n'est pas défini, sinon vaut `"always"`.
    - `weeks`
      - : Le style des semaines mises en forme. Les valeurs possibles sont `"long"`, `"short"` et `"narrow"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"short"`.
    - `weeksDisplay`
      - : Indique s'il faut toujours afficher les semaines, ou seulement si elles sont non nulles. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `weeks` n'est pas défini, sinon vaut `"always"`.
    - `days`
      - : Le style des jours mis en forme. Les valeurs possibles sont `"long"`, `"short"` et `"narrow"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"short"`.
    - `daysDisplay`
      - : Indique s'il faut toujours afficher les jours, ou seulement si ils sont non nuls. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `days` n'est pas défini, sinon vaut `"always"`.
    - `hours`
      - : Le style des heures mises en forme. Les valeurs possibles sont `"long"`, `"short"`, `"narrow"`, `"numeric"` et `"2-digit"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"numeric"`.
    - `hoursDisplay`
      - : Indique s'il faut toujours afficher les heures, ou seulement si elles sont non nulles. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `hours` n'est pas défini et que `options.style` n'est pas `"digital"`, sinon vaut `"always"`.
    - `minutes`
      - : Le style des minutes mises en forme.
        - Si `hours` vaut `"numeric"` ou `"2-digit"`, les valeurs possibles sont `"numeric"` et `"2-digit"`, et `"numeric"` est normalisé en `"2-digit"`&nbsp;; la valeur par défaut est `"numeric"`.
        - Sinon, les valeurs possibles sont `"long"`, `"short"`, `"narrow"`, `"numeric"` et `"2-digit"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"numeric"`.
    - `minutesDisplay`
      - : Indique s'il faut toujours afficher les minutes, ou seulement si elles sont non nulles. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `minutes` n'est pas défini et que `options.style` n'est pas `"digital"`, sinon vaut `"always"`.
    - `seconds`
      - : Le style des secondes mises en forme.
        - Si `minutes` vaut `"numeric"` ou `"2-digit"`, les valeurs possibles sont `"numeric"` et `"2-digit"`, et `"numeric"` est normalisé en `"2-digit"`&nbsp;; la valeur par défaut est `"numeric"`.
        - Sinon, les valeurs possibles sont `"long"`, `"short"`, `"narrow"`, `"numeric"` et `"2-digit"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"numeric"`.
    - `secondsDisplay`
      - : Indique s'il faut toujours afficher les secondes, ou seulement si elles sont non nulles. Les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `seconds` n'est pas défini et que `options.style` n'est pas `"digital"`, sinon vaut `"always"`.
    - `milliseconds`
      - : Le style des millisecondes mises en forme.
        - Si `seconds` vaut `"numeric"` ou `"2-digit"`, la seule valeur possible est `"numeric"`&nbsp;; la valeur par défaut est `"numeric"`.
        - Sinon, les valeurs possibles sont `"long"`, `"short"`, `"narrow"` et `"numeric"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"numeric"`.
    - `millisecondsDisplay`
      - : Indique s'il faut toujours afficher les millisecondes, ou seulement si elles sont non nulles.
        - Si `seconds` vaut `"numeric"` ou `"2-digit"`, la seule valeur possible est `"auto"`&nbsp;; la valeur par défaut est uniquement `"auto"` lorsque `milliseconds` n'est pas défini.
        - Sinon, les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `milliseconds` n'est pas défini, sinon vaut `"always"`.
    - `microseconds`
      - : Le style des microsecondes mises en forme.
        - Si `milliseconds` vaut `"numeric"`, la seule valeur possible est `"numeric"`&nbsp;; la valeur par défaut est `"numeric"`.
        - Sinon, les valeurs possibles sont `"long"`, `"short"`, `"narrow"` et `"numeric"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"numeric"`.
    - `microsecondsDisplay`
      - : Indique s'il faut toujours afficher les microsecondes, ou seulement si elles sont non nulles.
        - Si `milliseconds` vaut `"numeric"`, la seule valeur possible est `"auto"`&nbsp;; la valeur par défaut est uniquement `"auto"` lorsque `microseconds` n'est pas défini.
        - Sinon, les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `microseconds` n'est pas défini, sinon vaut `"always"`.
    - `nanoseconds`
      - : Le style des nanosecondes mises en forme.
        - Si `microseconds` vaut `"numeric"`, la seule valeur possible est `"numeric"`&nbsp;; la valeur par défaut est `"numeric"`.
        - Sinon, les valeurs possibles sont `"long"`, `"short"`, `"narrow"` et `"numeric"`&nbsp;; la valeur par défaut est `options.style` si ce n'est pas `"digital"`, sinon vaut `"numeric"`.
    - `nanosecondsDisplay`
      - : Indique s'il faut toujours afficher les nanosecondes, ou seulement si elles sont non nulles.
        - Si `microseconds` vaut `"numeric"`, la seule valeur possible est `"auto"`&nbsp;; la valeur par défaut est uniquement `"auto"` lorsque `nanoseconds` n'est pas défini.
        - Sinon, les valeurs possibles sont `"always"` et `"auto"`&nbsp;; la valeur par défaut est `"auto"` si `nanoseconds` n'est pas défini, sinon vaut `"always"`.
    - `fractionalDigits`
      - : Nombre de chiffres de secondes fractionnaires à afficher dans la sortie. Les valeurs possibles vont de `0` à `9`&nbsp;; la valeur par défaut est `undefined` (inclure autant de chiffres fractionnaires que nécessaire).

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contiennent des valeurs invalides.

## Description

Pour chaque segment de temps, un objet {{JSxRef("Intl.NumberFormat")}} est construit en interne. Il utilise les options suivantes (voir {{JSxRef("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} pour plus de détails)&nbsp;:

- `numberingSystem`&nbsp;: la valeur de `options.numberingSystem`

Lorsque `milliseconds`, `microseconds` ou `nanoseconds` utilise le style `"numeric"`, les options suivantes sont également utilisées&nbsp;:

- `minimumFractionDigits`&nbsp;: `0` lorsque `options.fractionalDigits` est `undefined`, `options.fractionalDigits` sinon
- `maximumFractionDigits`&nbsp;: `9` lorsque `options.fractionalDigits` est `undefined`, `options.fractionalDigits` sinon
- `roundingMode`&nbsp;: `"trunc"`

Lorsque le segment de temps utilise le style `"2-digit"`, les options suivantes sont également utilisées&nbsp;:

- `minimumIntegerDigits`&nbsp;: `2`

Lorsque le segment de temps utilise le style `"long"`, `"short"` ou `"narrow"`, les options suivantes sont également utilisées&nbsp;:

- `style`&nbsp;: `"unit"` lorsque `"long"`, `"short"` ou `"narrow"` est défini, `undefined` sinon
- `unit`&nbsp;: l'unité actuellement mise en forme (`"years"`, `"days"`, `"nanoseconds"`, etc.)
- `unitDisplay`&nbsp;: la valeur du style du segment de temps (`"long"`, `"short"` ou `"narrow"`)

## Exemples

### Utiliser le constructeur `Intl.DurationFormat()`

```js
const duration = {
  hours: 2,
  minutes: 20,
  seconds: 35,
};

console.log(new Intl.DurationFormat("pt", { style: "long" }).format(duration));
// "2 horas, 20 minutos e 35 segundos"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DurationFormat")}}
- La méthode {{JSxRef("Intl.supportedValuesOf()")}}
- L'objet {{JSxRef("Intl")}}
