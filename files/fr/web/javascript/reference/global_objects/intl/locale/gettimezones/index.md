---
title: "Intl.Locale : méthode getTimeZones()"
short-title: getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getTimeZones()`** des instances de {{JSxRef("Intl.Locale")}} retourne une liste des fuseaux horaires pris en charge pour cette locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée en tant que propriété d'accès appelée `timeZones`. Cependant, comme elle retourne un nouveau tableau à chaque accès, elle est maintenant implémentée en tant que méthode pour éviter la situation où `locale.timeZones === locale.timeZones` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getTimeZones()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaînes de caractères représentant les fuseaux horaires pris en charge pour la `Locale` associée, chaque valeur étant un [nom canonique de fuseau horaire IANA](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages), trié par ordre alphabétique. Si l'identifiant de la locale ne contient pas de sous-étiquette de région, la valeur renvoyée est `undefined`.

> [!NOTE]
> La normalisation de `Temporal` exige que les navigateurs renvoient toujours l'identifiant principal dans la base de données IANA, qui peut changer au fil du temps. Consultez [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations.

## Exemples

### Obtenir les fuseaux horaires pris en charge

Liste des fuseaux horaires pris en charge pour une `Locale` donnée.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getTimeZones()); // ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getTimeZones()); // ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTimeZones()); // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- [La base de données IANA pour les fuseaux horaires <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) sur Wikipedia
