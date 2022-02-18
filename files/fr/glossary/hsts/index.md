---
title: HSTS
slug: Glossary/HSTS
tags:
  - Glossaire
  - HTTP
  - Sécurité
translation_of: Glossary/HSTS
original_slug: Glossaire/HSTS
---
**HTTP Strict Transport Security** permet à un site web d'informer le navigateur que son accès ne devrait pas se faire en HTTP et qu'il devrait donc convertir toute tentative de connexion en HTTP en connexion HTTPS. HSTS est un en-tête HTTP,  {{HTTPHeader("Strict-Transport-Security")}}, il est donc envoyé par le serveur au début de la réponse à une requête d'un client.

En d'autres termes, cela informe le navigateur que basculer d'HTTP à HTTPS dans l'url fonctionnera (et sera plus sécurisé) et lui demande de le faire systématiquement.

## Pour approfondir

- {{HTTPHeader("Strict-Transport-Security")}}
- Article OWASP : [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia : {{interwiki("wikipedia", "HTTP Strict Transport Security")}}
