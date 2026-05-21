---
title: "Temporal.PlainDate : propriété year"
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/year
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La propriété d'accesseur **`year`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier représentant le nombre d'années de cette date par rapport au début d'une année d'époque spécifique au calendrier. Cette propriété a la même fonction que la paire {{JSxRef("Temporal/PlainDate/era", "era")}}/{{JSxRef("Temporal/PlainDate/eraYear", "eraYear")}} en tant qu'identifiant unique d'une année dans un calendrier. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

## Valeur

Habituellement, l'année 1 est soit la première année de la dernière ère, soit l'année ISO 8601 `0001`. Comme `year` est relatif au début de l'année d'époque, et non à la date d'époque, si l'époque se situe au milieu de l'année (ce qui n'est connu que pour le calendrier `japanese`), cette année aura la même valeur de `year` avant et après la date de début de l'ère (pour le calendrier `japanese`, `year` est le même que l'année ISO 8601).

Tous les [calendriers définis](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) ont des années arithmétiques entièrement définies par la spécification.

- Les calendriers suivants ont la même année d'époque que ISO 8601&nbsp;: `chinese`, `dangi`, `gregory`, `japanese`, dans lesquels `year: 1` correspond à l'année ISO `1`.
- Le calendrier `buddhist` utilise l'époque bouddhiste de 543 av. J.-C., donc `year: 1` correspond à l'année ISO `-542`.
- Le calendrier `coptic` utilise l'époque copte de 284 ap. J.-C., donc `year: 1` correspond à l'année ISO `284`.
- Le calendrier `ethioaa` utilise l'époque Anno Mundi de 5493 av. J.-C., donc `year: 1` correspond à l'année ISO `-5492`.
- Le calendrier `ethiopic` utilise l'époque éthiopique de 8 ap. J.-C., donc `year: 1` correspond à l'année ISO `8`.
- Le calendrier `hebrew` utilise l'époque Anno Mundi de 3761 av. J.-C., donc `year: 1` correspond à l'année ISO `-3760`.
- Le calendrier `indian` utilise l'époque Śaka de 79 ap. J.-C., donc `year: 1` correspond à l'année ISO `79`.
- Les calendriers suivants utilisent l'époque Hijri de 622 ap. J.-C.&nbsp;: `islamic-civil`, `islamic-tbla`, `islamic-umalqura`, `persian`, dans lesquels `year: 1` correspond à l'année ISO `622`.
- Le calendrier `roc` utilise l'époque Minguo de 1912 ap. J.-C., donc `year: 1` correspond à l'année ISO `1912`.

> [!NOTE]
> Pour les calendriers `chinese` et `dangi`, les données CLDR utilisent par défaut l'époque Huangdi de 2637 av. J.-C., mais Temporal a défini l'utilisation de l'époque ISO 8601 pour simplifier.

Le mutateur d'accesseur de `year` est `undefined`. Vous ne pouvez pas changer cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `year`

```js
const date = Temporal.PlainDate.from("2021-07-01"); // calendrier ISO 8601
console.log(date.year); // 2021

const date2 = Temporal.PlainDate.from("-002021-07-01");
console.log(date2.year); // -2021

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date3.year); // 2021 ; bien que le calendrier japonais utilise des ères,
// il n'y a pas « d'ère par défaut » évidente, donc l'année est la même que l'année ISO

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=hebrew]");
console.log(date4.year); // 5781 ; le calendrier hébraïque utilise l'époque Anno Mundi, qui commence en 3761 av. J.-C.
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
- La propriété {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
- La propriété {{JSxRef("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
