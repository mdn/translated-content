---
title: TOFU
slug: Glossary/TOFU
---

{{GlossarySidebar}}

**Trust On First Use** **(TOFU**) (_confiance à la première utilisation_) est un modèle de sécurité dans lequel un client doit créer une relation avec un serveur inconnu. Pour ce faire, les clients rechercheront des identifiants (par exemple des clés publiques) stockés localement. Si un identifiant est trouvé, le client peut établir la connexion. Si aucun identifiant n'est trouvé, le client peut demander à l'utilisateur de déterminer si le client doit approuver l'identifiant.

TOFU est utilisé dans le protocole SSH, dans [HTTP Public Key Pinning](/fr/docs/Web/Security/Certificate_Transparency) ({{Glossary("HPKP")}}) où les navigateurs accepteront la première clé publique renvoyée par le serveur et dans {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) où un navigateur obéira à la règle de redirection.

## Voir aussi

- [HTTP Public Key Pinning](/fr/docs/Web/Security/Certificate_Transparency) ({{Glossary("HPKP")}})
- {{HTTPHeader("Public-Key-Pins")}}
- [TOFU (en anglais)](https://en.wikipedia.org/wiki/Trust_on_first_use) sur Wikipédia
