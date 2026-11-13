---
title: Falsification de requête inter-sites (CSRF)
slug: Glossary/CSRF
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Dans une attaque de **falsification de requête inter-sites** (<i lang="en">cross-site request forgery</i>, CSRF en anglais), un·e attaquant·e trompe le navigateur pour qu'il effectue une requête HTTP vers le site cible à partir d'un site malveillant. La requête inclut les identifiants de l'utilisateur·ice et amène le serveur à exécuter une action nuisible, pensant que l'utilisateur·ice l'a voulue.

Une attaque CSRF est possible si un site web&nbsp;:

- utilise des requêtes HTTP pour modifier un état côté serveur&nbsp;;
- utilise uniquement des cookies pour valider que la requête provient d'un·e utilisateur·ice authentifié·e&nbsp;;
- utilise uniquement des paramètres dans la requête qu'un·e attaquant·e peut prédire.

Il existe plusieurs moyens de se défendre contre les attaques CSRF, notamment l'utilisation de [jetons CSRF](/fr/docs/Web/Security/Attacks/CSRF#jetons_csrf), l'utilisation des [métadonnées fetch](/fr/docs/Web/Security/Attacks/CSRF#fetch_metadata) pour bloquer certaines requêtes inter-sites, et le [paramétrage de l'attribut `SameSite`](/fr/docs/Web/Security/Attacks/CSRF#defense_in_depth_samesite_cookies) sur les cookies utilisés pour authentifier les requêtes sensibles.

## Voir aussi

- [Falsification de requête inter-sites](/fr/docs/Web/Security/Attacks/CSRF)
- [Aide-mémoire pour la prévention des attaques CSRF <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) sur [owasp.org <sup>(angl.)</sup>](https://owasp.org/)
