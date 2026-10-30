---
title: "Raison : Méthode introuvable dans l'en-tête CORS « Access-Control-Allow-Methods »"
slug: Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Raison

```plain
Raison : Méthode introuvable dans l'en-tête CORS « Access-Control-Allow-Methods »
```

En anglais&nbsp;:

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## Quel est le problème ?

La méthode HTTP utilisée par la requête {{Glossary("CORS")}} n'est pas incluse dans la liste des méthodes définies par l'en-tête {{HTTPHeader("Access-Control-Allow-Methods")}} de la réponse. Cet en-tête définit une liste de méthodes HTTP séparées par des virgules qui peuvent être utilisées lors de l'accès à l'URL définie dans la requête avec CORS&nbsp;; si la requête utilise une autre méthode, cette erreur se produit.

Par exemple, si la réponse inclut&nbsp;:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Essayer d'utiliser une requête {{HTTPMethod("PUT")}} entraînera cette erreur.

Assurez-vous que votre code n'utilise que les méthodes HTTP autorisées lors de l'accès au service.

> [!NOTE]
> Si le serveur inclut des noms de méthodes non reconnus ou non définis dans son en-tête `Access-Control-Allow-methods`, une erreur différente se produit&nbsp;: [Raison&nbsp;: Jeton `xyz` invalide dans l'en-tête CORS `Access-Control-Allow-Methods`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod).

Si le serveur n'est pas sous votre contrôle, consultez [Considérations côté client](/fr/docs/Web/HTTP/Guides/CORS/Errors#considérations_côté_client) pour des approches alternatives.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
