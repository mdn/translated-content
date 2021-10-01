---
title: RTCIceServer
slug: Web/API/RTCIceServer
translation_of: Web/API/RTCIceServer
---
<p>{{APIRef("WebRTC")}}</p>

<p>RTCIceServer définit comment se connecter à un serveur ICE unique (comme un serveur {{Glossary("STUN")}} ou {{Glossary("TURN")}}). Il comprend à la fois l'URL et les éventuelle informations d'identification nécessaires pour se connecter au serveur.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("RTCIceServer.credential", "credential")}} {{optional_inline}}</dt>
 <dd>Les informations d'identification à utiliser lors de la connexion au serveur. Celles‑ci sont utilisées uniquement si <code>RTCIceServer</code> est un serveur TURN.</dd>
 <dt>{{domxref("RTCIceServer.credentialType", "credentialType")}} {{optional_inline}}</dt>
 <dd>Si <code>RTCIceServer</code> est un serveur TURN, cet attribut spécifie quel type d'information d'identification doit être utilisé lors de la connexion. Ce doit être l'une des valeurs définies par l'énumération {{domxref("RTCIceCredentialType")}}. La valeur par défaut est <code>password</code>.</dd>
 <dt>{{domxref("RTCIceServer.url", "url")}} {{obsolete_inline}}</dt>
 <dd>Cette propriété obsolète est une chaîne spécifiant l'URL d'un serveur ICE unique. <strong>Ne pas utiliser cette propriété; utiliser plutôt {{domxref("RTCIceServer.urls")}}</strong>. Étant donné que de nombreux livres et exemples anciens l'utilisent encore, nous l'incluons pour aider les développeurs à mettre à jour leur code ou donner un sens a des exemples plus anciens.</dd>
 <dt>{{domxref("RTCIceServer.urls", "urls")}}</dt>
 <dd>Cette propriété est <strong>obligatoire</strong>, elle peut être soit une seule {{domxref("DOMString")}} ou un tableau de {{domxref("DOMString")}} , spécifiant chacun une URL qui peut être utilisée pour se connecter au serveur.</dd>
 <dt>{{domxref("RTCIceServer.username", "username")}} {{optional_inline}}</dt>
 <dd>Si <code>RTCIceServer</code> est un serveur TURN, alors ceci est le nom d'utilisateur à utiliser pendant le processus d'authentification.</dd>
</dl>

<p>Évitez de spécifier un nombre inutilement élevé d'URL dans la propriété <code>urls</code>; le temps de démarrage de votre connexion va augmenter sensiblement. Chaque serveur dans la liste sera contacté et testé avant d'en choisir un pour être utilisé pour la négociation.</p>

<div class="note">
<p><strong>Note :</strong> Les anciennes versions de la spécification WebRTC incluent une propriété <code>url</code> au lieu de <code>urls</code>; cela a été changé afin de vous permettre de spécifier plusieurs adresses pour chaque serveur dans la liste, comme le montre l'exemple ci-dessous.</p>
</div>

<h2 id="Constantes">Constantes</h2>

<h3 id="Enumeration_RTCIceCredentialType">Enumeration RTCIceCredentialType </h3>

<p>L'enumeration <code>RTCIceCredentialType</code> spécifie les valeurs qui peuvent être renvoyés par la propriété credentialType pour définir quel type d'authentification est fournie dans la propriété {{domxref("RTCIceServer.credential")}}. Cela peut être l'une des valeurs ci‑dessous.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Constante</th>
   <th scope="col">Description</th>
  </tr>
  <tr>
   <td><code>"password"</code></td>
   <td>un mot de passe d'aithentification. Voir {{RFC (5389, "", 10.2)}} pour plus de détails.</td>
  </tr>
  <tr>
   <td><code>"token"</code></td>
   <td>La créance est un jeton d'accès à utiliser avec un système d'authentification tiers.</td>
  </tr>
 </thead>
</table>

<h2 id="Example">Exemple</h2>

<p>La configuration ci-dessous établit deux serveurs ICE. Le premier, <code>stun:stun.services.mozilla.com</code>, nécessite une authentification, le nom d'utilisateur et le mot de passe sont donc fournis. Le second serveur a deux URLs : <code>stun:stun.example.com</code> et <code>stun:stun-1.example.com</code>.</p>

<pre class="brush: js">var configuration = {
  iceServers: [{
    urls: "stun:stun.services.mozilla.com",
    username: "louis@mozilla.com",
    credential: "webrtcdemo"
  }, {
    urls: [
      "stun:stun.example.com",
      "stun:stun-1.example.com"
    ]
   }]
};

var pc = new RTCPeerConnection(configuration);</pre>

<p>Une fois l'objet de configuration créé, il est passé dans le constructeur {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} pour l'utiliser comme configuration de la nouvelle connexion entre pairs.</p>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.RTCIceServer")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>{{domxref("RTCPeerConnection")}}</li>
  <li>{{domxref("RTCConfiguration")}}</li>
  <li><a href="/fr/docs/Web/API/WebRTC_API/Session_lifetime">Durée de vie d'une session WebRTC</a></li>
  <li><a href="/fr/docs/Web/API/WebRTC_API/Connectivity">Connectivité WebRTC</a></li>
</ul>
