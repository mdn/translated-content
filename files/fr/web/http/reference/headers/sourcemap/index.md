---
title: En-tête SourceMap
short-title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`SourceMap`** fournit l'emplacement d'une {{Glossary("source map", "carte de source")}} pour la ressource.

L'en-tête HTTP `SourceMap` a la priorité sur une annotation de source (`sourceMappingURL=path-to-map.js.map`), et si les deux sont présents, l'URL de l'en-tête est utilisée pour résoudre le fichier de carte de source.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Directives

- `<url>`
  - : Une URL relative (par rapport à l'URL de la requête) ou absolue pointant vers un fichier de carte de source.

## Exemples

### Lier à une correspondance de source en utilisant l'en-tête `SourceMap`

La réponse suivante contient un chemin absolu dans l'en-tête `SourceMap`.

```http
HTTP/1.1 200 OK
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Les outils de développement utilisent la correspondance de source pour reconstruire la source originale à partir du JavaScript optimisé retourné dans la réponse, permettant aux développeur·euse·s de déboguer le code original plutôt que le format qui a été optimisé pour l'envoi.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée du glossaire {{Glossary("Source map", "Carte de source")}}
- [Outils de développement Firefox&nbsp;: utiliser une carte de source <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Qu'est-ce qu'une carte de source&nbsp;? <sup>(angl.)</sup>](https://web.dev/articles/source-maps) sur web.dev (2023)
