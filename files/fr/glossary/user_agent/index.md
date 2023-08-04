---
title: Agent utilisateur
slug: Glossary/User_agent
---

Un agent utilisateur est un programme informatique qui représente une personne, par exemple, un {{Glossary("Navigateur","navigateur")}} dans le cadre d'une utilisation sur le {{Glossary("World Wide Web", "Web")}}.

En dehors des navigateurs, un agent utilisateur peut être un aspirateur de sites, un gestionnaire de téléchargements ou toute autre application accédant au Web. Les navigateurs, lorsqu'ils effectuent des requêtes vers un serveur, y intègrent un en-tête {{Glossary("HTTP")}} auto-identifiant `User-Agent` appelé chaîne de caractères user agent (UA). Souvent, cette chaîne identifie le navigateur, son numéro de version ainsi que le système d'exploitation de l'hôte.

Les spambots, gestionnaires de téléchargements et certains navigateurs envoient souvent des chaînes UA falsifiées pour se présenter eux-mêmes comme un client différent. Cette action est nommée _user agent spoofing_.

Côté client, la chaîne de l'agent utilisateur est accessible en {{Glossary("JavaScript")}} avec `navigator.userAgent.`

Une chaîne classique d'agent utilisateur ressemble à ceci : `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

## Voir aussi

### Culture générale

- [Agent utilisateur](https://fr.wikipedia.org/wiki/User-agent) sur Wikipédia

### Référence technique

- En-tête [User agent](http://tools.ietf.org/html/rfc2616#section-14.43) dans la RFC 2616
