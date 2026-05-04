---
title: "Temporal.PlainDate : propriété monthCode"
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/monthCode
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La propriété d'accesseur **`monthCode`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne une chaîne de caractères spécifique au calendrier représentant le mois de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

## Valeur

Le format de base de `monthCode` est `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, il s'agit du code du mois précédent suivi de `L` (même si c'est conceptuellement un dérivé du mois suivant ; par exemple, dans le calendrier hébraïque, Adar I a le code `M05L` mais Adar II a le code `M06`).

Tous les calendriers ont au moins 12 mois, avec des codes allant de `"M01"` à `"M12"`.

Tous les [calendriers définis](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) ont des codes de mois entièrement définis par la spécification. La plupart n'ont pas de règles de mois distinctes de `iso8601`. Les calendriers `coptic`, `ethioaa` et `ethiopic` ont un mois supplémentaire `M13`. Les calendriers `chinese` et `dangi` peuvent avoir 12 mois intercalaires supplémentaires, avec des codes allant de `"M01L"` à `"M12L"`. Le calendrier `hebrew` a un mois intercalaire, `"M05L"` (Adar I).

> [!NOTE]
> N'assumez pas que `monthCode` est une chaîne de caractères conviviale pour l'utilisateur·ice&nbsp;; utilisez `toLocaleString()` pour formater votre date à la place. En général, ne mettez pas en cache le nom des mois dans un tableau ou un objet. Même si `monthCode` correspond généralement au nom du mois dans un calendrier, nous recommandons toujours de calculer le nom du mois en utilisant, par exemple, `date.toLocaleString("fr-FR", { calendar: date.calendarId, month: "long" })`.

Le mutateur d'accesseur de `monthCode` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée.

Lorsque vous définissez la date sur une année différente, le `monthCode` reste le même, mais le `month` peut changer si l'année cible a une structure de mois intercalaires différente. Si le `monthCode` actuel n'existe pas dans l'année cible et que la méthode n'est pas configurée pour rejeter, alors pour les calendriers `chinese` et `dangi`, le mois précédent est utilisé à la place (par exemple, de `"M03L"` à `"M03"`, ce qui correspond de 闰三月 à 三月). Pour le calendrier `hebrew`, le mois _suivant_ est utilisé à la place (de `"M05L"` à `"M06"`, ce qui correspond de Adar I à Adar II).

## Exemples

### Utiliser la propriété `monthCode`

```js
const date = Temporal.PlainDate.from("2021-07-01"); // calendrier ISO 8601
console.log(date.monthCode); // "M07"
console.log(date.month); // 7

const date2 = Temporal.PlainDate.from("2021-05-01[u-ca=chinese]");
console.log(date2.monthCode); // "M03"
console.log(date2.month); // 3 ; c'est le 20 mars dans le calendrier chinois

const date3 = Temporal.PlainDate.from("2023-05-01[u-ca=chinese]");
console.log(date3.monthCode); // "M03"
console.log(date3.month); // 4, bien que ce soit aussi mars (M03) !

const date4 = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(date4.monthCode); // "M02L"
console.log(date4.month); // 3, ce mois est un mois intercalaire, c'est-à-dire un double février
```

### Changer la valeur de `monthCode`

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ month: 2 });
console.log(newDate.toString()); // 2021-02-01
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainDate/add", "add()")}} ou {{JSxRef("Temporal/PlainDate/subtract", "subtract()")}} pour déplacer un certain nombre de mois à partir de la date actuelle.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ months: 3 });
console.log(newDate.toString()); // 2021-10-01
```

Par défaut, `with()` contraint le jour à la plage de valeurs valides. Les deux exemples suivants définiront le mois sur le dernier mois de l'année&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastMonth = date.with({ month: date.monthsInYear }); // 2021-12-01
const lastMonth2 = date.with({ month: Number.MAX_VALUE }); // 2021-12-01
```

### Formater les noms de mois

Ne faites pas ceci&nbsp;:

<!-- prettier-ignore -->
```js example-bad
const names = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const date = Temporal.PlainDate.from("2021-07-01");
console.log(names[date.month - 1]); // July
```

Ne faites pas non plus ceci&nbsp;:

<!-- prettier-ignore -->
```js example-bad
const names = {
  "M01": "January", "M02": "February", "M03": "March", "M04": "April",
  "M05": "May", "M06": "June", "M07": "July", "M08": "August",
  "M09": "September", "M10": "October", "M11": "November", "M12": "December",
};

const date = Temporal.PlainDate.from("2021-07-01");
console.log(names[date.monthCode]); // July
```

Au lieu de cela, faites toujours ceci, ce qui est plus convivial et moins sujet aux erreurs, et se généralise facilement à d'autres calendriers&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(
  date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" }),
); // July
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
