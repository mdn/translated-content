---
title: Méthodes de requête HTTP
short-title: Méthodes de requête
slug: Web/HTTP/Reference/Methods
original_slug: Web/HTTP/Methods
---

<abbr title="Hypertext Transfer Protocol">HTTP</abbr> définit un ensemble de **méthodes de requête** pour indiquer le but de la requête et ce qui est attendu en cas de succès.
Bien qu'elles puissent aussi être des noms, ces méthodes de requête sont parfois appelées _verbes HTTP_.
Chaque méthode possède sa propre sémantique, mais certaines caractéristiques sont partagées entre plusieurs méthodes&nbsp;: les méthodes de requête peuvent être {{Glossary("Safe/HTTP", "sûre")}}, {{Glossary("idempotent", "idempotente")}} ou {{Glossary("cacheable", "cachable")}}.

- {{HTTPMethod("GET")}}
  - : La méthode `GET` demande une représentation de la ressource spécifiée.
    Les requêtes utilisant `GET` doivent uniquement récupérer des données et ne doivent pas contenir de {{Glossary("HTTP Content", "contenu")}} de requête.
- {{HTTPMethod("HEAD")}}
  - : La méthode `HEAD` demande une réponse identique à une requête `GET`, mais sans le corps de la réponse.
- {{HTTPMethod("POST")}}
  - : La méthode `POST` soumet une entité à la ressource spécifiée, provoquant souvent un changement d'état ou des effets secondaires sur le serveur.
- {{HTTPMethod("PUT")}}
  - : La méthode `PUT` remplace toutes les représentations actuelles de la ressource cible par le {{Glossary("HTTP Content", "contenu")}} de la requête.
- {{HTTPMethod("DELETE")}}
  - : La méthode `DELETE` supprime la ressource spécifiée.
- {{HTTPMethod("CONNECT")}}
  - : La méthode `CONNECT` établit un tunnel vers le serveur identifié par la ressource cible.
- {{HTTPMethod("OPTIONS")}}
  - : La méthode `OPTIONS` décrit les options de communication pour la ressource cible.
- {{HTTPMethod("TRACE")}}
  - : La méthode `TRACE` effectue un test de boucle de message le long du chemin vers la ressource cible.
- {{HTTPMethod("PATCH")}}
  - : La méthode `PATCH` applique des modifications partielles à une ressource.

## Méthodes sûres, idempotentes et cachables

Le tableau suivant liste les méthodes de requête HTTP et leur catégorisation en termes de sûreté, de possibilité de mise en cache et d'idempotence.

| Méthode                   | Sûre | Idempotente | Cachable         |
| ------------------------- | ---- | ----------- | ---------------- |
| {{HTTPMethod("GET")}}     | Oui  | Oui         | Oui              |
| {{HTTPMethod("HEAD")}}    | Oui  | Oui         | Oui              |
| {{HTTPMethod("OPTIONS")}} | Oui  | Oui         | Non              |
| {{HTTPMethod("TRACE")}}   | Oui  | Oui         | Non              |
| {{HTTPMethod("PUT")}}     | Non  | Oui         | Non              |
| {{HTTPMethod("DELETE")}}  | Non  | Oui         | Non              |
| {{HTTPMethod("POST")}}    | Non  | Non         | Conditionnelle\* |
| {{HTTPMethod("PATCH")}}   | Non  | Non         | Conditionnelle\* |
| {{HTTPMethod("CONNECT")}} | Non  | Non         | Non              |

\* `POST` et `PATCH` sont cachables lorsque les réponses incluent explicitement des informations de [fraîcheur](/fr/docs/Web/HTTP/Guides/Caching) et un en-tête {{HTTPHeader("Content-Location")}} correspondant.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
