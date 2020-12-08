---
title: Secure Contexts
slug: Web/Security/Secure_Contexts
translation_of: Web/Security/Secure_Contexts
---
<p>Un navigateur entre dans un <strong>contexte sécurisé</strong> quand il a satisfait les exigences minimale de sécurité. Un contexte sécurisé permet au navigateur de mettre à disposition des APIs qui nécessitent des transferts sécurisés avec l'utilisateur.</p>

<p> </p>

<h2 id="Pourquoi_certaines_fonctionnalitées_devraient_être_limitées">Pourquoi certaines fonctionnalitées devraient être limitées ?</h2>

<p>Certaines APIs du web peuvent donner beaucoup de pouvoir à un attaqueur, lui permettant par exemple:</p>

<ul>
 <li>Entrer dans la vie privée d'un utilisateur.</li>
 <li>Avoir accès à l'ordinateur d'un utilisateur.</li>
 <li>Avoir accès à des données (comme l'identité de l'utilisateur).</li>
</ul>

<h2 id="À_quel_moment_un_context_est-il_considéré_comme_sécurisé">À quel moment un context est-il considéré comme sécurisé ?</h2>

<p>Un contexte sera considéré comme sécurisé s'il est servi locallement, ou depuis un serveur sécurisé. Un contexte qui n'est pas à la racine (une page qui n'est pas dans une fenêtre, iframe, ...) doit avoir tous ses contextes parents sécurisés.</p>

<p>Les fichiers servis locallement avec des chemins comme <em>http://localhost</em> et <em>file://</em> sont considérés sécurisés.</p>

<p>Les contextes qui ne sont pas servis locallement doivent être servis avec <em>https://</em> ou <em>wss:// </em>et les protocoles utilisés ne doivent pas être considérés obsolètes.</p>

<h2 id="Détection_des_fonctionnalités">Détection des fonctionnalités</h2>

<p>Les pages peuvent utiliser la détection de fonctionnalités pour vérifier si elles sont dans un context sécurisé ou non en utilisant le booléen <code>isSecureContext </code>qui est présent dans le scope global.</p>

<pre class="brush: js">if (window.isSecureContext) {
  // La page est dans un contexte sécurisé, les services workers sont disponibles.
  navigator.serviceWorker.register("/offline-worker.js").then(function () {
    ...
  });
}</pre>

<h2 id="Quelles_APIs_requièrent_un_contexte_sécurisé">Quelles APIs requièrent un contexte sécurisé ?</h2>

<ul>
 <li>{{SpecName('Service Workers')}}</li>
 <li>{{SpecName('Web Bluetooth')}}</li>
 <li>{{SpecName('EME')}}</li>
</ul>

<h3 id="Prositions_de_brouillons">Prositions de brouillons</h3>

<ul>
 <li><a href="https://w3c.github.io/sensors/">https://w3c.github.io/sensors/</a></li>
 <li><a href="https://w3c.github.io/webappsec-credential-management/">https://w3c.github.io/webappsec-credential-management/</a></li>
 <li><a href="https://w3c.github.io/geofencing-api/">https://w3c.github.io/geofencing-api/</a></li>
 <li><a href="https://w3c.github.io/web-nfc/releases/20150925/">https://w3c.github.io/web-nfc/releases/20150925/</a></li>
</ul>

<h3 id="Navigateurs">Navigateurs</h3>

<p>Certains navigateurs peuvent décider de demander à certaines APIs d'être dans un contexte sécurisé même si la spécification ne le demande pas.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td> </td>
   <td>Chrome</td>
   <td>Safari</td>
   <td>Firefox</td>
  </tr>
  <tr>
   <td>getUserMedia</td>
   <td>
    <p>Désactivé</p>

    <p><a href="https://codereview.chromium.org/1336633002">Supprimé dans Chrome 47</a></p>
   </td>
   <td> </td>
   <td>
    <p>Accès temporaire uniquement (les utilisateurs ne peuvent pas choisir "Retenir ce choix" dans la selection de permission).</p>
   </td>
  </tr>
  <tr>
   <td>Geolocation</td>
   <td>
    <p>Désactivé</p>

    <p><a href="https://codereview.chromium.org/1530403002/">Supprimé dans Chrome 50</a></p>
   </td>
   <td>
    <p>Désactivé</p>

    <p><a href="https://trac.webkit.org/changeset/200686">Suppression ici</a></p>
   </td>
   <td>
    <p>Suppression en cours</p>

    <p><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1072859">Suppression attendue pour Firefox 55</a></p>
   </td>
  </tr>
  <tr>
   <td>EME</td>
   <td>Avertissement de dépréciation</td>
   <td> </td>
   <td> </td>
  </tr>
  <tr>
   <td>Device motion / orientation</td>
   <td>Avertissement de dépréciation</td>
   <td> </td>
   <td> </td>
  </tr>
  <tr>
   <td>MIDI</td>
   <td>Désactivé</td>
   <td> </td>
   <td> </td>
  </tr>
  <tr>
   <td><em>{{SpecName('Web Crypto API')}}</em></td>
   <td><em>est réservé à HTTPS même is la vérification du Secure Context est antérieur</em></td>
   <td> </td>
   <td> </td>
  </tr>
 </tbody>
</table>

<p>Pour vérifier le support de votre navigateur, utilisez le site: http://permission.site</p>

<p><em>Note: Safari et Chrome ne supportent pas complètement la spécification des Secure Contexts, certaines APIs peuvent fonctionner avec des iframes utilisant du HTTPS dans une page utilisant du HTTP ou dans une page qui a un contexte ouvert avec une page non sécurisée (c'est le cas quand une page utilisant du HTTP utilise window.open ou target="_blank").</em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td>Spécification</td>
   <td>État</td>
   <td>Commentaire</td>
  </tr>
  <tr>
   <td>{{SpecName('Secure Contexts')}}</td>
   <td>{{Spec2('Secure Contexts')}}</td>
   <td>Brouillon</td>
  </tr>
 </tbody>
</table>

<p> </p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p> </p>

<ul>
 <li>{{domxref("Window.isSecureContext")}}</li>
</ul>
