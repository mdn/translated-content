---
title: rel="compression-dictionary"
slug: Web/HTML/Reference/Attributes/rel/compression-dictionary
l10n:
  sourceCommit: 5d5ea57d7c00fac731b5ed6df9a2ccc4b7d76cb9
---

{{SeeCompatTable}}

Le mot-clé **`compression-dictionary`** pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément HTML {{HTMLElement("link")}} est un lien que les navigateurs peuvent utiliser pour télécharger un {{Glossary("Compression dictionary transport", "dictionnaire de compression")}} qui peut être utilisé pour compresser les téléchargements futurs des ressources de ce site, afin que la taille des téléchargements soit plus petite qu'avec une compression standard.

**Note&nbsp;:** si le site web possède un en-tête {{HTTPHeader("Content-Security-Policy")}}, la directive `connect-src` (ou `default-src` si `connect-src` n'est pas définie) doit autoriser l'emplacement de la ressource du dictionnaire afin d'éviter que la requête ne soit bloquée.

Voir le [guide sur le dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) pour plus d'informations.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur le dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
