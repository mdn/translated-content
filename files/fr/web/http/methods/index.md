---
title: Méthodes de requête HTTP
slug: Web/HTTP/Methods
---

{{HTTPSidebar}}

HTTP définit un ensemble de **méthodes de requête** qui indiquent l'action que l'on souhaite réaliser sur la ressource indiquée. Bien qu'on rencontre également des noms (en anglais), ces méthodes sont souvent appelées _verbes HTTP_. Chacun d'eux implémente une sémantique différente mais certaines fonctionnalités courantes peuvent être partagées par différentes méthodes (e.g. une méthode de requête peut être sûre (_safe_), idempotente ou être mise en cache (_cacheable_)).

- [`GET`](/fr/docs/Web/HTTP/Méthode/GET)
  - : La méthode `GET` demande une représentation de la ressource spécifiée. Les requêtes GET doivent uniquement être utilisées afin de récupérer des données.
- [`HEAD`](/fr/docs/Web/HTTP/Méthode/HEAD)
  - : La méthode `HEAD` demande une réponse identique à une requête GET pour laquelle on aura omis le corps de la réponse (on a uniquement l'en-tête).
- [`POST`](/fr/docs/Web/HTTP/Méthode/POST)
  - : La méthode `POST` est utilisée pour envoyer une entité vers la ressource indiquée. Cela entraîne généralement un changement d'état ou des effets de bord sur le serveur.
- [`PUT`](/fr/docs/Web/HTTP/Méthode/PUT)
  - : La méthode `PUT` remplace toutes les représentations actuelles de la ressource visée par le contenu de la requête.
- [`DELETE`](/fr/docs/Web/HTTP/Méthode/DELETE)
  - : La méthode `DELETE` supprime la ressource indiquée.
- [`CONNECT`](/fr/docs/Web/HTTP/Méthode/CONNECT)
  - : La méthode `CONNECT` établit un tunnel vers le serveur identifié par la ressource cible.
- [`OPTIONS`](/fr/docs/Web/HTTP/Méthode/OPTIONS)
  - : La méthode `OPTIONS` est utilisée pour décrire les options de communications avec la ressource visée.
- [`TRACE`](/fr/docs/Web/HTTP/Méthode/TRACE)
  - : La méthode `TRACE` réalise un message de test aller/retour en suivant le chemin de la ressource visée.
- [`PATCH`](/fr/docs/Web/HTTP/Méthode/PATCH)
  - : La méthode `PATCH` est utilisée pour appliquer des modifications partielles à une ressource.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les en-têtes (_headers_) HTTP](/fr/docs/HTTP/Headers)
