---
title: "Intl.Locale : méthode getHourCycles()"
short-title: getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getHourCycles()`** des instances de {{JSxRef("Intl.Locale")}} retourne une liste d'un ou plusieurs identifiants de cycles horaires uniques pour cette locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée comme une propriété d'accesseur appelée `hourCycles`. Cependant, comme elle retourne un nouveau tableau à chaque accès, elle est maintenant implémentée comme une méthode pour éviter la situation où `locale.hourCycles === locale.hourCycles` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getHourCycles()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaînes de caractères représentant tous les types de cycles horaires couramment utilisés pour la `Locale`, triés par ordre de préférence décroissant. Si la `Locale` possède déjà un {{JSxRef("Intl.Locale.prototype.hourCycle", "hourCycle")}}, alors le tableau retourné contient cette seule valeur.

Ci-dessous se trouve une liste des types de cycles horaires pris en charge.

### Types de cycles horaires pris en charge

- `h12`
  - : Système horaire utilisant 1-12&nbsp;; ce qui correspond à 'h' dans les motifs. Horloge sur 12 heures, minuit commençant à 12:00 am. Utilisé, par exemple, aux États-Unis.
- `h23`
  - : Système horaire utilisant 0-23&nbsp;; ce qui correspond à 'H' dans les motifs. Horloge sur 24 heures, minuit commençant à 0:00.
- `h11`
  - : Système horaire utilisant 0-11&nbsp;; ce qui correspond à 'K' dans les motifs. Horloge sur 12 heures, minuit commençant à 0:00 am. Utilisé principalement au Japon.
- `h24`
  - : Système horaire utilisant 1-24&nbsp;; ce qui correspond à 'k' dans les motifs. Horloge sur 24 heures, minuit commençant à 24:00. N'est utilisé nulle part.

## Exemples

### Obtenir les cycles horaires pris en charge

Si l'objet `Locale` ne possède pas déjà un `hourCycle`, `getHourCycles()` liste tous les identifiants de cycles horaires couramment utilisés pour la `Locale` donnée. Pour des exemples de définition explicite d'un `hourCycle`, voir les [exemples de `hourCycle`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#exemples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl.Locale.prototype.hourCycle")}}
- [Unicode pour la clé d'extension HourCycle <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) dans la spécification Unicode locale data markup language
