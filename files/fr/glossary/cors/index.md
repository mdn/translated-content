---
title: CORS
slug: Glossary/CORS
---

CORS (Partage de ressource cross-origin) est un mécanisme qui consiste à transmettre des [entêtes HTTP](/fr/docs/HTTP/Headers) qui déterminent s'il faut ou non bloquer les requêtes à des ressources restreintes sur une page web qui se trouve sur un domaine externe au domaine dont la ressource est originaire.

La [politique de sécurité de même origine](/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript) interdit les requêtes d'origines différentes par défaut et ce pour des raisons de sécurité.
CORS permet de contourner cette limitation en permettant au serveur d'avoir le contrôle sur les ressources partagés et offre un mécanisme sécurisé pour permettre l'échange de données qui ne partagent pas le même domaine d'origine (d'où le terme "_cross-origin_").

## Voir aussi

### Culture générale

- [Contrôle d'accès HTTP (CORS)](/fr/docs/HTTP/Access_control_CORS) sur MDN
- [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) sur Wikipédia (anglais)

### En-têtes liés au CORS

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indique le ou les domaines pour lesquels la ressource peut être partagée.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indique si la réponse peut ou non être exposée si le flag est à "_true_".
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Utilisé en réponse à une requête de pré-vérification pour indiquer quels sont les en-têtes qui peuvent être utilisés dans la requête courante.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Utilisé en réponse à une requête de pré-vérification pour indiquer quels sont les méthodes allouées pour accéder à une ressource.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indique quels en-têtes peuvent être exposés dans le cadre de la réponse en énumérant leurs noms.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indique combien de temps le résultat d'une pré-vérification peut être gardé en cache par le demandeur de la pré-vérification.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Utilisé lors de l'émission d'une demande de contrôle en amont, pour indiquer au serveur quels en-têtes HTTP seront utilisés lors de la demande.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Utilisé lors de l'émission d'une demande de contrôle en amont permettant au serveur de savoir quelle méthode HTTP sera utilisée lors de la création de la requête.
- {{HTTPHeader("Origin")}}
  - : Indique quelle est l'origine d'une récupération.

### Référence technique

- [Spécification fetch](https://fetch.spec.whatwg.org/#http-cors-protocol)
