---
title: 'Document: DOMContentLoaded event'
slug: Web/API/Document/DOMContentLoaded_event
translation_of: Web/API/Document/DOMContentLoaded_event
---
<div>{{APIRef}}</div>

<p>L'évènement <strong><code>DOMContentLoaded</code></strong> est déclenché quand le document HTML initiale est complètement chargé et analysé, sans attendre la fin du chargement des feuilles de styles, images et sous-document.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bouillonne</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Oui (bien que spécifié comme évènement simple non annulable)</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété de gestion de l’évènement</th>
   <td>Aucune</td>
  </tr>
 </tbody>
</table>

<p>Un évènement différent, {{domxref("Window/load_event", "load")}} doit être utilisé pour détecter que la page entière est chargée. On utilise couramment à tord <code>load</code> là où <code>DOMContentLoaded</code> serait plus approprié.</p>

<p>Du code JavaScript synchrone va mettre en pause la création du DOM. Si vous voulez charger le DOM le plus rapidement possible, vous pouvez faire votre code <a href="/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">(en) JavaScript asynchrone</a> et <a href="https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery">(en) optimiser le chargement des feuilles de styles</a>. Si vous chargez comme d'habitude, les feuilles de styles vont ralentir la création du DOM comme si elles étaient chargées en parallèle, en «volant» le trafique du document principale HTML.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Usage_simple">Usage simple</h3>

<pre class="brush: js">document.addEventListener('DOMContentLoaded', (event) =&gt; {
    console.log('DOM fully loaded and parsed');
});
</pre>

<h3 id="Retarde_DOMContentLoaded">Retarde DOMContentLoaded</h3>

<pre class="brush: html">&lt;script&gt;
  document.addEventListener('DOMContentLoaded', (event) =&gt; {
    console.log('DOM fully loaded and parsed');
  });

for( let i = 0; i &lt; 1000000000; i++)
{} // This synchronous script is going to delay parsing of the DOM,
   // so the DOMContentLoaded event is going to launch later.
&lt;/script&gt;
</pre>

<h3 id="Vérifie_que_le_contenu_si_le_chargement_est_déjà_fini">Vérifie que le contenu si le chargement est déjà fini</h3>

<p>L'évènement <code>DOMContentLoaded</code> peut-être déclenché avant que le script soit exécuté, donc il vaut mieux vérifier avant d'ajouter un écouteur d'évènement.</p>

<pre class="brush: js">function doSomething() {
  console.info('DOM loaded');
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', doSomething);
} else {  // `DOMContentLoaded` has already fired
  doSomething();
}
</pre>

<h3 id="Démonstration">Démonstration</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="controls"&gt;
  &lt;button id="reload" type="button"&gt;Reload&lt;/button&gt;
&lt;/div&gt;

&lt;div class="event-log"&gt;
  &lt;label&gt;Event log:&lt;/label&gt;
  &lt;textarea readonly class="event-log-contents" rows="8" cols="30"&gt;&lt;/textarea&gt;
&lt;/div&gt;</pre>

<pre class="brush: css hidden">body {
  display: grid;
  grid-template-areas: "control  log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

#reload {
  height: 2rem;
}

</pre>

<h4 id="JS">JS</h4>

<pre class="brush: js">const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () =&gt; {
  log.textContent ='';
  window.setTimeout(() =&gt; {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) =&gt; {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) =&gt; {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) =&gt; {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});

</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '160px') }}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'parsing.html#the-end:event-domcontentloaded', 'DOMContentLoaded')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'syntax.html#the-end', 'DOMContentLoaded')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Document.DOMContentLoaded_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Évènements similaires: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}} et {{domxref("Window/unload_event", "unload")}}</li>
 <li>Cet évènement sur la cible {{domxref("Window")}}: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}</li>
</ul>
