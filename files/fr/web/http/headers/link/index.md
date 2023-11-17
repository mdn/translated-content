---
title: Link
slug: Web/HTTP/Headers/Link
l10n:
  sourceCommit: 4c8cc837352076a0d2973e3f2b637c5f6b4452e5
---

{{HTTPSidebar}}

L'en-tête d'entité HTTP **`Link`** permet de sérialiser un ou plusieurs liens dans un en-tête HTTP. Il est sémantiquement équivalent à l'élément HTML [`<link>`](/fr/docs/Web/HTML/Element/link).

## Syntaxe

```
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : L'URI de référence qui doit être indiquée entre `<` et `>`.

### Paramètres

L'en-tête `Link` contient des paramètres séparés par un `;` et sont équivalents aux attributs de l'élément [`<link>`](/fr/docs/Web/HTML/Element/link).

## Exemples

L'URI (absolue ou relative) doit être déclarée entre `<` et `>`&nbsp;:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### Déclarer plusieurs liens

Il est possible de spécifier plusieurs liens, en les séparant par des virgules&nbsp;:

```
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`103 Early Hints`](/fr/docs/Web/HTTP/Status/103)
- [`<link>`](/fr/docs/Web/HTML/Element/link)
