---
title: manifest
slug: Web/HTML/Element/html/manifest
translation_of: Web/HTML/Element/html/manifest
browser-compat: html.elements.html.manifest
---
{{securecontext_header}}{{Deprecated_Header}}{{Non-standard_Header}}

L'attribut **`manifest`** de l'élément `<html>` indique une URL d'un manifeste de cache d'application à télécharger pendant les premières étapes du chargement de la page.

> **Note :** La mise en cache utilisant un manifeste a été dépréciée. Les <i lang="en">service workers</i> doivent être utilisés à la place.

L'attribut `manifest` a un effet limité aux premières étapes de chargement de la page. Aussi, le modifier en JavaScript avec les interfaces du DOM usuelles n'aura pas d'effet, il faudra à la place utiliser l'interface [`Window.applicationCache`](/fr/docs/Web/API/Window/applicationCache).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Window.applicationCache`](/fr/docs/Web/API/Window/applicationCache)
- [L'API Service Worker](/fr/docs/Web/API/Service_Worker_API)
