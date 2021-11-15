---
title: SMTP
slug: Glossary/SMTP
tags:
  - Collaboration
  - Débutant
  - Glossaire
  - Infrastructure
  - Partage
translation_of: Glossary/SMTP
original_slug: Glossaire/SMTP
---
**SMTP** (Simple Mail Transfer Protocol) est un {{glossary("protocol","protocole")}} utilisé pour envoyer un nouveau courriel. Tout comme [POP3](/fr/docs/Glossaire/POP) et [NNTP](/fr/docs/Glossaire/NNTP), il s'agit d'un protocole piloté par une {{Glossary("state machine","machine d'état")}}.

Le protocole est relativement simple. Les principales difficultés viennent du support des divers mécanismes d'authentification ([GSSAPI](http://fr.wikipedia.org/wiki/GSS-API), [CRAM-MD5](http://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](http://fr.wikipedia.org/wiki/NT_Lan_Manager), MSN, AUTH LOGIN, AUTH PLAIN, etc.), de la gestion des réponses en cas d'erreurs, et de trouver un moyen de réagir en cas d'échec des mécanismes d'authentification (e.g., le serveur affirme prendre en charge un mécanisme, mais ne le fait pas en réalité).

## Pour approfondir

### Culture générale

- {{Interwiki("wikipedia", "SMTP")}} sur Wikipédia
