---
title: "Intl.Locale : méthode getCollations()"
short-title: getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getCollations()`** des instances de {{JSxRef("Intl.Locale")}} retourne une liste d'un ou plusieurs [types de collation <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) pour cette locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée comme une propriété d'accesseur appelée `collations`. Cependant, comme elle retourne un nouveau tableau à chaque accès, elle est maintenant implémentée comme une méthode pour éviter la situation où `locale.collations === locale.collations` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getCollations()
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaînes de caractères représentant tous les types de collation couramment utilisés pour la `Locale`, triés par ordre alphabétique, les valeurs `standard` et `search` étant toujours exclues. Si la `Locale` possède déjà une {{JSxRef("Intl.Locale.prototype.collation", "collation")}}, alors le tableau retourné contient cette seule valeur.

Pour une liste des types de collation pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_collation_pris_en_charge).

## Exemples

### Obtenir les types de collation pris en charge

Si l'objet `Locale` ne possède pas déjà un `collation`, `getCollations()` liste tous les types de collation couramment utilisés pour la `Locale` donnée. Pour des exemples de définition explicite d'un `collation`, voir les [exemples de `collation`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#exemples).

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- La propriété {{JSxRef("Intl.Locale.prototype.collation")}}
