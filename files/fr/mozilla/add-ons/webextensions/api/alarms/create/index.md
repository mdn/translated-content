---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
tags:
  - API
  - Add-ons
  - Créations
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/create
---
{{AddonSidebar()}}

Cette méthode permet de créer une nouvelle alarme pour la session de navigation en cours. Une alarme peut se déclencher une ou plusieurs fois. Une alarme est effacée après qu'elle se soit déclenchée pour la dernière fois.

## Syntaxe

```js
browser.alarms.create(
  name,        // une valeur string optionnelle
  alarmInfo    // une valeur object optionnelle
)
```

### Paramètres

- `name`{{optional_inline}}
  - : `string`. Le nom utilisé pour l'alarme. Par défaut, la chaîne utilisée sera la chaîne vide. Cette valeur pourra être utilisée pour indiquer une alarme donnée avec les méthodes {{WebExtAPIRef('alarms.get()')}} et {{WebExtAPIRef('alarms.clear()')}}. Il sera également disponible pour {{WebExtAPIRef('alarms.onAlarm')}} sous la forme de la propriété `name` de l'objet {{WebExtAPIRef('alarms.Alarm')}} passé au gestionnaire d'évènement. Pour une extension donnée, les noms d'alarmes sont toujours uniques (dans le cadre d'une seule extension). Si le nom donné ici correspond à une alarme existante pour cette extension, l'alarme existante sera supprimée et ne se déclenchera pas.
- `alarmInfo`{{optional_inline}}

  - : `object`. Un objet de configuration qui indique le moment du premier déclenchement comme valeur absolue (`when`) ou relative (`delayInMinutes`). Pour que l'alarme se repète, on utilisera le champ `periodInMinutes`.

    Sur Chrome, à moins que l'extension ne soit chargée, les alarmes créées ne sont pas autorisées à se déclencher plus d'une fois par minute. Si une extension tente de définir `delayInMinutes` avec une valeur strictement inférieure à 1 ou avec une valeur strictement inférieure à 1 dans le futur, l'alarme se déclenchera 1 minute après ce délai. Si une extension essaie de définir `periodInMinutes` avec une valeur strictement inférieure à 1, l'alarme se déclenchera alors chaque minute.

    L'objet `alarmInfo` peut contenir les propriétés suivantes :

    - `when`{{optional_inline}}
      - : `double`. Le moment où l'alarme se déclenchera en premier. L'instant est indiquée comme une valeur absolue, exprimée en [millisecondes depuis epoch](https://fr.wikipedia.org/wiki/Heure_Unix). Pour obtenir le nombre de millisecondes entre l'époque et l'heure actuelle, on pourra utiliser {{jsxref("Date.now")}}. Si cette valeur est utilisée, il ne faut pas fournir `delayInMinutes`.
    - `delayInMinutes`{{optional_inline}}
      - : `double`. Le moment où l'alarme se déclenchera en premier exprimée de façon relative au moment où l'alarme est créée. Si cette option est utilisée, il ne faut pas fournir `when`.
    - `periodInMinutes`{{optional_inline}}
      - : `double`. Si cette valeur est indiquée, l'alarme sera répétée périodiquement (toutes les `periodInMinutes` minutes) après le premier déclenchement. Si cette valeur est indiquée, il n'est pas obligatoire de fournir `when` ou `delayInMinutes` : l'alarme se déclenchera au bout de `periodInMinutes`. Si `periodInMinutes` n'est pas indiquée, l'alarme ne se déclenchera qu'une seule fois.

## Exemples

### Alarme vide

```js
const delayInMinutes = 5;

browser.alarms.create({
  delayInMinutes
});
```

### Alarme relative périodique

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes
});
```

### Alarme périodique absolue

```js
const when = 1545696000;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  when,
  periodInMinutes
});
```

## Compatibilité du navigateur

{{Compat("webextensions.api.alarms.create")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.alarms`](https://developer.chrome.com/extensions/alarms).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
