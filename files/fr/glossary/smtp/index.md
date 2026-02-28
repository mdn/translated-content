---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**SMTP** (Simple Mail Transfer Protocol) est un {{Glossary("protocol", "protocole")}} utilisé pour envoyer un nouveau courriel. Tout comme {{Glossary("POP")}} et {{Glossary("NNTP")}}, il s'agit d'un protocole piloté par une {{Glossary("state machine", "machine d'état")}}.

Le protocole est relativement simple. Les principales difficultés viennent du support des divers mécanismes d'authentification ([GSSAPI](https://fr.wikipedia.org/wiki/GSS-API), [CRAM-MD5 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://fr.wikipedia.org/wiki/NT_Lan_Manager), MSN, AUTH LOGIN, AUTH PLAIN, etc.), de la gestion des réponses en cas d'erreurs, et de trouver un moyen de réagir en cas d'échec des mécanismes d'authentification (e.g., le serveur affirme prendre en charge un mécanisme, mais ne le fait pas en réalité).

## Voir aussi

- [SMTP](https://fr.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) sur Wikipédia
- Termes associés du glossaire&nbsp;:
  - {{Glossary("NNTP")}}
  - {{Glossary("POP")}}
  - {{Glossary("protocol", "Protocole")}}
  - {{Glossary("state machine", "Machine d'état")}}
