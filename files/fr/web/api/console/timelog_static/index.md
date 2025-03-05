---
title: "console : méthode statique timeLog()"
slug: Web/API/console/timeLog_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

La méthode **`console.timeLog()`** affiche la valeur courante du chronomètre précédemment démarré par un appel à [`console.time()`](/fr/docs/Web/API/console/time_static).

## Syntaxe

```js-nolint
timeLog()
timeLog(libelle)
timeLog(libelle, val1)
timeLog(libelle, val1, /* …, */ valN)
```

### Paramètres

- `libelle` {{optional_inline}}
  - : Le nom du chronomètre dont on souhaite afficher la mesure dans la console. Si cet argument est absent, c'est le libellé `"default"` qui est utilisé.
- `valN` {{optional_inline}}
  - : Des valeurs additionnelles à afficher dans la console après la mesure temporelle.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Description

La méthode `console.timeLog()` affiche la durée mesurée jusqu'à présent pour un chronomètre.

On peut passer un nom comme argument à cette méthode, ce sera alors la durée du chronomètre (précédemment créé avec un appel à [`console.time()`](/fr/docs/Web/API/console/time_static)) avec ce nom qui sera affichée&nbsp;:

```js
console.time("réticulateur de spleens");
reticulerLesSpleens();
console.timeLog("réticulateur de spleens");
// réticulateur de spleens : 650ms
```

Si le nom n'est pas fourni, ce sera la durée du chronomètre par défaut qui sera affiché&nbsp;:

```js
console.time();
reticulerLesSpleens();
console.timeLog();
// default : 780ms
```

```js
console.time("default");
reticulerLesSpleens();
console.timeLog();
// default : 780ms
```

S'il n'y a pas de chronomètre associé existant, `timeLog()` affichera un avertissement&nbsp;:

```plain
Le minuteur « nom du chronomètre » n'existe pas.
```

On peut aussi fournir des valeurs supplémentaires, à afficher après la durée&nbsp;:

```js
console.time();
reticulerLesSpleens();
console.timeLog("default", "Coucou", "monde");
// default : 780ms Coucou monde
```

Voir [la section sur les chronomètres de la documentation de `console`](/fr/docs/Web/API/console#chronomètres) pour plus de détails et d'exemples.

## Exemples

```js
console.time("ma mesure de temps");
alert("Cliquez pour continuer");
console.timeLog("ma mesure de temps");
alert("Faire d'autres trucs…");
console.timeEnd("ma mesure de temps");
```

Avec le fragment de code ci-avant, on affichera le temps écoulé après que la personne a fermé la première fenêtre modale, puis le temps total pris pour fermer les deux fenêtres&nbsp;:

```plain
ma mesure de temps : 1287 ms
ma mesure de temps : 2808 ms - chronomètre arrêté
```

On notera que le nom du chronomètre est affiché avec la durée lors de l'appel à `timeLog()`, puis lors de l'arrêt. Quand on appelle `timeEnd()`, on a en plus le message «&nbsp;chronomètre arrêté&nbsp;» qui précise que le chronomètre est terminé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`console.time()`](/fr/docs/Web/API/console/time_static)
- [`console.timeEnd()`](/fr/docs/Web/API/console/timeEnd_static)
