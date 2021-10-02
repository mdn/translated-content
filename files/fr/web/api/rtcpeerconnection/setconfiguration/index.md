---
title: RTCPeerConnection.setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
tags:
  - Experimental
  - Méthode
  - Reference
  - WebRTC
  - setConfiguration
translation_of: Web/API/RTCPeerConnection/setConfiguration
---
<div>{{APIRef("WebRTC")}}{{SeeCompatTable}}</div>

<p>La méthode <strong><code>RTCPeerConnection.setConfiguration()</code></strong> définit la configuration courante pour la connexion {{domxref("RTCPeerConnection")}} en fonction des valeurs des propriétés de l'objet {{domxref("RTCConfiguration")}} passé en argument. Cela permet de modifier les serveurs ICE et les règles de transport utilisés par la connexion.</p>

<p>Le cas d'usage le plus probable (bien qu'il ne soit probablement pas répandu) est le remplacement des serveurs ICE à utiliser. Voici deux scénarios pour lesquels cela pourrait se produire :</p>

<ul>
 <li>L'objet {{domxref("RTCPeerConnection")}} a été instancié sans qu'un serveur ICE soit spécifié. Si le constructeur {{domxref("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}} a été appelé sans paramètre, on doit alors appeler <code>setConfiguration()</code> pour ajouter des serveurs ICE avant que la négociation ICE puisse avoir lieu.</li>
 <li>La connexion doit être renégociée et il faut utiliser un autre ensemble de serveurs ICE pour une certaine raison (ex. l'utilisateur s'est déplacé dans une nouvelle région et il faut donc utiliser de nouveaux serveurs ICE régionaux). Dans ce cas, on pourra appeler <code>setConfiguration()</code> pour passer sur les serveurs régionaux puis initier <a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ICE_restart">un redémarrage ICE</a>.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> On ne peut pas changer les informations d'identité d'une connexion une fois que celle-ci a été créée.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>RTCPeerConnection</em>.setConfiguration(<em>configuration</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>configuration</code></dt>
 <dd>Un objet {{domxref("RTCConfiguration")}} qui fournit les options à appliquer à la connexion. Les changements ne sont pas utilisés en addition mais remplacent les valeurs existantes.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt><code>InvalidAccessError</code></dt>
 <dd>Une ou plusieurs URL indiquées dans <code>configuration.iceServers</code> sont des serveurs {{Glossary("TURN")}} mais les informations d'authentification ne sont pas complètes (il manque {{domxref("RTCIceServer.username")}} ou {{domxref("RTCIceServer.credentials")}}). Cela empêche une connexion/identification correcte sur le serveur.</dd>
 <dt><code>InvalidModificationError</code></dt>
 <dd>L'objet <code>configuration</code> contient des changements relatifs à l'identité alors que la connexion a déjà ces informations indiquées. Cela se produit lorsque <code>configuration.peerIdentity</code> ou <code>configuration.certificates</code> sont définies et que leurs valeurs diffèrent de la configuration courante.</dd>
 <dt><code>InvalidStateError</code></dt>
 <dd>La connexion ({{domxref("RTCPeerConnection")}}) est fermée.</dd>
 <dt><code>SyntaxError</code></dt>
 <dd>Une ou plusieurs URL fournies dans la liste <code>configuration.iceServers</code> sont invalides.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on a déjà determiné qu'un redémarrage ICE est nécessaire et que la négociation ICE doit se faire sur un nouveau serveur.</p>

<pre class="brush: js">var restartConfig = { iceServers: [{
                          urls: "turn:asia.myturnserver.net",
                          username: "allie@oopcode.com",
                          credential: "topsecretpassword"
                      }]
};

myPeerConnection.setConfiguration(restartConfig);

myPeerConnection.createOffer({"iceRestart": true}).then(function(offer) {
  return myPeerConnection.setLocalDescription(offer);
})
.then(function() {
  // send the offer to the other peer using the signaling server
})
.catch(reportError);</pre>

<p>Pour commencer, on crée une {{domxref("RTCConfiguration")}}, <code>restartConfig</code>, en indiquant le nouveau serveur ICE et les informations de connexion associées. Cet objet est alors passé à <code>setConfiguration()</code>. La négociation ICE est redémarrée via {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}} pour laquelle on indique <code>true</code> pour l'option <code>iceRestart</code>. Ensuite, on gère le processus habituel en définissant la description locale de l'offre et en envoyant cette offre à l'autre pair.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WebRTC 1.0', '#widl-RTCPeerConnection-setConfiguration-void-RTCConfiguration-configuration', 'setConfiguration()')}}</td>
   <td>{{Spec2('WebRTC 1.0')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.RTCPeerConnection.setConfiguration")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("RTCPeerConnection.getConfiguration()")}}</li>
 <li>{{domxref("RTCConfiguration")}}</li>
 <li>{{domxref("RTCPeerConnection")}}</li>
</ul>
