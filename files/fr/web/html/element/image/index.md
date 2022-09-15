---
title: <image>
slug: Web/HTML/Element/image
tags:
  - Element
  - HTML
  - Non-standard
  - Obsolete
  - Reference
translation_of: Web/HTML/Element/image
---
{{HTMLRef}}{{deprecated_header}}{{non-standard_header}}

L'élément HTML **`<image>`** est un élément obsolète, remplacé depuis longtemps par l'élément standard {{HTMLElement("img")}}.

> **Attention :** Si vous souhaitez afficher des images, c'est l'élément {{HTMLElement("img")}} qui doit être utilisé.

Bien que les navigateurs essaient de convertir cet élément {{HTMLElement("img")}}, cela peut avoir des résultats incertains voire inattendus.

## Spécifications

Cet élément ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

La plupart du temps, les navigateurs essaieront de convertir cet élément en un élément `<img>` si l'attribut {{htmlattrxref("src", "img")}} est utilisé. Créer un élément `<image>` sans attribut entraînera la création d'un objet `HTMLElement` avec le nom "image". Si l'élément est créé avec un attribut `src`, ce sera un objet `HTMLImageElement` qui sera créé et son nom sera "img".

{{Compat("html.elements.image")}}

## Voir aussi

- L'élément {{HTMLElement("img")}} qui doit être utilisé afin d'afficher une image dans un document.
- L'élément {{HTMLElement("picture")}} qui permet de sélectionner parmi plusieurs images en fonction de requête média afin d'avoir des images _responsive_.
