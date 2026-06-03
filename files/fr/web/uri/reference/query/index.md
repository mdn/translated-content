---
title: Requête d'une URI
short-title: Requête
slug: Web/URI/Reference/Query
l10n:
  sourceCommit: 6f149dd37e04fa257d6472e7ee1c5ee5545a405b
---

La **requête** d'une URI est la section qui vient après le [chemin](/fr/docs/Web/URI/Reference/Path).
Elle contient des données non hiérarchiques permettant d'identifier une ressource dans le cadre du [schéma](/fr/docs/Web/URI/Reference/Schemes) et de l'autorité de nommage de l'URI, en complément des données du composant chemin.

## Syntaxe

```url
?query
```

- `query`
  - : Une séquence de n'importe quels caractères, à l'exception du caractère `#` qui débute le [fragment](/fr/docs/Web/URI/Reference/Fragment).
    Le format exact de la requête est défini par la ressource elle-même.

## Description

Considérez l'URL suivante&nbsp;:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`?key1=value1&key2=value2` est le composant requête contenant des paramètres à traiter par le serveur web.
Les paramètres spécifiques de l'exemple sont une liste de paires clé/valeur séparées par le symbole `&`.
Les serveurs web peuvent utiliser ces paramètres pour modifier les réponses, comme appliquer des filtres, effectuer des recherches ou trier les résultats, bien que cela dépende de l'implémentation.

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
