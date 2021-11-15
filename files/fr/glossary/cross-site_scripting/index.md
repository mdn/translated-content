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
<p>Cross-site scripting (XSS) est une faille de sécurité qui permet à un attaquant d'injecter dans un site web un code client malveillant. Ce code est exécuté par les victimes et permet aux attaquants de contourner les contrôles d'accès et d'usurper l'identité des utilisateurs. Selon le projet Open Web Application Security, XSS était la <a href="https://www.owasp.org/index.php/Top_10_2013-Top_10">troisième cause de vulnérabilité des applications du web</a> en 2013.</p>

<p>Ces attaques réussissent si l'application Web n'emploie pas assez de validation ou d'encodage. Le navigateur de l'utilisateur ne peut pas détecter que le script malveillant n'est pas fiable et lui donne donc accès à tous les cookies, jetons de session ou autres informations sensibles propres au site, ou permet au script malveillant de réécrire le contenu {{glossary("HTML")}}.</p>

<p>Les attaques de script intersite se produisent généralement lorsque 1) les données entrent dans une application Web via une source non fiable (le plus souvent une requête web) ou 2) le contenu dynamique est envoyé à un utilisateur web sans être reconnu comme un contenu malveillant.</p>

<p>Le contenu malveillant inclut souvent {{glossary("JavaScript")}}, mais parfois HTML, Flash, ou quelqu'autre code que le navigateur peut exécuter. La diversité des attaques basées sur XSS est presque illimitée, mais elles incluent généralement la transmission de données privées comme des cookies ou d'autres informations de session à l'attaquant, redirigeant la victime vers une page Web contrôlée par l'attaquant ou exécutant d'autres opérations malveillantes sur la machine de l'utilisateur.</p>

<p>Les attaques XSS peuvent être classées en 3 catégories : stockée (aussi appelée persistante), reflétée (aussi appelée non-persistante) ou basée sur DOM.</p>

<dl>
 <dt><strong>Les attaques XSS stockées</strong></dt>
 <dd>Le script injecté est stocké en permanence sur les serveurs cibles. La victime extrait ensuite ce script malveillant du serveur lorsque le navigateur envoie une demande de données.</dd>
 <dt><strong>Les attaques XSS reflétées</strong></dt>
 <dd>Lorsqu'un utilisateur est trompé en cliquant sur un lien malveillant, en soumettant un formulaire spécialement conçu ou en naviguant sur un site malveillant, le code injecté se rend sur le site Web vulnérable. Le serveur Web renvoie le script injecté au navigateur de l'utilisateur, par exemple dans un message d'erreur, un résultat de recherche ou toute autre réponse incluant des données envoyées au serveur dans le cadre de la demande. Le navigateur exécute le code car il suppose que la réponse provient d'un serveur "de confiance" avec lequel l'utilisateur a déjà interagi.</dd>
 <dt><strong>Les attaques XSS basées sur DOM</strong></dt>
 <dd>La charge utile est exécutée à la suite de la modification de l'environnement DOM (dans le navigateur de la victime) utilisé par le script côté client d'origine. En d'autres termes, la page elle-même ne change pas, mais le code côté client contenu dans la page s'exécute de manière inattendue en raison des modifications malveillantes apportées à l'environnement DOM.</dd>
</dl>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>{{Interwiki("wikipedia","Cross-site_scripting")}} sur Wikipedia</li>
 <li><a href="https://www.owasp.org/index.php/XSS">Cross-site scripting sur OWASP</a> (en)</li>
 <li><a href="http://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/">Un autre article à propos de Cross-site scripting</a> (en)</li>
</ul>
