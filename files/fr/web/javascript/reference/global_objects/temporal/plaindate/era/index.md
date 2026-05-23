---
title: "Temporal.PlainDate : propriété era"
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

La propriété d'accesseur **`era`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne une chaîne de caractères en minuscules spécifique au calendrier représentant l'ère de cette date, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier grégorien, il s'agit soit de `"ce"`, soit de `"bce"`.

## Valeur

Tous les [calendriers définis](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) ont des ères entièrement définies par la spécification.

- Les calendriers suivants ont une seule ère&nbsp;:
  - `buddhist`&nbsp;: `"be"`
  - `coptic`&nbsp;: `"am"`
  - `ethioaa`&nbsp;: `"aa"`
  - `hebrew`&nbsp;: `"am"`
  - `indian`&nbsp;: `"shaka"`
  - `persian`&nbsp;: `"ap"`
- Les calendriers suivants ont deux ères. L'une est _l'ère de l'époque_, dans laquelle `eraYear` commence à 1 et est identique à {{JSxRef("Temporal/PlainDate/year", "year")}}. L'autre est l'ère inverse, dans laquelle `eraYear` commence également à 1 et est égal à `1 - year` (donc `eraYear: 1` correspond à l'année `0`, `eraYear: 2` à l'année `-1`, etc.)&nbsp;:
  - `gregory`&nbsp;: ère de l'époque `"ce"`, ère inverse `"bce"`
  - `islamic-civil`, `islamic-tbla`, `islamic-umalqura`&nbsp;: ère de l'époque `"ah"`, ère inverse `"bh"`
  - `roc`&nbsp;: ère de l'époque `"roc"`, ère inverse `"broc"`
- Le calendrier `ethiopic` a une ère `"am"` qui est l'ère de l'époque. Les années avant `1` appartiennent à l'ère `"aa"`, dont `eraYear` est égal à `year - 5500` (donc `eraYear: -1000` correspond à l'année `-6500`, `eraYear: 1` correspond à l'année `-5499`, jusqu'à `eraYear: 5500` comme année `0`).
- Le calendrier `japanese` ajoute une ère pour chaque nouvel empereur, donc l'année et l'ère de sortie pour une date future peuvent ne pas correspondre à l'année et à l'ère d'entrée lorsque votre code s'exécute sur une version future du moteur, et nous ne les énumérerons pas ici. L'année de chaque ère commence à 1. C'est également le seul calendrier connu pour avoir des ères commençant au milieu d'une année, ce qui signifie que la même `year` peut correspondre à différentes paires `(era, eraYear)` selon le mois et le jour.

  > [!WARNING]
  > À partir d'octobre 2025, dans le calendrier `japanese`, les dates antérieures au 23-10-1868 ISO (la date de début de l'année 1 Meiji) ne fonctionnent pas comme prévu dans les navigateurs de deux manières. Premièrement, [CLDR avait la mauvaise date de début pour l'ère Meiji <sup>(angl.)</sup>](https://unicode-org.atlassian.net/browse/CLDR-11375), ce qui fait que les implémentations du calendrier étendent l'ère Meiji plus loin dans le passé qu'elle ne l'était réellement. Deuxièmement, la prochaine [proposition de l'ère et du code de mois Intl <sup>(angl.)</sup>](https://tc39.es/proposal-intl-era-monthcode/) définit que les dates antérieures au 01-01-1873 ISO devraient utiliser les ères grégoriennes, mais les navigateurs ont traditionnellement utilisé des approximations des ères japonaises antérieures à la place. Le calendrier `japanese` a été adopté le 1er janvier 6 Meiji / 01-01-1873 ISO, donc ces problèmes n'affectent que les dates proleptiques.

- Les autres [calendriers définis](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge)&nbsp;: `chinese`, `dangi`, `iso8601`, n'utilisent pas d'ères et retournent `undefined`.

Le mutateur d'accesseur de `era` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée. Lors de la définition des ères, les alias `"ad"` et `"bc"` sont également acceptés pour les ères `"ce"` et `"bce"` des calendriers `gregory` ou `japanese`.

> [!NOTE]
> Cette chaîne de caractères n'est pas destinée à être affichée aux utilisateurs. Utilisez {{JSxRef("Temporal/PlainDate/toLocaleString", "toLocaleString()")}} avec les options appropriées pour obtenir une chaîne de caractères localisée.

## Exemples

### Utiliser la propriété `era`

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.era); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.era); // ce

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.era); // bce

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.era); // reiwa
```

### Changer la valeur de `era`

Vous ne pouvez définir `era` que pour les calendriers qui les prennent en charge. Par exemple, le calendrier ISO 8601 n'a pas d'ères. Notez que vous devez fournir `era` et `eraYear` ensemble.

```js
const date = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
const newDate = date.with({ era: "bc", eraYear: 100 });
console.log(newDate.toString()); // -000099-07-01[u-ca=gregory]

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
const newDate2 = date2.with({ era: "meiji", eraYear: 1 });
console.log(newDate2.toString()); // 1868-07-01[u-ca=japanese]
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
- La propriété {{JSxRef("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
