---
title: TOFU
slug: Glossary/TOFU
tags:
  - Glossaire
  - HTTP
  - Sécurité
translation_of: Glossary/TOFU
original_slug: Glossaire/TOFU
---
<p><strong>Trust On First Use</strong> <strong>(TOFU</strong>) (<em>confiance à la première utilisation</em>) est un modèle de sécurité dans lequel un client doit créer une relation avec un serveur inconnu. Pour ce faire, les clients rechercheront des identifiants (par exemple des clés publiques) stockés localement. Si un identifiant est trouvé, le client peut établir la connexion. Si aucun identifiant n'est trouvé, le client peut demander à l'utilisateur de déterminer si le client doit approuver l'identifiant.</p>

<p>TOFU est utilisé dans le protocole SSH, dans <a href="/fr/docs/Web/HTTP/Public_Key_Pinning">HTTP Public Key Pinning</a> ({{Glossary("HPKP")}}) où les navigateurs accepteront la première clé publique renvoyée par le serveur et dans {{HTTPHeader("Strict-Transport-Security")}}  ({{Glossary("HSTS")}}) où un navigateur obéira à la règle de redirection.</p>

<div>
<h2 id="En_apprendre_plus">En apprendre plus</h2>

<ul>
 <li><a href="/fr/docs/Web/HTTP/Public_Key_Pinning">HTTP Public Key Pinning</a> ({{Glossary("HPKP")}})</li>
 <li>{{HTTPHeader("Public-Key-Pins")}}</li>
 <li>Wikipedia : <a href="https://en.wikipedia.org/wiki/Trust_on_first_use">TOFU </a>(en)</li>
</ul>
</div>
