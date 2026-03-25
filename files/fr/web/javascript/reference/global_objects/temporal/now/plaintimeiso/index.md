---
title: "Temporal.Now : méthode statique plainTimeISO()"
short-title: plainTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainTimeISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`plainTimeISO()`** des instances de {{JSxRef("Temporal.Now")}} des instances de {{JSxRef("Temporal.Now")}} retourne l'heure actuelle sous forme d'objet {{JSxRef("Temporal.PlainTime")}}, dans le fuseau horaire défini.

Notez que bien que la méthode contienne «&nbsp;ISO&nbsp;» dans son nom, les objets {{JSxRef("Temporal.PlainTime")}} n'ont pas de calendriers associés, car le format de l'heure n'est pas dépendant du calendrier.

## Syntaxe

```js-nolint
Temporal.Now.plainTimeISO()
Temporal.Now.plainTimeISO(timeZone)
```

### Paramètres

- `timeZone` {{Optional_Inline}}
  - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire dans lequel interpréter l'heure système. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, il peut s'agir d'un identifiant de fuseau horaire nommé, d'un identifiant de fuseau horaire avec décalage, ou d'une chaîne de date-heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).

### Valeur de retour

L'heure actuelle dans le fuseau horaire défini, sous forme d'objet {{JSxRef("Temporal.PlainTime")}}. A la même précision que {{JSxRef("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le fuseau horaire est invalide.

## Exemples

### Utiliser la méthode `plainTimeISO()`

```js
// L'heure actuelle dans le fuseau horaire du système
const time = Temporal.Now.plainTimeISO();
console.log(time); // par exemple : 06:12:34.567890123

// L'heure actuelle dans le fuseau horaire "America/New_York"
const timeInNewYork = Temporal.Now.plainTimeISO("America/New_York");
console.log(timeInNewYork); // par exemple : 23:12:34.567890123
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Now")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
