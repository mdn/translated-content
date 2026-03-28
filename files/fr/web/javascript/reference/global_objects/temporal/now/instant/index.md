---
title: "Temporal.Now : méthode statique instant()"
short-title: instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.Now.instant()`** retourne l'heure actuelle sous forme d'objet {{JSxRef("Temporal.Instant")}}.

## Syntaxe

```js-nolint
Temporal.Now.instant()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{JSxRef("Temporal.Instant")}} représentant l'heure actuelle, avec une précision éventuellement [réduite](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now#réduire_la_précision_temporelle).

## Exemples

### Mesurer le temps écoulé

L'exemple suivant mesure deux instants dans le temps et calcule la [durée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration) entre eux, puis obtient la durée totale en millisecondes&nbsp;:

```js
const start = Temporal.Now.instant();
// Faire quelque chose qui prend du temps
const end = Temporal.Now.instant();
const duration = end.since(start);
console.log(duration.total("milliseconds"));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Now")}}
- L'objet {{JSxRef("Temporal.Instant")}}
