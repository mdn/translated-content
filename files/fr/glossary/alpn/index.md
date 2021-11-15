---
title: ALPN
slug: Glossary/ALPN
tags:
  - ALPN
  - Brouillon
  - Glossaire
  - NeedsContent
  - TLS
translation_of: Glossary/ALPN
original_slug: Glossaire/ALPN
---
<p><strong>Application-Layer {{Glossary("Protocol")}} Negotiation</strong> (<strong>ALPN</strong>) est une extension {{Glossary("TLS")}} qui indique quel protocole de couche d'application négocie la connexion chiffrée sans nécessiter d'aller-retour supplémentaires.</p>

<table class="standard-table">
 <caption>Identificateurs de protocole importants:</caption>
 <thead>
  <tr>
   <th scope="col">Protocole</th>
   <th scope="col">Séquence d'identification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{Glossary("HTTP")}}/1.1</td>
   <td><code>0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31</code> ("http/1.1")</td>
  </tr>
  <tr>
   <td>{{Glossary("HTTP 2", "HTTP/2")}}</td>
   <td><code>0x68 0x32</code> ("h2")</td>
  </tr>
  <tr>
   <td>HTTP/2 over cleartext {{Glossary("TCP")}}</td>
   <td><code>0x68 0x32 0x63</code> ("h2c")</td>
  </tr>
 </tbody>
</table>

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
   <td>{{RFC(7301)}}</td>
   <td>IETF RFC</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids">Identifiants ALPN enregistrés par l'IANA</a></li>
</ul>
