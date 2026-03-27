---
title: "Temporal.Now : méthode statique plainDateISO()"
short-title: plainDateISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`plainDateISO()`** des instances de {{JSxRef("Temporal.Now")}} retourne la date actuelle sous forme d'objet {{JSxRef("Temporal.PlainDate")}}, dans le calendrier ISO 8601 et le fuseau horaire défini.

## Syntaxe

```js-nolint
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Paramètres

- `timeZone` {{Optional_Inline}}
  - : Une chaîne de caractères ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire dans lequel interpréter l'heure système. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire avec décalage, ou une chaîne de date-heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).

### Valeur de retour

La date actuelle dans le fuseau horaire défini, sous forme d'objet {{JSxRef("Temporal.PlainDate")}} utilisant le calendrier ISO 8601.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le fuseau horaire est invalide.

## Exemples

### Utiliser la méthode `plainDateISO()`

```js
// La date actuelle dans le fuseau horaire du système
const date = Temporal.Now.plainDateISO();
console.log(date); // par exemple : 2021-10-01

// La date actuelle dans le fuseau horaire "America/New_York"
const dateInNewYork = Temporal.Now.plainDateISO("America/New_York");
console.log(dateInNewYork); // par exemple : 2021-09-30
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Now")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
