---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat
---
{{JSRef}}

L'objet **`Intl.DateTimeFormat`** est un constructeur d'objets permettant de formatter des dates et des heures selon une langue.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}

## Syntaxe

    new Intl.DateTimeFormat([locales[, options]])
    Intl.DateTimeFormat.call(this[, locales[, options]])

### Paramètres

- `locales`{{optional_inline}}

  - : Ce paramètre optionnel est une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour utiliser la locale par défaut du navigateur, on pourra omettre cet argument (ou passer la valeur `undefined`). Pour le format général et l'interprétation de l'argument `locales`, voir la page {{jsxref("Objets_globaux/Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}. Les clefs d'extensions Unicode suivantes sont autorisées :

    - nu
      - : Système de numérotation. Les valeurs possibles incluent : `"arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt"`.
    - ca
      - : Calendrier. Les valeurs possibles incluent : `"buddhist", "chinese", "coptic", "ethiopia", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamicc", "iso8601", "japanese", "persian", "roc"`.
    - `hc`
      - : Le type de cycle horaire à utiliser. Les valeurs possibles sont `"h11"`, `"h12"`, `"h23"`, `"h24"`.

- `options`

  - : Un objet avec certaines ou toutes les propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont `"lookup"` et `"best fit"` ; le défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{jsxref("Objets_globaux/Intl","Intl","##Choix_de_la_locale")}}
    - `timeZone`
      - : Le fuseau horaire à utiliser. La seule valeur que doivent reconnaitre les implémentations est "UTC" ; la valeur par défaut est le fuseau horaire du moteur JavaScript. Les implémentations peuvent aussi reconnaitre les noms de fuseau horaire de la [base de données IANA de fuseaux horaires](https://www.iana.org/time-zones), tel que `"Asia/Shanghai"`, `"Asia/Kolkata"`, `"America/New_York"`.
    - `hour12`
      - : S'il faut utiliser le format horaire sur 12 heures (au lieu de celui-ci sur 24 heures). Les valeurs possibles sont `true` et `false` ; la valeur par défaut dépend de la locale. Cette option surcharge l'étiquette `hc` et/ou l'option `hourCycle`.
    - `hourCycle`
      - : Le cycle horaire à utiliser. Les valeurs possibles sont `"h11"`, `"h12"`, `"h23"`, `"h24"`. Cette option surcharge l'étiquette `hc` mais sera remplacée par `hour12` si cette dernière est présente.
    - `formatMatcher`
      - : L'algorithme de correspondance à utiliser pour le formattage. Les valeurs possibles sont `"basic"` et `"best fit"` ; par défaut `"best fit"`. Voir les paragraphes suivants pour des informations concernant l'usage de cette propriété.

    Les propriétés suivantes décrivent les composants date-heure à utiliser pour le formattage de la sortie.  Les implémentations ont pour obligation de supporter au minimum les ensembles suivants :

    - `weekday, year, month, day, hour, minute, second`
    - `weekday, year, month, day`
    - `year, month, day`
    - `year, month`
    - `month, day`
    - `hour, minute, second`
    - `hour, minute`

    Les implémentations peuvent supporter d'autres sous-ensembles, et les demandes seront évaluées face à toutes les combinaisons de sous-ensembles disponibles pour trouver la meilleure correspondance. Deux algorithmes sont disponibles pour cette évaluation et choisis par la propriété `formatMatcher` : un [algorithme "basic" complètement spécifié](https://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) et un algorithme `"best fit"` dépendant de l'implémentation.

    - `weekday`

      - : La représentation du jour de la semaine. Les valeurs possibles sont :

        - `"long"` (par exemple `Thursday`)
        - `"short"` (par exemple `Thu`)
        - `"narrow"` (par exemple `T`). Deux jours de la semaines pourront partager la même représentation dans certaines locales (par exemple, en anglais `Tuesday` sera également représenté avec `T` en notation étroite).

    - `era`

      - : La représentation de l'ère. Les valeurs possibles sont :

        - `"long"` (par exemple `Anno Domini`)
        - `"short"` (par exemple `AD`)
        - `"narrow"` (par exemple `A`)

    - `year`

      - : La représentation de l'année. Les valeurs possibles sont :

        - `"numeric"` (par exemple `2012`)
        - `"2-digit"` (par exemple `12`)

    - `month`

      - : La représentation du mois. Les valeurs possibles sont :

        - `"numeric"` (par exemple `2`)
        - `"2-digit"` (par exemple `02`)
        - `"long"` (par exemple `March`)
        - `"short"` (par exemple `Mar`)
        - `"narrow"` (par exemple `M`). Dans certaines locales, deux mois pourront partager la même représentation avec le style étroit (par exemple, `May` en anglais, sera également représenté avec `M`).

    - `day`

      - : La représentation du jour. Les valeurs possibles sont :

        - `"numeric"` (par exemple `1`)
        - `"2-digit"` (par exemple `01`)

    - `hour`

      - : La représentation de l'heure. Les valeurs possibles sont :

        - `"numeric"` (par exemple `1`)
        - `"2-digit"` (par exemple `01`)

    - `minute`

      - : La représentation des minutes. Les valeurs possibles sont :

        - `"numeric"` (par exemple `1`)
        - `"2-digit"` (par exemple `01`)

    - `second`

      - : La représentation des secondes. Les valeurs possibles sont :

        - `"numeric"` (par exemple `1`)
        - `"2-digit"` (par exemple `01`)

    - `timeZoneName`

      - : La représentation du fuseau horaire. Les valeurs possibles sont :

        - `"long"` (par exemple `British Summer Time`)
        - `"short"` (par exemple `GMT+1`)

    La valeur par défaut pour chaque composante est {{jsxref("undefined")}}, mais si toutes les composantes valent `undefined`, alors `year`, `month`, et `day` seront considérés comme `"numeric"`.

## Description

### Propriétés

- {{jsxref("DateTimeFormat.prototype", "Intl.DateTimeFormat.prototype")}}
  - : Permet l'ajout de propriétés à tous les objets.

### Méthodes

- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Renvoie un tableau contenant les locales supportées parmis les locales fournies, sans qu'il soit nécessaire de recourir à la locale par défaut de l'implémentation.

## Instances de `DateTimeFormat`

### Propriétés

Les instances de `DateTimeFormat()` héritent des propriétés suivantes depuis leur prototype :

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat/prototype','Properties')}}

### Méthodes

Les instances de `DateTimeFormat()` héritent des propriétés suivantes depuis leur prototype :

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat/prototype','Méthodes')}}

## Exemples

### Utiliser `DateTimeFormat()`

Dans une utilisation basique sans préciser de locale, `DateTimeFormat()` utilise la locale et les options par défaut

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// DateTimeFormat sans arguments dépend de l'implémentation,
// la locale par défaut, et le fuseau horaire par défaut
console.log(new Intl.DateTimeFormat().format(date));
// → "20/12/2012" avec une locale fr-Fr et un fuseau horaire CEST
```

### Utiliser `locales`

Cet exemple montre quelques variations de formattage pour les dates et les heures localisées. Afin d'obtenir le langage utilisé au sein de l'interface utilisateur de votre application, vérifiez de bien fournir ce langage (et éventuellement des locales de recours) en utilisant l'argument `locales` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// les formats qui suivent se basent sur le
// fuseau horaire CEST

// l'anglais américain utilise l'ordre mois-jour-année
console.log(new Intl.DateTimeFormat("en-US").format(date));
// → "12/20/2012"

// l'anglais britannique utilise l'ordre jour-mois-année
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// → "20/12/2012"

// le coréen utilise l'ordre année-mois-jour
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// → "2012. 12. 20."

// l'arabe, dans la plupart des pays arabophones, utilise les chiffres arabes
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// en ce qui concerne le japonais, les applications peuvent
// souhaiter utiliser le calendrier japonais
// pour lequel 2012 était l'année 24 de l'ère Heisei
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// → "24/12/20"

// quand un langage non support est demandé (ex : le balinais)
// il est possible de fournir un langage de recours (ici l'indonésien)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// → "20/12/2012"
```

### Utiliser `options`

Les formats de la date et de l'heure peuvent être personnalisés en utilisant l'argument `options` :

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// fournir le jour de la semaine avec une date longue
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// une application peut vouloir utiliser UTC et le rendre visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// → "Thursday, December 20, 2012, GMT"

// parfois, vous voulez être précis
options = {hour: "numeric", minute: "numeric", second: "numeric",
           timeZoneName: "short"};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// → "2:00:00 pm AEDT"

// parfois, même les USA ont besoin d'afficher une heure sur 24h
options = {year: "numeric", month: "numeric", day: "numeric",
           hour: "numeric", minute: "numeric", second: "numeric",
           hour12: false};
console.log(new Intl.DateTimeFormat("en-US", options));
// → "12/19/2012, 19:00:00"

// pour utiliser la locale par défaut du navigateur :
console.log(new Intl.DateTimeFormat('default', options).format(date));
// → "12/19/2012, 19:00:00" (peut varier selon la locale du navigateur)
```

## Spécifications

| Spécification                                                                                            | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-12.1', 'Intl.DateTimeFormat')}}                     | {{Spec2('ES Int 1.0')}} | Première définition. |
| {{SpecName('ES Int 2.0', '#sec-12.1', 'Intl.DateTimeFormat')}}                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#datetimeformat-objects', 'Intl.DateTimeFormat')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.DateTimeFormat")}}

## Voir aussi

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl', 'Voir_aussi')}}
