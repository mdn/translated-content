---
title: "Intl.Locale : méthode maximize()"
short-title: maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`maximize()`** des instances de {{JSxRef("Intl.Locale")}} permet d'obtenir les valeurs les plus vraisemblables pour la langue, le script et la région de cette locale en fonction des valeurs existantes.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.Locale.prototype.maximize()")}}

```js interactive-example
const english = new Intl.Locale("en");
const korean = new Intl.Locale("ko");
const arabic = new Intl.Locale("ar");

console.log(english.maximize().baseName);
// Résultat attendu : "en-Latn-US"

console.log(korean.maximize().baseName);
// Résultat attendu : "ko-Kore-KR"

console.log(arabic.maximize().baseName);
// Résultat attendu : "ar-Arab-EG"
```

## Syntaxe

```js-nolint
maximize()
```

### Paramètres

Aucun.

### Valeur de retour

Une instance {{JSxRef("Intl.Locale")}} dont la propriété `baseName` retourne le résultat de l'algorithme [d'ajout de sous-balises vraisemblables <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Likely_Subtags) exécuté sur _{{JSxRef("Intl/Locale/baseName", "locale.baseName")}}_.

## Description

Il est parfois utile d'identifier les sous-balises les plus vraisemblables d'un identifiant de langue en fonction d'un identifiant de langue incomplet. L'algorithme d'ajout de sous-balises vraisemblables nous offre cette fonctionnalité. Par exemple, étant donné l'identifiant de langue `"en"`, l'algorithme retourne `"en-Latn-US"`, car l'anglais ne peut être écrit qu'avec l'alphabet latin et est le plus probablement utilisé aux États-Unis, étant donné que c'est le pays anglophone le plus peuplé. Cette fonctionnalité est fournie aux programmeurs JavaScript avec la méthode `maximize()`. `maximize()` n'affecte que les sous-balises principales qui composent [l'identifiant de langue <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)&nbsp;: les sous-balises de langue, de script et de région. Les autres sous-balises après le `"-u"` dans l'identifiant de locale sont appelées sous-balises d'extension et ne sont pas affectées par la méthode `maximize()`. Des exemples de ces sous-balises incluent {{JSxRef("Intl/Locale/hourCycle", "hourCycle")}}, {{JSxRef("Intl/Locale/calendar", "calendar")}} et {{JSxRef("Intl/Locale/numeric", "numeric")}}.

## Exemples

### Utiliser la méthode `maximize()`

```js
const maLocale = new Intl.Locale("fr", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(maLocale.baseName); // Affiche "fr"
console.log(maLocale.toString()); // Affiche "fr-u-ca-gregory-hc-h12"
const maLocaleMaximisee = maLocale.maximize();

// Affiche "fr-Latn-FR". Les balises "Latn" et "FR" sont ajoutées,
// car le français ne s'écrit qu'avec l'alphabet latin et est le plus
// probablement parlé en France.
console.log(maLocaleMaximisee.baseName);

// Affiche "fr-Latn-FR-u-ca-gregory-hc-h12".
// Notez que les balises d'extension (après "-u") restent inchangées.
console.log(maLocaleMaximisee.toString());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl/Locale/baseName", "baseName")}}
- [Sous-balises vraisemblables](https://www.unicode.org/reports/tr35/#Likely_Subtags) dans la spécification du langage de balisage des données de locale Unicode
