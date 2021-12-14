---
title: HTTP
slug: Glossary/HTTP
tags:
  - Débutant
  - Glossaire
  - HTTP
  - Infrastructure
translation_of: Glossary/HTTP
original_slug: Glossaire/HTTP
---
L'*Hypertext Transfer Protocol* (**HTTP**) (_Protocole de transfert hypertexte_) est un {{glossary("Protocol","protocole")}} de base qui autorise le transfert de fichiers sur le {{glossary("World Wide Web","web")}}, typiquement entre un navigateur web et un serveur afin que des utilisateurs puissent les consulter. La version actuelle de la spécification HTTP s'appelle {{glossary("HTTP_2", "HTTP/2")}}.

Dans le cadre d'une {{glossary("URI")}}, la partie "http\://" s'appelle le "schema" et commence la plupart du temps au début d'une addresse. Par exemple, dans "https\://developer.mozilla.org", "https\://" indique au navigateur de requêter le document au travers du protocole HTTP. Plus précisément, dans cet exemple, https fait référence à la version sécurisée du protocole HTTP, {{glossary("SSL")}} (also called TLS).

HTTP est textuel (toute communication est faite en texte clair) et sans état (aucune communication n'est au courant des communications précédentes). Cette dernière propriété permet à un utilisateur de naviguer facilement sur internet: la consultation des documents et sites web ne requiert pas de contexte particulier. HTTP peut également être utilisé dans le cadre de services REST pour la communication de serveur à serveur, ou bien via des requêtes AJAX au sein d'un site internet pour le rendre plus dynamique.

## En apprendre plus

- [HTTP sur MDN](/fr/docs/HTTP)
- {{interwiki("wikipedia","Hypertext_Transfer_Protocol","HTTP")}} sur Wikipedia
