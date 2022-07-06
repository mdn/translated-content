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
**Trust On First Use** **(TOFU**) (_confiance à la première utilisation_) est un modèle de sécurité dans lequel un client doit créer une relation avec un serveur inconnu. Pour ce faire, les clients rechercheront des identifiants (par exemple des clés publiques) stockés localement. Si un identifiant est trouvé, le client peut établir la connexion. Si aucun identifiant n'est trouvé, le client peut demander à l'utilisateur de déterminer si le client doit approuver l'identifiant.

TOFU est utilisé dans le protocole SSH, dans [HTTP Public Key Pinning](/fr/docs/Web/HTTP/Public_Key_Pinning) ({{Glossary("HPKP")}}) où les navigateurs accepteront la première clé publique renvoyée par le serveur et dans {{HTTPHeader("Strict-Transport-Security")}}  ({{Glossary("HSTS")}}) où un navigateur obéira à la règle de redirection.

## En apprendre plus

- [HTTP Public Key Pinning](/fr/docs/Web/HTTP/Public_Key_Pinning) ({{Glossary("HPKP")}})
- {{HTTPHeader("Public-Key-Pins")}}
- Wikipedia : [TOFU (en anglais)](https://en.wikipedia.org/wiki/Trust_on_first_use)
