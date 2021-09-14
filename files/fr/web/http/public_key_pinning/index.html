---
title: Public Key Pinning
slug: Web/HTTP/Public_Key_Pinning
tags:
  - HTTPS
  - Référence(2)
  - Sécurité
translation_of: Web/HTTP/Public_Key_Pinning
original_slug: Web/Security/Public_Key_Pinning
---
<p>L'extention <strong>Public Key Pinning pour HTTP</strong> (HPKP) est une fonctionnalité de sécurité qui dit au client web d'associer une clé publique cryptographique avec un certain serveur web pour éviter les attaques <a href="https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu">MITM</a> avec des certificats contrefaits.</p>

<div class="note">
<p><strong>Note :</strong> La Public Key Pinning décrite ici est différente du limité <a href="http://monica-at-mozilla.blogspot.de/2014/08/firefox-32-supports-public-key-pinning.html">preload list based key pinning</a> introduit dans Firefox 32.</p>
</div>

<p>Pour s'assurer de l’authenticité de la clé publique du serveur utilisé dans une session TLS, cette clé publique est enveloppée dans un certificat X.509 qui est généralement signé par une autorité de certifications (CA, pour Certificate Authority). Les clients web tels que les navigateurs font confiance à beaucoup de ces autorités de certifications, et chacune d'entre elles peut créer des certificats pour des domaines arbitraires. Si un attaquant est capable de compromettre une seule de ces CA, il peut pratiquer des attaques {{Glossary("MitM")}} sur diverses connections TLS. HPKP peut contourner cette menace pour le protocole HTTPS en disant au client web quelles clés publiques appartiennent à un certain serveur web.</p>

<p>HPKP est une technique qui s'appuie sur la confiance au premier accès (TOFU, <em>Trust on First Use</em>). La première fois un serveur web dit au client en utilisant l'en-tête HTTP HPKP quelles clés publiques lui appartiennent, le client sauvegarde cette information pour une période de temps donnée. Quand le client visite le serveur à nouveau, il s'attend à un certificat contenant une clé publique dont l'empreinte est sauvegardée. Si le serveur présente une clé publique inconnue, le client doit présenter un avertissement à l'utilisateur.</p>

<div class="notecard note">
  <p><strong>Note :</strong> Firefox (et Chrome) <strong>désactivent la vérification de l'épinglage</strong> lorsqu'un site épinglé présentent une chaine de certificats qui se termine par <strong>un certificat racine installé par l'utilisateur</strong> (et non un certificat racine de base).</p>
</div>

<h2 id="Activer_HPKP">Activer HPKP</h2>

<p>Activer cette fonctionnalité pour votre site est simple : il faut juste retourner l'en tête HTTP <code>Public-Key-Pins</code> HTTP quand le site est accédé via HTTPS :</p>

<pre>Public-Key-Pins: pin-sha256="base64=="; max-age=<em>expireTime</em> [; includeSubdomains][; report-uri="<em>reportURI"</em>]
</pre>

<dl>
 <dt><code>pin-sha256</code></dt>
 <dd>La chaîne de caractère entre guillemets est l’empreinte du <em>Subject Public Key Information</em> (SPKI) encodé en base 64. Il est possible de spécifier plusieurs épinglage (pin) pour différentes clé publiques. Certains navigateurs pourraient autoriser dans le future d'autres algorithmes de hachage que SHA-256. Voir plus bas comment extraire cette information depuis le fichier d'un certificat ou d'une clé.</dd>
 <dt><code>max-age</code></dt>
 <dd>Le temps, en seconde, pendant laquelle le navigateur doit mémoriser que le site ne doit être visité qu'avec l'une des clés épinglées.</dd>
 <dt><code>includeSubdomains</code> {{ optional_inline() }}</dt>
 <dd>Si ce paramètre optionnel est spécifié, cette règle s'applique aussi a tous les sous-domaines du domaine actuel.</dd>
 <dt><code>report-uri</code> {{ optional_inline() }}</dt>
 <dd>Si ce paramètre optionnel est spécifié, les échecs de validation sont notifiés à l'URL donnée.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> La spécification actuelle <strong>impose</strong> d'inclure au minimum une seconde clé dite de sauvegarde, qui n'est pas encore utilisée en production. Cela permet de changer de clé publique sans bloquer l'accès aux clients qui auraient déjà noté les clés épinglés. C'est important par exemple dans le cas où la clé actuellement utilisées serait compromise, ce qui forcerait l'utilisation d'une clé différente (la clé de sauvegarde dans ce cas).</p>
