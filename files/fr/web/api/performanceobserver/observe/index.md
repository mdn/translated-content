---
title: PerformanceObserver.observe()
slug: Web/API/PerformanceObserver/observe
---

{{APIRef("Performance Timeline API")}}

La méthode **`observe()`** de l'interface **[`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver)** est utilisée pour spécifier l'ensemble des types d'entrée de performance à observer. Les types d'entrée de performance sont spécifiés sous la forme d'un tableau d'objets [`DOMString`](/fr/docs/Web/API/DOMString), chacun nommant un type d'entrée ; les noms de type sont documentés sur la page [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType).

Lorsqu'une entrée de performance correspondante est enregistrée, la fonction de rappel de l'observateur de performance — définie lors de la création du [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) — est invoquée.

## Syntaxe

```js
observer.observe(options);
```

### Paramètres

- `options`

  - : Un dictionnaire `PerformanceObserverInit` avec les membres possibles suivants :

    - `entryTypes` : Un tableau d'objets [`DOMString`](/fr/docs/Web/API/DOMString), chacun spécifiant un type d'entrée de performance à observer. Ne peut pas être utilisé avec les options « `type` » ou « `buffered` ».
    - `type` : Une [`DOMString`](/fr/docs/Web/API/DOMString) unique spécifiant exactement un type d'entrée de performance à observer. Ne peut pas être utilisé avec l'option `entryTypes`.
    - `buffered` : Un indicateur booléen pour indiquer si les entrées en mémoire tampon doivent être mises en file d'attente dans la mémoire tampon de l'observateur. Ne doit être utilisé qu'avec l'option « `type` ».

    > **Note :** Voir [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) pour une liste des noms de types d'entrées de performance valides. Les types non reconnus sont ignorés, bien que le navigateur puisse afficher un message d'avertissement sur la console pour aider les développeurs à déboguer leur code. Si aucun type valide n'est trouvé, `observe()` n'a aucun effet.

## Exemple

Cet exemple crée et configure deux `PerformanceObservers` ; l'un surveille les événements `"mark"` et `"frame"`, et l'autre surveille les événements `"measure"`.

```js
const observer = new PerformanceObserver(function (list, obj) {
  let entries = list.getEntries();
  for (let i = 0; i < entries.length; i++) {
    // Traiter les événements "mark" et "famse"
  }
});
observer.observe({ entryTypes: ["mark", "frame"] });

function perf_observer(list, observer) {
  // Traiter l'événement "measure"
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({ entryTypes: ["measure"] });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
