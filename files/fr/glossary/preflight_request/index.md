---
title: Requête de pré-vérification
slug: Glossary/Preflight_request
tags:
  - CORS
  - HTTP
  - pré-vérification
translation_of: Glossary/Preflight_request
original_slug: Glossaire/requete_pre-verification
---
Une requête de pré-vérification cross-origin [CORS](/fr/docs/Glossaire/CORS) est une requête de vérification faite pour contrôler si le protocole {{Glossary("CORS")}} est autorisé.

C'est une requête utilisant la méthode {{HTTPMethod("OPTIONS")}} qui utilise trois en-têtes HTTP : La méthode {{HTTPHeader("Access-Control-Request-Method")}}, les en-têtes {{HTTPHeader("Access-Control-Request-Headers")}} et {{HTTPHeader("Origin")}}.

Une requête de pré-vérification est automatiquement envoyée par le navigateur quand cela est nécessaire. Dans les cas normaux, les intégrateurs n'ont pas besoin de construire eux-mêmes cette requête.

Par exemple, un client peut demander au serveur si celui-ci autorise l'usage de la méthode {{HTTPMethod("DELETE")}} dans la requête HTTP, avant d'envoyer la "vraie" requête avec la méthode {{HTTPMethod("DELETE")}} :

    OPTIONS /resource/foo
    Access-Control-Request-Method: DELETE
    Access-Control-Request-Headers: origin, x-requested-with
    Origin: https://foo.bar.org

Si le serveur l'accepte, alors celui-ci va répondre à la requête de pré-vérification en envoyant une réponse HTTP contenant l'entête {{HTTPHeader("Access-Control-Allow-Methods")}} dont la valeur contiendra dans sa liste la méthode `DELETE`:

    HTTP/1.1 200 OK
    Content-Length: 0
    Connection: keep-alive
    Access-Control-Allow-Origin: https://foo.bar.org
    Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
    Access-Control-Max-Age: 86400

À remarquer dans cet exemple que le serveur autorise les méthodes : POST ; GET ; OPTIONS et DELETE.

## Voir également

- [CORS](/fr/docs/Glossary/CORS)
- {{HTTPMethod("OPTIONS")}}
