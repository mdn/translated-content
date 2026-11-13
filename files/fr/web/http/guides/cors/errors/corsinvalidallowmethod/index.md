---
title: "Raison : Jeton « xyz » invalide dans l'en-tête CORS « Access-Control-Allow-Methods »"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : Jeton « xyz » invalide dans l'en-tête CORS « Access-Control-Allow-Methods »
```

En anglais&nbsp;:

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## Quel est le problème ?

La réponse à la {{Glossary("CORS")}} requête envoyée par le serveur inclut un en-tête {{HTTPHeader("Access-Control-Allow-Methods")}} qui contient au moins un nom de méthode invalide.

L'en-tête `Access-Control-Allow-Methods` est envoyé par le serveur pour informer le client des [méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods) qu'il prend en charge pour les requêtes CORS. La valeur de cet en-tête est une chaîne de caractères de noms de méthodes HTTP séparés par des virgules, tels que {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, ou {{HTTPMethod("HEAD")}}. Si l'une des valeurs définies n'est pas reconnue par {{Glossary("user agent", "l'agent utilisateur")}}, cette erreur se produit.

C'est un problème qui ne peut probablement être résolu que côté serveur, en modifiant la configuration du serveur pour ne plus envoyer le nom de méthode invalide ou inconnu avec l'en-tête `Access-Control-Allow-Methods`. Il peut également être utile de vérifier que l'agent utilisateur ou la bibliothèque HTTP que vous utilisez côté client est à jour.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
