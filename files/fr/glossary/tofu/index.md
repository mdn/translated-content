---
title: TOFU
slug: Glossary/TOFU
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Trust On First Use** (**TOFU**) (_confiance à la première utilisation_) est un modèle de sécurité dans lequel un client doit créer une relation avec un serveur inconnu. Pour ce faire, les clients rechercheront des identifiants (par exemple des clés publiques) stockés localement. Si un identifiant est trouvé, le client peut établir la connexion. Si aucun identifiant n'est trouvé, le client peut demander à l'utilisateur de déterminer si le client doit approuver l'identifiant.

Le TOFU est utilisé dans le protocole SSH et dans l'en‑tête HTTP {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}), où le navigateur respecte la règle de redirection.

## Voir aussi

- [TOFU <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Trust_on_first_use) sur Wikipédia
