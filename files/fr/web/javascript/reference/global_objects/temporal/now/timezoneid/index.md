---
title: "Temporal.Now : méthode statique timeZoneId()"
short-title: timeZoneId()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.Now.timeZoneId()`** retourne un [identifiant de fuseau horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) représentant le fuseau horaire actuel du système. La plupart des systèmes retournent un identifiant de fuseau horaire principal tel que `"America/New_York"`, bien qu'un identifiant de fuseau horaire avec décalage tel que `"-04:00"` soit également possible. L'identifiant de fuseau horaire retourné est le fuseau horaire par défaut utilisé par les autres méthodes de `Temporal.Now`.

## Syntaxe

```js-nolint
Temporal.Now.timeZoneId()
```

### Paramètres

Aucun.

### Valeur de retour

Un [identifiant de fuseau horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) valide représentant le fuseau horaire actuel du système. L'identifiant de fuseau horaire retourné n'est jamais un identifiant de fuseau horaire non principal (alias). Par exemple, il retournerait toujours `"Asia/Kolkata"` (nouveau nom) au lieu de `"Asia/Calcutta"` (ancien nom). Pour plus d'informations, voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages).

Si l'implémentation ne prend pas en charge les fuseaux horaires, la méthode retourne toujours `"UTC"`.

## Exemples

### Obtenir le fuseau horaire actuel du système

```js
console.log(Temporal.Now.timeZoneId()); // par exemple : "America/New_York"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Now")}}
