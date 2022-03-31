---
title: L'essentiel de HTTP
slug: Web/HTTP/Basics_of_HTTP
tags:
  - Aperçu
  - HTTP
translation_of: Web/HTTP/Basics_of_HTTP
---
{{HTTPSidebar}}

HTTP est un protocole extensible. Il s'appuie sur quelques concepts basiques comme la notion de ressources et d'URI, une structure de messages simple et une structure client-serveur pour le flux de communication. En plus de ces concepts basiques, de nombreuses extensions du protocole sont apparues au fil des ans, ajoutant de nouvelles fonctionnalités et de nouvelle syntaxes en créant de nouvelles méthodes ou en-têtes HTTP.

## Articles

- [Vue d'ensemble de HTTP](/fr/docs/Web/HTTP/Overview)
  - : Décrit ce qu'est HTTP et son rôle dans l'architecture du Web ainsi que sa position dans la pile de protocoles.
- [Évolution de HTTP](/fr/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP a été créé au début des années 1990 et a été étendu plusieurs fois. Cet article relate son histoire et décrit HTTP/0.9, HTTP/1.0, HTTP/1.1, et le récent HTTP/2. Les nouveautés mineures introduites au fil des ans sont aussi présentées.
- **Négocier une version HTTP**
  - : Explique comment un client et un serveur peuvent négocier une version HTTP spécifique pour pouvoir utiliser une version plus récente du protocole.
- [Ressources et URIs](/fr/docs/Web/HTTP/Resources_and_URIs)
  - : Une brève introduction à la notion de ressources, d'identifiants, et de localisations sur le web.
- [Identifier des ressources sur le web](/fr/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : Décrit comment les ressources web sont référencées et comment les localiser.
- [URIs de données](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : Un type d'URIs spécifique qui intègre directement la ressource qu'il représente. Les URIs de données sont très commodes mais s'accompagnent de quelques mises en garde.
- URLs de ressources
  - : Les URLs de ressources, qui sont préfixées par le schéma `resource:` sont utilisées par Firefox et les extensions de Firefox pour charger des ressources de façon interne, néanmoins une partie de l'information est exposée aux sites web lorsque le navigateur s'y connecte.
- Séparer l'identité et la localisation d'une ressource : l'en-tête HTTP Alt-Svc (Alternative Service)
  - : La plupart du temps, l'identité et la localisation d'une ressource web sont associées. Cela peut être modifié avec l'en-tête {{HTTPHeader("Alt-Svc")}}.
- [Types MIME](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : Depuis HTTP/1.0, différents types de contenus peuvent être transmis. Cet article explique comment cela est fait via l'utilisation de l'en-tête {HTTPHeader("Content-Type")}} et le standard MIME.
- [Choisir entre des URL de type www ou non](/fr/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : Conseil sur l'utilisation d'un domaine préfixé ou non par www. Cet article explique les conséquences de ce choix aussi que les facteurs à considérer lors du choix.
- Flux d'une session HTTP
  - : Cet article fondamental décrit une session HTTP typique ; c'est-à-dire ce qui se passe "sous le capot" quand vous cliquez sur un lien dans votre navigateur ...
- [Messages HTTP](/fr/docs/Web/HTTP/Messages)
  - : Les messages HTTP transmis pendant les requêtes ou les réponses ont une structure très claire. Cet article d'introduction décrit cette structure, son but et les possibilités qu'elle offre.
- Trame et structure de message en HTTP/2
  - : HTTP/2 représente les messages HTTP/1.x par une trame binaire. Cet article explique la structure de la trame, son but et la manière dont elle est encodée.
- [Gestion des connexions en HTTP/1.x](/fr/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 était la première version d'HTTP à supporter les connexions persistantes et la combinaison de requêtes dans une seule connexion. Cet article explique ces deux concepts.
- Gestion des connexions en HTTP/2
  - : HTTP/2 a complètement revisité la manière dont les connexions sont créées et maintenues. Cet article explique comment les trames HTTP permettent le multiplexage et résolvent le problème de la trame bloquante ('head-of-line' blocking) des précédentes versions.
- [Négociation du contenu](/fr/docs/Web/HTTP/Content_negotiation)
  - : HTTP introduit une série d'en-têtes commençant par `Accept-` permettant a un navigateur d'annoncer le format, la langue ou l'encodage qu'il préfère. Cet article explique comment cette préférence est déclarée, quelle réaction est attendue de la part du serveur et comment celui-ci choisit la réponse la plus adéquate possible.
