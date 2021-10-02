---
title: API de Vibration
slug: Web/API/Vibration_API
tags:
  - Débutant
  - Firefox OS
  - Vibration
translation_of: Web/API/Vibration_API
---
<h2 id="Description_des_vibrations">Description des vibrations</h2>

<p>La vibration est décrite comme une série de marche-arrêt des impulsions, qui peuvent être de durées différentes. La série peut être soit un entier décrivant le nombre de millisecondes à vibrer ou un tableau d'entiers décrivant une série de pauses et de vibrations. La vibration est contrôlée par une seule méthode: {{domxref("Navigator.vibrate()")}}.</p>

<h3 id="Une_seule_vibration">Une seule vibration</h3>

<p>Vous pouvez effectuer une seule vibration du matériel en spécifiant soit une valeur de type "entier", soit un tableau d'entiers.</p>

<pre class="brush:js">window.navigator.vibrate(200);
window.navigator.vibrate([200]);
</pre>

<p>Ces deux exemples illustrent tout deux la vibration de l'appareil pendant 200 millisecondes.</p>

<h3 id="Série_de_vibrations">Série de vibrations</h3>

<p>Un tableau de valeurs décrit des périodes de temps durant lesquelles le dispositif effectue des vibrations alternées (marche-arrêt répété). Chaque valeur dans le tableau est convertie en entier puis est interprétée alternativement comme le nombre de millisecondes pour lequel le dispositif devrait vibrer et le nombre de millisecondes dont il ne le devrait pas. Par exemple:</p>

<p> </p>

<pre class="brush: js">window.navigator.vibrate([200, 100, 200]);
</pre>

<p>Cela fera vibrer l'appareil pendant 200ms, puis fait une pause de 100ms avant de le faire vibrer à nouveau pendant 200ms.</p>

<p>Vous pouvez spécifier autant de paires vibration/pause que vous voulez. Vous pouvez également fournir soit un nombre pair ou impair. Il est à noter que vous ne devez pas fournir de pause avant que la dernière vibration ait lieu.</p>

<h3 id="Annuler_les_vibrations_existantes">Annuler les vibrations existantes</h3>

<p>Faire appel à {{domxref("Navigator.vibrate()")}} avec une valeur 0, un tableau vide, ou encore un tableau composé uniquement de 0 annulera toutes series de vibrations actives.</p>

<h3 id="Vibrations_continues">Vibrations continues</h3>

<p>Quelques codes de base comme  <code>setInterval</code> et <code>clearInterval</code> vont vous permettre de créer une vibration persistante:</p>

<pre class="brush: js">var vibrateInterval;

// Démarre une vibration avec une durée
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// Arrête la vibration
function stopVibrate() {
    // Vide l'intervalle et annule les vibrations persistantes
    if(vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
}

// Démarre la vibration persistante avec un intervalle et une durée donnée
function startPeristentVibrate(duration, interval) {
    vibrateInterval = setInterval(function() {
        startVibrate(duration);
    }, interval);
}</pre>

<p>Bien sûr, l'extrait de code ci-dessus ne prends pas en compte la méthode du tableau de vibration ; les vibrations persistantes devront se faire en calculant la somme des éléments du tableau et créer un intervalle basé sur ce nombre (avec, probablement, un délai supplémentaire).</p>

<h3 id="Pourquoi_utiliser_l'API_de_vibration">Pourquoi utiliser l'API de vibration?</h3>

<p>Cette APi est dédiée pour les appareils mobiles. Il peut être indispensable pour les alertes au sein des applications mobiles et est particulièrement utile lorsqu'il est associé à des jeux ou des applications multimédia lourdes. Imaginez lorsque vous êtes en train de regarder une vidéo sur votre appareil mobile et pendant une scène d'explosion, votre téléphone vibre un peu. Ou jouer à Bomberman et sentir une petite vibration lorsqu'un bloc explose.</p>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName('Vibration API')}}</td>
   <td>{{Spec2('Vibration API')}}</td>
   <td>Linked to spec is the latest editor's draft; W3C version is a REC.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Navigator.vibrate")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("Navigator.vibrate()")}}</li>
</ul>
