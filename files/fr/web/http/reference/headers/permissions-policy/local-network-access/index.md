---
title: "Permissions-Policy : directive local-network-access"
short-title: local-network-access
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive `local-network-access` contrôle si le document actuel est autorisé à effectuer des requêtes réseau vers des adresses locales et de bouclage. Cette directive de politique est un alias pour les directives plus récentes {{HTTPHeader("Permissions-Policy/local-network", "local-network")}} et {{HTTPHeader("Permissions-Policy/loopback-network", "loopback-network")}}.

- Une adresse locale n'est accessible que sur le réseau local&nbsp;; sa cible varie selon les réseaux. Par exemple, `192.168.0.1`.
- Une adresse de bouclage n'est accessible que sur l'hôte local&nbsp;; sa cible varie selon chaque appareil. Par exemple, `127.0.0.1`, généralement connue sous le nom de `localhost`.

Spécifiquement, lorsque une politique définie bloque l'utilisation de cette fonctionnalité, les requêtes vers des adresses locales et de bouclage échouent toujours. Si vous souhaitez un contrôle plus granulaire sur les adresses locales et de bouclage, vous devez utiliser les directives plus récentes mentionnées ci-dessus.

Voir [Accès au réseau local > L'alias `local-network-access`](/fr/docs/Web/Security/Defenses/Local_network_access#lalias_local-network-access) pour plus de détails.

## Syntaxe

```http
Permissions-Policy: local-network-access=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Politique par défaut

La liste d'autorisations par défaut pour `local-network-access` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Accès au réseau local](/fr/docs/Web/Security/Defenses/Local_network_access)
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
