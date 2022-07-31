---
title: Link
slug: Web/HTTP/Headers/Link
translation_of: Web/HTTP/Headers/Link
tags:
  - Draft
  - HTTP
  - HTTP Header
  - Link
  - NeedsCompatTable
  - NeedsContent
  - NeedsSyntax
  - Reference
browser-compat: http.headers.Link
---
{{HTTPSidebar}}

L'en-tête d'entité HTTP **`Link`** permet de sérialiser un ou plusieurs liens dans un header HTTP. Il est équivalent à l'élément HTML {{HTMLElement("link")}}.

## Syntaxe

```
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : La référence URI doit être indiquée entre `<` et `>`.

### Paramètres

L'en-tête link contient des paramètres séparés par un `;` et sont équivalents aux attributs de l'élément {{HTMLElement("link")}}. 

## Exemples

L'URI (absolue ou relative) doit être déclarée entre `<` et `>` :

```http bon-example
Link: <https://exemple.com>; rel="preconnect"
```

```http mauvais-example
Link: https://mauvais.exemple; rel="preconnect"
```

### Déclarer plusieurs liens

Il est posssible de spécifier plusieurs liens, en les séparant par des virgules :

```
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPStatus(103, "103 Early Hints")}}
- {{HTMLElement("link")}}
