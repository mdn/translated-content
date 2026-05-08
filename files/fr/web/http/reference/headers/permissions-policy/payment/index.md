---
title: "Permissions-Policy : directive payment"
short-title: payment
slug: Web/HTTP/Reference/Headers/Permissions-Policy/payment
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`payment`** contrôle si le document actuel est autorisé à utiliser [l'API Payment Request](/fr/docs/Web/API/Payment_Request_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation, les appels au constructeur {{DOMxRef("PaymentRequest.PaymentRequest", "PaymentRequest()")}} lèvent une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `payment` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
