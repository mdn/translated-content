---
title: Communication de pair-à-pair avec WebRTC
slug: Web/Guide/API/WebRTC/Peer-to-peer_communications_with_WebRTC
translation_of: Web/Guide/API/WebRTC/Peer-to-peer_communications_with_WebRTC
original_slug: WebRTC/communication-de-pair-a-pair-avec-WebRTC
---
<p>{{SeeCompatTable}}</p>
<p>Les APIs WebRTC sont conçues pour permettre aux applications JavaScript de créer des connexions en temps-réel, avec des canaux audio, vidéo et/ou de données, entre utilisateurs à travers leurs navigateurs ou avec des serveurs supportant le protocole WebRTC. Il autorise aussi <code>navigator.mozGetUserMedia()</code> à accéder au microphone et à la webcam (<code>getUserMedia()</code> est en cours de standardisation par le groupe Media Capture Task, avec les APIs Recording).</p>
<p>La principale source des évolutions des spécifications de WebRTC sont les spécifications du W3C <a href="http://dev.w3.org/2011/webrtc/editor/webrtc.html">WebRTC</a> et <a href="http://dev.w3.org/2011/webrtc/editor/getusermedia.html">getUserMedia</a>, ainsi que différents brouillons de IETF, principalement du <a href="http://tools.ietf.org/wg/rtcweb/">groupe de travail rtcweb</a>, mais aussi <a href="http://tools.ietf.org/wg/mmusic/">mmusic</a>, <a href="http://tools.ietf.org/wg/rmcat/">rmcat</a> et quelques autres. Une grande partie de l'implémentation dans Chrome et Firefox est basée sur le code libéré par Google à <a href="http://www.webrtc.org/reference">webrtc.org</a>.</p>
<p><strong>NOTE</strong>:  Les versions courantes de FlashBlock peuvent bloquer le tag HTML5 <code>&lt;video&gt;</code> par défaut; si c'est le cas, il faut lui dire d'autoriser le contenu de la page, ou désactiver cette option via Tools/Add-ons.</p>
<p>Un bon tutoriel sur les fonctionnalités de base de WebRTC peut-être trouvé sur <a href="http://www.html5rocks.com/en/tutorials/webrtc/basics/">HTML5 Rocks</a>. On pourra trouver sur le site <a href="http://mozilla.github.com/webrtc-landing">webrtc-landing</a> une série de page de test basique.</p>
<p>Il est possible de faire un appel simple de personne à personne  (y compris à ceux utilisant Chrome) à <a href="https://apprtc.appspot.com/">apprtc.appspot.com</a>.</p>
<p>Un article de <a href="https://hacks.mozilla.org/category/webrtc/">Hacks</a> décrit avec précision ce qu'il se passe dans une connexion <code>RTCPeerConnecion </code>(<a href="https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/">lien</a>) :</p>
<p><img alt="Basics of RTCPeerConnection call setup" src="webRTC-BasicsOfHowItWorks2.png"></p>

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
      <td>{{SpecName("Media Capture")}}</td>
      <td>{{Spec2("Media Capture")}}</td>
      <td>Définition de <code>getUserMedia</code> API.</td>
    </tr>
    <tr>
      <td>{{SpecName("WebRTC 1.0")}}</td>
      <td>{{Spec2("WebRTC 1.0")}}</td>
      <td>Définition initiale.</td>
     </tr>
  </tbody>
</table>
