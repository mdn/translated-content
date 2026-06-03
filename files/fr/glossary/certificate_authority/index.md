---
title: Autorité de certification
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **autorité de certification** (<abbr>AC</abbr>, ou <abbr title="Certificate Authority" lang="en">CA</abbr> en anglais) est une organisation qui {{Glossary("Signature/Security", "signe")}} des {{Glossary("Digital certificate", "certificats numériques")}} et leurs {{Glossary("Key", "clés publiques")}}, affirmant ainsi que les informations et les clés contenues sont correctes.

Pour un certificat numérique d'un site web, ces informations comprennent au minimum le nom de l'organisation ayant demandé le certificat numérique (par exemple, Mozilla Corporation), le site pour lequel il est destiné (par exemple, mozilla.org), et l'autorité de certification.

Les autorités de certification font partie de [l'infrastructure à clés publiques](https://fr.wikipedia.org/wiki/Infrastructure_%C3%A0_cl%C3%A9s_publiques) permettant aux navigateurs de vérifier les identités des sites web pour les connexions sécurisées avec TLS (pour accéder aux sites en HTTPS).

> [!NOTE]
> Les navigateurs web possèdent chacun une liste de certificats racines préchargés. Le navigateur peut utiliser ces certificats racines pour vérifier de façon sûre que le certificat du site web a été signé par une autorité de certification qu'on peut remonter jusqu'à un certificat racine (autrement dit, l'autorité de certification bénéficie de la confiance du propriétaire du certificat racine ou d'une autorité de certification intermédiaire). Ce processus de chaîne de confiance repose sur le principe que chaque autorité de certification effectue les vérifications d'identité nécessaires avant de signer un certificat&nbsp;!

## Voir aussi

- [Autorité de certification](https://fr.wikipedia.org/wiki/Autorit%C3%A9_de_certification) sur Wikipédia
- [Infrastructure à clés publiques](https://fr.wikipedia.org/wiki/Infrastructure_%C3%A0_cl%C3%A9s_publiques) sur Wikipédia
- [La liste des certificats racines incluse dans le code Mozilla <sup>(angl.)</sup>](https://wiki.mozilla.org/CA/Included_Certificates)
