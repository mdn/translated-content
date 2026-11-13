---
title: "Permissions-Policy : directive idle-detection"
short-title: idle-detection
slug: Web/HTTP/Reference/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`idle-detection`** contrôle si le document actuel est autorisé à utiliser {{DOMxRef("Idle Detection API", "l'API de détection d'inactivité", "", "nocode")}} pour détecter lorsque les utilisateur·ice·s interagissent avec leurs appareils, par exemple pour signaler un statut «&nbsp;disponible&nbsp;»/«&nbsp;absent&nbsp;» dans les applications de chat.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("IdleDetector.start()")}} retournent une promesse ({{JSxRef("Promise")}}) qui sera rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `idle-detection` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
