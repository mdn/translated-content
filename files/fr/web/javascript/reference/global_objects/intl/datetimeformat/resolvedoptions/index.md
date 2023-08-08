---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
---

{{JSRef}}

La méthode **`Intl.DateTimeFormat.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent les options de format et de locale pour les heures et dates, calculées pendant l'initialisation de l'objet [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntaxe

```js
resolvedOptions();
```

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options de format et de locale pour les heures et dates, calculées pendant l'initialisation de l'objet [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

## Description

La valeur renvoyée par cette méthode contient les propriétés suivantes :

- `locale`
  - : La balise de langue BCP 47 qui est réellement utilisée. Si des extensions Unicode étaient fournies avec la balise d'origine et sont supportées pour la locale utilisée, les paires de clés-valeurs seront incluses dans `locale`.
- `calendar`
  - : Le calendrier utilisé (ex. `"gregory"` pour le calendrier grégorien).
- `numberingSystem`
  - : Les valeurs demandées pour les extensions Unicode `"ca"` et `"nu"` ou leurs valeurs par défaut.
- `timeZone`
  - : La valeur fournie par l'argument `options` pour cette propriété ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) (qui représente le fuseau horaire de l'environnement) si aucune valeur n'a été fournie. Les applications ne doivent pas s'appuyer sur ce dernier cas. En effet, de futures versions pourraient renvoyer une chaîne de caractères représentant le fuseau horaire de l'environnement et non pas `undefined`.
- `hour12`
  - : La valeur fournie pour cette propriété dans l'argument `options`.
- `weekday`, `era`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZoneName`
  - : Les valeurs qui correspondent entre les propriétés de l'argument `options` et les combinaisons disponibles dans l'environnement pour les formats de date et d'heure pour la locale. Certaines de ces propriétés peuvent ne pas être présentes, cela indique que les composants indiqués ne seront pas représentés.

## Exemples

### Utiliser la méthode resolvedOptions()

```js
var germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
var usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
