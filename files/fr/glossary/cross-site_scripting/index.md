---
title: Cross-site scripting
slug: Glossary/Cross-site_scripting
tags:
  - DOM
  - Faille de sécurité
  - Glossaire
  - Sécurité
  - XSS
translation_of: Glossary/Cross-site_scripting
original_slug: Glossaire/Cross-site_scripting
---
Cross-site scripting (XSS) est une faille de sécurité qui permet à un attaquant d'injecter dans un site web un code client malveillant. Ce code est exécuté par les victimes et permet aux attaquants de contourner les contrôles d'accès et d'usurper l'identité des utilisateurs. Selon le projet Open Web Application Security, XSS était la [troisième cause de vulnérabilité des applications du web](https://www.owasp.org/index.php/Top_10_2013-Top_10) en 2013.

Ces attaques réussissent si l'application Web n'emploie pas assez de validation ou d'encodage. Le navigateur de l'utilisateur ne peut pas détecter que le script malveillant n'est pas fiable et lui donne donc accès à tous les cookies, jetons de session ou autres informations sensibles propres au site, ou permet au script malveillant de réécrire le contenu {{glossary("HTML")}}.

Les attaques de script intersite se produisent généralement lorsque 1) les données entrent dans une application Web via une source non fiable (le plus souvent une requête web) ou 2) le contenu dynamique est envoyé à un utilisateur web sans être reconnu comme un contenu malveillant.

Le contenu malveillant inclut souvent {{glossary("JavaScript")}}, mais parfois HTML, Flash, ou quelqu'autre code que le navigateur peut exécuter. La diversité des attaques basées sur XSS est presque illimitée, mais elles incluent généralement la transmission de données privées comme des cookies ou d'autres informations de session à l'attaquant, redirigeant la victime vers une page Web contrôlée par l'attaquant ou exécutant d'autres opérations malveillantes sur la machine de l'utilisateur.

Les attaques XSS peuvent être classées en 3 catégories : stockée (aussi appelée persistante), reflétée (aussi appelée non-persistante) ou basée sur DOM.

- **Les attaques XSS stockées**
  - : Le script injecté est stocké en permanence sur les serveurs cibles. La victime extrait ensuite ce script malveillant du serveur lorsque le navigateur envoie une demande de données.
- **Les attaques XSS reflétées**
  - : Lorsqu'un utilisateur est trompé en cliquant sur un lien malveillant, en soumettant un formulaire spécialement conçu ou en naviguant sur un site malveillant, le code injecté se rend sur le site Web vulnérable. Le serveur Web renvoie le script injecté au navigateur de l'utilisateur, par exemple dans un message d'erreur, un résultat de recherche ou toute autre réponse incluant des données envoyées au serveur dans le cadre de la demande. Le navigateur exécute le code car il suppose que la réponse provient d'un serveur "de confiance" avec lequel l'utilisateur a déjà interagi.
- **Les attaques XSS basées sur DOM**
  - : La charge utile est exécutée à la suite de la modification de l'environnement DOM (dans le navigateur de la victime) utilisé par le script côté client d'origine. En d'autres termes, la page elle-même ne change pas, mais le code côté client contenu dans la page s'exécute de manière inattendue en raison des modifications malveillantes apportées à l'environnement DOM.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia","Cross-site_scripting")}} sur Wikipedia
- [Cross-site scripting sur OWASP](https://www.owasp.org/index.php/XSS) (en)
- [Un autre article à propos de Cross-site scripting](http://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/) (en)
