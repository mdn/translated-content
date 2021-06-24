---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
tags:
  - API
  - Beacon
  - Méthode
  - Navigateur
  - Performance Web
  - Reference
  - Réseau
  - sendBeacon
translation_of: Web/API/Navigator/sendBeacon
---
<div>{{APIRef("HTML DOM")}}</div>

<p>La méthode  <code><strong>navigator.sendBeacon()</strong></code> peut être utilisée pour transférer une petite quantité de données de façon asynchrone via  {{Glossary("HTTP")}} vers un serveur web.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">navigator.sendBeacon(<em>url</em>, <em>donnees</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>url</code></dt>
 <dd>Le paramètre <code>url</code> indique l'URL résolue à laquelle les <code>donnees</code> seront transmises.</dd>
</dl>

<dl>
 <dt><code>donnees</code></dt>
 <dd>Le paramètre <code>donnees</code> est un objet {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, ou {{domxref("FormData")}} qui contient les données à transmettre.</dd>
</dl>

<h3 id="Valeurs_de_retour">Valeurs de retour</h3>

<p>La méthode <code><strong>sendBeacon()</strong></code> retourne <code>true</code> (vrai) si l'agent utilisateur est en mesure de mettre en file les données à transférer avec succès. Sinon, la méthode retourne <code>false</code> (faux).</p>

<h2 id="Description">Description</h2>

<p>Cette méthode répond aux besoins de certains codes analytiques ou de diagnostic qui tentent d'envoyer des données à un serveur web avant le déchargement (<em>unloading</em>) du document. Envoyer les données plus tôt pourrait résulter en une opportunité manquée de récolter des données. Toutefois, s'assurer que les données ont été envoyées pendant le déchargement du document est quelque chose qui a traditionnellement été difficile pour les développeurs, car les agents utilisateur ignorent généralement les requêtes {{domxref("XMLHttpRequest")}} faites à l'intérieur d'un gestionnaire d'événements {{event("unload")}}.</p>

<p>Afin de résoudre ce problème, les codes analytiques ou de diagnostic faisaient historiquement appel à une requête <code>XMLHttpRequest</code> synchrone dans un gestionnaire d'événements <code>unload</code> ou {{event("beforeunload")}} pour soumettre les données. La requête <code>XMLHttpRequest</code> synchrone bloque le processus de déchargement du document, ce qui à son tour fait paraître la navigation plus lente. Il n'y a rien que la page suivante peut faire pour éviter cette perception d'une mauvaise performance de chargement de page, et le résultat est que l'utilisateur perçoit la nouvelle page web comme étant lente à se charger, même si le vrai problème provient de la page précédente.</p>

<p>Il y a des techniques de contournement qui ont été utilisées pour s'assurer que ce type de données est transmis. Une technique de ce genre est de retarder le déchargement de la page pour soumettre  les données en créant un élément {{HTMLElement("img")}} et en mettant son attribut <code>src</code> dans le gestionnaire de déchargement. Puisque la plupart des agents utilisateur vont retarder le déchargement afin de compléter le chargement de l'image en attente, les données peuvent être transmises durant le déchargement. Une autre technique est de créer une boucle de no-op (aucune opération) pour plusieurs secondes à l'intérieur du gestionnaire de déchargement, afin de retarder le déchargement et soumettre les données au serveur.</p>

<p>Non seulement ces techniques représentent-elles de mauvais patrons de programmation, certaines d'entre elles sont peu fiables, et elles résultent toutes en une perception d'une mauvaise performance de chargement de page pour la prochaine navigation.</p>

<p>L'exemple suivant montre un code analytique théorique qui tente de soumettre des données à un serveur en utilisant une requête <code>XMLHttpRequest</code> synchrone dans un gestionnaire de déchargement. Cela résulte en un délai pour le déchargement de la page.</p>

<pre class="brush: js">window.addEventListener('unload', enregistrerDonnees, false);

function enregistrerDonnees() {
  var client = new XMLHttpRequest();
  client.open("POST", "/log", false); // Le troisième paramètre indique une synchronisation xhr
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(donneesAnalytiques);
}
</pre>

<p>C'est là qu'entre en jeu <code><strong>sendBeacon()</strong></code>. En utilisant la méthode <code>sendBeacon()</code>, les données sont transmises de façon asynchrone au serveur web lorsque l'Agent Utilisateur a l'opportunité de le faire, sans retarder le déchargement ou affecter la performance de la navigation suivante. Cela résoud tous les problèmes avec la soumission de données analytiques : les données sont envoyées de façon fiable, asynchrone, et cela n'impacte pas le chargement de la page suivante. De plus, ce code est en fait plus simple à écrire que n'importe quelle de ces autres techniques!</p>

<p>L'exemple suivant montre un patron de code analytique théorique qui soumet des données à un serveur en utilisant la méthode <code>sendBeacon()</code>.</p>

<pre class="brush: js">window.addEventListener('unload', enregistrerDonnees, false);

function enregistrerDonnees() {
  navigator.sendBeacon("/log", donneesAnalytiques);
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Beacon', '#sec-sendBeacon-method', 'sendBeacon()')}}</td>
   <td>{{Spec2('Beacon')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_avec_les_navigateurs">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.Navigator.sendBeacon")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("navigator", "navigator")}}</li>
 <li>{{domxref("WorkerNavigator.sendBeacon()")}} (Utilisation de <code>sendBeacon()</code> dans des <em>workers</em>)</li>
</ul>
