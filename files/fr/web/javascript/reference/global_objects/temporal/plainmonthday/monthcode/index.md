---
title: "Temporal.PlainMonthDay : propriété monthCode"
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`monthCode`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne une chaîne de caractères spécifique au calendrier représentant le mois de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

En général, elle est `M` suivie d'un numéro de mois sur deux chiffres. Pour les mois intercalaires, il s'agit du code du mois précédent suivi de `L` (même si, conceptuellement, il peut être rattaché au mois suivant&nbsp;; par exemple, dans le calendrier hébraïque, Adar I a le code `M05L` mais Adar II a le code `M06`). Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.

Parce que {{JSxRef("Temporal/PlainDate/month", "month")}} est un indice à l'intérieur d'une année, et que `PlainMonthDay` n'a pas d'année, il n'existe pas de propriété `month` pour `PlainMonthDay`. Par conséquent, `monthCode` est utilisé pour représenter le mois d'une manière indépendante de l'année.

Le mutateur d'accesseur de `monthCode` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainMonthDay/with", "with()")}} pour créer un nouvel objet `Temporal.PlainMonthDay` avec la valeur souhaitée.

Pour des informations générales et davantage d'exemples, voir {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Exemples

### Utiliser la propriété `monthCode`

```js
const md = Temporal.PlainMonthDay.from("07-01"); // calendrier ISO 8601
console.log(md.monthCode); // "M07"

const md2 = Temporal.PlainMonthDay.from("2021-05-01[u-ca=chinese]");
console.log(md2.monthCode); // "M03"

const md3 = Temporal.PlainMonthDay.from("2023-04-01[u-ca=chinese]");
console.log(md3.monthCode); // "M02L"
```

### Changer la valeur de `monthCode`

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md.with({ monthCode: "M03" });
console.log(newMD.toString()); // 03-01
```

Pour d'autres calendriers, tant qu'il existe une année dans laquelle le mois-jour est valide, le mois et le jour est considéré comme valide, et l'année de référence sous-jacente peut donc changer. Par exemple&nbsp;:

```js
const md = Temporal.PlainMonthDay.from({
  monthCode: "M02",
  day: 30,
  calendar: "hebrew",
});
console.log(md.toString()); // 1971-11-18[u-ca=hebrew]
console.log(md.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Heshvan
// 30 Heshvan n'existe que dans l'année 1971, et cette année n'est pas intercalaire
const newMD = md.with({ monthCode: "M05L" });
console.log(newMD.toString()); // 1970-03-08[u-ca=hebrew]
console.log(newMD.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Adar I
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
- La propriété {{JSxRef("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
