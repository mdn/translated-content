---
title: "Permissions-Policy : directive browsing-topics"
short-title: browsing-topics
slug: Web/HTTP/Reference/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Non-standard_Header}}{{Deprecated_Header}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`browsing-topics`** contrôle l'accès à [l'API Topics](/fr/docs/Web/API/Topics_API).

Lorsqu'une politique interdit spécifiquement l'utilisation de l'API Topics, toute tentative d'appel de la méthode {{DOMxRef("Document.browsingTopics()")}} ou d'envoi d'une requête avec un en-tête {{HTTPHeader("Sec-Browsing-Topics")}} échouera avec une `NotAllowedError` de l'objet {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `browsing-topics` est `*`.

## Spécifications

Cette fonctionnalité ne fait partie d'aucun standard officiel, bien qu'elle soit définie dans le [brouillon de proposition non officiel de l'API Topics <sup>(angl.)</sup>](https://patcg-individual-drafts.github.io/topics/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Topics](/fr/docs/Web/API/Topics_API)
- La méthode API {{DOMxRef("Document.browsingTopics()")}}
