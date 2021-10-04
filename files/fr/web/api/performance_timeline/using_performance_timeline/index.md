---
title: Utilisation de Performance Timeline
slug: Web/API/Performance_Timeline/Using_Performance_Timeline
tags:
  - Guide
  - Performance
  - Performance Web
  - Web Performance
translation_of: Web/API/Performance_Timeline/Using_Performance_Timeline
---
{{DefaultAPISidebar("Performance Timeline API")}}

La norme **[Performance Timeline](https://w3c.github.io/performance-timeline/)** définit des extensions de l'interface [`Performance`](/fr/docs/Web/API/Performance) pour prendre en charge les mesures de latence côté client au sein des applications.

La norme comprend également des interfaces qui permettent à une application d'être notifiée lorsque des événements de performance spécifiques se produisent. Ensemble, ces interfaces peuvent être utilisées pour aider à identifier les goulots d'étranglement des performances d'une application.

## Extensions de `Performance`

**Performance Timeline** étend l'objet [`Performance`](/fr/docs/Web/API/Performance) avec trois méthodes qui fournissent différents mécanismes pour obtenir un ensemble d'[enregistrements des performances (métriques)](/fr/docs/Web/API/PerformanceEntry), selon les critères de filtrage spécifiés. L'exemple suivant montre l'utilisation de ces méthodes [`getEntries()`](/fr/docs/Web/API/Performance/getEntries), [`getEntriesByName()`](/fr/docs/Web/API/Performance/getEntriesByName) et [`getEntriesByType()`](/fr/docs/Web/API/Performance/getEntriesByType).

```js
function log(s) {
  let o = document.getElementsByTagName("output")[0];
  o.innerHTML += s + " <br>";
}
function do_work(n) {
  for (let i=0 ; i < n; i++) {
      let m = Math.random();
  }
}
function print_perf_entry(pe) {
  log("..name: " + pe.name +
      "; entryType: " + pe.entryType +
      "; startTime: " + pe.startTime +
      "; duration: " + pe.duration);
}
function print_PerformanceEntries() {
  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Crée quelques entrées de performance via les méthodes mark() et measure()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  do_work(50000);
  performance.measure("Measure1", "Begin", "End");

  // Utilise getEntries() pour itérer toutes les entrées.
  let p = performance.getEntries();
  for (let i=0; i < p.length; i++) {
    log("Toutes les entrées [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Utilise getEntries(name, entryType) pour obtenir des entrées spécifiques.
  p = performance.getEntries({name : "Measure1", entryType:   "measure"});
  for (let i=0; i < p.length; i++) {
    log("Begin et Measure [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Utilisez getEntriesByType() pour obtenir toutes les entrées "mark".
  p = performance.getEntriesByType("mark");
  for (let i=0; i < p.length; i++) {
    log ("Mark seulement [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Utilise getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin".
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i < p.length; i++) {
    log ("Begin et Mark [" + i + "]");
    print_perf_entry(p[i]);
  }
}
```

## L'interface `PerformanceEntry`

L'interface [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) encapsule une seule _entrée de performance_, c'est-à-dire une seule métrique de performance. Cette interface possède quatre propriétés et un _sérialiseur_ JSON : ([`toJSON()`](/fr/docs/Web/API/Performance/toJSON). L'exemple suivant montre l'utilisation de ces propriétés.

```js
function print_PerformanceEntry(ev) {
  let properties = ["name", "entryType", "startTime", "duration"];

  // Crée quelques entrées de performance
  performance.mark("Start");
  do_work(50000);
  performance.mark("Stop");
  performance.measure("measure-1");

  let p = performance.getEntries();
  for (let i=0; i < p.length; i++) {
    log("PerfEntry[" + i + "]");
    for (let =0; j < properties.length; j++) {
      // check each property in window.performance
      let supported = properties[j] in p[i];
      if (supported) {
        let pe = p[i];
        log("... " + properties[j] + " = " + pe[properties[j]]);
      } else {
        log("... " + properties[j] + " = N'est pas pris en charge");
      }
    }
  }
}
```

Cette interface comprend également une méthode [`toJSON()`](/fr/docs/Web/API/PerformanceEntry/toJSON) qui renvoie la sérialisation de l'objet [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry). Les exemples suivants montrent l'utilisation de cette méthode.

```js
function PerfEntry_toJSON() {

  // Crée quelques entrées de performance
  performance.mark("mark-1");
  performance.mark("mark-2");
  performance.measure("meas-1", "mark-1", "mark-2");

  let peList = performance.getEntries();
  let pe = peList[0];

  if (pe.toJSON === undefined) {
    log("PerformanceEntry.toJSON() n'est PAS pris en charge");
    return;
  }

  // Imprime l'objet PerformanceEntry
  let json = pe.toJSON();
  let s = JSON.stringify(json);
  log("PerformanceEntry.toJSON = " + s);
}
```

## Observateurs de performance

{{SeeCompatTable}}

Les interfaces _Performance Observer_ permettent à une application d'enregistrer un _observateur_ pour des types d'événements de performance spécifiques, et lorsqu'un de ces types d'événements est enregistré, l'application est _notifiée_ de l'événement via la fonction de rappel de l'observateur qui a été spécifiée au moment, où l'observateur a été créé. Lorsque l'observateur (rappel ou « callback ») est invoqué, les paramètres du rappel incluent une _[liste d'entrées de l'observateur de performance](/fr/docs/Web/API/PerformanceObserverEntryList)_ qui contient uniquement des [entrées de performance](/fr/docs/Web/API/PerformanceEntry) _observées_. C'est-à-dire que la liste ne contient que des entrées pour les types d'événements qui ont été spécifiés lorsque la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe) de l'observateur a été invoquée.

L'exemple suivant montre comment enregistrer deux observateurs : le premier s'enregistre pour plusieurs types d'événements et le second ne s'enregistre que pour un seul type d'événement.

```js
function PerformanceObservers() {
  // Crée un observateur pour tous les types d'événements de performance
  let observe_all = new PerformanceObserver(function(list, obs) {
    let perfEntries;

    // Imprime toutes les entrées
    perfEntries = list.getEntries();
    for (let i=0; i < perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }

    // Imprime les entrées nommées "Begin" avec le type "mark".
    perfEntries = list.getEntriesByName("Begin", "mark");
    for (let i=0; i < perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }

    // Imprime les entrées avec le type "mark".
    perfEntries = list.getEntriesByType("mark");
    for (let i=0; i < perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }
  });
  // inscrit tous les types d'événements liés aux performances
  observe_all.observe({entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server']});

  // Crée un observateur pour le seul type d'événement "mark".
  let observe_mark = new PerformanceObserver(function(list, obs) {
    let perfEntries = list.getEntries();
    // Ne devrait avoir que des entrées de type "mark".
    for (let i=0; i < perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }
  });
  // inscrit uniquement l'événement "mark".
  observe_mark.observe({entryTypes: ['mark']});
}
function print_perf_entry(pe) {
  log("name: " + pe.name +
      "; entryType: " + pe.entryType +
      "; startTime: " + pe.startTime +
      "; duration: " + pe.duration);
}
```

L'interface [liste des entrées de l'observateur de performance](/fr/docs/Web/API/PerformanceObserverEntryList) possède les trois mêmes méthodes `getEntries*()` que l'interface [`Performance`](/fr/docs/Web/API/Performance) et ces méthodes sont utilisées pour récupérer les entrées de performance _observées_ dans le rappel de l'observateur. Ces méthodes ont été utilisées dans l'exemple cité ci-dessus.

## Spécifications

Les interfaces décrites dans ce document sont définies dans la norme **Performance Timeline** qui comporte deux niveaux :

| Spécification                                                                                                                                                | Statut                                                   | Commentaire                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| {{SpecName('Performance Timeline',  '#extensions-to-the-performance-interface', 'Performance   extensions')}}             | {{Spec2('Performance Timeline')}}             | Définition des méthodes `getEntries()`, `getEntriesByType()` et `getEntriesByName()`. |
| {{SpecName('Performance Timeline Level 2',  '#extensions-to-the-performance-interface', 'Performance   extensions')}} | {{Spec2('Performance Timeline Level 2')}} | Modifications de l'interface `getEntries()`.                                          |

## Voir aussi

- [Performance Timeline API](/fr/docs/Web/API/Performance_Timeline)
- [Une introduction aux API de chronométrage des performances du Web](https://siusin.github.io/perf-timing-primer/)
