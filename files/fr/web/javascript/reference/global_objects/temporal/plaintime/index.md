---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L'objet **`Temporal.PlainTime`** représente une heure sans date ni fuseau horaire&nbsp;; par exemple, un évènement récurrent qui se produit à la même heure chaque jour. Il est fondamentalement représenté comme une combinaison de valeurs d'heure, de minute, de seconde, de milliseconde, de microseconde et de nanoseconde.

## Description

Un `PlainTime` est essentiellement la partie temps d'un objet {{JSxRef("Temporal.PlainDateTime")}}, avec les informations de date supprimées. Comme les informations de date et d'heure n'ont pas beaucoup d'interaction, toutes les informations générales sur les propriétés de temps sont documentées ici.

### Format RFC 9557

Les objets `PlainTime` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante&nbsp;:

```plain
HH:mm:ss.sssssssss
```

- `HH`
  - : Un nombre à deux chiffres compris entre `00` et `23`. Il peut être précédé du désignateur de temps `T` ou `t`.
- `mm` {{Optional_Inline}}
  - : Un nombre à deux chiffres compris entre `00` et `59`. Par défaut `00`.
- `ss.sssssssss` {{Optional_Inline}}
  - : Un nombre à deux chiffres compris entre `00` et `59`. Peut être suivi facultativement d'un `.` ou `,` et d'un à neuf chiffres. Par défaut `00`. Les composants `HH`, `mm` et `ss` peuvent être séparés par `:` ou rien. Vous pouvez omettre soit `ss` seul, soit `ss` et `mm`, donc l'heure peut être sous l'une des trois formes&nbsp;: `HH`, `HH:mm` ou `HH:mm:ss.sssssssss`.

En option, vous pouvez inclure la date, le décalage horaire, l'identifiant du fuseau horaire et le calendrier, au format [`PlainDateTime`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557), mais ces éléments seront ignorés. Une chaîne de caractères contenant uniquement une date sera rejetée. Les autres annotations au format `[clé=valeur]` sont également ignorées, et elles ne doivent pas avoir le drapeau critique.

Lors de la sérialisation, vous pouvez configurer les chiffres fractionnaires de la seconde.

## Constructeur

- {{JSxRef("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
  - : Crée un nouvel objet `Temporal.PlainTime` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
  - : Retourne un nombre (-1, 0 ou 1) indiquant si la première heure est avant, identique ou après la deuxième heure. Équivaut à comparer les champs heure, minute, seconde, milliseconde, microseconde et nanoseconde un par un.
- {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
  - : Crée un nouvel objet `Temporal.PlainTime` à partir d'un autre objet `Temporal.PlainTime`, d'un objet avec des propriétés de temps ou d'une chaîne de caractères au format [RFC 9557](#format_rfc_9557).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.PlainTime.prototype` et partagées par toutes les instances de `Temporal.PlainTime`.

- {{JSxRef("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.PlainTime`, la valeur initiale est le constructeur {{JSxRef("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}.
- {{JSxRef("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
  - : Retourne un entier de 0 à 23 représentant le composant heure de cette heure.
- {{JSxRef("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
  - : Retourne un entier de 0 à 999 représentant le composant microseconde (10<sup>-6</sup> seconde) de cette heure.
- {{JSxRef("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
  - : Retourne un entier de 0 à 999 représentant le composant milliseconde (10<sup>-3</sup> seconde) de cette heure.
- {{JSxRef("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}
  - : Retourne un entier de 0 à 59 représentant le composant minute de cette heure.
- {{JSxRef("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
  - : Retourne un entier de 0 à 999 représentant le composant nanoseconde (10<sup>-9</sup> seconde) de cette heure.
- {{JSxRef("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
  - : Retourne un entier de 0 à 59 représentant le composant seconde de cette heure.
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.PlainTime"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.PlainTime` représentant cette heure avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}), en faisant le tour de l'horloge si nécessaire.
- {{JSxRef("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
  - : Retourne `true` si cette heure est équivalente en valeur à une autre heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}), et `false` sinon. Elles sont comparées par leurs valeurs temporelles. Équivaut à `Temporal.PlainTime.compare(this, other) === 0`.
- {{JSxRef("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}}
  - : Retourne un nouvel objet `Temporal.PlainTime` représentant cette heure arrondie à l'unité donnée.
- {{JSxRef("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}) et cette heure. La durée est positive si l'autre heure est avant cette heure, et négative si elle est après.
- {{JSxRef("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.PlainTime` représentant cette heure reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}), en faisant le tour de l'horloge si nécessaire.
- {{JSxRef("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant cette heure dans le même [format RFC 9557](#format_rfc_9557) que l'appel à {{JSxRef("Temporal/PlainTime/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères représentant cette heure dans un format sensible à la langue.
- {{JSxRef("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant cette heure dans le [format RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette heure et une autre heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}). La durée est positive si l'autre heure est après cette heure, et négative si elle est avant.
- {{JSxRef("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}}
  - : Lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainTime` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.PlainTime` représentant cette heure avec certains champs remplacés par de nouvelles valeurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- L'objet {{JSxRef("Temporal.PlainDateTime")}}
