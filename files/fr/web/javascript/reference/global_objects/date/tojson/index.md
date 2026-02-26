---
title: "Date : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toJSON()`** des instances de {{JSxRef("Date")}} retourne une chaîne de caractères représentant cette date au même format ISO que {{JSxRef("Date/toISOString", "toISOString()")}}.

{{InteractiveExample("JavaScript Demo: Date.prototype.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date donnée au [format chaîne de date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_date-heure) selon le temps universel, ou `null` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Pour les dates valides, la valeur de retour est identique à celle de {{JSxRef("Date/toISOString", "toISOString()")}}.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Date` est converti en chaîne de caractères. Cette méthode est généralement destinée, par défaut, à sérialiser utilement les objets {{JSxRef("Date")}} lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés à l'aide du constructeur {{JSxRef("Date/Date", "Date()")}} comme reviver de {{JSxRef("JSON.parse()")}}.

La méthode tente d'abord de convertir sa valeur `this` [en une valeur primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_valeur_primitive) en appelant successivement [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (avec l'indication `"number"`), {{JSxRef("Object/valueOf", "valueOf()")}}, puis {{JSxRef("Object/toString", "toString()")}}. Si le résultat est un nombre [non fini](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite), `null` est retourné. (Cela correspond généralement à une date invalide, dont {{JSxRef("Date/valueOf", "valueOf()")}} retourne {{JSxRef("NaN")}}.) Sinon, si la valeur primitive convertie n'est pas un nombre ou est un nombre fini, la valeur de retour de {{JSxRef("Date/toISOString", "this.toISOString()")}} est retournée.

Notez que la méthode ne vérifie pas si la valeur `this` est un objet {{JSxRef("Date")}} valide. Cependant, appeler `Date.prototype.toJSON()` sur des objets qui ne sont pas des `Date` échoue sauf si la représentation primitive numérique de l'objet est `NaN`, ou si l'objet possède aussi une méthode `toISOString()`.

## Exemple

### Utiliser la méthode `toJSON()`

```js
const jsonDate = new Date().toJSON(); // '1970-01-01T00:00:00.000Z'
const retourVersDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Sérialisation et désérialisation

Lors de l'analyse d'un JSON contenant des chaînes de caractères représentant des dates, vous pouvez utiliser le constructeur {{JSxRef("Date/Date", "Date()")}} pour les restaurer en objets date d'origine.

```js
const donneeFichier = {
  author: "Maria",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const reponse = JSON.stringify(donneeFichier);

// Imaginons une transmission par le réseau

const donnee = JSON.parse(reponse, (cle, valeur) => {
  if (cle === "createdAt" || cle === "updatedAt") {
    return new Date(valeur);
  }
  return valeur;
});

console.log(donnee);
```

> [!NOTE]
> Le reviver de `JSON.parse()` doit être adapté à la structure attendue du contenu, car la sérialisation est _irréversible_&nbsp;: il n'est pas possible de distinguer une chaîne représentant une date d'une chaîne normale.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.toLocaleDateString()")}}
- La méthode {{JSxRef("Date.prototype.toTimeString()")}}
- La méthode {{JSxRef("Date.prototype.toUTCString()")}}
