---
title: "Raison : Plusieurs en-têtes CORS « Access-Control-Allow-Origin » ne sont pas autorisés"
slug: Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : Plusieurs en-têtes CORS « Access-Control-Allow-Origin » ne sont pas autorisés
```

En anglais&nbsp;:

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## Quel est le problème ?

Plus d'un en-tête {{HTTPHeader("Access-Control-Allow-Origin")}} a été envoyé par le serveur. Cela n'est pas autorisé.

Si vous avez accès au serveur, vous pouvez modifier votre implémentation pour retourner une origine dans l'en-tête `Access-Control-Allow-Origin`. Vous ne pouvez pas retourner une liste d'origines, car les navigateurs n'acceptent qu'une valeur qui est soit une seule origine, soit `null`.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Activer CORS&nbsp;: je veux ajouter la prise en charge de CORS à mon serveur](https://enable-cors.org/server.html)
