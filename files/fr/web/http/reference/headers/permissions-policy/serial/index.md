---
title: "Permissions-Policy : directive serial"
short-title: serial
slug: Web/HTTP/Reference/Headers/Permissions-Policy/serial
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`serial`** contrôle si le document actuel est autorisé à utiliser {{DOMxRef("Web Serial API", "l'API Web Serial", "", "nocode")}} pour communiquer avec des périphériques en série, soit directement connectés avec un port en série, soit avec des périphériques USB ou Bluetooth émulant un port en série.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("Serial.requestPort()")}} et {{DOMxRef("Serial.getPorts()")}} retournent une promesse ({{JSxRef("Promise")}}) qui est rejetée avec une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: serial=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `serial` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
