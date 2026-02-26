---
title: Chemin d'une URI
short-title: Chemin
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

Le **chemin** d'une URI est la section qui vient après l'[autorité](/fr/docs/Web/URI/Reference/Authority).
Il contient des données, généralement organisées de façon hiérarchique, pour identifier une ressource dans le cadre du [schéma](/fr/docs/Web/URI/Reference/Schemes) et de l'autorité de nommage de l'URI.

## Syntaxe

```url
http://example.com:80<path>
urn:<path>
```

Le chemin peut contenir presque tous les caractères, sauf `?` et `#` (qui débutent respectivement la [requête](/fr/docs/Web/URI/Reference/Query) et le [fragment](/fr/docs/Web/URI/Reference/Fragment)), ainsi que d'autres caractères réservés par le schéma URI. Certains schémas (appelés _schémas hiérarchiques_) analysent le chemin comme une séquence de segments séparés par des barres obliques (`/`)&nbsp;; d'autres le considèrent comme une chaîne opaque unique.

## Description

Le chemin suit l'autorité et se termine au premier point d'interrogation (`?`), dièse (`#`) ou à la fin de l'URI.
Dans les deux URIs suivantes&nbsp;:

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` est le chemin de l'[URN](/fr/docs/Web/URI/Reference/Schemes/urn). `/images/animated/ayse.gif` est le chemin de l'URI `https`.

Chaque URI possède un composant chemin, ce qui signifie que les chemins dans les exemples suivants sont une barre oblique (`/`) dans la première URL et un composant chemin vide dans la seconde&nbsp;:

```url
https://example.com/
https://example.com
```

Les navigateurs, y compris l'API web {{DOMxRef("URL")}}, normalisent les chemins vides en `/`.

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
