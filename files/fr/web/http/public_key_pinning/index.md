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
L'extention **Public Key Pinning pour HTTP** (HPKP) est une fonctionnalité de sécurité qui dit au client web d'associer une clé publique cryptographique avec un certain serveur web pour éviter les attaques [MITM](https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu) avec des certificats contrefaits.

> **Note :** La Public Key Pinning décrite ici est différente du limité [preload list based key pinning](http://monica-at-mozilla.blogspot.de/2014/08/firefox-32-supports-public-key-pinning.html) introduit dans Firefox 32.

Pour s'assurer de l’authenticité de la clé publique du serveur utilisé dans une session TLS, cette clé publique est enveloppée dans un certificat X.509 qui est généralement signé par une autorité de certifications (CA, pour Certificate Authority). Les clients web tels que les navigateurs font confiance à beaucoup de ces autorités de certifications, et chacune d'entre elles peut créer des certificats pour des domaines arbitraires. Si un attaquant est capable de compromettre une seule de ces CA, il peut pratiquer des attaques {{Glossary("MitM")}} sur diverses connections TLS. HPKP peut contourner cette menace pour le protocole HTTPS en disant au client web quelles clés publiques appartiennent à un certain serveur web.

HPKP est une technique qui s'appuie sur la confiance au premier accès (TOFU, _Trust on First Use_). La première fois un serveur web dit au client en utilisant l'en-tête HTTP HPKP quelles clés publiques lui appartiennent, le client sauvegarde cette information pour une période de temps donnée. Quand le client visite le serveur à nouveau, il s'attend à un certificat contenant une clé publique dont l'empreinte est sauvegardée. Si le serveur présente une clé publique inconnue, le client doit présenter un avertissement à l'utilisateur.

> **Note :** Firefox (et Chrome) **désactivent la vérification de l'épinglage** lorsqu'un site épinglé présentent une chaine de certificats qui se termine par **un certificat racine installé par l'utilisateur** (et non un certificat racine de base).

## Activer HPKP

Activer cette fonctionnalité pour votre site est simple : il faut juste retourner l'en tête HTTP `Public-Key-Pins` HTTP quand le site est accédé via HTTPS :

    Public-Key-Pins: pin-sha256="base64=="; max-age=expireTime [; includeSubdomains][; report-uri="reportURI"]

- `pin-sha256`
  - : La chaîne de caractère entre guillemets est l’empreinte du *Subject Public Key Information* (SPKI) encodé en base 64. Il est possible de spécifier plusieurs épinglage (pin) pour différentes clé publiques. Certains navigateurs pourraient autoriser dans le future d'autres algorithmes de hachage que SHA-256. Voir plus bas comment extraire cette information depuis le fichier d'un certificat ou d'une clé.
- `max-age`
  - : Le temps, en seconde, pendant laquelle le navigateur doit mémoriser que le site ne doit être visité qu'avec l'une des clés épinglées.
- `includeSubdomains` {{ optional_inline() }}
  - : Si ce paramètre optionnel est spécifié, cette règle s'applique aussi a tous les sous-domaines du domaine actuel.
- `report-uri` {{ optional_inline() }}
  - : Si ce paramètre optionnel est spécifié, les échecs de validation sont notifiés à l'URL donnée.

> **Note :** La spécification actuelle **impose** d'inclure au minimum une seconde clé dite de sauvegarde, qui n'est pas encore utilisée en production. Cela permet de changer de clé publique sans bloquer l'accès aux clients qui auraient déjà noté les clés épinglés. C'est important par exemple dans le cas où la clé actuellement utilisées serait compromise, ce qui forcerait l'utilisation d'une clé différente (la clé de sauvegarde dans ce cas).

> **Note :** Firefox n'implémente pas encore les rapports de violation d'épinglage. Chrome les implémente à partie de la version 46.
>
> - Firefox: [Bug 1091176 - Implement report-uri directive for HPKP](https://bugzilla.mozilla.org/show_bug.cgi?id=1091176) et [Bug 787133 - (hpkp) Implement Public Key Pinning Extension for HTTP (HPKP)](https://bugzilla.mozilla.org/show_bug.cgi?id=787133)
> - Chrome: <https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46> , [HTTP Public Key Pinning violating reporting](https://www.chromestatus.com/feature/4669935557017600) et [Issue 445793: HPKP Reporting on invalid pins](https://code.google.com/p/chromium/issues/detail?id=445793)

### Extraire la clé publique encodé en Base64

En premier, vous devez extraire la clé publique depuis votre fichier de certificats ou de clés puis l'encoder en base 64.

Les commandes suivantes vous aideront à extraire la clé publique et à l'encoder en base 64 depuis le fichier d'une clé, d'un certificat ou d'un CSR (Certificate Signing Request).

    openssl rsa -in my-key-file.key -outform der -pubout | openssl dgst -sha256 -binary | openssl enc -base64

<!---->

    openssl req -in my-signing-request.csr -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

<!---->

    openssl x509 -in my-certificate.crt -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

###  

### Exemple d'entête HPKP

    Public-Key-Pins: pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="; pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="; max-age=5184000; includeSubdomains; report-uri="https://www.example.net/hpkp-report"

Dans cet exemple, **pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="** épingle la clé publique utilisée en production par le serveur. La deuxième déclaration d'épinglage **pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="** représente la clé de sauvegarde. **max-age=5184000** dit au client de mémoriser cette information pendant deux mois, ce qui est un temps raisonnable d'après la RFC. Cet épinglage s'applique aussi à tous les sous-domaines, car **includeSubdomains** est présent. Enfin, **report-uri="https\://www\.example.net/hpkp-report"** indique où envoyer les rapports d'erreurs de validation.



### Mettre en place le header HPKP sur votre serveur web

Les étapes concrètes nécessaires pour délivrer l'en-tête HPKP dépendent du serveur web que vous utilisez.

> **Note :** Ces exemples utilisent un a max-age de deux mois et incluent aussi tous les sous-domaines. Il est conseillé de vérifier que cela convient à votre serveur.

Inclure une ligne similaire à votre configuration activera HPKP, en remplaçant les valeurs en pointillé des lignes `pin-sha256="..."`&nbsp;:

#### Apache

    Header always set Public-Key-Pins "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains"

**Note :** Cela demande le module `mod_headers` activé.

#### Nginx

    add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains';

**Note :** Cela demande le module `ngx_http_headers_module`.

#### Lighttpd

    setenv.add-response-header  = ( "Public-Key-Pins" => "pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; max-age=5184000; includeSubDomains")

**Note:** Cela demande le module `mod_setenv` chargé, ce qui peut être fait en ajoutant la ligne suivante (s'il n'est pas déjà chargé) :

    server.modules += ( "mod_setenv" )

## Spécifications

| Spécification                                            | Description                                           |
| -------------------------------------------------------- | ----------------------------------------------------- |
| {{RFC("7469", "Public-Key-Pins", "2.1")}} | Extension de l'épinglage des clés publiques pour HTTP |

## Compatibilité des navigateurs

{{Compat("http.headers.Public-Key-Pins")}}

## Voir aussi

- {{HTTPHeader("Public-Key-Pins")}}
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
- Browser test site: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
- {{HTTPHeader("Expect-CT")}}
