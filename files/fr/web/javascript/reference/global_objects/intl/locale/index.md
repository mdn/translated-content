---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

L'objet **`Intl.Locale`** est une propriété native de l'objet `Intl` représentant l'identifiant d'une locale Unicode.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Locale")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Résultat attendu : "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Résultat attendu : "h23" "h12"
```

## Description

L'objet **`Intl.Locale`** a été créé pour permettre une manipulation plus facile des locales Unicode. Unicode représente les locales par une chaîne de caractères, appelée _identifiant de locale_. L'identifiant de locale se compose d'un _identifiant de langue_ et de _balises d'extension_. Les identifiants de langue sont le cœur de la locale, comprenant les sous-étiquettes _langue_, _script_, _région_ et _variantes_. Les informations supplémentaires sur la locale sont stockées dans les _balises d'extension_ facultatives. Les balises d'extension contiennent des informations sur des aspects de la locale tels que le type de calendrier, le type d'horloge et le type de système de numérotation.

Traditionnellement, l'API Intl utilisait des chaînes de caractères pour représenter les locales, tout comme Unicode. C'est une solution simple et légère qui fonctionne bien. L'ajout d'une classe Locale facilite cependant l'analyse et la manipulation de la langue, du script et de la région, ainsi que des balises d'extension. Les propriétés suivantes de `Intl.Locale` correspondent aux sous-étiquettes de l'identifiant de locale Unicode&nbsp;:

| Propriété                                                    | Sous-étiquette correspondante                  |
| ------------------------------------------------------------ | ---------------------------------------------- |
| {{JSxRef("Intl/Locale/language", "language")}}               | Identifiant de langue, première partie         |
| {{JSxRef("Intl/Locale/script", "script")}}                   | Identifiant de langue, partie après `language` |
| {{JSxRef("Intl/Locale/region", "region")}}                   | Identifiant de langue, partie après `script`   |
| {{JSxRef("Intl/Locale/variants", "variants")}}               | Identifiant de langue, partie après `region`   |
| {{JSxRef("Intl/Locale/calendar", "calendar")}}               | `ca` (extension)                               |
| {{JSxRef("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` (extension)                               |
| {{JSxRef("Intl/Locale/collation", "collation")}}             | `co` (extension)                               |
| {{JSxRef("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` (extension)                               |
| {{JSxRef("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` (extension)                               |
| {{JSxRef("Intl/Locale/numeric", "numeric")}}                 | `kn` (extension)                               |

Les informations ci-dessus sont fournies telles quelles lors de la construction de l'objet `Locale`, sans consulter de base de données externe. L'objet `Intl.Locale` fournit également certaines méthodes qui retournent des informations sur les informations réelles de la locale, telles que les calendriers, les collations et les systèmes de numérotation disponibles.

## Constructeur

- {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Crée un nouvel objet `Locale`.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.Locale.prototype` et partagées par toutes les instances de `Intl.Locale`.

- {{JSxRef("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Retourne les informations de base et principales sur la `Locale` sous forme d'une sous-chaîne de la chaîne de données complète.
- {{JSxRef("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Retourne la partie de la `Locale` qui indique l'ère du calendrier de la locale.
- {{JSxRef("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Retourne si la casse est prise en compte pour les règles de collation de la locale.
- {{JSxRef("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Retourne le type de collation pour la `Locale`, utilisé pour ordonner les chaînes selon les règles de la locale.
- {{JSxRef("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances `Intl.Locale`, la valeur initiale est le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale")}}.
- {{JSxRef("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Retourne la convention de format de l'heure utilisée par la locale.
- {{JSxRef("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Retourne la langue associée à la locale.
- {{JSxRef("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Retourne le système de numérotation utilisé par la locale.
- {{JSxRef("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Retourne si la locale a un traitement spécial de la collation pour les caractères numériques.
- {{JSxRef("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Retourne la région du monde (généralement un pays) associée à la locale.
- {{JSxRef("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Retourne l'écriture utilisée pour écrire la langue particulière utilisée dans la locale.
- {{JSxRef("Intl/Locale/variants", "Intl.Locale.prototype.variants")}}
  - : Retourne les sous-tags de variantes (tels que différentes orthographes) associés à la locale.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.Locale"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) des identifiants de calendrier disponibles, selon les règles de la locale.
- {{JSxRef("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) des types de collation pour la `Locale`.
- {{JSxRef("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) des identifiants de cycle horaire, indiquant soit l'horloge de 12 heures (`"h12"`), l'horloge japonaise de 12 heures (`"h11"`), l'horloge de 24 heures (`"h23"`), ou le format inutilisé `"h24"`.
- {{JSxRef("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) des identifiants de système de numérotation disponibles selon les règles de la locale.
- {{JSxRef("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Retourne la partie indiquant l'ordre des caractères `ltr` (de gauche à droite) ou `rtl` (de droite à gauche).
- {{JSxRef("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Retourne un tableau ({{JSxRef("Array")}}) des identifiants de fuseau horaire, associés à la `Locale`.
- {{JSxRef("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Retourne les [éléments de semaine de l'UTS 35 <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) selon les règles de la locale.
- {{JSxRef("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Retourne les valeurs les plus probables pour la langue, le script et la région de la locale en fonction des valeurs existantes.
- {{JSxRef("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Tente de supprimer les informations sur la locale qui seraient ajoutées en appelant {{JSxRef("Intl/Locale/maximize", "maximize()")}}.
- {{JSxRef("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Retourne la chaîne de caractères de l'identifiant complet de la locale.

## Exemples

### Utilisation simple

Dans sa forme la plus simple, le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} prend une chaîne d'identifiant de locale comme argument&nbsp;:

```js
const us = new Intl.Locale("en-US");
```

### Utiliser le constructeur `Locale` avec un objet d'options

Le constructeur accepte également un argument optionnel sous forme d'objet de configuration, qui peut contenir plusieurs types d'extensions. Par exemple, définissez la propriété {{JSxRef("Intl/Locale/hourCycle", "hourCycle")}} de l'objet de configuration sur le type de cycle horaire souhaité, puis passez-le au constructeur&nbsp;:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Affiche "h12"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) pour `Intl.Locale` <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-locale/)
- L'objet {{JSxRef("Intl")}}
- [La spécification Unicode pour les identifiants de locale <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) dans la spécification du langage de balisage des données de locale Unicode
