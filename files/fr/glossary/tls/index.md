---
title: TLS
slug: Glossary/TLS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Transport Layer Security (TLS)**, anciennement appelé {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, est un {{Glossary("protocol", "protocole")}} utilisé par les applications pour communiquer de manière sécurisée sur un réseau, en évitant la falsification et l'écoute (interception) des courriels, de la navigation web, de la messagerie et d'autres protocoles. TLS et SSL sont tous deux des protocoles client/serveur garantissant la confidentialité des communications par l'utilisation de protocoles cryptographiques. Lorsqu'un serveur et un client communiquent via TLS, cela empêche tout tiers d'intercepter ou d'altérer les messages.

Tous les navigateurs modernes prennent en charge le protocole TLS, ce qui nécessite que le serveur fournisse un {{Glossary("Digital certificate", "certificat numérique")}} valide confirmant son identité afin d'établir une connexion sécurisée. Il est possible que le client et le serveur s'authentifient mutuellement si chacune des deux parties fournit son propre certificat numérique.

> [!NOTE]
> Tous les principaux navigateurs ont commencé à supprimer la prise en charge de TLS 1.0 et 1.1 au début de 2020&nbsp;; vous devez vous assurer que votre serveur web prend en charge TLS 1.2 ou TLS 1.3.
> À partir de la version 74, Firefox renverra une erreur [Secure Connection Failed](https://support.mozilla.org/fr-fr/kb/secure-connection-failed-firefox-did-not-connect) lors de la connexion à des serveurs utilisant les anciennes versions de TLS ([Firefox bug 1606734 <sup>(angl.)</sup>](https://bugzil.la/1606734)).

## Voir aussi

- [Transport Layer Security](https://fr.wikipedia.org/wiki/Transport_Layer_Security) sur Wikipédia
- [RFC 8446 (Le protocole Transport Layer Security, version 1.3) <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc8446)
- [RFC 5246 (Le protocole Transport Layer Security, version 1.2) <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc5246)
- [Transport Layer Security](/fr/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) sur OWASP
- Termes du glossaire&nbsp;:
  - {{Glossary("HTTPS")}}
  - {{Glossary("SSL")}}
