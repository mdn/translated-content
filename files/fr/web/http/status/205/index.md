---
title: 205 Reset Content
slug: Web/HTTP/Status/205
translation_of: Web/HTTP/Status/205
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`205 Reset Content`** indique au client de réinitialiser la vue du document, par exemple afin de nettoyer le contenu d'un formulaire, réinitialiser l'état d'un canevas ([`<canvas>`](/fr/docs/Web/HTML/Element/canvas)), ou pour mettre à jour l'interface utilisateur.

## Statut

```
205 Reset Content
```

## Spécifications

| Spécification                                                | Titre                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| [RFC 7231, section 6.3.6: 205 Reset Content](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6) | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Notes de compatibilité

Le comportement des navigateurs varie selon que cette réponse inclut incorrectement un corps pour les connexions persistantes. Voir [`204 No Content`](/fr/docs/Web/HTTP/Status/204) pour plus de détails.

## Voir aussi

- [`204 No Content`](/fr/docs/Web/HTTP/Status/204)
