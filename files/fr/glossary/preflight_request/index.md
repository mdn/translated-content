---
title: Requête de pré-vérification
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Une requête de pré-vérification cross-origin {{Glossary("CORS")}} est une requête de vérification faite pour contrôler si le protocole CORS est autorisé.

Il s'agit d'une requête {{HTTPMethod("OPTIONS")}}, utilisant deux ou trois en-têtes de requête HTTP&nbsp;: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}}, et éventuellement {{HTTPHeader("Access-Control-Request-Headers")}}.

Une requête de pré-vérification est automatiquement émise par un navigateur et, dans la plupart des cas, les développeur·euse·s front-end n'ont pas besoin de créer ces requêtes manuellement. Elle apparaît lorsqu'une requête est qualifiée [«&nbsp;à pré-vérifier&nbsp;»](/fr/docs/Web/HTTP/Guides/CORS#requêtes_pré-vérifiées) et est omise pour les [requêtes simples](/fr/docs/Web/HTTP/Guides/CORS#requêtes_simples).

Par exemple, un client peut demander à un serveur s'il autoriserait une requête {{HTTPMethod("DELETE")}}, avant d'envoyer une requête `DELETE`, en utilisant une requête de pré-vérification&nbsp;:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: x-requested-with
Origin: https://www.exemple.com
```

Si le serveur l'accepte, alors celui-ci va répondre à la requête de pré-vérification en envoyant une réponse HTTP contenant l'entête {{HTTPHeader("Access-Control-Allow-Methods")}} dont la valeur contiendra dans sa liste la méthode `DELETE` :

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://www.exemple.com
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 86400
```

À remarquer dans cet exemple que le serveur autorise les méthodes : POST ; GET ; OPTIONS et DELETE.

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("CORS")}}
- La méthode HTTP {{HTTPMethod("OPTIONS")}}
