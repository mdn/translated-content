---
title: "Intl.Locale : méthode getTextInfo()"
short-title: getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getTextInfo()`** des instances de {{JSxRef("Intl.Locale")}} retourne le sens d'écriture des caractères comme `ltr` (pour gauche à droite) ou `rtl` (pour droite à gauche) pour la locale.

> [!NOTE]
> Dans certaines versions de certains navigateurs, cette méthode était implémentée en tant que propriété d'accès appelée `textInfo`. Cependant, comme elle retourne un nouvel objet à chaque accès, elle est maintenant implémentée en tant que méthode pour éviter la situation où `locale.textInfo === locale.textInfo` retourne `false`. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

## Syntaxe

```js-nolint
getTextInfo()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet représentant les informations de composition de texte associées aux données de la locale définies dans [les éléments de disposition UTS 35 <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements). Il possède les propriétés suivantes&nbsp;:

- `direction`
  - : Une chaîne de caractères indiquant la direction du texte pour la locale. Peut être soit `"ltr"` (de gauche à droite) soit `"rtl"` (de droite à gauche).

## Exemples

### Obtenir les informations textuelles

Retourne les directions de texte prises en charge pour une `Locale` donnée.

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTextInfo()); // { direction: "rtl" }
console.log(ar.getTextInfo().direction); // "rtl"
```

```js
const es = new Intl.Locale("es");
console.log(es.getTextInfo()); // { direction: "ltr" }
console.log(es.getTextInfo().direction); // "ltr"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
