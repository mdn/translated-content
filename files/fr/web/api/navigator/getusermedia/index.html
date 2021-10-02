---
title: NavigatorUserMedia.getUserMedia()
slug: Web/API/Navigator/getUserMedia
tags:
  - API
  - Deprecated
  - Media
  - WebRTC
  - getusermedia
translation_of: Web/API/Navigator/getUserMedia
original_slug: NavigatorUserMedia.getUserMedia
---
<div>{{APIRef("Media Capture and Streams")}}{{deprecated_header}}</div>

<p>La fonction obsolète <strong>Navigator.getUserMedia()</strong> demande à l'utilisateur la permission d'utiliser une entrée vidéo (ex: une webcam ou un écran partagé) ou audio (ex: un microphone) de l'utilisateur.</p>

<p>Si ce dernier l'autorise, un {{domxref("MediaStream")}} est transmis au callback spécifié, il contient les pistes audio et/ou vidéo des entrées autorisées. Si l'utilisateur refuse l'accès, que le périphérique n'existe pas, ou qu'une erreur quelconque se produit, le callback d'erreur est alors exécuté avec comme paramètre un objet {{domxref("MediaStreamError")}}, il décrit l'erreur qui vient de se produire. Si l'utilisateur ne fait aucun choix, aucun callback n'est exécuté.</p>

<div class="note">
<p><strong>Note :</strong> Il s'agit d'une ancienne méthode, veuillez utiliser la méthode {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} à la place. Bien qu'elle ne soit pas techniquement obsolète, l'utilisation de callbacks l'est, les spécifications encouragent fortamment l'utilisation de la nouvelle version avec {{jsxref("promise", "promesses")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">navigator.getUserMedia(constraints, successCallback, errorCallback);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>constraints</dt>
 <dd>Un objet {{domxref("MediaStreamConstraints")}} spécifiant les types de médias que vous souhaitez recevoir, ainsi que les contraintes pour chaque type de média. Pour plus de détails, voir la section <a href="/fr/docs/Web/API/MediaDevices/getUserMedia#Syntaxe">constraints</a> de la méthode {{domxref("MediaDevices.getUserMedia()")}}, ainsi que l'article <a href="/fr/docs/Web/API/Media_Streams_API/Constraints">Capacités, constraintes, et configurations</a>.</dd>
 <dt>successCallback</dt>
 <dd>Une fonction qui est invoquée lorsque la demande d'accès aux entrées média est acceptée. Cette fonction est appellée avec un paramètre: l'objet {{domxref("MediaStream")}} qui contient les flux de médias. Votre callback peut assigner le stream l'objet que vous désirez (ex: un élément {{HTMLElement("audio")}} ou {{HTMLElement("video")}}), comme dans l'exemple suivant:
 <pre class="brush: js">function(stream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(stream);
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
}
</pre>
 </dd>
 <dt>errorCallback</dt>
 <dd>Lorsque l'appel échoue, la fonction spécifiée dans <code>errorCallback</code> est appelée avec comme seul argument l'objet {{domxref("MediaStreamError")}}. Cet objet ressemble à {{domxref("DOMException")}}. Voir {anch("Erreurs")}} plus bas sur cette page pour voir quelle erreur peut arriver.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>{{domxref("undefined")}}.</p>

<h3 id="Erreurs">Erreurs</h3>

<p>{{page("/fr/docs/Web/API/MediaDevices/getUserMedia", "Errors")}}</p>

<h2 id="Exemples"><strong>Exemples</strong></h2>

<h3 id="Largeur_et_hauteur">Largeur et hauteur</h3>

<p>Voici un exemple de l'utilisation de <code>getUserMedia()</code>, avec les différentes mises en oeuvres pour couvrir les préfixes navigateurs. Remarquez que ceci est la façon dépréciée de procéder. Regardez les <a href="/en-US/docs/Web/API/MediaDevices/getUserMedia#Frame_rate">exemples</a> sous la section {{domxref("MediaDevices.getUserMedia()")}} pour les exemples modernes.</p>

<pre class="brush: js">navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
      function(stream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}</pre>

<h2 id="Permissions">Permissions</h2>

<p>Pour utiliser <code>getUserMedia()</code> dans une application installable (par exemple une application Firefox OS), vous devez spécifier un ou plusieurs des champs suivants dans le fichier de manifest.</p>

<pre class="brush: js">"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
</pre>

<p>See <a href="/en-US/Apps/Developing/App_permissions#audio-capture">permission: audio-capture</a> and <a href="/en-US/Apps/Developing/App_permissions#video-capture">permission: video-capture</a> for more information.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécifications</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Media Capture', '#navigatorusermedia-interface-extensions', 'navigator.getUserMedia')}}</td>
   <td>{{Spec2('Media Capture')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div class="warning">
  <p><strong>Attention :</strong> Le nouveau code doit utiliser {{domxref("Navigator.mediaDevices.getUserMedia()")}} à la place.</p>
</div>

<p>{{Compat("api.Navigator.getUserMedia")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("MediaDevices.getUserMedia()")}} qui remplace cette méthode dépréciée.</li>
 <li><a href="/en-US/docs/WebRTC">WebRTC</a> - page d'introduction aux APIS</li>
 <li><a href="/en-US/docs/WebRTC/MediaStream_API">MediaStream API</a> - L'API des Media Streams Objects</li>
 <li><a href="/en-US/docs/WebRTC/taking_webcam_photos">Taking webcam photos</a> - un tutoriel à propos de l'utilisation de  <code>getUserMedia()</code> pour prendre des photos plutôt que des vidéos.</li>
</ul>
