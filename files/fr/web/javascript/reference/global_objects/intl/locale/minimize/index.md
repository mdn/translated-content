---
title: "Intl.Locale : méthode minimize()"
short-title: minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`minimize()`** des instances de {{JSxRef("Intl.Locale")}} tente de retirer les informations qui auraient été ajoutées à cette locale lors d'un appel à {{JSxRef("Intl/Locale/maximize", "maximize()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Locale.prototype.minimize()")}}

```js interactive-example
const english = new Intl.Locale("en-Latn-US");
const korean = new Intl.Locale("ko-Kore-KR");
const arabic = new Intl.Locale("ar-Arab-EG");

console.log(english.minimize().baseName);
// Résultat attendu : "en"

console.log(korean.minimize().baseName);
// Résultat attendu : "ko"

console.log(arabic.minimize().baseName);
// Résultat attendu : "ar"
```

## Syntaxe

```js-nolint
minimize()
```

### Paramètres

Aucun.

### Valeur de retour

Une instance {{JSxRef("Intl.Locale")}} dont la propriété `baseName` retourne le résultat de l'exécution de l'algorithme [de suppression des sous-balises vraisemblables <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Likely_Subtags) sur _{{JSxRef("Intl/Locale/baseName", "locale.baseName")}}_.

## Description

Cette méthode effectue l'opération inverse de {{JSxRef("Intl/Locale/maximize", "maximize()")}}, en retirant les fragments de langue, de script ou de région de l'identifiant de langue de la locale (essentiellement le contenu de `baseName`). Cela est utile lorsqu'il y a des sous-balises superflues dans l'identifiant de langue&nbsp;; par exemple, `"en-Latn"` peut être simplifié en `"en"`, puisque `"Latn"` est le seul script utilisé pour écrire l'anglais. `minimize()` n'affecte que les sous-balises principales qui composent [l'identifiant de langue <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)&nbsp;: les sous-balises de langue, de script et de région. Les autres sous-balises après le `"-u"` dans l'identifiant de locale sont appelées sous-balises d'extension et ne sont pas affectées par la méthode `minimize()`. Des exemples de ces sous-balises incluent {{JSxRef("Intl/Locale/hourCycle", "hourCycle")}}, {{JSxRef("Intl/Locale/calendar", "calendar")}}, et {{JSxRef("Intl/Locale/numeric", "numeric")}}.

## Exemples

### Utiliser la méthode `minimize()`

```js
const maLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(maLocale.baseName); // Affiche "fr-Latn-FR"
console.log(maLocale.toString()); // Affiche "fr-Latn-FR-u-ca-gregory-hc-h12"

const maLocaleMinimisee = maLocale.minimize();

// Affiche "fr", car le français est écrit uniquement avec l'alphabet
// latin et est le plus probablement parlé en France.
console.log(maLocaleMinimisee.baseName);

// Affiche "fr-u-ca-gregory-hc-h12".
// Notez que les sous-balises d'extension (après "-u") restent
// inchangées.
console.log(maLocaleMinimisee.toString());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl/Locale/baseName", "baseName")}}
