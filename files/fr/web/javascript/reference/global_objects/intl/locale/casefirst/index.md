---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.caseFirst`** est une propriété (via un accesseur) qui renvoie si la casse est prise en compte par la locale pour ses règles de collation (celles qui permettent d'ordonner des chaînes de caractères entre elles).

## Description

Les règles de collation des locales sont utilisées afin de déterminer la façon dont les chaînes sont ordonnées pour cette locale. Certaines locales utilisent la casse (minuscule ou majuscule) dans ce processus de collation. Cette règle peut être exprimée via la propriété `caseFirst` d'une instance `Locale`.

Cette propriété peut avoir une des 3 valeurs suivantes :

| Valeur  | Description                                                |
| ------- | ---------------------------------------------------------- |
| `upper` | Les majuscules devraient être triées avant les minuscules. |
| `lower` | Les minuscules devraient être triées avant les majuscules. |
| `false` | La casse n'a pas d'importance pour le tri des chaînes.     |

## Exemples

### Définir `caseFirst` grâce à la chaîne de description de la locale

Le constructeur [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale) prend comme premier argument une chaîne de caractères qui décrit la locale. On peut allonger cette chaîne avec certaines valeurs afin de l'affiner.

Dans la [spécification Unicode sur les clés des extensions](https://www.unicode.org/reports/tr35/), `caseFirst` correspond à la clé `kf`. `kf`. Il est possible d'ajouter des extensions à la chaîne identifiant la locale en la concaténant à `-u` puis en concaténant la clé de l'extension qu'on souhaite préciser (ici `-kf`) puis en ajoutant enfin la valeur pour cette extension (ici `upper`) :

```js
let caseFirstStr = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(caseFirstStr.caseFirst); // Prints "upper"
```

### Définir `caseFirst` via l'objet de configuration

Le constructeur [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale) permet d'utiliser un objet de configuration comme deuxième argument. Les propriétés de cet objet seront autant d'extensions Unicode à utiliser pour la locale. Ici, on peut utiliser un objet avec la propriété `caseFirst` pour indiquer l'impact de la casse sur la collation de cette locale :

```js
let caseFirstObj = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(us12hour.caseFirst); // affichera "lower" dans la console.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- [Spécification Unicode pour la collation selon la casse](https://github.com/unicode-org/cldr/blob/master/common/bcp47/collation.xml#L49)
