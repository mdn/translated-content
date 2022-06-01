---
title: La sécurité dans Firefox 2
slug: Mozilla/Firefox/Releases/2/Security_changes
tags:
  - Sécurité
translation_of: Mozilla/Firefox/Releases/2/Security_changes
original_slug: La_sécurité_dans_Firefox_2
---
{{FirefoxSidebar}}

Cet article aborde les changements concernant la sécurité dans Firefox 2.

### Chiffrements faibles désactivés par défaut

[Firefox 2](fr/Firefox_2) désactive par défaut le support de SSLv2 et les suites de chiffrement faible (celles ayant des longueurs de clefs inférieures à 64 bits) en faveur de SSLv3. Ce choix améliore la sécurité.

Les méthodes privilégiées de chiffrage sont `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` et `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Certains serveurs y font référence en tant que `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` et `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Si le support de SSLv2 doit être activé, vous devrez définir avec la valeur `true` la préférence utilisateur `security.ssl2.*` dans about:config.

### Nouvelles fonctionnalités

- Firefox 2 supporte la [cryptographie sur courbes elliptiques](http://fr.wikipedia.org/wiki/Cryptographie_sur_les_courbes_elliptiques) (ECC) dans TLS. Le support est pour l'instant limité aux courbes de 256, 384 et 521 (oui, 521&nbsp;!) bits.
- Firefox 2 supporte l'extension d'identification de nom de serveur TLS pour faciliter les connexions sécurisées sur des serveurs hébergeant plusieurs serveurs virtuels sous la même adresse réseau, suivant la [RFC 3546](http://tools.ietf.org/html/rfc3546).
- Lorsque Firefox 2 effectue une requête [OSCP](http://fr.wikipedia.org/wiki/OCSP) pour valider un certificat d'un serveur Web, il utilise désormais le proxy configuré pour le trafic HTTP normal.

### Détermination du chiffrement disponible

Comme toujours, vous pouvez vérifier le chiffrement supporté — celui qui a été activé ou désactivé — en cherchant «&nbsp;ssl&nbsp;» ou «&nbsp;tls&nbsp;» dans about:config.
