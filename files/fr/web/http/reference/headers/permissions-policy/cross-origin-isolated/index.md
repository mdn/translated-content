---
title: "Permissions-Policy : directive cross-origin-isolated"
short-title: cross-origin-isolated
slug: Web/HTTP/Reference/Headers/Permissions-Policy/cross-origin-isolated
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`cross-origin-isolated`** contrôle si le document courant est autorisé à utiliser des API nécessitant {{DOMxRef("Window.crossOriginIsolated", "l'isolation inter-origines", "", "nocode")}}.

En particulier, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les propriétés {{DOMxRef("Window.crossOriginIsolated")}} et {{DOMxRef("WorkerGlobalScope.crossOriginIsolated")}} retournent toujours `false`, et le document ne bénéficiera pas de restrictions réduites sur l'utilisation de certaines API qui ne sont accordées qu'aux documents isolés entre les origines.
Cela est vrai indépendamment des en-têtes {{HTTPHeader("Cross-Origin-Embedder-Policy")}} et {{HTTPHeader("Cross-Origin-Opener-Policy")}}, et que le document aurait été isolé entre les origines si la permission avait été accordée.

Les API qui nécessitent cette permission incluent l'utilisation des objets {{JSxRef("SharedArrayBuffer")}} et {{DOMxRef("Performance.now()")}} avec des minuteries non limitées — voir {{DOMxRef("Window.crossOriginIsolated")}} pour des informations sur d'autres API restreintes.

La permission peut être utilisée pour maintenir des restrictions sur l'accès aux API sensibles à moins qu'elles ne soient réellement nécessaires pour un document isolé entre les origines.
Notez que si la fonctionnalité n'est pas autorisée, mais qu'elle aurait autrement été isolée entre les origines, alors à tous égards, elle reste isolée entre les origines.
Par exemple, elle ne partagera un {{Glossary("Browsing context", "groupe de contextes de navigation")}} qu'avec des documents de la même origine.

## Syntaxe

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'une ou plusieurs origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité.
    Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `cross-origin-isolated` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
