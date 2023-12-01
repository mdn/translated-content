---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
---

{{HTTPSidebar}}

Le code de réponse HTTP d'erreur serveur **`501 Not Implemented`** indique que le serveur ne prend pas en charge les fonctionnalités nécessaires pour réaliser la requête.

Une telle réponse peut également contenir un en-tête [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After) indiquant au client le moment auquel revenir pour vérifier si la fonctionnalité est alors prise en charge.

`501` est un code de réponse pertinent lorsque le serveur ne reconnaît pas la méthode utilisée pour la requête et qu'il n'est pas capable de la prendre en charge toute autre ressource. Les seules méthodes qu'un serveur doit nécessairement prendre en charge (et qui ne doivent donc pas renvoyer `501`) sont [`GET`](/fr/docs/Web/HTTP/Methods/GET) et [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD).

Si le serveur connaît la méthode mais qu'il ne la prend pas en charge _intentionnellement_, le code de réponse approprié sera [`405 Method Not Allowed`](/fr/docs/Web/HTTP/Status/405).

> **Note :**
>
> - Une erreur 501 ne peut pas être corrigée côté client (via son navigateur web par exemple), il faut un correctif côté serveur pour régler le problème.
> - Une réponse avec le code 501 est mise en cache par défaut (c'est-à-dire, à moins que les en-têtes relatifs à la mise en cache fournissent d'autres instructions plus précises).

## Statut

```
501 Not Implemented
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
