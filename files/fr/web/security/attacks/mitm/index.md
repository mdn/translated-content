---
title: Manipulateur au milieu (MITM)
slug: Web/Security/Attacks/MITM
l10n:
  sourceCommit: 8e6760da4c8c8e3fbbabe9686ba16850c99092ba
---

Dans une attaque du Manipulateur au milieu (<abbr lang="en">MITM</abbr>, <i lang="en">Manipulator in the middle</i> en anglais), l'attaquant·e s'insère entre deux entités qui tentent de communiquer entre elles.

Sur le web, une attaque MITM se produit généralement entre le navigateur de l'utilisateur·ice et le serveur, et permet à l'attaquant·e de voir et éventuellement de modifier toute donnée échangée par HTTP.

Une méthode courante pour exécuter une attaque MITM consiste pour un·e attaquant·e à configurer un point d'accès sans fil dans un lieu public, comme un café ou un aéroport, puis à attendre qu'une victime s'y connecte. Si une victime s'y connecte, l'attaquant·e peut lire et modifier toutes les données échangées entre le navigateur de l'utilisateur·ice et les sites auxquels cette personne se connecte.

## Défendre contre les attaques MITM

La principale défense contre les attaques MITM consiste à servir votre site sur {{Glossary("HTTPS")}} (HTTP sur {{Glossary("TLS")}}). HTTPS empêche un·e attaquant·e de lire le trafic ou de le modifier d'une manière prévisible.

Vous devez servir toutes les pages sur HTTPS, et pas uniquement celles que vous considérez comme particulièrement sensibles.

Le [guide TLS](/fr/docs/Web/Security/Defenses/Transport_Layer_Security) décrit les principaux problèmes à prendre en compte ici. En particulier&nbsp;:

- Utilisez une [configuration TLS sécurisée](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#configurer_le_tls).

- Mettez en place [l'authentification du serveur](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#serveur_dauthentification).

- [Servez toutes les ressources sur TLS](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#contenu_mélangé)&nbsp;: pas uniquement les documents HTML, mais aussi toutes les sous-ressources comme les scripts, les feuilles de style, les images et les polices.

- Si vous redirigez les requêtes HTTP pour utiliser HTTPS, mettez en place la [sécurité de transport stricte (HSTS)](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#mettre_à_niveau_les_connexions_http).

## Voir aussi

- [Let's Encrypt <sup>(angl.)</sup>](https://letsencrypt.org/)
- [Configurations TLS recommandées <sup>(angl.)</sup>](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Antisèche sur la sécurité de la couche de transport <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [Antisèche sur la sécurité de transport stricte HTTP <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
