---
title: "Intl.Locale : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des instances de {{JSxRef("Intl.Locale")}} retourne [l'identifiant complet de la locale <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) pour cette locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Locale.prototype.toString()", "taller")}}

```js interactive-example
const french = new Intl.Locale("fr-Latn-FR", {
  calendar: "gregory",
  hourCycle: "h12",
});
const korean = new Intl.Locale("ko-Kore-KR", {
  numeric: true,
  caseFirst: "upper",
});

console.log(french.toString());
// Résultat attendu : "fr-Latn-FR-u-ca-gregory-hc-h12"

console.log(korean.toString());
// Résultat attendu : "ko-Kore-KR-u-kf-upper-kn"
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

La chaîne de caractères Unicode identifiant la _locale_.

## Description

L'objet `Locale` est une représentation JavaScript d'un identifiant de locale Unicode. Les informations concernant une locale particulière (langue, script, type de calendrier, etc.) peuvent être encodées dans une chaîne de caractères identifiant la locale. Pour faciliter le travail avec ces identifiants de locale, l'objet `Locale` a été introduit en JavaScript. Appeler la méthode `toString` sur un objet `Locale` renverra la chaîne de caractères d'identifiant pour cette locale particulière. La méthode `toString` permet de fournir des instances de `Locale` comme argument aux constructeurs `Intl` existants, de les sérialiser en JSON ou de les utiliser dans tout autre contexte où une représentation exacte sous forme de chaîne de caractères est utile.

## Exemples

### Utiliser la méthode `toString()`

```js
const maLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(maLocale.baseName); // Affiche "fr-Latn-FR"
console.log(maLocale.toString()); // Affiche "fr-Latn-FR-u-ca-gregory-hc-h12"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl/Locale/baseName", "baseName")}}
