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
<div>{{DefaultAPISidebar("Performance Timeline API")}}</div>

<p>La norme <strong><a href="https://w3c.github.io/performance-timeline/">Performance Timeline</a></strong> définit des extensions de l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> pour prendre en charge les mesures de latence côté client au sein des applications.</p>

<p>La norme comprend également des interfaces qui permettent à une application d'être notifiée lorsque des événements de performance spécifiques se produisent. Ensemble, ces interfaces peuvent être utilisées pour aider à identifier les goulots d'étranglement des performances d'une application.</p>

<h2 id="Performance_extensions">Extensions de <code>Performance</code></h2>

<p><strong>Performance Timeline</strong> étend l'objet <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> avec trois méthodes qui fournissent différents mécanismes pour obtenir un ensemble d'<a href="/fr/docs/Web/API/PerformanceEntry">enregistrements des performances (métriques)</a>, selon les critères de filtrage spécifiés. L'exemple suivant montre l'utilisation de ces méthodes <a href="/fr/docs/Web/API/Performance/getEntries"><code>getEntries()</code></a>, <a href="/fr/docs/Web/API/Performance/getEntriesByName"><code>getEntriesByName()</code></a> et <a href="/fr/docs/Web/API/Performance/getEntriesByType"><code>getEntriesByType()</code></a>.</p>

<pre class="brush: js">
function log(s) {
  let o = document.getElementsByTagName("output")[0];
  o.innerHTML += s + " &lt;br&gt;";
}
function do_work(n) {
  for (let i=0 ; i &lt; n; i++) {
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
  for (let i=0; i &lt; p.length; i++) {
    log("Toutes les entrées [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Utilise getEntries(name, entryType) pour obtenir des entrées spécifiques.
  p = performance.getEntries({name : "Measure1", entryType:   "measure"});
  for (let i=0; i &lt; p.length; i++) {
    log("Begin et Measure [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Utilisez getEntriesByType() pour obtenir toutes les entrées "mark".
  p = performance.getEntriesByType("mark");
  for (let i=0; i &lt; p.length; i++) {
    log ("Mark seulement [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Utilise getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin".
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i &lt; p.length; i++) {
    log ("Begin et Mark [" + i + "]");
    print_perf_entry(p[i]);
  }
}
</pre>

<h2 id="PerformanceEntry_interface">L'interface <code>PerformanceEntry</code></h2>

<p>L'interface <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> encapsule une seule <em>entrée de performance</em>, c'est-à-dire une seule métrique de performance. Cette interface possède quatre propriétés et un <em>sérialiseur</em> JSON : (<a href="/fr/docs/Web/API/Performance/toJSON"><code>toJSON()</code></a>. L'exemple suivant montre l'utilisation de ces propriétés.</p>

<pre class="brush: js">
function print_PerformanceEntry(ev) {
  let properties = ["name", "entryType", "startTime", "duration"];

  // Crée quelques entrées de performance
  performance.mark("Start");
  do_work(50000);
  performance.mark("Stop");
  performance.measure("measure-1");

  let p = performance.getEntries();
  for (let i=0; i &lt; p.length; i++) {
    log("PerfEntry[" + i + "]");
    for (let =0; j &lt; properties.length; j++) {
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
</pre>

<p>Cette interface comprend également une méthode <a href="/fr/docs/Web/API/PerformanceEntry/toJSON"><code>toJSON()</code></a> qui renvoie la sérialisation de l'objet <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a>. Les exemples suivants montrent l'utilisation de cette méthode.</p>

<pre class="brush: js">
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
</pre>

<h2 id="Performance_Observers">Observateurs de performance</h2>

<p>{{SeeCompatTable}}</p>

<p>Les interfaces <em>Performance Observer</em> permettent à une application d'enregistrer un <em>observateur</em> pour des types d'événements de performance spécifiques, et lorsqu'un de ces types d'événements est enregistré, l'application est <em>notifiée</em> de l'événement via la fonction de rappel de l'observateur qui a été spécifiée au moment, où l'observateur a été créé. Lorsque l'observateur (rappel ou « callback ») est invoqué, les paramètres du rappel incluent une <em><a href="/fr/docs/Web/API/PerformanceObserverEntryList">liste d'entrées de l'observateur de performance</a></em> qui contient uniquement des <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performance</a> <em>observées</em>. C'est-à-dire que la liste ne contient que des entrées pour les types d'événements qui ont été spécifiés lorsque la méthode <a href="/fr/docs/Web/API/PerformanceObserver/observe"><code>observe()</code></a> de l'observateur a été invoquée.</p>

<p>L'exemple suivant montre comment enregistrer deux observateurs : le premier s'enregistre pour plusieurs types d'événements et le second ne s'enregistre que pour un seul type d'événement.</p>

<pre class="brush: js">
function PerformanceObservers() {
  // Crée un observateur pour tous les types d'événements de performance
  let observe_all = new PerformanceObserver(function(list, obs) {
    let perfEntries;

    // Imprime toutes les entrées
    perfEntries = list.getEntries();
    for (let i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }

    // Imprime les entrées nommées "Begin" avec le type "mark".
    perfEntries = list.getEntriesByName("Begin", "mark");
    for (let i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }

    // Imprime les entrées avec le type "mark".
    perfEntries = list.getEntriesByType("mark");
    for (let i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }
  });
  // inscrit tous les types d'événements liés aux performances
  observe_all.observe({entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server']});

  // Crée un observateur pour le seul type d'événement "mark".
  let observe_mark = new PerformanceObserver(function(list, obs) {
    let perfEntries = list.getEntries();
    // Ne devrait avoir que des entrées de type "mark".
    for (let i=0; i &lt; perfEntries.length; i++) {
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
</pre>

<p>L'interface <a href="/fr/docs/Web/API/PerformanceObserverEntryList">liste des entrées de l'observateur de performance</a> possède les trois mêmes méthodes <code>getEntries*()</code> que l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> et ces méthodes sont utilisées pour récupérer les entrées de performance <em>observées</em> dans le rappel de l'observateur. Ces méthodes ont été utilisées dans l'exemple cité ci-dessus.</p>

<h2 id="Specifications">Spécifications</h2>

<p>Les interfaces décrites dans ce document sont définies dans la norme <strong>Performance Timeline</strong> qui comporte deux niveaux :</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Performance Timeline',  '#extensions-to-the-performance-interface', 'Performance   extensions')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition des méthodes <code>getEntries()</code>, <code>getEntriesByType()</code> et <code>getEntriesByName()</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline Level 2',  '#extensions-to-the-performance-interface', 'Performance   extensions')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Modifications de l'interface <code>getEntries()</code>.</td>
    </tr>
  </tbody>
 </table>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Performance_Timeline">Performance Timeline API</a></li>
  <li><a href="https://siusin.github.io/perf-timing-primer/">Une introduction aux API de chronométrage des performances du Web</a></li>
</ul>
