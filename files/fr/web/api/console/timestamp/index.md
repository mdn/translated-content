---
title: Console.timeStamp()
slug: Web/API/console/timeStamp
---

{{APIRef("Console API")}}{{Non-standard_header}}

Ajoute un seul marqueur à l'outil [Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) ou [Waterfall](/fr/docs/Outils/Performance/Waterfall) du navigateur. Cela vous permet de corréler un point de votre code avec les autres événements enregistrés dans la chronologie, tels que les événements de mise en page et de peinture.

Vous pouvez éventuellement fournir un argument pour étiqueter l'horodatage, et cette étiquette sera ensuite affichée à côté du marqueur.

{{AvailableInWorkers}}

## Syntaxe

```js
console.timeStamp(label);
```

## Paramètres

- `label`
  - : Étiquette pour l'horodatage. Facultatif.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Console.time()")}}
- {{domxref("Console.timeEnd()")}}
- [Ajout d'un marqueur de temps pour le Waterfall](/fr/docs/Outils/Performance/Waterfall#Marqueurs_de_temps)
