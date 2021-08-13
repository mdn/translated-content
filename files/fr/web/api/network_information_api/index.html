---
title: Network Information API
slug: Web/API/Network_Information_API
tags:
  - WebAPI
translation_of: Web/API/Network_Information_API
original_slug: WebAPI/Network_Information
---
<p>{{ SeeCompatTable() }}</p>

<p>L'API Network Information (Informations réseau) fournit des informations sur la connexion de l'appareil : la bande-passante, si la connexion est mesurée ou non. Elle peut être utilisée pour choisir entre du contenu en haute définition ou en basse définition selon la connexion de l'utilisateur. L'API ne représente qu'un seul objet, ajouté au DOM : {{domxref("window.navigator.connection")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Détecter_les_changements_de_connexion">Détecter les changements de connexion</h3>

<p>Cet exemple permet de connaître les changements liés à la connexion d'un utilisateur. Cela ressemble notamment à la façon dont une application saura si l'utilisateur passe d'une connexion coûteuse à une autre connexion moins chère et pourra réduire la demande de bande passante afin de réduire les coûts pour l'utilisateur.</p>

<pre class="brush: js">var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function updateConnectionStatus() {
  alert("Bande passante de la connexion : " + connection.bandwidth + " MB/s");
  if (connection.metered) {
    alert("La connexion est mesurée !");
  }
}

connection.addEventListener("change", updateConnectionStatus);
updateConnectionStatus();
</pre>

<h3 id="Préchargement_de_ressources_gourmandes">Préchargement de ressources gourmandes</h3>

<p>L'objet connexion est pratique pour décider de précharger des ressources nécessitant une grosse quantité de bande passante ou de mémoire. Cet exemple devra être appelé après que la page ait été chargé. Il détermine si précharger la vidéo est judicieux selon le type de la connexion. Si une connexion cellulaire est trouvée, alors <code>preloadVideo</code> est réglé à faux. Ici pour faire simple, on ne teste qu'un type de connexion; dans un cas réel on aurait plutôt utilisé une structure de contrôle switch ou une autre méthode pour avoir tout les cas possibles de {{domxref("NetworkInformation.type")}}. Malgré la valeur <code>type</code>, on peut avoir une estimation de la vitesse de la connexion à travers la propriété {{domxref("NetworkInformation.effectiveType")}}<strong>.</strong></p>

<pre class="brush: js">let preloadVideo = true;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === 'cellular') {
    preloadVideo = false;
  }
}</pre>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref("NetworkInformation")}}</dt>
 <dd>Fournit des informations sur la connexion de l'appareil et fournit la possibilité aux scriptes d'être informé en cas de changement. L'interface <code>NetworkInformation</code> ne peut pas être instanciée; à la place on y accède à travers l'interface {{domxref("Navigator")}}.</dd>
</dl>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Network Information', '', 'Network Information API')}}</td>
   <td>{{Spec2('Network Information')}}</td>
   <td>Spécification initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="NetworkInformation"><code>NetworkInformation</code></h3>

<p>{{Compat("api.NetworkInformation")}}</p>

<h3 id="Navigator.connection"><code>Navigator.connection</code></h3>

<p>{{Compat("api.Navigator.connection")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{spec("http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html", "Spécification de l'API Network Information", "ED")}}</li>
 <li><a href="/fr/docs/Online_and_offline_events">Les évènement online et offline</a></li>
 <li>{{domxref("window.navigator.connection")}}</li>
</ul>
