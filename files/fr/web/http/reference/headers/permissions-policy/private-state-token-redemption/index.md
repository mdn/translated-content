---
title: "Permissions-Policy : directive private-state-token-redemption"
short-title: private-state-token-redemption
slug: Web/HTTP/Reference/Headers/Permissions-Policy/private-state-token-redemption
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`private-state-token-redemption`** contrôle l'utilisation des opérations `token-redemption` et `send-redemption-record` de [jeton d'état privé](/fr/docs/Web/API/Private_State_Token_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les opérations [d'échange de jeton](/fr/docs/Web/API/Private_State_Token_API/Using#échanger_un_jeton_par_le_biais_de_votre_serveur) et [d'envoi de registre d'échange](/fr/docs/Web/API/Private_State_Token_API/Using#utilisation_du_registre_déchange_2) échoueront.

## Syntaxe

```http
Permissions-Policy: private-state-token-redemption=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `private-state-token-redemption` est `*`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
