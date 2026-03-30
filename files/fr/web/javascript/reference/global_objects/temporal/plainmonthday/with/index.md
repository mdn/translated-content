---
title: "Temporal.PlainMonthDay : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`with()`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne un nouvel objet `Temporal.PlainMonthDay` représentant ce mois et ce jour avec certains champs remplacés par de nouvelles valeurs. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme l'accesseur des champs du mois et du jour.

Il n'existe pas de moyen évident de créer un nouvel objet `Temporal.PlainMonthDay` représentant le même mois et le même jour dans un calendrier différent. Pour remplacer sa propriété `calendarId`, vous devez le convertir en un objet {{JSxRef("Temporal.PlainDate")}} en utilisant {{JSxRef("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}, changer le calendrier, puis le reconvertir.

## Syntaxe

```js-nolint
with(info)
with(info, options)
```

### Paramètres

- `info`
  - : Un objet contenant au moins une des propriétés reconnues par {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} (sauf `calendar`)&nbsp;: `day`, `era` et `eraYear`, `month`, `monthCode`, `year`. Les propriétés non définies utilisent les valeurs du mois et du jour d'origine. Vous devez fournir l'année si et seulement si vous fournissez `month` et que le calendrier n'est pas `iso8601`. Vous n'avez besoin de fournir qu'un seul de `month` ou `monthCode`, et un seul de `era` et `eraYear` ou `year`, et l'autre sera mis à jour en conséquence.
- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors plage. Valeurs possibles&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors plage.

### Valeur de retour

Un nouvel objet `Temporal.PlainMonthDay`, où les champs définis dans `info` qui ne sont pas `undefined` sont remplacés par les valeurs correspondantes, et le reste des champs est copié à partir de la date d'origine.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet.
    - `options` n'est pas un objet ou est `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors plage, et `options.overflow` est défini sur `"reject"`.
    - Si l'année est fournie, le calendrier n'est pas `iso8601`, et l'année n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de `-271821` à `275760`.

## Exemples

### Utiliser la méthode `with()`

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMd = md.with({ day: 2 });
console.log(newMd.toString()); // "07-02"
```

Pour plus d'exemples, consultez la documentation des propriétés individuelles qui peuvent être définies en utilisant `with()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode statique {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
