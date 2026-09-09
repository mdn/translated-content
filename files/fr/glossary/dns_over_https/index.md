---
title: DNS au-dessus du HTTPS (DoH)
slug: Glossary/DNS_over_HTTPS
l10n:
  sourceCommit: d16bfe6576f65ef78054220783d97fb49194231c
---

Les **DNS au-dessus du HTTPS** (**<abbr lang="en" title="DNS over HTTPS">DoH</abbr>**) sont un protocole permettant d'effectuer la résolution {{Glossary("DNS")}} sur une connexion {{Glossary("HTTPS")}} chiffrée. Au lieu d'envoyer des requêtes et des réponses en texte clair, DoH les transporte à l'intérieur des requêtes HTTPS, ce qui empêche les parties intermédiaires de lire ou de modifier les noms de domaine qu'un client recherche.

Le trafic DNS traditionnel n'est pas chiffré, ce qui permet aux opérateurs réseau et à d'autres observateurs de voir quels noms d'hôte un·e utilisateur·ice résout et de falsifier les réponses. En chiffrant ce trafic et en réutilisant le port HTTPS standard (443), DoH améliore la confidentialité et l'intégrité de la résolution des noms et rend les requêtes DNS plus difficiles à isoler du reste du trafic web.

## Voir aussi

- {{RFC(8484, "DNS Queries over HTTPS (DoH)")}}
- [DNS au-dessus du HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS) sur Wikipedia
- Les termes de glossaire associés&nbsp;:
  - {{Glossary("DNS")}}
  - {{Glossary("HTTPS")}}
  - {{Glossary("TLS")}}
