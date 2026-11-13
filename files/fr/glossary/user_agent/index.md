---
title: Agent utilisateur
slug: Glossary/User_agent
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un agent utilisateur est un programme informatique qui représente une personne, par exemple, un {{Glossary("Browser", "navigateur")}} dans le cadre d'une utilisation sur le {{Glossary("World Wide Web", "Web")}}.

En dehors des navigateurs, un agent utilisateur peut être un aspirateur de sites, un gestionnaire de téléchargements ou toute autre application accédant au Web. Les navigateurs, lorsqu'ils effectuent des requêtes vers un serveur, y intègrent un en-tête {{Glossary("HTTP")}} auto-identifiant {{HTTPHeader("User-Agent")}} appelé chaîne de caractères user agent (UA). Souvent, cette chaîne identifie le navigateur, son numéro de version ainsi que le système d'exploitation de l'hôte.

Les spambots, gestionnaires de téléchargements et certains navigateurs envoient souvent des chaînes UA falsifiées pour se présenter eux-mêmes comme un client différent. Cette action est nommée <i lang="en">user agent spoofing</i> (ou usurpation d'agent utilisateur en français).

Côté client, la chaîne de l'agent utilisateur est accessible en {{Glossary("JavaScript")}} avec la propriété {{DOMxRef("navigator.userAgent")}}.

Une chaîne classique d'agent utilisateur ressemble à ceci&nbsp;: `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

## Voir aussi

- [Agent utilisateur](https://fr.wikipedia.org/wiki/User-agent) sur Wikipédia
- La propriété JavaScript {{DOMxRef("navigator.userAgent")}}
- [Détection du navigateur via l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}&nbsp;: l'en-tête `User-Agent`
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Browser", "Navigateur")}}
- L'en-tête HTTP {{HTTPHeader("User-Agent")}}
