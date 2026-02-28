---
title: "Intl.DateTimeFormat : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.DateTimeFormat")}} retourne un nouvel objet avec des propriétés reflétant les options calculées lors de l'initialisation de cet objet `DateTimeFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DateTimeFormat.prototype.resolvedOptions()")}}

```js interactive-example
const region1 = new Intl.DateTimeFormat("zh-CN", { timeZone: "UTC" });
const options1 = region1.resolvedOptions();

console.log(options1.locale);
// Résultat attendu : "zh-CN"

console.log(options1.calendar);
// Résultat attendu : "gregory"

console.log(options1.numberingSystem);
// Résultat attendu : "latn"
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `DateTimeFormat`. L'objet possède les propriétés suivantes, dans l'ordre indiqué&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} pour la locale réellement utilisée, déterminée par le processus de [négociation de locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Seules les clés d'extension Unicode `ca`, `hc` et `nu`, si elles sont demandées, peuvent être incluses dans le résultat.
- `calendar`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou en utilisant la clé d'extension Unicode `"ca"`, avec une valeur par défaut si nécessaire. Il s'agit d'un [type de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pris en charge pour cette locale. La valeur par défaut dépend de la locale.
- `numberingSystem`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou en utilisant la clé d'extension Unicode `"nu"`, avec une valeur par défaut si nécessaire. Il s'agit d'un [système de numérotation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numérotation_pris_en_charge) pris en charge pour cette locale. La valeur par défaut dépend de la locale.
- `timeZone`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec une valeur par défaut si nécessaire. Il s'agit d'un [nom de fuseau horaire IANA](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages). La valeur par défaut correspond au fuseau horaire par défaut de l'environnement d'exécution.

    > [!NOTE]
    > La standardisation de `Temporal` exige que les navigateurs utilisent le même identifiant que celui initialement défini, sans le convertir en un autre alias. Voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations.

- `hourCycle` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou en utilisant la clé d'extension Unicode `"hc"`, avec une valeur par défaut si nécessaire. Si `hour12` a été fourni dans `options`, cela prévaut sur les autres réglages de `hourCycle`. Cette propriété n'est présente que si les options résolues incluent également `hour` ou `timeStyle`. Elle vaut soit `"h11"`, `"h12"`, `"h23"` ou `"h24"`. La valeur par défaut dépend de la locale, bien que `"h24"` ne soit jamais une valeur par défaut.
- `hour12` {{Optional_Inline}}
  - : Calculé à partir de `hourCycle`. Cette propriété n'est présente que si les options résolues incluent également `hour` ou `timeStyle`. Elle vaut `true` si `hourCycle` est `"h11"` ou `"h12"`, et `false` si `hourCycle` est `"h23"` ou `"h24"`.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{Optional_Inline}}
  - : Les valeurs résultant de la correspondance de format entre les propriétés correspondantes de l'argument `options` et les combinaisons et représentations disponibles pour la mise en forme des dates et heures dans la locale sélectionnée. Certaines de ces propriétés peuvent ne pas être présentes, ce qui indique que les composants correspondants ne seront pas représentés dans la sortie formatée. `weekday`, `era` et `dayPeriod` valent soit `"narrow"`, `"short"` ou `"long"`&nbsp;; `year`, `day`, `hour`, `minute` et `second` valent soit `"numeric"`, `"2-digit"` ou `"narrow"`&nbsp;; `month` vaut soit `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` ou `"long"`&nbsp;; `fractionalSecondDigits` vaut soit `1`, `2` ou `3`&nbsp;; `timeZoneName` vaut soit `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"` ou `"longGeneric"`.

    Si ces propriétés ont été demandées dans `options`, le constructeur empêche que `dateStyle` et `timeStyle` soient définis, donc le groupe ci-dessous ne sera jamais présent.

- `dateStyle`, `timeStyle` {{Optional_Inline}}
  - : Les valeurs fournies pour ces propriétés dans l'argument `options`. Elles valent soit `"full"`, `"long"`, `"medium"`, `"short"` ou `"none"`. Certaines de ces propriétés peuvent ne pas être présentes, ce qui indique que les composants correspondants ne seront pas représentés dans la sortie formatée.

    Si ces propriétés ont été demandées dans `options`, le constructeur empêche que des options individuelles de composant date ou heure soient définies, donc le groupe ci-dessus ne sera jamais présent.

    > [!NOTE]
    > Bien que `dateStyle` et `timeStyle` soient des raccourcis pour les styles individuels de composant date et heure, les styles exacts (dépendant de la locale) auxquels ils correspondent ne sont pas inclus dans les options résolues. Cela garantit que le résultat de `resolvedOptions()` peut être passé directement au constructeur `Intl.DateTimeFormat()` (car un objet `options` contenant à la fois `dateStyle` ou `timeStyle` et des styles individuels de composant date ou heure n'est pas valide).

## Exemples

### Utiliser la méthode `resolvedOptions()`

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (parce que "de-XX" n'existe pas)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Obtenir le fuseau horaire et les préférences de locale de l'utilisateur·ice

Le constructeur `Intl.DateTimeFormat` sans aucun argument utilise les paramètres système actuels. Vous pouvez utiliser `resolvedOptions()` pour obtenir le fuseau horaire actuel de l'utilisateur·ice ainsi que le calendrier et le système de numérotation préférés de la locale&nbsp;:

```js
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
systemOptions.timeZone; // par exemple, "Europe/Brussels" ou "Asia/Riyadh"
systemOptions.calendar; // par exemple, "gregory" ou "islamic-umalqura"
systemOptions.numberingSystem; // par exemple, "latn" ou "arab"
systemOptions.locale; // par exemple, "nl-BE" ou "ar-SA"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DateTimeFormat")}}
