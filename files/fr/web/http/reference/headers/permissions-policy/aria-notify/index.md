---
title: "Permissions-Policy : directive aria-notify"
short-title: aria-notify
slug: Web/HTTP/Reference/Headers/Permissions-Policy/aria-notify
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`aria-notify`** contrôle si le document courant est autorisé à utiliser les méthodes {{DOMxRef("Document.ariaNotify()")}} et {{DOMxRef("Element.ariaNotify()")}} pour déclencher des annonces pour les {{Glossary("screen reader")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les annonces créées avec `ariaNotify()` échouent silencieusement (elles ne seront pas envoyées).

## Syntaxe

```http
Permissions-Policy: aria-notify=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `aria-notify` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- Les méthodes API {{DOMxRef("Document.ariaNotify()")}}, {{DOMxRef("Element.ariaNotify()")}}
