---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
translation_of: Web/API/DOMHighResTimeStamp
---
<p>{{APIRef("High Resolution Time")}}</p>

<p>Le type <code><strong>DOMHighResTimeStamp</strong></code> est un <code>double</code> et est utilisé pour stocker une valeur temporelle. La valeur peut représenter un point dans le temps ou la différence entre deux points dans le temps.</p>

<p>L'unité est la milliseconde et sa précision est en principe de 5 µs (microsecondes). Cependant, si le navigateur n'est pas capable de fournir une valeur temporelle avec une précision de 5 microsecondes (en raison par exemple de contraintes hardware ou software), le navigateur peut représenter la valeur comme un temps en millisecondes avec une précision d'une milliseconde. Référez-vous également à la section ci-dessous concernant la réduction de précision temporelle contrôlée par les préférences du navigateur pour éviter les attaques de synchronisation et le fingerprinting.</p>

<p>De plus, si l'appareil ou le système d'exploitation sur lequel tourne le navigateur n'est pas doté d'une horloge avec une précision de l'ordre de la microseconde, la précision peut également être de l'ordre de la milliseconde.</p>

<h2 id="Précision_temporelle_réduite">Précision temporelle réduite</h2>

<p>Pour offrir une protection contre les attaques de synchronisation et le fingerprinting, la précision des timestamps peut être arrondie en fonction des préférences du navigateur.<br>
 Dans Firefox, l'option <code>privacy.reduceTimerPrecision</code> est activée par défaut et vaut 20µs par défaut dans Firefox 59; dans la version 60 cette valeur est portée à 2ms par défaut.</p>

<pre class="brush: js">// précision temporelle réduite (2ms) dans Firefox 60
event.timeStamp
// 1519211809934
// 1519211810362
// 1519211811670
// ...


// précision temporelle réduite avec `privacy.resistFingerprinting` activé
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
</pre>

<p>Dans Firefox, vous pouvez aussi activer <code>privacy.resistFingerprinting</code>, la précision sera alors de 100ms ou la valeur de <code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code>, la valeur la plus large étant retenue.</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Ce <em>type</em> n'a pas de propriétés. C'est une valeur à virgule flottante double précision.</em></p>

<h3 id="Valeur">Valeur</h3>

<p>La valeur d'un <code>DOMHighResTimeStamp</code> est un nombre flottant double précision qui décrit le nombre de millisecondes (avec une précision de 5 microsecondes si l'appareil le supporte) écoulé entre deux points dans le temps. Le temps de départ peut être soit un point spécifique dans le temps déterminé par le script d'un site web ou d'une application, ou l'<strong>origine temporelle</strong>.</p>

<h4 id="L'origine_temporelle">L'origine temporelle</h4>

<p>L'<strong>origine temporelle</strong> est une heure qui est considéré comme l'heure de commencement de la vie du document. Elle est calculée comme suit :</p>

<ul>
 <li>Si l'{{Glossary("objet global")}} du script est {{domxref("Window")}}, l'origine temporelle est déterminée comme suit :
  <ul>
   <li>Si le {{domxref("Document")}} courant est le premier à être chargé dans la fenêtre, l'origine temporelle est l'heure à laquelle le contexte du navigateur a été créé.</li>
   <li>Si pendant le processus de déchargement du document précédemment chargé dans la fenêtre, un dialogue de confirmation a été affiché pour demander à l'utilisateur de confirmer s'il souhaite quitter la page précédente, l'origine temporelle est l'heure à laquelle l'utilisateur a confirmé que naviguer vers la nouvelle page était acceptable.</li>
   <li>Si aucun des points ci-dessus ne détermine l'origine temporelle, celle-ci est l'heure à laquelle la navigation responsable de la création du <code>Document</code> courant de la fenêtre a eu lieu.</li>
  </ul>
 </li>
 <li>Si l'objet global du script est un {{domxref("WorkerGlobalScope")}} (si le script tourne comme un <em>web worker</em>), l'origine temporelle est le moment auquel le worker a été créé.</li>
 <li>Dans tous les autres cas, l'origine temporelle est <code>undefined</code>.</li>
</ul>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Ce type n'a pas de méthodes.</em></p>

<h2 id="Specifications">Spécifications</h2>

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
   <td>{{SpecName('Highres Time Level 2', '#dom-domhighrestimestamp', 'DOMHighResTimeStamp')}}</td>
   <td>{{Spec2('Highres Time Level 2')}}</td>
   <td>Définitions plus strictes des interfaces et des types.</td>
  </tr>
  <tr>
   <td>{{SpecName('Highres Time', '#sec-DOMHighResTimeStamp', 'DOMHighResTimeStamp')}}</td>
   <td>{{Spec2('Highres Time')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DOMHighResTimestamp")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Navigation_timing">Navigation Timing API</a></li>
 <li><a href="/en-US/docs/Web/API/Performance/now">performance.now()</a></li>
</ul>
