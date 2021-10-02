---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
translation_of: Web/API/Navigator/getGamepads
---
<p>{{ APIRef("Navigator") }}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>Navigator.getGamepads()</code></strong> renvoie un tableau d'objets {{ domxref("Gamepad") }}, un par contrôleur connecté à la machine.</p>

<p>Des éléments dans le tableau peuvent être <code>null</code> si un contrôleur est déconnecté durant la session, ainsi les autres restants gardent le même indice.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> var arrayGP = navigator.getGamepads();</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[0];
  console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.",
  gp.index, gp.id,
  gp.buttons.length, gp.axes.length);
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Gamepad', '', 'The Gamepad API specification')}}</td>
   <td>{{Spec2('Gamepad')}}</td>
   <td>Première définition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Navigator.getGamepads")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Guide/API/Gamepad">Utiliser l'API Gamepad</a></li>
 <li><a href="/fr/docs/Web/API/Gamepad_API">L'API Gamepad</a></li>
</ul>
