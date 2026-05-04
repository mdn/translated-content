---
title: "Intl.Locale : méthode getNumberingSystems()"
short-title: getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getNumberingSystems()`** des instances de {{JSxRef("Intl.Locale")}} retourne une liste d'un ou plusieurs identifiants de systèmes de numération uniques pour cette locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée comme une propriété d'accesseur appelée `numberingSystems`. Cependant, comme elle retourne un nouveau tableau à chaque accès, elle est maintenant implémentée comme une méthode pour éviter la situation où `locale.numberingSystems === locale.numberingSystems` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getNumberingSystems()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaînes de caractères représentant tous les systèmes de numération couramment utilisés pour la `Locale`, triés par ordre de préférence décroissant. Si la `Locale` possède déjà un {{JSxRef("Intl.Locale.prototype.numberingSystem", "numberingSystem")}}, alors le tableau retourné contient cette seule valeur.

Pour une liste des types de systèmes de numération pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge).

## Exemples

### Obtenir les systèmes de numération utilisés et pris en charge

Si l'objet `Locale` ne possède pas déjà un `numberingSystem`, `getNumberingSystems()` liste tous les systèmes de numération couramment utilisés pour la `Locale` donnée. Pour des exemples de définition explicite d'un `numberingSystem`, voir les [exemples de `numberingSystem`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#exemples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl.Locale.prototype.numberingSystem")}}
- [Détails du standard Unicode sur les systèmes de numération <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/master/common/supplemental/numberingSystems.xml)
