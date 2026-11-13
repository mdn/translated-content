---
title: "Raison : Jeton « xyz » invalide dans l'en-tête CORS « Access-Control-Allow-Headers »"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : Jeton « xyz » invalide dans l'en-tête CORS « Access-Control-Allow-Headers »
```

En anglais&nbsp;:

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## Quel est le problème ?

La réponse à la requête {{Glossary("CORS")}} envoyée par le serveur inclut un en-tête {{HTTPHeader("Access-Control-Allow-Headers")}} qui contient au moins un nom d'en-tête invalide.

L'en-tête `Access-Control-Allow-Headers` est envoyé par le serveur en réponse à une {{Glossary("preflight request", "requête préliminaire")}}&nbsp;; il informe le client des [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) autorisés dans les requêtes CORS. Si {{Glossary("user agent", "agent utilisateur")}} client trouve parmi les valeurs séparées par des virgules fournies par l'en-tête un nom d'en-tête qu'il ne reconnaît pas, cette erreur se produit.

C'est un problème qui ne peut probablement être résolu que côté serveur, en modifiant la configuration du serveur pour ne plus envoyer le nom d'en-tête invalide ou inconnu avec l'en-tête `Access-Control-Allow-Headers`. Il peut également être utile de vérifier que {{Glossary("user agent", "agent utilisateur")}} ou la bibliothèque HTTP que vous utilisez côté client est à jour.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