</div>

<div class="note">
<p><strong>Note :</strong> Firefox n'implémente pas encore les rapports de violation d'épinglage. Chrome les implémente à partie de la version 46.</p>

<ul>
 <li>Firefox: <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1091176">Bug 1091176 - Implement report-uri directive for HPKP </a> et <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=787133">Bug 787133 - (hpkp) Implement Public Key Pinning Extension for HTTP (HPKP)</a></li>
 <li>Chrome: <a href="https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46">https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46</a> , <a href="https://www.chromestatus.com/feature/4669935557017600">HTTP Public Key Pinning violating reporting</a> et <a href="https://code.google.com/p/chromium/issues/detail?id=445793"> Issue 445793: HPKP Reporting on invalid pins</a></li>
</ul>
</div>

<h3 id="Extraire_la_clé_publique_encodé_en_Base64">Extraire la clé publique encodé en Base64</h3>

<p>En premier, vous devez extraire la clé publique depuis votre fichier de certificats ou de clés puis l'encoder en base 64.</p>

<p>Les commandes suivantes vous aideront à extraire la clé publique et à l'encoder en base 64 depuis le fichier d'une clé, d'un certificat ou d'un CSR (Certificate Signing Request).</p>

<pre><code>openssl rsa -in my-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | </code>openssl enc -base64</pre>

<pre><code>openssl req -in my-signing-request.csr -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | </code>openssl enc -base64</pre>

<pre><code>openssl x509 -in my-certificate.crt -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | </code>openssl enc -base64</pre>

<h3 id="sect2"> </h3>

<h3 id="Exemple_d'entête_HPKP">Exemple d'entête HPKP</h3>

<pre>Public-Key-Pins: pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="; pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="; max-age=5184000; includeSubdomains; report-uri="<em>https://www.example.net/hpkp-report"</em></pre>

<p>Dans cet exemple, <strong>pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="</strong> épingle la clé publique utilisée en production par le serveur. La deuxième déclaration d'épinglage <strong>pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="</strong> représente la clé de sauvegarde. <strong>max-age=5184000</strong> dit au client de mémoriser cette information pendant deux mois, ce qui est un temps raisonnable d'après la RFC. Cet épinglage s'applique aussi à tous les sous-domaines, car <strong>includeSubdomains</strong> est présent. Enfin, <strong>report-uri="https://www.example.net/hpkp-report"</strong> indique où envoyer les rapports d'erreurs de validation.</p>

<p> </p>

<h3 id="Mettre_en_place_le_header_HPKP_sur_votre_serveur_web">Mettre en place le header HPKP sur votre serveur web</h3>

<p>Les étapes concrètes nécessaires pour délivrer l'en-tête HPKP dépendent du serveur web que vous utilisez.</p>

<div class="note">
<p><strong>Note :</strong> Ces exemples utilisent un a max-age de deux mois et incluent aussi tous les sous-domaines. Il est conseillé de vérifier que cela convient à votre serveur.</p>
</div>

<p>Inclure une ligne similaire à votre configuration activera HPKP, en remplaçant les valeurs en pointillé des lignes <code>pin-sha256="..." </code>:</p>

<h4 id="Apache">Apache</h4>

<pre>Header always set Public-Key-Pins "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains"
</pre>

<p><strong>Note :</strong> Cela demande le module <code>mod_headers</code> activé.</p>

<h4 id="Nginx">Nginx</h4>

<pre>add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains';</pre>

<p><strong>Note :</strong> Cela demande le module <code>ngx_http_headers_module</code>.</p>

<h4 id="Lighttpd">Lighttpd</h4>

<pre>setenv.add-response-header  = ( "Public-Key-Pins" =&gt; "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains")</pre>

<p><strong>Note:</strong> Cela demande le module <code>mod_setenv</code> chargé, ce qui peut être fait en ajoutant la ligne suivante (s'il n'est pas déjà chargé) :</p>

<pre><code>server.modules += ( "mod_setenv" )</code></pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{RFC("7469", "Public-Key-Pins", "2.1")}}</td>
      <td>Extension de l'épinglage des clés publiques pour HTTP</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.Public-Key-Pins")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>{{HTTPHeader("Public-Key-Pins")}}</li>
  <li>{{HTTPHeader("Public-Key-Pins-Report-Only")}}</li>
  <li>Browser test site: <a href="https://projects.dm.id.lv/Public-Key-Pins_test">HSTS and HPKP test</a></li>
  <li>{{HTTPHeader("Expect-CT")}}</li>
</ul>
